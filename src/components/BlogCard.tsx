interface BlogCardProps {
  authorName: string;
  title: string;
  content: string;
  publishedDate: string;
}
const BlogCard = (props: BlogCardProps) => {
  const { authorName, title, publishedDate, content } = props;
  return (
    <div>
      <div className="flex">
        <div className="mt-1 flex justify-center flex-col ">
          <Avatar name={authorName} />
        </div>

        <div className="font-extralight pl-2">{authorName}</div>
        <div className="font-thin pl-2">. {publishedDate}</div>
      </div>

      <div>{title}</div>
      <div>{content.slice(0, 100) + "..."}</div>
      <div>{Math.ceil(content.length / 100)}</div>
      <div className="bg-slate-200 h-1 w-full"></div>
    </div>
  );
};
function Avatar({ name }: { name: string }) {
  return (
    <div className="relative inline-flex items-center justify-center w-5 h-5 overflow-hidden  rounded-full bg-gray-700">
      <span className="font-sm text-xs font-extralight text-white ">
        {name[0].toUpperCase()}
      </span>
    </div>
  );
}
export default BlogCard;
