import MeteoData from "./meteoData.component.jsx";
import meteodata from "../data/meteo-data.js";
import DataCell from "./dataCell.component.jsx";
import '../assets/style/dataForCity.style.css';

const DataForCity = ({selectedCity}) => {

    const dataForCity = meteodata.find(element=>element.selectedCity===selectedCity);
    const data = <div className="dataForCity">
                    <div className="meteoData">
                        <DataCell />
                        <DataCell value ={"Temp minimale"}/>
                        <DataCell value ={"Temp maximale"}/>
                        <DataCell value ={"Pluviométrie"}/>
                        <DataCell value ={"Ensoleillement"}/>
                        <DataCell value ={"Jours de gel"}/>
                    </div>
                    {dataForCity.data.map(element => <MeteoData meteodata={element} key={element.pour}/>)}
                </div>



    return (
        data
    );
}

export default DataForCity;