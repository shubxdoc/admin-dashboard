import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Users from "./pages/Users";
import UserProfile from "./pages/UserProfile";
import Transactions from "./pages/Transactions";
import FAQ from "./pages/FAQ";
import Login from "./pages/Login";
import Layout from "./Layout";
import { auth } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import Loader from "./components/Loader/Loader";

const App = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const RequireAuth = ({ children }) => {
    return user ? children : navigate("/login");
  };

  if (loading) return <Loader />;

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={
            <RequireAuth>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          path="/users"
          element={
            <RequireAuth>
              <Users />
            </RequireAuth>
          }
        />
        <Route
          path="/users/:id"
          element={
            <RequireAuth>
              <UserProfile />
            </RequireAuth>
          }
        />
        <Route
          path="/transactions"
          element={
            <RequireAuth>
              <Transactions />
            </RequireAuth>
          }
        />
        <Route
          path="/faq"
          element={
            <RequireAuth>
              <FAQ />
            </RequireAuth>
          }
        />
      </Route>

      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default App;
