import { motion } from "framer-motion";
import { AccordionContainer } from "./components/AccordionContainer";
import { Profile } from "./components/Profile";

const About = () => {
    return (
      <section id="about" className="mb-[35px]">
          <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="max-w-6xl m-auto mt-14 sm:mx-5 flex justify-between sm:flex-wrap border-y-0 md:max-w-2xl">
              <div className="w-1/2 sm:w-full">
                    <AccordionContainer />
              </div>
              <div className="w-96 sm:flex sm:justify-around">
                  <Profile />
              </div>
          </motion.div>
      </section>
  )
};

export default About;
