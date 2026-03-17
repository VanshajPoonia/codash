"use client";
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'rc-drawer/assets/index.css';

export default function CustomApp({ Component, pageProps }) {
  const router = useRouter();
  
  useEffect(() => {
    // Analytics can be added here if needed
    const handleRouteChange = () => {
      // Log page view
    };
    
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return <Component {...pageProps} />;
}
