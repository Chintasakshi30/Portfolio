import React, { createContext, useContext, useState, useRef, useEffect, ReactNode } from 'react';

export type PageId = 'overview' | 'projects' | 'experience' | 'skills' | 'certifications' | 'education' | 'contact';

interface NavigationContextType {
  currentPage: PageId;
  previousPage: PageId | null;
  navigateTo: (page: PageId) => void;
  hoverJumpEnabled: boolean;
  setHoverJumpEnabled: (enabled: boolean) => void;
  hoverDelayMs: number;
  setHoverDelayMs: (ms: number) => void;
  handleHoverStart: (page: PageId) => void;
  handleHoverEnd: () => void;
  hoveringTarget: PageId | null;
  hoverProgress: number;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPage, setCurrentPage] = useState<PageId>('overview');
  const [previousPage, setPreviousPage] = useState<PageId | null>(null);
  const [hoverJumpEnabled, setHoverJumpEnabled] = useState<boolean>(false);
  const [hoverDelayMs, setHoverDelayMs] = useState<number>(200); // Responsive 200ms delay for intentional hover
  const [hoveringTarget, setHoveringTarget] = useState<PageId | null>(null);
  const [hoverProgress, setHoverProgress] = useState<number>(0);

  const hoverTimerRef = useRef<NodeJS.Timeout | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const hoverStartTimeRef = useRef<number>(0);

  const navigateTo = (page: PageId) => {
    if (page === currentPage) return;
    setPreviousPage(currentPage);
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    clearHover();
  };

  const clearHover = () => {
    if (hoverTimerRef.current) {
      clearTimeout(hoverTimerRef.current);
      hoverTimerRef.current = null;
    }
    if (animationFrameRef.current) {
      cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
    setHoveringTarget(null);
    setHoverProgress(0);
  };

  const handleHoverStart = (page: PageId) => {
    if (!hoverJumpEnabled || page === currentPage) return;

    clearHover();
    setHoveringTarget(page);
    hoverStartTimeRef.current = Date.now();

    const updateProgress = () => {
      const elapsed = Date.now() - hoverStartTimeRef.current;
      const progress = Math.min(100, (elapsed / hoverDelayMs) * 100);
      setHoverProgress(progress);

      if (progress < 100) {
        animationFrameRef.current = requestAnimationFrame(updateProgress);
      }
    };

    animationFrameRef.current = requestAnimationFrame(updateProgress);

    hoverTimerRef.current = setTimeout(() => {
      navigateTo(page);
      clearHover();
    }, hoverDelayMs);
  };

  const handleHoverEnd = () => {
    clearHover();
  };

  useEffect(() => {
    return () => clearHover();
  }, []);

  return (
    <NavigationContext.Provider
      value={{
        currentPage,
        previousPage,
        navigateTo,
        hoverJumpEnabled,
        setHoverJumpEnabled,
        hoverDelayMs,
        setHoverDelayMs,
        handleHoverStart,
        handleHoverEnd,
        hoveringTarget,
        hoverProgress
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
