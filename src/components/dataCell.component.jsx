import '../assets/style/dataCell.style.css';

const DataCell = ({value, unite}) => {

    const data = <div className={`dataCell ${unite}`}>{value}</div>

    return (
        data
    );
}
export default DataCell;