import React, { useState, useEffect } from "react";
import { BASEURL } from "../config.ts";
import axios from "axios";

export default function Api() {
  const [currentTab, setCurrentTab] = useState("Payments");

  const [dataApi, setDataApi] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);

  useEffect(() => {
    axios.get(`${BASEURL}/api/apis?populate=*`).then((res) => {
      setDataApi(res.data.data);
    });
    axios.get(`${BASEURL}/api/catagories`).then((res) => {
      setDataCategory(res.data.data);
    });
  }, []);

  return (
    <div className="container mx-auto px-4 my-10">
      <h1 className="text-xl text-[#CF4500] uppercase">Apis</h1>
      <h2 className="text-3xl font-[400] mt-4 mb-4">
        APIs built by developers, for developers
      </h2>
      <p className="mb-6">Find the product that is right for you</p>
      <a
        className="text-[#141413] hover:underline text-[13px]"
        href="https://controlplane-apim-uat.coopbankoromiasc.com/devportal/apis"
      >
        Browse all APIs →
      </a>
      <div className="flex gap-8 my-4">
        {dataCategory?.map((category: any, index: any) => (
          <button
            key={index}
            onClick={() => setCurrentTab(category.attributes.catagory)}
            className={`
          ${
            currentTab === category.attributes.catagory
              ? "px-5 py-[5px] rounded-[50px] bg-[#CF4500] text-white"
              : "px-5 py-[5px] text-[#777470]"
          }`}
          >
            {category.attributes.catagory}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-10">
        <>
          {dataApi
            .filter(
              (api: any) =>
                api.attributes.catagory.data.attributes.catagory === currentTab
            )
            .map((api: any, index: any) => (
              <div key={index} className="w-full">
                <div>
                  <img
                    alt="Product screenshot"
                    className="w-full h-auto"
                    height="100"
                    // src="src\assets\gateway.png"
                    src={BASEURL + api.attributes.img.data[0].attributes.url}
                    style={{
                      aspectRatio: "350/200",
                      objectFit: "cover",
                    }}
                    width="200"
                  />
                  <h3 className="text-4xl font-[400] mt-4">
                    {api.attributes.title}
                  </h3>
                  <p className="mt-2 text-[17px] w-[90%]">
                    {api.attributes.description}
                  </p>
                  <div className="flex mt-4">
                    <a
                      className="text-[#CF4500] font-medium hover:underline mr-4"
                      href="https://controlplane-apim-uat.coopbankoromiasc.com/devportal/apis"
                    >
                      Learn more
                    </a>
                    {/* <a
                    className="text-[#CF4500] font-medium hover:underline"
                    href="#"
                  >
                    Documentation
                  </a> */}
                  </div>
                </div>
              </div>
            ))}
        </>

        {/* <a
                    className="text-[#CF4500] font-medium hover:underline"
                    href="#"
                  >
                    Documentation
                  </a> */}
      </div>

      <hr />

      <div className="flex flex-col items-center justify-between px-8 py-12 border-t border-gray-200 sm:flex-row">
        <div className="flex flex-col items-center mb-6 sm:items-start sm:mb-0">
          <h2 className="text-2xl font-semibold text-gray-900">
            Looking for something else?
          </h2>
          <p className="mt-1 text-sm text-gray-600">
            Check out our full product catalog
          </p>
        </div>
        <div className="flex flex-row items-center justify-center mt-6 sm:mt-0">
          <a
            className="text-[#141413] hover:text-indigo-500"
            href="https://controlplane-apim-uat.coopbankoromiasc.com/devportal/apis"
          >
            Browse all APIs
          </a>
          <ArrowRightIcon className="w-[15px] h-4 ml-2 text-[#CF4500]" />
        </div>
      </div>
    </div>
  );
}

function ArrowRightIcon(props: any) {
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
      <path d="M5 12h14" />
      <path d="m12 5 7 7-7 7" />
    </svg>
  );
}
