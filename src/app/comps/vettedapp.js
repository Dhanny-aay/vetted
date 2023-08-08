"use client"
import Image from "next/image";
import photo from "../images/photo.svg";
import { useState, useEffect } from "react";
const Vettedapp = () => {
    const [bankdata, setbankData] = useState([]);
    const [selectedBank, setSelectedBank] = useState('');
    const [selectedBankCode, setSelectedBankCode] = useState('');
    const [accountNumber, setAccountNumber] = useState('');

    // fetch bank data

    useEffect(()=>{
        async function getBank(){
        try{
            const response = await fetch('https://fitted-portal-api.herokuapp.com/api/v1/bank/banks');
            const jsonData = await response.json();
            setbankData(jsonData.data);
        }
        catch(error){
            console.log("Error", error);
        }
        }

        getBank();
    }, [])

     // get bank names 
     const bankNamesWithCodes = bankdata.map((bank) => ({
        name: bank.name,
        code: bank.code 
    }));


    // getbankcode
    const handleBankChange = (e) => {
        const selectedBankName = e.target.value;
        const selectedBankObject = bankNamesWithCodes.find((bank) => bank.name === selectedBankName);
    
        if (selectedBankObject) {
          setSelectedBank(selectedBankName);
          setSelectedBankCode(selectedBankObject.code);
        } else {
          setSelectedBank('');
          setSelectedBankCode('');
        }
      };

      const resolveAccountNumber = async () => {
        try {
          const response = await fetch('https://fitted-portal-api.herokuapp.com/api/v1/bank/resolveAccount', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              bankCode: selectedBankCode,
              accountNo: accountNumber
            })
          });
    
          const resolvedData = await response.json();
          console.log('Resolved account data:', resolvedData);
          // Do something with the resolved data if needed
        } catch (error) {
          console.error('Error resolving account:', error);
        }
      };
    

   

    console.log(selectedBank)
    console.log(selectedBankCode)
    console.log(accountNumber);
    return ( 
        <>
        <div className="px-[40px] py-10 z-50 overflow-y-auto">
            <div className=" w-full bg-white rounded-3xl p-6 z-50">
            <p className=" text-center text-xl font-bold font-Opensans text-[#212135]">Vetted Tailor Application</p>
            <p className=" text-center w-[400px] block mx-auto text-[#4F4F4F] font-Karla text-sm">One step closer to the goal! please provide us with your Bank details with which you will be recieving payment.</p>
            <div className=" mt-8 w-full flex justify-around items-center">
                <div className=" w-[48%] flex flex-col space-y-2">
                    <span className=" w-[120px] h-[120px] rounded-[21px] mb-8 bg-white shadow-lg flex justify-center items-center p-1">
                        <Image src={ photo } className="" alt="" />
                    </span>
                    <p className=" font-bold font-Karla text-base text-[#828282] w-full text-left">Name:<span className=" text-[#3F434A]">Samuel Oladokun</span></p>
                    <p className=" font-bold font-Karla text-base text-[#828282] ">Gender:<span className=" text-[#3F434A]">Male</span></p>
                    <p className=" font-bold font-Karla text-base text-[#828282] ">Name:<span className=" text-[#3F434A]">Both</span></p>
                    <p className=" font-bold font-Karla text-base text-[#828282] ">Sew Gender:<span className=" text-[#3F434A]">Samuel Oladokun</span></p>
                    <p className=" font-bold font-Karla text-base text-[#828282] ">Phone Number:<span className=" text-[#3F434A]">08137901372</span></p>
                    <p className=" font-bold font-Karla text-base text-[#828282] ">Email Address:<span className=" text-[#3F434A]">biola@fitted.ng</span></p>
                    <p className=" font-bold font-Karla text-base text-[#828282] ">Location:<span className=" text-[#3F434A]">Lagos, Nigeria</span></p>
                </div>
                <div className=" w-[48%] flex flex-col items-start space-y-6">
                    <div className=" w-full flex justify-between">
                        <label className=" w-[48%] text-base text-[#828282] font-Karla">
                            Gender you Sew for?
                            <select type="text" className=" w-full  h-[40px] border rounded text-[#828282] font-Karla text-sm px-3 py-2" name="" id="" >
                                <option value=" text-[#828282] font-Karla text-sm">Pleae Select</option>
                                <option value=" text-[#828282] font-Karla text-sm">Male</option>
                                <option value=" text-[#828282] font-Karla text-sm">Female</option>
                                <option value=" text-[#828282] font-Karla text-sm">Both</option>
                            </select>
                        </label>
                        <label className=" w-[48%] text-base text-[#828282] font-Karla">
                        Styles you Sew?
                            <select type="text" className=" w-full  h-[40px] border rounded text-[#828282] font-Karla text-sm px-3 py-2" name="" id="" >
                                <option value=" text-[#828282] font-Karla text-sm">Pleae Select</option>
                                <option value=" text-[#828282] font-Karla text-sm">Some</option>
                                <option value=" text-[#828282] font-Karla text-sm">All</option>
                                <option value=" text-[#828282] font-Karla text-sm">Few</option>
                            </select>
                        </label>
                    </div>
                    <div className=" w-full">
                        <label className=" w-full text-base text-[#828282] font-Karla">
                        Bank Name
                            <select type="text" className=" w-full h-[40px] border rounded text-[#828282] font-Karla text-sm placeholder:text-sm px-3 py-2" name="" id="" value={selectedBank} onChange={handleBankChange} >
                                <option value="">Please select your bank</option>
                                {bankNamesWithCodes.map((bank) => (
                                    <option key={bank.code} value={bank.name}>
                                    {bank.name}
                                    </option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div className=" w-full">
                        <label className=" w-full text-base text-[#828282] font-Karla">
                        Account Number
                            <input type="tel" onChange={(e) => setAccountNumber(e.target.value)}  placeholder="Please input your account number" className=" w-full h-[40px] border rounded text-[#828282] font-Karla text-sm placeholder:text-sm px-3 py-2" name="" id="" />
                        </label>
                    </div>
                    <div className=" w-full">
                        <label className=" w-full text-base text-[#828282] font-Karla">
                        Account Name
                            <input type="text" className=" w-full h-[40px] border rounded text-[#828282] font-Karla text-sm placeholder:text-sm px-3 py-2" name="" id="" />
                        </label>
                    </div>
                    <button onClick={ resolveAccountNumber } className=" w-[170px] h-[50px] text-white font-bold font-Karla text-sm italic rounded-[7px] bg-[#b7076bd2]">Submit Application</button>
                </div>
            </div>
            </div>
        </div>
        </>
     );
}
 
export default Vettedapp; 