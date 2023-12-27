// import { CardContent, Card } from "@/components/ui/card";

import { useState } from "react";

export default function Api() {
  const [currentTab, setCurrentTab] = useState("Payments");
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
        <button
          onClick={() => setCurrentTab("Payments")}
          className={`
          ${
            currentTab === "Payments"
              ? "px-5 py-[5px] rounded-[50px] bg-[#CF4500] text-white"
              : "px-5 py-[5px] text-[#777470]"
          }`}
        >
          Payments
        </button>
        <button
          onClick={() => setCurrentTab("Security")}
          className={`
          ${
            currentTab === "Security"
              ? "px-5 py-[5px] rounded-[50px] bg-[#CF4500] text-white"
              : "px-5 py-[5px] text-[#777470]"
          }`}
        >
          Security
        </button>
        <button
          onClick={() => setCurrentTab("Data and Services")}
          className={`
          ${
            currentTab === "Data and Services"
              ? "px-5 py-[5px] rounded-[50px] bg-[#CF4500] text-white"
              : "px-5 py-[5px] text-[#777470]"
          }`}
        >
          Data and Services
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 my-10">
        {currentTab === "Payments" && (
          <>
            <div className="w-full">
              <div>
                <img
                  alt="Product screenshot"
                  className="w-full h-auto"
                  height="200"
                  src="src\assets\gateway.png"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <h3 className="text-4xl font-[400] mt-4">
                  Payment Gateway API
                </h3>
                <p className="mt-2 text-[17px] w-[90%]">
                  Facilitates online payment processing for e-commerce
                  transactions, allowing merchants to securely accept payments
                  through various channels, including credit/debit cards and
                  digital wallets.
                </p>
                <div className="flex mt-4">
                  <a
                    className="text-[#CF4500] font-medium hover:underline mr-4"
                    href="#"
                  >
                    Learn more
                  </a>
                  <a
                    className="text-[#CF4500] font-medium hover:underline"
                    href="#"
                  >
                    Documentation
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div>
                <img
                  alt="Product screenshot"
                  className="w-full h-auto"
                  height="200"
                  src="src\assets\bill payment.png"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <h3 className="text-4xl font-[400] font-semibold mt-4">
                  Bill Payments
                </h3>
                <p className="mt-2 text-[17px] w-[90%]">
                  Effortlessly integrate Bill Payment APIs to empower users in
                  settling utility bills such as water and electricity,
                  providing a seamless and secure digital transaction
                  experience.
                </p>
                <div className="flex mt-4">
                  <a
                    className="text-[#CF4500] font-medium hover:underline mr-4"
                    href="#"
                  >
                    Learn more
                  </a>
                  <a
                    className="text-[#CF4500] font-medium hover:underline"
                    href="#"
                  >
                    Documentation
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
        {currentTab === "Security" && (
          <>
            <div className="w-full">
              <div>
                <img
                  alt="Product screenshot"
                  className="w-full h-auto"
                  height="200"
                  src="src\assets\api-authentication.png"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <h3 className="text-4xl font-[400] mt-4">
                  Fortified API Authentication
                </h3>
                <p className="mt-2 text-[17px] w-[90%]">
                  Experience the confidence of fortified API security with our
                  advanced authentication measures. We employ cutting-edge
                  technologies to ensure that your sensitive financial data
                  remains protected.
                </p>
                <div className="flex mt-4">
                  <a
                    className="text-[#CF4500] font-medium hover:underline mr-4"
                    href="#"
                  >
                    Learn more
                  </a>
                  <a
                    className="text-[#CF4500] font-medium hover:underline"
                    href="#"
                  >
                    Documentation
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div>
                <img
                  alt="Product screenshot"
                  className="w-full h-auto"
                  height="200"
                  src="src\assets\credentials.png"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <h3 className="text-4xl font-[400]  mt-4">
                  Secure API Credentials Management
                </h3>
                <p className="mt-2 text-[17px] w-[90%]">
                  Elevate your development journey with our secure API
                  credentials management. Easily obtain API keys and tokens
                  through a user-friendly interface, backed by state-of-the-art
                  encryption.
                </p>
                <div className="flex mt-4">
                  <a
                    className="text-[#CF4500] font-medium hover:underline mr-4"
                    href="#"
                  >
                    Learn more
                  </a>
                  <a
                    className="text-[#CF4500] font-medium hover:underline"
                    href="#"
                  >
                    Documentation
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
        {currentTab === "Data and Services" && (
          <>
            <div className="w-full">
              <div>
                <img
                  alt="Product screenshot"
                  className="w-full h-auto"
                  height="200"
                  src="src\assets\financial_data.png"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <h3 className="text-4xl font-[400] mt-4">
                  Tailored Financial Data Subscriptions
                </h3>
                <p className="mt-2 text-[17px] w-[90%]">
                  Explore tailored financial data subscriptions that seamlessly
                  cater to diverse development needs. Subscribe and unlock a
                  wealth of real-time and historical data, empowering developers
                  to create innovative financial solutions with ease.
                </p>
                <div className="flex mt-4">
                  <a
                    className="text-[#CF4500] font-medium hover:underline mr-4"
                    href="#"
                  >
                    Learn more
                  </a>
                  <a
                    className="text-[#CF4500] font-medium hover:underline"
                    href="#"
                  >
                    Documentation
                  </a>
                </div>
              </div>
            </div>
            <div className="w-full">
              <div>
                <img
                  alt="Product screenshot"
                  className="w-full h-auto"
                  height="200"
                  src="src\assets\analytics.png"
                  style={{
                    aspectRatio: "300/200",
                    objectFit: "cover",
                  }}
                  width="300"
                />
                <h3 className="text-4xl font-[400] mt-4">
                  Subscribe & Transform with API Insights
                </h3>
                <p className="mt-2 text-[17px] w-[90%]">
                  Subscribe to our APIs and embark on a transformative journey.
                  Gain exclusive access to insightful API analytics, empowering
                  developers to optimize, innovate, and make data-driven
                  decisions.
                </p>
                <div className="flex mt-4">
                  <a
                    className="text-[#CF4500] font-medium hover:underline mr-4"
                    href="#"
                  >
                    Learn more
                  </a>
                  <a
                    className="text-[#CF4500] font-medium hover:underline"
                    href="#"
                  >
                    Documentation
                  </a>
                </div>
              </div>
            </div>
          </>
        )}
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
