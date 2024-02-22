import LazyLoad from "react-lazy-load";
import ChampionPng from "./assets/images/Chempion.svg";
import RatingPng from "./assets/images/rating.png";

const photoShootDetails = [
    { title: '3 часа съемки', icon: 'shooting' },
    { title: 'Более 50 фотографий', icon: 'photos' },
    { title: 'Киев', icon: 'city' },
    { title: 'Готовы ответить на любые вопросы', icon: 'questions' }
];
export const PhotoShootDetails = () => {
  return (
      <>
          { photoShootDetails.map((item, index) => (
              <div className="flex items-center mb-6" key={index}>
                  <LazyLoad>
                      <img src={require(`./assets/images/${item.icon}.svg`)} alt={item.title} className="mr-2.5" />
                  </LazyLoad>
                  <span>{item.title}</span>
              </div>
          ))}
          <div className="flex sm:flex-wrap items-center mb-6 border-y-2 py-5">
              <img src={ChampionPng} alt="chempion" className="mr-2.5" />
              <span>Более 50 отзывов с оценкой</span>
              <img src={RatingPng} alt="rating" className="ml-3.5 sm:ml-10" />
          </div>
      </>
  )
}
