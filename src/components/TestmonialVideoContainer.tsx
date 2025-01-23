// <div>
//   <Image
//     src="/testmonialThumbnail.png"
//     width={50}
//     height={50}
//     alt="testmonial"
//   />
// </div>
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

type Testimonial = {
  id: number;
  witness: string;
  role: string;
  location: string;
  profileImage: string;
  video?: string;
  thumbnail: string;
};
type Props = {
  testimony: Testimonial;
};

export default function TestmonialVideoContainer({ testimony }: Props) {
  return (
    <div className="w-[332.8px] h-auto p-5 border-[1px] rounded-lg border-[#E4E7EC]">
      <div className="relative w-full h-32 mb-4">
        {/* Thumbnail */}
        <div className="relative w-full h-full bg-gray-100 rounded-lg overflow-hidden">
          <Image
            src={testimony.thumbnail}
            alt="Challenge banner"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />

          {/* Play Icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <FaPlay className="text-white text-4xl" />
          </div>
        </div>
      </div>

      {/* Challenge Details */}
      <div className="flex items-center gap-4">
        <Image
          src={testimony.profileImage}
          width={40}
          height={50}
          alt="profile"
          className="rounded-full"
        />

        <div className="mb-4">
          <h2 className="text-sm font-medium mb-1">
            {testimony.witness}
            <span className="text-sm text-gray-800 font-[400] inline-block truncate w-full overflow-hidden whitespace-nowrap align-middle">
              {testimony.role}
            </span>
          </h2>
        </div>
      </div>
    </div>
  );
}
