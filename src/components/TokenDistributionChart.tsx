import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Segment 1', value: 55 },
  { name: 'Segment 2', value: 32 },
  { name: 'Segment 3', value: 13 },
];

const COLORS = ['#8B4513', '#DAA520', '#CD853F'];

export const TokenDistributionChart = () => {
  return (
    <div className="relative w-full h-[400px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={140}
            fill="#8884d8"
            paddingAngle={0}
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <img
        src="/lovable-uploads/3925887f-1e18-4d52-9638-96efe4b8f087.png"
        alt="Center Logo"
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24"
      />
      <div className="absolute top-1/2 right-[15%] transform translate-y-[-50%] text-white text-4xl font-bold">
        55%
      </div>
      <div className="absolute top-[30%] left-[20%] transform -translate-y-1/2 text-white text-4xl font-bold">
        32%
      </div>
      <div className="absolute bottom-[30%] left-[30%] text-white text-4xl font-bold">
        13%
      </div>
    </div>
  );
};