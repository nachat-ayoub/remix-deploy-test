import type { MetaFunction } from '@remix-run/node';
import { Link, useLoaderData } from '@remix-run/react';
import { load as cheerioLoad } from 'cheerio';
import { json } from '@remix-run/node';
import axios from 'axios';

export async function loader() {
  try {
    const res = await axios.get('https://9animetv.to/home');
    const $ = cheerioLoad(res.data);

    const title = $('title').text();

    const animes = $('.film_list-wrap .flw-item')
      .toArray()
      .map((anime) => ({
        title: $(anime).find('.film-detail > .film-name > a').text().trim(),
        quality: $(anime).find('.tick-quality').text().trim(),
        sub: $(anime).find('.tick-item.tick-sub').text().trim(),
        dub: $(anime).find('.tick-item.tick-dub').text().trim(),
        episode: $(anime).find('.tick-item.tick-eps').text().trim(),
        image: $(anime).find('.film-poster-img').attr('data-src'),
        link: $(anime).find('.film-poster-ahref').attr('href'),
      }));

    return json({ title, animes });
  } catch (error) {
    console.log(error);
    return json({ title: null, animes: null });
  }
}

export const meta: MetaFunction = () => {
  return [
    { title: 'Anime4World | Home' },
    { name: 'description', content: 'Welcome to Anime4World Home!' },
  ];
};

export default function Index() {
  const data = useLoaderData<typeof loader>();
  console.log(data.animes);

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

      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: '20px',
        }}
      >
        {data.animes?.map((anime) => (
          <img
            style={{ border: '2px solid grey', borderRadius: '5px' }}
            key={anime.image}
            width={'300px'}
            src={anime.image}
            alt={anime.title}
          />
        ))}
      </div>
    </center>
  );
}
