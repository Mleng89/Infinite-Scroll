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
    const rect = ref.current.getBoundingClientRect();
    // Element.getBoundingClientRect()
    return rect.bottom <= window.innerHeight;
}
console.log('before infinitescroll call');
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

    useEffect(() => {
        const onScroll = () => {
            if (!isLoading && hasMoreData && isBottom(contentRef)) {
                onBottom();
            }
        };
        document.addEventListener('scroll', onScroll);
        return () => document.removeEventListener('scroll', onScroll);
    }, [onBottom, isLoading, hasMoreData]);

    console.log('what are my children?', children);
    return <div ref={contentRef}>{children}</div>;
};

export default InfiniteScroll;
