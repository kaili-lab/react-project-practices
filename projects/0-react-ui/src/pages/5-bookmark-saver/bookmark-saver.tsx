import BookmarkList from "./bookmark-list";
import BookmarkForm from "./bookmark-form";
import { BookmarkProvider, useBookmarkContext } from "./bookmark-provider";

export interface Bookmark {
  id: number;
  name: string;
  url: string;
}

const BookmarkSaver = () => {
  const context = useBookmarkContext();
  const bookmarks = context?.bookmarks ?? [];
  console.log("saver: ", bookmarks);
  // const list: Bookmark[] = [
  //   { id: 1, name: "QQ", url: "www.qq.com" },
  //   { id: 2, name: "baidu", url: "www.baidu.com" },
  //   { id: 3, name: "google", url: "www.google.com" },
  // ];
  return (
    <div className=" bg-emerald-50 flex flex-col gap-4 p-4 justify-center items-center w-full">
      <div className="bg-white rounded-lg p-4 shadow-md w-md h-96">
        <h1 className="text-3xl text-green-500 font-bold text-center">
          Bookmark Saver
        </h1>
        <BookmarkProvider>
          <BookmarkForm />
          <BookmarkList list={bookmarks ?? []} />
        </BookmarkProvider>
      </div>
    </div>
  );
};

export default BookmarkSaver;
