function BeritaDanSiaran() {
  const berita = [
    {
      kategori: "Berita Terkini",
      judul: "UP PM-PTSP Rawajati Beri Layanan Solusi Arsitek Gratis Publik",
      lokasi: "Lintas Kota",
      tanggal: "06 08 2025 14:53",
      img: "/berita_jakarta.jpg",
    },
    {
      kategori: "Siaran Pers",
      judul:
        "Dukung Penguatan Lembaga Keagamaan, Gubernur Pramono Resmikan Gedung MUI, DMI, dan IPQAH",
      lokasi: "Jakarta Selatan",
      tanggal: "Kamis, 07 Agustus 2025 11:43",
      img: "/berita_jakarta.jpg",
    },
  ];

  return (
    <section className="px-4 md:px-6 mb-6 md:mb-10">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4 md:mb-6 gap-2">
        <h2 className="text-2xl md:text-3xl font-bold">
          Berita dan Siaran Pers
        </h2>
        <a
          href="#"
          className="border border-blue-600 text-blue-600 px-4 py-1 rounded-full text-sm hover:bg-blue-50 w-full md:w-auto text-center"
        >
          Lihat Semua &gt;
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {berita.map((item, index) => (
          <div
            key={index}
            className="rounded-md overflow-hidden shadow border bg-white"
          >
            <img
              src={item.img}
              alt={item.kategori}
              loading="lazy"
              className="h-48 md:h-44 w-full object-cover"
            />
            <div className="bg-blue-900 text-white p-4 flex flex-col justify-between min-h-[140px]">
              <div>
                <p className="text-sm font-semibold mb-1">{item.kategori}</p>
                <p className="text-sm leading-snug mb-1">{item.judul}</p>
                <p className="text-xs text-gray-300">
                  {item.lokasi} | {item.tanggal}
                </p>
              </div>
              <div className="text-right">
                <a href="#" className="text-white text-xs italic underline">
                  [ lihat semua ]
                </a>
              </div>
            </div>
          </div>
        ))}

        {/* Kartu Kosong (warna biru solid) */}
        <div className="hidden md:block rounded-md bg-[#2a2e98]"></div>
      </div>
    </section>
  );
}

export default BeritaDanSiaran;
