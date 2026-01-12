import Link from "next/link";

const divStyle = {
  backgroundImage: 'url("/images/AnhTapThe/ảnh tập thể.png")',
  backgroundSize: 'cover',
  backgroundPosition: '50% 10%',
  width: 'auto',
  backgroundRepeat: 'no-repeat',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'relative', // thêm thuộc tính position
};

const afterStyle = {
  content: '',
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'rgba(0, 0, 0, .55)',
  zIndex: 1,
};

export default function Hero() {
  return (
    <div className="relative" style={divStyle}>
      <div className="md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto z-10 text-white pt-100 pb-60">
        <h1 className="heading mb-5 text-2xl">
          Công Ty TNHH MTV Tư vấn và Kiểm định an toàn Việt Nam (VINASAFE)
        </h1>

        <p className="mb-5 uppercase text-base tracking-[5px]">
          VIET NAM SAFETY INSPECTION CONSULTANT ONE MEMBER COMPANY LIMITED
        </p>
        <div>
          <ul className="m-0 p-0 list-none inline-block">
            <li className="inline-block">
              <Link href="/gioi-thieu" className="py-2.5 px-4 uppercase border hover:text-white hover:bg-[#53D3DE] hover:border-[#53D3DE]">
                Giới thiệu chung
              </Link>
            </li>
            <li className="ml-8 inline-block">
              <Link href="/tin-tuc" className="py-2.5 px-4 uppercase border hover:text-white hover:bg-[#53D3DE] hover:border-[#53D3DE]">
                Tin tức mới nhất
              </Link>
            </li>
          </ul>
        </div>

      </div>
      <div className="absolute" style={afterStyle} />
    </div>
  );
}
