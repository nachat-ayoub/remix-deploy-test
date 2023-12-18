import type { MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';

export const meta: MetaFunction = () => {
  return [
    { title: 'Anime4World | Home' },
    { name: 'description', content: 'Welcome to Anime4World Home!' },
  ];
};

export default function Index() {
  return (
    <center style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.8' }}>
      <h1>Anime4World Home Page</h1>
      <img
        height={'340px'}
        src='https://i.pngimg.me/thumb/f/720/comdlpng6937049.jpg'
        alt='Anime4World'
      />

      <h3>
        <Link to='/'>Welcom Page</Link>
      </h3>
    </center>
  );
}
