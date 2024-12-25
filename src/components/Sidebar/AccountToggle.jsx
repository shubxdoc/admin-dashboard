import { FiChevronDown, FiChevronUp } from "react-icons/fi";

const AccountToggle = () => {
  return (
    <div className="pb-4 mt-2 mb-4 border-b border-stone-300 ">
      <button className="flex p-0.5 hover:bg-stone-200 rounded transition-colors relative gap-2 w-full items-center">
        <img
          src="https://api.dicebear.com/9.x/adventurer/svg?seed=Jocelyn&backgroundColor=b6e3f4"
          alt="avatar"
          className="rounded shadow size-8 shrink-0 bg-violet-500"
        />
        <div className="text-start">
          <span className="block text-sm font-semibold capitalize">
            shubxdoc
          </span>
          <span className="block text-xs text-gray-500">shubdev@devs</span>
        </div>

        <FiChevronDown className="absolute right-2 top-1/2 translate-y-[calc(-50%+4px)] text-xs" />
        <FiChevronUp className="absolute right-2 top-1/2 translate-y-[calc(-50%-4px)] text-xs" />
      </button>
    </div>
  );
};

export default AccountToggle;
