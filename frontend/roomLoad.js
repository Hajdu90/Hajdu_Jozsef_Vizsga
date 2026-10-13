import { szobakBetoltes } from "./async.js";

export function szobakBetolt(){
    document.getElementById("allRoomBtn").addEventListener("click", async function(){
        document.getElementById("content").innerHTML = "";
        const szobak = await szobakBetoltes();

        szobak.forEach(e => {
            const div = document.createElement("div");
            const p1 = document.createElement("p");
            const p2 = document.createElement("p");
            const p3 = document.createElement("p");
            const p4 = document.createElement("p");
            const p5 = document.createElement("p");
            const p6 = document.createElement("p");
            
            p1.textContent = (`${e.szoba_nev}`);
            p2.textContent = (`${e.type_id}`);
            p3.textContent = (`ID: ${e.id} `);
            p4.textContent = (`Emelet: ${e.emelet}`);
            p5.textContent = (`Férőhely: ${e.ferohely}`);
            p6.textContent = (`Foglalt helyek: ${e.foglalt_helyek}`);


            const button = document.createElement("button");
            button.textContent = "Helyet Foglalok"



            document.getElementById("content").append(div)
            div.append(p1, p2, p3, p4, p5,p6, button)
        })
    })
}