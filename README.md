# 🖼️ Auction Viewer App

A responsive auction listing web app built with **Vite + React + TypeScript + Tailwind CSS**.  
It loads and displays auction items from provided JSON data and allows users to **search**, **filter**, and **browse item details**.

---

## 🚀 Getting Started

### 1. Clone the repo:

```bash
git clone https://github.com/milena-valkova/auction-browser-app.git
cd auction-browser-app
```

### 2. Install dependencies:

```bash
npm install
```

### 3. Start the development server::

```bash
npm run dev
```

The app will be available at: http://localhost:5173

## 🚀 Pages Overview

### 1. Home Page

Simple welcome screen

Redirects to the item list page

### 2. Item List

Displays all auction items in a responsive grid

Supports infinite scroll/pagination

### 3. Search & Filters

Search by title or estimated price

Filter by category

Combined filter logic (search + category work together)

### 4. Item Cards

Compact cards show:

Item image

Title

Estimated price

Basic details

### 5. Item Detail View

Dedicated page for selected item

Shows full info like:

Title

Image

Description

Estimated value

Category

---

## 🔍 Functionality

✅ Search items by title or price

✅ Filter by category

✅ Combined search & filter

✅ Responsive layout (mobile to desktop)

✅ Navigation between components and detail views

✅ Uses provided JSON data (320 items)

✅ BONUS: Added IntersectionObserver to load items on scroll

---

## 🧱 Tech Stack

⚛️ React + TypeScript

🧩 Vite for fast development

🎨 Tailwind CSS for styling

🎯 State management with React Hooks (useState, useEffect, useContext)

🧠 Clean, modular component structure

---

📁 Project Structure (Simplified)

```bash

src/
├── components/        # UI components (Filters, AuctionCard, etc.)
├── pages/             # Route pages (Home, ItemList, ItemDetail)
├── context/           # pp context files
├── hooks/             # Custom hooks (e.g., data fetch)
├── utils/             # Helpers functions and type definitions
├── assets/            # Images, icons, styles
├── App.tsx
├── main.tsx
```

---

## 📸 Screenshots

### 1. Home Page

![Item List](https://github.com/milena-valkova/auction-browser-app/blob/main/public/screenshots/home_page.png)

### 2. Item List

![Item List](https://github.com/milena-valkova/auction-browser-app/blob/main/public/screenshots/list_items.png)

### 3. Search & Filters

![Item List](https://github.com/milena-valkova/auction-browser-app/blob/main/public/screenshots/filtering.png)

### 4. Item Detail View

![Item List](https://github.com/milena-valkova/auction-browser-app/blob/main/public/screenshots/item_details.png)
