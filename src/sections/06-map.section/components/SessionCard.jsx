import { PhotographerCard } from "./PhotographerCard";

export const SessionCard = () => {
    return (
            <div className="absolute left-[300px] sm:hidden md:hidden lg:hidden xl:pt-1.5 top-[40px] xl:top-0 bg-white pl-7 pt-12" style={{ width: '420px', height: '469px' }}>
                <div className="flex items-center mb-10 xl:mb-8">
                    <div className="w-16 h-16 bg-[#FC9B09] rounded-full flex items-center justify-center mr-5">
                        <span className="text-4xl font-bold text-white">1</span>
                    </div>
                    <div>
                        <p className="font-medium">Где встречаемся?</p>
                        <p className="text-customColor">Киев</p>
                    </div>
                </div>
                <div className="flex items-center mb-10 xl:mb-8">
                    <div className="w-16 h-16 bg-[#FC9B09] rounded-full flex items-center justify-center mr-5">
                        <span className="text-4xl font-bold text-white">2</span>
                    </div>
                    <div>
                        <p className="font-medium">Время съемки</p>
                        <p className="text-customColor">3 часа</p>
                    </div>
                </div>
                <div className="flex items-center mb-10 xl:mb-8">
                    <div className="w-16 h-16 bg-[#FC9B09] rounded-full flex items-center justify-center mr-5">
                        <span className="text-4xl font-bold text-white">3</span>
                    </div>
                    <div>
                        <p className="font-medium">Мест осталось:</p>
                        <p className="text-customColor">2 места</p>
                    </div>
                </div>
                <PhotographerCard />
            </div>
    )
}
