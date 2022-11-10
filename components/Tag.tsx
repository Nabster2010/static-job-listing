import { classNames } from "../utils/classNames";

type TagProps = {
  title: string;
  className?: string;
  selected?: boolean;
  filterBy: (text: string) => void;
  removeFilter: (text: string) => void;
};

const Tag = ({
  title,
  className = "",
  selected = false,
  filterBy,
  removeFilter,
}: TagProps) => {
  function handleAddFilter(): void {
    if (selected) return;
    filterBy(title);
  }
  return (
    <div className="flex group" onClick={handleAddFilter}>
      <div
        className={classNames(
          "px-2 py-2 text-lg font-bold transition rounded-md  text-DesaturatedDarkCyan bg-LightGrayishCyan  ",
          className,
          selected
            ? "rounded-r-none"
            : " group-hover:bg-DesaturatedDarkCyan group-hover:text-white cursor-pointer "
        )}
      >
        {title}
      </div>
      {selected && (
        <div
          onClick={() => removeFilter(title)}
          className="flex items-center justify-center px-3 transition cursor-pointer group-hover:bg-black bg-DesaturatedDarkCyan rounded-r-md "
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14">
            <path
              fill="#FFF"
              fillRule="evenodd"
              d="M11.314 0l2.121 2.121-4.596 4.596 4.596 4.597-2.121 2.121-4.597-4.596-4.596 4.596L0 11.314l4.596-4.597L0 2.121 2.121 0l4.596 4.596L11.314 0z"
            />
          </svg>
        </div>
      )}
    </div>
  );
};
export default Tag;
