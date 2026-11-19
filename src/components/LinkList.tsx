"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/profile";

export default function LinkList({ links }: { links: LinkItem[] }) {
  // 데이터를 받기 전에는 모두 0회로 보여줍니다.
  const [counts, setCounts] = useState<Record<string, number>>({});

  // 페이지가 열리면 모든 링크의 클릭 수를 한 번에 가져옵니다.
  useEffect(() => {
    const controller = new AbortController();
    fetch("/api/clicks", { signal: controller.signal })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: Record<string, number>) => setCounts(data))
      .catch((error) => {
        if (controller.signal.aborted) return;
        console.error("[clicks] 클릭 수 불러오기 실패:", error);
      });
    return () => controller.abort();
  }, []);

  const handleClick = (id: string) => {
    // 화면에는 바로 +1 반영하고, 서버에는 따로 저장합니다.
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    // keepalive: 페이지를 떠나는 중에도 요청이 끝까지 전송되게 합니다.
    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      keepalive: true,
    }).catch((error) => console.error("[clicks] 클릭 저장 실패:", error));
  };

  return (
    <ul className="mt-12 flex w-full flex-col gap-4 sm:mt-14 sm:gap-5">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            link={link}
            count={counts[link.id] ?? 0}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
