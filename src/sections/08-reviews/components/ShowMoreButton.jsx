export const ShowMoreButton = ({ setActiveReview, reviewsLenght }) => {
  return (
          <div className="flex justify-center">
              <button
                  className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                  onClick={() => setActiveReview(true)}
              >
                  Показать все отзывы {reviewsLenght - 2}
              </button>
          </div>
  )
}
