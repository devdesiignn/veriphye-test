import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Option = {
  label: string;
  value: string;
};

type DropdownProps = {
  placeholder: string;
  label: string;
  options: Option[];
  onDropdownValueChange?: (value: string) => void;
  dropdownValue?: string;
};

function FilterSortDropdown({
  placeholder,
  label,
  options,
  dropdownValue,
  onDropdownValueChange,
}: DropdownProps) {
  return (
    <Select
      onValueChange={(value) => {
        if (onDropdownValueChange && value) onDropdownValueChange(value);
      }}
      value={dropdownValue}
    >
      <SelectTrigger className="max-sm:flex-1 !h-10">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent className="w-[200px]">
        <SelectGroup>
          <SelectLabel className="text-xs font-medium text-slate-700">{label}</SelectLabel>

          {options.map((option) => (
            <SelectItem value={option.value} key={`${option.label}: ${option.label}`}>
              {option.label}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export default FilterSortDropdown;
