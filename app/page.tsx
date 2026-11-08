import HomeContentCards from './components/home-content-cards';

export default function Home() {
  return (
    <main>
      <HomeContentCards contentName='deals' />
      <HomeContentCards contentName='popular' />
    </main>
  );
}
