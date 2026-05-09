
import './App.css'
import BilKort from './components/BilKort'

const biler = [
  { id: 1, mærke: "BMW", model: "530e", årgang: 2024, pris: 450000, type: "Plugin-hybrid", km: 8000, billede: "🚗" },
  { id: 2, mærke: "Tesla", model: "Model 3", årgang: 2023, pris: 380000, type: "Elbil", km: 15000, billede: "⚡" },
  { id: 3, mærke: "Audi", model: "A4 TDI", årgang: 2022, pris: 320000, type: "Diesel", km: 32000, billede: "🚙" },
  { id: 4, mærke: "Mercedes", model: "C300", årgang: 2023, pris: 520000, type: "Benzin", km: 12000, billede: "🚘" },
  { id: 5, mærke: "Volkswagen", model: "ID.4", årgang: 2024, pris: 350000, type: "Elbil", km: 5000, billede: "🚘" },
  { id: 6, mærke: "Toyota", model: "RAV4 Hybrid", årgang: 2022, pris: 410000, type: "Hybrid", km: 28000, billede: "🚕" },
  { id: 7, mærke: "McLaren", model: "720S", årgang: 2021, pris: 2800000, type: "Benzin", km: 4200, billede: "🏎️" },
  { id: 8, mærke: "Lamborghini", model: "Huracán EVO", årgang: 2022, pris: 3200000, type: "Benzin", km: 2100, billede: "🏎️" },
  { id: 9, mærke: "Ferrari", model: "F8 Tributo", årgang: 2021, pris: 3900000, type: "Benzin", km: 1800, billede: "🏎️" },
  { id: 10, mærke: "Porsche", model: "911 GT3", årgang: 2023, pris: 1950000, type: "Benzin", km: 3500, billede: "🏎️" },
  { id: 11, mærke: "Bugatti", model: "Chiron Sport", årgang: 2020, pris: 18000000, type: "Benzin", km: 800, billede: "🏎️" },
  { id: 12, mærke: "Rolls-Royce", model: "Ghost", årgang: 2023, pris: 5200000, type: "Benzin", km: 6000, billede: "👑" },
]

function App() {
  return (
    <div>
      <h1> Bilforhandler </h1>

      { biler.map(bil=>{
      
        console.log(bil)
        return <BilKort bil={bil} />
        } )} 

    </div>
  )
}

export default App