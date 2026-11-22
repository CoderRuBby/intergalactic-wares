import HomeContentCards from './components/home-content-cards';

export default function Home() {
  return (
    <div className='grid grid-cols-[repeat(auto-fit,minmax(min(100%,250px),1fr))] gap-3 content-start '>
      <HomeContentCards contentName='deals' />
      <HomeContentCards contentName='popular' />
    </div>
  );
}
