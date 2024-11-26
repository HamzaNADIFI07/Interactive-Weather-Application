import DataCell from "./dataCell.component.jsx";

const MeteoData = ({meteodata, favorite}) => {

    const res = <div className={`meteoData${favorite?' favorite':''}`}>
                    <DataCell value ={meteodata.pour} unite={""}/>
                    <DataCell value ={meteodata.temp_min} unite={"temperature"}/>
                    <DataCell value ={meteodata.temp_max} unite={"temperature"}/>
                    <DataCell value ={meteodata.pluviometrie} unite={"mm"}/>
                    <DataCell value ={meteodata.ensoleillement} unite={"h"}/>
                    <DataCell value ={meteodata.jours_gel} unite={"jour"}/>
                </div>

    return (
        res
    );

}

export default MeteoData;