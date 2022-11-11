import "./Current.scss";

type Props = {
    date: string;
    completeHour: string | number;
};

const Current = ({ date, completeHour }: Props) => {
    return (
        <div className="current-date">
            <p className="current-date__date">
                {date}
            </p>
            <p className="current-date__hour">
                {completeHour}
            </p>
        </div>
    )
};

export default Current;