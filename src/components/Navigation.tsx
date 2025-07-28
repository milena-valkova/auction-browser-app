import { NavLink } from "react-router";

const Navigation = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 fixed w-full z-20 top-0 start-0 border-b border-gray-200">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <NavLink to="/" end className="flex items-center space-x-3">
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              className="h-8"
              alt="Auction Logo"
            />
            <span className="text-indigo-600 self-center text-2xl font-semibold whitespace-nowrap ">
              Auction House
            </span>
          </NavLink>
          {/* SIGN IN button doesn't have a functionality yet */}
          <div className="flex items-center space-x-6">
            <button
              className="bg-white text-indigo-600 hover:border-indigo-500 rounded-lg text-sm px-4 py-2 focus:outline-none"
              type="button"
            >
              SIGN IN
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
