import Link from 'next/link'
import { useState } from 'react';
import Account  from '../components/Account'
import Purchases from '../components/Purchases'
import Navbar from '../components/Navbar';

const Profile = () => {
  const [view, setView] = useState(true)
  

  const handleAccount = () => {
    setView(true)
  }
  const handlePurchases = () => {
    setView(false)
  }



    return (
<>
<Navbar />
<div class=" drawer drawer-mobile h-screen">
  <input id="my-drawer-2" type="checkbox" class="drawer-toggle"/> 
  <div class="flex flex-col items-center justify-center drawer-content">
    <label for="my-drawer-2" class="mt-4 mb-4 btn btn-primary drawer-button lg:hidden ">Menu</label> 
    {view ? <Account /> : <Purchases/>}
  </div> 
  <div class="drawer-side">
    <label for="my-drawer-2" class="drawer-overlay"></label> 
    <ul class="menu p-4 overflow-y-auto w-80 bg-primary text-white">
      <li>
        <a onClick={handleAccount}>Account</a>
      </li> 
      <li>
        <a onClick={handlePurchases}>My purchases</a>
      </li>
    </ul>
  </div>
</div>
</>
    )
}

export default Profile;