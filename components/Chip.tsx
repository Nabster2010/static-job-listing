import { classNames } from "../utils/classNames";

const Chip = ({ isFeatured = false, isNew = false }) => {
  return (
    <div
      className={classNames(
        "flex px-3 pt-1 text-base font-bold text-white uppercase transition rounded-full",
        isFeatured && "bg-black ",
        isNew && "bg-DesaturatedDarkCyan"
      )}
    >
      {isFeatured && "Featured"}
      {isNew && "NEW"}
    </div>
  );
};

export default Chip;
