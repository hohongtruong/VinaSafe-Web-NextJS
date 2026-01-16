'use client'
import { usePathname } from "next/navigation";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link } from "@heroui/react";
import Image from "next/image";
import DropdownMenuDV from "@/app/components/DropdownMenuDV";
import DropdownMenuTT from "@/app/components/DropdownMenuTT";
export default function NavbarMenu() {
    const pathname = usePathname();
    return (

        <Navbar shouldHideOnScroll
            maxWidth="md"
            classNames={{
                item: [
                    "flex",
                    "relative",
                    "h-full",
                    "items-center",
                    "rounded-md",
                    "data-[active=true]:ring-2",
                    "data-[active=true]:ring-blue-900",
                    "data-[active=true]:ring-offset-white",
                ],
            }}
            className="flex bg-white shadow sticky top-0 z-50 text-blue-900"
        >
            <div className="w-full mx-auto flex items-center justify-between md:max-w-3xl lg:max-w-4xl xl:max-w-5xl px-4">

                <NavbarBrand>
                    <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
                        <Image
                            src="/VINASAFE Logo.png"
                            alt="VINASAFE"
                            width={50}
                            height={50}
                            priority
                            draggable={false}
                        />
                        <div className="theme-vinasafe font-bold leading-none text-blue-900">
                            VINASAFE
                        </div>
                    </Link>
                </NavbarBrand>

                <NavbarContent justify="end">
                    <NavbarItem isActive={pathname === "/"}>
                        <Link href="/" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-blue-50">
                            Trang chủ</Link>
                    </NavbarItem>

                    <NavbarItem isActive={pathname === "/gioi-thieu"}>
                        <Link href="/gioi-thieu" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-blue-50">
                            Giới thiệu</Link>
                    </NavbarItem>

                    <NavbarItem isActive={pathname.startsWith("/dich-vu")}>
                        <DropdownMenuDV />
                    </NavbarItem>

                    <NavbarItem isActive={pathname.startsWith("/tin-tuc")}>
                        <DropdownMenuTT />
                    </NavbarItem>

                    <NavbarItem isActive={pathname === "/thu-vien-anh"}>
                        <Link href="/thu-vien-anh" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-blue-50">
                            Thư viện ảnh</Link>
                    </NavbarItem>

                    <NavbarItem isActive={pathname === "/lien-he"}>
                        <Link href="/lien-he" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold shadow-xs inset-ring-1 inset-ring-gray-300 hover:bg-blue-50">
                            Liên hệ</Link>
                    </NavbarItem>

                </NavbarContent>
            </div>
        </Navbar>
    );
}