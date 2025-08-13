import { Facebook, X, Youtube, Instagram } from "lucide-react";

function Footer() {
  return (
    <footer className="bg-blue-900 text-white px-4 md:px-6 py-6 md:py-8 text-xs md:text-sm">
      {/* Top: Icons */}
      <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 mb-4 md:mb-6">
        <a href="#">
          <Facebook className="w-5 h-5 md:w-6 md:h-6" />
        </a>
        <a href="#">
          <X className="w-5 h-5 md:w-6 md:h-6" />
        </a>
        <a href="#">
          <Youtube className="w-5 h-5 md:w-6 md:h-6" />
        </a>
        <a href="#">
          <Instagram className="w-5 h-5 md:w-6 md:h-6" />
        </a>
      </div>

      <hr className="border-blue-700 my-4 md:my-6" />

      {/* Middle: Contact Info */}
      <div className="flex flex-col md:flex-row justify-between gap-6">
        <div className="leading-relaxed text-center md:text-left">
          <strong>JAKARTA.GO.ID</strong>
          <br />
          Jl. Medan Merdeka Selatan 8–9 Jakarta Pusat, Jakarta, Indonesia
          <br />
          Telp: (+6221) 382 2255
          <br />
          Faks: (+6221) 382 2255
          <br />
          Surel: dki@jakarta.go.id
        </div>

        <div className="text-center md:text-right">
          <p className="mb-2">
            © 2024 Dinas Komunikasi, Informatika dan Statistik Pemprov DKI
            Jakarta
          </p>
          <p>
            <span className="block md:inline">
              Pengunjung hari ini: 3,768 &nbsp;&nbsp; Kemarin: 7,962
            </span>
            <span className="block md:inline">
              &nbsp;&nbsp; Minggu ini: 27,166
            </span>
            <span className="block md:inline">
              Bulan ini: 46,018 &nbsp;&nbsp; Total: 9,079,009
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
