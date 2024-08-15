import { FC } from "react";
import { Skeleton } from "./ui/skeleton";

const VideoListSkeleton: FC = () => {
  return (
    <ul>
      {Array.from({ length: 9 }).map((_, index) => (
        <li key={index} className="cursor-pointer mb-2">
          <div className="flex gap-4 items-center">
            <Skeleton className="w-[120px] h-[80px] rounded-lg" />
            <div className="flex-1">
              <Skeleton className="w-[200px] h-5 rounded" />
              <Skeleton className="w-[150px] h-4 rounded mt-1" />
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default VideoListSkeleton;
