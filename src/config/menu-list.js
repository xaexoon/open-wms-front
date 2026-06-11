import { ReactComponent as MenuRack } from "../assets/images/menu-rack.svg";
import { ReactComponent as MenuSearch } from "../assets/images/menu-search.svg";
import { ReactComponent as MenuInventory } from "../assets/images/menu-inventory.svg";

export const menuList = [
    { label: "랙 현황", path: "/rack", icon: MenuRack },
    { label: "품목 조회", path: "/item", icon: MenuSearch },
    { label: "재고 관리", path: "/inventory", icon: MenuInventory },
];
