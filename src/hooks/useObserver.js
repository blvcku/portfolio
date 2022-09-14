import { useState, useRef, useCallback } from "react";

const useObserver = () => {
    
    const [isVisible, setIsVisible] = useState(false);
    const observer = useRef();

    const element = useCallback(element => {
        observer.current = new IntersectionObserver(([entry]) => {
            if(entry.isIntersecting){
                setIsVisible(true);
                return observer.current.disconnect();
            }
        }, { threshold: [1] });
        if(element) observer.current.observe(element);
    }, []);

    return { element, isVisible };
}

export default useObserver;