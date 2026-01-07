import Link from "next/link";

const menuItems = [
  { href: "/dich-vu/kiem-dinh", label: "Kiểm định an toàn" },
  { href: "/dich-vu/dao-tao", label: "Đào tạo an toàn" },
  { href: "/dich-vu/tu-van", label: "Tư vấn pháp lý" },
  { href: "/dich-vu/do-kiem", label: "Đo kiểm môi trường" },
];


export default function DropdownMenuDV() {
  return (
    <ul
      className="
        absolute left-0 top-full mt-2 w-56
        bg-white text-gray-700
        rounded-xl shadow-lg ring-1 ring-black/5
        opacity-0 invisible translate-y-2
        group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
        transition-all duration-200 ease-out z-50"
    >
      {menuItems.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className="
              block px-4 py-3
              hover:bg-blue-50 hover:text-blue-600
              transition
            "
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}