import Link from "next/link";
import Image from "next/image";
import DropdownMenuDV from "./DropdownMenuDV";

export default function Navbar() {
  return (
    <header className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <Link href="/" className="flex items-center gap-2 font-semibold text-lg">
          <Image
            src="/VINASAFE Logo.png"
            alt="VINASAFE"
            width={50}
            height={50}
            priority
            draggable={false}
          />
          <span className="font-bold text-blue-900">VINASAFE</span>
        </Link>

        <nav className="text-sm">
          <ul className="flex gap-6">
            <li><Link href="/">Trang chủ</Link></li>
            <li><Link href="/gioi-thieu">Giới thiệu</Link></li>
            <li className="relative group cursor-pointer"><span>Dịch vụ</span><DropdownMenuDV /></li>
            <li><Link href="/tin-tuc">Tin tức</Link></li>
            <li><Link href="/lien-he">Liên hệ</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}