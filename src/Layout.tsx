import React from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div>
      {/* Fixed Navbar */}
      <Navbar />

      {/* Page content below navbar */}
      <main className="pt-12">
        <Outlet />
      </main>
    </div>
  );
}
