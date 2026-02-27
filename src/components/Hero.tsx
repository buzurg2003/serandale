import Image from 'next/image';

export default function Hero() {
  return (
    /* pt-24 для мобилок, pt-[295px] для десктопа.
       Добавлен px-4, чтобы контент не прилипал к краям экрана */
    <section
      className="relative min-h-screen flex flex-col items-center pt-24 lg:pt-73.75 overflow-hidden bg-black px-4 sm:px-6">

      {/* Background Glows (Свечение) */}
      <div
        className="absolute top-1/4 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-purple-600/15 blur-[100px] md:blur-[120px] rounded-full -z-10"/>
      <div
        className="absolute top-1/3 right-1/4 w-48 h-48 md:w-64 md:h-64 bg-blue-600/15 blur-[100px] md:blur-[120px] rounded-full -z-10"/>

      <div className="relative z-10 w-full max-w-7xl mx-auto text-center flex flex-col items-center">

        {/* Title: Теперь точно по центру */}
        <h1
          className="text-[34px] sm:text-5xl md:text-6xl lg:text-[80px] font-bold leading-[1.1] tracking-tight mb-6 md:mb-8 text-white w-full">
          <span
            className="bg-linear-to-r from-[#FF3BFF] via-[#ECBFBF] to-[#5C24FF] bg-clip-text text-transparent md:whitespace-nowrap block md:inline">
            THE BEST WEBSITE EVER
          </span>
          <span className="block text-white mt-2 md:mt-0">Scalable.</span>
        </h1>

        {/* Description: Ограничение ширины для симметрии */}
        <p
          className="text-white text-sm sm:text-lg md:text-xl max-w-[320px] sm:max-w-2xl md:max-w-3xl mx-auto mb-10 leading-relaxed font-light">
          Our technology performing fast blockchain (120K TPS) and it has
          <br className="hidden lg:block"/>
          guaranteed AI-based data security. Proof of Stake, its consensus
          <br className="hidden lg:block"/> algorithm enables unlimited speeds.
        </p>

        {/* Buttons Group: Центрирование через w-full и justify-center */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 md:mb-0 w-full z-20">

          {/* Кнопка Get started */}
          <button
            className="relative w-full max-w-70 sm:w-37.5 h-14.5 rounded-full p-[1.5px] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,59,255,0.3)] group">
            <a href="#">
              <div
                className="absolute inset-0 rounded-full"
                style={{background: 'linear-gradient(to right, #FF3BFF, #ECBFBF, #5C24FF, #D94FD5)'}}/>
              <div
                className="absolute inset-[1.5px] bg-black rounded-full flex items-center justify-center transition-all duration-300">
                <span className="text-white font-medium text-lg">Get started</span>
              </div>
            </a>
          </button>

          {/* Вторая кнопка */}
          <button
            className="w-full max-w-70 sm:w-37.5 h-14.5 flex items-center justify-center rounded-full bg-black border border-white text-white hover:bg-white hover:text-black transition-all font-medium text-lg whitespace-nowrap z-10 relative">
            <a href="#" className="w-full h-full flex items-center justify-center">
              Read more
            </a>
          </button>
        </div>

        {/* Illustration Container: Заменен w-screen на w-full для устранения перекоса */}
        <div
          className="relative w-full max-w-360 h-70 sm:h-112.5 md:h-162.5 -mt-5 sm:-mt-24 lg:-mt-32 pointer-events-none">
          <Image
            src="/image.png"
            alt="Blockchain Robots Illustration"
            fill
            className="object-contain object-bottom md:object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
}