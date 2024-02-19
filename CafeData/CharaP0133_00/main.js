let app;
let char;
let isCharacterLoaded = false;
let debug = 0; //set via console
let res;
let colorr;
let blackApron = false;
let orangeApron = false;
let purpleApron = false;
let greyApron = false;
let pinkApron = false;
let blueApron = false;
let brownApron = false;
let yellowApron = false;
let greenApron = false;
let redApron = false;


function reCanvas() {
    app = new PIXI.Application(
        {
            width: window.innerWidth/1,
            transparent: true,
            height: window.innerHeight/1,
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
    if (option.models.value == "CharaP0133_00.skel"){
        setTimeout(function() {
            setDefaultSkin("Normal");
        }, 300);
    }
    if (option.models.value == "/CharaP0133_01/CharaP0133_01.skel"){
        setNewCostume("CharaP0133_00.skel")
        setTimeout(function() {
            setDefaultSkin("Normal");
        }, 300);
    }
    if (option.models.value == "/CharaP0133_02/CharaP0133_02.skel"){
        setNewCostume("CharaP0133_00.skel")
        setTimeout(function() {
            setDefaultSkin("Normal");
        }, 300);
    }
    if (option.models.value == "/CharaP0133_03/CharaP0133_03.skel"){
        setNewCostume("CharaP0133_00.skel")
        setTimeout(function() {
            setDefaultSkin("Normal");
        }, 300);
    }
    if (option.models.value == "/CharaP0133_04/CharaP0133_04.skel"){
        setNewCostume("CharaP0133_00.skel")
        setTimeout(function() {
            setDefaultSkin("Normal");
        }, 300);
    }
    if (option.models.value == "/CharaP0133_06/CharaP0133_06.skel"){
        setNewCostume("CharaP0133_00.skel")
        setTimeout(function() {
            setDefaultSkin("Normal");
        }, 300);
    }
    if (option.models.value == "/CharaP0133_07/CharaP0133_07.skel"){
        setNewCostume("CharaP0133_00.skel")
        setTimeout(function() {
            setDefaultSkin("Normal");
        }, 300);
    }
    if (option.models.value == "/CharaP0133_09/CharaP0133_09.skel"){
        setNewCostume("CharaP0133_00.skel")
        setTimeout(function() {
            setDefaultSkin("Normal");
        }, 300);
    }
    if (option.models.value == "/CharaP0133a_00/CharaP0133a_00.skel"){
        setNewCostume("CharaP0133_00.skel")
        setTimeout(function() {
            setDefaultSkin("Normal");
        }, 300);
    }
    if (option.models.value == "/CharaP0133a_01/CharaP0133a_01.skel"){
        setNewCostume("CharaP0133_00.skel")
        setTimeout(function() {
            setDefaultSkin("Normal");
        }, 300);
    }
    if (option.models.value == "/CharaP0133a_02/CharaP0133a_02.skel"){
        setNewCostume("CharaP0133_00.skel")
        setTimeout(function() {
            setDefaultSkin("Normal");
        }, 300);
    }
    if (option.models.value == "/CharaP0133a_03/CharaP0133a_03.skel"){
        setNewCostume("CharaP0133_00.skel")
        setTimeout(function() {
            setDefaultSkin("Normal");
        }, 300);
    }
    if (option.models.value == "/CharaP0133a_04/CharaP0133a_04.skel"){
        setNewCostume("CharaP0133_00.skel")
        setTimeout(function() {
            setDefaultSkin("Normal");
        }, 300);
    }
    if (option.models.value == "/CharaP0133a_06/CharaP0133a_06.skel"){
        setNewCostume("CharaP0133_00.skel")
        setTimeout(function() {
            setDefaultSkin("Normal");
        }, 300);
    }
    if (option.models.value == "/CharaP0133a_07/CharaP0133a_07.skel"){
        setNewCostume("CharaP0133_00.skel")
        setTimeout(function() {
            setDefaultSkin("Normal");
        }, 300);
    }
    if (option.models.value == "/CharaP0133a_09/CharaP0133a_09.skel"){
        setNewCostume("CharaP0133_00.skel")
        setTimeout(function() {
            setDefaultSkin("Normal");
        }, 300);
    }
}

function EeveeSweet() {
    setNewCostume("/CharaP0133_01/CharaP0133_01.skel");
    setTimeout(function() {
        setDefaultSkin("Normal");
    }, 300);
}

function EeveeSuperChef() {
    setNewCostume("/CharaP0133_02/CharaP0133_02.skel");
    setTimeout(function() {
        setDefaultSkin("Normal");
    }, 300);
}

function EeveeHoliday() {
    setNewCostume("/CharaP0133_03/CharaP0133_03.skel");
    setTimeout(function() {
        setDefaultSkin("Normal");
    }, 300);
}

function EeveeChefWhite() {
    setNewCostume("/CharaP0133_04/CharaP0133_04.skel");
    setTimeout(function() {
        setDefaultSkin("Normal");
    }, 300);
}

function EeveeFancyTux() {
    setNewCostume("/CharaP0133_06/CharaP0133_06.skel");
    setTimeout(function() {
        setDefaultSkin("Normal");
    }, 300);
}

function EeveeFancyDress() {
    setNewCostume("/CharaP0133_07/CharaP0133_07.skel");
    setTimeout(function() {
        setDefaultSkin("Normal");
    }, 300);
}

function EeveeFestive() {
    setNewCostume("/CharaP0133_09/CharaP0133_09.skel");
    setTimeout(function() {
        setDefaultSkin("Normal");
    }, 300);
}
//////////
//Shiny
//////////
function SNormalSkin() {
    setNewCostume("/CharaP0133a_00/CharaP0133a_00.skel");
    setTimeout(function() {
        setDefaultSkin("Normal");
    }, 300);

}

function SEeveeSweet() {
    setNewCostume("/CharaP0133a_01/CharaP0133a_01.skel");
    setTimeout(function() {
        setDefaultSkin("Normal");
    }, 300);
}

function SEeveeSuperChef() {
    setNewCostume("/CharaP0133a_02/CharaP0133a_02.skel");
    setTimeout(function() {
        setDefaultSkin("Normal");
    }, 300);
}

function SEeveeHoliday() {
    setNewCostume("/CharaP0133a_03/CharaP0133a_03.skel");
    setTimeout(function() {
        setDefaultSkin("Normal");
    }, 300);
}

function SEeveeChefWhite() {
    setNewCostume("/CharaP0133a_04/CharaP0133a_04.skel");
    setTimeout(function() {
        setDefaultSkin("Normal");
    }, 300);
}

function SEeveeFancyTux() {
    setNewCostume("/CharaP0133a_06/CharaP0133a_06.skel");
    setTimeout(function() {
        setDefaultSkin("Normal");
    }, 300);
}

function SEeveeFancyDress() {
    setNewCostume("/CharaP0133a_07/CharaP0133a_07.skel");
    setTimeout(function() {
        setDefaultSkin("Normal");
    }, 300);
}

function SEeveeFestive() {
    setNewCostume("/CharaP0133a_09/CharaP0133a_09.skel");
    setTimeout(function() {
        setDefaultSkin("Normal");
    }, 300);
}
// Hats
//
function Clerk() {
    var checkBox = document.getElementById("myCheck");

    if(option.models.value == "CharaP0133_00.skel"){
            setDefaultSkin("ClerkCostume");
    }
    if(option.models.value == "/CharaP0133_01/CharaP0133_01.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_02/CharaP0133_02.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_03/CharaP0133_03.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_04/CharaP0133_04.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_06/CharaP0133_06.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_07/CharaP0133_07.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_09/CharaP0133_09.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
            }, 300);
        }
    }
