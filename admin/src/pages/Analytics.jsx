// components/Analytics.jsx - Refactored
import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Cell,
  ResponsiveContainer,
  PieChart,
  Pie,
} from "recharts";

const Analytics = ({
  revenueData = [],
  categoryData = [],
  brandData = [],
  statsCards = [],
  onDateRangeChange,
  dateRange = "Last 7 Days",
}) => {
  const COLORS = ["#22C55E", "#3B82F6", "#F59E0B", "#EF4444"];

  return (
    <div className="w-full flex flex-col">
      <div className="flex w-full items-center h-17 pt-5.75 pb-6.25 pl-1.25 pr-14.25 rounded-[25px] bg-[#FCFCFC]">
        <div className="flex items-center justify-between w-full">
          <p className="text-[#2D2D2D] font-medium text-[18px] leading-4.5 tracking-[-0.2px] font-clash-grotesk">
            Dashboard
          </p>
          <img src="/noti.svg" alt="" />
        </div>
      </div>

      <div className="flex flex-col justify-center items-start w-full p-[12px] gap-[15px] rounded-[25px] border border-[rgba(107,107,107,0.15)] bg-white">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-[15px]">
          {statsCards.map((card, index) => (
            <div
              key={index}
              className="flex justify-center items-center w-[185px] p-[12px] rounded-[18px] border border-[rgba(107,107,107,0.25)] bg-[#FAFAFA]"
            >
              <div className="flex w-[155px] flex-col items-start shrink-0 gap-[15px]">
                <div className="flex items-center gap-[10px]">
                  <img src={card.icon} alt="" />
                  <p className="text-[#717182] text-center font-medium text-xs leading-[16px] font-clash-grotesk">
                    {card.label}
                  </p>
                </div>
                <div className="flex items-center self-stretch pl-[12px] py-[15px] rounded-[10px] border border-[rgba(107,107,107,0.10)] bg-white shadow-[0_0_5px_0_rgba(0,0,0,0.05)]">
                  <div className="flex flex-col gap-2">
                    <p className="text-[#3B0002] font-medium text-[22px] leading-[28px] font-clash-grotesk">
                      {card.value}
                    </p>
                    {card.trend && (
                      <span className="text-[#6B6B6B] font-medium text-[9px] leading-[12px] tracking-[-0.3px] font-dm-sans-500">
                        <span
                          className={`${card.trend.isPositive ? "text-[#1FB35B]" : "text-[#C3383F]"} font-medium`}
                        >
                          {card.trend.value}
                        </span>{" "}
                        {card.trend.label}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center items-center p-[15px] rounded-[25px] border border-[rgba(107,107,107,0.15)] bg-white">
          <div className="flex items-center gap-2">
            <div className="w-[561px] h-[494px] px-4 pt-5 rounded-[18px] border border-[rgba(107,107,107,0.25)] bg-white">
              <div className="flex w-full justify-between items-center">
                <p className="text-[#2D2D2D] font-medium text-base leading-[18px] tracking-[-0.2px] font-clash-grotesk">
                  Orders & Revenue
                </p>
                <div className="flex gap-1 items-center">
                  <img src="/calendar.svg" alt="" />
                  <p className="text-[#717182] font-semibold text-sm leading-[18px] tracking-[-0.5px] font-dm-sans-700">
                    {dateRange}
                  </p>
                  <div className="flex flex-col gap-0.5 cursor-pointer">
                    <img src="/up-arrow.svg" alt="" />
                    <img src="/down-arrow.svg" alt="" />
                  </div>
                </div>
              </div>
              <ResponsiveContainer
                className="mt-4 pb-8"
                width="100%"
                height="100%"
              >
                <BarChart data={revenueData}>
                  <XAxis dataKey="name" axisLine={false} tickLine={false} />
                  <YAxis axisLine={false} tickLine={false} />
                  <Tooltip />
                  <Bar dataKey="revenue" radius={[10, 10, 0, 0]}>
                    {revenueData.map((entry, index) => (
                      <Cell
                        key={index}
                        fill={entry.isHighlighted ? "#E3494E" : "#E5E7EB"}
                      />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="w-[361px] h-[494px] px-4 pt-5 rounded-[18px] border border-[rgba(107,107,107,0.25)] bg-white">
              <p className="text-[#2D2D2D] font-medium text-base leading-[18px] tracking-[-0.2px] font-clash-grotesk">
                Category Distribution
              </p>
              <div className="flex w-[320px] mt-10 flex-col items-center gap-6">
                <ResponsiveContainer width="100%" height={270}>
                  <PieChart>
                    <Pie
                      data={categoryData}
                      dataKey="value"
                      outerRadius={100}
                      label={({ name, percent }) =>
                        `${name} (${(percent * 100).toFixed(0)}%)`
                      }
                    >
                      {categoryData.map((entry, index) => (
                        <Cell
                          key={index}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
                <div className="flex flex-col w-full gap-2 self-stretch">
                  {categoryData.map((item, index) => (
                    <div key={index} className="flex w-full justify-between">
                      <div className="flex gap-1.5 items-center">
                        <div
                          className="w-[15px] h-[15px] shrink-0 rounded-[4px]"
                          style={{
                            backgroundColor: COLORS[index % COLORS.length],
                          }}
                        ></div>
                        <p className="text-[#0A0A0A] font-medium text-xs leading-[20px] font-clash-grotesk">
                          {item.name}
                        </p>
                      </div>
                      <p className="text-[#0A0A0A] font-medium text-xs leading-[20px] font-dm-sans">
                        {item.orders} Orders
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center w-[511px] h-[425px] p-[15px] rounded-[25px] border border-[rgba(107,107,107,0.15)] bg-white">
        <div className="flex justify-center items-center w-[481px] h-[395px] p-[25px] shrink-0 rounded-[18px] border border-[rgba(107,107,107,0.25)] bg-white">
          <div className="flex flex-col w-full items-start gap-6">
            <div className="flex w-full justify-between items-center">
              <p className="text-[#2D2D2D] font-medium text-base leading-[18px] tracking-[-0.2px] font-clash-grotesk">
                Brand Performance
              </p>
              <div className="flex gap-1 items-center">
                <img src="/calendar.svg" alt="" />
                <p className="text-[#717182] font-semibold text-sm leading-[18px] tracking-[-0.5px] font-dm-sans-700">
                  {dateRange}
                </p>
                <div className="flex flex-col gap-0.5 cursor-pointer">
                  <img src="/up-arrow.svg" alt="" />
                  <img src="/down-arrow.svg" alt="" />
                </div>
              </div>
            </div>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={brandData}>
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tick={({ x, y, payload }) => (
                    <g transform={`translate(${x},${y + 10})`}>
                      <image
                        href={
                          payload.value === "John's Stores"
                            ? "/john-stores.svg"
                            : "/swift-log.svg"
                        }
                        x={-40}
                        y={0}
                        width={16}
                        height={16}
                      />
                      <text
                        x={-20}
                        y={12}
                        textAnchor="start"
                        fill="#717182"
                        fontSize={12}
                      >
                        {payload.value}
                      </text>
                    </g>
                  )}
                />
                <YAxis axisLine={false} tickLine={false} />
                <Tooltip />
                <Bar dataKey="value" radius={[20, 20, 0, 0]}>
                  {brandData.map((entry, index) => (
                    <Cell
                      key={index}
                      fill={
                        index === 0
                          ? "url(#orangeGradient)"
                          : "url(#greenGradient)"
                      }
                    />
                  ))}
                </Bar>
                <defs>
                  <linearGradient
                    id="orangeGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#F59E0B" />
                    <stop offset="100%" stopColor="#EF4444" />
                  </linearGradient>
                  <linearGradient
                    id="greenGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop offset="0%" stopColor="#22C55E" />
                    <stop offset="100%" stopColor="#16A34A" />
                  </linearGradient>
                </defs>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
