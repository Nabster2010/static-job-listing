import { classNames } from "../utils/classNames";

const Divider = (props: any) => {
  return (
    <div
      className={classNames(
        "w-full h-px bg-DarkGrayishCyan",
        props?.className && props.className
      )}
    ></div>
  );
};
export default Divider;
