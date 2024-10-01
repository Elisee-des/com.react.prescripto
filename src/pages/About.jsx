import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-[#707070]'>
        <p>À PROPOS <span className='text-gray-700 font-semibold'>DE NOUS</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Bienvenue chez Prescripto, votre partenaire de confiance pour la gestion de vos besoins en matière de santé de manière pratique et efficace. Chez Prescripto, nous comprenons les défis auxquels les individus sont confrontés pour planifier des rendez-vous médicaux et gérer leurs dossiers de santé.</p>
          <p>Prescripto s'engage à l'excellence dans les technologies de santé. Nous nous efforçons constamment d'améliorer notre plateforme en intégrant les dernières avancées pour améliorer l'expérience utilisateur et offrir un service supérieur. Que vous réserviez votre premier rendez-vous ou que vous gériez des soins en cours, Prescripto est là pour vous accompagner à chaque étape.</p>
          <b className='text-gray-800'>Notre Vision</b>
          <p>Notre vision chez Prescripto est de créer une expérience de santé sans faille pour chaque utilisateur. Nous visons à combler le fossé entre les patients et les prestataires de soins, facilitant ainsi l'accès aux soins dont vous avez besoin, quand vous en avez besoin.</p>
        </div>
      </div>

      <div className='text-xl my-4'>
        <p>POURQUOI  <span className='text-gray-700 font-semibold'>NOUS CHOISIR</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>EFFICACITÉ :</b>
          <p>Planification de rendez-vous simplifiée, adaptée à votre emploi du temps chargé.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PRATICITÉ :</b>
          <p>Accès à un réseau de professionnels de santé de confiance dans votre région.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b>PERSONNALISATION :</b>
          <p>Recommandations et rappels personnalisés pour vous aider à prendre soin de votre santé.</p>
        </div>
      </div>

    </div>
  )
}

export default About
