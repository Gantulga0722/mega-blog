import React from "react";
import { highlightData } from "@/utils/dummyDataHL";
import { HlBadge } from "@/components";
import { LeftArrowIcon, RightArrowIcon } from "./icons";
import Image from "next/image";

export const Highlight = (props) => {
  return (
    <div className="flex flex-col gap-[11px]">
      {props.hlData.map((highL) => (
        <div
          style={{
            backgroundImage: `url(${highL.cover_image})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
          className="w-[1216px] h-[600px] shrink-0 rounded-[12px] relative"
        >
          <div className="flex w-[598px] p-[40px] flex-col items-start gap-6 rounded-[12px] border-[#E8E8EA] bg-[#FFF] shadow-[0px_12px_24px_-6px rgba(24,26,42,0.12)] absolute left-[11px] bottom-[13px]">
            <div className="flex flex-col items-start gap-4 self-stretch">
              <div>
                <HlBadge text={highL.tag_list[0]} />
              </div>
              <div>
                <p className="self-stretch text-[#181A2] font-sans text-[36px] font-semibold leading-10">
                  {highL.title}
                </p>
              </div>
            </div>
            <div>
              <p className="text-[#97989F] font-sans text-[16px] not-italic font-normal leading-6">
                {Date(highL.published_atnew).toLocaleString()}
              </p>
            </div>
          </div>
        </div>
      ))}
      <div className="flex justify-end items-center gap-[9px]">
        <div className="flex w-[40px] h-[40px] rounded-[6px] border border-[#696A75] justify-center items-center">
          <a href="">
            <LeftArrowIcon />
          </a>
        </div>
        <div className="flex w-[40px] h-[40px] rounded-[6px] border border-[#696A75] justify-center items-center">
          <a href="">
            <RightArrowIcon />
          </a>
        </div>
      </div>
    </div>
  );
};
