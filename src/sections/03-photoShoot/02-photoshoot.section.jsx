import { motion } from "framer-motion";
import { PhotoTourInfo } from "./components/PhotoTourInfo";
import { PhotoTourMedia } from "./components/PhotoTourMedia";

const PhotoShootSection = () => {
    return (
        <section id="photoshoot" className="mb-12">
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={ { duration: 1 }}
                className="flex flex-wrap justify-between md:justify-around max-w-6xl m-auto md:max-w-2xl lg:justify-around sm:mx-5">
                <PhotoTourInfo />
                <PhotoTourMedia />
            </motion.div>
        </section>
    );
}

export default PhotoShootSection;
