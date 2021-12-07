import '../sass/index.scss';
import 'tailwindcss/tailwind.css';
import 'aos/dist/aos.css';

// Packages
import Aos from 'aos';
import AnimatedCursor from 'react-animated-cursor';

// React
import { useEffect, useState } from 'react';

function MyApp({ Component, pageProps }) {
  const [ show, setShow ] = useState(false);

  useEffect(() => {
    Aos.init({
      duration: 1000
    });

    setShow(true);
  });

  return ( 
    <>
      <Component {...pageProps} />
      {
        show && (
          <AnimatedCursor 
            innerSize={14}
            outerSize={8}
            color='63, 128, 255'
            outerAlpha={0.2}
            innerScale={0.7}
            outerScale={10}
          />
        )
      }
    </>
  )
}

export default MyApp
