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
    <div className={`text-sm text-[#536471] ${className}`}>
      <a href={tosUrl} className="mr-3 hover:underline" onClick={onTosClick}>
        Terms of Service
      </a>
      <a
        href={privacyUrl}
        className="mr-3 hover:underline"
        onClick={onPrivacyClick}
      >
        Privacy Policy
      </a>
      <a
        href={cookieUrl}
        className="mr-3 hover:underline"
        onClick={onCookieClick}
      >
        Cookie Policy
      </a>
      <a
        href={accesibilityUrl}
        className="mr-3 hover:underline"
        onClick={onAccesibilityClick}
      >
        Accesibility
      </a>
      <a href={adsUrl} className="mr-3 hover:underline" onClick={onAdsClick}>
        Ads info
      </a>
      <div
        className="mr-3 inline flex-grow-0 cursor-pointer hover:underline"
        onClick={onMoreClick}
      >
        <span className="mr-1">More</span>
        <EllipsisHorizontalIcon className="inline h-4 w-4" color="#536471" />
      </div>
      <span>{`© ${new Date().getFullYear()} Twitter, Inc.`}</span>
    </div>
  )
}

export default Footer
