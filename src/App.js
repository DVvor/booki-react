import './App.css';
// import logo from './assets/Booki.png';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Searchbar from './components/searchbar/searchbar';



function App() {
  
  return (
  
    <>
    <Header />
    <h1 className='booki_title'>Trouvez votre hébergements pour des vacances de rêve</h1>
    <h2 className='booki_subtitle'>En plein centre ville ou en pleine nature</h2>

    <Searchbar />    
    <Footer />
    
    </>
    
  );
}

export default App;
