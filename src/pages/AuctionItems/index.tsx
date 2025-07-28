import { useEffect, useState } from "react";
import Filters from "../../components/Filters";
import useFetch from "../../hooks/useFetch";
import AuctionList from "./AuctionList";

function AuctionItems() {
  const [auctionItems] = useFetch();
  const [filteredItems, setFilteredItems] = useState(auctionItems);

  useEffect(() => {
    setFilteredItems(auctionItems);
  }, [auctionItems]);

  return (
    <div className="ease-soft-in-out relative w-full h-full max-w-screen max-h-screen rounded-xl transition-all duration-200">
      {auctionItems.length && (
        <Filters
          setFilteredItems={setFilteredItems}
          auctionItems={auctionItems}
        />
      )}
      {filteredItems.length > 0 ? (
        <AuctionList auctionItems={filteredItems} />
      ) : (
        <p className="text-gray-500 px-4 py-6">No items match your filters.</p>
      )}
    </div>
  );
}

export default AuctionItems;
