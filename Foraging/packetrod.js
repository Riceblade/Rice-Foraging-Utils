import { C08PacketPlayerBlockPlacement, RightClick, BP, C09PacketHeldItemChange } from "../utils/utils";
import Settings from "../config/config";
import config from "../config/config";
let lastSwap = new Date().getTime();

const PacketRod = () => {
    new Thread(()=>{
        if (config.Toggled == true){
            if (config.moduleMode == 1) {
            for (let i = 0; i < 9; i++) {
                if (Player.getInventory().getStackInSlot(i) !== null && Player.getInventory().getStackInSlot(i).getName().removeFormatting().toLowerCase().includes("rod")) {
                    if (new Date().getTime() - lastSwap > 500) {
                        let Axe;
                        let Rod;
                    Player.getOpenedInventory().getItems().slice(36, 45).forEach((item, index) => {
                        if (item !== null && (item.getName().includes("Treecap") || item.getName().includes("Axe"))) {
                            Axe = index;
                        }
                        if (item !== null && item.getName().includes("Rod")) {
                            Rod = index;
                        }
                    })
                    var min=config.min;
                    var max=config.max;
                    var random = Math.floor(Math.random() * (+max - +min)) + +min;
                    Thread.sleep(random)
                    Client.sendPacket(new C09PacketHeldItemChange(Rod));
                    Client.sendPacket(new C08PacketPlayerBlockPlacement(new BP(-1, -1, -1), 255, Player.getHeldItem().getItemStack(), 0, 0, 0)) 
                    Client.sendPacket(new C08PacketPlayerBlockPlacement(new BP(-1, -1, -1), 255, Player.getHeldItem().getItemStack(), 0, 0, 0)) 
                    Client.sendPacket(new C09PacketHeldItemChange(Axe));
                    break;
        }
    }
                    }
                }
                }
            }).start()
}




export { PacketRod }
