"use client"
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
import order from "../images/order.svg";
import product from "../images/product.svg";
import customer from "../images/customer.svg";
import user from "../images/user.svg";
import logout from "../images/logout.svg";
import menu from "../images/menu.svg";
import Tranchistory from "./tranchistory";
import Vettedapp from "./vettedapp";
import { useState } from "react";
import Success from "./success";
const Homepage = () => {
    const [applied, setApplied] = useState(false);
    const [ transactionHistory, setTransactionHistory ] = useState(true);
    const [ vettedApplication, setVettedApplication ] = useState(false); 
    const [sucessStat, setSucessStat] = useState(false);

    const btnClick = ()=>{
       setTransactionHistory(false);
        setVettedApplication(true);
         setApplied(false);
    }
    const returnClick = ()=>{
       setTransactionHistory(true);
        setVettedApplication(false) ;
        setSucessStat(false);
    }
    const sucTrue =()=>{
        setSucessStat(true);
        setTransactionHistory(false);
        setVettedApplication(false) ;

    }
    return ( 
        <>
        <div className="w-full h-[100vh] relative">
            {/* sidebar */}
            <div className=" hidden w-[25%] h-[100vh] fixed top-0 left-0 bg-gradient-to-b from-[#00F0FFCC] from-0.5% via-[#5376FFCC] to-[#000CB6CC] px-6 py-4 lg:flex">
                <div className=" flex flex-col w-full mt-[32px] z-50 items-center">
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
                    <button onClick={()=>{setApplied(true)}} className=" mt-1 w-[160px] h-[40px] flex justify-center border border-[#E8E9EB] rounded-[6px] items-center space-x-2">
                        <p className=" font-Karla text-sm font-normal text-white">Non -Vetted Tailor</p>
                        <Image src={ arr_down } alt="" />
                    </button>
                    { applied && <button onClick={btnClick} className=" -mt-6 bg-white w-[160px] h-[40px] text-black flex justify-center border border-[#E8E9EB] rounded-[6px] items-center space-x-2 ml-12 font-Karla text-xs font-normal">Apply to be a VETTED Tailor</button>}
                    <span className=" mt-6 flex flex-col space-y-5 mr-auto z-50 text-white">
                        <button className=" flex space-x-5">
                            <Image src={ measure } alt="" />
                            <p className=" font-Karla font-medium">Measurment</p>
                        </button>
                        <button className=" flex space-x-5">
                            <Image src={ order } alt="" />
                            <p className=" font-Karla font-medium">Orders</p>
                        </button>
                        <button className=" flex space-x-5">
                            <Image src={ product } alt="" />
                            <p className=" font-Karla font-medium">Products</p>
                        </button>
                        <button className=" flex space-x-5">
                            <Image src={ customer } alt="" />
                            <p className=" font-Karla font-medium">Customers</p>
                        </button>
                        <button className=" flex space-x-5 bg-white text-black -ml-6  w-[190px] rounded-r-[50px]">
                            <Image src={ user } className=" ml-6" alt="" />
                            <p className=" font-Karla font-medium">My Profile</p>
                        </button>
                        <button className=" flex space-x-5">
                            <Image src={ logout } alt="" />
                            <p className=" font-Karla font-medium">logout</p>
                        </button>
                    </span>
                </div>
            </div>
            {/* navbar */}
            <div className=" lg:w-[75%] w-[100%] h-[10vh] z-50 shadow-md shadow-[#091E420D] fixed top-0 right-0 bg-[#fff] md:px-16 px-5 flex justify-between md:justify-start items-center">
                <Image src={ left_arr } className="hidden md:block" alt="" />
                <p className=" font-Opensans text-xl md:ml-[64px] font-normal">My Profile</p>
                <span className="hidden md:flex ml-auto ">
                    <Image src={ bell } className=" mr-[64px]" alt="" />
                    <span className=" w-[50px] h-[50px] bg-[#7FCDFF] rounded-[50px] flex items-center justify-center">
                        <button className=" w-[40px] h-[40px] rounded-[50%] bg-[#000CB6]">
                            <p className=" text-white text-lg font-Opensans">SO</p>
                        </button>
                    </span>
                </span> 
                <Image src={ menu } className="block md:hidden" alt="" />
            </div>
        </div>
        {/* body */}
        <div className=" w-full lg:w-[75%] lg:h-[90vh] bg-transparent h-full fixed md:top-[10vh] top-[5vh] right-0  overflow-y-auto">
           { transactionHistory && <Tranchistory onButtonClick={btnClick}/> }
           { vettedApplication && <Vettedapp onButtonClick={sucTrue}/>}
           { sucessStat && <Success onButtonClick={returnClick}/>}
        </div>
        <Image src={ fist } className=" hidden md:block absolute bottom-0 left-0" alt="" />
        <Image src={ rock } className="hidden md:block  absolute bottom-0 -z-10 right-0" alt="" />
        <Image src={ hand_one_finger } className="hidden md:block top-0 absolute -z-10 right-0" alt="" />
        <Image src={ fitted } className="hidden md:block absolute top-4 left-4" alt="" />
        </>
     );
}
 
export default Homepage;