import React from "react";
import { PostBadge } from "@/components";

export const Post = (props) => {
  return (
    <div className="flex flex-col items-center gap-[32px] w-[1231px]">
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
      <div className="flex items-start gap-5 flex-wrap">
        {props.postData.map((post) => (
          <div className="flex w-[392px] p-4 flex-col justify-center items-center gap-4 rounded-[12px] border border-[#E8E8EA] bg-[#FFF]">
            <div
              className="w-[360px] h-[240px] rounded-[6px]"
              style={{
                backgroundImage: `url(${post.cover_image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="flex p-2 flex-col items-start gap-5 self-stretch">
              <div className="flex flex-col items-start gap-4 self-stretch">
                <div className="flex flex-col items-start gap-4 self-stretch">
                  <div>
                    <PostBadge text={post.tag_list[0]} />
                  </div>
                  <div className="self-stretch">
                    <p className="text-[#181A2A] font-sans text-[24px] not-italic font-semibold leading-7">
                      {post.title}
                    </p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-[#97989F] font-sans text-[16px] not-italic font-normal leading-6">
                  {post.published_at}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
