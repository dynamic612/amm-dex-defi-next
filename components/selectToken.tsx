import {Select, SelectItem} from "@nextui-org/react";
import {TokenIcons} from "../config/icons";
import {tokens} from "../config/tokenData";

export default function SelectTokens() {
  return (
    <Select
      className="max-w-xs"
      defaultSelectedKeys={["ETH"]}
      label="Selected currency"
      placeholder="Select a crypto"
      startContent={<TokenIcons />}
    >
      {tokens.map((token) => (
        <SelectItem key={token.key}>{token.label}</SelectItem>
      ))}
    </Select>
  );
}
