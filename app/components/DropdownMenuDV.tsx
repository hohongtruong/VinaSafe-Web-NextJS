import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  Navbar,
  NavbarContent,
  NavbarItem,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Link
} from "@heroui/react";

const menuItems = [
  { href: "/dich-vu/kiem-dinh", label: "Kiểm định an toàn", key: "kiem-dinh" },
  { href: "/dich-vu/huan-luyen", label: "Huấn luyện an toàn", key: "huan-luyen" },
  { href: "/dich-vu/hop-quy", label: "Chứng nhận hợp quy", key: "hop-quy" },
  { href: "/dich-vu/hieu-chuan", label: "Kiểm định/Hiệu chuẩn đo lường", key: "hieu-chuan" },
  { href: "/dich-vu/kiem-tra", label: "Kiểm tra thử nghiệm", key: "kiem-tra" },
];

type DropdownMenuDVProps = {
  isActive?: boolean;
};


export default function DropdownMenuDV({ isActive }: DropdownMenuDVProps) {
  return (
    <Dropdown>
      <NavbarItem isActive={isActive} className='group'>
        <DropdownTrigger className='inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-blue-50'>
          <Button variant="light"
            className="group-data-[active=true]:hover:bg-blue-900/90 group-data-[active=true]:text-blue-50 group-data-[active=true]:bg-blue-900 flex items-center gap-1 text-blue-900 font-semibold hover:bg-blue-50"
            endContent={<ChevronDownIcon className="size-4" />}
          >Dịch vụ</Button>
        </DropdownTrigger>
      </NavbarItem>
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