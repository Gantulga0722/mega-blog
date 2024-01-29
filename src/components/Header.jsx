import React from "react";
import { MegaBlogIcon, SearchIcon } from "./icons";

export const Header = () => {
  return (
    <div className="flex w-[1917px] px-[350px] py-[32px] flex-col items-start gap-[10px]">
      <div className="flex items-start gap-[118px]">
        <div className="w-[158px] h-[36px]">
          <MegaBlogIcon />
        </div>
        <div className="flex items-center gap-[21px]">
          <div className="flex w-[667px] justify-center items-center gap-[40px]">
            <ul className="flex gap-10">
              <li className="text-[#3B3C4A] font-sans text-[16px] not-italic font-normal leading-6">
                Home
              </li>
              <li className="text-[#3B3C4A] font-sans text-[16px] not-italic font-normal leading-6">
                Blog
              </li>
              <li className="text-[#3B3C4A] font-sans text-[16px] not-italic font-normal leading-6">
                Contact
              </li>
            </ul>
          </div>
          <div className="flex p-[8px_8px_8px_16px] items-center gap-[12px] rounded-[5px] bg-[#F4F4F5]">
            <div>
              <input
                type="text"
                className="flex-[1_0_0] text-[#A1A1AA] font-sans text-[14px] not-italic font-normal leading-5 bg-[#F4F4F5]"
                placeholder="Search"
              />
            </div>
            <div className="w-[16px] h-[16px] shrink-0">
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
