import { useEffect, useState } from "react";

const useCurrentSection = () => {
  const [currentSection, setCurrentSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const navHighlighter = () => {
      let actualPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionStart = section.offsetTop;
        const sectionEnd = sectionStart + section.offsetHeight;
        console.dir(section);
        console.log("heigh", section.offsetHeight);
        console.log("Parent", section.offsetParent);
        console.log("top", section.offsetTop);
        console.log("id", section.id);
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
