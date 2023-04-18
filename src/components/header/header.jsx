import './header.css'
import logo from '../../assets/Booki.png'


function Header() { 
  return (
    <div className='header'>
      <img alt='logo' className='logo-header' src={logo} />
      <div className='menu'>
        <div className='category'>Hébergements</div>
        <div className='category'>Activités</div>
      </div>
    </div>
  )
}

export default Header
