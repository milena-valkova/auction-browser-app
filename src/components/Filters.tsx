import {
  use,
  useEffect,
  useState,
  type ChangeEvent,
  type Dispatch,
  type SetStateAction,
} from "react";
import { AppContext } from "../context/appContext";
import { capitalizeFirstLetter } from "../utils/commonFunctions";
import type { AuctionItem } from "../utils/appTypes";

interface FilterProps {
  setFilteredItems: Dispatch<SetStateAction<AuctionItem[]>>;
  auctionItems: AuctionItem[];
}

const defaultFilter = "all";

const Filters = ({ setFilteredItems, auctionItems }: FilterProps) => {
  const { categories } = use(AppContext);
  const [category, setCategory] = useState<string>(defaultFilter);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      applyFilters(category, searchTerm);
    }, 300); // debounce for 300ms

    return () => clearTimeout(delayDebounce);
  }, [searchTerm]);

  const applyFilters = (newCategory: string, newSearchTerm: string) => {
    const filtered = auctionItems.filter((item) => {
      const matchCategory =
        newCategory === defaultFilter || item.category === newCategory;

      const matchSearch =
        item.title.toLowerCase().includes(newSearchTerm.toLowerCase()) ||
        item.estimatedValue.toString().includes(newSearchTerm.toLowerCase());

      return matchCategory && matchSearch;
    });

    setFilteredItems(filtered);
  };

  const handleCategoryFilter = (e: ChangeEvent<HTMLSelectElement>) => {
    const newCategory = e.target.value;
    setCategory(newCategory);
    applyFilters(newCategory, searchTerm);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const newSearchTerm = e.target.value;
    setSearchTerm(newSearchTerm);
  };

  return (
    <div className="max-w-lg mx-auto mt-6">
      <div className="flex flex-col lg:flex-row">
        <select
          defaultValue={defaultFilter}
          onChange={handleCategoryFilter}
          className="max-h-[42px] shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-gray-300 rounded-lg lg:rounded-s-lg lg:rounded-none hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100"
        >
          <option value={defaultFilter}>All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {capitalizeFirstLetter(category)}
            </option>
          ))}
        </select>
        <div className="relative w-full mt-4 lg:mt-0">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-lg lg:rounded-e-lg lg:rounded-none border-gray-50 md:border-s-gray-50 border-s-2 border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Search by Title/Price..."
            onChange={handleSearch}
          />
        </div>
      </div>
    </div>
  );
};

export default Filters;
