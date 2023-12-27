export default function Slider2() {
  return (
    <div className="bg-[#1a1a1a] min-h-screen flex flex-col justify-center text-white p-8">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="src\assets\bg-dark.svg"
        alt="tech partnership"
      />
      <div className="max-w-6xl z-10 mb-[15%]">
        <header className="mb-2">
          <h1 className="text-sm text-orange-600 font-light uppercase">
            Api docs
          </h1>
        </header>
        <main className="max-w-3xl">
          <h2 className="text-6xl font-medium leading-tight mb-6">
            Crystal Clear API Documentation
          </h2>
          <p className="text-3xl mb-8 font-light">
            Navigate integration effortlessly with our meticulously crafted and
            crystal clear API documentation.
          </p>
          <div className="flex gap-4">
            <button className="bg-orange-600 px-3 py-1 rounded-[50px] text-lg text-white">
              Learn more
            </button>
            <button className="bg-transparent border px-3 rounded-[50px] text-lg border-white text-white">
              View documentation
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
