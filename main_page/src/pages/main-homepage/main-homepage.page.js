import React, { useEffect, useState } from "react";
import IntroOverlay from '../../components/intro-overlay/intro-overlay.component';
import Banner from '../../components/banner/banner.component';
import Cases from '../../components/cases/cases.component';
import gsap from "gsap";

const timeline = gsap.timeline();

const mainHomepageAnimation = (completeAnimation) => {

    timeline.from(".line span", 1, {
        y: 100,
        ease: "power4.out",
        delay: 1,
        skewY: 7,
        stagger: {
            amount: 0.3
        }
    }).to(".overlay-top", 1.6, {
        height: 0,
        ease: "expo.inOut",
        stagger: 0.4
    }).to(".overlay-bottom", 1.6, {
        width: 0,
        ease: "expo.inOut",
        delay: -.8,
        stagger: {
            amount: 0.4
        }
    }).to(".intro-overlay", 0, {
        css: { display: "none" }
    }).from(".case-image img", 1.6, {
        scale: 1.4,
        ease: "expo.inOut",
        delay: -2,
        stagger: {
            amount: 0.4
        },
        onComplete: completeAnimation
    })

}
function MainHomepage() {
    const [animationComplete, setAnimationComplete] = useState(false);
    const completeAnimation = () => {
        setAnimationComplete(true);
    }
    useEffect(() => {

        //on load timeline
        mainHomepageAnimation(completeAnimation);


    }, []);
    return (
        <>
            {animationComplete === false ? <IntroOverlay /> : ""}

            <Banner />
            <Cases />
        </>
    )
}

export default MainHomepage