//////////////
    if(option.models.value == "/CharaP0133a_00/CharaP0133a_00.skel"){
        setDefaultSkin("ClerkCostume");
    }
    if(option.models.value == "/CharaP0133a_01/CharaP0133a_01.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_02/CharaP0133a_02.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_03/CharaP0133a_03.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_04/CharaP0133a_04.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_06/CharaP0133a_06.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_07/CharaP0133a_07.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_09/CharaP0133a_09.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
            }, 300);
        }
    }
}

function RedClerk() {
    var checkBox = document.getElementById("myCheck");

    if(option.models.value == "CharaP0133_00.skel"){
        setDefaultSkin("ClerkCostume");
        //Scarf
        char.skeleton.findSlot("Color_Scarf").color.setFromString("D44626")
        char.skeleton.findSlot("Color_ScarfMark").color.setFromString("E7827C")
        //Apron
        char.skeleton.findSlot("Color_Cap").color.setFromString("D44626")
        char.skeleton.findSlot("Color_CapLight").color.setFromString("D44626")
        redApron = true;
    }
    if(option.models.value == "/CharaP0133_01/CharaP0133_01.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("D44626")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("E7827C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("D44626")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("D44626")
                redApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_02/CharaP0133_02.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("D44626")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("E7827C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("D44626")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("D44626")
                redApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_03/CharaP0133_03.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("D44626")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("E7827C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("D44626")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("D44626")
                redApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_04/CharaP0133_04.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("D44626")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("E7827C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("D44626")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("D44626")
                redApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_06/CharaP0133_06.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("D44626")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("E7827C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("D44626")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("D44626")
                redApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_07/CharaP0133_07.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("D44626")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("E7827C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("D44626")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("D44626")
                redApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_09/CharaP0133_09.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("D44626")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("E7827C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("D44626")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("D44626")
                redApron = true;
            }, 300);
        }
    }
//////////////
    if(option.models.value == "/CharaP0133a_00/CharaP0133a_00.skel"){
        setDefaultSkin("ClerkCostume");
        //Scarf
        char.skeleton.findSlot("Color_Scarf").color.setFromString("D44626")
        char.skeleton.findSlot("Color_ScarfMark").color.setFromString("E7827C")
        //Apron
        char.skeleton.findSlot("Color_Cap").color.setFromString("D44626")
        char.skeleton.findSlot("Color_CapLight").color.setFromString("D44626")
        char.skeleton.findSlot("Color_CapBack").color.setFromString("D44626")
        char.skeleton.findSlot("Color_Apron").color.setFromString("D44626")
        char.skeleton.findSlot("Color_ApronBack").color.setFromString("D44626")
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
    if(option.models.value == "/CharaP0133a_01/CharaP0133a_01.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("D44626")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("E7827C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("D44626")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("D44626")
                redApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_02/CharaP0133a_02.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("D44626")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("E7827C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("D44626")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("D44626")
                redApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_03/CharaP0133a_03.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("D44626")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("E7827C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("D44626")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("D44626")
                redApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_04/CharaP0133a_04.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("D44626")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("E7827C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("D44626")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("D44626")
                redApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_06/CharaP0133a_06.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("D44626")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("E7827C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("D44626")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("D44626")
                redApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_07/CharaP0133a_07.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("D44626")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("E7827C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("D44626")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("D44626")
                redApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_09/CharaP0133a_09.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("D44626")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("E7827C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("D44626")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("D44626")
                redApron = true;
            }, 300);
        }
    }
}

function GreenClerk() {
    var checkBox = document.getElementById("myCheck");

    if(option.models.value == "CharaP0133_00.skel"){
        setDefaultSkin("ClerkCostume");
        //Scarf
        char.skeleton.findSlot("Color_Scarf").color.setFromString("7BBEB4")
        char.skeleton.findSlot("Color_ScarfMark").color.setFromString("43A593")
        //Apron
        char.skeleton.findSlot("Color_Cap").color.setFromString("7BBEB4")
        char.skeleton.findSlot("Color_CapLight").color.setFromString("7BBEB4")
        greenApron = true;
    }
    if(option.models.value == "/CharaP0133_01/CharaP0133_01.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("43A593")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("7BBEB4")
                greenApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_02/CharaP0133_02.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("43A593")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("7BBEB4")
                greenApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_03/CharaP0133_03.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("43A593")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("7BBEB4")
                greenApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_04/CharaP0133_04.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("43A593")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("7BBEB4")
                greenApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_06/CharaP0133_06.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("43A593")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("7BBEB4")
                greenApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_07/CharaP0133_07.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("43A593")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("7BBEB4")
                greenApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_09/CharaP0133_09.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("43A593")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("7BBEB4")
                greenApron = true;
            }, 300);
        }
    }
//////////////
    if(option.models.value == "/CharaP0133a_00/CharaP0133a_00.skel"){
        setDefaultSkin("ClerkCostume");
        //Scarf
        char.skeleton.findSlot("Color_Scarf").color.setFromString("7BBEB4")
        char.skeleton.findSlot("Color_ScarfMark").color.setFromString("43A593")
        //Apron
        char.skeleton.findSlot("Color_Cap").color.setFromString("7BBEB4")
        char.skeleton.findSlot("Color_CapLight").color.setFromString("7BBEB4")
        char.skeleton.findSlot("Color_CapBack").color.setFromString("7BBEB4")
        char.skeleton.findSlot("Color_Apron").color.setFromString("7BBEB4")
        char.skeleton.findSlot("Color_ApronBack").color.setFromString("7BBEB4")
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
    if(option.models.value == "/CharaP0133a_01/CharaP0133a_01.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("43A593")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("7BBEB4")
                greenApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_02/CharaP0133a_02.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("43A593")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("7BBEB4")
                greenApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_03/CharaP0133a_03.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("43A593")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("7BBEB4")
                greenApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_04/CharaP0133a_04.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("43A593")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("7BBEB4")
                greenApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_06/CharaP0133a_06.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("43A593")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("7BBEB4")
                greenApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_07/CharaP0133a_07.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("43A593")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("7BBEB4")
                greenApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_09/CharaP0133a_09.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("43A593")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("7BBEB4")
                greenApron = true;
            }, 300);
        }
    }
}

function YellowClerk() {
    var checkBox = document.getElementById("myCheck");

    if(option.models.value == "CharaP0133_00.skel"){
        setDefaultSkin("ClerkCostume");
        //Scarf
        char.skeleton.findSlot("Color_Scarf").color.setFromString("F7D300")
        char.skeleton.findSlot("Color_ScarfMark").color.setFromString("5C6369")
        //Apron
        char.skeleton.findSlot("Color_Cap").color.setFromString("F7D300")
        char.skeleton.findSlot("Color_CapLight").color.setFromString("F7D300")
        yellowApron = true;
    }
    if(option.models.value == "/CharaP0133_01/CharaP0133_01.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("5C6369")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F7D300")
                yellowApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_02/CharaP0133_02.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("5C6369")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F7D300")
                yellowApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_03/CharaP0133_03.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("5C6369")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F7D300")
                yellowApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_04/CharaP0133_04.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("5C6369")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F7D300")
                yellowApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_06/CharaP0133_06.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("5C6369")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F7D300")
                yellowApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_07/CharaP0133_07.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("5C6369")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F7D300")
                yellowApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_09/CharaP0133_09.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("5C6369")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F7D300")
                yellowApron = true;
            }, 300);
        }
    }
