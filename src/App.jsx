import React, { useState } from "react";

import ProfileCenterTest from "./pages/profileCenterTest/ProfileCenterTest";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const renderPage = () => {
    switch (currentPage) {
      case "profile":
      case "profileTest":
        return <ProfileCenterTest />;
      default:
        return <ProfileCenterTest />;
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
