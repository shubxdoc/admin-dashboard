import { RecentTransactions } from "../components/Dashboard/RecentTransactions";
import UserSpending from "../components/UserProfile/UserSpending";

const UserProfile = () => {
  return (
    <div className="grid grid-cols-8 gap-3 px-4">
      <div className="flex items-center gap-10 p-4 border col-span-full xl:col-span-4">
        <div className="w-1/2 mx-auto">
          <img
            src="https://www.pngplay.com/wp-content/uploads/12/User-Avatar-Profile-Transparent-Clip-Art-Background.png"
            alt=""
            className="max-h-48"
          />
        </div>
        <div className="w-1/2 space-y-5 text-xs text-stone-600 sm:text-base">
          <p>
            <span className="text-stone-500">Name :</span> John Doe
          </p>
          <p>
            <span className="text-stone-500">Email :</span> jondoe@mail.com
          </p>
          <p>
            <span className="text-stone-500">Country :</span> United Kingdom
          </p>
          <p>
            <span className="text-stone-500">Phone no</span>. : +321 654 987
          </p>
          <p>
            <span className="text-stone-500">Address :</span> London, United
            Kingdom
          </p>
        </div>
      </div>
      <UserSpending title="User Spending" />
      <RecentTransactions />
    </div>
  );
};

export default UserProfile;
