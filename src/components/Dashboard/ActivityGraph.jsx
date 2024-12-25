import { FiUser } from "react-icons/fi";
import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Jan", one: 4000, two: 2400 },
  { name: "Feb", one: 3000, two: 1398 },
  { name: "Mar", one: 2000, two: 9800 },
  { name: "Apr", one: 2780, two: 3908 },
  { name: "May", one: 1890, two: 4800 },
  { name: "Jun", one: 2390, two: 3800 },
  { name: "Jul", one: 3490, two: 4300 },
];

const ActivityGraph = () => {
  return (
    <div className="overflow-hidden border rounded col-span-full lg:col-span-8 border-stone-300">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiUser />{" "}
          <span className="text-sm tracking-wide uppercase">Activity</span>
        </h3>
      </div>

      <div className="h-64 px-4">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart width={500} height={400} data={data}>
            <CartesianGrid stroke="#e4e4e7" strokeOpacity={0.5} />
            <XAxis
              axisLine={false}
              tickLine={false}
              dataKey="name"
              className="text-xs font-bold"
              padding={{ right: 4 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              className="text-xs font-bold"
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="two"
              stroke="#647AA3"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="one" stroke="#1F271B" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default ActivityGraph;
