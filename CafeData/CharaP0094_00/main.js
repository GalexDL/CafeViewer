let app;
let char;
let isCharacterLoaded = false;
let debug = 0; //set via console
let res;
let colorr;

function reCanvas() {
    app = new PIXI.Application(
        {
            width: 345,
            transparent: true,
            //backgroundColor: "414854",
            height: 430,
            view: document.getElementById("screen")
        }
    );
}

function loadChar(model) {
    isCharacterLoaded = false;
    // remove previous spine
    if(app.stage.children.length > 0) {
        app.stage.children.pop();
        app.loader.resources = {};
    }

    // load new spine
    app.loader
        .add('char', `./${model}`)
        .load(onAssetsLoaded);

}

function onAssetsLoaded(loader, resources) {
    res = resources;
    
    char = new PIXI.spine.Spine(res.char.spineData);

    // console.log(char)
    // console.log(char.spineData.height)
    // console.log(char.spineData.width)

    // Scaler
    char.scale.x = 0.2;
    char.scale.y = 0.2;

    // Centerize
    char.x = 170;
    char.y = 420;
    //char.x = window.innerWidth/15;
    //char.y = window.innerHeight/2.8;

    //Set option value
    option.scale.value = 0.2;
    option.x.value = char.x;
    option.y.value = char.y;
    
    // Insert animations to index.html
    const animations = res.char.spineData.animations;
    let check = 0;
    option.animations.innerHTML = "";
    for(var i in animations) {
        let a = document.createElement("option");
        a.value = a.innerHTML = animations[i].name;
        option.animations.append(a)
        if(animations[i].name == "Start_Idle_01")
            check = 1;
    }

    //Play Animation
    if(check) {
        char.state.setAnimation(0, "Start_Idle_01", option.loop.checked);
        optionAnimations.value = "Start_Idle_01";
    } else {
        char.state.setAnimation(0, animations[0].name, option.loop.checked);
    }
    // Voiceline Listener / Handler
    char.state.addListener({
        event: function(entry, event) {
            if(debug)
                console.log(event)
            if(event.stringValue == '')
                return;
            if(!option.talkSound.checked)
                return;
            let charName = option.models.options[option.models.selectedIndex].text.replace("_home", "")
            //Camalize
            if(charName.indexOf("_") != -1) {
                charName = charName.toLowerCase().replace(/([-_][a-z])/g, group =>
                group
                .toUpperCase()
                .replace('-', '')
                .replace('_', '')
                );
            }
            charName = charName.charAt(0).toUpperCase() + charName.slice(1);
            if(debug)
                console.log(charName)
            //Play
        }
    })
    // Insert skins to index.html
    const skins = res.char.spineData.skins;
    let checker = 0;
    option.skins.innerHTML = "";
    for(var i in skins) {
        let a = document.createElement("option");
        a.value = a.innerHTML = skins[i].name;
        option.skins.append(a)
        if(skins[i].name == "normal")
            checker = 1;
    }
    //Add to main canvas
    app.stage.addChild(char);
    isCharacterLoaded = true;
}

function playAnimation(name) {
    char.state.setAnimation(0, name, option.loop.checked);
}


// Costumes
//
function NormalSkin() {
    if (skinName = "ClerkCostume"){
        setDefaultSkin("Normal");
    }
    if (option.models.value == "CharaP0094_00.skel"){
        setTimeout(function() {
            setDefaultSkin("Normal");
        }, 300);
    }
    if (option.models.value == "/CharaP0094_08/CharaP0094_08.skel"){
        setNewCostume("CharaP0094_00.skel")
        setTimeout(function() {
            setDefaultSkin("Normal");
        }, 300);
    }
    if (option.models.value == "/CharaP0094_50/CharaP0094_50.skel"){
        setNewCostume("CharaP0094_00.skel")
        setTimeout(function() {
            setDefaultSkin("Normal");
        }, 300);
    }
}

