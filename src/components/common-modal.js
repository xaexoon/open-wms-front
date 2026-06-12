import { useEffect } from "react";
import { createPortal } from "react-dom";

import { ReactComponent as IconInfo } from "../assets/images/icon-info.svg";
import { ReactComponent as IconSuccess } from "../assets/images/icon-success.svg";
import { ReactComponent as IconWarning } from "../assets/images/icon-warning.svg";
import { ReactComponent as IconClose } from "../assets/images/icon-close.svg";
import { ReactComponent as IconDanger } from "../assets/images/icon-danger.svg";

// iconType 문자열 → SVG 컴포넌트
const ICONS = {
    info: IconInfo,
    success: IconSuccess,
    warning: IconWarning,
    danger: IconDanger,
};

// iconType 별 아이콘 원형 배경 + 아이콘 색
const ICON_STYLE = {
    info: "bg-[#2c95f1]/15 text-[#2c95f1]",
    success: "bg-[#5DCAA5]/15 text-[#5DCAA5]",
    warning: "bg-[#F59E0B]/15 text-[#F59E0B]",
    danger: "bg-[#F87171]/15 text-[#F87171]",
};

// iconType 별 확인 버튼 색 (밝은 색 버튼은 어두운 글자로 대비 확보)
const BTN_STYLE = {
    info: "bg-[#2c95f1] text-white",
    success: "bg-[#5DCAA5] text-[#04342C]",
    warning: "bg-[#F59E0B] text-[#3A2A04]",
    danger: "bg-[#F87171] text-[#450a0a]",
};

/**
 * 공용 모달
 * @param {string} type        "alert"(확인만) | "confirm"(취소+확인)
 * @param {string} title       타이틀
 * @param {node}   msg         메시지 (문자열 또는 JSX)
 * @param {string} iconType    "info" | "success" | "warning" | "danger"
 * @param {func}   onClose     닫기 (취소 / X / 오버레이 / ESC)
 * @param {func}   onConfirm   확인 버튼 클릭
 * @param {string} confirmText 확인 버튼 문구 (기본: 확인)
 * @param {string} cancelText  취소 버튼 문구 (기본: 취소)
 */
export default function CommonModal({
    type = "alert",
    title,
    msg,
    iconType = "info",
    onClose,
    onConfirm,
    confirmText = "확인",
    cancelText = "취소",
}) {
    const Icon = ICONS[iconType] ?? IconInfo;

    // ESC 키로 닫기
    useEffect(() => {
        const onKey = (e) => {
            if (e.key === "Escape" && onClose) {
                onClose();
            }
        };
        window.addEventListener("keydown", onKey);
        return () => window.removeEventListener("keydown", onKey);
    }, [onClose]);

    return createPortal(
        // 오버레이 — 화면 전체 덮기 + 어둡게 + 블러, 클릭 시 닫기
        <div
            onClick={onClose}
            className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/65 backdrop-blur-[2px]"
        >
            {/* 모달 본체 — 내부 클릭은 닫힘 전파 차단 */}
            <div
                onClick={(e) => e.stopPropagation()}
                className="relative flex flex-col w-[650px] bg-[#1E293B] border border-[#334155] rounded-[15px] px-[32px] pt-[40px] pb-[30px] items-center shadow-[0_24px_60px_rgba(0,0,0,0.45)]"
            >
                {/* 우상단 닫기 버튼 */}
                <button
                    onClick={onClose}
                    className="absolute top-[16px] right-[16px] w-[40px] h-[40px] flex items-center justify-center rounded-[10px] text-[#94A3B8] hover:bg-[#334155] hover:text-white cursor-pointer transition-colors"
                >
                    <IconClose className="w-[20px] h-[20px]" />
                </button>

                {/* 아이콘 — 원형 배경 + currentColor */}
                <div
                    className={`flex w-[72px] h-[72px] rounded-full items-center justify-center ${
                        ICON_STYLE[iconType] ?? ICON_STYLE.info
                    }`}
                >
                    <Icon className="w-[34px] h-[34px]" />
                </div>

                {/* 타이틀 */}
                <span className="text-white text-[26px] font-bold mt-[20px] text-center">
                    {title}
                </span>

                {/* 메시지 */}
                {msg && (
                    <p className="text-[#94A3B8] text-[18px] leading-[1.6] mt-[12px] text-center">
                        {msg}
                    </p>
                )}

                {/* 버튼 영역 */}
                <div className="flex gap-[14px] w-full mt-[32px]">
                    {type === "confirm" && (
                        <button
                            onClick={onClose}
                            className="flex-1 h-[56px] rounded-[12px] bg-[#334155] text-white text-[20px] font-semibold cursor-pointer hover:opacity-90 transition-opacity"
                        >
                            {cancelText}
                        </button>
                    )}
                    <button
                        onClick={onConfirm ?? onClose}
                        className={`flex-1 h-[56px] rounded-[12px] text-[20px] font-semibold cursor-pointer hover:opacity-90 transition-opacity ${
                            BTN_STYLE[iconType] ?? BTN_STYLE.info
                        }`}
                    >
                        {confirmText}
                    </button>
                </div>
            </div>
        </div>,
        document.body,
    );
}
