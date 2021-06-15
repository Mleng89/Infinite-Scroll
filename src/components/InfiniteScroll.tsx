import React, { useEffect, useState, useRef } from 'react';

type Props = {
    onBottom: () => void;
    isLoading: boolean;
    hasMoreData: boolean;
    onLoad: boolean;
};

function isBottom(ref: React.RefObject<HTMLDivElement>) {
    if (!ref.current) {
        return false;
    }
    //currPos variable is the current position of the user's x,y, top page, and bottom of page
    const currPos = ref.current.getBoundingClientRect();
    return currPos.bottom <= window.innerHeight;
}
const InfiniteScroll: React.FC<Props> = ({
    onBottom,
    isLoading,
    hasMoreData,
    onLoad,
    children
}) => {
    const [initialLoad, setInitialLoad] = useState(true);
    const contentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (onLoad && initialLoad) {
            onBottom();
            setInitialLoad(false);
        }
    }, [onBottom, onLoad, initialLoad]);

    //This allows us to know when we have reached the bottom of the page to run the function passed into onBottom
    useEffect(() => {
        const onScroll = () => {
            if (!isLoading && hasMoreData && isBottom(contentRef)) {
                onBottom();
            }
        };
        document.addEventListener('scroll', onScroll);
        return () => document.removeEventListener('scroll', onScroll);
    }, [onBottom, isLoading, hasMoreData]);

    return <div ref={contentRef}>{children}</div>;
};

export default InfiniteScroll;
