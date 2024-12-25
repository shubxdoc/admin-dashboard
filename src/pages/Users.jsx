import { Link } from "react-router-dom";

const Users = () => {
  const rows = [
    {
      id: Date.now(),
      name: "John Doe",
      email: "johndoe@mail.com",
      phoneNo: 123456,
      role: "admin",
    },
    {
      id: Date.now(),
      name: "Jane Smith",
      email: "janesmith@mail.com",
      phoneNo: 123456,
      role: "editor",
    },
    {
      id: Date.now(),
      name: "Alice Johnson",
      email: "alicejohnson@mail.com",
      phoneNo: 123456,
      role: "viewer",
    },
  ];

  return (
    <div className="relative px-4 overflow-x-auto">
      <table className="w-full text-sm text-left text-gray-500 rtl:text-right">
        <TableHead />
        <tbody>
          {rows.map((row, index) => (
            <TableRow
              id={row.id}
              key={index}
              name={row.name}
              email={row.email}
              phNum={row.phoneNo}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;

const TableHead = () => {
  return (
    <thead className="text-xs uppercase text-stone-800 bg-stone-100">
      <tr>
        <th scope="col" className="px-6 py-3">
          Name
        </th>
        <th scope="col" className="hidden px-6 py-3 lg:table-cell">
          Email
        </th>
        <th scope="col" className="hidden px-6 py-3 lg:table-cell">
          Contact
        </th>
        <th scope="col" className="px-6 py-3">
          Options
        </th>
      </tr>
    </thead>
  );
};

const TableRow = ({ id, name, email, phNum }) => {
  return (
    <tr className="bg-white border-b">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {name}
      </th>
      <td className="hidden px-6 py-4 lg:table-cell">{email}</td>
      <td className="hidden px-6 py-4 lg:table-cell">+{phNum}</td>
      <td className="px-6 py-4 space-x-2">
        <Link to={`/users/${id}`}>
          <button className="px-3 py-1 text-xs border rounded-md hover:bg-blue-50">
            View
          </button>
        </Link>
        <button className="px-3 py-1 text-xs border rounded-md hover:bg-rose-50">
          Remove
        </button>
      </td>
    </tr>
  );
};
