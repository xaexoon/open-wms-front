import { ReactComponent as WmsLogo } from "../assets/images/wms-logo-dark.svg";
import { menuList } from "../config/menu-list";
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header className="w-full h-[160px] flex items-center bg-[#1E293B] px-[80px]">
            {/* 왼쪽: 로고 — 폭 고정 */}
            <div className="w-[500px] shrink-0 flex items-center ">
                <WmsLogo style={{ height: 120, width: 400 }} />
            </div>

            {/* 가운데: 타이틀 — 남는 공간 전부, 정중앙 */}
            <div className="flex-1 flex items-center justify-center gap-[100px]">
                <span className="text-white font-bold text-[60px]">
                    Open WMS
                </span>
                <span className="text-white font-bold text-[36px]">
                    창고 관리 시스템
                </span>
            </div>

            {/* 오른쪽: 메뉴 — 폭 고정, 왼쪽 영역과 동일 */}
            <div className="w-[500px] shrink-0 flex items-center justify-end gap-[40px] ">
                {menuList.map(({ label, path, icon: Icon }) => (
                    <NavLink
                        key={path}
                        to={path}
                        className={({ isActive }) =>
                            `flex flex-col items-center gap-[12px] w-[90px] transition-colors ${
                                isActive
                                    ? "text-[#2c95f1]"
                                    : "text-white hover:text-gray-500"
                            }`
                        }
                    >
                        {Icon && <Icon style={{ width: 60, height: 60 }} />}
                        <span className=" font-medium text-[22px]">
                            {label}
                        </span>
                    </NavLink>
                ))}
            </div>
        </header>
    );
}