function GengarHallow() {
    setNewCostume("/CharaP0094_08/CharaP0094_08.skel");
    setTimeout(function() {
        setDefaultSkin("Normal");
    }, 300);
}

function GengarFP() {
    setNewCostume("/CharaP0094_50/CharaP0094_50.skel");
    setTimeout(function() {
        setDefaultSkin("Normal");
    }, 300);
}
// Hats
//
function Clerk() {
    var checkBox = document.getElementById("myCheck");

    if(option.models.value == "CharaP0094_00.skel"){
        if (checkBox.checked = true){
            setDefaultSkin("ClerkCostume");
        }
    }
    if(option.models.value == "/CharaP0094_08/CharaP0094_08.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0094_50/CharaP0094_50.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
            }, 300);
        }
    }
}

function RedClerk() {
    var checkBox = document.getElementById("myCheck");

    if(option.models.value == "CharaP0094_00.skel"){
        if (checkBox.checked = true){
            setDefaultSkin("ClerkCostume");
            //Scarf
            //Apron
            char.skeleton.findSlot("Color_Cap").color.setFromString("D44626")
            char.skeleton.findSlot("Color_CapLight").color.setFromString("D44626")
            char.skeleton.findSlot("Color_Apron").color.setFromString("D44626")
            char.skeleton.findSlot("Color_ApronLight").color.setFromString("D44626")
            char.skeleton.findSlot("Color_ApronMark").color.setFromString("E7827C")
            //Ribbon
            char.skeleton.findSlot("Color_Ribbon").color.setFromString("D44626")
            char.skeleton.findSlot("Color_RibbonLight").color.setFromString("D44626")
            char.skeleton.findSlot("Color_RibbonPattern").color.setFromString("FFFFFF")
            char.skeleton.findSlot("Color_Band").color.setFromString("D44626")
            char.skeleton.findSlot("Color_BandLight").color.setFromString("D44626")
            char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
        }
    }
    if(option.models.value == "/CharaP0094_08/CharaP0094_08.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf

                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("D44626")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("D44626")
                char.skeleton.findSlot("Color_Apron").color.setFromString("D44626")
                char.skeleton.findSlot("Color_ApronLight").color.setFromString("D44626")
                char.skeleton.findSlot("Color_ApronMark").color.setFromString("E7827C")
                //Ribbon
                char.skeleton.findSlot("Color_Ribbon").color.setFromString("D44626")
                char.skeleton.findSlot("Color_RibbonLight").color.setFromString("D44626")
                char.skeleton.findSlot("Color_RibbonPattern").color.setFromString("FFFFFF")
                char.skeleton.findSlot("Color_Band").color.setFromString("D44626")
                char.skeleton.findSlot("Color_BandLight").color.setFromString("D44626")
                char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0094_50/CharaP0094_50.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf

                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("D44626")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("D44626")
                char.skeleton.findSlot("Color_Apron").color.setFromString("D44626")
                char.skeleton.findSlot("Color_ApronLight").color.setFromString("D44626")
                char.skeleton.findSlot("Color_ApronMark").color.setFromString("E7827C")
                //Ribbon
                char.skeleton.findSlot("Color_Ribbon").color.setFromString("D44626")
                char.skeleton.findSlot("Color_RibbonLight").color.setFromString("D44626")
                char.skeleton.findSlot("Color_RibbonPattern").color.setFromString("FFFFFF")
                char.skeleton.findSlot("Color_Band").color.setFromString("D44626")
                char.skeleton.findSlot("Color_BandLight").color.setFromString("D44626")
                char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
            }, 300);

        }
    }
}

