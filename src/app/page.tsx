import LinkList from "@/components/LinkList";
import ProfileHeader from "@/components/ProfileHeader";
import { links, profile } from "@/data/profile";

export default function Home() {
  return (
    <main className="mx-auto flex min-h-[100svh] w-full max-w-[26rem] flex-col items-center px-7 pb-20 pt-20 sm:px-8 sm:pt-28">
      <ProfileHeader profile={profile} />

      <LinkList links={links} />
    </main>
  );
}
