import './button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMoneyBill, faChildReaching, faHeart, faDog  } from '@fortawesome/free-solid-svg-icons'

function button({buttonName}) { 
    
    let iconType = ""

    if(buttonName === 'Économique'){
        iconType = faMoneyBill
    } 
    if(buttonName === 'Familial'){
        iconType = faChildReaching
    }
    if(buttonName === 'Romantique'){
        iconType = faHeart
    }
    if(buttonName === 'Animaux autorisés'){
        iconType = faDog
    }
    return (
        <>
            <button><FontAwesomeIcon icon={iconType} className='button_icon' />{buttonName}</button>
        </>
    )
  }
  
  export default button

