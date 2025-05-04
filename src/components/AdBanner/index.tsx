import { useEffect, useRef, useState } from "react";
import { AdContainer } from "./styles";

interface AdBannerProps {
  slot: string;
}

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

export function AdBanner({ slot }: AdBannerProps) {
  const adRef = useRef<HTMLDivElement>(null);
  const [isAdVisible, setIsAdVisible] = useState(false);

  useEffect(() => {
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch (e) {
      console.error('Erro ao carregar anúncio:', e);
    }

    const observer = new MutationObserver(() => {
      const ins = adRef.current?.querySelector('ins.adsbygoogle');
      if (ins && ins.childNodes.length > 0) {
        setIsAdVisible(true);
      }
    });

    if (adRef.current) {
      observer.observe(adRef.current, {
        childList: true,
        subtree: true,
      });
    }

    return () => observer.disconnect();
  }, []);

  if (!isAdVisible) return null;

  return (
    <AdContainer ref={adRef}>
      <ins
        className="adsbygoogle"
        data-ad-client="ca-pub-4466667237390344"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
    </AdContainer>
  );
}
