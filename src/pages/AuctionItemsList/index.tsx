//hooks
import { useCallback, useEffect, useRef, useState } from "react";
import type { AuctionItem } from "../../utils/appTypes";
import AuctionCard from "./AuctionCard";

const itemsPerPage = 20;

function AuctionItemsList({ auctionItems }: { auctionItems: AuctionItem[] }) {
  // State to store the currently displayed items (loaded so far)
  const [displayItems, setDisplayItems] = useState<AuctionItem[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const observer = useRef<IntersectionObserver | null>(null);

  // Ref to prevent double-loading items (avoids repeated calls)
  const loadingRef = useRef(false);

  const loadMoreItems = useCallback(() => {
    if (loadingRef.current || !hasMore) return;

    loadingRef.current = true; // block further loading until done

    const start = displayItems.length;
    const end = start + itemsPerPage;
    const nextItems = auctionItems.slice(start, end);

    setDisplayItems((prev) => [...prev, ...nextItems]);

    if (end >= auctionItems.length) {
      setHasMore(false);
    }

    // small delay before allowing next load (avoids quick repeat triggers)
    setTimeout(() => {
      loadingRef.current = false;
    }, 100);
  }, [displayItems.length, auctionItems, hasMore]);

  const lastItemRef = useCallback(
    (node: HTMLDivElement | null) => {
      if (!hasMore || !node) return;

      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          loadMoreItems();
        }
      });

      observer.current.observe(node);
    },
    [hasMore, loadMoreItems]
  );

  useEffect(() => {
    loadMoreItems();
  }, []);

  return (
    <section className="w-full px-6 py-6 mx-auto">
      <div className="w-fit mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5 overflow-visible">
        {displayItems.map((item: AuctionItem, index: number) => {
          const isLast = index === displayItems.length - 1;
          return (
            <div ref={isLast ? lastItemRef : null} key={item.id}>
              <AuctionCard {...item} />
            </div>
          );
        })}
        {!hasMore && (
          <div className="text-center text-gray-600 col-span-full">
            No more items to load
          </div>
        )}
      </div>
    </section>
  );
}

export default AuctionItemsList;
