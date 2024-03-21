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


// (Reference) Switch Costumes to Clerk Var.
function RedHat() {
    if (option.models.value == "assets/spine/pokemon_0494/CharaP0494_50.skel"){
        setNewCostume()
        setTimeout(function() {
            setDefaultSkin();
            //Scarf
            char.skeleton.findSlot("Color_ScarfLight").color.setFromString("CC4627")
            char.skeleton.findSlot("Color_ScarfMark").color.setFromString("E7827C")
            //Apron
            char.skeleton.findSlot("Color_Apron").color.setFromString("CC4627")
            char.skeleton.findSlot("Color_ApronBack").color.setFromString("CC4627")
            char.skeleton.findSlot("Color_ApronLight").color.setFromString("CC4627")
            char.skeleton.findSlot("Color_ApronMark").color.setFromString("E7827C")
            //Ribbon
            char.skeleton.findSlot("Color_Ribbon").color.setFromString("C86244")
            char.skeleton.findSlot("Color_Band").color.setFromString("8E3926")
            char.skeleton.findSlot("Color_BandLight").color.setFromString("8E3926")
            char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
        }, 300);
    } else{
        setDefaultSkin();
        //Scarf
        char.skeleton.findSlot("Color_ScarfLight").color.setFromString("CC4627")
        char.skeleton.findSlot("Color_ScarfMark").color.setFromString("E7827C")
        //Apron
        char.skeleton.findSlot("Color_Apron").color.setFromString("CC4627")
        char.skeleton.findSlot("Color_ApronBack").color.setFromString("CC4627")
        char.skeleton.findSlot("Color_ApronLight").color.setFromString("CC4627")
        char.skeleton.findSlot("Color_ApronMark").color.setFromString("E7827C")
        //Ribbon
        char.skeleton.findSlot("Color_Ribbon").color.setFromString("C86244")
        char.skeleton.findSlot("Color_Band").color.setFromString("8E3926")
        char.skeleton.findSlot("Color_BandLight").color.setFromString("8E3926")
        char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
    }
}

// Image Button
function LeahClerk() {
    setDefaultSkin("ClerkCostume");
    //Scarf
    char.skeleton.findSlot("Color_ScarfLight").color.setFromString("CC4627")
    char.skeleton.findSlot("Color_ScarfMark").color.setFromString("E7827C")
    //Apron
    char.skeleton.findSlot("Color_Apron").color.setFromString("CC4627")
    char.skeleton.findSlot("Color_ApronBack").color.setFromString("CC4627")
    char.skeleton.findSlot("Color_ApronLight").color.setFromString("CC4627")
    char.skeleton.findSlot("Color_ApronMark").color.setFromString("E7827C")
    //Ribbon
    char.skeleton.findSlot("Color_Ribbon").color.setFromString("C86244")
    char.skeleton.findSlot("Color_Band").color.setFromString("8E3926")
    char.skeleton.findSlot("Color_BandLight").color.setFromString("8E3926")
    char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
}

function LeahHalloween() {
    setDefaultSkin("Halloween");
}

function LeahNormal() {
    setDefaultSkin("default");
    //Scarf
    char.skeleton.findSlot("Color_ScarfLight").color.setFromString("CC4627")
    char.skeleton.findSlot("Color_ScarfMark").color.setFromString("E7827C")
    //Apron
    char.skeleton.findSlot("Color_Apron").color.setFromString("CC4627")
    char.skeleton.findSlot("Color_ApronBack").color.setFromString("CC4627")
    char.skeleton.findSlot("Color_ApronLight").color.setFromString("CC4627")
    char.skeleton.findSlot("Color_ApronMark").color.setFromString("E7827C")
    //Ribbon
    char.skeleton.findSlot("Color_Ribbon").color.setFromString("C86244")
    char.skeleton.findSlot("Color_Band").color.setFromString("8E3926")
    char.skeleton.findSlot("Color_BandLight").color.setFromString("8E3926")
    char.skeleton.findSlot("Color_BandPattern").color.setFromString("FFFFFF")
}


function setSkinByName(skinName) {
  //skeleton = char.skeleton;
  char.skeleton.setSkin(null);
  char.skeleton.setSkinByName(skinName);
  char.skeleton.setSlotsToSetupPose(); // Reset slot attachments
  char.state.apply(char.skeleton); // Apply any changes to the animation
}

//Functions for Image Buttons
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