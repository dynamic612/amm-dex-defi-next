import { title } from "@/components/primitives";
import { Button } from "@nextui-org/button";
import PoolModal from "@/components/poolModal";

export default function PricingPage() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-row justify-between place-items-end">
        <p className={"flex justify-start text-2xl "}>Positions</p>
        <PoolModal />
      </div>
      <div className="border rounded-xl h-32">
        Your position
      </div>
    </div>
  );
}
