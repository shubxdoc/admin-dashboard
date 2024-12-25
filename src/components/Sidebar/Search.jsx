import { useState } from "react";
import { FiCommand } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";
import { CommandMenu } from "./CommandMenu";

const Search = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="relative flex items-center p-2 mb-4 text-sm rounded bg-stone-200">
        <IoSearch className="mr-2" />
        <input
          onFocus={(e) => {
            e.target.blur();
            setOpen(true);
          }}
          type="text"
          placeholder="Search"
          className="w-full bg-transparent outline-none placeholder:text-stone-400"
        />
        <span className="p-1 text-xs flex gap-0.5 items-center shadow bg-stone-50 absolute right-1.5 top-1/2 -translate-y-1/2">
          <FiCommand />K
        </span>
      </div>

      <CommandMenu open={open} setOpen={setOpen} />
    </>
  );
};

export default Search;
