import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from "@headlessui/react";
import { useState } from "react";

const categoryList = ["전체", "원자재", "반제품", "완제품", "부자재"];
const statusList = ["전체", "정상", "부족", "과다", "이상"];

// 더미 데이터
const dummyItemData = [
    {
        itemSeq: 1,
        code: "item_code_1",
        name: "item_1",
        lotNum: "Lot-P001-1",
        quantity: 100,
        location: "A1",
        category: "원자재",
        status: "정상",
        date: "2026-06-08",
    },
    {
        itemSeq: 2,
        code: "item_code_2",
        name: "item_2",
        lotNum: "Lot-P002-1",
        quantity: 80,
        location: "A3",
        category: "원자재",
        status: "정상",
        date: "2026-06-08",
    },
    {
        itemSeq: 3,
        code: "item_code_3",
        name: "item_3",
        lotNum: "Lot-P003-1",
        quantity: 120,
        location: "A4",
        category: "반제품",
        status: "정상",
        date: "2026-06-09",
    },
    {
        itemSeq: 4,
        code: "item_code_4",
        name: "item_4",
        lotNum: "Lot-P004-1",
        quantity: 60,
        location: "B1",
        category: "반제품",
        status: "부족",
        date: "2026-06-09",
    },
    {
        itemSeq: 5,
        code: "item_code_5",
        name: "item_5",
        lotNum: "Lot-P005-1",
        quantity: 200,
        location: "B2",
        category: "완제품",
        status: "과다",
        date: "2026-06-09",
    },
    {
        itemSeq: 6,
        code: "item_code_6",
        name: "item_6",
        lotNum: "Lot-P006-1",
        quantity: 45,
        location: "C1",
        category: "부자재",
        status: "부족",
        date: "2026-06-10",
    },
    {
        itemSeq: 7,
        code: "item_code_7",
        name: "item_7",
        lotNum: "Lot-P007-1",
        quantity: 150,
        location: "C2",
        category: "완제품",
        status: "정상",
        date: "2026-06-10",
    },
    {
        itemSeq: 8,
        code: "item_code_8",
        name: "item_8",
        lotNum: "Lot-P008-1",
        quantity: 90,
        location: "C3",
        category: "반제품",
        status: "이상",
        date: "2026-06-10",
    },
    {
        itemSeq: 9,
        code: "item_code_9",
        name: "item_9",
        lotNum: "Lot-P009-1",
        quantity: 110,
        location: "C4",
        category: "원자재",
        status: "정상",
        date: "2026-06-11",
    },
    {
        itemSeq: 10,
        code: "item_code_10",
        name: "item_10",
        lotNum: "Lot-P010-1",
        quantity: 75,
        location: "D1",
        category: "부자재",
        status: "정상",
        date: "2026-06-11",
    },
    {
        itemSeq: 11,
        code: "item_code_11",
        name: "item_11",
        lotNum: "Lot-P011-1",
        quantity: 130,
        location: "D3",
        category: "완제품",
        status: "정상",
        date: "2026-06-11",
    },
    {
        itemSeq: 12,
        code: "item_code_12",
        name: "item_12",
        lotNum: "Lot-P012-1",
        quantity: 50,
        location: "E1",
        category: "반제품",
        status: "부족",
        date: "2026-06-12",
    },
    {
        itemSeq: 13,
        code: "item_code_13",
        name: "item_13",
        lotNum: "Lot-P013-1",
        quantity: 95,
        location: "E3",
        category: "원자재",
        status: "이상",
        date: "2026-06-12",
    },
    {
        itemSeq: 14,
        code: "item_code_14",
        name: "item_14",
        lotNum: "Lot-P014-1",
        quantity: 160,
        location: "F1",
        category: "완제품",
        status: "정상",
        date: "2026-06-12",
    },
    {
        itemSeq: 15,
        code: "item_code_15",
        name: "item_15",
        lotNum: "Lot-P015-1",
        quantity: 85,
        location: "F4",
        category: "부자재",
        status: "정상",
        date: "2026-06-13",
    },
];

// 상태 뱃지 색상
function statusBadge(s) {
    const map = {
        정상: "bg-[#5DCAA5] text-[#04342C]",
        부족: "bg-[#F59E0B] text-[#3A2A04]",
        과다: "bg-[#334155] text-[#94A3B8]",
        이상: "bg-[#F87171] text-[#450a0a]",
    };
    return map[s] || "bg-[#334155] text-[#94A3B8]";
}

// 공용 드롭다운 (한 줄 필터용)
function FilterSelect({ value, onChange, options, width }) {
    return (
        <Listbox value={value} onChange={onChange}>
            <div className={`relative h-[48px] ${width}`}>
                <ListboxButton className="w-full h-full px-[14px] flex items-center justify-between text-[18px] text-white bg-[#334155] rounded-[10px] cursor-pointer">
                    <span>{value}</span>
                    <span className="text-[#94A3B8]">▾</span>
                </ListboxButton>
                <ListboxOptions className="absolute z-10 mt-[6px] w-full bg-[#334155] border border-[#475569] rounded-[10px] overflow-hidden shadow-lg">
                    {options.map((opt) => (
                        <ListboxOption
                            key={opt}
                            value={opt}
                            className="px-[14px] py-[10px] text-[17px] text-[#CBD5E1] cursor-pointer data-[focus]:bg-[#475569] data-[selected]:bg-[#2c95f1] data-[selected]:text-white"
                        >
                            {opt}
                        </ListboxOption>
                    ))}
                </ListboxOptions>
            </div>
        </Listbox>
    );
}

