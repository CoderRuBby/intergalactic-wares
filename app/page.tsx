import HomeContentCards from './components/home-content-cards';

export default function Home() {
  return (
    <div className='flex h-min'>
      <HomeContentCards contentName='deals' />
      <HomeContentCards contentName='popular' />
    </div>
  );
}
