import { useState, useEffect } from "react";
import { FaBars } from "react-icons/fa";
import { TfiClose } from "react-icons/tfi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  }, [menuOpen]);

  return (
    <>
      <nav className="sticky hidden top-0 z-50 bg-white pl-[20px] pr-[100px]  py-5 md:flex justify-between items-center">
        <div className="flex items-center  space-x-10">
          <div className="flex space-x-2 items-center">
            <img
              alt="Logo"
              className="mt-1"
              height="75"
              src="https://coopbankoromia.com.et/wp-content/uploads/2020/11/Coopbank-Logo-Ethiopia.svg"
              width="75"
            />
            <span className="text-xl font-semibold">developers</span>
          </div>
          <div className="space-x-4 mt-1">
            <a
              className="text-gray-600 hover:text-gray-800"
              href="https://controlplane-apim-uat.coopbankoromiasc.com/devportal/apis"
            >
              APIs
            </a>
            <a
              className="text-gray-600 hover:text-gray-800"
              href="https://controlplane-apim-uat.coopbankoromiasc.com/devportal/applications"
            >
              Applications
            </a>
            <a href="#partners" className="text-gray-600 hover:text-gray-800">
              Partners
            </a>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          {/* <SearchIcon className="text-gray-600 h-5 w-5" /> */}
          {/* <a className="text-gray-600">Sign up</a> */}
          <a
            className="text-gray-600 border border-gray-200s rounded-md px-4 py-1"
            href="https://controlplane-apim-uat.coopbankoromiasc.com/devportal/services/configs"
          >
            Login / Signup
          </a>
        </div>
      </nav>
      <nav className="flex justify-between items-center  md:hidden  pl-[20px] pr-[20px]  py-5">
        <div className="flex items-center  space-x-10">
          <div className="flex space-x-2 items-center">
            <img
              alt="Logo"
              className="mt-1"
              height="75"
              src="https://coopbankoromia.com.et/wp-content/uploads/2020/11/Coopbank-Logo-Ethiopia.svg"
              width="75"
            />
            <span className="text-xl font-semibold">developers</span>
          </div>
        </div>
        <div className="cursor-pointer z-50">
          {!menuOpen ? (
            <FaBars
              size={23}
              className="cursor-pointer"
              color="#000"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          ) : (
            <TfiClose
              size={23}
              className="cursor-pointer "
              color="#000"
              onClick={() => setMenuOpen(!menuOpen)}
            />
          )}
        </div>
      </nav>
      {menuOpen && (
        <div className="absolute z-30 flex flex-row justify-between top-0 right-0 px-4 py-3 bg-[#fff] w-[35%]">
          <div className="flex flex-col h-screen space-y-[40px] py-[50px] px-[20px]">
            <a
              onClick={() => setMenuOpen(false)}
              className="text-gray-600 hover:text-gray-800 font-sans text-[19px]"
              href="https://controlplane-apim-uat.coopbankoromiasc.com/devportal/apis"
            >
              APIs
            </a>
            <a
              onClick={() => setMenuOpen(false)}
              className="text-gray-600 hover:text-gray-800 font-sans text-[19px]"
              href="https://controlplane-apim-uat.coopbankoromiasc.com/devportal/applications"
            >
              Applications
            </a>
            <a
              href="#partners"
              onClick={() => setMenuOpen(false)}
              className="text-gray-600 hover:text-gray-800 font-sans text-[19px]"
            >
              Partners
            </a>
            <hr />
            <a
              onClick={() => setMenuOpen(false)}
              className="text-gray-600 hover:text-gray-800 font-sans text-[19px]"
              href="https://controlplane-apim-uat.coopbankoromiasc.com/devportal/services/configs"
            >
              Signup
            </a>
            <a
              onClick={() => setMenuOpen(false)}
              className="text-gray-600 hover:text-gray-800 font-sans text-[19px]"
              href="https://controlplane-apim-uat.coopbankoromiasc.com/devportal/services/configs"
            >
              Login
            </a>
          </div>
        </div>
      )}
      {menuOpen && (
        <div className="absolute top-0 w-full h-screen bg-[#000] opacity-30"></div>
      )}
    </>
  );
}

// function SearchIcon(props: any) {
//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <circle cx="11" cy="11" r="8" />
//       <path d="m21 21-4.3-4.3" />
//     </svg>
//   );
// }
