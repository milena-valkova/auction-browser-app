import { useState, useEffect, use } from "react";
import type { AuctionItem } from "../utils/appTypes";
import { AppContext } from "../context/appContext";

const AUCTION_LOTS = "/api/lots";

const useFetch = () => {
  const [auctionItems, setAuctionItems] = useState<AuctionItem[]>([]);
  const { setLoading } = use(AppContext);

  useEffect(() => {
    setLoading(true);
    fetch(AUCTION_LOTS)
      .then((res) => {
        return res.json();
      })
      .then((data: AuctionItem[]) => setAuctionItems(data))
      .catch((err: Error) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return [auctionItems];
};

export default useFetch;
