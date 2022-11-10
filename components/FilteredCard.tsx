import { classNames } from "../utils/classNames";
import Tag from "./Tag";

type FilteredCardProps = {
  className?: string;
  filters: string[];
  filterBy: (text: string) => void;
  removeFilter: (text: string) => void;
  clearFilters: () => void;
};

const FilteredCard = ({
  className,
  filters,
  filterBy,
  clearFilters,
  removeFilter,
}: FilteredCardProps) => {
  if (filters.length <= 0) return null;
  return (
    <div
      className={classNames(
        " w-full max-w-5xl p-6 flex items-center gap-6  bg-white rounded-lg shadow-lg ",
        className
      )}
    >
      <div className="flex flex-row flex-wrap items-center flex-1 gap-4">
        {filters.map((filter, indx) => (
          <Tag
            key={indx}
            filterBy={filterBy}
            removeFilter={removeFilter}
            title={filter}
            selected
          />
        ))}
      </div>
      <button
        onClick={clearFilters}
        className="text-lg transition text-DarkGrayishCyan hover:text-DesaturatedDarkCyan hover:underline"
      >
        clear
      </button>
    </div>
  );
};

export default FilteredCard;
