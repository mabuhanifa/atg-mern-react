import { AiFillLike, AiOutlineInfoCircle } from "react-icons/ai";
import { HiPencil } from "react-icons/hi";
import { MdOutlineLocationOn } from "react-icons/md";
import activism from "../assets/activism.png";
import leisure from "../assets/leisure.png";
import mba from "../assets/mba.png";
import philosophy from "../assets/philosophy.png";
import Topics from "./Topics";

const topics = [
  {
    title: "Leisure",
    img: leisure,
    followed: true,
  },
  {
    title: "Activism",
    img: activism,
    followed: false,
  },
  {
    title: "MBA",
    img: mba,
    followed: false,
  },
  {
    title: "Philosophy",
    img: philosophy,
    followed: false,
  },
];

export default function Posts() {
  return (
    <div>
      <div className="flex items-center justify-between gap-2 w-[243px] border-b">
        <div className="flex gap-2 items-center py-2 ">
          <MdOutlineLocationOn size={16} />
          <input
            type="text"
            placeholder="Noida, India"
            className="placeholder-black outline-0"
          />
        </div>
        <HiPencil size={16} />
      </div>
      <div className="flex items-start gap-x-2 text-[12px] text-[#9CA3AF] mt-8">
        <span>
          <AiOutlineInfoCircle size={14} className="mt-1" />
        </span>
        <div>
          Your location will help us serve better <br />
          and extend a personalised experience.
        </div>
      </div>

      <div className="flex items-center gap-x-2 mt-10 mb-5">
        <span>
          <AiFillLike />
        </span>
        <p>RECOMMENDED GROUPS</p>
      </div>
      <div className="flex flex-col mt-8">
        {topics.map((topic) => (
          <Topics topic={topic} key={topic.title} />
        ))}
      </div>
      <div>
        <div className="flex justify-end mt-10">
          <button className="text-[#2F6CE5] text-[12px]">See More...</button>
        </div>
      </div>
    </div>
  );
}
