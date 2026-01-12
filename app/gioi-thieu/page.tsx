import Image from "next/image";

export default function GioiThieuVinasafe() {
    return (
        <main className="bg-slate-50">

            <section className="bg-[url('/images/bg.png')] bg-cover bg-center">
                <div className="bg-blue-200">
                    <div className="mx-auto max-w-7xl px-6 py-16 text-center text-white">
                        <h1 className="text-3xl md:text-4xl font-bold mb-4">Giới thiệu Công ty VINASAFE</h1>
                        <p className="max-w-4xl mx-auto text-sm md:text-base">
                            Thông tin tổng quan, chức năng – nhiệm vụ và cơ cấu tổ chức của Công ty VINASAFE
                        </p>
                    </div>
                </div>
            </section>

            <section className="mx-auto max-w-7xl px-6 py-12">
                <h2 className="text-2xl font-bold text-blue-600 mb-4">Giới thiệu chung</h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>VINASAFE</strong> là đơn vị hoạt động chuyên sâu trong lĩnh vực kiểm định kỹ thuật
                    an toàn, thử nghiệm, chứng nhận hợp chuẩn – hợp quy và huấn luyện an toàn, vệ sinh lao động.
                    Công ty được thành lập với mục tiêu hỗ trợ doanh nghiệp tuân thủ đầy đủ các quy định pháp luật
                    về an toàn lao động, đồng thời nâng cao hiệu quả sản xuất kinh doanh.
                </p>
                <p className="text-gray-700 leading-relaxed">
                    VINASAFE luôn lấy chất lượng dịch vụ, tính chính xác và sự hài lòng của khách hàng làm
                    kim chỉ nam trong mọi hoạt động. Với đội ngũ cán bộ kỹ thuật giàu kinh nghiệm và được đào tạo
                    chuyên sâu, Công ty đã và đang là đối tác tin cậy của nhiều doanh nghiệp trên toàn quốc.
                </p>
            </section>

            {/* Chức năng – nhiệm vụ */}
            <section className="bg-white">
                <div className="mx-auto max-w-7xl px-6 py-12">
                    <h2 className="text-2xl font-bold text-blue-600 mb-6">Chức năng và nhiệm vụ</h2>

                    <div className="space-y-6 text-gray-700">
                        <div>
                            <h3 className="font-semibold mb-2">1. Kiểm định kỹ thuật an toàn</h3>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Kiểm định nhà nước về kỹ thuật an toàn đối với các thiết bị có yêu cầu nghiêm ngặt về an toàn lao động.</li>
                                <li>Bình áp lực, nồi hơi, hệ thống lạnh.</li>
                                <li>Đường ống dẫn nước, dẫn khí đốt, hệ thống điều chế và nạp khí.</li>
                                <li>Chai chứa khí, thiết bị nâng, thang máy, thang cuốn.</li>
                                <li>Cẩu tháp, vận thăng lồng, tời nâng người, hệ thống cốt pha trượt.</li>
                                <li>Cần cẩu bánh lốp, bánh xích, cẩu cảng.</li>
                                <li>Kiểm định hệ thống chống sét, hệ thống điện và thiết bị công nghiệp, xây dựng, dân dụng.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">2. Kiểm định – Hiệu chuẩn phương tiện đo lường</h3>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Kiểm định và hiệu chuẩn áp kế.</li>
                                <li>Hiệu chuẩn nhiệt kế.</li>
                                <li>Kiểm định, hiệu chuẩn các loại cân và quả cân.</li>
                                <li>Hiệu chuẩn các loại thước đo.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">3. Thử nghiệm</h3>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Thử nghiệm tải trọng thiết bị nâng, container, cáp, xích, giàn giáo, sàn biểu diễn.</li>
                                <li>Thử nghiệm áp suất các thiết bị chịu áp lực.</li>
                                <li>Kiểm tra không phá hủy như siêu âm, chụp ảnh bức xạ, bột từ, bột thẩm thấu.</li>
                            </ul>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">4. Chứng nhận hợp chuẩn – hợp quy</h3>
                            <p>
                                Chứng nhận hợp chuẩn, hợp quy cho mẫu sản phẩm hoặc sản phẩm là các thiết bị có yêu cầu
                                nghiêm ngặt về an toàn lao động như nồi hơi, bình chịu áp lực, chai chứa khí, thiết bị nâng,
                                thang máy, thang cuốn và băng tải chở người.
                            </p>
                        </div>

                        <div>
                            <h3 className="font-semibold mb-2">5. Huấn luyện và đào tạo</h3>
                            <ul className="list-disc pl-6 space-y-1">
                                <li>Huấn luyện an toàn, vệ sinh lao động.</li>
                                <li>Đào tạo, bồi dưỡng nâng cao trình độ cho người vận hành máy móc, thiết bị.</li>
                                <li>Đào tạo lại công nhân cơ khí, điện, hàn áp lực.</li>
                                <li>Sát hạch và cấp chứng chỉ thợ hàn.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Cơ cấu tổ chức */}
            <section className="bg-slate-100">
                <div className="mx-auto max-w-7xl px-6 py-12">
                    <h2 className="text-2xl font-bold text-blue-600 mb-6">Cơ cấu tổ chức công ty</h2>


                    <p className="text-gray-700 leading-relaxed mb-4">
                        VINASAFE được tổ chức thành các phòng ban chuyên trách gồm: Phòng Hành chính – Kế toán,
                        Phòng Kỹ thuật, Phòng Thí nghiệm, Phòng Chứng nhận, Phòng Huấn luyện, Phòng Kinh doanh
                        và Phòng Chăm sóc khách hàng.
                    </p>


                    <p className="text-gray-700 leading-relaxed mb-4">
                        Đội ngũ cán bộ công nhân viên của VINASAFE được đào tạo chuyên sâu về cơ khí, tự động hóa,
                        điện – nhiệt lạnh, thiết bị nâng, thiết bị áp lực, công nghệ thông tin và an toàn lao động.
                        Công ty thường xuyên tổ chức các khóa đào tạo nâng cao trong và ngoài nước nhằm đảm bảo
                        chất lượng chuyên môn và tác phong làm việc chuyên nghiệp.
                    </p>


                    <p className="text-gray-700 leading-relaxed">
                        Với đội ngũ kiểm định viên có trình độ cao, giàu kinh nghiệm thực tế và tinh thần trách nhiệm,
                        VINASAFE đã triển khai thành công nhiều dự án, hợp đồng lớn trên phạm vi toàn quốc và
                        luôn nhận được sự tin tưởng của khách hàng, đối tác.
                    </p>
                </div>
            </section>
        </main>
    );
}