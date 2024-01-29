import React from "react";
import { Header, Highlight, Trend } from "@/components";

export default function blog() {
  return (
    <div className="flex flex-col items-center gap-[100px] mx-auto justify-center">
      <Header />
      <Highlight />
      <Trend />
    </div>
  );
}

// export const getStaticProps = async (context) => {
//   const result = await fetch("https://dev.to/api/articles?top=15&per_page=15");
//   const data = await result.json();
//   console.log(data);
//   return {
//     props: { data },
//   };
// };
