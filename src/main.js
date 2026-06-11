import { Routes, Route, Navigate } from "react-router-dom";
import Header from "./components/haeder";
import Rack from "./pages/rack-page";
import Item from "./pages/item-page";
import Inventory from "./pages/inventory-page";

export default function Main() {
    return (
        <div className="flex flex-col w-screen h-screen bg-[#30363E] overflow-hidden">
            <Header />
            <main className="w-full flex-1 overflow-auto bg-[#30363E] flex items-center justify-center p-[30px]">
                <Routes>
                    <Route path="/" element={<Navigate to="/rack" replace />} />
                    <Route path="/rack" element={<Rack />}></Route>
                    <Route path="/item" element={<Item />}></Route>
                    <Route path="/inventory" element={<Inventory />}></Route>
                </Routes>
            </main>
        </div>
    );
}
