const axios = require('axios'); // For making HTTP requests
const { kurtosis } = require('simple-statistics'); // For calculating kurtosis
const nbaApi = require('nba-api'); // Assuming a similar NBA API library exists

// Create an Axios instance with retry strategy
const axiosInstance = axios.create({
    baseURL: 'https://stats.nba.com/',
    timeout: 90000,
});

// Retry logic for Axios
axiosInstance.interceptors.response.use(null, async (error) => {
    const { config } = error;
    if (!config || !config.__retryCount) {
        config.__retryCount = 0;
    }
    if (config.__retryCount >= 10) {
        return Promise.reject(error);
    }
    config.__retryCount += 1;
    await new Promise((resolve) => setTimeout(resolve, 300)); // Backoff factor
    return axiosInstance(config);
});

// Function to fetch team info
async function fetchTeamInfo(teamId) {
    try {
        const response = await axiosInstance.get(`teams/${teamId}/`);
        return response.data; // Assuming the response has the required data structure
    } catch (error) {
        console.error(`Failed to fetch data for team ${teamId}: ${error}`);
        return null;
    }
}

// Main function to gather team statistics
async function main() {
    const teams = await nbaApi.getTeams(); // Assuming this returns team data

    let allTeamData = [];

    for (const team of teams) {
        const teamData = await fetchTeamInfo(team.id);
        if (teamData) {
            allTeamData.push({
                ...teamData,
                Season: '2023-24',
            });
        } else {
            console.log(`Skipping team ${team.full_name} due to repeated failures.`);
        }
    }

    // Process statistics if required columns are present
    if (allTeamData.length > 0 && allTeamData[0].Wins !== undefined && allTeamData[0].Losses !== undefined && allTeamData[0].PCT !== undefined) {
        allTeamData.forEach(team => {
            team.GP = team.Wins + team.Losses;
            team.WinPercentage = (team.PCT * 100).toFixed(2);
        });

        const winsArray = allTeamData.map(team => team.Wins);
        
        const meanWins = parseFloat((winsArray.reduce((a, b) => a + b, 0) / winsArray.length).toFixed(2));
        const medianWins = parseFloat(winsArray.sort((a, b) => a - b)[Math.floor(winsArray.length / 2)].toFixed(2));
        const varianceWins = parseFloat((winsArray.reduce((a, b) => a + Math.pow(b - meanWins, 2), 0) / winsArray.length).toFixed(2));
        const stdDevWins = parseFloat(Math.sqrt(varianceWins).toFixed(2));
        const kurtosisWins = parseFloat(kurtosis(winsArray).toFixed(2));

        const teamStats = {
            "Mean Wins": meanWins,
            "Median Wins": medianWins,
            "Variance Wins": varianceWins,
            "Standard Deviation Wins": stdDevWins,
            "Kurtosis Wins": kurtosisWins,
        };

        console.log("Overall Team Statistics for Wins (rounded to 2 decimals):");
        for (const [stat, value] of Object.entries(teamStats)) {
            console.log(`${stat}: ${value}`);
        }

        console.log("\nTeam Statistics Summary:");
        
        allTeamData.forEach(team => {
            console.log({
                TeamName: team.full_name,
                W: team.Wins,
                L: team.Losses,
                GP: team.GP,
                WinPercentage: team.WinPercentage,
                Rank: null // Placeholder for rank calculation
            });
        });

        // Sort teams by Win Percentage
        const sortedTeams = allTeamData.sort((a, b) => b.WinPercentage - a.WinPercentage);

        console.log("\nTop Teams by Win Percentage:");
        sortedTeams.forEach(team => {
            console.log({
                TeamName: team.full_name,
                WinPercentage: team.WinPercentage,
                Rank: null // Placeholder for rank calculation
            });
        });
    } else {
        console.log("Missing required columns 'Wins', 'Losses', or 'PCT' in the data.");
    }
}

// Execute main function
main();