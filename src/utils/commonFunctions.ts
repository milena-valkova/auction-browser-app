import { ItemStatus } from "./appTypes";

export function formatPrice(amount: number): string {
  return new Intl.NumberFormat("sv-SE", {
    style: "currency",
    currency: "SEK",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
}

export function formatDate(
  dateInput: Date | string,
  locale: string = "sv-SE",
  options: Intl.DateTimeFormatOptions = {
    // year: "numeric",
    month: "long",
    day: "numeric",
  }
): string {
  const date = typeof dateInput === "string" ? new Date(dateInput) : dateInput;
  return new Intl.DateTimeFormat(locale, options).format(date);
}

export function capitalizeFirstLetter(value: string) {
  return String(value).charAt(0).toUpperCase() + String(value).slice(1);
}

export function statusColor(status: string) {
  switch (status) {
    case ItemStatus.live:
      return "bg-emerald-400";
    case ItemStatus.upcoming:
      return "bg-amber-400";
    case ItemStatus.ended:
      return "bg-red-400";
    default:
      return "bg-indigo-500";
  }
}

export const textForEnd = (status: string) => {
  switch (status) {
    case ItemStatus.ended:
      return "Ended";
    default:
      return "End";
  }
};
