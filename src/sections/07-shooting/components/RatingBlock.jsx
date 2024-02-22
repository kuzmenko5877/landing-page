import ChampionPng from "../../03-photoShoot/components/assets/images/Chempion.svg";
import RatingPng from "../../03-photoShoot/components/assets/images/rating.png";

export const RatingBlock = () => {
  return (
      <div className="flex items-end pl-5 pb-7 pt-7 border-t-2">
          <img src={ChampionPng} alt="chempion" className="mr-2.5" />
          <div className="sm: flex items-center flex-wrap">
              <span className="sm:text-sm">Более 50 отзывов с оценкой</span>
              <img src={RatingPng} alt="rating" className="ml-3.5 sm:ml-0 h-[17px]" />
          </div>
      </div>
  )
}
