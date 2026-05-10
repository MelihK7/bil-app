import './BilKort.css'


function BilKort ({ bil })   {
    return (
        <div className="bil-kort">

            <img src={bil.billeder[0]} alt={`${bil.mærke} ${bil.model}`} className="bil-thumbnail" />

            <div className="bil-info">
                <h2>{bil.mærke} {bil.model}</h2>
                <p>Årgang: {bil.årgang}</p>
                <p>Pris: {bil.pris.toLocaleString("da-DK")} DKK</p> // Formater efter tusind-separator for prisen
                
                <p>Km: {bil.km.toLocaleString("da-DK")}</p>
                // Tilføj tusind-separator til km 
                <p>Type: {bil.type}</p>
            </div>

        </div>
    );
}

export default BilKort;