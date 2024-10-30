import { useEffect, useState } from "react";

const ProgressBar = () => {
    const [scrollPercentage, setScrollPercentage] = useState(0);
    const [isOverflowing, setIsOverflowing] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            const scrollY = window.scrollY;
            const scrollPercent = (scrollY / (documentHeight - windowHeight)) * 100;
            setScrollPercentage(scrollPercent);
            // Check if there is overflow
            setIsOverflowing(documentHeight > windowHeight && scrollY > 0); 
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            id="progress-container"
            className="md:h-[7px] h-[5px] fixed top-[42px] md:top-[70px] -z-10"
            style={{
                width: "100%",
                backgroundColor: isOverflowing ? "#FFFFFF" : "transparent",
                zIndex: '1000',
                display: isOverflowing ? "block" : "none" // Hide the progress bar if no overflow
            }}
        >
            <div
                className="progress-fill"
                style={{
                    height: "100%",
                    width: `${scrollPercentage}%`,
                    background: "#5BBC2E",
                    borderRadius: "10px"
                }}
            ></div>
        </div>
    );
};

export default ProgressBar;
