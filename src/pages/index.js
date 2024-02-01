import React from "react";
import { Highlight, Trend, Post, LoadMore } from "@/components";

export default function Page(props) {
  const { hlData, trendData, postData } = props;
  console.log(props);
  return (
    <div className="flex flex-col items-center gap-[100px] mx-auto justify-center">
      <Highlight hlData={hlData} />
      <Trend trendData={trendData} />
      <Post postData={postData} />
    </div>
  );
}

export const getStaticProps = async (context) => {
  const highlight = await fetch("https://dev.to/api/articles?top=5&per_page=5");
  const hlData = await highlight.json();
  const trend = await fetch("https://dev.to/api/articles?top=1&per_page=4");
  const trendData = await trend.json();
  const post = await fetch("https://dev.to/api/articles?top=30&per_page=9");
  const postData = await post.json();

  return {
    props: { hlData, trendData, postData },
  };
};
