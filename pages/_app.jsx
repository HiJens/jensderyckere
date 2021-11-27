import '../sass/index.scss';
import 'tailwindcss/tailwind.css';

import Aos from 'aos';

function MyApp({ Component, pageProps }) {
  Aos.init();
  
  return <Component {...pageProps} />
}

export default MyApp
