import { Outlet } from "react-router-dom";
import Sidebar from "./components/Sidebar/Sidebar";
import Topbar from "./components/Dashboard/Topbar";

const Layout = () => {
  return (
    <div className="grid gap-4 p-4 md:grid-cols-[230px,_1fr]">
      <Sidebar />
      <div className="pb-4 rounded-lg shadow bg-slate-50">
        <Topbar />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
