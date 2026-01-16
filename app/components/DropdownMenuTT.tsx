'use client';
import Link from "next/link";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button} from "@heroui/react";
const menuItems = [
  { href: "/tin-tuc/hoat-dong-cong-ty", label: "Hoạt động công ty", key: "hoat-dong-cong-ty" },
  { href: "/tin-tuc/kien-thuc-an-toan-lao-dong", label: "Kiến thức an toàn lao động", key: "kien-thuc-an-toan-lao-dong" },
  { href: "/tin-tuc/phap-luat", label: "Pháp luật", key: "phap-luat" },
  { href: "/tin-tuc/thong-bao", label: "Thông báo", key: "thong-bao" },
  { href: "/tin-tuc/hoi-dap", label: "Hỏi đáp", key: "hoi-dap" },
];

export default function DropdownMenuTT() {
  return (
    <Dropdown>
      <DropdownTrigger className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-blue-50'>
        <Button variant="light"
          className="flex items-center gap-1 text-blue-900 font-semibold hover:bg-blue-50"
          endContent={<ChevronDownIcon className="size-4" />}
        >Tin tức</Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Dynamic Actions" items={menuItems} classNames={{
        base: "rounded-2xl border border-gray-300 bg-white shadow-lg p-1",
      }}>
        {(item) => (
          <DropdownItem key={item.key} textValue={item.label} href={item.href} className='text-blue-900 rounded-full inline-flex w-full justify-center gap-x-1.5 bg-white px-3 py-2 text-sm font-semibold shadow-xs hover:bg-blue-50'>
            {item.label}
          </DropdownItem>
        )}
      </DropdownMenu>
    </Dropdown>
  );
}