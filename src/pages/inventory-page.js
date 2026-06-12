import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js";
import { Bar, Doughnut } from "react-chartjs-2";

// 사용할 요소 등록 (도넛: ArcElement, 막대: BarElement)
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    ArcElement,
    Title,
    Tooltip,
    Legend,
);

// 카테고리 데이터 (도넛 + 범례 공통 사용)
const categories = [
    { label: "완제품", value: 38, color: "#2c95f1" },
    { label: "반제품", value: 27, color: "#22C55E" },
    { label: "원자재", value: 22, color: "#A78BFA" },
    { label: "부자재", value: 13, color: "#F59E0B" },
];

const doughnutData = {
    labels: categories.map((c) => c.label),
    datasets: [
        {
            data: categories.map((c) => c.value),
            backgroundColor: categories.map((c) => c.color),
            borderColor: null,
            borderWidth: 0,
        },
    ],
};

const doughnutOptions = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: "70%",
    plugins: {
        legend: { display: false }, // 기본 범례 끔 (커스텀 사용)
        tooltip: {
            callbacks: {
                label: (ctx) => ` ${ctx.label}: ${ctx.parsed}%`,
            },
        },
    },
};

// 막대 그래프 데이터 — 품목별 재고 수량
const barData = {
    labels: ["월", "화", "수", "목", "금", "토"],
    datasets: [
        {
            label: "입고",
            data: [1200, 1500, 700, 1700, 1100, 1200],
            backgroundColor: "#2c95f1",
            borderRadius: 6,
            maxBarThickness: 20,
            barPercentage: 1.0, // 입고-출고 막대 붙이기
            categoryPercentage: 0.6, // 요일 그룹 폭
        },
        {
            label: "출고",
            data: [900, 1000, 1400, 1250, 1500, 700],
            backgroundColor: "#22C55E",
            borderRadius: 6,
            maxBarThickness: 20,
            barPercentage: 1.0,
            categoryPercentage: 0.6,
        },
    ],
};

const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        legend: { display: false },
    },
    scales: {
        x: {
            ticks: { color: "#94A3B8", font: { size: 14 } },
            grid: { display: false }, // 세로 격자선 제거
            barPercentage: 1.0,
        },
        y: {
            display: false, // Y축 전체(눈금 + 선) 숨김
            grid: { display: false }, // 가로 격자선 제거
        },
    },
};

export default function Inventory() {
    return (
        <div className="flex flex-col w-full h-full gap-[20px]">
            {/* 재고 현황 타이틀 및 버튼 */}
            <div className="flex justify-between">
                <div className="flex flex-1 flex-col justify-center pl-[10px]">
                    <span className="text-[20px] text-gray-400 font-bold flex items-center">
                        INVENTORY STATUS
                    </span>
                    <span className="text-[40px] text-white font-bold flex items-center">
                        재고 현황
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

            {/* 재고 현황 수량 카드영역 */}
            <div className="flex w-full h-[130px] gap-[20px]">
                <div className="flex flex-1 flex-col h-full bg-[#1E293B] rounded-[15px] p-[20px] justify-center gap-[5px]">
                    <span className="text-[24px] text-[#94A3B8]">
                        총 재고 수량
                    </span>
                    <div className="flex items-center gap-[20px]">
                        <span className="text-[40px] text-white font-bold">
                            12,699
                        </span>
                        <span className="text-[24px] text-[#94A3B8]">EA</span>
                    </div>
                </div>
                <div className="flex flex-1 flex-col h-full bg-[#1E293B] rounded-[15px] p-[20px] justify-center gap-[5px]">
                    <span className="text-[24px] text-[#94A3B8]">총 품목</span>
                    <div className="flex items-center gap-[20px]">
                        <span className="text-[40px] text-white font-bold">
                            13
                        </span>
                        <span className="text-[24px] text-[#94A3B8]">종</span>
                    </div>
                </div>
                <div className="flex flex-1 flex-col h-full bg-[#1E293B] rounded-[15px] p-[20px] justify-center gap-[5px]">
                    <span className="text-[24px] text-[#94A3B8]">
                        안전재고 미달
                    </span>
                    <div className="flex items-center gap-[20px]">
                        <span className="text-[40px] text-[#F59E0B] font-bold">
                            9
                        </span>
                        <span className="text-[24px] text-[#94A3B8]">건</span>
                    </div>
                </div>
                <div className="flex flex-1 flex-col h-full bg-[#1E293B] rounded-[15px] p-[20px] justify-center gap-[5px]">
                    <span className="text-[24px] text-[#94A3B8]">장기재고</span>
                    <div className="flex items-center gap-[20px]">
                        <span className="text-[40px] text-[#F87171] font-bold">
                            13
                        </span>
                        <span className="text-[24px] text-[#94A3B8]">건</span>
                    </div>
                </div>
            </div>

            {/* 그래프 */}
            <div className="flex w-full flex-1 gap-[20px]">
                <div className="flex flex-[2] flex-col gap-[20px]">
                    {/* 도넛 + 커스텀 범례 */}
                    <div className="flex flex-1 flex-col bg-[#1E293B] rounded-[15px] p-[20px] min-h-0 gap-[15px]">
                        {/* 타이틀 */}
                        <span className="text-white text-[22px] font-bold shrink-0">
                            카테고리별 비중
                        </span>

                        {/* 도넛 + 범례 (가로 배치) */}
                        <div className="flex flex-1 items-center gap-[20px] min-h-0">
                            {/* 도넛 (정사각형 유지) */}
                            <div style={{ width: 160, height: 160 }}>
                                <Doughnut
                                    data={doughnutData}
                                    options={doughnutOptions}
                                />
                            </div>

                            {/* 커스텀 범례 */}
                            <div className="flex flex-1 flex-col justify-center gap-[14px]">
                                {categories.map((c) => (
                                    <div
                                        key={c.label}
                                        className="flex items-center"
                                    >
                                        <div className="flex items-center gap-[10px]">
                                            <span
                                                className="w-[12px] h-[12px] rounded-full shrink-0"
                                                style={{
                                                    backgroundColor: c.color,
                                                }}
                                            />
                                            <span className="text-white text-[18px]">
                                                {c.label}
                                            </span>
                                        </div>
                                        <span className="ml-auto text-white font-bold text-[18px]">
                                            {c.value}%
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* 막대 그래프 */}
                    <div className="flex flex-1 flex-col bg-[#1E293B] rounded-[15px] p-[20px] min-h-0 gap-[15px]">
                        {/* 타이틀 + 범례 */}
                        <div className="flex items-center justify-between shrink-0">
                            <span className="text-white text-[22px] font-bold">
                                입출고 추이
                            </span>
                            {/* 범례 (선택) */}
                            <div className="flex items-center gap-[16px]">
                                <div className="flex items-center gap-[6px]">
                                    <span className="w-[12px] h-[12px] rounded-full bg-[#2c95f1]" />
                                    <span className="text-white text-[16px]">
                                        입고
                                    </span>
                                </div>
                                <div className="flex items-center gap-[6px]">
                                    <span className="w-[12px] h-[12px] rounded-full bg-[#22C55E]" />
                                    <span className="text-white text-[16px]">
                                        출고
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* 차트 (남는 공간 전부) */}
                        <div className="flex-1 min-h-0">
                            <Bar data={barData} options={barOptions} />
                        </div>
                    </div>
                </div>

                {/* 오른쪽 큰 영역 (품목별 재고 테이블 등) */}
                <div className="flex flex-[4] flex-col h-full bg-[#1E293B] rounded-[15px]"></div>
            </div>
        </div>
    );
}
