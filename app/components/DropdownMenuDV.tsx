'use client';
import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
const menuItems = [
  { href: "/dich-vu/kiem-dinh", label: "Kiểm định an toàn" },
  { href: "/dich-vu/huan-luyen", label: "Huấn luyện an toàn" },
  { href: "/dich-vu/hop-quy", label: "Chứng nhận hợp quy" },
  { href: "/dich-vu/hieu-chuan", label: "Kiểm định/Hiệu chuẩn đo lường" },
  { href: "/dich-vu/kiem-tra", label: "Kiểm tra thử nghiệm" },
];


export default function DropdownMenuDV() {
  return (
    <Menu as="div" className="relative inline-block">
      <MenuButton className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-blue-50">
        Dịch vụ
        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          {menuItems.map((item) => (
            <MenuItem key={item.href}
              as={Link}
              href={item.href}
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-blue-50 data-focus:outline-hidden">
                {item.label}
            </MenuItem>
          ))}
        </div>
      </MenuItems>
    </Menu>
  );
}