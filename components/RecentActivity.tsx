"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const activities = [
  {
    action: "A reader is exploring the book",
    time: "Just now",
  },
  {
    action: "Someone just discovered the book",
    time: "2 minutes ago",
  },
  {
    action: "A reader is currently viewing the book",
    time: "4 minutes ago",
  },
  {
    action: "The book is getting attention",
    time: "6 minutes ago",
  },
  {
    action: "Someone is taking a closer look",
    time: "8 minutes ago",
  },
  {
    action: "A reader just opened the book",
    time: "11 minutes ago",
  },
  {
    action: "Someone is exploring The Buried Reality",
    time: "13 minutes ago",
  },
  {
    action: "A reader just discovered the book",
    time: "15 minutes ago",
  },
];

export default function RecentActivity() {
  const [activity, setActivity] = useState(activities[0]);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let index = 0;

    const showNotification = () => {
      setActivity(activities[index]);
      setVisible(true);

      setTimeout(() => {
        setVisible(false);
      }, 5000);

      index = (index + 1) % activities.length;
    };

    const initialTimeout = setTimeout(showNotification, 4000);

    const interval = setInterval(showNotification, 9000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, []);

  return (
    <div
      className={`fixed bottom-5 left-5 z-[90] w-[340px] max-w-[calc(100vw-40px)] transition-all duration-500 ${
        visible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-5 opacity-0"
      }`}
    >
      <div className="flex items-center gap-4 border border-[#C6A15B]/20 bg-[#0C0B09]/95 p-3 shadow-[0_15px_50px_rgba(0,0,0,0.7)] backdrop-blur-md">
        <div className="relative h-30 w-20 shrink-0 overflow-hidden border border-[#C6A15B]/30">
          <Image
            src="/ebook3.webp"
            alt="The Silence Behind Reality - Lucian Verren"
            fill
            sizes="100px"
            className="object-cover"
          />
        </div>

        <div className="min-w-0 flex-1">
          <p className="font-medium leading-4 text-[#E8E0D0]">
            {activity.action}
          </p>

          <p className="mt-5 text-xs uppercase tracking-[0.15em] text-[#C6A15B]/70">
            {activity.time}
          </p>
        </div>

        <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#C6A15B] shadow-[0_0_10px_rgba(198,161,91,0.8)]" />
      </div>
    </div>
  );
}
