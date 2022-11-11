import "./Search.scss";

type Props = {
  updateWeather: React.KeyboardEventHandler<HTMLInputElement>;
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

const Search = ({ updateWeather, query, setQuery }: Props) => {
  return (
    <div className="search">
      <input
        type="text"
        placeholder="Search a location..."
        onChange={(e) => setQuery(e.target.value)}
        value={query}
        onKeyDown={updateWeather}
        className="search__bar"
      />
    </div>
  );
};

export default Search;
