export default function Slider3() {
  return (
    <div className=" bg-[#1a1a1a] min-h-screen flex flex-col justify-center text-white p-8">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="src\assets\bg-dark.svg"
        alt="tech partnership"
      />

      <div className="max-w-6xl z-10 mb-[15%]">
        <header className="mb-2">
          <h1 className="text-sm text-orange-600 font-light uppercase">
            Partners
          </h1>
        </header>
        <main className="">
          <h2 className="max-w-3xl text-6xl font-light leading-tight mb-6">
            Tech Partnership
          </h2>
          <p className="max-w-4xl leading-8 text-3xl font-light mb-8">
            Join forces with us to unlock new possibilities, drive advancements,
            and create a collaborative tech ecosystem that propels both our
            ventures to new heights.
          </p>
          <div className="flex gap-4">
            <button className="bg-orange-600 px-3 py-1 text-lg rounded-[50px] text-white">
              Learn more
            </button>
            <button className="bg-transparent border px-3 text-lg rounded-[50px] border-white text-white">
              View documentation
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}
