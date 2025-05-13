import { useState } from "react";

import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import FilterSortDropdown from "@/components/Dropdown";
import ToggleView, { type ToggleValue } from "@/components/ToggleView";
import RepositoryInfoCard from "@/components/RepositoryInfoCard";

import { cn } from "@/lib/utils";

const mockRepositories = [
  {
    name: "Awesome Project",
    url: "https://github.com/username/awesome-project",
    description: "A short description of the Awesome Project.",
    stargazerCount: 245,
    forkCount: 56,
    updatedAt: "2025-05-09T10:00:00Z",
    primaryLanguage: "JavaScript",
  },
  {
    name: "Super Cool App",
    url: "https://github.com/username/super-cool-app",
    description: "An app that does amazing things!",
    stargazerCount: 512,
    forkCount: 124,
    updatedAt: "2025-05-10T15:30:00Z",
    primaryLanguage: "Python",
  },
];

function App() {
  const [username, setUsername] = useState("");
  const [view, setView] = useState<ToggleValue>("list");

  return (
    <main className="border px-4 sm:px-6 max-w-5xl mx-auto py-8 min-h-screen">
      <Header />

      <div className="w-full max-w-3xl mx-auto my-6 sm:my-8 flex gap-4 sm:gap-2 flex-col sm:flex-row">
        <SearchBar inputValue={username} onInputChange={setUsername} />

        <div className="flex gap-2 flex-wrap sm:flex-nowrap">
          {/* Filter */}
          <FilterSortDropdown placeholder={"Language"} label={"Select Language"} options={[]} />

          {/* Sort */}
          <FilterSortDropdown placeholder={"Sort"} label={"Select Order"} options={[]} />

          <Button className="max-sm:flex-1 shadow-xs h-10">Clear Filters</Button>
        </div>
      </div>

      <section className="h-full">
        <div className="justify-end mb-4 hidden md:flex">
          <ToggleView toggleValue={view} onToggleValueChange={setView} />
        </div>

        {/* Repositories Card Container */}
        <div
          className={cn(
            "gap-2",
            view === "list" ? "flex flex-col" : "grid grid-cols-1 sm:grid-cols-2"
          )}
        >
          {mockRepositories.map((repositoryInfo) => (
            <RepositoryInfoCard
              {...repositoryInfo}
              key={`${repositoryInfo.name}: ${repositoryInfo.stargazerCount}`}
            />
          ))}
        </div>

        <aside className="mt-6 text-sm text-blue-600 text-center underline font-medium">
          Load More
        </aside>
      </section>
    </main>
  );
}

export default App;
