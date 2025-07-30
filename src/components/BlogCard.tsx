import { useState } from "react";
import Update from "./Update";

interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}
const BlogCard = (props: BlogCardProps) => {
  const { authorName, title, publishedDate, content } = props;
   const [isOpen, setIsOpen] = useState(false);
  // const showUpdate = ()=>{

  // }
  return (
    <div className="border border-gray-100 border-opacity-50 p-3 w-[70%]  rounded-md shadow-sm">
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">

          <div className=" ">
            <Avatar name={authorName} />
          </div>
          <div className="ml-2 font-normal text-gray-400 text-sm ">{authorName.replace(/\b\w/g, c => c.toUpperCase())}
          </div>
          <div className="circle mx-2 w-1 h-1 bg-gray-400 rounded-full"></div>
          <div className="font-normal text-gray-400  text-sm">{publishedDate}</div>

        </div>
        <div onClick={() => setIsOpen(true)}><svg className="w-5 h-5 text-gray-400 dark:text-gray-500 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z" />
        </svg></div>
          {isOpen && (
        <div className="fixed inset-0 backdrop-blur-sm z-50 bg-black bg-opacity-40  flex items-center justify-center  ">
          <Update onClose={() => setIsOpen(false)} />
        </div>
      )}
      </div>

      <div className="font-semibold  text-lg">{title}</div>
      <div className="font-normal text-gray-500  text-sm">{content.slice(0, 100) + "..."}</div>
      <div className=" text-gray-400 text-xs">{Math.ceil(content.length / 100)} minutes(s) read</div>

    </div>
  );
};



export function Avatar({ name, size = 4 }: { name: string, size?: number }) {
  const sizeClass = {
    4: 'h-4 w-4',
    6: 'h-6 w-6',
    8: 'h-8 w-8',
    10: 'h-10 w-10',
    12: 'h-12 w-12',
  }[size] || 'h-4 w-4';
  return (
    <div className={`relative inline-flex items-center justify-center  ${sizeClass} overflow-hidden  rounded-full bg-gray-700`}>
      <span className="font-sm text-xs font-extralight text-white ">
        {name[0].toUpperCase()}
      </span>
    </div>
  );
}
export default BlogCard;
