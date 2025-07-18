import TulumCalendar from './tours/TulumCalendar';
import TourDescription from './tours/TourDescription';
import TourMosaic from './tours/TourMosaic';
import ChichenCalendar from './tours/ChichenCalendar';
import { usePathname } from 'next/navigation';

function TourWidgetContainer() {
  const pathname = usePathname();

  return (
    <div className="grid max-w-[1200px] grid-rows-[auto_auto] justify-self-center">
      <TourMosaic />
      <div className="grid w-full grid-cols-2">
        <TourDescription />

        {pathname.includes('tulum') && <TulumCalendar />}
        {pathname.includes('chichen-itza') && <ChichenCalendar />}
      </div>
    </div>
  );
}

export default TourWidgetContainer;
