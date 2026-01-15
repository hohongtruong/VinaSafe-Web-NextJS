'use client'

import { useState } from 'react'
import BlueBanner from '@/app/components/BlueBanner'

type GalleryItem = {
  src: string
  full: string
  title: string
  categories: string[]
}

const galleryData: GalleryItem[] = [
  {
    src: '/images/AnhTapThe/ảnh tập thể.png',
    full: '/images/AnhTapThe/ảnh tập thể.png',
    title: 'Kỷ niệm 10 năm',
    categories: ['TapThe'],
  },
  {
    src: '/images/AnhTapThe/ảnh tập thể.jpg',
    full: '/images/AnhTapThe/ảnh tập thể.jpg',
    title: 'Ảnh tập thể',
    categories: ['TapThe'],
  },
  {
    src: '/images/Mipecorp/Mipecorp_1.jpg',
    full: '/images/Mipecorp/Mipecorp_1.jpg',
    title: 'MIPECORP',
    categories: ['KhachHang', 'KhachHang-Mipecorp'],
  },
  {
    src: '/images/Mipecorp/Mipecorp_2.JPG',
    full: '/images/Mipecorp/Mipecorp_2.JPG',
    title: 'Huấn luyện an toàn vệ sinh lao động MIPECORP',
    categories: ['HuanLuyen', 'KhachHang', 'KhachHang-Mipecorp'],
  },
  {
    src: '/images/HuanLuyen/huấn luyện an toàn vệ sinh lao động.jpg',
    full: '/images/HuanLuyen/huấn luyện an toàn vệ sinh lao động.jpg',
    title: 'Huấn luyện an toàn vệ sinh lao động',
    categories: ['HuanLuyen'],
  },
  {
    src: '/images/HuanLuyen/huấn luyện kiểm tra an toàn vận hành cầu trục.jpg',
    full: '/images/HuanLuyen/huấn luyện kiểm tra an toàn vận hành cầu trục.jpg',
    title: 'Huấn luyện kiểm tra an toàn vận hành cầu trục',
    categories: ['HuanLuyen'],
  },
  {
    src: '/images/HuanLuyen/huấn luyện sơ cấp cứu.jpg',
    full: '/images/HuanLuyen/huấn luyện sơ cấp cứu.jpg',
    title: 'Huấn luyện sơ cấp cứu',
    categories: ['HuanLuyen'],
  },
  {
    src: '/images/HuanLuyen/huấn luyện vận hành xe nâng.jpg',
    full: '/images/HuanLuyen/huấn luyện vận hành xe nâng.jpg',
    title: 'Huấn luyện vận hành xe nâng',
    categories: ['HuanLuyen'],
  },
  {
    src: '/images/AnhKiemDinh/KD_1.jpg',
    full: '/images/AnhKiemDinh/KD_1.jpg',
    title: 'Hoạt động kiểm định',
    categories: ['KiemDinh'],
  },
  {
    src: '/images/AnhKiemDinh/KD_2.jpg',
    full: '/images/AnhKiemDinh/KD_2.jpg',
    title: 'Hoạt động kiểm định',
    categories: ['KiemDinh'],
  },
  {
    src: '/images/AnhKiemDinh/KD_3.jpg',
    full: '/images/AnhKiemDinh/KD_3.jpg',
    title: 'Hoạt động kiểm định',
    categories: ['KiemDinh'],
  },
  {
    src: '/images/AnhKiemDinh/KD_4.jpg',
    full: '/images/AnhKiemDinh/KD_4.jpg',
    title: 'Hoạt động kiểm định',
    categories: ['KiemDinh'],
  },
  {
    src: '/images/AnhKiemDinh/KD_5.jpg',
    full: '/images/AnhKiemDinh/KD_5.jpg',
    title: 'Hoạt động kiểm định',
    categories: ['KiemDinh'],
  },
  {
    src: '/images/AnhKiemDinh/KD_6.jpg',
    full: '/images/AnhKiemDinh/KD_6.jpg',
    title: 'Hoạt động kiểm định',
    categories: ['KiemDinh'],
  },
  {
    src: '/images/AnhKiemDinh/KD_7.jpg',
    full: '/images/AnhKiemDinh/KD_7.jpg',
    title: 'Hoạt động kiểm định',
    categories: ['KiemDinh'],
  },
  {
    src: '/images/AnhKiemDinh/KD_8.jpg',
    full: '/images/AnhKiemDinh/KD_8.jpg',
    title: 'Hoạt động kiểm định',
    categories: ['KiemDinh'],
  },
  {
    src: '/images/AnhKiemDinh/KD_9.jpg',
    full: '/images/AnhKiemDinh/KD_9.jpg',
    title: 'Hoạt động kiểm định',
    categories: ['KiemDinh'],
  },
  {
    src: '/images/AnhKiemDinh/KD_10.jpg',
    full: '/images/AnhKiemDinh/KD_10.jpg',
    title: 'Hoạt động kiểm định',
    categories: ['KiemDinh'],
  },
  {
    src: '/images/AnhKiemDinh/KD_11.jpg',
    full: '/images/AnhKiemDinh/KD_11.jpg',
    title: 'Hoạt động kiểm định',
    categories: ['KiemDinh'],
  },
  {
    src: '/images/AnhKiemDinh/KD_12.jpg',
    full: '/images/AnhKiemDinh/KD_12.jpg',
    title: 'Hoạt động kiểm định',
    categories: ['KiemDinh'],
  },
  {
    src: '/images/AnhKiemDinh/KD_13.jpg',
    full: '/images/AnhKiemDinh/KD_13.jpg',
    title: 'Hoạt động kiểm định',
    categories: ['KiemDinh'],
  },
  {
    src: '/images/AnhKiemDinh/KD_14.jpg',
    full: '/images/AnhKiemDinh/KD_14.jpg',
    title: 'Hoạt động kiểm định',
    categories: ['KiemDinh'],
  },
  // 👉 thêm các ảnh còn lại tương tự
]

