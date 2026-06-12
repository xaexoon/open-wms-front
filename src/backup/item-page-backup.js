import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from "@headlessui/react";
import { useState } from "react";

const categoryList = ["전체", "원자재", "반제품", "완제품", "부자재"];
const statusList = ["정상", "부족", "과다", "이상"];

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

export default function Item() {
    const [category, setCategory] = useState(categoryList[0]);
    const [status, setStatus] = useState(statusList[0]);
    const [searchOpen, setSearchOpen] = useState(true);

    return (
        <div className="flex flex-col w-full h-full gap-[20px]">
            {/* 상단 타이틀 및 버튼 */}
            <div className="flex justify-between shrink-0">
                <div className="flex flex-1 flex-col justify-center pl-[10px]">
                    <span className="text-[20px] text-gray-400 font-bold flex items-center">
                        ITEM SEARCH
                    </span>
                    <span className="text-[40px] text-white font-bold flex items-center">
                        품목 조회
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

            {/* 검색 영역 카드 */}
            <div className="flex flex-col w-full shrink-0 bg-[#1E293B] rounded-[15px] p-[20px] gap-[20px]">
                {/* 검색 헤더 (항상 보임) - 접기/펴기 토글 */}
                <button
                    onClick={() => setSearchOpen((v) => !v)}
                    className="flex w-full items-center justify-between cursor-pointer"
                >
                    <span className="text-white text-[24px] font-bold">
                        검색 조건
                    </span>
                    <span
                        className={`text-[#94A3B8] text-[24px] transition-transform duration-200 ${
                            searchOpen ? "rotate-180" : "rotate-0"
                        }`}
                    >
                        ▾
                    </span>
                </button>

                {/* 검색 본문 (접힘 대상) */}
                {searchOpen && (
                    <div className="flex flex-col gap-[20px] ">
                        {/* 첫번째줄 */}
                        <div className="flex gap-[20px]">
                            <div className="flex flex-1 flex-col gap-[10px]">
                                <span className="text-[#94A3B8] text-[24px]">
                                    품목코드 / 품목명
                                </span>
                                <input className="h-[50px] bg-[#334155] rounded-[10px] px-[16px] text-[20px] text-white outline-none" />
                            </div>
                            <div className="flex flex-1 flex-col gap-[10px]">
                                <span className="text-[#94A3B8] text-[24px]">
                                    LOT 번호
                                </span>
                                <input className="h-[50px] bg-[#334155] rounded-[10px] px-[16px] text-[20px] text-white outline-none" />
                            </div>
                            <div className="flex flex-1 flex-col gap-[10px]">
                                <span className="text-[#94A3B8] text-[24px]">
                                    카테고리
                                </span>
                                <Listbox
                                    value={category}
                                    onChange={setCategory}
                                >
                                    <div className="relative h-[50px]">
                                        <ListboxButton className="w-full h-full px-[16px] flex items-center justify-between text-[20px] text-white bg-[#334155] rounded-[10px] cursor-pointer">
                                            <span>{category}</span>
                                            <span className="text-[#94A3B8]">
                                                ▾
                                            </span>
                                        </ListboxButton>
                                        <ListboxOptions className="absolute z-10 mt-[6px] w-full bg-[#334155] border border-[#475569] rounded-[10px] overflow-hidden shadow-lg">
                                            {categoryList.map((cat) => (
                                                <ListboxOption
                                                    key={cat}
                                                    value={cat}
                                                    className="px-[16px] py-[12px] text-[18px] text-[#CBD5E1] cursor-pointer data-[focus]:bg-[#475569] data-[selected]:bg-[#2c95f1] data-[selected]:text-white"
                                                >
                                                    {cat}
                                                </ListboxOption>
                                            ))}
                                        </ListboxOptions>
                                    </div>
                                </Listbox>
                            </div>
                        </div>

                        {/* 두번째줄 */}
                        <div className="flex gap-[20px]">
                            <div className="flex flex-1 flex-col gap-[10px]">
                                <span className="text-[#94A3B8] text-[24px]">
                                    입고일
                                </span>
                                <div className="flex h-[50px] items-center">
                                    <input
                                        type="date"
                                        className="flex-1 h-full bg-[#334155] rounded-[10px] px-[16px] text-[20px] text-white outline-none [color-scheme:dark]"
                                    />
                                    <span className="px-[20px] text-white text-[20px] flex items-center">
                                        ~
                                    </span>
                                    <input
                                        type="date"
                                        className="flex-1 h-full bg-[#334155] rounded-[10px] px-[16px] text-[20px] text-white outline-none [color-scheme:dark]"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-1 flex-col gap-[10px]">
                                <span className="text-[#94A3B8] text-[24px]">
                                    재고 상태
                                </span>
                                <Listbox value={status} onChange={setStatus}>
                                    <div className="relative h-[50px]">
                                        <ListboxButton className="w-full h-full px-[16px] flex items-center justify-between text-[20px] text-white bg-[#334155] rounded-[10px] cursor-pointer">
                                            <span>{status}</span>
                                            <span className="text-[#94A3B8]">
                                                ▾
                                            </span>
                                        </ListboxButton>
                                        <ListboxOptions className="absolute z-10 mt-[6px] w-full bg-[#334155] border border-[#475569] rounded-[10px] overflow-hidden shadow-lg">
                                            {statusList.map((cat) => (
                                                <ListboxOption
                                                    key={cat}
                                                    value={cat}
                                                    className="px-[16px] py-[12px] text-[18px] text-[#CBD5E1] cursor-pointer data-[focus]:bg-[#475569] data-[selected]:bg-[#2c95f1] data-[selected]:text-white"
                                                >
                                                    {cat}
                                                </ListboxOption>
                                            ))}
                                        </ListboxOptions>
                                    </div>
                                </Listbox>
                            </div>
                            <div className="flex flex-1 flex-col gap-[10px]">
                                {/* 라벨 자리 유지용 (버튼 높이를 옆 input과 동적으로 맞춤) */}
                                <span className="text-[24px] invisible">.</span>
                                <div className="flex gap-[20px] h-[50px]">
                                    <button className="flex-1 h-full bg-[#2c95f1] text-white text-[20px] font-medium rounded-[10px] flex justify-center items-center cursor-pointer">
                                        검색
                                    </button>
                                    <button className="flex-1 h-full bg-[#334155] text-white text-[20px] font-medium rounded-[10px] flex justify-center items-center cursor-pointer">
                                        초기화
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {/* 현황 카드 + 목록 카드 (남는 공간 차지) */}
            <div className="flex flex-1 min-h-0 flex-col gap-[20px]">
                {/* 현황 카드 */}
                <div className="flex w-full h-[80px] shrink-0 gap-[20px]">
                    <div className="flex w-full h-full gap-[30px]">
                        <div className="flex flex-1 bg-[#1E293B] text-white justify-between rounded-[15px] items-center px-[20px]">
                            <span className="text-[24px] font-bold">
                                검색 품목
                            </span>
                            <div className="flex text-[24px] gap-[6px]">
                                <span className="text-[#2c95f1] font-bold">
                                    15
                                </span>
                                <span>건</span>
                            </div>
                        </div>
                        <div className="flex flex-1 bg-[#1E293B] text-white justify-between rounded-[15px] items-center px-[20px]">
                            <span className="text-[24px] font-bold">
                                총 수량
                            </span>
                            <div className="flex text-[24px] gap-[6px]">
                                <span className="text-[#5DCAA5] font-bold">
                                    1,550
                                </span>
                                <span>EA</span>
                            </div>
                        </div>
                        <div className="flex flex-1 bg-[#1E293B] text-white justify-between rounded-[15px] items-center px-[20px]">
                            <span className="text-[24px] font-bold">
                                재고 부족
                            </span>
                            <div className="flex text-[24px] gap-[6px]">
                                <span className="text-[#F59E0B] font-bold">
                                    3
                                </span>
                                <span>건</span>
                            </div>
                        </div>
                        <div className="flex flex-1 bg-[#1E293B] text-white justify-between rounded-[15px] items-center px-[20px]">
                            <span className="text-[24px] font-bold">
                                이상 품목
                            </span>
                            <div className="flex text-[24px] gap-[6px]">
                                <span className="text-[#F87171] font-bold">
                                    2
                                </span>
                                <span>건</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* 목록 카드 (가로 전체) */}
                <div className="flex flex-1 min-h-0 w-full">
                    <div className="flex flex-col w-full h-full bg-[#1E293B] rounded-[15px] p-[20px]">
                        {/* 품목 타이틀 */}
                        <div className="flex justify-between items-center shrink-0 mb-[20px] px-[4px]">
                            <span className="text-white text-[24px] font-bold">
                                품목 목록
                            </span>
                            <span className="text-[#94A3B8] text-[20px]">
                                총 {dummyItemData.length}건
                            </span>
                        </div>

                        {/* 테이블 */}
                        <div className="flex-1 min-h-0 overflow-auto">
                            <table className="w-full border-collapse">
                                <thead className="sticky top-0 bg-[#1E293B] z-10">
                                    <tr className="text-[#94A3B8] text-[20px] text-left border-b border-[#334155]">
                                        <th className="py-[16px] px-[12px] font-semibold">
                                            No
                                        </th>
                                        <th className="py-[16px] px-[12px] font-semibold">
                                            품목코드
                                        </th>
                                        <th className="py-[16px] px-[12px] font-semibold">
                                            품목명
                                        </th>
                                        <th className="py-[16px] px-[12px] font-semibold">
                                            LOT 번호
                                        </th>
                                        <th className="py-[16px] px-[12px] font-semibold text-right">
                                            수량
                                        </th>
                                        <th className="py-[16px] px-[12px] font-semibold text-center">
                                            로케이션
                                        </th>
                                        <th className="py-[16px] px-[12px] font-semibold">
                                            카테고리
                                        </th>
                                        <th className="py-[16px] px-[12px] font-semibold">
                                            입고일
                                        </th>
                                        <th className="py-[16px] px-[12px] font-semibold text-center">
                                            상태
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {dummyItemData.map((it) => (
                                        <tr
                                            key={it.itemSeq}
                                            className="text-[20px] border-b border-[#283548] hover:bg-[#243044] cursor-pointer transition-colors"
                                        >
                                            <td className="py-[16px] px-[12px] text-[#94A3B8]">
                                                {it.itemSeq}
                                            </td>
                                            <td className="py-[16px] px-[12px] text-white font-medium">
                                                {it.code}
                                            </td>
                                            <td className="py-[16px] px-[12px] text-[#E2E8F0]">
                                                {it.name}
                                            </td>
                                            <td className="py-[16px] px-[12px] text-[#CBD5E1]">
                                                {it.lotNum}
                                            </td>
                                            <td className="py-[16px] px-[12px] text-[#E2E8F0] text-right">
                                                {it.quantity} EA
                                            </td>
                                            <td className="py-[16px] px-[12px] text-center">
                                                <span className="inline-block bg-[#334155] text-[#CBD5E1] text-[18px] font-medium px-[12px] py-[4px] rounded-[8px]">
                                                    {it.location}
                                                </span>
                                            </td>
                                            <td className="py-[16px] px-[12px] text-[#CBD5E1]">
                                                {it.category}
                                            </td>
                                            <td className="py-[16px] px-[12px] text-[#94A3B8]">
                                                {it.date}
                                            </td>
                                            <td className="py-[16px] px-[12px] text-center">
                                                <span
                                                    className={`inline-block text-[18px] font-medium px-[14px] py-[5px] rounded-[8px] ${statusBadge(it.status)}`}
                                                >
                                                    {it.status}
                                                </span>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* 페이지네이션 */}
                        {/* <div className="flex justify-center items-center gap-[10px] pt-[20px] shrink-0">
                            <button className="w-[44px] h-[44px] flex items-center justify-center text-[20px] text-[#CBD5E1] bg-[#334155] rounded-[10px] cursor-pointer">
                                ‹
                            </button>
                            {[1, 2, 3].map((n) => (
                                <button
                                    key={n}
                                    className={`w-[44px] h-[44px] flex items-center justify-center text-[20px] rounded-[10px] cursor-pointer ${
                                        n === 1
                                            ? "bg-[#2c95f1] text-white font-bold"
                                            : "text-[#CBD5E1] bg-[#334155]"
                                    }`}
                                >
                                    {n}
                                </button>
                            ))}
                            <button className="w-[44px] h-[44px] flex items-center justify-center text-[20px] text-[#CBD5E1] bg-[#334155] rounded-[10px] cursor-pointer">
                                ›
                            </button>
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    );
}
