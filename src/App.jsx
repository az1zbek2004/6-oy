import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {
         <ul>

         <li><a href="#" className='card-link'>
       <div id="card" className="card">
         <img src="https://flagcdn.com/w320/uz.png" className="card-img-top" alt="flag img" />
       <div className="card-body">
         <h1 className="card-title">Uzbekistan</h1>
         <div className="lh-1">
             <p className="card-text"><b>Population:</b> 34232050</p>
             <p className="card-text"><b>Region:</b> Asia</p>
             <p className="card-text mb-4"><b>Capital:</b> Tashkent</p>
         </div>
       </div>
         </div>
   </a></li>

         <li><a href="#" className='card-link'>
       <div id="card" className="card">
         <img src="https://flagcdn.com/w320/id.png" className="card-img-top" alt="flag img" />
       <div className="card-body">
         <h1 className="card-title">Indonesia</h1>
         <div className="lh-1">
             <p className="card-text"><b>Population:</b> 273523621</p>
             <p className="card-text"><b>Region:</b> Asia</p>
             <p className="card-text mb-4"><b>Capital:</b> Jakarta</p>
         </div>
       </div>
         </div>
   </a></li>

         <li><a href="#" className='card-link'>
       <div id="card" className="card">
         <img src="https://flagcdn.com/w320/qa.png" className="card-img-top" alt="flag img" />
       <div className="card-body">
         <h1 className="card-title">Qatar</h1>
         <div className="lh-1">
             <p className="card-text"><b>Population:</b> 2881060</p>
             <p className="card-text"><b>Region:</b> Asia</p>
             <p className="card-text mb-4"><b>Capital:</b> Doha</p>
         </div>
       </div>
         </div>
   </a></li>

         <li><a href="#" className='card-link'>
       <div id="card" className="card">
         <img src="https://flagcdn.com/w320/sa.png" className="card-img-top" alt="flag img" />
       <div className="card-body">
         <h1 className="card-title">Saudi Arabia</h1>
         <div className="lh-1">
             <p className="card-text"><b>Population:</b> 34813867</p>
             <p className="card-text"><b>Region:</b> Asia</p>
             <p className="card-text mb-4"><b>Capital:</b> Riyadh</p>
         </div>
       </div>
         </div>
   </a></li>

         <li><a href="#" className='card-link'>
       <div id="card" className="card">
         <img src="https://flagcdn.com/w320/kw.png" className="card-img-top" alt="flag img" />
       <div className="card-body">
         <h1 className="card-title">Kuwait</h1>
         <div className="lh-1">
             <p className="card-text"><b>Population:</b> 4270563</p>
             <p className="card-text"><b>Region:</b> Asia</p>
             <p className="card-text mb-4"><b>Capital:</b> Kuwait City</p>
         </div>
       </div>
         </div>
   </a></li>

         <li><a href="#" className='card-link'>
       <div id="card" className="card">
         <img src="https://flagcdn.com/w320/tj.png" className="card-img-top" alt="flag img" />
       <div className="card-body">
         <h1 className="card-title">Tajikistan</h1>
         <div className="lh-1">
             <p className="card-text"><b>Population:</b> 9537642</p>
             <p className="card-text"><b>Region:</b> Asia</p>
             <p className="card-text mb-4"><b>Capital:</b> Dushanbe</p>
         </div>
       </div>
         </div>
   </a></li>
   
       </ul>
      }
    </>
  )
}

export default App
