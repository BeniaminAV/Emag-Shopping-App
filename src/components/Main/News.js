import Image from "next/image";
import React from "react";
import { NewsFour, NewsOne, NewsThree, NewsTwo } from "../../assets";

function News() {
  return (
    <div className="mx-2  grid grid-flow-row-dense grid-cols-2 gap-2 sm:grid-cols-4">
      <Image src={NewsOne} alt="news" className="news" />
      <Image src={NewsTwo} alt="news" className="news" />
      <Image src={NewsThree} alt="news" className="news" />
      <Image src={NewsFour} alt="news" className="news" />
    </div>
  );
}

export default News;