//////////////
    if(option.models.value == "/CharaP0133a_00/CharaP0133a_00.skel"){
        setDefaultSkin("ClerkCostume");
        //Scarf
        char.skeleton.findSlot("Color_Scarf").color.setFromString("F7D300")
        char.skeleton.findSlot("Color_ScarfMark").color.setFromString("5C6369")
        //Apron
        char.skeleton.findSlot("Color_Cap").color.setFromString("F7D300")
        char.skeleton.findSlot("Color_CapLight").color.setFromString("F7D300")
        char.skeleton.findSlot("Color_CapBack").color.setFromString("F7D300")
        char.skeleton.findSlot("Color_Apron").color.setFromString("F7D300")
        char.skeleton.findSlot("Color_ApronBack").color.setFromString("F7D300")
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
    if(option.models.value == "/CharaP0133a_01/CharaP0133a_01.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("5C6369")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F7D300")
                yellowApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_02/CharaP0133a_02.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("5C6369")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F7D300")
                yellowApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_03/CharaP0133a_03.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("5C6369")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F7D300")
                yellowApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_04/CharaP0133a_04.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("5C6369")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F7D300")
                yellowApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_06/CharaP0133a_06.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("5C6369")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F7D300")
                yellowApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_07/CharaP0133a_07.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("5C6369")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F7D300")
                yellowApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_09/CharaP0133a_09.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("5C6369")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F7D300")
                yellowApron = true;
            }, 300);
        }
    }
}

