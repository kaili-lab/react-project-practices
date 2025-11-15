import BookmarkItem from "./bookmark-item";
import type { Bookmark } from "./bookmark-saver";

const BookmarkList = ({ list }: { list: Bookmark[] }) => {
  return (
    <ul className="space-y-2 px-4">
      {list.map((item) => (
        <BookmarkItem item={item} />
      ))}
    </ul>
  );
};

export default BookmarkList;
