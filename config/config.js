import { @Vigilant, @TextProperty, @SwitchProperty, @SelectorProperty } from "../Vigilance";

@Vigilant("ForagingUtils")
class Settings {

    @SwitchProperty({
        name: "Enable",
        description: "Enable or disable this module",
        category: "General",
        subcategory: ""
    })
    Toggled = "";


    @TextProperty({
        name: "Ocelot Level",
        description: "Enter the level of your ocelot here.",
        category: "General",
        placeholder: "100"
    })
    Level = "";

    @TextProperty({
        name: "Minimum Rod Delay",
        description: "",
        category: "General",
        placeholder: "300"
    })
    min = "";

    @TextProperty({
        name: "Maximum Rod Delay",
        description: "",
        category: "General",
        placeholder: "500"
    })
    max = "";

    @SelectorProperty({
        name: "Module Mode",
        description: "Mode that the module will use",
        category: "General",
        options: ["Legit", "Packet"]
    })
    moduleMode = 0;

    constructor() {
        this.initialize(this);
    }
}

export default new Settings();