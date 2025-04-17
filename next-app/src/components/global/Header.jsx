"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const navItems = [
  { label: "Solutions" },
  { label: "Platform" },
  { label: "Partners" },
  { label: "Resources" },
  { label: "Company" },
];

export default function Header() {
  return (
    <header className="bg-black text-white px-6 py-4 shadow-md">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-8">
          <div className="flex items-center space-x-2">
            {/* Replace with your actual image */}
            <div className="w-6 h-6 bg-orange-500 rounded-full" />
            <span className="text-2xl font-semibold tracking-wider">AVIATRIX</span>
          </div>

          {/* Nav Menu */}
          <nav className="hidden lg:flex space-x-6">
            {navItems.map((item, index) => (
              <div key={index} className="flex items-center space-x-1 hover:underline cursor-pointer">
                <span>{item.label}</span>
                <ChevronDown size={16} />
              </div>
            ))}
          </nav>
        </div>

        {/* CTA Button */}
        <button className="bg-orange-600 hover:bg-orange-700 text-white font-semibold rounded-full px-5 py-2 shadow-lg transition-all">
          Get started
        </button>
      </div>
    </header>
  );
}
