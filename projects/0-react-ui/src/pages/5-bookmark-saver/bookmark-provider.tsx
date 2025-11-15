import { createContext, useContext, useState } from "react";
import type { Bookmark } from "./bookmark-saver";

export const BookmarkContext = createContext<
  | {
      bookmarks: Bookmark[];
      addBookmark: (bookmark: Bookmark) => void;
      deleteBookmark: (id: number) => void;
    }
  | undefined
>(undefined);

import type { ReactNode } from "react";

export const BookmarkProvider = ({ children }: { children: ReactNode }) => {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>([]);

  function addBookmark(bookmark: Bookmark) {
    setBookmarks((list) => [...list, bookmark]);
  }

  function deleteBookmark(id: number) {
    setBookmarks((list) => list?.filter((item) => item.id !== id));
  }

  return (
    <BookmarkContext.Provider
      value={{ bookmarks, addBookmark, deleteBookmark }}
    >
      {children}
    </BookmarkContext.Provider>
  );
};

export const useBookmarkContext = () => {
  return useContext(BookmarkContext);
};
