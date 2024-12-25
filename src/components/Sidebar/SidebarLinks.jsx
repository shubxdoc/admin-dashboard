import {
  FiDollarSign,
  FiHome,
  FiLink,
  FiPaperclip,
  FiUsers,
} from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const SidebarLinks = () => {
  const location = useLocation();

  return (
    <div className="space-y-1">
      <Link to="/">
        <Route
          Icon={FiHome}
          selected={location.pathname === "/"}
          title="Dashboard"
        />
      </Link>
      <Link to="/users">
        <Route
          Icon={FiUsers}
          selected={location.pathname === "/users"}
          title="Users"
        />
      </Link>
      <Link to="/transactions">
        <Route
          Icon={FiDollarSign}
          selected={location.pathname === "/transactions"}
          title="Transactions"
        />
      </Link>
      <Route Icon={FiLink} selected={false} title="Integration" />
      <Route Icon={FiPaperclip} selected={false} title="Invoice" />
    </div>
  );
};

export default SidebarLinks;

const Route = ({ selected, Icon, title }) => {
  return (
    <button
      className={`flex items-center justify-start gap-2 w-full rounded p-2 text-sm transition-[box-shadow, _background-color,_color] transition-all duration-300 ${
        selected
          ? "bg-white text-stone-950 shadow"
          : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
      }`}
    >
      <Icon />
      <span>{title}</span>
    </button>
  );
};
