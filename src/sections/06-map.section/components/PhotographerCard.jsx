import EllipsePng from "../assets/images/Ellipse.png";

export const PhotographerCard = () => {
  return (
      <div className="flex items-center">
          <img src={ EllipsePng } alt="фото" width="64" height="64" className="mr-5"/>
          <div>
              <p className="font-medium">Мария Иванова</p>
              <p className="text-customColor">Фотограф</p>
              <a href="#" className="text-blue-500 text-sm font-medium">Показать больше информации</a>
          </div>
      </div>
  )
}
