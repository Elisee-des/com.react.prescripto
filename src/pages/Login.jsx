import React, { useState } from 'react'

const Login = () => {
  const [state, setState] = useState('Inscription')

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const onSubmitHandler = (event) => {
    event.preventDefault();
  }

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
      <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
        <p className='text-2xl font-semibold'>{state === 'Inscription' ? 'Créer un compte' : 'Connexion'}</p>
        <p>Veuillez {state === 'Inscription' ? "vous inscrire" : "vous connecter"} pour réserver un rendez-vous</p>
        {state === 'Inscription'
          ? <div className='w-full '>
            <p>Nom complet</p>
            <input onChange={(e) => setName(e.target.value)} value={name} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="text" required />
          </div>
          : null
        }
        <div className='w-full '>
          <p>Email</p>
          <input onChange={(e) => setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="email" required />
        </div>
        <div className='w-full '>
          <p>Mot de passe</p>
          <input onChange={(e) => setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1' type="password" required />
        </div>
        <button className='bg-primary text-white w-full py-2 my-2 rounded-md text-base'>{state === 'Inscription' ? 'Créer un compte' : 'Connexion'}</button>
        {state === 'Inscription'
          ? <p>Vous avez déjà un compte ? <span onClick={() => setState('Connexion')} className='text-primary underline cursor-pointer'>Connectez-vous ici</span></p>
          : <p>Créer un nouveau compte ? <span onClick={() => setState('Inscription')} className='text-primary underline cursor-pointer'>Cliquez ici</span></p>
        }
      </div>
    </form>
  )
}


export default Login