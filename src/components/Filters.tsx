const Filters = () => {
  return (
    <form className="max-w-lg mx-auto mt-6">
      <div className="flex flex-col lg:flex-row">
        <select className="max-h-[42px] shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-lg lg:rounded-s-lg lg:rounded-none hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100">
          <option>All categories</option>
          <option>Mockups</option>
          <option>Templates</option>
          <option>Design</option>
          <option>Logos</option>
        </select>
        <div className="relative w-full mt-4 lg:mt-0">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg lg:rounded-e-lg lg:rounded-none border-gray-50 md:border-s-gray-50 border-s-2 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Search by Title/Price..."
            required
          />
        </div>
      </div>
    </form>
  );
};

export default Filters;
