'use client'

import { useEffect } from 'react'
import 'leaflet/dist/leaflet.css'
import * as L from 'leaflet'

export default function ContactPage() {
    useEffect(() => {
        var blueIcon = L.icon({
            iconUrl: '/images/icon/marker-icon.png',
            iconSize:     [25, 41],
            iconAnchor:   [12, 41],
            popupAnchor:  [1, -34],
        });

        const map = L.map('map').setView([20.9810265, 105.8147015], 17)

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap',
        }).addTo(map)

        L.marker([20.9810265, 105.8147015], { icon: blueIcon })
            .addTo(map)
            .bindPopup(
                '<b>VINASAFE</b><br/>Số 34 TT2, KĐT Mới Đại Kim, Phường Định Công, Hà Nội'
            )
            .openPopup()

        return () => {
            map.remove()
        }
    }, [])

    return (
        <>
            {/* HERO */}


            {/* MAP */}
            <div
                id="map"
                className="my-10 mx-auto h-[400px] max-w-7xl rounded-xl shadow-md"
            />

            {/* CONTACT */}
            <div className="wrapper row3">
                <div className="md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto py-15 clear-both">
                    <div className="grid grid-cols-[1.1fr_1.2fr] gap-10 items-start">
                        {/* INFO */}
                        <div>
                            <h2 className="text-[28px] mb-[15px] text-[#0f579b]">
                                Thông tin liên hệ
                            </h2>

                            <p className="my-1 text-[15px]">
                                <b>
                                    Công Ty TNHH MTV Tư vấn và Kiểm định an toàn Việt Nam (VINASAFE)
                                </b>
                            </p>

                            <h3 className="mt-[25px] mb-2 text-[17px] font-bold">
                                Trụ sở chính - Hà Nội
                            </h3>
                            <p className="my-1 text-[15px]">
                                Số 34 TT2, KĐT Mới Đại Kim, Phường Định Công, Hà Nội
                            </p>
                            <p className="my-1 text-[15px]">
                                (024) 3540 2559 - (024) 3540 2558
                            </p>
                            <p className="my-1 text-[15px]">
                                kinhdoanh.vns@vinasafe.vn
                            </p>

                            <h3 className="mt-[25px] mb-2 text-[17px] font-bold">
                                Văn phòng TP. Hồ Chí Minh
                            </h3>
                            <p className="my-1 text-[15px]">
                                21A đường Cầu Xây, TP. Thủ Đức
                            </p>
                            <p className="my-1 text-[15px]">
                                0888 855 769
                            </p>
                        </div>

                        {/* FORM */}
                        <div className="contact-form">
                            <h2 className="text-[24px] mb-[15px] text-[#0f579b]">
                                Gửi tin nhắn
                            </h2>

                            <form
                                className="grid grid-cols-2 gap-y-[15px] gap-x-[20px] max-[900px]:grid-cols-1"
                            >
                                {/* Họ và tên */}
                                <div>
                                    <label className="block mb-[5px] font-medium text-[14px]">
                                        Họ và tên
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-[10px] py-[8px] border border-[#d7d7d7] text-[14px] rounded-[3px]"
                                        required
                                    />
                                </div>

                                {/* Doanh nghiệp */}
                                <div>
                                    <label className="block mb-[5px] font-medium text-[14px]">
                                        Doanh nghiệp
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-[10px] py-[8px] border border-[#d7d7d7] text-[14px] rounded-[3px]"
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block mb-[5px] font-medium text-[14px]">
                                        Email
                                    </label>
                                    <input
                                        type="email"
                                        className="w-full px-[10px] py-[8px] border border-[#d7d7d7] text-[14px] rounded-[3px]"
                                        required
                                    />
                                </div>

                                {/* Số điện thoại */}
                                <div>
                                    <label className="block mb-[5px] font-medium text-[14px]">
                                        Số điện thoại
                                    </label>
                                    <input
                                        type="tel"
                                        className="w-full px-[10px] py-[8px] border border-[#d7d7d7] text-[14px] rounded-[3px]"
                                        required
                                    />
                                </div>

                                {/* Tiêu đề – full width */}
                                <div className="col-span-2 max-[900px]:col-span-1">
                                    <label className="block mb-[5px] font-medium text-[14px]">
                                        Tiêu đề
                                    </label>
                                    <input
                                        type="text"
                                        className="w-full px-[10px] py-[8px] border border-[#d7d7d7] text-[14px] rounded-[3px]"
                                        required
                                    />
                                </div>

                                {/* Nội dung – full width */}
                                <div className="col-span-2 max-[900px]:col-span-1">
                                    <label className="block mb-[5px] font-medium text-[14px]">
                                        Nội dung
                                    </label>
                                    <textarea
                                        className="w-full px-[10px] py-[8px] border border-[#d7d7d7] text-[14px] rounded-[3px] min-h-[120px] resize-y"
                                        required
                                    />
                                </div>

                                {/* Button – full width */}
                                <div className="col-span-2 max-[900px]:col-span-1">
                                    <button
                                        type="submit"
                                        className="px-[30px] py-[10px] rounded-[3px] bg-[#53d3de] text-white font-bold uppercase tracking-[1px] hover:bg-[#1e5bbf] transition">
                                        Gửi liên hệ
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}