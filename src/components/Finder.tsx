import React from 'react'

function Finder() {
  return (
    <div className='h-[221px] relative flex items-center justify-center w-full'>
        <div className='bg-[#EAF2EA] w-full'>
              <svg width="1218" height="221" viewBox="0 0 1218 221" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="211" cy="205" r="92" fill="#CFEBCF" fill-opacity="0.5" />
                  <circle cx="1048" cy="196" r="92" fill="#CFEBCF" fill-opacity="0.5" />
                  <circle cx="92" cy="-8" r="92" fill="#CFEBCF" fill-opacity="0.5" />
                  <circle cx="1126" cy="-16" r="92" fill="#CFEBCF" fill-opacity="0.5" />
              </svg>
        </div>

        <div className=' absolute w-full items-center justify-center flex flex-col'>
                <h2 className='text-3xl font-bold'>Find expert Doctors for an In-clinic session here </h2>
                <div className=' flex items-center justify-center w-[682px] gap-1'>
                    <div className='flex items-center mt-6 justify-between'>
                        <div className=' flex items-center gap-1 bg-white p-2 rounded-md'>
                        <div className=' flex items-center justify-center'>
                            <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14.2942 8.23375L14.2936 8.23315C13.8086 7.74897 13.2109 7.5 12.5273 7.5C11.8438 7.5 11.2462 7.749 10.7618 8.23345C10.2769 8.71838 10.0273 9.31621 10.0273 10C10.0273 10.6837 10.2768 11.2812 10.7618 11.7656C11.2461 12.2506 11.8437 12.5 12.5273 12.5C13.2111 12.5 13.809 12.2505 14.2939 11.7656C14.7783 11.2811 15.0273 10.6835 15.0273 10C15.0273 9.31649 14.7784 8.71874 14.2942 8.23375ZM7.27929 4.59258L7.27936 4.59251C8.79844 3.19121 10.5409 2.5 12.5273 2.5C14.5138 2.5 16.2563 3.19121 17.7753 4.59251L17.7754 4.59258C19.2663 5.96736 20.0273 7.81773 20.0273 10.2C20.0273 11.6731 19.4747 13.2999 18.3084 15.09C17.1427 16.8788 15.3634 18.839 12.9525 20.9698C12.9003 21.0124 12.835 21.0506 12.7518 21.0818C12.6707 21.1122 12.5967 21.125 12.5273 21.125C12.4579 21.125 12.3839 21.1122 12.3029 21.0818C12.2197 21.0506 12.1544 21.0124 12.1022 20.9698C9.69129 18.839 7.912 16.8788 6.74624 15.09C5.58003 13.2999 5.02734 11.6731 5.02734 10.2C5.02734 7.81773 5.78835 5.96736 7.27929 4.59258Z" fill="#3A643B" stroke="#3A643B" />
                            </svg>
                        </div>
                        <p>Search Location</p>
                        <div className='p-1 flex items-center justify-center'>
                            <svg width="15" height="10" viewBox="0 0 15 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M1.51953 1.5L7.50151 8.16667L13.4835 1.5" stroke="#131313" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </div>
                        </div>
                    </div>
                    <div className='flex-1 items-center mt-6 justify-between'>
                        <div className=' flex items-center justify-between gap-1 bg-white p-1 rounded-md'>
                        <p className=' px-2'>eg. Doctor, specialisation, clinic name</p>
                        <div className='p-1 flex items-center justify-center'>
                              <svg width="29" height="24" viewBox="0 0 29 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M14.8354 4L13.1811 5.41L19.7279 11H5.44922V13H19.7279L13.1811 18.59L14.8354 20L24.2215 12L14.8354 4Z" fill="#1C1B1F" />
                              </svg>

                        </div>
                        </div>
                    </div>
                </div>
        </div>
    </div>
  )
}

export default Finder