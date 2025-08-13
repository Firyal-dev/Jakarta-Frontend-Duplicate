import { useState } from "react";

const layananList = [
  {
    name: "Layanan Darurat",
    icon: "/layanan_darurat.png",
  },
  {
    name: "Layanan Pengunjung",
    icon: "/layanan_pengunjung.png",
  },
  {
    name: "Bisnis dan Investasi",
    icon: "/bisnis_investasi.png",
  },
  {
    name: "Layanan Disabilitas",
    icon: "/layanan_disabilitas.png",
  },
  {
    name: "Administrasi Kependudukan",
    icon: "/admin_kependudukan.png",
  },
  {
    name: "Pajak dan Retribusi",
    icon: "/pajak_restribusi.png",
  },
  {
    name: "Layanan Pendidikan",
    icon: "/layanan_pendidikan.png",
  },
  {
    name: "Ketenagakerjaan & Pelatihan",
    icon: "/ketenagakerjaan.png",
  },
  {
    name: "Kesehatan & Kebugaran",
    icon: "/kesehatan_kebugaran.png",
  },
  {
    name: "Mobilitas & Transportasi",
    icon: "/mobilitas_transportasi.png",
  },
  {
    name: "Pemukiman & Lingkungan",
    icon: "/pemukiman_lingkungan.png",
  },
  {
    name: "Ruang Terbuka & Fasilitas",
    icon: "/ruang_terbuka_fasilitas.png",
  },
  {
    name: "Layanan Lain",
    icon: "/layanan_lain.png",
  },
  {
    name: "Kanal Pengaduan",
    icon: "/kanal_pengaduan.png",
  },
];

function DataDanInformasi() {
  const [active, setActive] = useState(1); // default aktif ke-2 (Layanan Pengunjung)

  return (
    <section className="bg-white px-3 md:px-6 py-6 md:py-12">
      <h2 className="text-2xl md:text-4xl font-bold mb-4 md:mb-6">Layanan</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 auto-rows-fr gap-3 md:gap-6 justify-items-center">
        {layananList.map((layanan, idx) => (
          <button
            key={layanan.name}
            onClick={() => setActive(idx)}
            className={`flex flex-col items-center focus:outline-none group ${
              active === idx
                ? "border-2 border-black rounded-xl bg-white shadow"
                : ""
            } p-2 transition-all duration-150 w-full`}
          >
            <div
              className={`w-16 h-16 md:w-24 md:h-24 rounded-full flex items-center justify-center mb-2 bg-[#eaf2fb] ${
                active === idx ? "border-2 border-black" : ""
              }`}
            >
              <img
                src={layanan.icon}
                alt={layanan.name}
                className="w-8 h-8 md:w-12 md:h-12 object-contain"
              />
            </div>
            <span
              className={`mt-1 text-center text-sm md:text-base font-normal ${
                active === idx ? "underline font-semibold" : ""
              }`}
            >
              {layanan.name}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

export default DataDanInformasi;
