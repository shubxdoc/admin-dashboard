import { Command } from "cmdk";
import { useEffect, useState } from "react";
import { FaQrcode } from "react-icons/fa6";
import { FiEye, FiLogOut, FiPhone, FiPlus } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

export const CommandMenu = ({ open, setOpen }) => {
  const [value, setValue] = useState("");

  // Toggle the menu when ⌘K is pressed
  useEffect(() => {
    const down = (e) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const navigate = useNavigate();

  return (
    <Command.Dialog
      open={open}
      onOpenChange={setOpen}
      label="Global Command Menu"
      className="fixed inset-0 bg-stone-950/50"
      onClick={() => setOpen(false)}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg mx-auto mt-12 overflow-hidden border rounded-lg shadow-xl bg-slate-50 border-stone-300"
      >
        <Command.Input
          value={value}
          onValueChange={setValue}
          placeholder="What do you need?"
          className="relative w-full p-3 text-lg border-b outline-none border-stone-300 placeholder:text-stone-400"
        />
        <Command.List className="p-3">
          <Command.Empty>
            No results found for{" "}
            <span className="text-violet-500">"{value}"</span>
          </Command.Empty>
          <Command.Group heading="Team" className="mb-3 text-sm text-stone-400">
            <Command.Item>
              <span className="flex items-center gap-2 p-2 text-sm transition-colors rounded cursor-pointer text-stone-950 hover:bg-stone-200">
                <FiPlus />
                Invite Members
              </span>
            </Command.Item>
            <Command.Item>
              <span className="flex items-center gap-2 p-2 text-sm transition-colors rounded cursor-pointer text-stone-950 hover:bg-stone-200">
                <FiEye />
                See Org Chart
              </span>
            </Command.Item>
          </Command.Group>

          <Command.Group
            heading="Integrations"
            className="mb-3 text-sm text-stone-400"
          >
            <Command.Item>
              <span className="flex items-center gap-2 p-2 text-sm transition-colors rounded cursor-pointer text-stone-950 hover:bg-stone-200">
                <FiPhone />
                Contact Support
              </span>
            </Command.Item>
            <Command.Item onSelect={() => navigate("/faq")}>
              <span className="flex items-center gap-2 p-2 text-sm transition-colors rounded cursor-pointer text-stone-950 hover:bg-stone-200">
                <FaQrcode />
                FAQ
              </span>
            </Command.Item>
          </Command.Group>

          <Command.Item>
            <span className="flex items-center gap-2 p-2 text-sm transition-colors rounded cursor-pointer bg-stone-950 text-stone-100 hover:bg-stone-700">
              <FiLogOut />
              Sign Out
            </span>
          </Command.Item>
        </Command.List>
      </div>
    </Command.Dialog>
  );
};
