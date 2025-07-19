import TulumCalendar from './tours/calendars/TulumCalendar';
import TourDescription from './tours/TourDescription';
import TourMosaic from './tours/TourMosaic';
import ChichenCalendar from './tours/calendars/ChichenCalendar';
import { usePathname } from 'next/navigation';

function TourWidgetContainer() {
  const pathname = usePathname();

  return (
    <div className="grid max-w-[1200px] grid-rows-[auto_auto] justify-self-center">
      <TourMosaic />
      <div className="flex w-full flex-col gap-8 p-6 lg:grid lg:grid-cols-[1fr_auto]">
        <TourDescription />
        {pathname.includes('tulum') && <TulumCalendar />}
        {pathname.includes('chichen-itza') && <ChichenCalendar />}
      </div>
    </div>
  );
}

export default TourWidgetContainer;
