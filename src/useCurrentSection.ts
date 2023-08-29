import { useEffect, useState } from "react";

const useCurrentSection = () => {
  const [currentSection, setCurrentSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const navHighlighter = () => {
      let actualPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionStart = section.offsetTop;
        const sectionEnd = sectionStart + section.offsetHeight;
        if (actualPosition > sectionStart && actualPosition < sectionEnd) {
          if (currentSection !== section.id) {
            setCurrentSection(section.id);
          }
        }
      });
    };
    window.addEventListener("scroll", navHighlighter);

    return () => window.removeEventListener("scroll", navHighlighter);
  }, [currentSection]);
  return { currentSection };
};

export default useCurrentSection;
