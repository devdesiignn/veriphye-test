import { Input } from "@/components/ui/input";

type SearchBarProps = {
  inputValue: string;
  onInputChange: (value: string) => void;
  onSubmit?: () => void;
};

function SearchBar({ inputValue, onInputChange, onSubmit }: SearchBarProps) {
  return (
    <>
      {/* Search bar */}
      <form className="flex-1" onSubmit={onSubmit}>
        <Input
          placeholder="Search usernames..."
          className="h-10 text-sm"
          value={inputValue}
          onChange={(event) => onInputChange(event.target.value)}
        />
      </form>
    </>
  );
}

export default SearchBar;
