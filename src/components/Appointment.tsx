import React from 'react'

const Appointment = () => {
  return (
    <div className='w-[584px] border border-[#E7E7E7] rounded-[29px] p-6'>
        <div className='flex border border-[#E7E7E7] p-3 rounded-lg items-center justify-between'>
            <div>Appintment Fee</div>
            <div>$66.6</div>
        </div>

        <div className='my-6 gap-4 flex items-center'>
            <span>
                Select your mode of session
            </span>
            <div className='flex-1 rounded-md h-[1px] bg-[#D4D4D4]'></div>
        </div>
        
        <div className='flex items-center justify-around '>
            <div className='w-[158px] flex-col  h-[78px] border border-[#E7E7E7] rounded-md flex items-center justify-center'>
                <div>In-Clinic</div>
                <div className='text-[#606060] text-[16px]'>45 Mins</div>
            </div>

            <div 
            style={{backgroundColor: 'rgba(58, 150, 59, 0.22)'}}
            className='w-[158px] flex-col h-[78px] border border-[#E7E7E7] rounded-md flex items-center justify-center'>
                <div>Video</div>
                <div className='text-[#606060] text-[16px]'>45 Mins</div>
            </div>

            <div className='w-[158px] flex-col  h-[78px] border border-[#E7E7E7] rounded-md flex items-center justify-center'>
                <div>Chat</div>
                <div className='text-[#606060] text-[16px]'>10 Mins</div>
            </div>
        </div>

        <div className='my-6 gap-4 flex items-center'>
            <span>
                Pick a time slot
            </span>
            <div className='flex-1 rounded-md h-[1px] bg-[#D4D4D4]'></div>
            <span>
                  <svg width="44" height="43" viewBox="0 0 44 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M43.75 21.5C43.75 33.2307 34.0176 42.75 22 42.75C9.98236 42.75 0.25 33.2307 0.25 21.5C0.25 9.76934 9.98236 0.25 22 0.25C34.0176 0.25 43.75 9.76934 43.75 21.5Z" fill="white" stroke="#8A8A8A" stroke-width="0.5" />
                      <path d="M30 13H16C14.8954 13 14 13.8954 14 15V29C14 30.1046 14.8954 31 16 31H30C31.1046 31 32 30.1046 32 29V15C32 13.8954 31.1046 13 30 13Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M27 11V15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M19 11V15" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M14 19H32" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                  </svg>
            </span>
        </div>

        <div className='flex border p-4 rounded-md items-center gap-4 justify-center'>
            <div className='flex items-center gap-4'>
                <div>
                      <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M20.0193 9.98043C20.0086 4.45744 15.523 -0.0109155 9.99998 -0.000256465C4.47699 0.0104026 0.00864036 4.49603 0.0192994 10.019C0.0299585 15.542 4.51559 20.0104 10.0386 19.9997C15.5616 19.989 20.0299 15.5034 20.0193 9.98043ZM18.5193 9.98332C18.5236 12.2377 17.6323 14.4014 16.0413 15.9985C14.4503 17.5957 12.29 18.4954 10.0357 18.4997C7.78135 18.5041 5.61762 17.6127 4.02048 16.0217C2.42335 14.4307 1.52365 12.2705 1.5193 10.0161C1.51495 7.76179 2.40631 5.59806 3.99728 4.00093C5.58826 2.4038 7.74854 1.50409 10.0029 1.49974C12.2572 1.49539 14.4209 2.38675 16.0181 3.97773C17.6152 5.56871 18.5149 7.72898 18.5193 9.98332ZM12.058 14.5258C12.1982 14.3849 12.2767 14.1941 12.2763 13.9954C12.276 13.7966 12.1967 13.6062 12.056 13.4658L8.57928 10.0025L12.0426 6.52581C12.1748 6.38338 12.2465 6.1952 12.2427 6.0009C12.2389 5.80661 12.1599 5.62138 12.0222 5.48423C11.8845 5.34708 11.699 5.26873 11.5047 5.26567C11.3104 5.26262 11.1225 5.33511 10.9805 5.46786L6.98826 9.47557C6.84809 9.61647 6.76956 9.80725 6.76995 10.006C6.77033 10.2047 6.84959 10.3952 6.99031 10.5356L10.998 14.5278C11.1389 14.668 11.3297 14.7465 11.5284 14.7462C11.7272 14.7458 11.9177 14.6665 12.058 14.5258Z" fill="#808080" />
                      </svg>
                </div>
                <div className='flex items-center justify-center border border-[#E7E7E7] rounded-md tracking-wide w-[123px] h-[80px] flex-col gap-1'>
                    <div className='text-[#3A643B] text-[16px] font-semibold '>Mon, 10 Oct</div>
                    <div className='text-[#818181] text-[16px]'>10 slots</div>
                </div>
                <div className='flex items-center justify-center border border-[#E7E7E7] rounded-md tracking-wide w-[123px] h-[80px] flex-col gap-1'>
                    <div className='text-[#3A643B] text-[16px] font-semibold '>Tue, 11 Oct</div>
                    <div className='text-[#D5512E] text-[16px]'>02 slots</div>
                </div>
                <div className='flex items-center justify-center border border-[#E7E7E7] rounded-md tracking-wide w-[123px] h-[80px] flex-col gap-1'>
                    <div className='text-[#3A643B] text-[16px] font-semibold '>Wed, 12 Oct</div>
                    <div className='text-[#F1B93A] text-[16px]'>05 slots</div>
                </div>
                <div>
                      <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M0.0390625 10C0.0390625 15.523 4.51606 20 10.0391 20C15.5621 20 20.0391 15.523 20.0391 10C20.0391 4.477 15.5621 0 10.0391 0C4.51606 0 0.0390625 4.477 0.0390625 10ZM1.53906 10C1.53906 7.74566 2.4346 5.58365 4.02865 3.98959C5.62271 2.39553 7.78472 1.5 10.0391 1.5C12.2934 1.5 14.4554 2.39553 16.0495 3.98959C17.6435 5.58365 18.5391 7.74566 18.5391 10C18.5391 12.2543 17.6435 14.4163 16.0495 16.0104C14.4554 17.6045 12.2934 18.5 10.0391 18.5C7.78472 18.5 5.62271 17.6045 4.02865 16.0104C2.4346 14.4163 1.53906 12.2543 1.53906 10ZM8.00906 5.47C7.86861 5.61062 7.78972 5.80125 7.78972 6C7.78972 6.19875 7.86861 6.38937 8.00906 6.53L11.4791 10L8.00906 13.47C7.87658 13.6122 7.80446 13.8002 7.80789 13.9945C7.81132 14.1888 7.89003 14.3742 8.02744 14.5116C8.16485 14.649 8.35024 14.7277 8.54454 14.7312C8.73884 14.7346 8.92689 14.6625 9.06906 14.53L13.0691 10.53C13.2095 10.3894 13.2884 10.1988 13.2884 10C13.2884 9.80125 13.2095 9.61063 13.0691 9.47L9.06906 5.47C8.92844 5.32955 8.73781 5.25066 8.53906 5.25066C8.34031 5.25066 8.14969 5.32955 8.00906 5.47Z" fill="#808080" />
                      </svg>
                </div>
            </div>
        </div>

        <div className='my-4'>
            <div className='my-10'>Morning</div>
            <div>
                <div className='flex flex-wrap items-center gap-3'>
                    <span className='border w-[106px] h-[67px] flex items-center justify-center rounded-lg p-3'>
                        <h3 className='text-[16px]'>09:00 AM</h3>
                    </span>
                    <span className='border w-[106px] h-[67px] flex items-center justify-center rounded-lg p-3'>
                        <h3 className='text-[16px]'>09:30 AM</h3>
                    </span>
                    <span className='border w-[106px] h-[67px] flex items-center justify-center rounded-lg p-3'>
                        <h3 className='text-[16px]'>10:00 AM</h3>
                    </span>
                    <span className='border w-[106px] h-[67px] flex items-center justify-center rounded-lg p-3'>
                        <h3 className='text-[16px]'>10:30 AM</h3>
                    </span>
                    <span className='border w-[106px] h-[67px] flex items-center justify-center rounded-lg p-3'>
                        <h3 className='text-[16px]'>11:00 AM</h3>
                    </span>
                    <span className='border w-[106px] bg-[#427242] h-[67px] flex items-center justify-center rounded-lg p-3'>
                        <h3 className='text-[16px]'>11:30 AM</h3>
                    </span>
                </div>
            </div>
        </div>


        <div className='mt-10'>
            <div className='my-4'>Evening</div>
            <div>
                <div className='flex flex-wrap items-center gap-3'>
                    <span className='border w-[106px] h-[67px] flex items-center justify-center rounded-lg p-3'>
                        <h3 className='text-[16px]'>09:00 PM</h3>
                    </span>
                    <span className='border w-[106px] h-[67px] flex items-center justify-center rounded-lg p-3'>
                        <h3 className='text-[16px]'>09:30 PM</h3>
                    </span>
                    <span className='border w-[106px] h-[67px] flex items-center justify-center rounded-lg p-3'>
                        <h3 className='text-[16px]'>10:00 PM</h3>
                    </span>
                    <span className='border w-[106px] h-[67px] flex items-center justify-center rounded-lg p-3'>
                        <h3 className='text-[16px]'>10:30 PM</h3>
                    </span>
                    <span className='border w-[106px] h-[67px] flex items-center justify-center rounded-lg p-3'>
                        <h3 className='text-[16px]'>11:00 PM</h3>
                    </span>
                    <span className='border w-[106px] h-[67px] flex items-center justify-center rounded-lg p-3'>
                        <h3 className='text-[16px]'>11:30 PM</h3>
                    </span>
                </div>
            </div>
        </div>

        <div className='my-10'>
            <div className='p-2 flex items-center
            text-white rounded-md
            justify-center border border-[#E7E7E7] bg-[#3A643B]'>
                <h3 className='text-[20px] font-medium'>Make An Appointment</h3>
            </div>
        </div>

    </div>
  )
}

export default Appointment