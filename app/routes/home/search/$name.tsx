import type { MetaFunction } from '@remix-run/node';
import { Link, useParams } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Anime4World | Search' },
    { name: 'description', content: 'Search in Anime4World' },
  ];
};

export default function Index() {
  const { name } = useParams();

  return (
    <center style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>
        Anime4World Search Page - <strong>{name}</strong>{' '}
      </h1>
      <img
        height={'340px'}
        src='https://pngfre.com/wp-content/uploads/anime-33-759x1024.png'
        alt='Anime Image'
      />
      <h3>
        <Link to='/home/animes' prefetch='intent'>
          Home Page
        </Link>
      </h3>
    </center>
  );
}
