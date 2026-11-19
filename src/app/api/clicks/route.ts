import { NextResponse } from "next/server";
import { links } from "@/data/profile";
import { getClicksCollection } from "@/lib/mongodb";

// 요청마다 DB에서 최신 값을 읽도록 정적 캐싱을 끕니다.
export const dynamic = "force-dynamic";

const validIds = links.map((link) => link.id);

// 모든 링크의 클릭 수를 한 번에 돌려줍니다. 예: { "instagram": 42, "translators": 7 }
export async function GET() {
  try {
    const collection = await getClicksCollection();
    const docs = await collection.find({ _id: { $in: validIds } }).toArray();

    const counts: Record<string, number> = {};
    for (const id of validIds) counts[id] = 0;
    for (const doc of docs) counts[doc._id] = doc.count;

    return NextResponse.json(counts);
  } catch (error) {
    console.error("[clicks] GET 실패:", error);
    return NextResponse.json({ error: "클릭 수를 불러오지 못했습니다." }, { status: 500 });
  }
}

// 링크 하나의 클릭 수를 1 늘립니다. 본문: { "id": "instagram" }
export async function POST(request: Request) {
  let id: unknown;
  try {
    ({ id } = await request.json());
  } catch {
    return NextResponse.json({ error: "잘못된 요청입니다." }, { status: 400 });
  }

  // profile.ts에 있는 링크만 허용해 아무 값이나 DB에 쌓이지 않게 합니다.
  if (typeof id !== "string" || !validIds.includes(id)) {
    return NextResponse.json({ error: "알 수 없는 링크입니다." }, { status: 400 });
  }

  try {
    const collection = await getClicksCollection();
    const doc = await collection.findOneAndUpdate(
      { _id: id },
      { $inc: { count: 1 } },
      { upsert: true, returnDocument: "after" },
    );
    return NextResponse.json({ id, count: doc?.count ?? 1 });
  } catch (error) {
    console.error("[clicks] POST 실패:", error);
    return NextResponse.json({ error: "클릭 수를 저장하지 못했습니다." }, { status: 500 });
  }
}
