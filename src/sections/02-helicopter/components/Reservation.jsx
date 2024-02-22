import { useEffect, useRef } from "react";

const centerStyle = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    zIndex: 9999,
    width:615,
    height:887,
};
export const Reservation = ({ setOpen }) => {
    const sectionRef = useRef(null);
    const handleClickOutside = (event) => {
        if (sectionRef.current && !sectionRef.current.contains(event.target)) {
            setOpen(false);
        }
    };
    useEffect(() => {
        const handleMouseDown = (event) => {
            handleClickOutside(event);
        };
        document.addEventListener("mousedown", handleMouseDown);

        return () => {
            document.removeEventListener("mousedown", handleMouseDown);
        };
    }, [setOpen]);

    return (
        <div style={ centerStyle } ref={sectionRef}>
            <div className="bg-white px-[98px] py-[61px] rounded-md">
                <h1 className="text-center font-medium text-[22px] mb-[31px]">Бронирование</h1>
                <form>
                       <label>
                           <p className="font-medium mb-[10px]">Дата<span className="text-red-700">*</span></p>
                           <div className="relative">
                               <input placeholder="14.09.2019" className="w-[420px] h-[44px] border border-gray-300 pl-5 mb-[10px]" type="text" name="name" />
                               <svg xmlns="http://www.w3.org/2000/svg" width="27" height="27" viewBox="0 0 27 27" fill="none" className="absolute top-2 right-2">
                                   <path fillRule="evenodd" clipRule="evenodd" d="M19.6714 7.47139H17.7892V6.60343C17.7892 6.48885 17.7437 6.37895 17.6626 6.29793C17.5816 6.2169 17.4717 6.17139 17.3572 6.17139C17.2426 6.17139 17.1327 6.2169 17.0517 6.29793C16.9707 6.37895 16.9251 6.48885 16.9251 6.60343V7.47139H14.3178V6.60343C14.3178 6.48885 14.2722 6.37895 14.1912 6.29793C14.1102 6.2169 14.0003 6.17139 13.8857 6.17139C13.7712 6.17139 13.6613 6.2169 13.5802 6.29793C13.4992 6.37895 13.4537 6.48885 13.4537 6.60343V7.47139H10.8463V6.60343C10.8463 6.48885 10.8008 6.37895 10.7198 6.29793C10.6388 6.2169 10.5289 6.17139 10.4143 6.17139C10.2997 6.17139 10.1898 6.2169 10.1088 6.29793C10.0278 6.37895 9.98225 6.48885 9.98225 6.60343V7.47139H8.10001C7.79312 7.47139 7.49888 7.59332 7.28188 7.81035C7.06487 8.02738 6.94287 8.32173 6.94287 8.62866V18.8998C6.94287 19.2068 7.06487 19.5011 7.28188 19.7181C7.49888 19.9352 7.79312 20.0571 8.10001 20.0571H19.6714C19.9783 20.0571 20.2726 19.9352 20.4896 19.7181C20.7066 19.5011 20.8286 19.2068 20.8286 18.8998V8.62866C20.8286 8.32173 20.7066 8.02738 20.4896 7.81035C20.2726 7.59332 19.9783 7.47139 19.6714 7.47139ZM19.957 18.8998C19.9576 18.9377 19.9507 18.9752 19.9366 19.0104C19.9225 19.0455 19.9014 19.0775 19.8748 19.1044C19.8483 19.1313 19.8167 19.1527 19.7818 19.1673C19.7469 19.1818 19.7093 19.1893 19.6714 19.1891H8.10001C8.02281 19.1896 7.94855 19.1593 7.8936 19.1051C7.83864 19.0509 7.80757 18.977 7.80696 18.8998V8.62866C7.80757 8.55145 7.83864 8.47763 7.8936 8.42339C7.94855 8.36916 8.02281 8.33893 8.10001 8.33934H9.98225V9.20729C9.98225 9.32188 10.0278 9.43177 10.1088 9.5128C10.1898 9.59382 10.2997 9.63934 10.4143 9.63934C10.5289 9.63934 10.6388 9.59382 10.7198 9.5128C10.8008 9.43177 10.8463 9.32188 10.8463 9.20729V8.33934H13.4537V9.20729C13.4537 9.32188 13.4992 9.43177 13.5802 9.5128C13.6613 9.59382 13.7712 9.63934 13.8857 9.63934C14.0003 9.63934 14.1102 9.59382 14.1912 9.5128C14.2722 9.43177 14.3178 9.32188 14.3178 9.20729V8.33934H16.9251V9.20729C16.9251 9.32188 16.9707 9.43177 17.0517 9.5128C17.1327 9.59382 17.2426 9.63934 17.3572 9.63934C17.4717 9.63934 17.5816 9.59382 17.6626 9.5128C17.7437 9.43177 17.7892 9.32188 17.7892 9.20729V8.33934H19.6714C19.7093 8.33923 19.7469 8.34667 19.7818 8.36122C19.8167 8.37577 19.8483 8.39714 19.8748 8.42408C19.9014 8.45102 19.9225 8.48299 19.9366 8.51812C19.9507 8.55324 19.9576 8.59082 19.957 8.62866V18.8998ZM9.98225 11.3776H11.718V12.6791H9.98225V11.3776ZM9.98225 13.5471H11.718V14.8494H9.98225V13.5471ZM9.98225 15.7173H11.718V17.0189H9.98225V15.7173ZM13.0141 15.7173H14.7498V17.0189H13.0141V15.7173ZM13.0141 13.5471H14.7498V14.8494H13.0141V13.5471ZM13.0141 11.3776H14.7498V12.6791H13.0141V11.3776ZM16.0535 15.7173H17.7892V17.0189H16.0535V15.7173ZM16.0535 13.5471H17.7892V14.8494H16.0535V13.5471ZM16.0535 11.3776H17.7892V12.6791H16.0535V11.3776Z" fill="#FC9B09"/>
                                   <rect x="0.25" y="0.25" width="26.5" height="26.5" rx="2.75" stroke="#C4C4C4" strokeWidth="0.5"/>
                               </svg>
                           </div>
                       </label>
                    <label>
                        <p className="font-medium mb-[10px]">Email<span className="text-red-700">*</span></p>
                        <input placeholder="Электронная почта" className="w-[420px] h-[44px] border border-gray-300 pl-5 mb-[10px]" type="text" name="Email" />
                    </label>
                    <label>
                        <p className="font-medium mb-[10px]">Имя<span className="text-red-700">*</span></p>
                        <input placeholder="Имя" className="w-[420px] h-[44px] border border-gray-300 pl-5 mb-[10px]" type="text" name="name" />
                    </label>
                    <label>
                        <p className="font-medium mb-[10px]">Фамилия<span className="text-red-700">*</span></p>
                        <input placeholder="Громов" className="w-[420px] h-[44px] border border-gray-300 pl-5 mb-[10px]" type="text" name="surname" />
                    </label>
                    <label>
                        <p className="font-medium mb-[10px]">Телефон<span className="text-red-700">*</span></p>
                        <input placeholder="+380 (97) 999-99-99" className="w-[420px] h-[44px] border border-gray-300 pl-5 mb-[10px]" type="text" name="phone" />
                    </label>
                    <label>
                        <p className="font-medium mb-[10px]">Данные карты*<span className="text-red-700">*</span></p>
                        <input placeholder="Номер карты" className="w-[420px] h-[44px] border border-gray-300 pl-5" type="text" name="card" />
                        <div className="flex mb-[34px]">
                            <input placeholder="Срок действия" className="w-[420px] h-[44px] border border-gray-300 pl-5" type="text" name="date" />
                            <input placeholder="CSV" className="w-[420px] h-[44px] border border-gray-300 pl-5" type="text" name="security" />
                        </div>
                    </label>
                    <div className="flex items-baseline	mb-[23px]">
                        <input type="checkbox" id="scales" name="scales" className="mr-[2px]" />
                        <label for="scales" className="text-[#37373F] max-w-">Я согласен с пользовательским
                            <br/>  соглашением и публичной офертой</label>
                    </div>
                    <button className="text-white font-medium bg-[#FC9B09] rounded border-3 border-white px-[129px] pt-[27px] pb-[27px]">Забронировать</button>
                </form>
            </div>
            <button onClick={() => setOpen(false)}>
                <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none" className="absolute top-[23px] right-[23px]">
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.7593 0.252912C19.6844 0.177989 19.5958 0.118568 19.498 0.0780193C19.4002 0.0374703 19.2953 0.0166016 19.1895 0.0166016C19.0836 0.0166016 18.9787 0.0374703 18.8809 0.0780193C18.7831 0.118568 18.6945 0.177989 18.6196 0.252912L0.239746 18.652C0.163854 18.7265 0.103165 18.8154 0.0620117 18.9135C0.0208584 19.0116 0 19.117 0 19.2234C0 19.3298 0.0208584 19.4351 0.0620117 19.5333C0.103165 19.6314 0.163854 19.7203 0.239746 19.7948C0.313773 19.8709 0.402023 19.9311 0.5 19.9719C0.597977 20.0127 0.703467 20.0331 0.80957 20.032C1.02325 20.0306 1.2277 19.9454 1.37939 19.7948L19.7593 1.39679C19.8353 1.32224 19.8958 1.23326 19.937 1.13505C19.9783 1.03685 19.9995 0.93138 19.9995 0.82485C19.9995 0.718321 19.9783 0.612871 19.937 0.514662C19.8958 0.416453 19.8353 0.327457 19.7593 0.252912ZM19.7593 18.652L1.37939 0.252912C1.30434 0.178001 1.21517 0.118623 1.11719 0.0781567C1.0192 0.0376908 0.914592 0.0169356 0.808594 0.0170749C0.702596 0.0172143 0.597388 0.0382426 0.499512 0.078966C0.401636 0.119689 0.312646 0.179316 0.237793 0.254423C0.162939 0.329531 0.103912 0.418651 0.0634766 0.516708C0.0230415 0.614766 0.00230209 0.71984 0.00244141 0.825919C0.00258072 0.931998 0.0232724 1.03701 0.0639648 1.13496C0.104657 1.23291 0.164696 1.32188 0.239746 1.39679L18.6196 19.7948C18.694 19.8724 18.7832 19.9344 18.8818 19.9771C18.9805 20.0198 19.0864 20.0423 19.1938 20.0434C19.3013 20.0444 19.4079 20.024 19.5073 19.9833C19.6068 19.9426 19.697 19.8825 19.7729 19.8064C19.8489 19.7303 19.9087 19.6398 19.9492 19.5401C19.9897 19.4405 20.0101 19.3338 20.0088 19.2263C20.0075 19.1188 19.9847 19.0126 19.9419 18.9139C19.8991 18.8153 19.837 18.7263 19.7593 18.652Z" fill="#B3B3B3"/>
                </svg>
            </button>
        </div>
    );
}

export default Reservation;