function GreenClerk() {
    var checkBox = document.getElementById("myCheck");

    if(option.models.value == "CharaP0094_00.skel"){
        if (checkBox.checked = true){
            setDefaultSkin("ClerkCostume");
            //Scarf

            //Apron
            char.skeleton.findSlot("Color_Cap").color.setFromString("7BBEB4")
            char.skeleton.findSlot("Color_CapLight").color.setFromString("7BBEB4")
            char.skeleton.findSlot("Color_Apron").color.setFromString("7BBEB4")
            char.skeleton.findSlot("Color_ApronLight").color.setFromString("7BBEB4")
            char.skeleton.findSlot("Color_ApronMark").color.setFromString("43A593")
            //Ribbon
            char.skeleton.findSlot("Color_Ribbon").color.setFromString("7BBEB4")
            char.skeleton.findSlot("Color_RibbonLight").color.setFromString("7BBEB4")
            char.skeleton.findSlot("Color_RibbonPattern").color.setFromString("FFFFFF")
            char.skeleton.findSlot("Color_Band").color.setFromString("82C3BA")
            char.skeleton.findSlot("Color_BandLight").color.setFromString("82C3BA")
            char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
        }
    }
    if(option.models.value == "/CharaP0094_08/CharaP0094_08.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf

                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_Apron").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_ApronLight").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_ApronMark").color.setFromString("43A593")
                //Ribbon
                char.skeleton.findSlot("Color_Ribbon").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_RibbonLight").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_RibbonPattern").color.setFromString("FFFFFF")
                char.skeleton.findSlot("Color_Band").color.setFromString("82C3BA")
                char.skeleton.findSlot("Color_BandLight").color.setFromString("82C3BA")
                char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
            }, 300);

        }
    }
    if(option.models.value == "/CharaP0094_50/CharaP0094_50.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf

                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_Apron").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_ApronLight").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_ApronMark").color.setFromString("43A593")
                //Ribbon
                char.skeleton.findSlot("Color_Ribbon").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_RibbonLight").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_RibbonPattern").color.setFromString("FFFFFF")
                char.skeleton.findSlot("Color_Band").color.setFromString("82C3BA")
                char.skeleton.findSlot("Color_BandLight").color.setFromString("82C3BA")
                char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
            }, 300);
        }
    }
}

function YellowClerk() {
    var checkBox = document.getElementById("myCheck");

    if(option.models.value == "CharaP0094_00.skel"){
        if (checkBox.checked = true){
            setDefaultSkin("ClerkCostume");
            //Scarf

            //Apron
            char.skeleton.findSlot("Color_Cap").color.setFromString("F7D300")
            char.skeleton.findSlot("Color_CapLight").color.setFromString("F7D300")
            char.skeleton.findSlot("Color_Apron").color.setFromString("F7D300")
            char.skeleton.findSlot("Color_ApronLight").color.setFromString("F7D300")
            char.skeleton.findSlot("Color_ApronMark").color.setFromString("5C6369")
            //Ribbon
            char.skeleton.findSlot("Color_Ribbon").color.setFromString("F7D300")
            char.skeleton.findSlot("Color_RibbonLight").color.setFromString("F7D300")
            char.skeleton.findSlot("Color_RibbonPattern").color.setFromString("FFFFFF")
            char.skeleton.findSlot("Color_Band").color.setFromString("F7D300")
            char.skeleton.findSlot("Color_BandLight").color.setFromString("F7D300")
            char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
        }
    }
    if(option.models.value == "/CharaP0094_08/CharaP0094_08.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf

                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_Apron").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_ApronLight").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_ApronMark").color.setFromString("5C6369")
                //Ribbon
                char.skeleton.findSlot("Color_Ribbon").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_RibbonLight").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_RibbonPattern").color.setFromString("FFFFFF")
                char.skeleton.findSlot("Color_Band").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_BandLight").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
            }, 300);

        }
    }
    if(option.models.value == "/CharaP0094_50/CharaP0094_50.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf

                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_Apron").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_ApronLight").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_ApronMark").color.setFromString("5C6369")
                //Ribbon
                char.skeleton.findSlot("Color_Ribbon").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_RibbonLight").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_RibbonPattern").color.setFromString("FFFFFF")
                char.skeleton.findSlot("Color_Band").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_BandLight").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
            }, 300);
        }
    }
}

