import LazyLoad from "react-lazy-load";
import PhotoPng from "./assets/images/photo.png";
import PauseSvg from "./assets/images/pause.svg";

export const PhotoTourMedia = () => {
  return (
      <div className="relative">
          <LazyLoad>
              <img src={PhotoPng} alt="Фото" className="h-full" />
          </LazyLoad>
          <LazyLoad>
              <img src={PauseSvg} alt="Пауза"  loading="eager" className="absolute right-12 bottom-12" width="16" height="23"/>
          </LazyLoad>
      </div>
  )
}
