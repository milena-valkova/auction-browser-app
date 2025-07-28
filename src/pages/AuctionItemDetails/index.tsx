import { useLocation } from "react-router";
import { ItemStatus } from "../../utils/appTypes";
import {
  formatDate,
  statusColor,
  textForEnd,
} from "../../utils/commonFunctions";

const AuctionItemDetails = () => {
  const location = useLocation();
  const item = location.state;
  const {
    id,
    title,
    description,
    category,
    estimatedValue,
    imageUrl,
    auctionHouse,
    endDate,
    status,
  } = item;

  return (
    <div className="flex flex-col min-h-3/4 md:flex-row items-center justify-center overflow-hidden max-w-7xl mx-auto my-6">
      <div className="flex flex-col md:flex-row items-center justify-center bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-100 mx-auto my-6">
        {/* Left Side - Text Content */}
        <div className="p-10 md:w-1/2 bg-white z-10 flex flex-col">
          <div
            className={`p-4 mb-4 text-lg ${statusColor(
              status
            )} text-white rounded-lg  font-medium text-center mb-4 lg:mb-20 flex justify-between`}
          >
            <div>
              <small className="mr-2">Status:</small>
              {status.toUpperCase()}
            </div>
            <div>
              <small className="mr-2">{textForEnd(status)}:</small>
              {formatDate(endDate)}
            </div>
          </div>
          <p className="text-md uppercase text-indigo-500 mb-2">
            <span className="text-gray-400 mr-2">category:</span>
            <span className="font-bold underline">{category}</span>
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-600 leading-snug">
            {title}
          </h1>
          <p className="mt-6 text-gray-700 text-base">{description}</p>

          <p className="bg-gray-100 text-gray-700 py-2 px-4 rounded-md font-bold mt-10">
            <small className="mr-2">Auction House:</small>
            {auctionHouse}
          </p>
          {status !== ItemStatus.ended && (
            <div className="flex flex-col mt-10">
              <hr className="text-gray-100 mb-6" />
              <span className="text-gray-400">
                * Place a bit is only for registered users
              </span>
              <div className="flex justify-center items-center gap-3">
                <input
                  id="bid"
                  type="text"
                  id="bid"
                  className="bg-gray-50 disabled:text-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                  disabled
                  placeholder="Bit Price"
                  value={`${estimatedValue} kr`}
                />
                <button
                  type="submit"
                  disabled
                  className="text-indigo-600 disabled:text-indigo-300 font-medium rounded-lg text-sm w-full min-w-20 px-5 py-2.5 text-center"
                >
                  Place a Bit
                </button>
                <div>
                  <svg
                    width="52"
                    height="52"
                    viewBox="0 0 52 52"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      width="52"
                      height="52"
                      rx="26"
                      fill="oklch(63.7% 0.237 25.331)"
                      fillOpacity="0.1"
                    ></rect>
                    <path
                      d="M25.9996 33.5451C9.33328 24.3334 20.9999 14.3334 25.9996 20.6567C30.9999 14.3334 42.6666 24.3334 25.9996 33.5451Z"
                      stroke="oklch(63.7% 0.237 25.331)"
                      strokeWidth="1.5"
                    ></path>
                  </svg>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Side - Image */}
        <div className="md:w-1/2 p-6 flex justify-center bg-gray-50 z-10">
          <img
            loading="lazy"
            src={imageUrl}
            alt={`Product-${id}`}
            className="max-w-full h-auto rounded-md"
          />
        </div>
      </div>
      {/* Green background stripe */}
      <div
        className={`absolute bottom-0 w-full h-10 ${statusColor(status)} z-0`}
      />
    </div>
  );
};

export default AuctionItemDetails;
