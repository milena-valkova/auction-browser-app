import { NavLink, useLocation } from "react-router";
import { capitalizeFirstLetter } from "../utils/commonFunctions";
import { useMemo } from "react";

const Breadcrumbs = () => {
  const location = useLocation();
  const allPaths = useMemo(
    () => location.pathname.slice(1).split("/"),
    [location.pathname]
  );

  return (
    <nav className="mt-16 w-full">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <NavLink
            to="/"
            end
            className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-indigo-600"
          >
            <svg
              className="w-3 h-3 me-2.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
            </svg>
            Home
          </NavLink>
        </li>
        {allPaths.map((path: string, index: number) => (
          <li key={path}>
            <div className="flex items-center">
              <span className="text-gray-400 mx-1 text-bold">/</span>
              <NavLink
                to={index === 0 ? `/${path}` : location.pathname}
                className="ms-1 text-sm font-medium text-gray-700 hover:text-indigo-600 md:ms-2"
              >
                {capitalizeFirstLetter(path)}
              </NavLink>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
