function Kalender() {
  const events = [
    {
      img: "/bigu.jpg",
      title: "Bigu Festival 2025",
      date: "12 Jul - 13 Jul",
    },
    {
      img: "/srivijaya.jpg",
      title: "Pameran Srivijaya",
      date: "11 Aug - 16 Nov",
    },
    {
      img: "/kei_imazu.jpg",
      title: "Kei Imazu: The Sea is Barely Wrinkled",
      date: "01 Jul - 05 Oct",
    },
    {
      img: "/doh_kyung.jpg",
      title: "Doh Kyung Soo Asia Tour",
      date: "09 Aug - 09 Aug",
    },
  ];

  return (
    <div
      className="w-full flex flex-col items-center mb-10"
      style={{
        backgroundImage: "url('/batik.jpg')",
        backgroundSize: "cover",
      }}
    >
      {/* Header Section */}
      <div className="py-7 text-center">
        <h1 className="text-4xl font-bold text-white drop-shadow-lg">
          Kalender Acara
        </h1>
      </div>

      <div className="py-10 max-w-6xl mx-auto flex flex-col md:flex-row gap-6">
        {/* Sidebar Kalender */}
        <div className="bg-white text-black p-5 rounded-xl shadow-lg w-full md:w-1/3">
          {/* Header bulan */}
          <div className="bg-yellow-100 rounded-lg py-2 mb-4">
            <h2 className="text-center font-bold text-lg text-yellow-800">
              August 2025
            </h2>
          </div>

          {/* Hari */}
          <div className="grid grid-cols-7 text-center font-semibold text-sm mb-2 text-gray-600">
            {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>

          {/* Tanggal */}
          <div className="grid grid-cols-7 text-center text-sm gap-y-1">
            {[
              "",
              "",
              "",
              "",
              "1",
              <span className="text-white bg-yellow-500 rounded-full font-semibold">
                2
              </span>,
              "3",
              "4",
              "5",
              "6",
              "7",
              "8",
              <span className="text-white bg-yellow-500 rounded-full font-semibold">
                9
              </span>,
              "10",
              <span className="text-white bg-yellow-500 rounded-full font-semibold">
                11
              </span>,
              "12",
              "13",
              "14",
              "15",
              "16",
              "17",
              "18",
              "19",
              "20",
              "21",
              "22",
              "23",
              "24",
              "25",
              "26",
              "27",
              "28",
              "29",
              "30",
              "31",
            ].map((date, i) => (
              <div key={i}>{date}</div>
            ))}
          </div>

          {/* Event list */}
          <div className="mt-6 space-y-4">
            {events.map((event, i) => (
              <div
                key={i}
                className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition"
              >
                <img
                  src={event.img}
                  className="w-12 h-10 object-cover rounded-md"
                  alt={event.title}
                />
                <div>
                  <p className="font-semibold text-sm">{event.title}</p>
                  <p className="text-yellow-600 text-xs font-bold">
                    {event.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detail Event */}
        <div className="bg-white text-black p-6 rounded-xl shadow-lg w-full md:w-2/3">
          <img
            src="/bigu.jpg"
            className="rounded-md mb-4 w-full object-cover"
            alt="Bigu Festival 2025"
          />
          <h2 className="text-2xl font-bold mb-3 text-gray-800">
            Bigu Festival 2025
          </h2>
          <div className="mb-4 text-sm text-gray-700">
            <p>
              <strong>Lokasi:</strong> Lapangan Aldiron
            </p>
            <p>
              <strong>Tanggal:</strong> 12 - 13 Juli 2025
            </p>
          </div>
          <p className="text-gray-800 leading-relaxed mb-4 text-sm">
            Bigu Festival kembali hadir dengan konsep piknik terbesar di
            Indonesia yang punya tempat spesial di hati para penikmat musik.
            Dikerjakan oleh Bigu Creative, Bigu Festival akan menyapa Sobat Bigu
            dengan barisan musisi papan atas seperti Raisa, Rizky Febian, Yovie
            & Nuno, Hindia, dan masih banyak musisi lainnya. Nikmati suasana
            santai duduk di atas tikar dan menyaksikan penampilan para musisi
            dengan dikelilingi alam terbuka. Jangan sampai terlewat ya!
          </p>
          <a
            href="#"
            className="text-blue-600 text-sm font-semibold hover:underline"
          >
            Selengkapnya..
          </a>
        </div>
      </div>
    </div>
  );
}

export default Kalender;