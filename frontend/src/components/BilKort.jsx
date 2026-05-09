import './BilKort.css'


function BilKort ({ bil })   {
    return (
        <div className="bil-kort">
            <h2>{bil.mærke} {bil.model}</h2>
            <p>Årgang: {bil.årgang}</p>
            <p>Pris: {bil.pris} DKK</p>
            <p>Km: {bil.km}</p>
            <p>Type: {bil.type}</p>
        </div>
    );
}

export default BilKort;