export interface IMain {
    humidity: number;
    temp: number;
};

export interface ISys {
    country: string
};

export interface IWeatherInfos {
    main: string;
    description: string;
    icon: string;
};

export interface IWind {
    speed: number;
}

export interface IWeather {
    name: string;
    timezone: number;
    main: IMain;
    sys: ISys;
    weather: IWeatherInfos[];
    wind: IWind;
};