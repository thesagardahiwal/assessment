
import HeroSession from '../components/HeroSession'
import Feeds from '../components/Feeds'
import Appointment from '../components/Appointment'

const Home = () => {
  return (
    <div>
        <HeroSession/>
      <div className='flex mt-10 w-[1220px] mx-auto'>
        <div className='w-1/2'>
          <Feeds/>
        </div>
        <div className='flex-1'>
          <Appointment/>
        </div>
      </div>
    </div>
  )
}

export default Home