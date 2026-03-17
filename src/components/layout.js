"use client";
/** @jsx jsx */
import { jsx } from 'theme-ui';
import { useEffect } from 'react';
import { useStickyState, useStickyDispatch } from 'contexts/app/app.provider';

import Header from './header/header';
import Footer from './footer/footer';

export default function Layout({ children }) {
  const isSticky = useStickyState('isSticky');
  const dispatch = useStickyDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const threshold = 100; // pixels from top before sticky kicks in

      if (scrollTop > threshold) {
        dispatch({ type: 'SET_STICKY' });
      } else {
        dispatch({ type: 'REMOVE_STICKY' });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [dispatch]);

  return (
    <>
      <div
        sx={{
          position: isSticky ? 'fixed' : 'relative',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 991,
          transition: 'all 0.3s ease',
        }}
      >
        <Header className={`${isSticky ? 'sticky' : 'unSticky'}`} />
      </div>
      {isSticky && <div sx={{ height: '80px' }} />}
      <main
        sx={{
          variant: 'layout.main',
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
