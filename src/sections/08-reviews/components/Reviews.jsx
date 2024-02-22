import { useState } from "react";
import { ReviewHeader } from "./ReviewHeader";
import { ReviewCard } from "./ReviewCard";
import { ShowMoreButton } from "./ShowMoreButton";

const reviews = [
    {
        id: 1,
        name: 'Валерия Антонова',
        position: 'Арт-директор',
        text: 'Хотим выразить огромную благодарность вашей компании! Получили море ощущений, все прошло просто замечательно. Фотки получились великолепные, отдельное спасибо фотографу!',
        date: '27 Апреля, 2019г.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Виталий Петров',
        position: 'Фотограф',
        text: 'Восторг! :) Очень понравилось :) Захватили последний теплый, солнечный октябрьский день :) Впечатлило всё: сам вертолет, взлет, полёт, приземление. \n' + 'Организация полёта отличная. Спасибо!',
        date: '19 Апреля, 2019г.'
    },
    {
        id: 3,
        name: 'Виталий Петров',
        position: 'Фотограф',
        text: 'Восторг! :) Очень понравилось :) Захватили последний теплый, солнечный октябрьский день :) Впечатлило всё: сам вертолет, взлет, полёт, приземление. \n' + 'Организация полёта отличная. Спасибо!',
        date: '19 Апреля, 2019г.'
    },
    {
        id: 3,
        name: 'Валерия Антонова',
        position: 'Арт-директор',
        text: 'Хотим выразить огромную благодарность вашей компании! Получили море ощущений, все прошло просто замечательно. Фотки получились великолепные, отдельное спасибо фотографу!',
        date: '27 Апреля, 2019г.',
        rating: 5,
    },
];
export const Reviews = () => {
    const [activeReview, setActiveReview] = useState(false);
    return (
        <div>
            <div className="flex flex-wrap max-w-605px sm:px-4">
                <ReviewHeader />
                <ReviewCard activeReview={activeReview} reviews={reviews} />
            </div>
            {!activeReview && <ShowMoreButton setActiveReview={setActiveReview} reviewsLenght={reviews.length} /> }
        </div>
    )
}
