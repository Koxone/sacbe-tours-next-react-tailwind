import TulumCalendar from './tours/TulumCalendar';
import TourDescription from './tours/TourDescription';
import TourMosaic from './tours/TourMosaic';

function TourWidgetContainer() {
  return (
    <div className="grid max-w-[1200px] grid-rows-[auto_auto] justify-self-center">
      <TourMosaic />
      <div className="grid w-full grid-cols-2">
        <TourDescription />
        <TulumCalendar />
      </div>
    </div>
  );
}

export default TourWidgetContainer;