function BrownClerk() {
    var checkBox = document.getElementById("myCheck");

    if(option.models.value == "CharaP0094_00.skel"){
        if (checkBox.checked = true){
            setDefaultSkin("ClerkCostume");
            //Scarf

            //Apron
            char.skeleton.findSlot("Color_Cap").color.setFromString("BF8539")
            char.skeleton.findSlot("Color_CapLight").color.setFromString("BF8539")
            char.skeleton.findSlot("Color_Apron").color.setFromString("BF8539")
            char.skeleton.findSlot("Color_ApronLight").color.setFromString("BF8539")
            char.skeleton.findSlot("Color_ApronMark").color.setFromString("CFB687")
            //Ribbon
            char.skeleton.findSlot("Color_Ribbon").color.setFromString("BF8539")
            char.skeleton.findSlot("Color_RibbonLight").color.setFromString("BF8539")
            char.skeleton.findSlot("Color_RibbonPattern").color.setFromString("FFFFFF")
            char.skeleton.findSlot("Color_Band").color.setFromString("BF8539")
            char.skeleton.findSlot("Color_BandLight").color.setFromString("BF8539")
            char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
        }
    }
    if(option.models.value == "/CharaP0094_08/CharaP0094_08.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf

                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_Apron").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_ApronLight").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_ApronMark").color.setFromString("CFB687")
                //Ribbon
                char.skeleton.findSlot("Color_Ribbon").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_RibbonLight").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_RibbonPattern").color.setFromString("FFFFFF")
                char.skeleton.findSlot("Color_Band").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_BandLight").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
            }, 300);

        }
    }
    if(option.models.value == "/CharaP0094_50/CharaP0094_50.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                    //Scarf

                    //Apron
                    char.skeleton.findSlot("Color_Cap").color.setFromString("BF8539")
                    char.skeleton.findSlot("Color_CapLight").color.setFromString("BF8539")
                    char.skeleton.findSlot("Color_Apron").color.setFromString("BF8539")
                    char.skeleton.findSlot("Color_ApronLight").color.setFromString("BF8539")
                    char.skeleton.findSlot("Color_ApronMark").color.setFromString("CFB687")
                    //Ribbon
                    char.skeleton.findSlot("Color_Ribbon").color.setFromString("BF8539")
                    char.skeleton.findSlot("Color_RibbonLight").color.setFromString("BF8539")
                    char.skeleton.findSlot("Color_RibbonPattern").color.setFromString("FFFFFF")
                    char.skeleton.findSlot("Color_Band").color.setFromString("BF8539")
                    char.skeleton.findSlot("Color_BandLight").color.setFromString("BF8539")
                    char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
            }, 300);
        }
    }
}

function BlueClerk() {
    var checkBox = document.getElementById("myCheck");

    if(option.models.value == "CharaP0094_00.skel"){
        if (checkBox.checked = true){
            setDefaultSkin("ClerkCostume");
            //Scarf

            //Apron
            char.skeleton.findSlot("Color_Cap").color.setFromString("0097D9")
            char.skeleton.findSlot("Color_CapLight").color.setFromString("0097D9")
            char.skeleton.findSlot("Color_Apron").color.setFromString("0097D9")
            char.skeleton.findSlot("Color_ApronLight").color.setFromString("0097D9")
            char.skeleton.findSlot("Color_ApronMark").color.setFromString("A9C7E3")
            //Ribbon
            char.skeleton.findSlot("Color_Ribbon").color.setFromString("0097D9")
            char.skeleton.findSlot("Color_RibbonLight").color.setFromString("0097D9")
            char.skeleton.findSlot("Color_RibbonPattern").color.setFromString("FFFFFF")
            char.skeleton.findSlot("Color_Band").color.setFromString("0097D9")
            char.skeleton.findSlot("Color_BandLight").color.setFromString("0097D9")
            char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
        }
    }
    if(option.models.value == "/CharaP0094_08/CharaP0094_08.skel"){
        if (checkBox.checked = true){
            setNewCostume("CharaP0094_00.skel")
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf

                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_Apron").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_ApronLight").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_ApronMark").color.setFromString("A9C7E3")
                //Ribbon
                char.skeleton.findSlot("Color_Ribbon").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_RibbonLight").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_RibbonPattern").color.setFromString("FFFFFF")
                char.skeleton.findSlot("Color_Band").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_BandLight").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0094_50/CharaP0094_50.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf

                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_Apron").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_ApronLight").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_ApronMark").color.setFromString("A9C7E3")
                //Ribbon
                char.skeleton.findSlot("Color_Ribbon").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_RibbonLight").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_RibbonPattern").color.setFromString("FFFFFF")
                char.skeleton.findSlot("Color_Band").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_BandLight").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
            }, 300);

        }
    }
}

