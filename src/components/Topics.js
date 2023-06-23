import { useState } from "react";
export default function Topics({ topic }) {
  const [follow, setFollow] = useState(topic.followed);
  return (
    <div className="flex items-center justify-between my-3">
      <div className="flex items-center gap-x-2">
        <img src={topic.img} alt={topic.title} className="rounded-lg" />
        <h4> {topic.title}</h4>
      </div>
      {follow ? (
        <button
          className="bg-[#EDEEF0] text-black px-5 py-1 rounded-[14px] text-[12px]"
          onClick={() => setFollow(false)}
        >
          Follow
        </button>
      ) : (
        <button
          className="bg-black text-white px-3 py-1 rounded-[14px] text-[12px]"
          onClick={() => setFollow(true)}
        >
          Followed
        </button>
      )}
    </div>
  );
}
