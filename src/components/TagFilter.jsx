import { useRouter } from "next/router";
import Link from "next/link";

const titles = ["All", "Design", "Travel", "Fashion", "Technology", "Branding"];
export const TagFilter = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-start gap-[32px] ">
      <div className="flex flex-col items-start gap-8 self-stretch">
        <div className="w-[184px]">
          <h1 className="text-[#181A2A] font-sans text-[24px] not-italic font-bold leading-7">
            All Blog Post
          </h1>
        </div>
        <div className="flex w-[1216px] items-center gap-[30px]">
          {titles.map((tag) => (
            <Link href={`/blog/${tag.toLowerCase()}`}>
              <ul className="flex items-center gap-5">
                <li className="text-[#495057] font-sans text-[12px] not-italic font-bold leading-[25px] hover:text-[#D4A373]">
                  {tag}
                </li>
              </ul>
            </Link>
          ))}
          <div className="flex-[1_0_0]">
            <p
              className="text-[#495057] text-right font-sans text-[12px] not-italic font-bold leading-[25px] hover:text-[#D4A373]"
              onClick={() => router.push("/blog")}
            >
              View All
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
