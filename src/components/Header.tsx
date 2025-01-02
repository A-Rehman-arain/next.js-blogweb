import Link from 'next/link';
import React from 'react';
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "../components/ui/sheet";

export function Header() {
  return (
    <div className="absolute w-full h-[80px] left-0 top-0 bg-[rgba(0,0,0,0.2)] flex items-center justify-between px-6 md:px-12 z-20">
      {/* Logo */}
      <div className="text-[#F8F9FA] font-bold text-lg md:text-2xl">
        Cars
      </div>

      {/* Menu and Icons */}
      <div className="flex items-center gap-6">
        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center text-sm font-bold text-[#F8F9FA] gap-6">
          <li><Link href="/" className="hover:underline cursor-pointer">Home</Link></li>
          <li><Link href="/articles" className="hover:underline cursor-pointer">Blogs</Link></li>
          <li><Link href="/about" className="hover:underline cursor-pointer">About</Link></li>
          <li><Link href="/contact-us" className="hover:underline cursor-pointer">Contact Us</Link></li>
        </ul>

        
       
        {/* Mobile Menu Trigger */}
        <div className="md:hidden z-20">
          <Sheet>
            <SheetTrigger>
              <Menu className="w-6 h-6 text-[#F8F9FA]" />
            </SheetTrigger>
            <SheetContent className="text-white">
              {/* Mobile Menu */}
              <ul className="flex flex-col items-center text-sm font-bold gap-6 mt-20">
                <li><Link href="/" className="hover:underline cursor-pointer">Home</Link></li>
                <li><Link href="/articles" className="hover:underline cursor-pointer">Articles</Link></li>
                <li><Link href="/about" className="hover:underline cursor-pointer">About</Link></li>
                <li><Link href="/contact-us" className="hover:underline cursor-pointer">Contact Us</Link></li>
              </ul>
              
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
}
