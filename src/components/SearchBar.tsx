import { useState } from "react";
import { Input } from "@/components/ui/input";

type SearchBarProps = {
  onSubmit: (value: string) => void;
};

function SearchBar({ onSubmit }: SearchBarProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  return (
    <>
      {/* Search bar */}

      <form className="flex-1" onSubmit={handleSubmit}>
        <Input
          placeholder="Search usernames..."
          className="h-10 text-sm"
          value={inputValue}
          onChange={(event) => setInputValue(event.target.value)}
        />
      </form>
    </>
  );
}

export default SearchBar;
