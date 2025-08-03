// import React from 'react'

import Appbar from "./Appbar";
import { Avatar } from "./BlogCard";

export interface BlogCardProps {
  id: number;
  title: string;
  content: string;
  published: boolean;
  author: {
    username: string;
  };
}

function FullBlog({ blog }: { blog: BlogCardProps }) {
  const { author, title, published, content, id } = blog;

  return (
    <>
      <Appbar />
      <div className=" mx-28 mt-8 grid grid-cols-12 gap-12 px-4 py-2">
        <div className="col-span-8 flex flex-col gap-[12px]">
          <div className="text-3xl font-extrabold font-sans text-opacity-95 w-[80%]">
            {title}
          </div>
          <div className="text-sm text-gray-400 ">
            <span className="hover:border-b  hover:border-b-gray-700 hover:z-50 hover:py-1 hover:text-gray-700">
              Posted on August 24, 2023
            </span>
          </div>
          <div className="font-poppins text-sm font-light text-opacity-90">
            {content}
          </div>
        </div>
        <div className="col-span-4 flex flex-col gap-2">
          <div className="text-gray-600 text-sm font-semibold">Author</div>

          <div className="flex items-center gap-2">
            <Avatar name={author.username} size={5} />
            <div className="text-md font-semibold">
              {author.username.toUpperCase()}
            </div>
          </div>

          <div className="text-gray-500 text-sm italic">
            Written by
            <span className="font-medium text-gray-700">{author.username}</span>
          </div>
        </div>
      </div>
    </>
  );
}

export default FullBlog;
