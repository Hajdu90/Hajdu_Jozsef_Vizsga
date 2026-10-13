export async function szobakBetoltes(){
    const valasz = await fetch("http://127.0.0.1:8000/api/tanuloszobak");
    const adat = await valasz.json();

    return adat.data;
}

export async function szobakTipusBetoltes(){
    const valasz = await fetch("http://127.0.0.1:8000/api/szobatipusok");
    const adat = await valasz.json();

    return adat.data;
}

export async function deleteRoom(id){
    const valasz = await fetch(`http://127.0.0.1:8000/api/tanuloszobak/${id}`, {
        method: "DELETE",
        headers: {
            "Accept":"application/json"
        }
    });
    const adat = await valasz.json();
    return adat;
}