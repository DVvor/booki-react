import './App.css';
// import logo from './assets/Booki.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo } from '@fortawesome/free-solid-svg-icons'

import Header from './components/header/header';
import Footer from './components/footer/footer';
import Searchbar from './components/searchbar/searchbar';
import Button from './components/button/button';


function App() {
  
  return (
  
    <>
    <Header />
    <h1 className='booki_title'>Trouvez votre hébergements pour des vacances de rêve</h1>
    <h2 className='booki_subtitle'>En plein centre ville ou en pleine nature</h2>

    <Searchbar /> 

    <div className='filter'>
    
                    <span>Filtres</span>
                    <Button buttonName='Économique'/>
                    <Button buttonName='Familial'/>
                    <Button buttonName='Romantique'/>
                    <Button buttonName='Animaux autorisés'/>
                </div>
                <div className="filter_info">
                  <FontAwesomeIcon icon={faInfo} className='icon_info'/>
                  <span className='info'>Plus de 500 logements sont disponibles dans cette ville</span>
    </div>
    <Footer />
    
    </>
    
  );
}

export default App;
