import { useState } from "react";

const MENU = {
  "mengenal-jakarta": {
    title: "Mengenal Jakarta",
    sections: [
      {
        key: "profil-jakarta",
        label: "Profil Jakarta",
        items: [
          {
            key: "tentang-jakarta",
            label: "Tentang Jakarta",
            content:
              "Jakarta adalah Ibu Kota Republik Indonesia. Provinsi DKI Jakarta terbagi menjadi lima wilayah Kota Administrasi dan satu Kabupaten Administrasi dengan luas keseluruhan wilayah 662,33 km².",
          },
          {
            key: "sejarah-jakarta",
            label: "Sejarah Jakarta",
            content:
              "Sejarah Jakarta dimulai dari pelabuhan Sunda Kelapa, lalu berganti nama jadi Jayakarta setelah direbut oleh Pangeran Fatahillah dari Kesultanan Demak tahun 1527.",
          },
          {
            key: "lambang-daerah",
            label: "Lambang Daerah",
            content: "Informasi tentang lambang daerah.",
          },
          {
            key: "peta-jakarta",
            label: "Peta Jakarta",
            content: "Peta administratif dan peta kawasan Jakarta.",
          },
        ],
      },
      {
        key: "profil-pemerintahan",
        label: "Profil Pemerintahan",
        items: [
          {
            key: "visi-misi",
            label: "Visi Misi",
            content: "Visi dan misi pemerintahan provinsi DKI Jakarta.",
          },
          {
            key: "ruang-lingkup",
            label: "Ruang Lingkup",
            content: "Ruang lingkup tugas pemerintah daerah.",
          },
          {
            key: "tugas-fungsi",
            label: "Tugas & Fungsi",
            content: "Tugas dan fungsi tiap unit pemerintahan.",
          },
        ],
      },
    ],
  },

  "informasi-layanan": {
    title: "Informasi dan Layanan",
    sections: [
      {
        key: "layanan-darurat",
        label: "Layanan Darurat",
        items: [
          {
            key: "layanan-call-center",
            label: "Layanan Call Center",
            content: "Jakarta Siaga 112 — layanan darurat terpadu.",
          },
          {
            key: "layanan-kebencanaan",
            label: "Layanan Kebencanaan",
            content: "Pantau kebencanaan & kanal evakuasi.",
          },
        ],
      },
      {
        key: "layanan-pengunjung",
        label: "Layanan Pengunjung",
        items: [
          {
            key: "akomodasi",
            label: "Akomodasi",
            content: "Informasi akomodasi untuk pengunjung.",
          },
          {
            key: "destinasi-jakarta",
            label: "Destinasi Jakarta",
            content: "Tempat menarik dan destinasi wisata di Jakarta.",
          },
        ],
      },
    ],
  },
};

