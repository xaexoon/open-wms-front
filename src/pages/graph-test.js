import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
} from "recharts";

export default function Graph() {
  const data = [
    { name: "완제품", value: 38, color: "#3B82F6" },
    { name: "반제품", value: 27, color: "#10B981" },
    { name: "원자재", value: 22, color: "#A78BFA" },
    { name: "부자재", value: 13, color: "#F59E0B" },
  ];

  const day = [
    { name: "월", 입고: 65, 출고: 50 },
    { name: "화", 입고: 85, 출고: 55 },
    { name: "수", 입고: 45, 출고: 78 },
    { name: "목", 입고: 95, 출고: 70 },
    { name: "금", 입고: 58, 출고: 82 },
    { name: "토", 입고: 72, 출고: 42 },
  ];

  const inventory = [
    {
      ItemCode: "item_code_4",
      ItemName: "item_4",
      CurrentStock: 60,
      SafetyStock: 80,
      AvailableStock: -20,
      Status: 0,
    },
    {
      ItemCode: "item_code_6",
      ItemName: "item_6",
      CurrentStock: 45,
      SafetyStock: 50,
      AvailableStock: -5,
      Status: 0,
    },
    {
      ItemCode: "item_code_12",
      ItemName: "item_12",
      CurrentStock: 30,
      SafetyStock: 40,
      AvailableStock: -10,
      Status: 0,
    },
    {
      ItemCode: "item_code_8",
      ItemName: "item_8",
      CurrentStock: 72,
      SafetyStock: 75,
      AvailableStock: -3,
      Status: 0,
    },
    {
      ItemCode: "item_code_1",
      ItemName: "item_1",
      CurrentStock: 100,
      SafetyStock: 60,
      AvailableStock: +40,
      Status: 0,
    },
    {
      ItemCode: "item_code_9",
      ItemName: "item_9",
      CurrentStock: 110,
      SafetyStock: 70,
      AvailableStock: +40,
      Status: 0,
    },
    {
      ItemCode: "item_code_3",
      ItemName: "item_3",
      CurrentStock: 95,
      SafetyStock: 60,
      AvailableStock: +35,
      Status: 0,
    },
    {
      ItemCode: "item_code_11",
      ItemName: "item_11",
      CurrentStock: 140,
      SafetyStock: 80,
      AvailableStock: +60,
      Status: 0,
    },
    {
      ItemCode: "item_code_5",
      ItemName: "item_5",
      CurrentStock: 200,
      SafetyStock: 90,
      AvailableStock: +110,
      Status: 0,
    },
    {
      ItemCode: "item_code_7",
      ItemName: "item_7",
      CurrentStock: 180,
      SafetyStock: 70,
      AvailableStock: +110,
      Status: 0,
    },
    {
      ItemCode: "item_code_2",
      ItemName: "item_2",
      CurrentStock: 120,
      SafetyStock: 85,
      AvailableStock: +35,
      Status: 0,
    },
    {
      ItemCode: "item_code_10",
      ItemName: "item_10",
      CurrentStock: 90,
      SafetyStock: 55,
      AvailableStock: +35,
      Status: 0,
    },
  ];

  return (
    <div className="flex flex-col w-full h-full gap-[20px]">
      {/* 재고 현황 타이틀 및 버튼 */}
      <div className="flex justify-between">
        <div className="flex flex-1 flex-col justify-center pl-[10px]">
          <span className="text-[20px] text-gray-400 font-bold flex items-center">
            INVENTORY STATUS
          </span>
          <span className="text-[40px] text-white font-bold flex items-center">
            그래프 테스트
          </span>
        </div>

        <div className="flex gap-[20px]">
          <button className="w-[160px] h-[60px] text-[24px] text-white font-semibold rounded-[15px] bg-[#1E293B]">
            엑셀 다운로드
          </button>
          <button className="w-[160px] h-[60px] text-[24px] text-white font-semibold rounded-[15px] bg-[#1E293B]">
            새로고침
          </button>
        </div>
      </div>

      {/* 재고 현황 수량 카드영역*/}
      <div className="flex w-full h-[130px] gap-[20px]">
        <div className="flex flex-1 flex-col h-full bg-[#1E293B] rounded-[15px] p-[20px] justify-center gap-[5px]">
          <span className="text-[24px] text-[#94A3B8]">총 재고 수량</span>
          <div className="flex items-center gap-[20px]">
            <span className="text-[40px] text-white font-bold">12,699</span>
            <span className="text-[24px] text-[#94A3B8]">EA</span>
          </div>
        </div>

        <div className="flex flex-1 flex-col h-full bg-[#1E293B] rounded-[15px] p-[20px] justify-center gap-[5px]">
          <span className="text-[24px] text-[#94A3B8]">총 품목</span>
          <div className="flex items-center gap-[20px]">
            <span className="text-[40px] text-white font-bold">13</span>
            <span className="text-[24px] text-[#94A3B8]">종</span>
          </div>
        </div>

        <div className="flex flex-1 flex-col h-full bg-[#1E293B] rounded-[15px] p-[20px] justify-center gap-[5px]">
          <span className="text-[24px] text-[#94A3B8]">안전재고 미달</span>
          <div className="flex items-center gap-[20px]">
            <span className="text-[40px] text-[#F59E0B] font-bold">9</span>
            <span className="text-[24px] text-[#94A3B8]">건</span>
          </div>
        </div>

        <div className="flex flex-1 flex-col h-full bg-[#1E293B] rounded-[15px] p-[20px] justify-center gap-[5px]">
          <span className="text-[24px] text-[#94A3B8]">장기재고</span>
          <div className="flex items-center gap-[20px]">
            <span className="text-[40px] text-[#F87171] font-bold">13</span>
            <span className="text-[24px] text-[#94A3B8]">건</span>
          </div>
        </div>
      </div>

      {/* 그래프 */}
      <div className="flex w-full flex-1 gap-[20px]">
        <div className="flex flex-[2] flex-col gap-[20px]">
          <div className="flex flex-1 bg-[#1E293B] rounded-[15px] p-[20px] items-center">
            <div className="flex flex-col w-full h-full">
              <span className="text-white text-[24px] font-bold">
                카테고리별 비중
              </span>

              <div className="flex flex-1 items-center">
                <div className="w-[180px] h-[180px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={60}
                        outerRadius={80}
                        paddingAngle={0}
                        dataKey="value"
                      >
                        {data.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={entry.color}
                            stroke="none"
                          />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="flex-1 ml-8 flex flex-col gap-3 text-white">
                  {data.map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between text-sm"
                    >
                      <div className="flex items-center gap-2">
                        <div
                          className="w-3 h-3 rounded"
                          style={{ backgroundColor: item.color }}
                        />
                        <span className="text-gray-300 font-medium">
                          {item.name}
                        </span>
                      </div>
                      <span className="font-bold">{item.value}%</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-1 bg-[#1E293B] rounded-[15px] p-[20px]">
            <div className="flex flex-col w-full h-full">
              <span className="text-white text-[24px] font-bold">
                입출고 추이
              </span>

              {/* 차트 영역 */}
              <div className="w-full flex-1">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={day}
                    margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
                    barGap={-30}
                  >
                    <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#1F2937"
                      opacity={0.3}
                    />

                    <XAxis
                      dataKey="name"
                      axisLine={false}
                      tickLine={false}
                      tick={{ fill: "#9CA3AF", fontSize: 14 }}
                      dy={10}
                    />

                    <YAxis axisLine={false} tickLine={false} hide={true} />

                    <Tooltip
                      contentStyle={{
                        backgroundColor: "#1F2937",
                        borderColor: "#374151",
                        borderRadius: "8px",
                      }}
                      itemStyle={{ color: "#FFF" }}
                    />

                    <Legend
                      verticalAlign="top"
                      align="right"
                      iconType="square"
                      iconSize={10}
                      wrapperStyle={{ top: -35, right: 0, fontSize: "14px" }}
                    />

                    <Bar
                      dataKey="입고"
                      fill="#3B82F6"
                      radius={[4, 4, 0, 0]}
                      maxBarSize={16}
                    />

                    <Bar
                      dataKey="출고"
                      fill="#10B981"
                      radius={[4, 4, 0, 0]}
                      maxBarSize={16}
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-[4] flex-col h-full bg-[#1E293B] rounded-[15px]">
          <tbody>
            {inventory.map((item, index) => (
              <tr key={index} className="h-[50px] text-center">
                <td className="border border-[#555C66]">{item.ItemCode}</td>

                <td className="border border-[#555C66]">{item.ItemName}</td>

                <td className="border border-[#555C66]">{item.CurrentStock}</td>

                <td className="border border-[#555C66]">{item.SafetyStock}</td>

                <td
                  className={`border border-[#555C66] font-semibold ${
                    item.AvailableStock < 0 ? "text-red-400" : "text-green-400"
                  }`}
                >
                  {item.AvailableStock}
                </td>

                <td className="border border-[#555C66]">
                  {item.Status === 0 ? (
                    <span className="text-green-400">정상</span>
                  ) : (
                    <span className="text-red-400">이상</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </div>
      </div>
    </div>
  );
}
