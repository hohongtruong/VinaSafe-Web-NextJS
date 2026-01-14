'use client'

import { useEffect, useState, ChangeEvent, FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import 'leaflet/dist/leaflet.css'  // Keep CSS import at top (safe for SSR)
import MapComponent from '@/app/components/MapComponent'  // Import the dynamic map component

export default function ContactPage() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
        company: '',
        phone: '',
        subject: '',
    })

    useEffect(() => {
        emailjs.init('JV7S54HkG3oNvbR_b')
    }, [])

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        try {
            await emailjs.send(
                'service_q6s8g0p',
                'template_lvzi9cm',
                formData
            )

            alert('✅ Gửi liên hệ thành công!')
            setFormData({
                name: '',
                email: '',
                message: '',
                company: '',
                phone: '',
                subject: '',
            })
        } catch (err) {
            console.error(err)
            alert('❌ Gửi thất bại, vui lòng thử lại!')
        }
    }

    return (
        <>
            {/* HERO */}

            {/* MAP - Now using dynamic component */}
            <MapComponent />

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
                                onSubmit={handleSubmit}
                            >
                                {/* Họ và tên */}
                                <div>
                                    <label className="block mb-[5px] font-medium text-[14px]">
                                        Họ và tên
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
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
                                        name="company"
                                        value={formData.company}
                                        onChange={handleChange}
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
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
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
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
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
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
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
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-[10px] py-[8px] border border-[#d7d7d7] text-[14px] rounded-[3px] min-h-[120px] resize-y"
                                        required
                                    />
                                </div>

                                {/* Button – full width */}
                                <div className="col-span-2 max-[900px]:col-span-1">
                                    <button
                                        type="submit"
                                        className="px-[30px] py-[10px] rounded-[3px] bg-[#53d3de] text-white font-bold uppercase tracking-[1px] hover:bg-[#1e5bbf] transition"
                                    >
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