const filters = [
  { key: 'all', label: 'Tất cả' },
  { key: 'TapThe', label: 'Ảnh tập thể' },
  { key: 'KiemDinh', label: 'Kiểm định' },
  { key: 'HuanLuyen', label: 'Huấn luyện an toàn' },
  { key: 'KhachHang', label: 'Khách hàng' },
]

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState<string>('all')
  const [lightboxImg, setLightboxImg] = useState<string | null>(null)

  const filteredItems =
    activeFilter === 'all'
      ? galleryData
      : galleryData.filter(item =>
          item.categories.includes(activeFilter)
        )

  return (
    <>
      {/* HEADER */}
      <BlueBanner title="Thư viện ảnh hoạt động" description="Những khoảnh khắc nổi bật của công ty" />

      {/* FILTER */}
      <section className="md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3">
          {filters.map(f => (
            <button
              key={f.key}
              onClick={() => setActiveFilter(f.key)}
              className={`px-4 py-2 rounded border transition
                ${
                  activeFilter === f.key
                    ? 'bg-blue-800 text-white'
                    : 'bg-white'
                }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </section>

      {/* GALLERY */}
      <section className="md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto px-4 pb-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer"
              onClick={() => setLightboxImg(item.full)}
            >
              <div className="rounded-lg hover:scale-105 transition hover:shadow-lg">
                <img
                  src={item.src}
                  alt={item.title}
                  className="rounded-lg aspect-square object-cover"
                  loading="lazy"
                />
              </div>
              <p className="mt-2 text-sm text-center">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* LIGHTBOX */}
      {lightboxImg && (
        <div
          className="fixed inset-0 bg-blue-200/25 flex items-center justify-center z-50"
          onClick={() => setLightboxImg(null)}
        >
          <img
            src={lightboxImg}
            className="max-w-[90%] max-h-[90%] rounded-lg"
          />
        </div>
      )}
    </>
  )
}