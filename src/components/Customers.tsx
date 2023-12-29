import { useEffect, useState } from "react";
import { BASEURL } from "../config.ts";
import axios from "axios";

export default function Customer() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get(`${BASEURL}/api/usages?populate=*`).then((res) => {
      setData(res.data.data);
    });
  }, []);
  return (
    <div className="bg-[#F2EFEB] px-[20px] lg:px-[100px] py-[70px]">
      <h2 className="text-[#141413] text-5xl font-light mb-4">
        Why use our APIs?
      </h2>
      {/* <p className="mb-8 text-xl">
        See what other companies have built using Mastercard's APIs
      </p> */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 ">
        {data?.map((usage: any, index: any) => (
          <div
            key={index}
            className=" lg:max-w-md flex flex-col bg-white p-8 rounded-2xl shadow-lg mt-10"
          >
            <div className="flex flex-grow flex-col justify-center items-center">
              <img
                className="mb-3"
                src={BASEURL + usage.attributes.img.data[0].attributes.url}
                alt="check"
              />
              <h1 className="text-xl text-[#00ADEF] font-bold mb-3 ">
                {usage.attributes.title}
              </h1>
              <p className="text-[19px] mb-4 ">
                {usage.attributes.description}
              </p>
            </div>
          </div>
        ))}

        {/* <div className=" lg:max-w-md flex flex-col bg-white p-8 rounded-2xl shadow-lg mt-10">
          <div className="flex flex-grow flex-col justify-center items-center">
            <img className="mb-3" src="src\assets\auth.svg" alt="check" />
            <h1 className="text-xl text-[#00ADEF] font-bold mb-3 ">
              OAuth 2.0
            </h1>
            <p className="text-[19px] mb-4 ">
              OAuth 2.0 is the industry-standard framework for authentication
              and authorisation. Coop Bank uses OAuth 2.0 allowing for simpler,
              standardised flows for developers to leverage.
            </p>
          </div>
        </div>
        <div className=" lg:max-w-md flex flex-col bg-white p-8 rounded-2xl shadow-lg mt-10">
          <div className="flex flex-grow flex-col justify-center items-center">
            <img className="mb-3" src="src\assets\rest.svg" alt="check" />
            <h1 className="text-xl text-[#00ADEF] font-bold mb-3 ">
              REST based
            </h1>
            <p className="text-[19px] mb-4 ">
              Coop Banks’ APIM uses RESTful APIs, the most popular, tried and
              tested way of creating APIs. REST APIs offer the benefit of a
              standard set of request actions, ensuring that using our APIs are
              easy to code and provide adaptable output.
            </p>
          </div>
        </div>
        <div className=" lg:max-w-md flex flex-col bg-white p-8 rounded-2xl shadow-lg mt-10">
          <div className="flex flex-grow flex-col justify-center items-center">
            <img
              className="mb-3"
              src="src\assets\integration.svg"
              alt="check"
            />
            <h1 className="text-xl text-[#00ADEF] font-bold mb-3 ">
              Quick integration
            </h1>
            <p className="text-[19px] mb-4 ">
              Our extensive documentation and step-by-step guides guarantee that
              integrating our APIs will be a seamless process.
            </p>
          </div>
        </div>
        <div className=" lg:max-w-md flex flex-col bg-white p-8 rounded-2xl shadow-lg mt-10">
          <div className="flex flex-grow flex-col justify-center items-center">
            <img className="mb-3" src="src\assets\service.svg" alt="check" />
            <h1 className="text-xl text-[#00ADEF] font-bold mb-3 ">
              Self-service
            </h1>
            <p className="text-[19px] mb-4 ">
              Our self-service portal enables you to create apps, test your
              code, monitor your API usage and so much more. Use our
              self-service portal to safely experiment and play with our APIs
              before leveraging them in creating innovative apps.
            </p>
          </div>
        </div>
        <div className=" lg:max-w-md flex flex-col bg-white p-8 rounded-2xl shadow-lg mt-10">
          <div className="flex flex-grow flex-col justify-center items-center">
            <img className="mb-3" src="src\assets\support.svg" alt="check" />
            <h1 className="text-xl text-[#00ADEF] font-bold mb-3 ">
              Dedicated support
            </h1>
            <p className="text-[19px] mb-4 ">
              We have a dedicated support team who are just a call away. We have
              an online chat and a 24/7 helpdesk that is committed to supporting
              and assisting with any problems or queries you may have.
            </p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
