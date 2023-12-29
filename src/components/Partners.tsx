import { useState, useEffect } from "react";
import { BASEURL } from "../config.ts";
import axios from "axios";

export default function Partners() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${BASEURL}/api/partners?populate=*`).then((res) => {
      setData(res.data.data);
    });
  }, []);
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

        <div className="mt-16 flex flex-wrap items-center justify-center overflow grid-cols-2 gap-4  sm:grid-cols-2 lg:grid-cols-5">
          {data.map((partners: any, index: any) => (
            <div
              key={index}
              className="flex flex-row justify-center bg-white min-w-[250px] h-[100px] p-3  items-center"
            >
              <img
                src={BASEURL + partners.attributes.img.data[0].attributes.url}
                alt="Airlines"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
