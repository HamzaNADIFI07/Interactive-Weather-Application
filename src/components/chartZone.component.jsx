import React, { useState, useEffect } from "react";
import Chart   from 'chart.js/auto'
import { Bar } from "react-chartjs-2"

import '../assets/style/chartZone.style.css'

const LABELS = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']



const ChartZone = ( { selectedCity, favorite , selectedData , favoriteData}) => {
    const [dataType, setDataType] = useState("temp_min");
    const buildData = ()  => {  
        const selectedCityData = selectedData.map((monthData) => monthData[dataType]);
        const favoriteCityData = favoriteData.map((monthData) => monthData[dataType]);
        return (
            {
                labels: LABELS,
                datasets : [
                    {
                        label : {selectedCity},
                        data :selectedCityData,
                        backgroundColor: 'rgb(255,128,128)',
                        borderColor: 'rgba(0, 0, 0, 0.5)',
                        borderWidth: 1
                    },
                    {
                        label : {favorite},
                        data : favoriteCityData,
                        backgroundColor: 'gold',
                        borderColor: 'rgba(0, 0, 0, 0.5)',
                        borderWidth: 1
                    },
                ]  
            })
    }

    const [chartData, setChartData] = useState(buildData(dataType))


    const chart = <div className="chartZone">                             
                    <Bar
                        data = { chartData }
                        options =  { {
                                        scales: {
                                                              
                                        },
                                        animation: {
                                            duration : 500,
                                            easing : 'easeIn'
                                        },
                                        plugins : {
                                            title: {
                                                display : true,
                                                text : dataType
                                            }
                                        },
                                        legend: {
                                            labels: {
                                                fontSize: 14
                                            }
                                        }
                                    }
                        }
                    />
                  </div>
      useEffect(() => {
        const intervalId = setInterval(() => {
            const selectedCityData = selectedData.map((monthData) => monthData[dataType]);
            const favoriteCityData = favoriteData.map((monthData) => monthData[dataType]);
            setChartData(buildData(dataType));
            setChartData({
                labels: LABELS,
                datasets: [
                  {
                    label: selectedCity,
                    data: selectedCityData,
                    backgroundColor: 'rgb(255,128,128)',
                    borderColor: 'rgba(0, 0, 0, 0.5)',
                    borderWidth: 1
                  },
                  {
                    label: favorite,
                    data: favoriteCityData,
                    backgroundColor: 'gold',
                    borderColor: 'rgba(0, 0, 0, 0.5)',
                    borderWidth: 1
                  }
                ]
              });
        }, 50);
    
        return () => clearInterval(intervalId);
    
      }, [selectedCity, favorite, selectedData, favoriteData,dataType]);
      const handleButtonClick = (newDataType) => {
        setDataType(newDataType);
      };
    return (
        <div className="chartZone">
            <div className="button-group">
                <button onClick={() => handleButtonClick("temp_min")}>Température Minimale(°C)</button>
                <button onClick={() => handleButtonClick("temp_max")}>Température Maximale(°C)</button>
                <button onClick={() => handleButtonClick("pluviometrie")}>Pluviométrie(mm)</button>
                <button onClick={() => handleButtonClick("ensoleillement")}>Ensoleillement(jrs)</button>
                <button onClick={() => handleButtonClick("jours_gel")}>Jours de gel(jrs)</button>
            </div>
                {chart}
        </div>
    )
}
export default ChartZone