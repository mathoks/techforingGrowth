'use client';
import { useEffect, useRef, useState } from "react";



export const useIntersectionObserver = (options = {}) => {
    const [entries, setEntries] = useState({});
    const observerRef = useRef(null);




    useEffect(() => {
        observerRef.current = new IntersectionObserver((observedEntries) => {
            const updatedEntries = {};
            observedEntries.forEach((entry) => {
                updatedEntries[entry.target.id] = entry.isIntersecting;
            });
            setEntries((prev) => ({ ...prev, ...updatedEntries }));
        }, options);
    }, []);

    const observe = (element) => {
        if (element && observerRef.current) observerRef.current.observe(element);
    };

    return [entries, observe];
};
