import { FiEye } from "react-icons/fi";
import React, { PureComponent } from "react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  Legend,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const data = [
  {
    subject: "Performance",
    mobile: 15,
    desktop: 110,
    max: 150, // Assuming a benchmark for optimal performance
  },
  {
    subject: "SEO",
    mobile: 15,
    desktop: 110,
    max: 150, // SEO score is out of 100
  },

  {
    subject: "Uptime",
    mobile: 86,
    desktop: 130,
    max: 150, // Uptime percentage
  },
  {
    subject: "Traffic",
    mobile: 125,
    desktop: 40,
    max: 150, // Traffic goal for the period
  },
  {
    subject: "Error Rate",
    mobile: 148,
    desktop: 90,
    max: 5, // Lower is better; max signifies a critical error rate
  },
];

const UsageRadar = () => {
  return (
    <div className="overflow-hidden border rounded col-span-full lg:col-span-4 border-stone-300">
      <div className="p-4">
        <h3 className="flex items-center gap-1.5 font-medium">
          <FiEye /> <span className="text-sm uppercase">Usage</span>
        </h3>
      </div>
      <div className="h-64 px-4">
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" className="text-xs font-bold " />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar
              name="mobile"
              dataKey="mobile"
              stroke="#000"
              fill="#e4e4e7"
              fillOpacity={0.2}
            />
            <Radar
              name="desktop"
              dataKey="desktop"
              stroke="#647AA3"
              fill="#647AA3"
              fillOpacity={0.2}
            />
            <Tooltip
              wrapperClassName="text-sm rounded"
              labelClassName="text-xs text-stone-500"
            />
            <Legend
              wrapperStyle={{
                fontSize: "12px",
                textTransform: "uppercase",
                wordSpacing: "5px",
              }}
            />
          </RadarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UsageRadar;
