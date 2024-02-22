import { motion } from "framer-motion";
import { ShootingTable } from "./components/ShootingTable";
import { RatingBlock } from "./components/RatingBlock";
import CalendarSvg from './assets/images/calendar.svg'
export const ShootingSection = () => {
  return (
      <section id="shooting" className="mb-20">
          <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
              <div className="max-w-6xl m-auto md:max-w-2xl lg:max-w-4xl sm:mx-4">
                  <h1 className="text-xl sm:text-center mb-14 sm:mb-10">Доступная съемка в ближайшее время:</h1>
                  <div className="max-w-3xl border-solid border-2 border-[#C7C7C7]">
                      <div className="2xl:px-5 sm:flex sm:justify-center mb-3.5 mt-5 ">
                          <p className="flex items-center md:justify-around lg:justify-around">Пятница, 14 сентября <img src={CalendarSvg} alt="Календарь" className="ml-4 sm:hidden"/></p>
                      </div>
                      <ShootingTable />
                      <RatingBlock />
                  </div>
              </div>
          </motion.div>
      </section>
  )
}
