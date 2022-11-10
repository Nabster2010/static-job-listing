import { classNames } from "../utils/classNames";
import { Job } from "../pages/index";
import Avatar from "./Avatar";
import Chip from "./Chip";
import Divider from "./Divider";
import DotDivider from "./DotDivider";
import Tag from "./Tag";

const Card = ({
  data,
  filterBy,
}: {
  data: Job;
  filterBy: (text: string) => void;
}) => {
  return (
    <div
      className={classNames(
        "relative w-full max-w-5xl p-6 md:pt-6 pt-14 md:flex md:flex-row md:justify-between md:items-center",
        "bg-white rounded-lg shadow-lg ",
        data.featured && "featured"
      )}
    >
      <div className="md:flex md:items-center md:gap-6 ">
        <div className="absolute md:static left-6 -top-10">
          <Avatar src={data.logo} />
        </div>
        <div>
          <div className="flex flex-row items-center justify-start gap-4 md:gap-8 ">
            <h1 className="text-lg font-bold text-DesaturatedDarkCyan">
              {data.company}
            </h1>
            <div className="flex flex-row items-center gap-2">
              {data.new && <Chip isNew />}
              {data.featured && <Chip isFeatured />}
              <Chip />
            </div>
          </div>
          <h2 className="mt-4 text-xl font-bold transition cursor-pointer hover:text-DesaturatedDarkCyan">
            {data.position}
          </h2>
          <div className="flex flex-row items-center justify-start mt-4 text-lg text-DarkGrayishCyan">
            <span>{data.postedAt}</span>
            <DotDivider />
            <span>{data.contract}</span>
            <DotDivider />
            <span>{data.location}</span>
          </div>
        </div>
      </div>
      <Divider className="my-4 md:hidden" />

      {/* tags section */}
      <div className="flex flex-wrap items-center justify-start gap-4">
        {[...data.languages, ...data.tools].map((item) => (
          <Tag key={item} title={item} filterBy={filterBy} />
        ))}
      </div>
    </div>
  );
};

export default Card;