function BrownClerk() {
    var checkBox = document.getElementById("myCheck");

    if(option.models.value == "CharaP0133_00.skel"){
        setDefaultSkin("ClerkCostume");
        //Scarf
        char.skeleton.findSlot("Color_Scarf").color.setFromString("BF8539")
        char.skeleton.findSlot("Color_ScarfMark").color.setFromString("CFB687")
        //Apron
        char.skeleton.findSlot("Color_Cap").color.setFromString("BF8539")
        char.skeleton.findSlot("Color_CapLight").color.setFromString("BF8539")
        brownApron = true;
    }
    if(option.models.value == "/CharaP0133_01/CharaP0133_01.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("CFB687")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("BF8539")
                brownApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_02/CharaP0133_02.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("CFB687")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("BF8539")
                brownApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_03/CharaP0133_03.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("CFB687")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("BF8539")
                brownApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_04/CharaP0133_04.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("CFB687")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("BF8539")
                brownApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_06/CharaP0133_06.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("CFB687")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("BF8539")
                brownApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_07/CharaP0133_07.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("CFB687")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("BF8539")
                brownApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_09/CharaP0133_09.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("CFB687")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("BF8539")
                brownApron = true;
            }, 300);
        }
    }
//////////////
    if(option.models.value == "/CharaP0133a_00/CharaP0133a_00.skel"){
        setDefaultSkin("ClerkCostume");
        //Scarf
        char.skeleton.findSlot("Color_Scarf").color.setFromString("BF8539")
        char.skeleton.findSlot("Color_ScarfMark").color.setFromString("CFB687")
        //Apron
        char.skeleton.findSlot("Color_Cap").color.setFromString("BF8539")
        char.skeleton.findSlot("Color_CapLight").color.setFromString("BF8539")
        char.skeleton.findSlot("Color_CapBack").color.setFromString("BF8539")
        char.skeleton.findSlot("Color_Apron").color.setFromString("BF8539")
        char.skeleton.findSlot("Color_ApronBack").color.setFromString("BF8539")
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
    if(option.models.value == "/CharaP0133a_01/CharaP0133a_01.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("CFB687")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("BF8539")
                brownApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_02/CharaP0133a_02.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("CFB687")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("BF8539")
                brownApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_03/CharaP0133a_03.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("CFB687")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("BF8539")
                brownApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_04/CharaP0133a_04.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("CFB687")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("BF8539")
                brownApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_06/CharaP0133a_06.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("CFB687")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("BF8539")
                brownApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_07/CharaP0133a_07.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("CFB687")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("BF8539")
                brownApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_09/CharaP0133a_09.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("CFB687")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("BF8539")
                brownApron = true;
            }, 300);
        }
    }
}

function BlueClerk() {
    var checkBox = document.getElementById("myCheck");

    if(option.models.value == "CharaP0133_00.skel"){
        setDefaultSkin("ClerkCostume");
        //Scarf
        char.skeleton.findSlot("Color_Scarf").color.setFromString("0097D9")
        char.skeleton.findSlot("Color_ScarfMark").color.setFromString("A9C7E3")
        //Apron
        char.skeleton.findSlot("Color_Cap").color.setFromString("0097D9")
        char.skeleton.findSlot("Color_CapLight").color.setFromString("0097D9")
        blueApron = true;
    }
    if(option.models.value == "/CharaP0133_01/CharaP0133_01.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("A9C7E3")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("0097D9")
                pinkApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_02/CharaP0133_02.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("A9C7E3")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("0097D9")
                blueApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_03/CharaP0133_03.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("A9C7E3")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("0097D9")
                blueApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_04/CharaP0133_04.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("A9C7E3")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("0097D9")
                blueApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_06/CharaP0133_06.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("A9C7E3")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("0097D9")
                blueApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_07/CharaP0133_07.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("A9C7E3")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("0097D9")
                blueApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_09/CharaP0133_09.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("A9C7E3")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("0097D9")
                blueApron = true;
            }, 300);
        }
    }