export default function Item() {
    const [category, setCategory] = useState(categoryList[0]);
    const [status, setStatus] = useState(statusList[0]);

    return (
        <div className="flex flex-col w-full h-full gap-[18px]">
            {/* 상단 타이틀 및 버튼 */}
            <div className="flex justify-between shrink-0">
                <div className="flex flex-1 flex-col justify-center pl-[10px]">
                    <span className="text-[16px] tracking-[2px] text-gray-400 font-bold">
                        ITEM SEARCH
                    </span>
                    <span className="text-[34px] text-white font-bold leading-tight">
                        품목 조회
                    </span>
                </div>
                <div className="flex gap-[14px] items-center">
                    <button className="h-[52px] px-[28px] text-[20px] text-white font-semibold rounded-[12px] bg-[#2c95f1] cursor-pointer">
                        엑셀 다운로드
                    </button>
                    <button className="h-[52px] px-[28px] text-[20px] text-white font-semibold rounded-[12px] bg-[#1E293B] cursor-pointer">
                        새로고침
                    </button>
                </div>
            </div>

            {/* 검색 조건 : 한 줄 필터 바 (접기/펴기 불필요) */}
            <div className="flex w-full shrink-0 items-end bg-[#1E293B] rounded-[15px] px-[20px] py-[16px] gap-[14px]">
                {/* 품목코드 / 품목명 */}
                <div className="flex flex-1 min-w-[280px] flex-col gap-[8px]">
                    <span className="text-[#94A3B8] text-[16px] font-semibold">
                        품목코드 / 품목명
                    </span>
                    <input
                        placeholder="코드 또는 품목명 입력"
                        className="h-[48px] bg-[#334155] rounded-[10px] px-[14px] text-[18px] text-white outline-none placeholder:text-[#64748B]"
                    />
                </div>

                {/* LOT 번호 */}
                <div className="flex flex-col gap-[8px]">
                    <span className="text-[#94A3B8] text-[16px] font-semibold">
                        LOT 번호
                    </span>
                    <input
                        placeholder="Lot-P000-0"
                        className="w-[200px] h-[48px] bg-[#334155] rounded-[10px] px-[14px] text-[18px] text-white outline-none placeholder:text-[#64748B]"
                    />
                </div>

                {/* 카테고리 */}
                <div className="flex flex-col gap-[8px]">
                    <span className="text-[#94A3B8] text-[16px] font-semibold">
                        카테고리
                    </span>
                    <FilterSelect
                        value={category}
                        onChange={setCategory}
                        options={categoryList}
                        width="w-[160px]"
                    />
                </div>

                {/* 입고일 */}
                <div className="flex flex-col gap-[8px]">
                    <span className="text-[#94A3B8] text-[16px] font-semibold">
                        입고일
                    </span>
                    <div className="flex h-[48px] items-center gap-[8px]">
                        <input
                            type="date"
                            className="w-[180px] h-full bg-[#334155] rounded-[10px] px-[14px] text-[17px] text-white outline-none [color-scheme:dark]"
                        />
                        <span className="text-[#94A3B8] text-[18px]">~</span>
                        <input
                            type="date"
                            className="w-[180px] h-full bg-[#334155] rounded-[10px] px-[14px] text-[17px] text-white outline-none [color-scheme:dark]"
                        />
                    </div>
                </div>

                {/* 재고 상태 */}
                <div className="flex flex-col gap-[8px]">
                    <span className="text-[#94A3B8] text-[16px] font-semibold">
                        재고 상태
                    </span>
                    <FilterSelect
                        value={status}
                        onChange={setStatus}
                        options={statusList}
                        width="w-[160px]"
                    />
                </div>

                {/* 검색 / 초기화 */}
                <div className="flex gap-[10px] h-[48px] ml-[4px]">
                    <button className="w-[120px] h-full bg-[#2c95f1] text-white text-[18px] font-semibold rounded-[10px] cursor-pointer">
                        검색
                    </button>
                    <button className="w-[100px] h-full bg-[#334155] text-white text-[18px] font-semibold rounded-[10px] cursor-pointer">
                        초기화
                    </button>
                </div>
            </div>

            {/* 검색 결과 요약 : 슬림 스트립 */}
            <div className="flex w-full h-[64px] shrink-0 gap-[20px]">
                <div className="flex flex-1 bg-[#1E293B] text-white justify-between rounded-[15px] items-center px-[24px]">
                    <span className="text-[18px] font-semibold text-[#94A3B8]">
                        검색 품목
                    </span>
                    <div className="flex items-baseline gap-[6px]">
                        <span className="text-[24px] text-[#2c95f1] font-bold">
                            15
                        </span>
                        <span className="text-[16px] text-[#94A3B8]">건</span>
                    </div>
                </div>
                <div className="flex flex-1 bg-[#1E293B] text-white justify-between rounded-[15px] items-center px-[24px]">
                    <span className="text-[18px] font-semibold text-[#94A3B8]">
                        총 수량
                    </span>
                    <div className="flex items-baseline gap-[6px]">
                        <span className="text-[24px] text-[#5DCAA5] font-bold">
                            1,550
                        </span>
                        <span className="text-[16px] text-[#94A3B8]">EA</span>
                    </div>
                </div>
                <div className="flex flex-1 bg-[#1E293B] text-white justify-between rounded-[15px] items-center px-[24px]">
                    <span className="text-[18px] font-semibold text-[#94A3B8]">
                        재고 부족
                    </span>
                    <div className="flex items-baseline gap-[6px]">
                        <span className="text-[24px] text-[#F59E0B] font-bold">
                            3
                        </span>
                        <span className="text-[16px] text-[#94A3B8]">건</span>
                    </div>
                </div>
                <div className="flex flex-1 bg-[#1E293B] text-white justify-between rounded-[15px] items-center px-[24px]">
                    <span className="text-[18px] font-semibold text-[#94A3B8]">
                        이상 품목
                    </span>
                    <div className="flex items-baseline gap-[6px]">
                        <span className="text-[24px] text-[#F87171] font-bold">
                            2
                        </span>
                        <span className="text-[16px] text-[#94A3B8]">건</span>
                    </div>
                </div>
            </div>

            {/* 품목 목록 : 남은 높이 전부 */}
            <div className="flex flex-1 min-h-0 w-full">
                <div className="flex flex-col w-full h-full bg-[#1E293B] rounded-[15px] p-[20px]">
                    <div className="flex justify-between items-center shrink-0 mb-[12px] px-[4px]">
                        <span className="text-white text-[20px] font-bold">
                            품목 목록
                        </span>
                        <span className="text-[#94A3B8] text-[16px]">
                            총 {dummyItemData.length}건
                        </span>
                    </div>

                    <div className="flex-1 min-h-0 overflow-auto">
                        <table className="w-full border-collapse">
                            <thead className="sticky top-0 bg-[#1E293B] z-10">
                                <tr className="text-[#94A3B8] text-[16px] text-left border-b border-[#334155]">
                                    <th className="py-[12px] px-[12px] font-semibold w-[5%]">
                                        No
                                    </th>
                                    <th className="py-[12px] px-[12px] font-semibold w-[14%]">
                                        품목코드
                                    </th>
                                    <th className="py-[12px] px-[12px] font-semibold w-[12%]">
                                        품목명
                                    </th>
                                    <th className="py-[12px] px-[12px] font-semibold w-[13%]">
                                        LOT 번호
                                    </th>
                                    <th className="py-[12px] px-[12px] font-semibold text-right w-[9%]">
                                        수량
                                    </th>
                                    <th className="py-[12px] px-[12px] font-semibold text-center w-[9%]">
                                        로케이션
                                    </th>
                                    <th className="py-[12px] px-[12px] font-semibold w-[10%]">
                                        카테고리
                                    </th>
                                    <th className="py-[12px] px-[12px] font-semibold w-[12%]">
                                        입고일
                                    </th>
                                    <th className="py-[12px] px-[12px] font-semibold text-center w-[9%]">
                                        상태
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {dummyItemData.map((it) => (
                                    <tr
                                        key={it.itemSeq}
                                        className="text-[17px] border-b border-[#283548] hover:bg-[#243044] cursor-pointer transition-colors"
                                    >
                                        <td className="py-[12px] px-[12px] text-[#94A3B8]">
                                            {it.itemSeq}
                                        </td>
                                        <td className="py-[12px] px-[12px] text-white font-semibold">
                                            {it.code}
                                        </td>
                                        <td className="py-[12px] px-[12px] text-[#E2E8F0]">
                                            {it.name}
                                        </td>
                                        <td className="py-[12px] px-[12px] text-[#CBD5E1]">
                                            {it.lotNum}
                                        </td>
                                        <td className="py-[12px] px-[12px] text-[#E2E8F0] text-right">
                                            {it.quantity} EA
                                        </td>
                                        <td className="py-[12px] px-[12px] text-center">
                                            <span className="inline-block bg-[#334155] text-[#CBD5E1] text-[15px] font-medium px-[12px] py-[4px] rounded-[8px]">
                                                {it.location}
                                            </span>
                                        </td>
                                        <td className="py-[12px] px-[12px] text-[#CBD5E1]">
                                            {it.category}
                                        </td>
                                        <td className="py-[12px] px-[12px] text-[#94A3B8]">
                                            {it.date}
                                        </td>
                                        <td className="py-[12px] px-[12px] text-center">
                                            <span
                                                className={`inline-block text-[15px] font-medium px-[14px] py-[5px] rounded-[8px] ${statusBadge(it.status)}`}
                                            >
                                                {it.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
