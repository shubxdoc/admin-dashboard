import { FiLogOut } from "react-icons/fi";
import { format } from "date-fns";
import { auth } from "../../firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Topbar = () => {
  const navigate = useNavigate();

  function logout() {
    signOut(auth)
      .then(() => {
        navigate("/login");
      })
      .catch((error) => {
        // An error happened.
      });
  }

  const formattedDate = format(new Date(), "EEEE, MMM do yyyy");

  return (
    <div className="px-4 pb-4 mt-2 mb-4 border-b border-stone-200">
      <div className="flex items-center justify-between p-0.5">
        <div>
          <span className="block text-sm font-bold">Good Morning!</span>
          <span className="block text-xs text-stone-500">{formattedDate}</span>
        </div>

        <button
          onClick={logout}
          className="flex items-center gap-2 text-sm transition-colors bg-stone-100 hover:bg-violet-100 hover:text-violet-700 px-3 py-1.5 rounded"
        >
          <FiLogOut />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Topbar;
