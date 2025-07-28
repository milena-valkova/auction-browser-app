import Filters from "../../components/Filters";
import useFetch from "../../hooks/useFetch";
import AuctionList from "./AuctionList";

function AuctionItems() {
  const [auctionItems] = useFetch();

  return (
    <div className="ease-soft-in-out relative w-full h-full max-w-screen max-h-screen rounded-xl transition-all duration-200">
      <Filters />
      {auctionItems.length && <AuctionList auctionItems={auctionItems} />}
    </div>
  );
}

export default AuctionItems;
