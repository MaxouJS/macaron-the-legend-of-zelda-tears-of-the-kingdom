import { Helmet } from 'react-helmet';

import Landing from '../scenes/What';
import ProofOfConcept from '../scenes/Why';
import Pricing from '../scenes/How';
import Navigation from '../components/static/navigation/Navigation';

export default function Home() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>The Legend Of Zelda : Tears Of The Kingdom - MADE BY MACARON WEB AGENCY</title>
        <link rel="canonical" href="htts://macaron.io" />
        <meta name="description" content="An epic adventure across the land and skies of Hyrule awaits in The Legend of Zelda™: Tears of the Kingdom for the Nintendo Switch system. MADE BY MACARON WEB AGENCY" />
      </Helmet>
      <main className='h-screen w-screen snap-y snap-mandatory overflow-scroll scroll-smooth select-none font-serif'>
        <Landing />
        <ProofOfConcept />
        <Pricing />
      </main>
    </>
  );
};
