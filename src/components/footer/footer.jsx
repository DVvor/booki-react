import './footer.css'


function Footer() { 
  return (
    <div className='footer'>
        <div className="footer_block">
            <div className='footer_block_title'>A propos</div>
                <ul>
                    <li>Fonctionnement du site</li>
                    <li>Conditions générales de vente</li>
                    <li>Données et confidentialité</li>
                </ul>            
        </div>
        <div className="footer_block">
            <div className='footer_block_title'>Nos Hébergements</div>
                <ul>
                    <li>Charte qualité</li>
                    <li>Soumettre votre hôtel</li>
                </ul>            
        </div>
        <div className="footer_block">
            <div className='footer_block_title'>Nos Hébergements</div>
                <ul>
                    <li>Centre d'aide</li>
                    <li>Nous contacter</li>
                </ul>            
        </div>
        
    </div>
  )
}

export default Footer
