function Banner() {
  return (
    <section
      className="rounded-lg p-4 md:p-10 flex gap-6 -mt-20 md:-mt-40 mx-2 md:mx-0"
      style={{
        position: "relative",
        zIndex: 10,
      }}
    >
      {/* Card Kiri (Logo + Konten) */}
      <div className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg md:shadow-xl w-full md:w-2/3">
        {/* KIRI - Logo */}
        <div className="bg-red-600 rounded-lg text-white w-full md:w-[300px] p-6 md:p-4 flex flex-col items-center justify-between md:mr-5">
          <div className="text-xs tracking-widest font-semibold mb-2">
            DIRGAHAYU REPUBLIK INDONESIA
          </div>
          <img
            src="/hutri.png"
            alt="Logo HUT RI ke-80"
            className="w-[150px] md:w-[200px]"
          />
          <div className="text-center font-bold text-base md:text-lg leading-snug mt-4">
            Bersatu Berdaulat
            <br />
            Rakyat Sejahtera
            <br />
            Indonesia Maju
          </div>
        </div>

        {/* TENGAH - Konten */}
        <div className="flex-1 p-5 overflow-y-scroll h-74">
          <h1 className="font-bold text-3xl mb-4">
            Logo dan Tema HUT Ke-80 Kemerdekaan RI
          </h1>
          <p className="text-gray-700 leading-relaxed h-40 pr-2">
            Dalam rangka menyambut peringatan Hari Ulang Tahun ke-80 Kemerdekaan
            Republik Indonesia, Presiden Prabowo Subianto secara resmi
            meluncurkan tema dan logo peringatan nasional tersebut di Istana
            Negara pada Rabu, 23 Juli 2025. Tahun ini, perayaan kemerdekaan
            Indonesia mengusung tema{" "}
            <em>“Bersatu Berdaulat, Rakyat Sejahtera, Indonesia Maju”</em>,
            dengan logo berupa angka 80 berwarna merah putih. Logo HUT ke-80 RI
            ini akan digunakan secara luas dalam berbagai media publikasi oleh
            instansi pemerintah, swasta, lembaga pendidikan, maupun masyarakat
            umum. Masyarakat dapat mengunduh logo tersebut dalam berbagai format
            melalui situs resmi Sekretariat Negara.
          </p>
        </div>
      </div>

      {/* Card Kanan (Populer/Terbaru) */}
      <div className="bg-blue-900 text-white w-full md:w-[300px] rounded-lg overflow-hidden shadow-lg">
        <div className="flex">
          <div className="flex-1 text-center font-bold p-3 bg-blue-900">
            POPULER
          </div>
          <div className="flex-1 text-center p-3 bg-gray-200 text-gray-600 font-bold">
            TERBARU
          </div>
        </div>
        <div className="p-4 h-60 overflow-y-scroll space-y-3">
          <div className="border-b border-white/30 pb-2">
            <span className="font-bold mr-2">1</span>JAKI Hadir dengan Wajah
            Baru untuk Jakarta Lebih Nyaman
          </div>
          <div className="border-b border-white/30 pb-2">
            <span className="font-bold mr-2">2</span>Penanganan Banjir dengan
            Inovasi dan Sinergi Pemprov DKI Jakarta
          </div>
          <div className="border-b border-white/30 pb-2">
            <span className="font-bold mr-2">3</span>Langkah Strategis Jakarta
            Mitigasi Ancaman Bencana Iklim
          </div>
          <div className="border-b border-white/30 pb-2">
            <span className="font-bold mr-2">4</span>Layanan Konsultasi Dampak
            Judi Online
          </div>
          <div>
            <span className="font-bold mr-2">5</span>Membangun Jakarta: Kota
            Cerdas Berskala Global
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
