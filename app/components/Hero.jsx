import Image from "next/image";


const divStyle = {
  backgroundImage: 'url("/images/AnhTapThe/ảnh tập thể.png")',
  backgroundSize: 'cover',
  // backgroundPosition: '50% 10%',
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
    <div className="relative h-screen" style={divStyle}>
      <div className="relative z-10 text-white p-10">
        Nội dung
      </div>
      <div className="absolute" style={afterStyle} />
    </div>
  );
}
