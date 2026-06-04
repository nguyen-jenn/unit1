import './App.css';
import Card from './components/Card'
import antifragile from './assets/antifragile.png'
import unforgiven from './assets/unforgiven.png'
import easy from './assets/easy.png'
import crazy from './assets/crazy.png'
import hot from './assets/hot.jpg'
import pureflow from './assets/pureflow.jpg'
import spaghetti from './assets/spaghetti.jpg'

const App = () => {

  return (
    <div className="App">
      <h1>LE SSERAFIM Song Collection</h1>
      <div className="card-grid">
        <Card title ="ANTIFRAGILE" album="ANTIFRAGILE" image={antifragile} alt="antifragile cover"/>
        <Card title ="Impurities" album="ANTIFRAGILE" image={antifragile} alt="antifragile cover"/>
        <Card title ="Good Parts" album="ANTIFRAGILE" image={antifragile} alt="antifragile cover"/>
        <Card title ="UNFORGIVEN" album="UNFORGIVEN" image={unforgiven} alt="unforgiven cover"/>
        <Card title ="Eve, Psyche & The Bluebeard's wife" album="UNFORGIVEN" image={unforgiven} alt="unforgiven cover"/>
        <Card title ="EASY" album="EASY" image={easy} alt="easy cover"/>
        <Card title ="CRAZY" album="CRAZY" image={crazy} alt="crazy cover"/>
        <Card title ="1-800-hot-n-fun" album="CRAZY" image={crazy} alt="crazy cover"/>
        <Card title ="HOT" album="HOT" image={hot} alt="hot cover"/>
        <Card title ="HOT" album="Ash" image={hot} alt="hot cover"/>
        <Card title ="HOT" album="Come Over" image={hot} alt="hot cover"/>
        <Card title ="SPAGHETTI" album="SPAGHETTI" image={spaghetti} alt="spaghetti cover"/>
        <Card title ="Pearlies" album="SPAGHETTI" image={spaghetti} alt="spaghetti cover"/>
        <Card title ="BOOMPALA" album="Pureflow" image={pureflow} alt="pureflow cover"/>
        <Card title ="Trust Exercise" album="Pureflow" image={pureflow} alt="pureflow cover"/>
        <Card title ="CELEBRATION" album="Pureflow" image={pureflow} alt="pureflow cover"/>
      </div>
    </div>
  )
}

export default App