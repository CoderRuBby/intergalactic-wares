import HomeContentCards from './components/home-content-cards';

export default function Home() {
  return (
    <div>
      <HomeContentCards contentName='deals' />
      <HomeContentCards contentName='popular' />
    </div>
  );
}
