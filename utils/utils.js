const mc = Client.getMinecraft()
const LeftClick = Client.getMinecraft().class.getDeclaredMethod("func_147116_af");
const RightClick = Client.getMinecraft().class.getDeclaredMethod("func_147121_ag");
LeftClick.setAccessible(true);
RightClick.setAccessible(true);
const C08PacketPlayerBlockPlacement = Java.type("net.minecraft.network.play.client.C08PacketPlayerBlockPlacement");
const C09PacketHeldItemChange = Java.type("net.minecraft.network.play.client.C09PacketHeldItemChange");
const C0APacketAnimation = Java.type("net.minecraft.network.play.client.C0APacketAnimation");
const BP = Java.type("net.minecraft.util.BlockPos");
export { LeftClick, RightClick, C08PacketPlayerBlockPlacement, C09PacketHeldItemChange, C0APacketAnimation, BP };