function PinkClerk() {
    var checkBox = document.getElementById("myCheck");

    if(option.models.value == "CharaP0094_00.skel"){
        if (checkBox.checked = true){
            setDefaultSkin("ClerkCostume");
            //Scarf

            //Apron
            char.skeleton.findSlot("Color_Cap").color.setFromString("EAC3CC")
            char.skeleton.findSlot("Color_CapLight").color.setFromString("EAC3CC")
            char.skeleton.findSlot("Color_Apron").color.setFromString("EAC3CC")
            char.skeleton.findSlot("Color_ApronLight").color.setFromString("EAC3CC")
            char.skeleton.findSlot("Color_ApronMark").color.setFromString("C498A2")
            //Ribbon
            char.skeleton.findSlot("Color_Ribbon").color.setFromString("EAC3CC")
            char.skeleton.findSlot("Color_RibbonLight").color.setFromString("EAC3CC")
            char.skeleton.findSlot("Color_RibbonPattern").color.setFromString("FFFFFF")
            char.skeleton.findSlot("Color_Band").color.setFromString("EAC3CC")
            char.skeleton.findSlot("Color_BandLight").color.setFromString("EAC3CC")
            char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
        }
    }
    if(option.models.value == "/CharaP0094_08/CharaP0094_08.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf

                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_Apron").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_ApronLight").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_ApronMark").color.setFromString("C498A2")
                //Ribbon
                char.skeleton.findSlot("Color_Ribbon").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_RibbonLight").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_RibbonPattern").color.setFromString("FFFFFF")
                char.skeleton.findSlot("Color_Band").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_BandLight").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
            }, 300);

        }
    }
    if(option.models.value == "/CharaP0094_50/CharaP0094_50.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                    //Scarf

                    //Apron
                    char.skeleton.findSlot("Color_Cap").color.setFromString("EAC3CC")
                    char.skeleton.findSlot("Color_CapLight").color.setFromString("EAC3CC")
                    char.skeleton.findSlot("Color_Apron").color.setFromString("EAC3CC")
                    char.skeleton.findSlot("Color_ApronLight").color.setFromString("EAC3CC")
                    char.skeleton.findSlot("Color_ApronMark").color.setFromString("C498A2")
                    //Ribbon
                    char.skeleton.findSlot("Color_Ribbon").color.setFromString("EAC3CC")
                    char.skeleton.findSlot("Color_RibbonLight").color.setFromString("EAC3CC")
                    char.skeleton.findSlot("Color_RibbonPattern").color.setFromString("FFFFFF")
                    char.skeleton.findSlot("Color_Band").color.setFromString("EAC3CC")
                    char.skeleton.findSlot("Color_BandLight").color.setFromString("EAC3CC")
                    char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
            }, 300);
        }
    }
}

