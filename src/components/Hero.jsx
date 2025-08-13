function Hero() {
  const textShadow = {
    textShadow: "2px 2px 8px rgba(0,0,0,0.8)",
  };

  return (
    <>
      <section
        className="flex flex-col justify-center h-[50vh] md:h-130"
        style={{
          backgroundImage: "url('/Jakartabg.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mb-4 px-4">
          <h1
            style={textShadow}
            className="text-center font-bold text-2xl md:text-4xl text-white"
          >
            Jakarta Jati Diri Indonesia, <br /> Megapolitan Dunia
          </h1>
        </div>

        <div className="px-4">
          <p
            style={textShadow}
            className="text-center text-white text-sm md:text-base"
          >
            Kehidupan perkotaan yang semarak dengan berbagai keragaman, dari
            warisan budaya, inovasi <br /> tanpa henti, hingga destinasi kelas dunia
            yang memikat. Selamat datang!
          </p>
        </div>
      </section>
    </>
  );
}

export default Hero;
