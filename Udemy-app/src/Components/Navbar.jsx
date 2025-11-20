import { Search, ShoppingCart, Globe, Menu } from "lucide-react";
import { Link } from "react-router-dom";

import Logo from "../assets/logo-udemy.svg";




export default function UdemyNavbar() {
  return (
    <nav className="border-b bg-white w-full">
      <div className="w-full px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link to="/">
            <img src={Logo} alt="Udemy Logo" className="h-8" />
          </Link>
          <button className="hidden md:flex items-center gap-1 px-3 py-1 hover:bg-purple-50 hover:text-purple-600 rounded hover:bg-gray-100">Explore</button>
        </div>

        <div className="flex-1 hidden md:flex justify-center">
          <div className="flex w-full max-w-xl items-center border border-black-300 rounded-full overflow-hidden">
                <div className="flex items-center justify-center">
                    <Search size={14} />
                </div>
            <input
              type="text"
              placeholder="Search for anything"
              className="flex-1 px-4 py-2 outline-none"
            />
          </div>
        </div>

        <div className="hidden lg:flex items-center gap-4">
          <Link to="/pricing" className="hover:bg-purple-100 hover:text-purple-600">Plans & Pricing</Link>
          <Link to="/business" className="hover:bg-purple-100 hover:text-purple-600">Udemy Business</Link>
          <Link to="/teach" className="hover:bg-purple-100 hover:text-purple-600">Teach on Udemy</Link>
          <button className="p-2 hover:bg-purple-100 rounded"><ShoppingCart size={20} /></button>
          <button className="border-2 border-purple-800 font-bold text-purple-600 px-4 py-2 rounded hover:bg-purple-50">Log in</button>
          <button className="bg-purple-800 text-white font-bold px-4 py-1 rounded hover:brightness-90">Sign up</button>
          <button className="flex items-center gap-1 p-2 hover:bg-purple-100 rounded"><Globe size={18} /></button>
        </div>

      </div>
    </nav>
  );
}