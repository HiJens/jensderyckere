import '../sass/index.scss';
import 'tailwindcss/tailwind.css';
import 'aos/dist/aos.css';

// Packages
import Aos from 'aos';

// React
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    Aos.init({
      duration: 1000
    });
  });

  return <Component {...pageProps} />
}

export default MyApp
