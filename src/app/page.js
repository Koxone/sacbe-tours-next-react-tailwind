import MainBanner from '@/components/banner/MainBanner';
import AboutUsContainer from '@/components/containers/AboutUsContainer';
import WidgetsContainer from '@/components/containers/WidgetsContainer';
import '../app/globals.css';
function Home() {
  return (
    <div className="flex w-screen max-w-full flex-col items-center overflow-x-hidden md:w-full md:gap-1">
      <div className="h-fit w-full">
        <MainBanner />
      </div>
      <WidgetsContainer
        tour1="tulum"
        tour2="chichen-itza"
        tour3="cancun"
        tour4="playaDelCarmen"
      />
      <AboutUsContainer />
    </div>
  );
}

export default Home;
