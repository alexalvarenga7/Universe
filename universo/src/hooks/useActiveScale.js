import { useState, useEffect, useRef } from "react";

/**
 * Hook que detecta cuál "escala" está actualmente visible en pantalla
 * usando IntersectionObserver, y expone funciones para navegar
 * manualmente entre escalas (botones prev/next).
 *
 * @param {Array} scales - arreglo de escalas (scalesData)
 */
export default function useActiveScale(scales) {
    const [activeIndex, setActiveIndex] = useState(0);
    const sectionRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.dataset.index);
                        setActiveIndex(index);
                    }
                });
            },
            {
                threshold: 0.5, // se considera "activa" cuando el 50% de la sección es visible
            }
        );

        sectionRefs.current.forEach((section) => {
            if (section) observer.observe(section);
        });

        return () => observer.disconnect();
    }, [scales]);

    const scrollToIndex = (index) => {
        if (index < 0 || index >= scales.length) return;
        sectionRefs.current[index]?.scrollIntoView({ behavior: "smooth" });
    };

    const goNext = () => scrollToIndex(activeIndex + 1);
    const goPrev = () => scrollToIndex(activeIndex - 1);

    return { activeIndex, sectionRefs, scrollToIndex, goNext, goPrev };
}