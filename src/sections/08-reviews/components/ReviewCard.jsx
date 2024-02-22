import { motion } from "framer-motion";
import RatingPng from "../../03-photoShoot/components/assets/images/rating.png";
import CheckSvg from "../../03-photoShoot/components/assets/images/check.svg";

export const ReviewCard = ({ reviews, activeReview }) => {
    const visiblePhotos = activeReview ? reviews : reviews.slice(0, 2);
  return (
      <>
          { visiblePhotos.map((item, index) => {
              return (
                  <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className="mb-7" key={index}>
                      <div className="flex sm:flex-wrap">
                          <img src={require(`../assets/images/reviews/photo-${item.id}.png`)} alt="img" className="mr-5 sm:mb-[7px]" style={{ width: '101px', height: '101px' }}/>
                          <div>
                              <h1 className="text-lg font-medium">{item.name}</h1>
                              <p className="text-sm text-[#37373F]">{item.position}</p>
                              <div className="flex sm:flex-wrap items-center mt-2.5 mb-7 sm:mb-2.5">
                                  <img src={RatingPng} alt="rating" className="mr-12" />
                                  <div className="sm:flex sm:mt-2.5">
                                      <img src={CheckSvg} alt="chempion" className="mr-1.5" />
                                      <span className="text-sm text-[#B3B3B3] sm:text-[12px]">Супер! Я бы заказала съемку снова!</span>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="border-b-2 pb-9">
                          <p className="mb-5">{item.text}</p>
                          <p className="text-sm text-[#B3B3B3]">{item.date}</p>
                      </div>
                  </motion.div>
              )
          })}
      </>
  )
}
