import { useState, useEffect, use } from "react";
import type { AuctionItem } from "../utils/appTypes";
import { AppContext } from "../context/appContext";

const AUCTION_LOTS = "/api/lots";

const useFetch = () => {
  const [auctionItems, setAuctionItems] = useState<AuctionItem[]>([]);
  const { setLoading, setCategories } = use(AppContext);

  useEffect(() => {
    setLoading(true);
    fetch(AUCTION_LOTS)
      .then((res) => {
        return res.json();
      })
      .then((data: AuctionItem[]) => {
        setAuctionItems(data);

        //It's better if has an API for categories
        const categories = new Set(data.map((item) => item.category));
        setCategories(Array.from(categories));
      })
      .catch((err: Error) => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  return [auctionItems];
};

export default useFetch;
