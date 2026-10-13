import { szobakTipusBetoltes } from "./async.js";
import { roomDelete } from "./deleteRoom.js";
import { szobakBetolt } from "./roomLoad.js";
import { szobakTipusBetolt } from "./roomTypeLoad.js";

szobakBetolt();
szobakTipusBetolt();
roomDelete();