import { z } from "zod";
import { publicProcedure, router } from "./trpc";

let videosData = [
  {
    id: "1",
    title: "Coldplay - A Sky Full Of Stars",
    url: "https://www.youtube.com/embed/VPRjCeoBqrI",
    img: "VPRjCeoBqrI",
    duration: "4:13",
    avatar: "https://i.pravatar.cc/300",
    avatarFallback: "CP",
    channel: "Coldplay",
    subscribers: "2.5M",
    watchCount: 0,
    likes: 0,
    dislikes: 0,
  },
  {
    id: "2",
    title: "Lana del Rey - Video Games",
    url: "https://www.youtube.com/embed/cE6wxDqdOV0",
    img: "cE6wxDqdOV0",
    duration: "4:46",
    avatar: "https://i.pravatar.cc/300",
    avatarFallback: "LR",
    channel: "Lana del Rey",
    subscribers: "1.2M",
    watchCount: 0,
    likes: 0,
    dislikes: 0,
  },
  {
    id: "3",
    title: "Imagine Dragons - On Top Of The World",
    url: "https://www.youtube.com/embed/w5tWYmIOWGk",
    img: "w5tWYmIOWGk",
    duration: "4:01",
    avatar: "https://i.pravatar.cc/300",
    avatarFallback: "ID",
    channel: "Imagine Dragons",
    subscribers: "3.7M",
    watchCount: 0,
    likes: 0,
    dislikes: 0,
  },
  {
    id: "4",
    title: "Rosa Linn - Snap",
    url: "https://www.youtube.com/embed/DIKIgjLGf98",
    img: "DIKIgjLGf98",
    duration: "3:13",
    avatar: "https://i.pravatar.cc/300",
    avatarFallback: "RL",
    channel: "Rosa Linn",
    subscribers: "1.1M",
    watchCount: 0,
    likes: 0,
    dislikes: 0,
  },
  {
    id: "5",
    title: "The Script - The Man Who Can't Be Moved",
    url: "https://www.youtube.com/embed/gS9o1FAszdk",
    img: "gS9o1FAszdk",
    duration: "3:59",
    avatar: "https://i.pravatar.cc/300",
    avatarFallback: "TS",
    channel: "The Script",
    subscribers: "2.3M",
    watchCount: 0,
    likes: 0,
    dislikes: 0,
  },
  {
    id: "6",
    title: "Aitana, Sebastián Yatra - Akureyri",
    url: "https://www.youtube.com/embed/2FOYmlLW1bw",
    img: "2FOYmlLW1bw",
    duration: "5:19",
    avatar: "https://i.pravatar.cc/300",
    avatarFallback: "AO",
    channel: "Aitana",
    subscribers: "3.6M",
    watchCount: 0,
    likes: 0,
    dislikes: 0,
  },
  {
    id: "7",
    title: "James Blunt - Beside You",
    url: "https://www.youtube.com/embed/b6U3xeYqdKQ",
    img: "b6U3xeYqdKQ",
    duration: "3:04",
    avatar: "https://i.pravatar.cc/300",
    avatarFallback: "JB",
    channel: "James Blunt",
    subscribers: "3.5M",
    watchCount: 0,
    likes: 0,
    dislikes: 0,
  },
  {
    id: "8",
    title: "Olivia Rodrigo - Vampire",
    url: "https://www.youtube.com/embed/RlPNh_PBZb4",
    img: "RlPNh_PBZb4",
    duration: "4:04",
    avatar: "https://i.pravatar.cc/300",
    avatarFallback: "OR",
    channel: "Olivia Rodrigo",
    subscribers: "14.1M",
    watchCount: 0,
    likes: 0,
    dislikes: 0,
  },
  {
    id: "9",
    title: "P!nk - Try",
    url: "https://www.youtube.com/embed/yTCDVfMz15M",
    img: "yTCDVfMz15M",
    duration: "4:09",
    avatar: "https://i.pravatar.cc/300",
    avatarFallback: "P",
    channel: "P!nk",
    subscribers: "12.5M",
    watchCount: 0,
    likes: 0,
    dislikes: 0,
  },
];

export const appRouter = router({
  getVideos: publicProcedure.query(async () => {
    return videosData;
  }),
  getVideo: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      return videosData.find((video) => video.id === input.id) || null;
    }),
  incrementWatchCount: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      const video = videosData.find((video) => video.id === input.id);
      if (video) {
        video.watchCount++;
        return { success: true, watchCount: video.watchCount };
      }
      return { success: false, watchCount: null };
    }),
  likeVideo: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      const video = videosData.find((video) => video.id === input.id);
      if (video) {
        video.likes++;
        return { success: true, likes: video.likes };
      }
      return { success: false, likes: null };
    }),
  dislikeVideo: publicProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ input }) => {
      const video = videosData.find((video) => video.id === input.id);
      if (video) {
        video.dislikes++;
        return { success: true, dislikes: video.dislikes };
      }
      return { success: false, dislikes: null };
    }),
});

export type AppRouter = typeof appRouter;
