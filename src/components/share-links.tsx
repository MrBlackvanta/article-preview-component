import { FacebookIcon, PinterestIcon, TwitterIcon } from "@/components/icons";

const url =
  "https://article-preview-component.abdelrhman-ahmed8881.workers.dev";
const title =
  "Shift the overall look and feel by adding these wonderful touches to furniture in your home";

const networks = [
  {
    label: "Facebook",
    href: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`,
    Icon: FacebookIcon,
  },
  {
    label: "Twitter",
    href: `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`,
    Icon: TwitterIcon,
  },
  {
    label: "Pinterest",
    href: `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(url)}&description=${encodeURIComponent(title)}`,
    Icon: PinterestIcon,
  },
];

export default function ShareLinks() {
  return (
    <>
      <p className="-me-(--tracking-share) tracking-share text-share-label uppercase">
        Share
      </p>

      <ul className="flex items-center gap-4">
        {networks.map(({ label, href, Icon }) => (
          <li key={label}>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Share on ${label}`}
              className="block text-white transition-colors hover:text-share-label focus-visible:outline-white motion-reduce:transition-none"
            >
              <Icon className="w-5" />
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
