import { FC } from "react";
import Image from "next/image";
import useLanguage from "@/hooks/useLanguage";

interface Video {
  id: string;
  title: string;
  url: string;
  duration: string;
  img: string;
}

interface VideoListProps {
  videos: Video[];
  onVideoSelect: (url: string, id: string) => void;
  currentlyPlayingId?: string;
}

const VideoList: FC<VideoListProps> = ({
  videos,
  onVideoSelect,
  currentlyPlayingId,
}) => {
  const { isEnglish } = useLanguage();

  return (
    <ul>
      {videos.map((video) => (
        <li
          key={video.id}
          className={`cursor-pointer mb-2 ${
            currentlyPlayingId === video.id
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          <div
            onClick={() => {
              if (currentlyPlayingId !== video.id) {
                onVideoSelect(video.url, video.id);
              }
            }}
          >
            <div className="flex gap-4 items-center">
              <Image
                src={`https://img.youtube.com/vi/${video?.img}/maxresdefault.jpg`}
                width={120}
                height={80}
                loading="lazy"
                alt={
                  isEnglish
                    ? "Thumbnail representing the video to play"
                    : "Miniatura representando el video a reproducir"
                }
                title={
                  isEnglish
                    ? `${video?.title}'s thumbnail`
                    : `Miniatura de ${video?.title}`
                }
                className="rounded-lg w-auto h-auto"
              ></Image>
              <div className="flex-1">
                <h4 className="text-base font-medium line-clamp-2">
                  {video.title}
                </h4>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {video.duration}
                </div>
              </div>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default VideoList;
