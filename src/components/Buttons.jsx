export function HlBadge({ text }) {
  return (
    <div className="flex px-[10px] py-[4px] justify-center items-center rounded-[6px] bg-[#4B6BFB]">
      <button className="text-[#FFF] font-sans text-[14px] not-italic font-medium leading-5">
        {text}
      </button>
    </div>
  );
}
export function TrendBadge({ text }) {
  return (
    <div className="flex px-[10px] py-[4px] justify-center items-center rounded-[6px] bg-[#4B6BFB]">
      <button className="text-[#FFF] font-sans text-[12px] not-italic font-medium leading-5">
        {text}
      </button>
    </div>
  );
}
export function PostBadge({ text }) {
  return (
    <div className="flex px-[10px] py-[4px] justify-center items-center rounded-[6px] bg-[rgba(75,107,251,0.05)]">
      <button className="text-[#4B6BFB] font-sans text-[14px] not-italic font-medium leading-5">
        {text}
      </button>
    </div>
  );
}
