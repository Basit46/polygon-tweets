import React from "react";

const Tweet = ({ tweet }) => {
  return (
    <div className="w-[438.98px] h-56 bg-white rounded-xl border border-zinc-100 flex flex-col shadow-lg">
      <div className="h-[4.28rem] flex items-center gap-[0.85rem] px-[1.46rem] py-[0.89rem]">
        <div className="w-[2.3rem] h-[2.3rem] rounded-full bg-gray-500"></div>
        <div>
          <h1 className="text-neutral-800 text-sm font-medium">Tibo</h1>
          <p className="text-neutral-400 text-xs font-normal">@tibo_maker</p>
        </div>
      </div>

      <div className="flex-1 overflow-y-scroll border-y-[2px] border-zinc-100 px-[1.46rem] py-[0.8rem]">
        <p className="text-neutral-600 text-[15.03px] font-semibold">
          {tweet.message.content}
        </p>
      </div>

      <div className="h-[3.9rem] flex items-center justify-center gap-[0.56rem]">
        <button className="pl-[21.05px] pr-[20.30px] pt-[6.77px] pb-[6.76px] bg-stone-300 rounded-md border text-neutral-400 text-[9.02px] font-medium">
          Post now
        </button>
        <button className="pl-[21.05px] pr-[20.30px] pt-[6.77px] pb-[6.76px] bg-stone-300 rounded-md border text-neutral-400 text-[9.02px] font-medium">
          Schedule
        </button>
      </div>
    </div>
  );
};

export default Tweet;
