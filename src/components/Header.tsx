import Github from "@/assets/github.svg";

function Header() {
  return (
    <>
      {/* Header */}
      <h1 className="flex items-center justify-center gap-2">
        <img src={Github} className="w-6 h-6 sm:w-8 sm:h-8 object-cover object-center" />
        <span className="text-xl sm:text-xl font-semibold">Repository Explorer</span>
      </h1>
    </>
  );
}

export default Header;
