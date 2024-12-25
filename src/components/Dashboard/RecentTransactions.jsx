import { FiDollarSign } from "react-icons/fi";

export const RecentTransactions = () => {
  return (
    <div className="hidden col-span-12 p-4 border rounded border-stone-300 lg:block">
      <div className="flex items-center justify-between mb-4">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiDollarSign />
          <span className="text-sm uppercase">Recent Transactions</span>
        </h3>
        <button className="text-sm text-violet-500 hover:underline underline-offset-4">
          See All
        </button>
      </div>
      <table className="w-full text-sm text-left text-stone-600 rtl:text-right">
        <TableHead />
        <tbody>
          <TableRow
            productName={"Apple MacBook Pro 17"}
            color={"Silver"}
            category={"Laptop"}
            price={"2999"}
          />
          <TableRow
            productName={"Microsoft Surface Pro"}
            color={"White"}
            category={"Laptop PC"}
            price={"1999"}
          />
          <TableRow
            productName={"Magic Mouse 2"}
            color={"Black"}
            category={"Accessories"}
            price={"99"}
          />
        </tbody>
      </table>
    </div>
  );
};

const TableHead = () => {
  return (
    <thead className="text-xs uppercase text-stone-800 bg-stone-100">
      <tr>
        <th scope="col" className="px-6 py-3">
          Product name
        </th>
        <th scope="col" className="px-6 py-3">
          Color
        </th>
        <th scope="col" className="px-6 py-3">
          Category
        </th>
        <th scope="col" className="px-6 py-3">
          Price
        </th>
      </tr>
    </thead>
  );
};

const TableRow = ({ productName, price, color, category }) => {
  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {productName}
      </th>
      <td className="px-6 py-4">{color}</td>
      <td className="px-6 py-4">{category}</td>
      <td className="px-6 py-4">${price}</td>
    </tr>
  );
};
