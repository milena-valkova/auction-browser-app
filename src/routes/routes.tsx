import { createBrowserRouter } from "react-router";
import App from "../App";
import AuctionItems from "../pages/AuctionItems";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import AuctionItemDetails from "../pages/AuctionItemDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      { index: true, Component: Home },
      {
        path: "items",
        children: [
          { index: true, Component: AuctionItems },
          { path: ":itemId", Component: AuctionItemDetails },
        ],
      },
      { path: "*", Component: NotFound },
    ],
  },
]);
