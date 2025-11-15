import type { Bookmark } from "./bookmark-saver";

const BookmarkItem = ({ item }: { item: Bookmark }) => {
  return (
    <li className="flex justify-between items-center px-4 py-2 bg-slate-100 rounded-md">
      <span className="text-sm text-green-500">{item.name}</span>
      <button className="text-white text-sm rounded-lg bg-red-400 px-2 py-1 hover:bg-red-500 duration-300 cursor-pointer">
        Remove
      </button>
    </li>
  );
};

export default BookmarkItem;
