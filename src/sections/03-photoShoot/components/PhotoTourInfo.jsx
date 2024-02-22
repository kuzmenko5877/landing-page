import { PhotoShootDetails } from "./PhotoShootDetalis";
export const PhotoTourInfo = () => {
  return (
      <div className="w-2/5 md:w-2/3 sm:w-full">
          <p className="text-4xl sm:text-xl text-[#37373F] font-medium mb-5">Фотосессия в вертолете</p>
          <h2 className="mb-5">
              Полет на вертолете это прекрасная возможность получить новые ощущения! А наш замечательный фотограф запечатлит лучшие моменты
          </h2>
          <PhotoShootDetails />
      </div>
  )
}
