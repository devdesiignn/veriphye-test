import { LayoutGrid, LayoutList } from "lucide-react";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { cn } from "@/lib/utils";

export type ToggleValue = "list" | "grid";

type ToggleViewProps = {
  toggleValue: ToggleValue;
  onToggleValueChange: (toggleValue: ToggleValue) => void;
};

function ToggleView({ toggleValue, onToggleValueChange }: ToggleViewProps) {
  return (
    <ToggleGroup
      type="single"
      className="flex space-x-1 bg-slate-100 text-slate-700"
      value={toggleValue}
      onValueChange={(value) => {
        if (value) onToggleValueChange(value as ToggleValue);
      }}
    >
      <ToggleGroupItem
        value="list"
        className={cn(
          "px-4 py-2 rounded-md cursor-pointer",

          toggleValue === "list" && "!bg-slate-600 !text-white hover:!bg-slate-600 hover:!text-white"
        )}
      >
        <LayoutList className="!w-5 !h-5" />
      </ToggleGroupItem>

      <ToggleGroupItem
        value="grid"
        className={cn(
          "px-4 py-2 rounded-md cursor-pointer",

          toggleValue === "grid" && "!bg-slate-600 !text-white hover:!bg-slate-600 hover:!text-white"
        )}
      >
        <LayoutGrid className="!w-5 !h-5" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}

export default ToggleView;
