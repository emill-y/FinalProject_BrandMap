

import { NavLink } from "react-router-dom";

export default function NavBar() {
  const baseStyle =
    "px-4 py-2 text-sm font-medium rounded-lg transition hover:bg-gray-100";
  const active = "text-indigo-600 bg-indigo-100 font-semibold";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold text-indigo-600">BrandMap</h1>
        <nav className="space-x-3">
          <NavLink to="/" className={({ isActive }) => `${baseStyle} ${isActive ? active : "text-gray-600"}`}>Home</NavLink>
          <NavLink to="/submit" className={({ isActive }) => `${baseStyle} ${isActive ? active : "text-gray-600"}`}>Submit</NavLink>
          <NavLink to="/map" className={({ isActive }) => `${baseStyle} ${isActive ? active : "text-gray-600"}`}>Mind Map</NavLink>
        </nav>
      </div>
    </header>
  );
}
