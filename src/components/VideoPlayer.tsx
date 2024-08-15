"use client";

import { FC, useEffect } from "react";
import { trpc } from "@/app/_trpc/client";
import useLanguage from "@/hooks/useLanguage";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  EyeIcon,
  LayoutList,
  ThumbsDownIcon,
  ThumbsUpIcon,
} from "lucide-react";
import toast from "react-hot-toast";
import VideoPlayerSkeleton from "./VideoPlayerSkeleton";

interface VideoPlayerProps {
  videoId?: string;
  videoUrl?: string;
}

const VideoPlayer: FC<VideoPlayerProps> = ({
  videoId = "1",
  videoUrl = "https://www.youtube.com/embed/VPRjCeoBqrI",
}) => {
  const { isEnglish } = useLanguage();

  const {
    data: videoData,
    isLoading,
    refetch,
  } = trpc.getVideo.useQuery({
    id: videoId || "",
  });
  const incrementWatchCount = trpc.incrementWatchCount.useMutation();
  const likeVideo = trpc.likeVideo.useMutation();
  const dislikeVideo = trpc.dislikeVideo.useMutation();

  useEffect(() => {
    if (videoId) {
      incrementWatchCount.mutate(
        { id: videoId },
        {
          onSettled: () => {
            refetch();
          },
          onError: (error) => {
            toast.error(
              isEnglish
                ? `Error in incrementWatchCount mutation: ${error.message}`
                : `Error en la mutación incrementWatchCount: ${error.message}`
            );
          },
        }
      );
    }
  }, [videoId]);

  const handleLike = () => {
    if (videoId) {
      likeVideo.mutate(
        { id: videoId },
        {
          onSettled: () => {
            refetch();
          },
          onError: (error) => {
            toast.error(
              isEnglish
                ? `Error in likeVideo mutation: ${error.message}`
                : `Error en la mutación likeVideo: ${error.message}`
            );
          },
        }
      );
    }
  };

  const handleDislike = () => {
    if (videoId) {
      dislikeVideo.mutate(
        { id: videoId },
        {
          onSettled: () => {
            refetch();
          },
          onError: (error) => {
            toast.error(
              isEnglish
                ? `Error in dislikeVideo mutation: ${error.message}`
                : `Error en la mutación dislikeVideo: ${error.message}`
            );
          },
        }
      );
    }
  };

  const handleSubscribe = () => {
    toast(
      isEnglish
        ? "You have clicked the subscribe button, but it is not working."
        : "Clickeaste el botón suscribirse, pero no esta funcionando.",
      {
        icon: "💻",
      }
    );
  };

  return (
    <div className="relative">
      {isLoading ? (
        <VideoPlayerSkeleton />
      ) : (
        <>
          {!videoUrl ? (
            <div className="text-gray-300 my-20">
              <div className="flex justify-center">
                <LayoutList className="w-[120px] h-[120px]" />
              </div>
              <h2 className="text-center">
                {isEnglish ? "No video available." : "No hay video disponible."}
              </h2>
            </div>
          ) : (
            <iframe
              key={videoUrl}
              width={914}
              height={514}
              src={videoUrl}
              className="w-full rounded-lg"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
          <div className="mt-4">
            <div className="py-2 grid gap-2">
              <h1 className="text-xl font-semibold line-clamp-2">
                {isEnglish
                  ? `${
                      videoData?.title !== undefined
                        ? videoData.title
                        : "Video Title"
                    }`
                  : `${
                      videoData?.title !== undefined
                        ? videoData.title
                        : "Título del Video"
                    }`}
              </h1>
              <div className="flex gap-2 items-center">
                <div className="flex gap-2 items-center">
                  <Avatar>
                    <AvatarImage
                      src={videoData?.avatar}
                      alt={
                        isEnglish
                          ? "Random avatar showing a person"
                          : "Avatar aleatorio mostrando una persona"
                      }
                      title={
                        isEnglish
                          ? `${videoData?.channel}'s avatar`
                          : `Avatar de ${videoData?.channel}`
                      }
                    />
                    <AvatarFallback>{videoData?.avatarFallback}</AvatarFallback>
                  </Avatar>
                  <div className="text-sm">
                    <div className="font-semibold">
                      {isEnglish
                        ? `${
                            videoData?.channel !== undefined
                              ? videoData.channel
                              : "Channel Name"
                          }`
                        : `${
                            videoData?.channel !== undefined
                              ? videoData.channel
                              : "Nombre del Canal"
                          }`}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {isEnglish
                        ? `${
                            videoData?.subscribers !== undefined
                              ? videoData?.subscribers
                              : "Number of"
                          } subscribers`
                        : `${
                            videoData?.subscribers !== undefined
                              ? videoData?.subscribers
                              : "Cantidad de"
                          } suscriptores`}
                    </div>
                  </div>
                </div>
                <div className="ml-5">
                  <Button
                    variant="outline"
                    onClick={() => {
                      handleSubscribe();
                    }}
                    className="hidden md:flex"
                  >
                    {isEnglish ? "Subscribe" : "Suscribirse"}
                  </Button>
                </div>
                <div className="flex items-center gap-2 ml-auto  ">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="hover:bg-inherit cursor-auto"
                  >
                    <EyeIcon className="w-4 h-4" />
                    <span className="ml-2">{videoData?.watchCount}</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      handleLike();
                    }}
                  >
                    <ThumbsUpIcon className="w-4 h-4" />
                    <span className="ml-2">{videoData?.likes}</span>
                  </Button>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => {
                      handleDislike();
                    }}
                  >
                    <ThumbsDownIcon className="w-4 h-4" />
                    <span className="ml-2">{videoData?.dislikes}</span>
                  </Button>
                </div>
              </div>
            </div>
            <div className="bg-muted rounded-xl p-4 text-sm">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                ultricies, velit quis fermentum rhoncus, felis est condimentum
                libero, eu lacinia diam nunc ut purus. Nulla tempus elit a diam
                ornare, eu malesuada tortor vehicula. Donec sagittis venenatis
                nibh, a consectetur lacus fermentum ac. Nunc at ante mi.
                Curabitur lobortis, felis ut eleifend pretium, lacus ipsum
                iaculis mauris, ac gravida nisl justo non est. Morbi et dapibus
                enim. Praesent rutrum aliquet erat et tristique. Integer porta
                dignissim dapibus. Ut a consequat ligula, eu lacinia orci. Nulla
                tempus elit a diam ornare, eu malesuada tortor vehicula. Donec
                sagittis venenatis nibh, a consectetur lacus fermentum ac.
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default VideoPlayer;
