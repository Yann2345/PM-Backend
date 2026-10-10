import { useEffect, useState } from "react"

const cursorIcon = `${import.meta.env.BASE_URL}assets/common/e345c.svg`

export default function PrototypeMessage() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const timeout = window.setTimeout(() => setIsVisible(false), 3000)
    return () => window.clearTimeout(timeout)
  }, [])

  if (!isVisible) return null

  return (
    <div
      className="prototype-message pointer-events-none fixed top-[48px] z-[100] -translate-x-1/2"
      role="status"
    >
      <div
        className="bg-[#f0f7ff] border border-[#b2d3ff] border-solid content-stretch flex gap-[8px] items-center p-[16px] relative rounded-[8px]"
        data-name="message"
        data-node-id="1709:43788"
      >
        <div
          className="relative shrink-0 size-[24px]"
          data-name="icon"
          data-node-id="1709:43796"
        >
          <img
            alt=""
            className="absolute block inset-0 max-w-none size-full"
            src={cursorIcon}
          />
        </div>
        <p className="font-['Noto_Sans_SC:Medium'] font-medium leading-[24px] m-0 relative shrink-0 text-[#005ad6] text-[16px] whitespace-nowrap">
          这是交互原型，点击页面功能即可体验
        </p>
      </div>
    </div>
  )
}