function GreyClerk() {
    var checkBox = document.getElementById("myCheck");

    if(option.models.value == "CharaP0094_00.skel"){
        if (checkBox.checked = true){
            setDefaultSkin("ClerkCostume");
            //Scarf

            //Apron
            char.skeleton.findSlot("Color_Cap").color.setFromString("ABAEAD")
            char.skeleton.findSlot("Color_CapLight").color.setFromString("ABAEAD")
            char.skeleton.findSlot("Color_Apron").color.setFromString("ABAEAD")
            char.skeleton.findSlot("Color_ApronLight").color.setFromString("ABAEAD")
            char.skeleton.findSlot("Color_ApronMark").color.setFromString("8C908E")
            //Ribbon
            char.skeleton.findSlot("Color_Ribbon").color.setFromString("ABAEAD")
            char.skeleton.findSlot("Color_RibbonLight").color.setFromString("ABAEAD")
            char.skeleton.findSlot("Color_RibbonPattern").color.setFromString("FFFFFF")
            char.skeleton.findSlot("Color_Band").color.setFromString("ABAEAD")
            char.skeleton.findSlot("Color_BandLight").color.setFromString("ABAEAD")
            char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
        }
    }
    if(option.models.value == "/CharaP0094_08/CharaP0094_08.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf

                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_Apron").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_ApronLight").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_ApronMark").color.setFromString("8C908E")
                //Ribbon
                char.skeleton.findSlot("Color_Ribbon").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_RibbonLight").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_RibbonPattern").color.setFromString("FFFFFF")
                char.skeleton.findSlot("Color_Band").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_BandLight").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
            }, 300);

        }
    }
    if(option.models.value == "/CharaP0094_50/CharaP0094_50.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                    //Scarf

                    //Apron
                    char.skeleton.findSlot("Color_Cap").color.setFromString("ABAEAD")
                    char.skeleton.findSlot("Color_CapLight").color.setFromString("ABAEAD")
                    char.skeleton.findSlot("Color_Apron").color.setFromString("ABAEAD")
                    char.skeleton.findSlot("Color_ApronLight").color.setFromString("ABAEAD")
                    char.skeleton.findSlot("Color_ApronMark").color.setFromString("8C908E")
                    //Ribbon
                    char.skeleton.findSlot("Color_Ribbon").color.setFromString("ABAEAD")
                    char.skeleton.findSlot("Color_RibbonLight").color.setFromString("ABAEAD")
                    char.skeleton.findSlot("Color_RibbonPattern").color.setFromString("FFFFFF")
                    char.skeleton.findSlot("Color_Band").color.setFromString("ABAEAD")
                    char.skeleton.findSlot("Color_BandLight").color.setFromString("ABAEAD")
                    char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
            }, 300);
        }
    }
}

function PurpleClerk() {
    var checkBox = document.getElementById("myCheck");

    if(option.models.value =="CharaP0094_00.skel"){
        if (checkBox.checked = true){
            setDefaultSkin("ClerkCostume");
            //Scarf

            //Apron
            char.skeleton.findSlot("Color_Cap").color.setFromString("72629C")
            char.skeleton.findSlot("Color_CapLight").color.setFromString("72629C")
            char.skeleton.findSlot("Color_Apron").color.setFromString("72629C")
            char.skeleton.findSlot("Color_ApronLight").color.setFromString("72629C")
            char.skeleton.findSlot("Color_ApronMark").color.setFromString("9382C2")
            //Ribbon
            char.skeleton.findSlot("Color_Ribbon").color.setFromString("72629C")
            char.skeleton.findSlot("Color_RibbonLight").color.setFromString("72629C")
            char.skeleton.findSlot("Color_RibbonPattern").color.setFromString("FFFFFF")
            char.skeleton.findSlot("Color_Band").color.setFromString("72629C")
            char.skeleton.findSlot("Color_BandLight").color.setFromString("72629C")
            char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
        }
    }
    if(option.models.value =="/CharaP0094_08/CharaP0094_08.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf

                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("72629C")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("72629C")
                char.skeleton.findSlot("Color_Apron").color.setFromString("72629C")
                char.skeleton.findSlot("Color_ApronLight").color.setFromString("72629C")
                char.skeleton.findSlot("Color_ApronMark").color.setFromString("9382C2")
                //Ribbon
                char.skeleton.findSlot("Color_Ribbon").color.setFromString("72629C")
                char.skeleton.findSlot("Color_RibbonLight").color.setFromString("72629C")
                char.skeleton.findSlot("Color_RibbonPattern").color.setFromString("FFFFFF")
                char.skeleton.findSlot("Color_Band").color.setFromString("72629C")
                char.skeleton.findSlot("Color_BandLight").color.setFromString("72629C")
                char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
            }, 300);

        }
    }
    if(option.models.value == "/CharaP0094_50/CharaP0094_50.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                    //Scarf

                    //Apron
                    char.skeleton.findSlot("Color_Cap").color.setFromString("72629C")
                    char.skeleton.findSlot("Color_CapLight").color.setFromString("72629C")
                    char.skeleton.findSlot("Color_Apron").color.setFromString("72629C")
                    char.skeleton.findSlot("Color_ApronLight").color.setFromString("72629C")
                    char.skeleton.findSlot("Color_ApronMark").color.setFromString("9382C2")
                    //Ribbon
                    char.skeleton.findSlot("Color_Ribbon").color.setFromString("72629C")
                    char.skeleton.findSlot("Color_RibbonLight").color.setFromString("72629C")
                    char.skeleton.findSlot("Color_RibbonPattern").color.setFromString("FFFFFF")
                    char.skeleton.findSlot("Color_Band").color.setFromString("72629C")
                    char.skeleton.findSlot("Color_BandLight").color.setFromString("72629C")
                    char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
            }, 300);
        }
    }
}

