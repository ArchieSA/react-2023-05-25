/* eslint-disable react/jsx-key */
/* eslint-disable react/no-children-prop */
import { Header } from '@/components/Header/Header';
import { Main } from '@/components/Main/Main';
import { Restaurants } from '@/components/Restaurants/Restaurants';
import { restaurants } from '@/mocks';

export default function Home() {
  return (
    <>
      <Header />
      <Main>
        <Restaurants restaurants={restaurants} />
      </Main>
    </>
  );
}
