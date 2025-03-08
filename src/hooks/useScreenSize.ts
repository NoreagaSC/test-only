import { useEffect, useState } from 'react';

interface ScreenSize {
  isMobile: boolean;
  isDesktop: boolean;
}

const MOBILE_BREAKPOINT = 320;

export const useScreenSize = (): ScreenSize => {
  const [screenSize, setScreenSize] = useState<ScreenSize>({
    isMobile: false,
    isDesktop: true,
  });

  useEffect(() => {
    const handleResize = () => {
      const documentWidth = document.documentElement.clientWidth;
      const isMobile = documentWidth <= MOBILE_BREAKPOINT;

      console.log(documentWidth);

      setScreenSize({
        isMobile,
        isDesktop: !isMobile,
      });
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return screenSize;
};
