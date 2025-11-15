import { Link } from "react-router-dom";
import { ChevronRight } from "lucide-react";
import type { RouteLink } from "..";

const LinkCard = ({ page, index }: { page: RouteLink; index: number }) => {
  return (
    <Link
      key={page.path}
      to={page.path}
      className="group bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-200 border border-gray-200 hover:border-blue-300 p-6"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="bg-blue-100 text-blue-600 rounded-lg p-2 group-hover:bg-blue-200 transition-colors">
          <span className="text-sm font-medium">#{index + 1}</span>
        </div>
        <ChevronRight className="group-hover:text-blue-500 transition-colors" />
      </div>

      <h3 className="text-lg font-semibold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors">
        {page.name}
      </h3>

      <p className="text-gray-600 text-sm leading-relaxed">
        {page.description}
      </p>
    </Link>
  );
};

export default LinkCard;
