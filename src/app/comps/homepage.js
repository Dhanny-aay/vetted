import Image from "next/image";
import fitted from "../images/fitted.svg";
import fist from "../images/hand_fist.svg";
import rock from "../images/hand_rock.png";
import hand_one_finger from "../images/hand_one_finger.svg";
import left_arr from "../images/left_arr.svg";
import bell from "../images/bell.svg";
import pen from "../images/pen.svg";
import link from "../images/link.svg";
import arr_down from "../images/arr_down.svg";
import measure from "../images/measure.svg";
const Homepage = () => {
    return ( 
        <>
        <div className="w-full h-[100vh] relative">
            {/* sidebar */}
            <div className=" w-[25%] h-[100vh] fixed top-0 left-0 bg-gradient-to-b from-[#00F0FFCC] from-0.5% via-[#5376FFCC] to-[#000CB6CC] px-6 py-4 flex">
                <div className=" flex flex-col mt-[32px] w-full items-center">
                    <div className=" flex flex-row w-full justify-center">
                        <span className=" w-[60px] h-[60px] bg-[#fff] rounded-[50px] flex items-center justify-center shadow-lg">
                            <button className=" w-[55px] h-[55px] rounded-[50%] bg-[#000CB6]">
                                <p className=" text-white text-2xl font-bold font-Opensans">SA</p>
                            </button>
                        </span>
                        <button className=" w-[32px] h-[32px] bg-[#fff] mt-[30px] rounded-[50%] flex justify-center shadow-md items-center">
                            <Image src={ pen } className="" alt="" />
                        </button>
                    </div>
                    <p className=" mt-4 text-lg font-Opensans font-normal text-white">Sikiru Agbaje</p>
                    <span className=" flex justify-center items-center space-x-3">
                        <p className=" mt-1 text-base font-Karla font-normal text-white">www.tailors.fitted.ng/sikiru</p>
                        <Image src={ link } className="" alt="" />
                    </span>
                    <p className=" mt-1 text-sm text-center font-Karla font-light text-white">Get measurements from any customer via this link</p>
                    <button className=" mt-1 w-[160px] h-[40px] flex justify-center border border-[#E8E9EB] rounded-[6px] items-center space-x-2">
                        <p className=" font-Karla text-sm font-normal text-white">Non -Vetted Tailor</p>
                        <Image src={ arr_down } alt="" />
                    </button>
                    <span className=" mt-6 flex flex-col space-y-5 mr-auto text-white">
                        <button className=" flex space-x-5">
                            <Image src={ measure } alt="" />
                            <p className=" font-Karla font-medium">Measurment</p>
                        </button>
                        <button className=" flex space-x-5">
                            <Image src={ measure } alt="" />
                            <p className=" font-Karla font-medium">Orders</p>
                        </button>
                        <button className=" flex space-x-5">
                            <Image src={ measure } alt="" />
                            <p className=" font-Karla font-medium">Products</p>
                        </button>
                        <button className=" flex space-x-5">
                            <Image src={ measure } alt="" />
                            <p className=" font-Karla font-medium">Customers</p>
                        </button>
                        <button className=" flex space-x-5">
                            <Image src={ measure } alt="" />
                            <p className=" font-Karla font-medium">My Profile</p>
                        </button>
                        <button className=" flex space-x-5">
                            <Image src={ measure } alt="" />
                            <p className=" font-Karla font-medium">Measurment</p>
                        </button>
                    </span>
                </div>
            </div>
            {/* navbar */}
            <div className=" w-[75%] h-[10vh] z-50 shadow-md shadow-[#091E420D] fixed top-0 right-0 bg-[#fff] px-16 flex justify-start items-center">
                <Image src={ left_arr } className="" alt="" />
                <p className=" font-Opensans text-xl ml-[64px] font-normal">My Profile</p>
                <span className=" flex ml-auto ">
                    <Image src={ bell } className=" mr-[64px]" alt="" />
                    <span className=" w-[50px] h-[50px] bg-[#7FCDFF] rounded-[50px] flex items-center justify-center">
                        <button className=" w-[40px] h-[40px] rounded-[50%] bg-[#000CB6]">
                            <p className=" text-white text-lg font-Opensans">SO</p>
                        </button>
                    </span>
                </span> 
            </div>
        </div>
        <div className=" w-[75%] h-[90vh] bg-transparent fixed top-[10vh] right-0 ">
           
        </div>
        <Image src={ fist } className=" absolute bottom-0 left-0" alt="" />
        <Image src={ rock } className=" absolute bottom-0 right-0" alt="" />
        <Image src={ hand_one_finger } className=" top-0 absolute z-10 right-0" alt="" />
        <Image src={ fitted } className=" absolute top-4 left-4" alt="" />
        </>
     );
}
 
export default Homepage;