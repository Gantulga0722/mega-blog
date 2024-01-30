import React from "react";
import { postsData } from "@/utils/dummyDataTrend";
import { PostBadge } from "@/components";
import { LeftArrowIcon, RightArrowIcon } from "./icons";
import Image from "next/image";

export const Post = () => {
  return (
    <div className="flex flex-col items-center gap-[32px]">
      <div className="flex flex-col items-start gap-[32px] ">
        <div className="flex flex-col items-start gap-8 self-stretch">
          <div className="w-[184px]">
            <h1 className="text-[#181A2A] font-sans text-[24px] not-italic font-bold leading-7">
              All Blog Post
            </h1>
          </div>
          <div className="flex w-[1216px] items-center gap-[30px]">
            <ul className="flex items-center gap-5">
              <li className="text-[#D4A373] font-sans text-[12px] not-italic font-bold leading-[25px]">
                All
              </li>
              <li className="text-[#495057] font-sans text-[12px] not-italic font-bold leading-[25px]">
                Design
              </li>
              <li className="text-[#495057] font-sans text-[12px] not-italic font-bold leading-[25px]">
                Travel
              </li>
              <li className="text-[#495057] font-sans text-[12px] not-italic font-bold leading-[25px]">
                Fashion
              </li>
              <li className="text-[#495057] font-sans text-[12px] not-italic font-bold leading-[25px]">
                Technology
              </li>
              <li className="text-[#495057] font-sans text-[12px] not-italic font-bold leading-[25px]">
                Branding
              </li>
            </ul>
            <div className="flex-[1_0_0]">
              <p className="text-[#495057] text-right font-sans text-[12px] not-italic font-bold leading-[25px]">
                View All
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-5 flex-wrap"></div>
    </div>
  );
};
