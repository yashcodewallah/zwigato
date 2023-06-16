import Header from '../components/Header';
import Foodcards from '../components/Foodcards';
import Menu from '../components/Menu';
import Whyzwigato from '../components/Whyzwigato';
function Home() {
  return (
    <div className='flex flex-col w-full md:w-10/12 m-auto mt-20 '>
<Header />
<Foodcards />
<Whyzwigato />
<Menu />
    </div>
  )
}

export default Home