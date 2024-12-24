import React from 'react'
import { Link } from "react-router-dom"



function Navbar() {
  return (
    <div className='h-[94px] bg-[#FFF7E2] w-full flex justify-center items-center p-[23px]'>
        <div className='flex justify-between items-center w-full'>
            <div className='flex gap-[80px] items-center'>
                <div>
                    <img 
                        width="259px"
                        height="49px"
                    src="https://s3-alpha-sig.figma.com/img/503f/f9c0/bff6fd7d5705b1c51f69ea8e8c5ac172?Expires=1736121600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Usof-klF5iDTRyeJN2Oqv8rUa7UuCFXlgimOnmzfKS1eYO-JoMYFxt7bE9jZXIoc7W3vAtNzx1Fl5ft2bvO2BYg5K182OHm3IXBtCbIstLJvznng90H5TbMbFPp8Vv8Uef0VmxvJfqTULiBzb~EncmwcHLE71ExtC0FGy9JhsuWBotbUjFf~kbF~VI062omrP2cP~NdE0iS6p9u4b8E5yOk-azVI4tMBPljctDv~ZdqZqt6TSzxflvA3nXHtrtowKdZmTthYLlWFBB27SO-WK5pWhhp1uBQrB0GSwg5-hkMnpX2ZfBWsU9ZLXOUJlNhMwjndoErTflgcabxMnG6qnA__" alt="" />
                </div>
                <ul className='flex gap-[40px]'>
                    <Link to={"/"} className='' >
                        <li className=' cursor-pointer text-[20px] leading-[28px] font-["DINPro]'>Home</li>
                    </Link>
                    <Link to={"/find"}>
                        <li className=' text-[20px] leading-[28px] font-["DINPro]'>Find Doctors</li>
                    </Link>
                    <li className=' cursor-pointer text-[20px] leading-[28px] font-["DINPro]'>About Us</li>
                </ul>
            </div>

            <div className='flex gap-[16px] items-center'>
                <button className='border w-[163px] solid border-[#3A643B] h-[56px] text-[#3A643B] px-4 py-2 rounded-lg'>Login</button>
                <button className='bg-[#3A643B] text-white w-[163px] h-[56px] px-4 py-2 rounded-lg'>Signup</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar;




