export default function Community() {
  return (
    <div className="flex flex-col items-center bg-[#F2EFEB] p-8">
      <div>
        <h1 className="text-3xl text-[#141413] font-light mb-2">
          Read the latest from our Developer Community
        </h1>
        <p className="text-[17px] text-gray-600 mb-8">
          Stay updated with developer news, API products and technology
          releases, trends and more
        </p>
        <div className="flex grid-cols-3 gap-8 mb-8">
          <div className=" bg-white rounded-lg">
            <div className="flex flex-col space-x-4">
              <img
                className="h-[300px] rounded-t-lg"
                src="https://static.developer.mastercard.com/content/mcapi/img/home/ai-in-ob-blog-heros.jpg?latest"
              />
              <div className="w-full ">
                <h3 className="text-md font-semibold my-3">OPEN BANKING</h3>
                <p className="text-gray-800 text-xl my-3">
                  Overview of how AI can be used in Open Banking
                </p>
                <p className="text-gray-500 my-2">
                  Natesh Babu Arunachalam | 20 min read
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex flex-row items-center space-x-3 bg-white p-4 rounded-lg">
              <img
                className="h-[100px] w-[140px] rounded-lg"
                src="https://static.developer.mastercard.com/content/mcapi/img/home/cc_heros.jpg"
              />
              <div>
                <h3 className="text-lg text-[#25836D] font-semibold mb-1">
                  TECHNOLOGY
                </h3>
                <p className="text-gray-800">Confidential Computing</p>
                <p className="text-gray-500">
                  Sebastien Le Callonnec | 20 min read
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-3 bg-white p-4 rounded-lg">
              <img
                className="h-[100px] w-[140px] rounded-lg"
                src="https://static.developer.mastercard.com/content/mcapi/img/home/cc_heros.jpg"
              />
              <div>
                <h3 className="text-lg text-[#25836D] font-semibold mb-1">
                  TECHNOLOGY
                </h3>
                <p className="text-gray-800">Confidential Computing</p>
                <p className="text-gray-500">
                  Sebastien Le Callonnec | 20 min read
                </p>
              </div>
            </div>
            <div className="flex flex-row items-center space-x-3 bg-white p-4 rounded-lg">
              <img
                className="h-[100px] w-[140px] rounded-lg"
                src="https://static.developer.mastercard.com/content/mcapi/img/home/cc_heros.jpg"
              />
              <div>
                <h3 className="text-lg text-[#25836D] font-semibold mb-1">
                  TECHNOLOGY
                </h3>
                <p className="text-gray-800">Confidential Computing</p>
                <p className="text-gray-500">
                  Sebastien Le Callonnec | 20 min read
                </p>
              </div>
            </div>
          </div>
        </div>
        <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
          Read more
        </button>
      </div>
    </div>
  );
}
