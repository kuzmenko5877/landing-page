import React from 'react';
import Header from "./sections/01-header/Header";
import HelicopterSection from "./sections/02-helicopter/01-helicopter.section";
import PhotoShootSection from "./sections/03-photoShoot/02-photoshoot.section";
import AboutSection from "./sections/04-about.section/04-about.section";
import { ShootingSection } from "./sections/07-shooting/05-shooting.section";
import { MapSection } from "./sections/06-map.section/06-map.section";
import { ReviewsSection } from "./sections/08-reviews/07-reviews.seciton";
import { Footer } from "./sections/09-footer/Footer";
import { Route, Routes } from "react-router-dom";
import GallerySection from "./sections/05-gallery/03-gallery.section";

const App = () => {
    return (
            <>
                <Header />
                <HelicopterSection />
                <PhotoShootSection />
                <GallerySection />
                <AboutSection />
                <ShootingSection />
                <MapSection />
                <ReviewsSection />
                <Footer />
            </>
    );
};

export default App;
