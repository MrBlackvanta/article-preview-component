import Image from "next/image";
import avatar from "@/assets/images/avatar-michelle.webp";
import drawers from "@/assets/images/drawers.webp";
import SharePanel from "./share-panel";

export default function ArticleCard() {
  return (
    <article className="mx-6 w-full rounded-card bg-white shadow-card md:mx-0 md:flex md:max-w-152 lg:max-w-182.5">
      <div className="relative h-50 w-full overflow-hidden rounded-t-card md:h-auto md:w-57.25 md:shrink-0 md:rounded-tr-none md:rounded-bl-card lg:w-71.25">
        <Image
          src={drawers}
          alt=""
          fill
          sizes="(min-width: 64rem) 284px, (min-width: 48rem) 228px, calc(100vw - 3rem)"
          className="object-cover object-[center_10%] md:object-center lg:object-left"
          priority
          fetchPriority="high"
        />
      </div>

      <div className="px-6 pt-8 pb-4.5 min-[375px]:px-7.5 md:flex-1 md:pt-10 md:pr-9 md:pb-10 md:pl-8 lg:px-10 lg:py-7.5">
        <h1 className="text-title font-bold text-ink">
          Shift the overall look and feel by adding these wonderful touches to
          furniture in your home
        </h1>

        <p className="mt-6">
          Ever been in a room and felt like something was missing? Perhaps it
          felt slightly bare and uninviting. I’ve got some simple tips to help
          you make any room feel complete.
        </p>

        <footer className="relative mt-12 flex items-center gap-4 md:mt-6">
          <Image
            src={avatar}
            alt=""
            width={40}
            height={40}
            className="shrink-0 rounded-full"
          />

          <div>
            <p className="font-bold text-ink">Michelle Appleton</p>
            <time dateTime="2020-06-28" className="block text-byline">
              28 Jun 2020
            </time>
          </div>

          <SharePanel />
        </footer>
      </div>
    </article>
  );
}
