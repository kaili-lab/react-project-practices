import { useState } from "react";
import type { Bookmark } from "./bookmark-saver";
import { useBookmarkContext } from "./bookmark-provider";

const BookmarkForm = () => {
  const [bookmark, setBookmark] = useState<Bookmark>({
    id: 0,
    name: "",
    url: "",
  });
  const context = useBookmarkContext();
  const addBookmark = context?.addBookmark;

  interface HandleAddBookmark {
    (e: React.FormEvent<HTMLFormElement>): void;
  }

  const handleAddBookmark: HandleAddBookmark = (e) => {
    e.preventDefault();
    console.log("add bookmark");
    console.log("form: ", addBookmark);
    if (addBookmark) {
      addBookmark({
        id: new Date().getTime(),
        name: bookmark.name,
        url: bookmark.url,
      });
    }
  };

  // TODO 防抖
  // todo 校验URL
  return (
    <form className="p-4 space-y-3" onSubmit={(e) => handleAddBookmark(e)}>
      <input hidden value={bookmark.id} />
      <input
        type="text"
        className="p-2 w-full border border-gray-400 rounded-md text-sm focus:outline-none"
        placeholder="Bookmark Name"
        value={bookmark.name}
        onChange={(e) => setBookmark({ ...bookmark, name: e.target.value })}
      />
      <input
        type="text"
        className="p-2 w-full border border-gray-400 rounded-md text-sm focus:outline-none"
        placeholder="Bookmark URL"
        value={bookmark.url}
        onChange={(e) => setBookmark({ ...bookmark, url: e.target.value })}
      />
      <button className="bg-green-500 w-full text-sm py-2 rounded-lg text-white hover:bg-green-600 duration-300">
        Add Bookmark
      </button>
    </form>
  );
};

export default BookmarkForm;
