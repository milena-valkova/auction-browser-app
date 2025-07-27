export enum ItemStatus {
  upcoming = "upcoming",
  live = "live",
  ended = "ended",
}

export interface AuctionItem {
  id: number;
  title: string;
  description: string;
  category: string;
  estimatedValue: number;
  imageUrl: string;
  auctionHouse: string;
  endDate: string;
  status: ItemStatus;
}
