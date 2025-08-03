// import React from 'react'

import Appbar from "./Appbar"
import { Avatar } from "./BlogCard";


export interface BlogCardProps {
  id: number;
  title: string;
  content: string;
  published: boolean;
  author: {
    username: string;
  }
}

function FullBlog({ blog }: { blog: BlogCardProps}) {
  const { author, title, published, content, id } = blog;
  const text = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur nemo temporibus, eaque qui ab aliquid quisquam deleniti facilis expedita neque voluptatem ipsam excepturi laboriosam, at beatae sequi laborum suscipit nesciunt. Excepturi maiores cum consectetur laborum magni eligendi odit, aperiam totam laudantium? Excepturi placeat, consequuntur, quibusdam sequi quo, necessitatibus dignissimos molestiae alias explicabo neque officia ipsa praesentium in culpa accusamus expedita delectus iure debitis laboriosam quasi! Ducimus repellendus, adipisci deserunt nemo dolor consectetur voluptatem aliquid saepe, expedita necessitatibus quo? Veniam debitis commodi esse nulla velit! Saepe dolorem dignissimos voluptatem officia earum autem provident voluptates, temporibus eveniet? Ad repellendus dolor nihil, eveniet temporibus nulla suscipit aut et tenetur itaque sint qui quis. Quibusdam cum assumenda eius fugiat similique iste commodi in aut. Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sequi expedita corporis omnis earum adipisci neque quam ipsa in nisi rerum sint dolor error cumque odit accusantium reiciendis, delectus nam id culpa maiores tempore et ab. Unde expedita sit dolorum, vero assumenda, culpa ut ipsam quidem quis, commodi minima harum? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laborum sit perspiciatis numquam suscipit accusamus vero? Impedit explicabo harum necessitatibus corrupti magnam temporibus officia, animi asperiores autem quas, ea quisquam tempora. At, quisquam commodi neque non nostrum praesentium quas nulla eum nesciunt blanditiis itaque. Qui, minima. Minus minima maiores odio atque."

 
 
  return (
    <>
      <Appbar />
      <div className=" mx-28 mt-8 grid grid-cols-12 gap-12 px-4 py-2">
        <div className="col-span-8 flex flex-col gap-[12px]">
          <div className="text-3xl font-extrabold font-sans text-opacity-95 w-[80%]">{title}</div>
          <div className="text-sm text-gray-400 "><span className="hover:border-b  hover:border-b-gray-700 hover:z-50 hover:py-1 hover:text-gray-700">Posted on August 24, 2023</span></div>
          <div className="font-poppins text-sm font-light text-opacity-90">
            {/* {  text.slice(0,250)}<br></br>
          {text.slice(250,450)}<br></br>
          {text.slice(451)}<br></br> */}
          {content}
         </div>
        </div>
        <div className="col-span-4 flex flex-col gap-2">
          <div className="text-gray-600 text-sm font-semibold">Author</div>
          
          <div  className="flex items-center gap-2">
            <Avatar name={author.username} size={5}/>
            <div className="text-md font-semibold">{author.username.toUpperCase()}</div>
          </div>
          
          <div className="text-gray-500 font-sm">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex exercitationem libero nemo ad beatae maiores?</div>
        </div>
      </div>
    </>
  )
}

export default FullBlog;