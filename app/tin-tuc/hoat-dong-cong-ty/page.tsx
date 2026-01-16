export default function NewsHome() {
  return (
    <main className="min-h-screen bg-gray-100">


      {/* Content */}
      <section className="max-w-3xl mx-auto px-4 py-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Main news */}
        <div className="lg:col-span-2 space-y-6">
          <article className="bg-white rounded shadow p-4">
            <img src="https://picsum.photos/800/400" className="rounded mb-4" />
            <h2 className="text-2xl font-bold mb-2">Tiêu đề bài</h2>
            <p className="text-gray-600 text-sm mb-3">Ngày đăng</p>
            <p className="text-gray-700">Phần Sapo của bài viêt</p>
          </article>

          <div className="grid md:grid-cols-2 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <article key={i} className="bg-white rounded shadow p-3">
                <img src={`https://picsum.photos/400/250?random=${i}`} className="rounded mb-2" />
                <h3 className="font-semibold">Tiêu đề bài viết ngắn số {i}</h3>
                <p className="text-sm text-gray-600 mt-1">Mô tả ngắn nội dung bài viết để thu hút người đọc...</p>
              </article>
            ))}
          </div>
        </div>

      </section>

      
    </main>
  )
}
