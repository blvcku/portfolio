import React, { useState, useEffect } from "react";
import useObserver from "../../../hooks/useObserver";
import { BannerCardContainer } from "./About.styles";

const BannerCard = ({content, number: maxCount, icon}) => {

    const { isVisible, element } = useObserver();
    const [number, setNumber] = useState(0);
    
    useEffect(() => {
        if(!isVisible) return;
        const interval = setInterval(() => {
            setNumber(prev => prev + 1);
        }, 500 / maxCount); //counting animation lasts 500 ms
        if(number === maxCount) return clearInterval(interval);
        return () => clearInterval(interval);
    }, [maxCount, number, isVisible]);

    return(
        <BannerCardContainer ref={element} icon={icon}>
            <h2><strong>{number}+</strong><br />{content}</h2>
        </BannerCardContainer>
    )
}

export default BannerCard;