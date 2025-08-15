import React, { useState } from "react";

// import ProfileCenterTest from "./pages/profileCenterTest/ProfileCenterTest";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "profile":
      case "profileTest":
        return <div>Profile Page</div>;
      default:
        return (
          <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-4xl font-bold text-gray-800 mb-4">
                🎉 构建成功！
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                这是一个测试页面，证明React应用已经正常运行
              </p>
              <div className="space-y-4">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                    当前状态
                  </h2>
                  <p className="text-gray-600">页面: {currentPage}</p>
                  <p className="text-gray-600">时间: {new Date().toLocaleString()}</p>
                </div>
                <button
                  onClick={() => setCurrentPage(currentPage === "home" ? "profile" : "home")}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  切换页面
                </button>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="pt-20">
        {renderPage()}
      </div>
    </div>
  );
}

export default App;
