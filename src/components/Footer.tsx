export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] py-4">
      <div className="container px-[20px] flex flex-col items-center justify-between md:flex-row">
        <div className="flex items-center space-x-2 mb-4 md:mb-0">
          <img
            alt="Logo"
            className="mt-1"
            height="75"
            src="https://coopbankoromia.com.et/wp-content/uploads/2020/11/Coopbank-Logo-Ethiopia.svg"
            width="75"
          />
        </div>
        {/* <nav className="flex flex-wrap justify-center space-x-4 text-sm text-gray-400">
          <a className="hover:text-white cursor-pointer">Terms of Use</a>
          <a className="hover:text-white cursor-pointer">Privacy Notice</a>
          <a className="hover:text-white cursor-pointer">Support</a>
          <a className="hover:text-white cursor-pointer">Status</a>
          <a className="hover:text-white cursor-pointer">Forum</a>
        </nav> */}
        <div className="text-gray-400 text-sm mt-4 md:mt-0">
          © 2023. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
