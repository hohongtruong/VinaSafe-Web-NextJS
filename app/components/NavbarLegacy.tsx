'use client';
import Link from "next/link";
import Image from "next/image";
import DropdownMenuDV from "@/app/components/DropdownMenuDV";
import DropdownMenuTT from "@/app/components/DropdownMenuTT";

import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'


export default function Navbar() {
  return (
    <header className="bg-white shadow sticky top-0 z-50 text-blue-900">
      <div className="md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto flex flex-wrap items-center justify-between px-6 py-3">
        <nav className="flex block text-sm w-full items-center justify-between">
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

          <ul className="flex gap-1">
            <li><Menu as="div" className="relative inline-block">
              <Link href="/" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-blue-50">
                Trang chủ</Link>
            </Menu></li>
            <li>
              <Menu as="div" className="relative inline-block">
                <Link href="/gioi-thieu" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-blue-50">
                  Giới thiệu</Link></Menu></li>
            <li className="relative group cursor-pointer"><DropdownMenuDV /></li>
            <li className="relative group cursor-pointer"><DropdownMenuTT /></li>
            <li><Menu as="div" className="relative inline-block">
              <Link href="/thu-vien-anh" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-blue-50">
                Thư viện ảnh</Link></Menu></li>
            <li><Menu as="div" className="relative inline-block">
              <Link href="/lien-he" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-blue-50">
                Liên hệ</Link></Menu></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}