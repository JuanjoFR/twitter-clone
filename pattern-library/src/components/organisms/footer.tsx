import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline"

interface Props {
  className?: React.HTMLAttributes<HTMLDivElement>["className"]
  tosUrl?: string
  privacyUrl?: string
  cookieUrl?: string
  accesibilityUrl?: string
  adsUrl?: string
  onTosClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
  onPrivacyClick?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void
  onCookieClick?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void
  onAccesibilityClick?: (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => void
  onAdsClick?: (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void
  onMoreClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

function Footer({
  className,
  tosUrl,
  privacyUrl,
  cookieUrl,
  accesibilityUrl,
  adsUrl,
  onTosClick,
  onPrivacyClick,
  onCookieClick,
  onAccesibilityClick,
  onAdsClick,
  onMoreClick
}: Props) {
  return (
    <div className={`text-[#536471] text-sm ${className}`}>
      <a href={tosUrl} className="hover:underline mr-3" onClick={onTosClick}>
        Terms of Service
      </a>
      <a
        href={privacyUrl}
        className="hover:underline mr-3"
        onClick={onPrivacyClick}
      >
        Privacy Policy
      </a>
      <a
        href={cookieUrl}
        className="hover:underline mr-3"
        onClick={onCookieClick}
      >
        Cookie Policy
      </a>
      <a
        href={accesibilityUrl}
        className="hover:underline mr-3"
        onClick={onAccesibilityClick}
      >
        Accesibility
      </a>
      <a href={adsUrl} className="hover:underline mr-3" onClick={onAdsClick}>
        Ads info
      </a>
      <div
        className="flex-grow-0 hover:underline mr-3 inline cursor-pointer"
        onClick={onMoreClick}
      >
        <span className="mr-1">More</span>
        <EllipsisHorizontalIcon className="w-4 h-4 inline" color="#536471" />
      </div>
      <span>{`© ${new Date().getFullYear()} Twitter, Inc.`}</span>
    </div>
  )
}

export default Footer
