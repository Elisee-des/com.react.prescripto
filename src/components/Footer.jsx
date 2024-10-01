import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
        <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

            <div>
                <img className='mb-5 w-40' src={assets.logo} alt="" />
                <p className='w-full md:w-2/3 text-gray-600 leading-6'>
                    Le Lorem Ipsum est simplement du faux texte utilisé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, quand un imprimeur anonyme assembla des morceaux de texte pour réaliser un livre spécimen de polices de texte.
                </p>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>ENTREPRISE</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>Accueil</li>
                    <li>À propos de nous</li>
                    <li>Livraison</li>
                    <li>Politique de confidentialité</li>
                </ul>
            </div>

            <div>
                <p className='text-xl font-medium mb-5'>CONTACTEZ-NOUS</p>
                <ul className='flex flex-col gap-2 text-gray-600'>
                    <li>+1-212-456-7890</li>
                    <li>greatstackdev@gmail.com</li>
                </ul>
            </div>

        </div>

        <div>
            <hr />
            <p className='py-5 text-sm text-center'>Copyright 2024 @ Prescripto.com - Tous droits réservés.</p>
        </div>

    </div>
)

}

export default Footer
