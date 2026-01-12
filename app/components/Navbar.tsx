'use client';
import Link from "next/link";
import Image from "next/image";
import DropdownMenuDV from "./DropdownMenuDV";

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'


export default function Navbar() {
  return (
    <header className="bg-white shadow sticky top-0 z-50 text-blue-900">
      <div className="md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto flex flex-wrap items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <Image
            src="/VINASAFE Logo.png"
            alt="VINASAFE"
            width={50}
            height={50}
            priority
            draggable={false}
          />
          <div className="theme-vinasafe font-bold leading-none">
            VINASAFE
          </div>
        </Link>
        <nav className="flex block text-sm">
          <ul className="flex gap-6">
            <li><Link href="/"><Menu as="div" className="relative inline-block">
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-blue-50">
                    Trang chủ</MenuButton></Menu></Link></li>
            <li><Link href="/gioi-thieu">
              <Menu as="div" className="relative inline-block">
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-blue-50">
                    Giới thiệu</MenuButton></Menu></Link></li>
            <li className="relative group cursor-pointer"><DropdownMenuDV /></li>
            <li><Link href="/tin-tuc"><Menu as="div" className="relative inline-block">
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-blue-50">
                    Tin tức</MenuButton></Menu></Link></li>
            <li><Link href="/lien-he"><Menu as="div" className="relative inline-block">
                  <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-blue-50">
                    Liên hệ</MenuButton></Menu></Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}