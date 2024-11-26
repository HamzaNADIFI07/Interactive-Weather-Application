import React from "react";
import "../assets/style/dataComparison.style.css";

const DataComparaison = ({
  favorite,
  selectedCity,
  calculateAverageTemp,
  calculateTotal,
}) => {
  return (
    <div className="dataComparison">
      <h2>
        Comparaison entre les données de la ville en favori ({favorite}) et la
        ville sélectionnée ({selectedCity})
      </h2>
      <div className="meteoData categorie">
        <div className="dataCell">Villes</div>
        <div className="dataCell">Température Minimale</div>
        <div className="dataCell">Température Maximale</div>
        <div className="dataCell">Pluviométrie</div>
        <div className="dataCell">Ensoleillement</div>
        <div className="dataCell">Jours de gel</div>
      </div>
      <div className="meteoData">
        <div className="dataCell">{selectedCity}</div>
        <div className="dataCell">
          {calculateAverageTemp("temp_min", selectedCity)}°C
        </div>
        <div className="dataCell">
          {calculateAverageTemp("temp_max", selectedCity)}°C
        </div>
        <div className="dataCell">
          {calculateTotal("pluviometrie", selectedCity)}mm
        </div>
        <div className="dataCell">
          {calculateTotal("ensoleillement", selectedCity)}h
        </div>
        <div className="dataCell">
          {calculateTotal("jours_gel", selectedCity)}j
        </div>
      </div>
      <div className="meteoData favorite">
        <div className="dataCell">{favorite}</div>
        <div className="dataCell">
          {calculateAverageTemp("temp_min", favorite)}°C
        </div>
        <div className="dataCell">
          {calculateAverageTemp("temp_max", favorite)}°C
        </div>
        <div className="dataCell">
          {calculateTotal("pluviometrie", favorite)}mm
        </div>
        <div className="dataCell">
          {calculateTotal("ensoleillement", favorite)}h
        </div>
        <div className="dataCell">
          {calculateTotal("jours_gel", favorite)}j
        </div>
      </div>
    </div>
  );
};

export default DataComparaison;
