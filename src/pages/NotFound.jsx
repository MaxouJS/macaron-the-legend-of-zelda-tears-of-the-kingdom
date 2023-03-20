import { Helmet } from 'react-helmet';

import NotFoundScene from '../scenes/NotFoundScene';

export default function NotFound() {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>404 Not Found - MACARON</title>
        <link rel="canonical" href="htts://macaron.io" />
        <meta name="description" content="Home page of Macaron" />
      </Helmet>
      <main className='h-screen w-screen bg-gradient-to-br from-pink-200 to-pink-400 snap-y snap-mandatory overflow-scroll scroll-smooth select-none'>
        <NotFoundScene />
      </main>
    </>
  );
};
