import { title } from "@/components/primitives";
import Swap from "@/components/swap";
import { Button } from "@nextui-org/button";

export default function DocsPage() {
  return (
    <div className="flex flex-col justify-between gap-4">
      <Swap title="Sell" />
      <Swap title="Buy" />
      <Button
        color="primary"
        className="h-16"      
      >
        Swap
      </Button>
    </div>
  );
}
