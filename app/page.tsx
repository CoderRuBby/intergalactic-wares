import HomeContentCards from './components/home-content-cards';

export default function Home() {
  return (
    <div className='flex h-min p-5'>
      <HomeContentCards contentName='deals' />
      <HomeContentCards contentName='popular' />
    </div>
  );
}
