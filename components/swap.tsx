'use client';
import { Input } from "@nextui-org/input";
import SelectTokens from "./selectToken";
import { Select } from "@nextui-org/react";

export default function Swap(props) {

    return(
        <div className="border rounded-2xl p-3 ">
            <p className="flex justify-start">
                {props.title}
            </p>
            <div className="flex flex-row items-center gap-8">
                <Input
                variant="flat"
                type="number"
                size="lg"
                ></Input>
                <SelectTokens />
            </div>
        </div>
    )
}