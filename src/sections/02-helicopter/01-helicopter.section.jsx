import { useState } from "react";
import LazyLoad from "react-lazy-load";
import Reservation from "./components/Reservation";
import HelicopterImg from './assets/images/helicopter.jpg';
import HelicopterMobilePng from './assets/images/helicopterMobile.png';
import RectanglePng from './assets/images/Rectangle.png';
const HelicopterSection = () => {
    const [open, setOpen] = useState(false);
    return (
      <section id="helicopter" className="mb-[30px]">
          <div className="relative">
              <LazyLoad>
                  <img
                      srcSet={`${HelicopterMobilePng} 768w, ${HelicopterImg} 1280w`}
                      alt="Изображение вертолета"
                      className="h-screen"
                      width={1914}
                  />
              </LazyLoad>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <h1 className="text-white text-4xl font-semibold sm:text-2xl">
                      Эксклюзивная <span className="text-yellow-500">фотосессия</span> при полете <br/> на вертолете</h1>
                  <div className="relative inline-block mt-7">
                      <img src={ RectanglePng } width={ 223 } height={ 99 } alt="Фото" />
                      <div className="absolute inset-0 left-4 top-2.5">
                          <h1 className="text-white text-xl sm:text-lg">Стоимость</h1>
                          <span className="text-4xl text-white font-extrabold sm:text-3xl">1500$</span>
                          <div className="absolute top-0 right-5">
                              <svg xmlns="http://www.w3.org/2000/svg" width="82" height="82" viewBox="0 0 82 82" fill="none">
                                  <g filter="url(#filter0_dd_0_255)">
                                      <circle cx="41" cy="37" r="25.5" stroke="white"/>
                                  </g>
                                  <text x="50%" y="50%" textAnchor="middle" alignmentBaseline="middle" fill="white" className="text-3xl font-extrabold">
                                      %
                                  </text>
                                  <defs>
                                      <filter id="filter0_dd_0_255" x="0" y="0" width="82" height="82" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                          <feOffset dy="4"/>
                                          <feGaussianBlur stdDeviation="2"/>
                                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                                          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_255"/>
                                          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                                          <feOffset dy="4"/>
                                          <feGaussianBlur stdDeviation="7.5"/>
                                          <feColorMatrix type="matrix" values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"/>
                                          <feBlend mode="normal" in2="effect1_dropShadow_0_255" result="effect2_dropShadow_0_255"/>
                                          <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_255" result="shape"/>
                                      </filter>
                                  </defs>
                              </svg>
                          </div>
                      </div>
                  </div>
                  <div>
                      <button className="text-white text-lg font-extrabold border-3 rounded border-white flex w-[268px] h-[68px] items-center justify-around sm:text-sm" onClick={() => setOpen(true)}>Забронировать место</button>
                  </div>
              </div>
              { open && <Reservation setOpen={setOpen} /> }
          </div>
      </section>
  )
}

export default HelicopterSection;
