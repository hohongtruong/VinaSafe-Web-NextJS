'use client'

import { useEffect, useState } from 'react'

const customers = [
  'AAC','ACV','BB','BVDKLC','BVPSTU','BVVT','BVVX','Canon','Cargill','CHINFON',
  'Delta','Diana','EVNHN','Foxconn','GreenFeed','Habeco','Hanes','HD','KD','LG',
  'Lotte','MIPEC','MTH','NLX','NS2PC','Pana','PCH','samsung','SH','Showa',
  'Siflex','SPG','suntory','TH','Toyota','VINPHACO','VIS','VMU','WISOL',
]

export default function CustomerSlider() {
  const [index, setIndex] = useState(0)
  const slideWidth = 210
  const intervalTime = 3000

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) =>
        prev >= customers.length - 5 ? 0 : prev + 1
      )
    }, intervalTime)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="mx-auto my-5 md:max-w-3xl lg:max-w-4xl xl:max-w-5xl">
      {/* Title */}
      <div className="text-center mt-6 mb-8">
        <h4 className="text-xl font-bold">
          Khách hàng của chúng tôi
        </h4>
      </div>

      {/* Slider */}
      <div className="relative overflow-hidden w-full">
        <div
          className="flex gap-2.5 transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${index * slideWidth}px)` }}
        >
          {customers.map((name) => (
            <div
              key={name}
              className="
                w-[200px] h-[300px] flex-shrink-0
                flex items-center justify-center
                bg-gray-100 border border-gray-200
                rounded-2xl shadow-sm
                hover:shadow-lg hover:-translate-y-1
                transition-all duration-300
              "
            >
              <img
                src={`cust_logo/${name}.png`}
                alt={name}
                className="max-h-[200px] max-w-full object-contain"
              />
            </div>
          ))}
        </div>

        {/* Prev */}
        <button
          onClick={() =>
            setIndex((i) => (i <= 0 ? customers.length - 5 : i - 1))
          }
          className="
            absolute left-0 top-1/2 -translate-y-1/2
            bg-black/30 hover:bg-black/80
            text-white font-bold text-2xl
            px-4 py-3 rounded
            transition-colors duration-300
            z-10
          "
        >
          ❮
        </button>

        {/* Next */}
        <button
          onClick={() =>
            setIndex((i) =>
              i >= customers.length - 5 ? 0 : i + 1
            )
          }
          className="
            absolute right-0 top-1/2 -translate-y-1/2
            bg-black/30 hover:bg-black/80
            text-white font-bold text-2xl
            px-4 py-3 rounded
            transition-colors duration-300
            z-10
          "
        >
          ❯
        </button>
      </div>
    </div>
  )
}