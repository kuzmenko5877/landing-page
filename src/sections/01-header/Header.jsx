import React from 'react';
import ProfileSvg from './assets/images/profile.svg';

const Header = () => {
    return (
        <header className="flex items-center m-auto max-w-6xl sm:max-w-3xl h-[6.25rem] sm:justify-around md:justify-around lg:justify-between">
            <div className="mr-9">
                <svg xmlns="http://www.w3.org/2000/svg" width="129" height="23" viewBox="0 0 129 23" fill="none">
                    <g>
                        <path
                            d="M0.496094 0.1521V23.0001H3.53609V12.5361H15.5681V23.0001H18.6081V0.1521H15.5681V9.9761H3.53609V0.1521H0.496094ZM23.5899 0.1521V23.0001H39.4619V20.4401H26.6299V12.5361H38.5019V9.9761H26.6299V2.7121H39.3659V0.1521H23.5899ZM43.1524 0.1521V23.0001H58.2883V20.4401H46.1924V0.1521H43.1524ZM66.8111 13.6561L75.5471 0.1521H72.0911L65.4031 11.0321L58.5551 0.1521H54.9391L63.7711 13.6561V23.0001H66.8111V13.6561ZM78.1211 0.1521V23.0001H81.1611V12.5361H91.6571V9.9761H81.1611V2.7121H93.1291V0.1521H78.1211ZM96.4961 0.1521V23.0001H111.632V20.4401H99.5361V0.1521H96.4961ZM120.155 13.6561L128.891 0.1521H125.435L118.747 11.0321L111.899 0.1521H108.283L117.115 13.6561V23.0001H120.155V13.6561Z"
                            fill="black"
                        />
                    </g>
                    <defs>
                        <clipPath id="clip0_2_2">
                            <rect width="129" height="23" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div className="phone-number sm:hidden">
                <span className="text-1xl text-gray-400">Телефон:</span>
                <a href="tel:+380 50 123 45 67" className="text-gray-700">
                    +380 50 123 45 67
                </a>
            </div>
            <div className="hidden sm:block">
                <img src={ProfileSvg} alt="Профиль" width="20" height="20" />
            </div>
        </header>
    );
};

export default Header;
