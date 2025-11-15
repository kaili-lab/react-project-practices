import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar";
// import Footer from "../components/footer"; // 若需要全局 Footer 可取消注释

function RootLayout() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* 全局导航 */}
      <div className="max-w-7xl mx-auto w-full">
        <Navbar />
      </div>

      {/* 页面主体内容区域 */}
      <main className="max-w-7xl mx-auto w-full flex-1 flex">
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