function OrangeClerk() {
    var checkBox = document.getElementById("myCheck");

    if(option.models.value == "CharaP0094_00.skel"){
        if (checkBox.checked = true){
            setDefaultSkin("ClerkCostume");
            //Scarf

            //Apron
            char.skeleton.findSlot("Color_Cap").color.setFromString("F0A300")
            char.skeleton.findSlot("Color_CapLight").color.setFromString("F0A300")
            char.skeleton.findSlot("Color_Apron").color.setFromString("F0A300")
            char.skeleton.findSlot("Color_ApronLight").color.setFromString("F0A300")
            char.skeleton.findSlot("Color_ApronMark").color.setFromString("FDD47C")
            //Ribbon
            char.skeleton.findSlot("Color_Ribbon").color.setFromString("F0A300")
            char.skeleton.findSlot("Color_RibbonLight").color.setFromString("F0A300")
            char.skeleton.findSlot("Color_RibbonPattern").color.setFromString("FFFFFF")
            char.skeleton.findSlot("Color_Band").color.setFromString("F0A300")
            char.skeleton.findSlot("Color_BandLight").color.setFromString("F0A300")
            char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
        }
    }
    if(option.models.value == "/CharaP0094_08/CharaP0094_08.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf

                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_Apron").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_ApronLight").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_ApronMark").color.setFromString("FDD47C")
                //Ribbon
                char.skeleton.findSlot("Color_Ribbon").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_RibbonLight").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_RibbonPattern").color.setFromString("FFFFFF")
                char.skeleton.findSlot("Color_Band").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_BandLight").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
            }, 300);

        }
    }
    if(option.models.value == "/CharaP0094_50/CharaP0094_50.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                    //Scarf

                    //Apron
                    char.skeleton.findSlot("Color_Cap").color.setFromString("F0A300")
                    char.skeleton.findSlot("Color_CapLight").color.setFromString("F0A300")
                    char.skeleton.findSlot("Color_Apron").color.setFromString("F0A300")
                    char.skeleton.findSlot("Color_ApronLight").color.setFromString("F0A300")
                    char.skeleton.findSlot("Color_ApronMark").color.setFromString("FDD47C")
                    //Ribbon
                    char.skeleton.findSlot("Color_Ribbon").color.setFromString("F0A300")
                    char.skeleton.findSlot("Color_RibbonLight").color.setFromString("F0A300")
                    char.skeleton.findSlot("Color_RibbonPattern").color.setFromString("FFFFFF")
                    char.skeleton.findSlot("Color_Band").color.setFromString("F0A300")
                    char.skeleton.findSlot("Color_BandLight").color.setFromString("F0A300")
                    char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
            }, 300);
        }
    }
}