export default function Menu() {
  const [open, setOpen] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  // Clear selections on close
  const [selectedMenu, setSelectedMenu] = useState(null); // key of MENU
  const [selectedSection, setSelectedSection] = useState(null); // key of section
  const [selectedItem, setSelectedItem] = useState(null); // key of item

  const toggleMobileMenu = () => setMobileMenu((s) => !s);

  // open specific main menu (toggle if same)
  const openMenu = (menuKey) => {
    if (selectedMenu === menuKey && open) {
      // same menu clicked: close
      setOpen(false);
      setSelectedMenu(null);
      setSelectedSection(null);
      setSelectedItem(null);
    } else {
      // open new menu
      setOpen(true);
      setSelectedMenu(menuKey);
      setSelectedSection(null);
      setSelectedItem(null);
    }
  };

  const chooseSection = (sectionKey) => {
    setSelectedSection(sectionKey);
    setSelectedItem(null);
  };

  const chooseItem = (itemKey) => {
    setSelectedItem(itemKey);
  };

  // helpers to find data
  const currentMenu = selectedMenu ? MENU[selectedMenu] : null;
  const currentSection =
    currentMenu?.sections.find((s) => s.key === selectedSection) ?? null;
  const currentItem =
    currentSection?.items.find((i) => i.key === selectedItem) ?? null;

  return (
    <>
      {/* Navbar */}
      <nav className="bg-blue-700 text-white p-4 hover:bg-blue-900 transition-all">
        <div className="flex justify-center items-center max-w-7xl mx-auto">
          {/* Hamburger */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => openMenu("mengenal-jakarta")}
              className={`hidden md:inline-block px-2 py-1 font-bold ${
                selectedMenu === "mengenal-jakarta" && open ? "underline" : ""
              }`}
            >
              Mengenal Jakarta
            </button>

            <button
              onClick={() => openMenu("informasi-layanan")}
              className={`hidden md:inline-block px-2 py-1 font-bold ${
                selectedMenu === "informasi-layanan" && open ? "underline" : ""
              }`}
            >
              Informasi dan Layanan
            </button>

            <button className="hidden md:inline-block px-2 py-1 font-bold">
              Jelajah Jakarta
            </button>
            <button className="hidden md:inline-block px-2 py-1 font-bold">
              PPID
            </button>
            <button className="hidden md:inline-block px-2 py-1 font-bold">
              Pusat Media
            </button>

            <button onClick={toggleMobileMenu} className="md:hidden p-2">
              {/* simple hamburger */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile list */}
        {mobileMenu && (
          <div className="md:hidden mt-4 space-y-2 px-2">
            <button
              onClick={() => openMenu("mengenal-jakarta")}
              className="block w-full text-left px-4 py-2 bg-blue-800 rounded"
            >
              Mengenal Jakarta
            </button>
            <button
              onClick={() => openMenu("informasi-layanan")}
              className="block w-full text-left px-4 py-2 bg-blue-800 rounded"
            >
              Informasi dan Layanan
            </button>
            <button className="block w-full text-left px-4 py-2 bg-blue-800 rounded">
              Jelajah Jakarta
            </button>
            <button className="block w-full text-left px-4 py-2 bg-blue-800 rounded">
              PPID
            </button>
            <button className="block w-full text-left px-4 py-2 bg-blue-800 rounded">
              Pusat Media
            </button>
          </div>
        )}
      </nav>

      {/* Dropdown Content */}
      {open && selectedMenu && (
        <div className="bg-blue-700 text-white w-full z-50 px-4 py-6 space-y-6 md:space-y-0 md:space-x-8 md:absolute md:left-0 md:right-0">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Col 1: sections (level 2) */}
            <div className="space-y-2">
              <h4 className="font-semibold mb-2">{currentMenu?.title}</h4>
              {currentMenu?.sections.map((sec) => (
                <button
                  key={sec.key}
                  onClick={() => chooseSection(sec.key)}
                  className={`w-full text-left px-4 py-2 rounded hover:bg-blue-600 transition ${
                    selectedSection === sec.key
                      ? "bg-blue-600 font-semibold"
                      : ""
                  }`}
                >
                  {sec.label}
                </button>
              ))}
            </div>

            {/* Col 2: items of selected section */}
            <div className="space-y-2">
              <h4 className="font-semibold mb-2">
                {selectedSection ? currentSection?.label ?? "" : "Pilih bagian"}
              </h4>
              {selectedSection ? (
                currentSection?.items.map((it) => (
                  <button
                    key={it.key}
                    onClick={() => chooseItem(it.key)}
                    className={`block w-full text-left px-4 py-2 rounded hover:bg-blue-600 transition ${
                      selectedItem === it.key ? "bg-blue-600 font-semibold" : ""
                    }`}
                  >
                    {it.label}
                  </button>
                ))
              ) : (
                <p className="text-sm text-white/80">
                  Klik salah satu bagian di kolom kiri untuk melihat item.
                </p>
              )}
            </div>

            {/* Col 3: detail/content */}
            <div className="text-sm leading-relaxed">
              <div className="flex justify-between items-start mb-2">
                <h4 className="font-semibold">
                  {selectedItem ? currentItem?.label ?? "" : "Detail"}
                </h4>
                <div>
                  <button
                    onClick={() => {
                      setOpen(false);
                      setSelectedMenu(null);
                      setSelectedSection(null);
                      setSelectedItem(null);
                    }}
                    className="text-white/80 hover:text-white"
                    aria-label="Close menu"
                  >
                    ✕
                  </button>
                </div>
              </div>

              {selectedItem ? (
                <p className="text-white/90">{currentItem?.content}</p>
              ) : (
                <p className="text-white/80">
                  Pilih item di kolom tengah untuk melihat keterangan lengkap.
                </p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
