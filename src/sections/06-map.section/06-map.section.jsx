import { motion } from "framer-motion";
import LazyLoad from "react-lazy-load";
import { SessionCard } from "./components/SessionCard";

export const MapSection = () => {
  return (
      <section id="map" className="sm:hidden">
          <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="relative">
              <div className="sm:m-auto sm:overflow-hidden">
                  <LazyLoad>
                      <img src="https://images.axios.com/uWSskjNC3UDFYKKu4BXKzTM_BKg=/0x46:2070x1210/1920x1080/2022/07/19/1658263618951.png?w=1920" alt="map" width={ 1792 } height={ 476 } className="h-[550px] sm:transform sm:-translate-x-[45%] sm:max-w-none" />
                  </LazyLoad>
              </div>
              <SessionCard />
          </motion.div>
      </section>
  )
}