function BlackClerk() {
    var checkBox = document.getElementById("myCheck");

    if(option.models.value == "CharaP0094_00.skel"){
        if (checkBox.checked = true){
            setDefaultSkin("ClerkCostume");
            //Scarf

            //Apron
            char.skeleton.findSlot("Color_Cap").color.setFromString("524D4E")
            char.skeleton.findSlot("Color_CapLight").color.setFromString("524D4E")
            char.skeleton.findSlot("Color_Apron").color.setFromString("524D4E")
            char.skeleton.findSlot("Color_ApronLight").color.setFromString("524D4E")
            char.skeleton.findSlot("Color_ApronMark").color.setFromString("838383")
            //Ribbon
            char.skeleton.findSlot("Color_Ribbon").color.setFromString("524D4E")
            char.skeleton.findSlot("Color_RibbonLight").color.setFromString("524D4E")
            char.skeleton.findSlot("Color_RibbonPattern").color.setFromString("FFFFFF")
            char.skeleton.findSlot("Color_Band").color.setFromString("524D4E")
            char.skeleton.findSlot("Color_BandLight").color.setFromString("524D4E")
            char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
        }
    }
    if(option.models.value == "/CharaP0094_08/CharaP0094_08.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf

                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_Apron").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_ApronLight").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_ApronMark").color.setFromString("838383")
                //Ribbon
                char.skeleton.findSlot("Color_Ribbon").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_RibbonLight").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_RibbonPattern").color.setFromString("FFFFFF")
                char.skeleton.findSlot("Color_Band").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_BandLight").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0094_50/CharaP0094_50.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                    //Scarf

                    //Apron
                    char.skeleton.findSlot("Color_Cap").color.setFromString("524D4E")
                    char.skeleton.findSlot("Color_CapLight").color.setFromString("524D4E")
                    char.skeleton.findSlot("Color_Apron").color.setFromString("524D4E")
                    char.skeleton.findSlot("Color_ApronLight").color.setFromString("524D4E")
                    char.skeleton.findSlot("Color_ApronMark").color.setFromString("838383")
                    //Ribbon
                    char.skeleton.findSlot("Color_Ribbon").color.setFromString("524D4E")
                    char.skeleton.findSlot("Color_RibbonLight").color.setFromString("524D4E")
                    char.skeleton.findSlot("Color_RibbonPattern").color.setFromString("FFFFFF")
                    char.skeleton.findSlot("Color_Band").color.setFromString("524D4E")
                    char.skeleton.findSlot("Color_BandLight").color.setFromString("524D4E")
                    char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
            }, 300);
        }
    }
}

//Functions for Image Buttons
function setSkinByName(skinName) {
    //skeleton = char.skeleton;
    char.skeleton.setSkin(null);
    char.skeleton.setSkinByName(skinName);
    char.skeleton.setSlotsToSetupPose(); // Reset slot attachments
    char.state.apply(char.skeleton); // Apply any changes to the animation
}
function setNewCostume(CostumeName) {
    if (option.models.options && option.skins.options.length > 0) {
        option.models.value = CostumeName;
        loadChar(option.models.value);
    }
}
function setDefaultSkin(MySkinName) {
    if (option.skins.options && option.skins.options.length > 0) {
        option.skins.value = MySkinName;
        setSkinByName(option.skins.value);
    }
}
function toggleShiny() {
    const iconContain = document.querySelector(".Icon-Contain");
    const divs = iconContain.querySelectorAll("div[style*='display:']");

    divs.forEach((div) => {
      if (div.style.display === "flex") {
        div.style.display = "none";
      } else {
        div.style.display = "flex";
      }
    });
}
function toggleFemale() {
    setSkinByName("X_Normal");
}
function toggleMale() {
    setSkinByName("Normal");
}