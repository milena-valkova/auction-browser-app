import { useMemo } from "react";
import { ItemStatus, type AuctionItem } from "../../utils/appTypes";
import {
  formatDate,
  formatPrice,
  statusColor,
  textForEnd,
} from "../../utils/commonFunctions";
import { generatePath, Link } from "react-router";

const AuctionCard = ({ item }: { item: AuctionItem }) => {
  const { id, title, category, estimatedValue, imageUrl, endDate, status } =
    item;

  const hoverTextColor = useMemo(() => {
    switch (status) {
      case ItemStatus.live:
        return "group-hover:text-emerald-500 group-hover:border-emerald-500";
      case ItemStatus.upcoming:
        return "group-hover:text-amber-500 group-hover:border-amber-500";
      case ItemStatus.ended:
        return "group-hover:text-red-500 group-hover:border-red-500";
      default:
        return "group-hover:text-indigo-500 group-hover:border-indigo-500";
    }
  }, [status]);

  return (
    <Link
      to={generatePath("/items/:itemId", { itemId: id.toString() })}
      state={item}
      className="group w-72 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl hover:cursor-pointer hover:transform-origin-center"
    >
      <div className="relative">
        <img
          loading="lazy"
          src={imageUrl}
          alt={`Product-${id}`}
          className="h-50 lg:h-80 w-72 object-cover rounded-t-xl"
        />
        <div
          className={`uppercase text-sm absolute top-0 right-0 ${statusColor(
            status
          )} px-4 text-white rounded-full h-8 w-auto flex flex-col items-center justify-center mt-3 mr-3 group-hover:bg-white ${hoverTextColor} transition duration-500 ease-in-out`}
        >
          <small>{status}</small>
        </div>
        <div
          className={`absolute bottom-0 left-0 ${statusColor(
            status
          )} p-2 text-white text-sm group-hover:bg-white ${hoverTextColor} transition duration-500 ease-in-out`}
        >
          {`${textForEnd(status)}: ${formatDate(endDate)}`}
        </div>
      </div>
      <div className="px-4 py-3 w-72 group">
        <span className="text-indigo-600 mr-3 uppercase text-xs font-semibold underline">
          {category}
        </span>
        <p className="text-lg font-bold text-black truncate overflow-hidden whitespace-nowrap group-hover:overflow-visible group-hover:whitespace-normal block capitalize transition-all duration-300 ease-in-out min-h-14">
          {title}
        </p>
        <div className="flex items-center">
          <p className="text-sm text-gray-600 cursor-auto mx-2">
            Estimated Value:
          </p>
          <p className="text-lg font-medium text-black cursor-auto my-3">
            {formatPrice(estimatedValue)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default AuctionCard;
