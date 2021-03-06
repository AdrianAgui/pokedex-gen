import { useState } from 'react';
import useSound from 'core/hooks/useSound';

import Image from 'next/image';
import TitleEditable from './TitleEditable';
import LevelProgress from './LevelProgress';
import InfoTable from './InfoTable';

export default function MyPokemon({ pokemon, train, closeModal }) {
  const [name, setName] = useState(pokemon.name);
  const [animate, setAnimate] = useState(false);

  const { doSound } = useSound(pokemon.id);

  const doAction = () => {
    setAnimate(true);
    doSound();
    setTimeout(() => {
      setAnimate(false);
    }, 1000);
  };

  return (
    <div className='bg-white'>
      <div className='text-center sm:text-left'>
        <div className='flex justify-between items-center p-5 bg-gray-100'>
          <div className='flex'>
            <picture
              onClick={doAction}
              className={`rounded-full ring-2 ring-offset-2 ring-opacity-50 ring-black mr-7 cursor-pointer ${
                animate ? 'animate__animated animate__wobble' : ''
              }`}
            >
              <img className='bg-white inline-block h-16 w-16 rounded-full' src={pokemon.imageURL} alt={`Image for ${pokemon.name}`} />
            </picture>

            <TitleEditable id={pokemon.id} name={name} setName={setName} />
          </div>

          <button type='button' className='mr-3 p-2' onClick={() => closeModal(false)}>
            <span className='text-3xl font-black text-gray-600 hover:text-gray-800'>&times;</span>
          </button>
        </div>

        <div className='flex flex-col sm:flex-row'>
          <section className='w-full sm:w-1/2 font-semibold border-r-2'>
            <InfoTable pokemon={pokemon} />
          </section>

          <section className='flex flex-col w-full sm:w-1/2 mt-5'>
            <LevelProgress id={pokemon.id} currentLevel={pokemon.level} initialExp={pokemon.exp} train={train} />
            <picture className='p-6 sm:p-12'>
              <Image src={pokemon.imageURL_art} alt={`Image for ${pokemon.name}`} width={240} height={240} layout='responsive'></Image>
            </picture>
          </section>
        </div>
      </div>
    </div>
  );
}
