import { motion } from "framer-motion";
import { useState } from "react";
import LazyLoad from "react-lazy-load";
import MobileSlider from "./components/MobileSlider";

const photos = [
    { src: "photo-1.png", alt: "Фото 1" },
    { src: "photo-2.png", alt: "Фото 2" },
    { src: "photo-3.png", alt: "Фото 3" },
    { src: "photo-4.png", alt: "Фото 4" },
    { src: "photo-5.png", alt: "Фото 5" },
    { src: "photo-6.png", alt: "Фото 6" },
    { src: "photo-7.png", alt: "Фото 7" },
    { src: "photo-8.png", alt: "Фото 8" },
    { src: "photo-6.png", alt: "Фото 6" },
    { src: "photo-7.png", alt: "Фото 7" },
    { src: "photo-8.png", alt: "Фото 8" },
    { src: "photo-8.png", alt: "Фото 8" },
];
const GallerySection = () => {
    const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
    const [isSliderOpen, setIsSliderOpen] = useState(false);
    const nextPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex + 1) % photos.length);
    };
    const prevPhoto = () => {
        setCurrentPhotoIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    };
    const visiblePhotos = isSliderOpen ? photos : photos.slice(0, 8);
    return (
        <section id="gallery">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
                <div className="max-w-6xl md:max-w-2xl lg:max-w-4xl m-auto mt-14 sm:mt-0 sm:mx-5">
                    <div className="mx-auto mt-8 sm:mt-0">
                        <h1 className="text-xl sm:text-xl font-normal mb-9">Фотографии пакета:</h1>
                        <div className="sm:hidden text-center">
                            <div className="flex flex-wrap justify-between md:justify-center lg:justify-center">
                                {visiblePhotos.map((photo, index) => (
                                    <div key={index}>
                                        <LazyLoad>
                                            <img
                                                src={require(`./assets/images/${photo.src}`)}
                                                alt={photo.alt}
                                                width="274"
                                            />
                                        </LazyLoad>
                                    </div>
                                ))}
                            </div>
                            {!isSliderOpen && (
                                <button
                                    onClick={() => setIsSliderOpen(true)}
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-10">
                                    Показать все фото
                                </button>
                            ) }
                        </div>
                        <MobileSlider
                            photos={ photos }
                            currentPhotoIndex={ currentPhotoIndex }
                            prevPhoto={ prevPhoto }
                            nextPhoto={ nextPhoto }
                        />
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default GallerySection;
