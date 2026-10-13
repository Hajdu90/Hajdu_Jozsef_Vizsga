import { szobakTipusBetoltes } from "./async.js";

export function szobakTipusBetolt(){
    document.getElementById("allRoomType").addEventListener("click", async function(){
        document.getElementById("content").innerHTML = "";
        const szobakT = await szobakTipusBetoltes();

        szobakT.forEach(e => {
            const div = document.createElement("div");
            
            const p1 = document.createElement("p");
            
            
            p1.textContent = (`${e.tipus_nev}`);
    
            document.getElementById("content").append(div)
            div.append(p1)
        })
    })
}