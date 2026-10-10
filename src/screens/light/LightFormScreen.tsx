import type { MouseEvent } from "react";
import LightFormDesign from "./LightFormDesign";

type LightFormScreenProps = {
  onClose: () => void;
};

export default function LightFormScreen({ onClose }: LightFormScreenProps) {
  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    const target = event.target;
    if (target instanceof HTMLElement && target.closest('[data-name="退出创建"]')) {
      onClose();
    }
  };

  return (
    <div className="light-form-screen light-rebuild size-full" onClick={handleClick}>
      <LightFormDesign />
    </div>
  );
}
