export default function Inventory() {
    // ✅ default export
    return (
        <div className="flex flex-col w-full h-full ">
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
        </div>
    );
}
