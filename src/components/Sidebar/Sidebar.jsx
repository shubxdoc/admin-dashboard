import AccountToggle from "./AccountToggle";
import Search from "./Search";
import SidebarLinks from "./SidebarLinks";
import Plan from "./Plan";

const Sidebar = () => {
  return (
    <div className="hidden md:block">
      <div className="sticky overflow-y-auto top-4 h-[calc(100vh-32px-48px)]">
        <AccountToggle />
        <Search />
        <SidebarLinks />
      </div>

      <Plan />
    </div>
  );
};

export default Sidebar;
