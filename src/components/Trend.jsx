import React from "react";
import { trendData } from "@/utils/dummyDataTrend";
import { TrendBadge } from "@/components";
import Image from "next/image";

export const Trend = (props) => {
  return (
    <div className="flex w-[1231px] flex-col items-start gap-[30px]">
      <div className="w-[184px]">
        <p className="text-[#181A2A] font-sans text-[24px] not-italic font-bold leading-7">
          Trending
        </p>
      </div>
      <div className="flex items-start gap-5">
        {props.trendData.map((trend) => (
          <div
            style={{
              backgroundImage: `url(${trend.cover_image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            className="w-[289px] h-[320px] shrink-0 rounded-[12px] bg-cover bg-no-repeat relative"
          >
            <div className="flex w-[230px] h-[120px] flex-col items-start gap-4 absolute left-[28.5px] bottom-[28px]">
              <div className="flex flex-col items-start gap-4 self-stretch">
                <div>
                  <TrendBadge text={trend.tag_list[0]} />
                </div>
                <div className="w-[230px] h-[76px] shrink-0">
                  <p className="text-[#FFF] font-sans text-[18px] font-semibold leading-7">
                    {trend.title}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
