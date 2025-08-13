import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const kategoriList = [
  "Aplikasi Mobile",
  "Info Pangan",
  "Laporan Kinerja",
  "Jakarta Kota Global",
];

const aplikasiMobile = [
  {
    name: "Transjakarta",
    desc: "Aplikasi resmi untuk cek jadwal, rute, dan posisi bus Transjakarta secara real-time.",
    // img: "/transjakarta.png",
  },
  {
    name: "JAKI",
    desc: "Super-app serba bisa untuk membantu keseharian Anda selama berada di Jakarta...",
    // img: "/jaki.png",
  },
  {
    name: "Alpukat Betawi",
    desc: "Permudah urusan administrasi, tersedia kanal pelayanan bagi warga DKI Jakarta...",
    // img: "/alpukat.png",
  },
  {
    name: "Jak Lingko",
    desc: "Berkelana dengan transportasi publik di Jakarta kini semakin mudah...",
    // img: "/jaklingko.png",
  },
  {
    name: "Pajak Online Jakarta",
    desc: "Bayar dan pantau kewajiban pajak daerah Anda secara online, praktis tanpa antre.",
    // img: "/pajak_online.png",
  },
  {
    name: "JakOne Pay",
    desc: "Aplikasi dompet digital dari Bank DKI untuk transaksi harian dan pembayaran layanan publik.",
    // img: "/jakone.png",
  },
];

export default function DataDanInformasi() {
  const [selected, setSelected] = useState(0);

  return (
    <section className="bg-[#f4f8fd] px-4 md:px-6 py-8 md:py-12">
      <h2 className="text-2xl md:text-3xl font-bold mb-2">
        Data dan Informasi
      </h2>
      <p className="mb-6 md:mb-8 text-gray-600 text-sm md:text-base max-w-3xl">
        Akses ragam data dan informasi resmi Jakarta yang transparan dan
        terkini.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-4 md:gap-6 max-w-7xl mx-auto">
        {/* Sidebar - menggunakan grid area untuk reorder di mobile */}
        <div className="bg-white rounded-lg shadow p-3 md:p-4 flex flex-col gap-2 order-2 md:order-1 sticky top-[80px]">
          {kategoriList.map((item, idx) => (
            <button
              key={item}
              onClick={() => setSelected(idx)}
              className={`px-3 md:px-4 py-2.5 text-left rounded-lg text-sm md:text-base ${
                selected === idx ? "bg-[#eaf2fb] font-semibold" : "bg-white"
              } hover:bg-[#eaf2fb] transition-colors duration-200`}
            >
              {item}
            </button>
          ))}
        </div>

        {/* Konten */}
        <div className="order-1 md:order-2 bg-white rounded-lg shadow p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-semibold mb-2">
            {kategoriList[selected]}
          </h3>
          <p className="text-gray-600 mb-4 md:mb-6 text-sm md:text-base">
            Unduh dan manfaatkan aplikasi resmi Pemprov DKI Jakarta untuk
            layanan dan informasi dalam genggaman.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4 relative">
            {aplikasiMobile.map((app) => (
              <div
                key={app.name}
                className="border rounded-lg p-3 md:p-4 flex flex-col gap-2 md:gap-3 hover:shadow transition"
              >
                {/* <img src={app.img} alt={app.name} className="w-8 md:w-10 h-8 md:h-10" /> */}
                <h4 className="font-semibold text-sm md:text-base">
                  {app.name}
                </h4>
                <p className="text-xs md:text-sm text-gray-600 flex-1">
                  {app.desc}
                </p>
                <a
                  href="#"
                  className="text-blue-600 text-xs md:text-sm font-medium"
                >
                  Selengkapnya..
                </a>
              </div>
            ))}

            {/* Tombol navigasi kiri-kanan - hanya tampil di desktop */}
            <button className="hidden md:block absolute -left-4 top-1/2 transform -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-100">
              <ChevronLeft size={20} />
            </button>
            <button className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-100">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
