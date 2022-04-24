import Image from 'next/image';
import Link from 'next/link';
import { Text } from '@chakra-ui/react';
import PokemonSkeleton from './PokemonSkeleton';

export default function PokemonItem({ pokemon }) {
  if (pokemon) {
    const { id, name } = pokemon;
    let pathImage = pokemon.sprites?.front_default;

    return (
      <Link href={`/pokemon/${id}`} key={id}>
        <a>
          <div className='flex justify-center items-center'>
            <Image src={pathImage} alt={`Image for ${name}`} width={96} height={96} layout='fixed'></Image>
            <Text fontSize='xl'>{name}</Text>
          </div>
        </a>
      </Link>
    );
  } else {
    return <PokemonSkeleton />;
  }
}