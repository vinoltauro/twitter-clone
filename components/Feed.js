import { SparklesIcon } from "@heroicons/react/outline";
const Feed = () => {
  return (
    <div className="text-white text-4xl flex flex-grow flex-col  border-l border-r border-gray-800 max-w-2xl sm:ml-[60px] xl:ml-[370px]">
      <div className="flex sm:justify-between items-center h-[40px] py-7 px-3 sticky top-0 z-50 bg-black border-b border-gray-700">
        <h2 className="text-lg sm:text-xl font-bold">Home</h2>
        <div className="hoverAnimation w-5 h-5 flex items-center justify-center xl:px-0 ml-auto">
          <SparklesIcon></SparklesIcon>
        </div>
      </div>
     

    </div>
  );
};

export default Feed;
