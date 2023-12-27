export default function Partners() {
  return (
    <div id="partners" className="bg-[#f7f7f7]">
      <div className=" mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Integration Partners
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-500">
            Here are some of our integration partners.
          </p>
        </div>
        {/* <div className="flex justify-center">
          <button className="bg-orange-600 text-white px-8 py-3 font-semibold rounded-full">
            Contact Sales
          </button>
        </div> */}
        <div className="mt-16 grid grid-cols-2 gap-4  sm:grid-cols-2 lg:grid-cols-5">
          <div className="flex flex-row justify-center bg-white  items-center">
            <img src="src\assets\airlines.png" alt="Airlines" />
          </div>
          <div className="flex flex-row justify-center bg-white  items-center px-3">
            <img src="src\assets\telecom.png" alt="Airlines" />
          </div>
          <div className="flex flex-row justify-center bg-white  items-center">
            <img src="src\assets\dstv.png" alt="Airlines" />
          </div>
          <div className="flex flex-row justify-center bg-white  items-center px-3">
            <img src="src\assets\canal plus.png" alt="Airlines" />
          </div>
          <div className="flex flex-row justify-center bg-white  items-center">
            <img src="src\assets\safaricom.png" alt="Airlines" />
          </div>
        </div>
      </div>
    </div>
  );
}
