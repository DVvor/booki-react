import './searchbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'

function searchbar() { 
    return (
        <>
            <div className='searchbar'>
                <label className="searchbar_icon"><FontAwesomeIcon icon={faLocationDot} /></label>
                <input className='search_input' type="search" placeholder="Marseille, France" />
                <button>Rechercher</button>
            </div>
            
        </>
    )
  }
  
  export default searchbar

