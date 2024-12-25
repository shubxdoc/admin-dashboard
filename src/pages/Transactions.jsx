const Transactions = () => {
  const rows = [
    {
      plan: "MacBook",
      date: "07 February, 2024",
      amount: "559.00",
      status: "Complete",
    },
    {
      plan: "Surface Book",
      date: "09 January, 2024",
      amount: "599.00",
      status: "Canceled",
    },
    {
      plan: "X-Box Pro",
      date: "15 December, 2023",
      amount: "229.00",
      status: "Complete",
    },
    {
      plan: "Wooting 60HE",
      date: "14 November, 2023",
      amount: "300.00",
      status: "Pending",
    },
  ];

  return (
    <div className="w-full">
      <div className="max-w-screen-lg px-2 mx-auto mt-8">
        <div className="flex-col sm:flex sm:items-center sm:justify-between sm:flex-row">
          <p className="flex-1 text-stone-800">Transactions</p>

          <div className="mt-4 sm:mt-0">
            <div className="flex items-center justify-start sm:justify-end">
              <div className="flex items-center">
                <label htmlFor="" className="flex-shrink-0 mr-2 text-stone-900">
                  Sort by:
                </label>
                <select
                  name=""
                  className="block w-full p-1 pr-10 text-base whitespace-pre border rounded-lg outline-none focus:shadow sm:text-sm"
                >
                  <option className="whitespace-no-wrap ">Recent</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 overflow-hidden border shadow rounded-xl">
          <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
            <thead className="hidden text-sm border-b lg:table-header-group">
              <tr>
                <TableHead title="Invoice" width="50%" />
                <TableHead title="Date" />
                <TableHead title="Amount" />
                <TableHead title="Status" />
              </tr>
            </thead>

            <tbody className="text-sm lg:border-stone-300">
              {rows.map((row, index) => (
                <TableRow
                  key={index}
                  plan={row.plan}
                  date={row.date}
                  amount={row.amount}
                  status={row.status}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Transactions;

const TableHead = ({ title, width }) => {
  return (
    <td
      style={width ? { width } : {}}
      className="py-4 whitespace-normal text-stone-500 sm:px-6"
    >
      {title}
    </td>
  );
};

const TableRow = ({ plan, date, amount, status }) => {
  const getStatusClass = (status) => {
    switch (status) {
      case "Complete":
        return "bg-blue-300 text-blue-800 ";
      case "Canceled":
        return "bg-red-200 text-red-500 ";
      case "Pending":
        return "bg-indigo-200 text-indigo-500 ";
      default:
        return "";
    }
  };

  return (
    <tr>
      <td
        width="50%"
        className="py-4 text-xs whitespace-no-wrap text-stone-900 sm:px-6"
      >
        {plan}
        <div className="mt-1 lg:hidden">
          <p className=" text-stone-500">{date}</p>
        </div>
      </td>

      <td className="hidden py-4 text-xs whitespace-no-wrap text-stone-500 sm:px-6 lg:table-cell">
        {date}
      </td>

      <td className="px-6 py-4 text-right whitespace-no-wrap text-stone-600 lg:text-left">
        ${amount}
        <div
          className={`flex mt-1 ml-auto w-fit items-center rounded-full py-1 px-3 text-left text-xs  lg:hidden ${getStatusClass(
            status
          )}`}
        >
          {status}
        </div>
      </td>

      <td className="hidden py-4 whitespace-no-wrap text-stone-500 sm:px-6 lg:table-cell">
        <div
          className={`inline-flex items-center rounded-full py-2 px-3 text-xs ${getStatusClass(
            status
          )}`}
        >
          {status}
        </div>
      </td>
    </tr>
  );
};
