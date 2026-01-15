export default function Footer() {
  return (
    <div className="bg-blue-900 text-gray-200">
      <div className="mx-auto max-w-6xl px-4">
        <footer id="footer" className="py-10">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            
            {/* Hà Nội */}
            <div>
              <h5 className="mb-2 font-semibold text-white">
                TRỤ SỞ CÔNG TY - TP. HÀ NỘI
              </h5>
              <p className="mb-1">
                Địa chỉ: Số 34 TT2, KĐT Mới Đại Kim, Phường Định Công, Hà Nội.
              </p>
              <p className="mb-1">
                ĐT: (024) 3540 2559 - (024) 3540 2558
              </p>
              <p className="mb-1">
                Email: kinhdoanh.vns@vinasafe.vn
              </p>
            </div>

            {/* HCM */}
            <div>
              <h5 className="mb-2 font-semibold text-white">
                CHI NHÁNH VŨNG TÀU
              </h5>
              <p className="mb-1">
                Địa chỉ: Khu Phố Phước Lập - Phường Mỹ Xuân - Thị Xã Phú Mỹ - Bà Rịa - Vũng Tàu
              </p>
              <p className="mb-1">ĐT: 0888 855 769</p>
              <p className="mb-1">
                Email: kinhdoanh.vns@vinasafe.vn
              </p>
            </div>

            {/* Đà Nẵng */}
            <div>
              <h5 className="mb-2 font-semibold text-white">
                CHI NHÁNH ĐÀ NẴNG
              </h5>
              <p className="mb-1">
                Số 7 Phú Thạnh 10, P. Hòa Minh, Q. Liên Chiểu, Đà Nẵng
              </p>
              <p className="mb-1">ĐT: 0888 855 769</p>
              <p className="mb-1">
                Email: kinhdoanh.vns@vinasafe.vn
              </p>
            </div>

            {/* Vĩnh Phúc */}
            <div>
              <h5 className="mb-2 font-semibold text-white">
                CHI NHÁNH VĨNH PHÚC
              </h5>
              <p className="mb-1">
                Thôn Mậu Lâm, P. Khai Quang, TP. Vĩnh Yên, Vĩnh Phúc
              </p>
              <p className="mb-1">ĐT: 0888 855 769</p>
              <p className="mb-1">
                Email: kinhdoanh.vns@vinasafe.vn
              </p>
            </div>

            {/* Lào Cai */}
            <div>
              <h5 className="mb-2 font-semibold text-white">
                CHI NHÁNH LÀO CAI
              </h5>
              <p className="mb-1">
                01 Hoàng Hoa Thám, P. Cốc Lếu, TP. Lào Cai
              </p>
              <p className="mb-1">ĐT: 0888 855 769</p>
              <p className="mb-1">
                Email: kinhdoanh.vns@vinasafe.vn
              </p>
            </div>

            {/* Bắc Giang */}
            <div>
              <h5 className="mb-2 font-semibold text-white">
                CHI NHÁNH BẮC GIANG
              </h5>
              <p className="mb-1">
                37 Nguyễn Khắc Nhu, P. Trần Nguyên Hãn, TP. Bắc Giang
              </p>
              <p className="mb-1">ĐT: 0888 855 769</p>
              <p className="mb-1">
                Email: kinhdoanh.vns@vinasafe.vn
              </p>
            </div>

          </div>
        </footer>

        {/* Copyright */}
        <div className="mt-8 border-t border-white/10 py-4 text-sm text-gray-400">
          © 2021 - All Rights Reserved - VINASAFE.VN
        </div>
      </div>
    </div>
  );
}