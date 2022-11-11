import { IWeather } from "../../utils/interfaces";
import './Location.scss';

type Props = {
    isWeatherFetched: boolean;
    weather: IWeather | undefined;
};

const Location = ({ weather, isWeatherFetched }: Props) => {
    return (
        <div className="location">
            {isWeatherFetched && (
                <>
                    {weather?.name}, {weather?.sys.country}
                </>
            )}
        </div>
    )
};

export default Location;