//////////////
    if(option.models.value == "/CharaP0133a_00/CharaP0133a_00.skel"){
        setDefaultSkin("ClerkCostume");
        //Scarf
        char.skeleton.findSlot("Color_Scarf").color.setFromString("0097D9")
        char.skeleton.findSlot("Color_ScarfMark").color.setFromString("A9C7E3")
        //Apron
        char.skeleton.findSlot("Color_Cap").color.setFromString("0097D9")
        char.skeleton.findSlot("Color_CapLight").color.setFromString("0097D9")
        char.skeleton.findSlot("Color_CapBack").color.setFromString("0097D9")
        char.skeleton.findSlot("Color_Apron").color.setFromString("0097D9")
        char.skeleton.findSlot("Color_ApronBack").color.setFromString("0097D9")
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
    if(option.models.value == "/CharaP0133a_01/CharaP0133a_01.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("A9C7E3")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("0097D9")
                blueApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_02/CharaP0133a_02.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("A9C7E3")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("0097D9")
                blueApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_03/CharaP0133a_03.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("A9C7E3")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("0097D9")
                blueApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_04/CharaP0133a_04.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("A9C7E3")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("0097D9")
                blueApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_06/CharaP0133a_06.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("A9C7E3")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("0097D9")
                blueApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_07/CharaP0133a_07.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("A9C7E3")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("0097D9")
                blueApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_09/CharaP0133a_09.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("A9C7E3")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("0097D9")
                blueApron = true;
            }, 300);
        }
    }
}

