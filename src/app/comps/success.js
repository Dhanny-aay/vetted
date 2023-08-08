"use client"
import Image from "next/image";
import success from '../images/success.svg';
const Success = ({onButtonClick}) => {
    return ( 
        <>
        <div className=" px-3 md:px-[40px] md:py-10 py-5 z-50 overflow-auto">
            <div className="  w-full bg-white rounded-3xl p-3 h-[70vh] flex flex-col justify-center space-y-2 items-center md:p-6 z-50">
                <Image src={ success } className=" w-[20%]" alt="" />
                <p className=" font-bold text-lg font-Opensans">Yayy!!! 🎉</p>
                <p className=" text-center md:w-[350px] font-Karla font-normal text-sm">Your application to become a vetted tailor has been sent, a Fitted Agent will get in touch with you regard the next steps. Goodluck!</p>
                <button onClick={onButtonClick} className=" w-[170px] h-[50px] text-white font-bold font-Karla text-sm italic rounded-[7px] bg-[#b7076bd2]">
                        <p>Return to Dashboard</p>
                    </button>
            </div>
        </div>
        </>
     );
}
 
export default Success;
<>
</>