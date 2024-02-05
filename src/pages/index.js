import React from "react";
import { Highlight, Trend, Post, LoadMore } from "@/components";
import { useState, useEffect } from "react";

export default function Home(props) {
  const { hlData, trendData, postData } = props;
  const [article, serArticle] = useState([]);
  useEffect(() => {
    async function getArticle() {
      const res = await fetch("http://localhost:4000/api/blogs");
      const data = await res.json();
      serArticle(data);
    }
    getArticle();
  }, []);

  return (
    <main>
      <div className="flex flex-col items-center gap-[100px] mx-auto justify-center">
        <p className="ml-5 mt-[200px]">{article?.title}</p>
        <Highlight hlData={hlData} />
        <Trend trendData={trendData} />
        <Post postData={postData} />
      </div>
    </main>
  );
}

export const getStaticProps = async (context) => {
  const highlight = await fetch("https://dev.to/api/articles?top=1&per_page=5");
  const hlData = await highlight.json();
  const trend = await fetch("https://dev.to/api/articles?top=1&per_page=4");
  const trendData = await trend.json();
  const post = await fetch("https://dev.to/api/articles?top=30&per_page=9");
  const postData = await post.json();

  return {
    props: { hlData, trendData, postData },
  };
};
