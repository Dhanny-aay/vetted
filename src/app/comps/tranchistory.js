"use client"
import Image from "next/image";
import photo from "../images/photo.svg";
import call from "../images/call.svg";
import more from "../images/more.png";

const Tranchistory = ({ onButtonClick }) => {
    const data = [
        { id: '#790840', type: 'Receive token', date: '12-Jun- 2021', amount: '5 tokens', payment: 'Token wallet', status: 'Completed' },
        { id: '#790841', type: 'Transfer token', date: '12-Jun- 2021', amount: '20 tokens', payment: 'Token wallet', status: 'Completed' },
        { id: '#790842', type: 'Product type', date: '12-Jun- 2021', amount: '#30,000', payment: 'Card Payment', status: 'Completed' },
      ];
    return ( 
        <>
        <div className=" px-3 md:px-[40px] md:py-10 py-5 z-50 overflow-auto">
            <div className=" w-full bg-tr md:bg-[#d9d9d932] rounded-[20px] h-[120px] px-3 relative flex justify-center items-center">
                <div className=" px-3 py-2 w-full md:w-[90%] bg-white md:h-[250px] lg:h-[140px] z-50 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between absolute centered left-0 top-[40px]">
                    <span className=" w-[120px] h-[120px] rounded-[21px] mb-3 md:mb-16 bg-white shadow-lg flex justify-center items-center p-1">
                        <Image src={ photo } className="" alt="" />
                    </span>
                    <span className=" space-y-3 md:space-y-0">
                        <p className=" text-lg font-Opensans font-bold">Samuel Oladokun</p>
                        <p className=" font-Opensans text-xs font-normal text-[#828282]">Gender:<span className=" text-black font-Karla ml-5">Male</span></p>
                        <p className=" font-Opensans text-xs font-normal text-[#828282]">Loation:<span className=" text-black font-Karla ml-5">Lagos, Nigeria</span></p>
                        <p className=" font-Opensans text-xs font-normal text-[#828282]">Sew Order:<span className=" text-black font-Karla ml-5">Male</span></p>
                    </span>
                    <span className=" flex flex-row space-x-3 justify-center items-center">
                        <button className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] rounded-[50%] flex items-center justify-center bg-[#F6EEFF]">
                            <Image src={ call } className=" w-3 h-3 md:w-auto md:h-auto" alt="" />
                        </button>
                        <span className=" space-y-0 md:space-y-2 space-x-3 md:space-x-0 flex flex-row md:flex-col justify-center items-center">
                            <p className=" font-bold text-sm text-[#828282]">Phone Number</p>
                            <p className=" font-Karla text-sm text-black">+2348958484848</p>
                        </span>
                    </span>
                    <span className=" flex flex-row space-x-3 justify-center items-center">
                        <button className="md:w-[50px] md:h-[50px] w-[30px] h-[30px] rounded-[50%] flex items-center justify-center bg-[#F6EEFF]">
                            <Image src={ call } className="w-3 h-3 md:w-auto md:h-auto" alt="" />
                        </button>
                        <span className=" space-y-0 md:space-y-2 space-x-3 md:space-x-0 flex flex-row md:flex-col justify-center items-center">
                            <p className=" font-bold text-sm text-[#828282]">Email Address</p>
                            <p className=" font-Karla text-sm text-black">samuelolaleye@gmail.com</p>
                        </span>
                    </span>
                    <button onClick={onButtonClick} className=" w-[170px] h-[50px] md:block lg:hidden md:absolute bottom-2 right-2 text-white font-bold font-Karla text-sm italic rounded-[7px] bg-[#b7076bd2]">Apply to be a Vetted Tailor</button>

                </div>
            </div>
            <div className=" w-full md:px-10 mt-[220px] md:mt-[200px] overflow-auto">
                <span className=" flex flex-row w-full justify-between">
                    <p className=" font-Karla text-[#4F4F4F] text-lg font-normal">Transaction History</p>
                    <p className=" font-Karla text-[#4F4F4F] text-lg font-normal">Billing Address</p>
                    <p className=" font-Karla text-[#4F4F4F] text-lg font-normal">Account Settings</p>
                </span>
                <div className=" w-full bg-white mt-6 z-50 rounded-[20px] overflow-auto p-3">
                    <span className="flex flex-row justify-between items-center">
                        <input type="text" className=" w-[80%] border rounded-2xl h-[40px] px-3 py-2 font-Karla text-sm placeholder:font-Karla placeholder:text-sm" placeholder="Search Order" name="" id="" />
                        <select name="" className="w-[18%] border rounded-2xl h-[40px] px-3 py-2 font-Karla text-sm placeholder:font-Karla placeholder:text-sm" id="">
                            <option value="font-Karla text-sm">Actions</option>
                        </select>
                    </span>
                    <div className=" mt-3 overflow-auto">
                        <table className="table-auto w-full">
                            <thead>
                            <tr className=" border-b font-Karla text-[#8A9099] text-base font-normal">
                                <th className="px-4 py-[6px]">Transaction ID</th>
                                <th className="px-4 py-[6px]">Transaction Type</th>
                                <th className="px-4 py-[6px]">Date</th>
                                <th className="px-4 py-[6px]">Amount</th>
                                <th className="px-4 py-[6px]">Payment</th>
                                <th className="px-4 py-[6px]">Status</th>
                            </tr>
                            </thead>
                            <tbody className=" text-sm font-Karla">
                            {data.map((row) => (
                                <tr key={row.id}>
                                <td className="border-b px-4 py-[6px]">{row.id}</td>
                                <td className="border-b px-4 py-[6px]">{row.type}</td>
                                <td className="border-b px-4 py-[6px]">{row.date}</td>
                                <td className="border-b px-4 py-[6px]">{row.amount}</td>
                                <td className="border-b px-4 py-[6px]">{row.payment}</td>
                                <td className="border-b px-4 py-[6px]">
                                    <button className=" py-1 px-[6px] text-xs bg-[#49c96d2f] rounded-lg text-[#20A144]">{row.status}</button>
                                </td>
                                <td className="border-b">
                                    <Image src={ more } className=" h-4" alt="" />
                                </td>
                                </tr>
                                
                            ))}
                            </tbody>
                        </table>
                    </div>

                </div>
            </div>
        </div>
        
        </>
     );
}
 
export default Tranchistory;