function PinkClerk() {
    var checkBox = document.getElementById("myCheck");

    if(option.models.value == "CharaP0133_00.skel"){
        setDefaultSkin("ClerkCostume");
        //Scarf
        char.skeleton.findSlot("Color_Scarf").color.setFromString("EAC3CC")
        char.skeleton.findSlot("Color_ScarfMark").color.setFromString("C498A2")
        //Apron
        char.skeleton.findSlot("Color_Cap").color.setFromString("EAC3CC")
        char.skeleton.findSlot("Color_CapLight").color.setFromString("EAC3CC")
        pinkApron = true;
    }
    if(option.models.value == "/CharaP0133_01/CharaP0133_01.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("C498A2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("EAC3CC")
                pinkApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_02/CharaP0133_02.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("C498A2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("EAC3CC")
                pinkApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_03/CharaP0133_03.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("C498A2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("EAC3CC")
                pinkApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_04/CharaP0133_04.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("C498A2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("EAC3CC")
                pinkApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_06/CharaP0133_06.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("C498A2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("EAC3CC")
                pinkApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_07/CharaP0133_07.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("C498A2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("EAC3CC")
                pinkApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_09/CharaP0133_09.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("C498A2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("EAC3CC")
                pinkApron = true;
            }, 300);
        }
    }
//////////////
    if(option.models.value == "/CharaP0133a_00/CharaP0133a_00.skel"){
        setDefaultSkin("ClerkCostume");
        //Scarf
        char.skeleton.findSlot("Color_Scarf").color.setFromString("EAC3CC")
        char.skeleton.findSlot("Color_ScarfMark").color.setFromString("C498A2")
        //Apron
        char.skeleton.findSlot("Color_Cap").color.setFromString("EAC3CC")
        char.skeleton.findSlot("Color_CapLight").color.setFromString("EAC3CC")
        char.skeleton.findSlot("Color_CapBack").color.setFromString("EAC3CC")
        char.skeleton.findSlot("Color_Apron").color.setFromString("EAC3CC")
        char.skeleton.findSlot("Color_ApronBack").color.setFromString("EAC3CC")
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
    if(option.models.value == "/CharaP0133a_01/CharaP0133a_01.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("C498A2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("EAC3CC")
                pinkApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_02/CharaP0133a_02.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("C498A2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("EAC3CC")
                pinkApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_03/CharaP0133a_03.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("C498A2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("EAC3CC")
                pinkApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_04/CharaP0133a_04.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("C498A2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("EAC3CC")
                pinkApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_06/CharaP0133a_06.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("C498A2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("EAC3CC")
                pinkApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_07/CharaP0133a_07.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("C498A2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("EAC3CC")
                pinkApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_09/CharaP0133a_09.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("C498A2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("EAC3CC")
                pinkApron = true;
            }, 300);
        }
    }
}

function GreyClerk() {
    var checkBox = document.getElementById("myCheck");

    if(option.models.value == "CharaP0133_00.skel"){
        setDefaultSkin("ClerkCostume");
        //Scarf
        char.skeleton.findSlot("Color_Scarf").color.setFromString("ABAEAD")
        char.skeleton.findSlot("Color_ScarfMark").color.setFromString("8C908E")
        //Apron
        char.skeleton.findSlot("Color_Cap").color.setFromString("ABAEAD")
        char.skeleton.findSlot("Color_CapLight").color.setFromString("ABAEAD")
        greyApron = true;
    }
    if(option.models.value == "/CharaP0133_01/CharaP0133_01.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("8C908E")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("ABAEAD")
                greyApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_02/CharaP0133_02.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("8C908E")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("ABAEAD")
                greyApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_03/CharaP0133_03.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("8C908E")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("ABAEAD")
                greyApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_04/CharaP0133_04.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("8C908E")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("ABAEAD")
                greyApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_06/CharaP0133_06.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("8C908E")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("ABAEAD")
                greyApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_07/CharaP0133_07.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("8C908E")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("ABAEAD")
                greyApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_09/CharaP0133_09.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("8C908E")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("ABAEAD")
                greyApron = true;
            }, 300);
        }
    }
//////////////
    if(option.models.value == "/CharaP0133a_00/CharaP0133a_00.skel"){
        setDefaultSkin("ClerkCostume");
        //Scarf
        char.skeleton.findSlot("Color_Scarf").color.setFromString("ABAEAD")
        char.skeleton.findSlot("Color_ScarfMark").color.setFromString("8C908E")
        //Apron
        char.skeleton.findSlot("Color_Cap").color.setFromString("ABAEAD")
        char.skeleton.findSlot("Color_CapLight").color.setFromString("ABAEAD")
        char.skeleton.findSlot("Color_CapBack").color.setFromString("ABAEAD")
        char.skeleton.findSlot("Color_Apron").color.setFromString("ABAEAD")
        char.skeleton.findSlot("Color_ApronBack").color.setFromString("ABAEAD")
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
    if(option.models.value == "/CharaP0133a_01/CharaP0133a_01.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("8C908E")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("ABAEAD")
                greyApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_02/CharaP0133a_02.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("8C908E")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("ABAEAD")
                greyApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_03/CharaP0133a_03.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("8C908E")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("ABAEAD")
                greyApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_04/CharaP0133a_04.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("8C908E")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("ABAEAD")
                greyApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_06/CharaP0133a_06.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("8C908E")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("ABAEAD")
                greyApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_07/CharaP0133a_07.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("8C908E")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("ABAEAD")
                greyApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_09/CharaP0133a_09.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("8C908E")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("ABAEAD")
                greyApron = true;
            }, 300);
        }
    }
}

function PurpleClerk() {
    var checkBox = document.getElementById("myCheck");

    if(option.models.value == "CharaP0133_00.skel"){
        setDefaultSkin("ClerkCostume");
        //Scarf
        char.skeleton.findSlot("Color_Scarf").color.setFromString("72629C")
        char.skeleton.findSlot("Color_ScarfMark").color.setFromString("9382C2")
        //Apron
        char.skeleton.findSlot("Color_Cap").color.setFromString("72629C")
        char.skeleton.findSlot("Color_CapLight").color.setFromString("72629C")
        purpleApron = true;
    }
    if(option.models.value == "/CharaP0133_01/CharaP0133_01.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("72629C")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("9382C2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("72629C")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("72629C")
                purpleApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_02/CharaP0133_02.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("72629C")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("9382C2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("72629C")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("72629C")
                purpleApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_03/CharaP0133_03.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("72629C")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("9382C2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("72629C")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("72629C")
                purpleApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_04/CharaP0133_04.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("72629C")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("9382C2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("72629C")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("72629C")
                purpleApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_06/CharaP0133_06.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("72629C")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("9382C2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("72629C")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("72629C")
                purpleApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_07/CharaP0133_07.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("72629C")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("9382C2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("72629C")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("72629C")
                purpleApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_09/CharaP0133_09.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("72629C")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("9382C2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("72629C")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("72629C")
                purpleApron = true;
            }, 300);
        }
    }
//////////////
    if(option.models.value == "/CharaP0133a_00/CharaP0133a_00.skel"){
        setDefaultSkin("ClerkCostume");
        //Scarf
        char.skeleton.findSlot("Color_Scarf").color.setFromString("72629C")
        char.skeleton.findSlot("Color_ScarfMark").color.setFromString("9382C2")
        //Apron
        char.skeleton.findSlot("Color_Cap").color.setFromString("72629C")
        char.skeleton.findSlot("Color_CapLight").color.setFromString("72629C")
        char.skeleton.findSlot("Color_CapBack").color.setFromString("72629C")
        char.skeleton.findSlot("Color_Apron").color.setFromString("72629C")
        char.skeleton.findSlot("Color_ApronBack").color.setFromString("72629C")
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
    if(option.models.value == "/CharaP0133a_01/CharaP0133a_01.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("72629C")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("9382C2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("72629C")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("72629C")
                purpleApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_02/CharaP0133a_02.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("72629C")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("9382C2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("72629C")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("72629C")
                purpleApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_03/CharaP0133a_03.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("72629C")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("9382C2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("72629C")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("72629C")
                purpleApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_04/CharaP0133a_04.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("72629C")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("9382C2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("72629C")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("72629C")
                purpleApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_06/CharaP0133a_06.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("72629C")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("9382C2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("72629C")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("72629C")
                purpleApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_07/CharaP0133a_07.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("72629C")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("9382C2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("72629C")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("72629C")
                purpleApron = true;
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_09/CharaP0133a_09.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("72629C")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("9382C2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("72629C")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("72629C")
                purpleApron = true;
            }, 300);
        }
    }
}

function OrangeClerk() {
    var checkBox = document.getElementById("myCheck");

    if(option.models.value == "CharaP0133_00.skel"){
        setDefaultSkin("ClerkCostume");
        //Scarf
        char.skeleton.findSlot("Color_Scarf").color.setFromString("F0A300")
        char.skeleton.findSlot("Color_ScarfMark").color.setFromString("FDD47C")
        //Apron
        char.skeleton.findSlot("Color_Cap").color.setFromString("F0A300")
        char.skeleton.findSlot("Color_CapLight").color.setFromString("F0A300")
        orangeApron = true;
                console.log("orange");
    }
    if(option.models.value == "/CharaP0133_01/CharaP0133_01.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("FDD47C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F0A300")
                orangeApron = true;
                console.log("orange");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_02/CharaP0133_02.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("FDD47C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F0A300")
                orangeApron = true;
                console.log("orange");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_03/CharaP0133_03.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("FDD47C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F0A300")
                orangeApron = true;
                console.log("orange");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_04/CharaP0133_04.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("FDD47C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F0A300")
                orangeApron = true;
                console.log("orange");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_06/CharaP0133_06.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("FDD47C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F0A300")
                orangeApron = true;
                console.log("orange");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_07/CharaP0133_07.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("FDD47C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F0A300")
                orangeApron = true;
                console.log("orange");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_09/CharaP0133_09.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("FDD47C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F0A300")
                orangeApron = true;
                console.log("orange");
            }, 300);
        }
    }
//////////////
    if(option.models.value == "/CharaP0133a_00/CharaP0133a_00.skel"){
        setDefaultSkin("ClerkCostume");
        //Scarf
        char.skeleton.findSlot("Color_Scarf").color.setFromString("F0A300")
        char.skeleton.findSlot("Color_ScarfMark").color.setFromString("FDD47C")
        //Apron
        char.skeleton.findSlot("Color_Cap").color.setFromString("F0A300")
        char.skeleton.findSlot("Color_CapLight").color.setFromString("F0A300")
        char.skeleton.findSlot("Color_CapBack").color.setFromString("F0A300")
        char.skeleton.findSlot("Color_Apron").color.setFromString("F0A300")
        char.skeleton.findSlot("Color_ApronBack").color.setFromString("F0A300")
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
    if(option.models.value == "/CharaP0133a_01/CharaP0133a_01.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("FDD47C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F0A300")
                orangeApron = true;
                console.log("orange");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_02/CharaP0133a_02.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("FDD47C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F0A300")
                orangeApron = true;
                console.log("orange");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_03/CharaP0133a_03.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("FDD47C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F0A300")
                orangeApron = true;
                console.log("orange");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_04/CharaP0133a_04.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("FDD47C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F0A300")
                orangeApron = true;
                console.log("orange");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_06/CharaP0133a_06.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("FDD47C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F0A300")
                orangeApron = true;
                console.log("orange");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_07/CharaP0133a_07.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("FDD47C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F0A300")
                orangeApron = true;
                console.log("orange");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_09/CharaP0133a_09.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("FDD47C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F0A300")
                orangeApron = true;
                console.log("orange");
            }, 300);
        }
    }
}

function BlackClerk() {
    var checkBox = document.getElementById("myCheck");

    if(option.models.value == "CharaP0133_00.skel"){
        setDefaultSkin("ClerkCostume");
        //Scarf
        char.skeleton.findSlot("Color_Scarf").color.setFromString("524D4E")
        char.skeleton.findSlot("Color_ScarfMark").color.setFromString("838383")
        //Apron
        char.skeleton.findSlot("Color_Cap").color.setFromString("524D4E")
        char.skeleton.findSlot("Color_CapLight").color.setFromString("524D4E")
        blackApron = true;
                console.log("black");
    }
    if(option.models.value == "/CharaP0133_01/CharaP0133_01.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("838383")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("524D4E")
                blackApron = true;
                console.log("black");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_02/CharaP0133_02.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("838383")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("524D4E")
                blackApron = true;
                console.log("black");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_03/CharaP0133_03.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("838383")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("524D4E")
                blackApron = true;
                console.log("black");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_04/CharaP0133_04.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("838383")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("524D4E")
                blackApron = true;
                console.log("black");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_06/CharaP0133_06.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("838383")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("524D4E")
                blackApron = true;
                console.log("black");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_07/CharaP0133_07.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("838383")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("524D4E")
                blackApron = true;
                console.log("black");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133_09/CharaP0133_09.skel"){
        if (checkBox.checked = true){
            NormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("838383")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("524D4E")
                blackApron = true;
                console.log("black");
            }, 300);
        }
    }
//////////////
    if(option.models.value == "/CharaP0133a_00/CharaP0133a_00.skel"){
        setDefaultSkin("ClerkCostume");
        //Scarf
        char.skeleton.findSlot("Color_Scarf").color.setFromString("524D4E")
        char.skeleton.findSlot("Color_ScarfMark").color.setFromString("838383")
        //Apron
        char.skeleton.findSlot("Color_Cap").color.setFromString("524D4E")
        char.skeleton.findSlot("Color_CapLight").color.setFromString("524D4E")
        char.skeleton.findSlot("Color_CapBack").color.setFromString("524D4E")
        char.skeleton.findSlot("Color_Apron").color.setFromString("524D4E")
        char.skeleton.findSlot("Color_ApronBack").color.setFromString("524D4E")
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
    if(option.models.value == "/CharaP0133a_01/CharaP0133a_01.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("838383")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("524D4E")
                blackApron = true;
                console.log("black");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_02/CharaP0133a_02.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("838383")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("524D4E")
                blackApron = true;
                console.log("black");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_03/CharaP0133a_03.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("838383")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("524D4E")
                blackApron = true;
                console.log("black");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_04/CharaP0133a_04.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("838383")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("524D4E")
                blackApron = true;
                console.log("black");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_06/CharaP0133a_06.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("838383")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("524D4E")
                blackApron = true;
                console.log("black");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_07/CharaP0133a_07.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("838383")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("524D4E")
                blackApron = true;
                console.log("black");
            }, 300);
        }
    }
    if(option.models.value == "/CharaP0133a_09/CharaP0133a_09.skel"){
        if (checkBox.checked = true){
            SNormalSkin()
            setTimeout(function() {
                setDefaultSkin("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("838383")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("524D4E")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("524D4E")
                blackApron = true;
                console.log("black");
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

    if(option.skins.value == "Normal"){
        setSkinByName("X_Normal");
    }
    if(option.skins.value == "X_Normal"){
        setSkinByName("X_Normal");
    }
    if(option.skins.value == "ClerkCostume"){
        if (blackApron) {
            setSkinByName("X_ClerkCostume");
            //Scarf
            char.skeleton.findSlot("Color_Scarf").color.setFromString("524D4E")
            char.skeleton.findSlot("Color_ScarfMark").color.setFromString("838383")
            //Apron
            char.skeleton.findSlot("Color_Cap").color.setFromString("524D4E")
            char.skeleton.findSlot("Color_CapLight").color.setFromString("524D4E")
        } else if (orangeApron) {
                setSkinByName("X_ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("FDD47C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F0A300")
        } else if (purpleApron) {
                setSkinByName("X_ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("72629C")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("9382C2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("72629C")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("72629C")
        } else if (greyApron) {
                setSkinByName("X_ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("8C908E")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("ABAEAD")
        } else if (pinkApron) {
                setSkinByName("X_ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("C498A2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("EAC3CC")
        } else if (blueApron) {
                setSkinByName("X_ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("A9C7E3")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("0097D9")
        } else if (brownApron) {
                setSkinByName("X_ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("CFB687")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("BF8539")
        } else if (yellowApron) {
                setSkinByName("X_ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("5C6369")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F7D300")
        } else if (greenApron) {
                setSkinByName("X_ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("43A593")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("7BBEB4")
        } else if (redApron) {
                setSkinByName("X_ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("D44626")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("E7827C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("D44626")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("D44626")
        }
    }
    if(option.skins.value == "X_ClerkCostume"){
        setSkinByName("X_ClerkCostume");
    }
}
function toggleMale() {

    if(option.skins.value == "Normal"){
        setSkinByName("Normal");
    }
    if(option.skins.value == "X_Normal"){
        setSkinByName("Normal");
    }
    if(option.skins.value == "X_ClerkCostume"){
        setSkinByName("ClerkCostume");
    }
    if(option.skins.value == "ClerkCostume"){
        if (blackApron) {
            setSkinByName("ClerkCostume");
            //Scarf
            char.skeleton.findSlot("Color_Scarf").color.setFromString("524D4E")
            char.skeleton.findSlot("Color_ScarfMark").color.setFromString("838383")
            //Apron
            char.skeleton.findSlot("Color_Cap").color.setFromString("524D4E")
            char.skeleton.findSlot("Color_CapLight").color.setFromString("524D4E")
        } else if (orangeApron) {
                setSkinByName("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("FDD47C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F0A300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F0A300")
        } else if (purpleApron) {
                setSkinByName("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("72629C")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("9382C2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("72629C")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("72629C")
        } else if (greyApron) {
                setSkinByName("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("8C908E")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("ABAEAD")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("ABAEAD")
        } else if (pinkApron) {
                setSkinByName("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("C498A2")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("EAC3CC")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("EAC3CC")
        }
        else if (blueApron) {
                setSkinByName("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("A9C7E3")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("0097D9")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("0097D9")
        } else if (brownApron) {
                setSkinByName("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("CFB687")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("BF8539")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("BF8539")
        } else if (yellowApron) {
                setSkinByName("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("5C6369")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("F7D300")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("F7D300")
        } else if (greenApron) {
                setSkinByName("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("43A593")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("7BBEB4")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("7BBEB4")
        } else if (redApron) {
                setSkinByName("ClerkCostume");
                //Scarf
                char.skeleton.findSlot("Color_Scarf").color.setFromString("D44626")
                char.skeleton.findSlot("Color_ScarfMark").color.setFromString("E7827C")
                //Apron
                char.skeleton.findSlot("Color_Cap").color.setFromString("D44626")
                char.skeleton.findSlot("Color_CapLight").color.setFromString("D44626")
        }
    }
}