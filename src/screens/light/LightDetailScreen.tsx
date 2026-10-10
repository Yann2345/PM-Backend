import { useEffect, useRef, useState, type MouseEvent } from "react";
import LightDetailDesign from "./LightDetailDesign";

type DetailSection = "basic" | "business" | "transactions" | "banking" | "additional";

const sectionByLabel: Record<string, { id: DetailSection; nodeId: string }> = {
  基本信息: { id: "basic", nodeId: "1012:46850" },
  展业类型: { id: "business", nodeId: "1012:46972" },
  交易信息: { id: "transactions", nodeId: "1012:47111" },
  银行卡账户信息: { id: "banking", nodeId: "1012:47179" },
  补充信息: { id: "additional", nodeId: "1012:47299" },
};

type LightDetailScreenProps = {
  onNavigateForm: () => void;
  onNavigateHome: () => void;
  onNavigateList: () => void;
  onThemeChange: (theme: "dark" | "light") => void;
};

export default function LightDetailScreen({
  onNavigateForm,
  onNavigateHome,
  onNavigateList,
  onThemeChange,
}: LightDetailScreenProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState<DetailSection>("basic");

  useEffect(() => {
    const root = rootRef.current;
    const scrollContainer = root?.querySelector<HTMLElement>('[data-node-id="1012:46225"]');
    if (!scrollContainer) return;

    const sections = Object.values(sectionByLabel)
      .map(({ id, nodeId }) => ({
        element: root.querySelector<HTMLElement>(`[data-node-id="${nodeId}"]`),
        id,
      }))
      .filter((section): section is { element: HTMLElement; id: DetailSection } => Boolean(section.element));

    const handleScroll = () => {
      const threshold = scrollContainer.getBoundingClientRect().top + 100;
      let nextSection: DetailSection = "basic";

      for (const section of sections) {
        if (section.element.getBoundingClientRect().top <= threshold) {
          nextSection = section.id;
        }
      }

      setActiveSection(nextSection);
    };

    scrollContainer.addEventListener("scroll", handleScroll, { passive: true });
    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;

    const navigationItem = target.closest<HTMLElement>('[data-name="navigation-item-1st-level"]');
    if (navigationItem) {
      const label = navigationItem.textContent?.trim();
      if (label === "首页") onNavigateHome();
      if (label === "列表页") onNavigateList();
      if (label === "表单页") onNavigateForm();
      return;
    }

    const themeTab = target.closest<HTMLElement>('[data-name="tabs-capsule-cell"]');
    const themeLabel = themeTab?.textContent?.trim();
    if (themeLabel === "暗色风格") {
      onThemeChange("dark");
      return;
    }

    if (target.closest('[data-name="面包屑"]') && target.textContent?.trim() === "首页") {
      onNavigateList();
      return;
    }

    const anchorItem = target.closest<HTMLElement>('[data-name="anchor-item-1st-level"]');
    const section = anchorItem ? sectionByLabel[anchorItem.textContent?.trim() || ""] : null;
    if (!section) return;

    setActiveSection(section.id);
    rootRef.current
      ?.querySelector<HTMLElement>(`[data-node-id="${section.nodeId}"]`)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div
      className="light-detail-screen light-rebuild size-full"
      data-active-section={activeSection}
      onClick={handleClick}
      ref={rootRef}
    >
      <LightDetailDesign />
    </div>
  );
}
