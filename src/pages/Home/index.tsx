import { NavLink } from "react-router";

const imageUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQc_qknxXma1C2XPxuwXCvcMiw4RtRogF_iXA&s";

const Home = () => {
  const image = (
    <img
      loading="lazy"
      src={imageUrl}
      alt=""
      className="h-full w-full object-cover object-center"
    />
  );

  return (
    <div className="relative overflow-hidden my-10 md:my-20 lg:my-30 h-full">
      <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="font text-4xl lg:text-6xl font-bold tracking-tight text-gray-900">
              Personalised picks to help you find your next treasure.
            </h1>
            <p className="mt-4 text-lg lg:text-xl text-gray-500">
              Browse over 320 special objects :D
            </p>
          </div>
          <div className="lg:max-w-lg lg:mt-10">
            <div
              aria-hidden="true"
              className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
            >
              <div className="absolute mt-16 lg:mt-0 transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                <div className="flex items-center space-x-6 lg:space-x-8">
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                      {image}
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      {image}
                    </div>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      {image}
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      {image}
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      {image}
                    </div>
                  </div>
                  <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      {image}
                    </div>
                    <div className="h-64 w-44 overflow-hidden rounded-lg">
                      {image}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <NavLink
              to="/items"
              className="inline-block rounded-md border-indigo-700 text-indigo-600 py-3 px-8 text-center font-medium hover:bg-gray-200"
            >
              FIND YOUR NEXT TREASURE
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
