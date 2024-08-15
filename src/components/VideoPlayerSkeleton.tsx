import { FC } from "react";
import { Loader2Icon } from "lucide-react";
import { Skeleton } from "./ui/skeleton";

const VideoPlayerSkeleton: FC = () => {
  return (
    <div className="relative">
      <Skeleton className="w-full h-[514px]">
        <div className="flex items-center justify-center w-full h-full rounded-lg">
          <Loader2Icon className="w-[120px] h-[120px] text-gray-300 animate-spin" />
        </div>
      </Skeleton>
      <div className="mt-4">
        <div className="py-2 grid gap-2">
          <Skeleton className="w-96 h-6 rounded" />
          <div className="flex gap-2 items-center">
            <div className="flex gap-2 items-center">
              <Skeleton className="w-10 h-10 rounded-full" />
              <div className="text-sm">
                <Skeleton className="w-24 h-4 rounded mb-1" />
                <Skeleton className="w-32 h-4 rounded" />
              </div>
            </div>
            <div className="ml-5">
              <Skeleton className="w-24 h-8 rounded" />
            </div>
            <div className="flex items-center gap-2 ml-auto">
              <Skeleton className="w-8 h-8 rounded flex items-center justify-center">
                <div className="w-4 h-4 rounded"></div>
              </Skeleton>
              <Skeleton className="w-8 h-8 rounded flex items-center justify-center">
                <div className="w-4 h-4 rounded"></div>
              </Skeleton>
              <Skeleton className="w-8 h-8 rounded flex items-center justify-center">
                <div className="w-4 h-4 rounded"></div>
              </Skeleton>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 rounded-xl p-4 text-sm">
          <Skeleton className="w-full h-4 rounded mb-2" />
          <Skeleton className="w-full h-4 rounded mb-2" />
          <Skeleton className="w-full h-4 rounded mb-2" />
        </div>
      </div>
    </div>
  );
};

export default VideoPlayerSkeleton;
