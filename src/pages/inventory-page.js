export default function Inventory() {
    // ✅ default export
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
            {/* 재고 현황 수량 카드영역*/}
            <div className="flex w-full h-[130px] gap-[20px]">
                {/* 카드 */}
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
                <div className="flex flex-[1] flex-col gap-[20px]">
                    <div className="flex flex-1 bg-[#1E293B] rounded-[15px]"></div>
                    <div className="flex flex-1 bg-[#1E293B] rounded-[15px]"></div>
                </div>
                <div className="flex flex-[3] flex-col h-full bg-[#1E293B] rounded-[15px]"></div>
            </div>
        </div>
    );
}
