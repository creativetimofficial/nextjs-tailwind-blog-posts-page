"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import ArticleCard from "@/components/article-card";

const ARTICLES = [
  {
    img: "/image/blogs/blog-1.png",
    title: "Blockchain Development: How to learn",
    desc: "This article offers valuable insights into the skills, resources, and steps needed to embark on a journey in blockchain development.",
  },
  {
    img: "/image/blogs/blog-2.png",
    title: "How to become a full stack developer - Roadmap",
    desc: "For those aspiring to become full stack developers, this roadmap is your ultimate guide. This article outlines the key milestones.",
  },
  {
    img: "/image/blogs/blog-3.png",
    title: "Join the Web 3 Conference 2023 - Registration details",
    desc: "This article provides essential registration details for this exciting event where experts gather to explore the latest developments",
  },
];

export function Articles() {
  return (
    <section className="container mx-auto px-8 py-20">
      <Typography variant="h2" color="blue-gray">
        Other Articles
      </Typography>
      <Typography
        variant="lead"
        className="my-2 w-full font-normal !text-gray-500 lg:w-5/12"
      >
        Check out what&apos;s new in the web development and tech worls! Do not
        forget to subscribe to our blog and we will notify you with the latest
        news.
      </Typography>

      <div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {ARTICLES.map((props, idx) => (
          <ArticleCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}
export default Articles;
