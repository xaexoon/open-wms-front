import { Fragment, useState } from "react";
import {
    Listbox,
    ListboxButton,
    ListboxOptions,
    ListboxOption,
} from "@headlessui/react";

// 고정 상수
const rackList = ["A", "B", "C", "D", "E", "F"];

export default function Rack() {
    const [selected, setSelected] = useState(rackList[0]);
    const [cellSelected, setCellSelected] = useState("");

    const dummyCardData = {
        totalPercent: 62.5,
        emptyCell: 9,
        fullCell: 15,
        warningCell: 2,
    };

    const dummyItemData = [
        {
            itemSeq: 1,
            name: "item_1",
            code: "item_code_1",
            quantity: 100,
            lotNum: "Lot-P001-1",
            date: "2026-06-08",
        },
        {
            itemSeq: 2,
            name: "item_2",
            code: "item_code_2",
            quantity: 80,
            lotNum: "Lot-P002-1",
            date: "2026-06-08",
        },
        {
            itemSeq: 3,
            name: "item_3",
            code: "item_code_3",
            quantity: 120,
            lotNum: "Lot-P003-1",
            date: "2026-06-09",
        },
        {
            itemSeq: 4,
            name: "item_4",
            code: "item_code_4",
            quantity: 60,
            lotNum: "Lot-P004-1",
            date: "2026-06-09",
        },
        {
            itemSeq: 5,
            name: "item_5",
            code: "item_code_5",
            quantity: 200,
            lotNum: "Lot-P005-1",
            date: "2026-06-09",
        },
        {
            itemSeq: 6,
            name: "item_6",
            code: "item_code_6",
            quantity: 45,
            lotNum: "Lot-P006-1",
            date: "2026-06-10",
        },
        {
            itemSeq: 7,
            name: "item_7",
            code: "item_code_7",
            quantity: 150,
            lotNum: "Lot-P007-1",
            date: "2026-06-10",
        },
        {
            itemSeq: 8,
            name: "item_8",
            code: "item_code_8",
            quantity: 90,
            lotNum: "Lot-P008-1",
            date: "2026-06-10",
        },
        {
            itemSeq: 9,
            name: "item_9",
            code: "item_code_9",
            quantity: 110,
            lotNum: "Lot-P009-1",
            date: "2026-06-11",
        },
        {
            itemSeq: 10,
            name: "item_10",
            code: "item_code_10",
            quantity: 75,
            lotNum: "Lot-P010-1",
            date: "2026-06-11",
        },
        {
            itemSeq: 11,
            name: "item_11",
            code: "item_code_11",
            quantity: 130,
            lotNum: "Lot-P011-1",
            date: "2026-06-11",
        },
        {
            itemSeq: 12,
            name: "item_12",
            code: "item_code_12",
            quantity: 50,
            lotNum: "Lot-P012-1",
            date: "2026-06-12",
        },
        {
            itemSeq: 13,
            name: "item_13",
            code: "item_code_13",
            quantity: 95,
            lotNum: "Lot-P013-1",
            date: "2026-06-12",
        },
        {
            itemSeq: 14,
            name: "item_14",
            code: "item_code_14",
            quantity: 160,
            lotNum: "Lot-P014-1",
            date: "2026-06-12",
        },
        {
            itemSeq: 15,
            name: "item_15",
            code: "item_code_15",
            quantity: 85,
            lotNum: "Lot-P015-1",
            date: "2026-06-13",
        },
    ];

    const dummyRackData = {
        // A열
        A1: { empty: false, itemSeq: 1 },
        A2: { empty: true, itemSeq: null },
        A3: { empty: false, itemSeq: 2 },
        A4: { empty: false, itemSeq: 3 },
        // B열
        B1: { empty: false, itemSeq: 4 },
        B2: { empty: false, itemSeq: 5 },
        B3: { empty: true, itemSeq: null },
        B4: { empty: true, itemSeq: null },
        // C열
        C1: { empty: false, itemSeq: 6 },
        C2: { empty: false, itemSeq: 7 },
        C3: { empty: false, itemSeq: 8 },
        C4: { empty: false, itemSeq: 9 },
        // D열
        D1: { empty: false, itemSeq: 10 },
        D2: { empty: true, itemSeq: null },
        D3: { empty: false, itemSeq: 11 },
        D4: { empty: true, itemSeq: null },
        // E열
        E1: { empty: false, itemSeq: 12 },
        E2: { empty: true, itemSeq: null },
        E3: { empty: false, itemSeq: 13 },
        E4: { empty: true, itemSeq: null },
        // F열
        F1: { empty: false, itemSeq: 14 },
        F2: { empty: true, itemSeq: null },
        F3: { empty: true, itemSeq: null },
        F4: { empty: false, itemSeq: 15 },
    };

    const rackGrid = {
        row: 4,
        col: 6,
    };

    const selectedCellData = cellSelected ? dummyRackData[cellSelected] : null;
    const selectedItem = selectedCellData?.itemSeq
        ? dummyItemData.find((it) => it.itemSeq === selectedCellData.itemSeq)
        : null;

    function DetailRow({ label, value, last }) {
        return (
            <div
                className={`flex justify-between py-[14px] ${
                    last ? "" : "border-b border-[#334155]"
                }`}
            >
                <span className="text-[#94A3B8] text-[20px]">{label}</span>
                <span className="text-[#E2E8F0] text-[20px] font-medium">
                    {value}
                </span>
            </div>
        );
    }

    return (
        <div className="flex flex-col w-full h-full ">
            {/* 랙 현황 - 상단 타이틀 및 카드타입 데이터 */}
            <div className="flex flex-col w-full h-[230px] shrink-0 gap-[20px]">
                <div className="w-full flex">
                    {/* 타이틀 */}
                    <div className="flex flex-1 flex-col justify-center pl-[10px]">
                        <span className="text-[20px] text-gray-400 font-bold flex items-center">
                            RACK STATUS
                        </span>
                        <span className="text-[40px] text-white font-bold flex items-center">
                            랙 현황
                        </span>
                    </div>
                    {/* 버튼 영역 */}
                    <div className="flex flex-1 justify-end gap-[20px]">
                        <button className="w-[160px] h-[60px] text-[24px] text-white font-semibold rounded-[15px] bg-[#1E293B]">
                            알림
                        </button>
                        <button className="w-[160px] h-[60px] text-[24px] text-white font-semibold rounded-[15px] bg-[#1E293B]">
                            WS 연결 끊김
                        </button>
                        <button className="w-[160px] h-[60px] text-[24px] text-white font-semibold rounded-[15px] bg-[#1E293B]">
                            오류
                        </button>
                        <button className="w-[160px] h-[60px] text-[24px] text-white font-semibold rounded-[15px] bg-[#1E293B]">
                            새로고침
                        </button>
                    </div>
                </div>
                {/* 카드타입 데이터 */}
                <div className="flex w-full h-[100px] gap-[20px]">
                    <div className="flex-1 flex h-full rounded-[15px] bg-[#1E293B] items-center">
                        <div className="flex w-full items-center">
                            <span className="flex flex-1 text-white text-[28px] font-bold justify-center">
                                전체 점유율
                            </span>
                            <span className="flex flex-1 text-[#2c95f1] text-[32px] justify-center">
                                {dummyCardData.totalPercent}
                                <span className="pl-[10px] text-white">%</span>
                            </span>
                        </div>
                    </div>
                    <div className="flex-1 flex h-full rounded-[15px] bg-[#1E293B] items-center">
                        <div className="flex w-full items-center">
                            <span className="flex flex-1 text-white text-[28px] font-bold justify-center">
                                빈 칸
                            </span>
                            <span className="flex flex-1 text-[#94A3B8] text-[32px] justify-center">
                                {dummyCardData.emptyCell}
                                <span className="pl-[10px] text-white">칸</span>
                            </span>
                        </div>
                    </div>
                    <div className="flex-1 flex h-full rounded-[15px] bg-[#1E293B] items-center">
                        <div className="flex w-full items-center">
                            <span className="flex flex-1 text-white text-[28px] font-bold justify-center">
                                적치된 칸
                            </span>
                            <span className="flex flex-1 text-[#5DCAA5] text-[32px] justify-center">
                                {dummyCardData.fullCell}
                                <span className="pl-[10px] text-white">칸</span>
                            </span>
                        </div>
                    </div>
                    <div className="flex-1 flex h-full rounded-[15px] bg-[#1E293B] items-center">
                        <div className="flex w-full items-center">
                            <span className="flex flex-1 text-white text-[28px] font-bold justify-center">
                                이상 로케이션
                            </span>
                            <span className="flex flex-1 text-[#F59E0B] text-[32px] justify-center">
                                {dummyCardData.warningCell}
                                <span className="pl-[10px] text-white">칸</span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>

            {/* 랙 현황 - 그리드 식 랙 화면 */}
            <div className="flex flex-1 min-h-0 w-full gap-[30px]">
                {/* 그리드 영역 */}
                <div className="flex flex-1 flex-col h-full bg-[#1E293B] gap-[30px] p-[30px] rounded-[15px]">
                    <div className="flex justify-between px-[10px]">
                        <span className="text-[24px] text-white font-bold">
                            {selected} RACK
                        </span>

                        <Listbox value={selected} onChange={setSelected}>
                            <div className="relative w-[200px]">
                                <ListboxButton className="w-full h-[50px] px-[16px] flex items-center justify-between text-[20px] text-white bg-[#334155] rounded-[10px] cursor-pointer">
                                    <span>{selected} RACK</span>
                                    <span className="text-[#94A3B8]">▾</span>
                                </ListboxButton>

                                <ListboxOptions className="absolute z-10 mt-[6px] w-full bg-[#334155] border border-[#475569] rounded-[10px] overflow-hidden shadow-lg">
                                    {rackList.map((rack) => (
                                        <ListboxOption
                                            key={rack}
                                            value={rack}
                                            className="px-[16px] py-[12px] text-[18px] text-[#CBD5E1] cursor-pointer data-[focus]:bg-[#475569] data-[selected]:bg-[#2c95f1] data-[selected]:text-white"
                                        >
                                            {rack} RACK
                                        </ListboxOption>
                                    ))}
                                </ListboxOptions>
                            </div>
                        </Listbox>
                    </div>

                    <div
                        className="grid gap-[10px] w-full flex-1 min-h-0"
                        style={{
                            gridTemplateColumns: `40px repeat(${rackGrid.col}, 1fr)`,
                            gridTemplateRows: `40px repeat(${rackGrid.row}, 1fr)`,
                        }}
                    >
                        {/* 좌상단 빈 모서리 칸 */}
                        <div />

                        {/* 상단 열 라벨: A~F */}
                        {Array.from({ length: rackGrid.col }).map((_, c) => (
                            <div
                                key={`col-${c}`}
                                className="flex items-center justify-center text-gray-400 text-[28px] font-bold"
                            >
                                {String.fromCharCode(65 + c)}
                            </div>
                        ))}

                        {/* 본문: 행마다 [행라벨 + 셀들] */}
                        {Array.from({ length: rackGrid.row }).map((_, r) => {
                            const rowNum = rackGrid.row - r;
                            return (
                                <Fragment key={`row-${r}`}>
                                    <div className="flex items-center justify-center text-gray-400 text-[28px] font-bold">
                                        {rowNum}
                                    </div>
                                    {Array.from({ length: rackGrid.col }).map(
                                        (_, c) => {
                                            const cellKey =
                                                String.fromCharCode(65 + c) +
                                                rowNum;
                                            const cell = dummyRackData[cellKey];
                                            const isEmpty = cell?.empty;
                                            const isSelected =
                                                cellSelected === cellKey;

                                            return (
                                                <div
                                                    key={cellKey}
                                                    onClick={() =>
                                                        setCellSelected(cellKey)
                                                    }
                                                    className={`flex items-center justify-center rounded-[8px] text-[20px] font-bold cursor-pointer ${
                                                        isEmpty
                                                            ? "bg-[#334155] text-[#94A3B8]"
                                                            : "bg-[#5DCAA5] text-[#04342C]"
                                                    } ${isSelected ? "ring-2 ring-[#F59E0B]" : ""}`}
                                                ></div>
                                            );
                                        },
                                    )}
                                </Fragment>
                            );
                        })}
                    </div>
                </div>

                {/* 로케이션 영역 */}
                <div className="flex flex-1 h-full bg-[#1E293B] rounded-[15px] p-[30px]">
                    {!cellSelected ? (
                        // 빈 상태
                        <div className="flex w-full h-full justify-center items-center">
                            <div className="flex flex-col items-center gap-[10px]">
                                <div className="w-[60px] h-[60px] rounded-[12px] border-2 border-dashed border-[#475569]" />
                                <span className="text-white text-[32px]">
                                    셀을 선택하세요
                                </span>
                                <span className="text-[#64748B] text-[24px] text-center">
                                    그리드에서 칸을 누르면 <br /> 상세 정보가
                                    표시됩니다
                                </span>
                            </div>
                        </div>
                    ) : (
                        // 상세
                        <div className="flex flex-col w-full h-full gap-[20px]">
                            {/* 헤더: 제목 + 상태 뱃지 */}
                            <div className="flex items-center justify-between px-[10px]">
                                <span className="text-white text-[28px] font-bold">
                                    로케이션 상세
                                </span>
                                {selectedCellData?.empty ? (
                                    <span className="bg-[#334155] text-[#94A3B8] text-[18px] font-medium px-[16px] py-[6px] rounded-[10px]">
                                        빈 칸
                                    </span>
                                ) : (
                                    <span className="bg-[#5DCAA5] text-[#04342C] text-[18px] font-medium px-[16px] py-[6px] rounded-[10px]">
                                        적치
                                    </span>
                                )}
                            </div>

                            {/* 로케이션 코드 박스 */}
                            <div className="flex bg-[#334155] rounded-[12px] px-[20px] py-[10px] items-center gap-[20px]">
                                <div className="text-white text-[36px] font-bold tracking-wider">
                                    {cellSelected}
                                </div>
                                <div className="text-[#94A3B8] text-[16px] mt-[2px]">
                                    {selected}랙 · {cellSelected.slice(1)}열
                                </div>
                            </div>

                            {/* 품목 상세 — 남는 높이 차지 + 넘치면 스크롤 */}
                            <div className="flex-1 min-h-0 overflow-auto px-[10px]">
                                {selectedItem ? (
                                    <div className="flex flex-col">
                                        <DetailRow
                                            label="품목코드"
                                            value={selectedItem.code}
                                        />
                                        <DetailRow
                                            label="품목명"
                                            value={selectedItem.name}
                                        />
                                        <DetailRow
                                            label="수량"
                                            value={`${selectedItem.quantity} EA`}
                                        />
                                        <DetailRow
                                            label="로트번호"
                                            value={selectedItem.lotNum}
                                        />
                                        <DetailRow
                                            label="입고일"
                                            value={selectedItem.date}
                                            last
                                        />
                                    </div>
                                ) : (
                                    <div className="flex h-full items-center justify-center">
                                        <span className="text-[#64748B] text-[24px]">
                                            비어 있는 로케이션입니다
                                        </span>
                                    </div>
                                )}
                            </div>

                            {/* 하단 버튼 — 고정 높이, 안 줄어듦 */}
                            <div className="flex gap-[12px] shrink-0">
                                <button className="flex-1 h-[56px] bg-[#2c95f1] text-white text-[20px] font-medium rounded-[12px] cursor-pointer">
                                    이동
                                </button>
                                <button className="flex-1 h-[56px] bg-[#334155] text-[#CBD5E1] text-[20px] font-medium rounded-[12px] cursor-pointer">
                                    이력
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
