const ShootingArray = [
    {
        id: 1,
        startTime: '15:00',
        finishTine: '18:00',
        price: 1500,
        places: 1
    },
    {
        id: 2,
        startTime: '19:00',
        finishTine: '22.00',
        price: '1500',
        places: 1
    }
]
export const ShootingTable = () => {
  return (
      <>
          { ShootingArray.map((item) => {
              return (
                  <div className="border-t-2 py-5 px-5" key={item.id}>
                      <div className="mb-7 py-7 px-5 sm:border-b-2">
                          <div className="flex justify-between items-center flex-wrap sm:mb-7">
                              <div className="mb-5">
                                  <p>{item.startTime} - {item.finishTine}</p>
                                  <p className="font-semibold">{item.price}$</p>
                                  <p>Осталось — {item.places} место</p>
                              </div>
                              <button className="border-solid border-2 border-amber-700 px-8 py-3 text-amber-700">Выбрать</button>
                          </div>
                      </div>
                  </div>
              )
          }) }
      </>
  )
}
