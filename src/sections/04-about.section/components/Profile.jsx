import EllipsePng from "../assets/images/Ellipse.png";
import HeartSvg from "../assets/images/heart.svg";

export const Profile = () => {
  return (
      <div className="w-72 pt-5 relative">
          <img src={ EllipsePng } alt="Картинка" className="block mx-auto" />
          <img src={ HeartSvg } alt="Картинка" className="absolute top-0 right-0" />
          <div className="mx-auto text-center">
              <p>Марина Иванова</p>
              <p>Фотограф</p>
              <span className="text-blue-500">Показать больше информации о фотографе</span>
          </div>
      </div>
  )
}
