import leisure from "../assets/leisure.png";

export default function Topics() {
  return (
    <div className="flex items-center justify-between my-3">
      <div className="flex items-center gap-x-2">
        <img
          src={leisure}
          alt="leisure"
          className="rounded-lg"
        />
        <h4> Leisure</h4>
      </div>
      <button className="bg-black text-white px-3 py-1 rounded-[14px] text-[12px]">
      Followed
      </button>
    </div>
  );
}