import Image from "next/image";

const Avatar = ({ src = "/images/no-image.png" }) => {
  return (
    <div className="w-[70px] h-[70px] rounded-full overflow-hidden">
      <Image width={70} height={70} src={src} alt="avatar" />
    </div>
  );
};

export default Avatar;
