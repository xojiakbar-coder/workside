import { FC } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";

const COLORS = ["#3700ff", "#134b42", "#c47623", "#ff4c00"];

export interface ChartDataItemType {
  name: string;
  value: number | string;
}

export interface ChartPropsDataType {
  data: ChartDataItemType[];
}

const CustomPieChart: FC<ChartPropsDataType> = ({ data }) => {
  return (
    <div className="w-full h-full bg-transparent flex justify-center items-center">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
          <Pie
            cx="40%"
            cy="50%"
            fill="none"
            data={data}
            dataKey="value"
            outerRadius={100}
            labelLine={false}
          >
            {data.length > 0 &&
              data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
          </Pie>
          {/* Labelni chart yoniga chiqarish */}
          <Legend
            align="left"
            layout="vertical"
            iconType="circle"
            verticalAlign="bottom"
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomPieChart;
