
import './App.css'
import BilKort from './components/BilKort/BilKort'
import { Routes, Route } from 'react-router-dom'
import BilDetalje from './pages/BilDetalje/BilDetalje'

import biler from './data/bilListe'


function App() {
  return (

    <Routes>
      <Route path="/" element={
      <div>
        <h1> MinGarage </h1>


        <div className="bil-liste">
          { biler.map(bil=>{
          
            console.log(bil)
            return <BilKort bil={bil} />
            } )} 
        </div>
      </div>
      } />

       <Route path="/bil/:id" element={<BilDetalje biler={biler} />} />
    </Routes>
  )
}

export default App