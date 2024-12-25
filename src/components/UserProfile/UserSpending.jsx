import {
  AreaChart,
  Area,
  XAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const UserSpending = ({
  aspect = 2 / 1,
  title = "Last 6 months (Revenue)",
}) => {
  const data = [
    { name: "January", Total: 1200 },
    { name: "February", Total: 2100 },
    { name: "March", Total: 800 },
    { name: "April", Total: 1600 },
    { name: "May", Total: 900 },
    { name: "June", Total: 1700 },
  ];

  return (
    <div className="border col-span-full xl:col-span-4">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium">
          <span className="text-sm tracking-wide uppercase">{title}</span>
        </h3>
      </div>
      <ResponsiveContainer width="100%" aspect={aspect}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" className="text-xs" />
          <CartesianGrid strokeDasharray="3 3" className="stroke-gray-200" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Total"
            stroke="#e4e4e7"
            fillOpacity={0.2}
            fill="#8884d8"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserSpending;
