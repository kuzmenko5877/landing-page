import React from 'react';
import { useSwipeable } from 'react-swipeable';

const MobileSlider = ({ photos, currentPhotoIndex, prevPhoto, nextPhoto }) => {
    const handlers = useSwipeable({
        onSwipedLeft: () => nextPhoto(),
        onSwipedRight: () => prevPhoto(),
    });

    return (
        <div className="hidden sm:flex sm:justify-around">
            <div className="text-center mt-4" {...handlers}>
                <img
                    src={require(`../assets/images/${photos[currentPhotoIndex].src}`)}
                    alt={photos[currentPhotoIndex].alt}
                    key={currentPhotoIndex}
                    width="w-full"
                />
            </div>
        </div>
    );
};

export default MobileSlider;
