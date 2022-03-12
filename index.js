import { LegitRod } from "./Foraging/legitrod";
import Settings from "./config/config";
import config from "./config/config";
import { PacketRod } from "./Foraging/packetrod";
register("command", () => {
    Settings.openGUI();
}).setName("riceforage");
register("chat", function(event) {
    var unformattedMessage = ChatLib.getChatMessage(event);
    msgString = unformattedMessage.toString();
    if(msgString.startsWith("§cAutopet §eequipped your §7[Lvl " + config.Level + "] §6Ocelot§e!")){
        LegitRod();
    }
})

register("chat", function(event) {
    var unformattedMessage = ChatLib.getChatMessage(event);
    msgString = unformattedMessage.toString();
    if(msgString.startsWith("§cAutopet §eequipped your §7[Lvl " + config.Level + "] §6Ocelot§e!")){
        PacketRod();
    }
})