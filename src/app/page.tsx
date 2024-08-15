"use client";

import { useEffect, useState } from "react";
import { trpc } from "./_trpc/client";
import useLanguage from "@/hooks/useLanguage";
import VideoPlayer from "@/components/VideoPlayer";
import VideoList from "@/components/VideoList";
import VideoPlayerSkeleton from "@/components/VideoPlayerSkeleton";
import VideoListSkeleton from "@/components/VideoListSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

// Page component for displaying the video player and video list
export default function HomePage() {
  const [selectedVideoUrl, setSelectedVideoUrl] = useState<string | undefined>(
    undefined
  );
  const [selectedVideoId, setSelectedVideoId] = useState<string>("1");
  const [isLoadingVideo, setIsLoadingVideo] = useState<boolean>(false);
  const { isEnglish } = useLanguage();

  // Fetch video data using TRPC query
  const { data: videos, isLoading } = trpc.getVideos.useQuery();

  // Handler for selecting a video
  const handleVideoSelect = (url: string, id: string) => {
    setIsLoadingVideo(true);
    setSelectedVideoUrl(url);
    setSelectedVideoId(id);
  };

  // Simulate a loading delay for the video
  useEffect(() => {
    if (selectedVideoId) {
      const timer = setTimeout(() => {
        setIsLoadingVideo(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [selectedVideoId]);

  return (
    <main className="grid md:grid-cols-[3fr_1fr] gap-6 p-6">
      <div className="overflow-hidden">
        {isLoading || isLoadingVideo ? (
          <VideoPlayerSkeleton />
        ) : (
          <VideoPlayer videoId={selectedVideoId} videoUrl={selectedVideoUrl} />
        )}
      </div>
      <div className="grid gap-4">
        <div className="rounded-lg overflow-hidden">
          <div className="px-4">
            <h3 className="text-lg font-semibold">
              {isLoading ? (
                <Skeleton className="w-48 h-6 rounded" />
              ) : isEnglish ? (
                "Recommended videos"
              ) : (
                "Videos recomendados"
              )}
            </h3>
          </div>
          <div className="grid gap-4 p-4">
            <div className="flex gap-4 items-start">
              {isLoading ? (
                <VideoListSkeleton />
              ) : (
                <VideoList
                  videos={videos ?? []}
                  onVideoSelect={handleVideoSelect}
                  currentlyPlayingId={selectedVideoId}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
