export default function Slider1() {
  return (
    <div className="relative bg-[#0f172a] text-white min-h-screen flex flex-col  justify-center px-10">
      <img
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="src\assets\bg-dark.svg"
        alt="tech partnership"
      />
      <div className="max-w-3xl z-10 mb-[15%]">
        <header className=" top-4 left-4 text-sm uppercase tracking-widest text-teal-500">
          Financial Apis
        </header>
        <h1 className="text-6xl font-medium mb-8">
          Diverse Financial APIs for Every Need
        </h1>
        <p className="mb-6 text-3xl font-light">
          Explore a spectrum of possibilities with our range of distinct
          Financial APIs.
        </p>
        <div className="flex gap-4 ">
          <button className="bg-teal-500 text-white text-lg px-4 py-1 rounded-[50px]">
            Learn more
          </button>
          <button className="bg-transparent border border-white text-white text-lg px-3 rounded-[50px]">
            View documentation
          </button>
        </div>
      </div>
      {/* <div className="absolute top-10 right-4 max-w-sm">
        <div className="bg-white text-black rounded-lg p-4 shadow-lg">
          <div className="flex items-center justify-between mb-4">
            <MessageCircleIcon className="text-teal-500" />
            <span className="text-xs font-bold uppercase text-gray-500">
              New Message
            </span>
          </div>
          <p className="text-sm">
            You just spent $210.15 at PartnerMerchant. Would you like 5 years
            extended warranty?
          </p>
        </div>
      </div> */}
    </div>
  );
}

function MessageCircleIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m3 21 1.9-5.7a8.5 8.5 0 1 1 3.8 3.8z" />
    </svg>
  );
}
