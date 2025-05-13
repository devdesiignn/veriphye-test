import { useState } from "react";
import { Loader } from "lucide-react";
import { useQuery } from "@apollo/client";

import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import SearchBar from "@/components/SearchBar";
import FilterSortDropdown from "@/components/Dropdown";
import ToggleView, { type ToggleValue } from "@/components/ToggleView";
import RepositoryInfoCard from "@/components/RepositoryInfoCard";
import DisplayError from "@/components/DisplayError";

import { cn } from "@/lib/utils";
import { GET_USER_REPOS } from "@/graphql/get-user-repos";
import { FILTER_OPTIONS, SORT_OPTIONS } from "@/data/constants";

function App() {
  const [username, setUsername] = useState("");
  const [view, setView] = useState<ToggleValue>("list");
  const [sort, setSort] = useState("");
  const [filter, setFilter] = useState("");

  const { loading, error, data } = useQuery(GET_USER_REPOS, {
    variables: { username, first: 20 },
    skip: !username, // dont fetch if there is no username
  });

  /*

  Cases:

  - No filter or Sort
  - Only fIlter
  - Only Sort
  _ Both Sort and Filter

      Only apply filters on repositories if there is a filter selected,
      then pass the filtered repositories through the sorting, if there is a sort is selected
      apply the sort then the sorted repositories are rendered

      if there is no filter selected,
      the filteredRepositories will be the same as the unfiltered,
      then passed to the sorting function,

      if no sort is selected,
      the sortedRepositories will be in the same order returned by the api request

  */

  const repositories: Repository[] = data ? data.user.repositories.nodes : [];
  const noRepositories = username && !error && data?.user && repositories.length === 0;

  const filteredRepositories = filter
    ? repositories.filter((repository: Repository) => repository.primaryLanguage?.name === filter)
    : repositories;

  const sortedRepositories = [...filteredRepositories].sort((a, b) => {
    switch (sort) {
      case "stars": // sort by stars in descending order
        return b.stargazerCount - a.stargazerCount;
      case "updatedAt": // sort by Date Updated in descending order
        return new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime();
      default:
        return 0;
    }
  });

  const noMatchingRepositories =
    repositories.length > 0 && filter && filteredRepositories.length === 0;

  const handleClear = () => {
    // reset all filter and sort
    setFilter("");
    setSort("");
  };
  return (
    <main className="border px-4 sm:px-6 max-w-5xl mx-auto py-8 min-h-screen">
      <Header />

      <div className="w-full max-w-3xl mx-auto my-6 sm:my-8 flex gap-4 sm:gap-2 flex-col sm:flex-row">
        <SearchBar onSubmit={setUsername} />

        <div className="flex gap-2 flex-wrap sm:flex-nowrap">
          {/* Filter */}
          <FilterSortDropdown
            placeholder={"Filter"}
            label={"Select Language"}
            options={FILTER_OPTIONS}
            dropdownValue={filter}
            onDropdownValueChange={setFilter}
          />

          {/* Sort */}
          <FilterSortDropdown
            placeholder={"Sort"}
            label={"Select Order"}
            options={SORT_OPTIONS}
            dropdownValue={sort}
            onDropdownValueChange={setSort}
          />

          <Button className="max-sm:flex-1 shadow-xs h-10" onClick={handleClear}>
            Clear Filters
          </Button>
        </div>
      </div>

      <section className="h-full">
        <div className="justify-end mb-4 hidden md:flex">
          <ToggleView toggleValue={view} onToggleValueChange={setView} />
        </div>

        {loading && <Loader className="w-6 h-6 text-slate-700 animate-spin duration-500 mx-auto" />}

        {noRepositories && (
          <p className="text-slate-500 text-center mt-20">This user has no repositories.</p>
        )}

        {noMatchingRepositories && (
          <p className="text-slate-500 text-center mt-20">
            No repositories found with the language: <span className="font-medium">{filter}</span>.
          </p>
        )}

        <DisplayError error={error} />

        {/* Repositories Card Container */}
        <div
          className={cn(
            "gap-2",
            view === "list" ? "flex flex-col" : "grid grid-cols-1 sm:grid-cols-2"
          )}
        >
          {sortedRepositories.map((repositoryInfo, index) => (
            <RepositoryInfoCard
              key={`${repositoryInfo.name}: ${repositoryInfo.stargazerCount + index}`}
              {...repositoryInfo}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
