import { TagFilter } from "@/components";
import { PostBadge } from "@/components";
import { LoadMore } from "@/components/Buttons";

const Travel = (props) => {
  return (
    <div className="flex flex-col gap-12 mt-[120px]">
      <TagFilter />
      <div className="flex flex-col">
        <div className="flex flex-col items-center gap-[32px] w-[1231px]">
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
                  <div className="flex gap-5">
                    <div></div>
                    <div>
                      <p className="text-[#97989F] font-sans text-[16px] not-italic font-normal leading-6">
                        {new Date(post.published_at).toDateString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex mt-[100px] mx-auto">
          <LoadMore />
        </div>
      </div>
    </div>
  );
};
export default Travel;

export const getServerSideProps = async (context) => {
  const { query } = context;
  const post = await fetch(
    "https://dev.to/api/articles?tag=travel&per_page=12"
  );
  const postData = await post.json();

  return {
    props: { postData },
  };
};
