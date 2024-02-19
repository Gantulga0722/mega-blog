import React from "react";
import { Highlight, Trend, Post } from "@/components";

export default function Home(props) {
  const { hlData, trendData, postData } = props;

  return (
    <main>
      <div className="flex flex-col items-center gap-[100px] mx-auto justify-center">
        <Highlight hlData={hlData} />
        <Trend trendData={trendData} />
        <Post postData={postData} />
      </div>
    </main>
  );
}

export const getStaticProps = async (context) => {
  const highlight = await fetch(
    "https://first-backend-gilt.vercel.app/api/highlight"
  );
  const hlData = await highlight.json();
  const trend = await fetch("https://first-backend-gilt.vercel.app/api/trend");
  const trendData = await trend.json();
  const post = await fetch("https://first-backend-gilt.vercel.app/api/post");
  const postData = await post.json();

  return {
    props: { hlData, trendData, postData },
  };
};
