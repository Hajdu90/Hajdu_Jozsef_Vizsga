import { deleteRoom, szobakBetoltes } from "./async.js";

export function roomDelete(){
    document.getElementById("roomDeleteBtn").addEventListener("click", async function(){
            document.getElementById("content").innerHTML = "";
            const szobak = await szobakBetoltes();
    
            szobak.forEach(e => {
                const div = document.createElement("div");
                const p1 = document.createElement("p");
                
                p1.textContent = (`${e.szoba_nev}`);
                
                const button = document.createElement("button");
                button.textContent = "Törlés"
    
                button.addEventListener("click", async function(){
                    await deleteRoom(e.id);
                    div.remove();
                    p1.remove();
                    button.remove();
                })
    
                document.getElementById("content").append(div)
                div.append(p1, button)
            })
        })
}