import { Skeleton } from "@/components/ui/skeleton";
import VideoListSkeleton from "@/components/VideoListSkeleton";
import VideoPlayerSkeleton from "@/components/VideoPlayerSkeleton";

export default function LoadingPage() {
  return (
    <main className="grid md:grid-cols-[3fr_1fr] gap-6 p-6">
      <div>
        <VideoPlayerSkeleton />
      </div>
      <div className="grid gap-4">
        <div className="rounded-lg">
          <div className="px-4">
            <Skeleton className="w-48 h-6 rounded" />
          </div>
          <div className="grid gap-4 p-4">
            <div className="flex gap-4 items-start">
              <VideoListSkeleton />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
