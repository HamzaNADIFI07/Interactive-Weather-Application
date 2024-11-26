import React,{ useState } from "react";
import DataForCity from "./dataForCity.component.jsx";
import DataComparaison from "./dataComparaison.component.jsx"
import ChartZone from "./chartZone.component.jsx"
import meteoDataByCity from "../data/meteo-data"
import star_on from "../assets/images/star_on.png"
import star_off from "../assets/images/star_off.png"
import "../assets/style/favorite.style.css"

const App = () => {
  const [selectedCity, setSelectedCity] = useState("Lille");
  const [selectedData, setSelectedData] = useState([]);
  const [favorite, setFavorite] = useState("Lille");
  const [favoriteData, setFavoriteData] = useState([]);
  const [chartVisible, setChartVisible] = useState(false);
  const isFavorite = selectedCity === favorite;

  const handleFavoriteToggle = () => {
    if (isFavorite) {
      addToFavorite("");
    } else {
      addToFavorite(selectedCity);
    }
  };
  const handleCityChange = (event) => {
    const city = event.target.value;
    setSelectedCity(city);
    const cityData = meteoDataByCity.find((item) => item.city === city);
    setSelectedData(cityData ? cityData.data : []);
    if (city === favorite) {
      setFavoriteData(cityData ? cityData.data : []);
    }
  };

  const addToFavorite = () => {
    if (selectedCity) {
      setFavorite(selectedCity);
      const cityData = meteoDataByCity.find((item) => item.city === selectedCity);
      setFavoriteData(cityData ? cityData.data : []);
    }
  };

  const calculateAverageTemp = (type, city) => {
    const data = meteoDataByCity.find((item) => item.city === city)?.data || [];
    const filteredData = data.filter((item) => item.pour);
    const total = filteredData.reduce((sum, item) => sum + item[type], 0);
    const average = total / filteredData.length;
    return average.toFixed(1);
  };

  const calculateTotal = (type,city) => {
    const data = meteoDataByCity.find((item) => item.city === city)?.data || [];
    return data.reduce((sum, item) => sum + item[type], 0).toFixed(1);
  };


  return (
    <article>
      <div>
      <select onChange={handleCityChange} value={selectedCity}>
        <option value="">Choisissez une ville</option>
        {meteoDataByCity.map((cityData) => (
          <option key={cityData.city} value={cityData.city}>{cityData.city}</option>
        ))}
      </select>
      <img
        src={isFavorite ? star_on : star_off}
        alt={isFavorite ? "Favori" : "Non favori"}
        className="favorite-icon"
        onClick={handleFavoriteToggle}
        style={{ cursor: "pointer" }}
      />
    </div>
      <div>Data for {selectedCity}</div>
      <DataForCity 
            city={selectedCity}
        />

      <div>
        <DataComparaison
          favorite={favorite}
          selectedCity={selectedCity}
          calculateAverageTemp={calculateAverageTemp}
          calculateTotal={calculateTotal}
        />
    </div>
    <button onClick={() => setChartVisible(!chartVisible)}>
        {chartVisible ? "Cacher" : "Afficher"}
      </button>
      {chartVisible && (
        <div>
          <ChartZone
            favorite={favorite}
            selectedCity={selectedCity}
            selectedData={selectedData}
            favoriteData={favoriteData}
          />
        </div>
      )}
    </article>
  );
}
export default App;
