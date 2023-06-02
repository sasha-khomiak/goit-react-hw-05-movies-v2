import { Outlet } from 'react-router-dom';

import { Suspense } from 'react';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { Container } from 'components/App.styled';

const SharedLayout = () => {
  return (
    <>
      <Header />
      <main>
        <section>
          <Container>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default SharedLayout;
