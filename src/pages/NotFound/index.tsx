import { NavLink } from "react-router";

const NotFound = () => {
  return (
    <section className="flex flex-col gap-6 max-w-md text-center mx-auto my-10">
      <h2 className="font-extrabold text-5xl lg:text-7xl text-indigo-600">
        <span className="sr-only">Error</span>404
      </h2>
      <p className="text-2xl lg:text-3xl">Sorry, we couldn't find this page.</p>
      <NavLink
        to="/"
        className="p-4 lg:px-8 lg:py-4 text-xl font-semibold rounded bg-gray-100"
      >
        Back to home
      </NavLink>
    </section>
  );
};

export default NotFound;
