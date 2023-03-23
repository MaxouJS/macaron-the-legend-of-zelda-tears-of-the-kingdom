import { Helmet } from 'react-helmet';

import What from '../scenes/What';
import Why from '../scenes/Why';
import Where from '../scenes/Where';
import Navigation from '../components/static/navigation/Navigation';

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>The Legend Of Zelda : Tears Of The Kingdom - MADE BY MACARON WEB AGENCY</title>
        <link rel="canonical" href="htts://tloz-totk.com.au" />
        <meta name="description" content="An epic adventure across the land and skies of Hyrule awaits in The Legend of Zelda™: Tears of the Kingdom for the Nintendo Switch system. MADE BY MACARON WEB AGENCY" />
      </Helmet>
      <main className='h-screen w-screen snap-y snap-mandatory overflow-scroll scroll-smooth select-none touch-none font-serif'>
        <What />
        <Why />
        <Where />
      </main>
    </>
  );
};
