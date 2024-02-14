interface Data {
  temperature: string;
  storm: boolean;
}

type Observer = (data: Data) => void;

const createWeatherStation = () => {
  const observers: Observer[] = [];

  const registerObserver = (observer: Observer) => {
    observers.push(observer);
  };

  const notifyObservers = (data: Data) => {
    observers.forEach((observer) => {
      observer(data);
    });
  };

  return { registerObserver, notifyObservers };
};

const reportNews = (data: Data) => {
  console.log(
    `we ${
      data.storm ? "have" : "don't have"
    } storm today, and the temperature is ${data.temperature}`
  );
};

const displayToMobile = (data: Data) => {
  console.log(`{storm:${data.storm}, temperature:${data.temperature}}`);
};

const weatherStation = createWeatherStation();

weatherStation.registerObserver(reportNews);
weatherStation.registerObserver(displayToMobile);

weatherStation.notifyObservers({ storm: false, temperature: "22deg" });
