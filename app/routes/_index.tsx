import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Anime4World | Welcom' },
    { name: 'description', content: 'Welcome to Anime4World' },
  ];
};

export default function Index() {
  return (
    <center style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Anime4World Welcom Page</h1>
      <img
        height={'340px'}
        src='https://pngfre.com/wp-content/uploads/anime-33-759x1024.png'
        alt='Anime Image'
      />
      <h3>
        <Link to='/home' prefetch='intent'>
          Home Page
        </Link>
      </h3>
    </center>
  );
}
