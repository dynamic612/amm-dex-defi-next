import {RadioGroup, Radio} from "@nextui-org/react";

export default function FeeSelection() {
  return (
    <RadioGroup
      label="Select fee"
      color="success"
      className="flex flex-row"
    >
      <Radio value="buenos-aires" description="Best for very stable pairs">
        0.01%
      </Radio>
      <Radio value="canberra" description="Best for stable pairs">
        0.05%
      </Radio>
      <Radio value="london" description="Best for most pairs">
        0.30%
      </Radio>
      <Radio value="tokyo" description="Best for exotic pairs">
        1.0%
      </Radio>
    </RadioGroup>
  );
}