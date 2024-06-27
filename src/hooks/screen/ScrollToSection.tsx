// Hook to scroll to a section of the screen given a ref
const useScrollToSection = (sectionRef: React.RefObject<HTMLDivElement>) => {
  if (sectionRef && sectionRef.current) {
    sectionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};

export default useScrollToSection;