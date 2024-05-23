/* Place your JavaScript in this file */

//CHANGE THESE CONSTANTS
const gameString = ["Sword Blox Online: Rebirth"] //create more gamebuttons if more games
const categoryString = [
    //add more if games are added
    [//Sword_Blox_Online_Rebirth
        "Player Data" ,"Inventory Data",
        "Entity Data","Status Data"
    ]
]
const subsectionString = [
    //add more if games are added
    [//Sword_Blox_Online_Rebirth
        [//Player Data
            'Health','Experience','Stamina','Damage','Strength',
            'Agility','Defense','Vitality','Luck','Smithing Experience'
        ],
        [//Inventory Data
            'Weapon Damage','Weapon Worth','Skill Damage','Gear Dexterity',
            'Gear Defense','Gear Worth','Material Worth','Consumable Worth','',''
        ],
        [//Entity Data
            'Mob Health','Mob Experience','Mob Damage','Mob Col',
            'Boss Health','Boss Experience','Boss Damage','Boss Col','',''
        ],
        [//Status Data
            'Damage','Duration','','','','','','','',''
        ]
    ]
]
const calculatorString = [
    //add more if games are added
    //Format: 'Label' 'TextField' 'Dropdown' 'CheckBox'
    [//Sword_Blox_Online_Rebirth
        [//Player Data
            [//Health
                'Player Level',' ','','',
                'Total Dexterity',' ','','',
                'Player Vitality',' ','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//Experience
                'Player Level',' ','','',
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//Stamina
                'Player Level',' ','','',
                'Player Agility',' ','','',
                'Player Strength',' ','','',
                'Player Vitality',' ','','',
                '','','','',
                '','','',''
            ],
            [//Damage
                'Base Damage',' ','','',
                'Player Strength',' ','','',
                'Weapon Type','',' ','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//Strength
                'Player Strength',' ','','',
                'Base Damage',' ','','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//Agility
                'Player Agility',' ','','',
                'Weapon Type','',' ','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//Defense
                'Player Defense',' ','','',
                'Total Gear Defense',' ','','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//Vitality
                'Player Vitality',' ','','',
                'Total Gear Dexterity',' ','','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//Luck
                'Player Luck',' ','','',
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//Smithing Experience
                'Smithing SK Required',' ','','',
                'Type','',' ','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
        ],
        [//Inventory Data
            [//Weapon Damage
                'Weapon SK',' ','','',
                'Weapon Type','',' ','',
                'Type','',' ','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//Weapon Worth
                'Weapon SK',' ','','',
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//Skill Damage
                'Weapon Damage',' ','','',
                'Skill Number','',' ','',
                'Weapon Type','',' ','',
                'User','','',' ',
                '','','','',
                '','','',''
            ],
            [//Gear Dexterity
                'Gear Level',' ','','',
                'Gear Type','',' ','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//Gear Defense
                'Gear Level',' ','','',
                'Gear Type','',' ','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//Gear Worth
                'Gear Level',' ','','',
                'Gear Type','',' ','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//Material Worth
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//Consumable Worth
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//blank
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//blank
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
        ],
        [//Entity Data
            [//Mob Health
                'Mob Level',' ','','',
                'Night','','',' ',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//Mob Experience
                'Mob Level',' ','','',
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//Mob Damage
                'Mob Level',' ','','',
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//Mob Col
                'Mob Level',' ','','',
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//Boss Health
                'Boss Level',' ','','',
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//Boss Experience
                'Boss Level',' ','','',
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//Boss Damage
                'Boss Level',' ','','',
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//Boss Col
                'Boss Level',' ','','',
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//blank
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//blank
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
        ],
        [//Status Data
            [//Damage
                'Player Health',' ','','',
                'Player Vitality',' ','','',
                'Effect','',' ','',
                'Armor','','',' ',
                'Upper Headwear','','',' ',
                'Lower Headwear','','',' '
            ],
            [//Duration
                'Player Vitality',' ','','',
                'Effect','',' ','',
                'Armor','','',' ',
                'Upper Headwear','','',' ',
                'Lower Headwear','','',' ',
                '','','',''
            ],
            [//blank
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//blank
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//blank
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//blank
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//blank
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//blank
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//blank
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//blank
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
        ]
    ]
]
const dropdownString = [
    [//Sword Blocking Toes
        [//Player Data
            [//Health
            ],
            [//Experience
            ],
            [//Stamina
            ],
            [//Damage, Weapon Type
                ['One-Hand','Dual Wield','Two-Hand','Rapier','Dagger'],
            ],
            [//Strength
            ],
            [//Agility, Weapon Type
                ['One-Hand','Dual Wield','Two-Hand','Rapier','Dagger'],
            ],
            [//-
            ],
            [//-
            ],
            [//-
            ],
            [//Smithing Experience, Type
                ['Normal','Boost','Game-pass','Boost w/ Game-pass']
            ],
        ],
        [//Inventory Data
            [//Weapon Damage
                ['One-Hand','Two-Hand','Rapier','Dagger'],
                ['Normal','Badge','Game-pass','Legendary',]
            ],
            [],
            [//Skill Damage
                ['1','2','3','4','5','6','7'],
                ['One-Hand','Two-Hand','Rapier','Dagger']
            ],
            [//Gear Dexterity
                ['Normal','Badge','Game-pass','Legendary']
            ],
            [//Gear Defense
                ['Normal','Badge','Game-pass','Legendary']
            ],
            [//Gear Worth
                ['Armor','Shield','Headwear']
            ],
            [],
            [],
            [],
            [],
        ],
        [//Entity Data
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            [],
            []
        ],
        [
            [
                ['Poison','Bleed','Freeze','Burn',
                'Paralysis','Decay','Light']
            ],
            [
                ['Poison','Bleed','Freeze','Burn',
                'Paralysis','Decay','Light']
            ],
        ]
    ]
]
const visualString = [
    [//Sword Blocking Toes
        [//Player Data
            [//Health
                'Player Base Health','Player Health','','',''
            ],
            [//Experience
                'Player Experience','Percentage Saved','Player Experience Saved','',''
            ],
            [
                'Player Base Stamina','Player Stamina','Stamina Regeneration','',''
            ],
            [
                'Player Damage','Player Critical Damage','','',''
            ],
            [
                'Increased Damage','Increased Stamina','Increased Multi-Hit Chance','',''
            ],
            [
                'Increased Stamina','Walkspeed','Runspeed','Hit-Cooldown','Jump-Cooldown',''
            ],
            ['Damage Reduced','','','',''],
            [
                'Increased Health','Increased Stamina','Increased Resistance','',''
            ],
            [
                'Critical Chance','Drop Chance','Increased Multi-Hit Chance','',''
            ],
            ['Player Smithing Experience','','','','']
        ],
        [//Inventory Data
            ['Weapon Damage','','','',''],
            ['Weapon Worth','','','',''],
            ['Skill Damage','','','',''],
            [
                'Armor Dexterity','Headwear Dexterity','','',''
            ],
            [
                'Armor Defense','Shield Defense','','',''
            ],
            ['Gear Worth','','','',''],
            ['Material Worth','','','',''],
            ['Consumable Worth','','','',''],
            ['','','','',''],
            ['','','','','']
        ],
        [//Entity Data
            ['Mob Health','Nighttime Health','','',''],
            ['Mob Experience','','','',''],
            ['Minimum Mob Damage','Maximum Mob Damage','','',''],
            ['Mob Col','','','',''],
            ['Boss Health','','','',''],
            ['Boss Experience','','','',''],
            ['Boss Damage','','','',''],
            ['Boss Col','','','',''],
            ['','','','',''],
            ['','','','','']
        ],
        [//Status Data
            ['Damage','','','',''],
            ['Duration','Boss Duration','','',''],
            ['','','','',''],
            ['','','','',''],
            ['','','','',''],
            ['','','','',''],
            ['','','','',''],
            ['','','','',''],
            ['','','','',''],
            ['','','','','']
        ],
    ]
]

//LET STUFFS
let level;
let totalDex;
let totalDef;
let agility;
let strength;
let vitality;
let defense;
let luck;
let baseDmg;
let type;
let legType;
let smithingSK;
let weaponSK;
let weaponDmg;
let skillNumber;
let user;
let gearLevel;
    
let mobLevel;
let night;
let bossLevel;

let statusEffect;
let armor;
let uppHead;
let lowHead;

//LETS FOR VISUALS
let parentG;
let enterG;
let data1G;
let data2G;
let data3G;
let data4G;
let data5G;
let data6G;
let iG;

//PLOTLY POSITION HOLDERS
var currentXRange = 0;
var currentYRange = 1000;
var changedValue = false;

//CONSTANTS FOR CANVAS
const width = document.getElementById('canv').width;
const height = document.getElementById('canv').height;
let tries;
tries = 0;

//Sets up the buttons
    function setupGame(gameName){
        document.getElementById("starter").hidden = false;
        for(let i = 0; i < document.getElementsByClassName(gameName).length; i++){
            document.getElementsByClassName(gameName)[i].innerHTML = gameString[i];
            document.getElementsByClassName(gameName)[i].hidden = false;
        }
    }
    function setupCategory(categoryName){
        for(let i = 0; i < document.getElementsByClassName(categoryName).length; i++){  
            document.getElementsByClassName(categoryName)[i].innerHTML = "Category-Title-"+i;
            document.getElementsByClassName(categoryName)[i].hidden = true;
        }
    }
    function setupSubsection(subsectionName){
        for(let i = 0; i < document.getElementsByClassName(subsectionName).length; i++){  
            document.getElementsByClassName(subsectionName)[i].innerHTML = "Subsection-Title-"+i;
            document.getElementsByClassName(subsectionName)[i].hidden = true;
        }
    }
    function setupCalculator(calculatorTitle){
        for(let i = 0; i < document.getElementsByClassName(calculatorTitle).length; i++){  
            document.getElementsByClassName(calculatorTitle)[i].innerHTML = "Calculator-Title-"+i;
            document.getElementsByClassName(calculatorTitle)[i].hidden = true;
        }
    }
    function setupVisual(visualTitle){
        for(let i = 0; i < document.getElementsByClassName(visualTitle).length; i++){
            document.getElementsByClassName(visualTitle)[i].innerHTML = "Visual-Title-"+i;
            document.getElementsByClassName(visualTitle)[i].hidden = true;
        }
    }
    function setupRevert(revertTitle){
        for(let i = 0; i < document.getElementsByClassName(revertTitle).length; i++){  
            document.getElementsByClassName(revertTitle)[i].innerHTML = '';
            document.getElementsByClassName(revertTitle)[i].hidden = true;
        }
    }
    function setupCanvas(){
        let myCanvas = document.getElementById('canv');
        myCanvas.hidden = true;    
    }

//Stops the toes from being pressed, opening up more toes
function stopToes(pressedItem){
    if(document.getElementById(pressedItem).className == "gameTitle"){
        for(let i = 0; i < document.getElementsByClassName("categoryTitle").length; i++){  
            document.getElementsByClassName("categoryTitle")[i].hidden = false;
        }
        for(let i = 0; i < document.getElementsByClassName("gameTitle").length; i++){
            document.getElementsByClassName("gameTitle")[i].hidden = true;
        }
        document.getElementById('rev1').innerHTML = document.getElementById(pressedItem).innerHTML;
        document.getElementById('rev1').hidden = false;
        //loads toes to be seen~
        loadToes(pressedItem);
    }
    if(document.getElementById(pressedItem).className == "categoryTitle"){
        for(let i = 0; i < document.getElementsByClassName("subsectionTitle").length; i++){  
            document.getElementsByClassName("subsectionTitle")[i].hidden = false;
        }
        for(let i = 0; i < document.getElementsByClassName("categoryTitle").length; i++){
            document.getElementsByClassName("categoryTitle")[i].hidden = true;
        }
        document.getElementById('rev2').innerHTML = document.getElementById(pressedItem).innerHTML;
        document.getElementById('rev2').hidden = false;
        loadToes(pressedItem);
    }
    if(document.getElementById(pressedItem).className == "subsectionTitle"){
        for(let i = 0; i < document.getElementsByClassName("calculatorTitle").length; i++){  
            document.getElementsByClassName("calculatorTitle")[i].hidden = false;
        }
        for(let i = 0; i < document.getElementsByClassName("subsectionTitle").length; i++){
            document.getElementsByClassName("subsectionTitle")[i].hidden = true;
        }
        document.getElementById('rev3').innerHTML = document.getElementById(pressedItem).innerHTML;
        document.getElementById('rev3').hidden = false;
        loadToes(pressedItem);
    }
    if(document.getElementById(pressedItem).className == "calculatorTitle"){
        for(let i = 0; i < document.getElementsByClassName("visualTitle").length; i++){  
            document.getElementsByClassName("visualTitle")[i].hidden = false;
        }
        for(let i = 0; i < document.getElementsByClassName("calculatorTitle").length; i++){
            //change to allow for calculatorTitle elements to stay visible, but disabled
            //also hide submit button
            document.getElementById('cal7').hidden = true;
            //document.getElementsByClassName("calculatorTitle")[i].hidden = true;
        }
        loadToes(pressedItem);
    }
    if(document.getElementById(pressedItem).className == "revertTitle"){
        
        if(pressedItem == 'rev1'){
            //hides all revertTitles, categoryTitles, subsectionTitles,
            // calculatorTitles, and unhides gameTitles
            for(let i = 0; i < document.getElementsByClassName("revertTitle").length; i++){
                document.getElementsByClassName('revertTitle')[i].hidden = true;
            }
            for(let i = 0; i < document.getElementsByClassName('gameTitle').length; i++){
                document.getElementsByClassName('gameTitle')[i].hidden = false;
            }
            for(let i = 0; i < document.getElementsByClassName('categoryTitle').length; i++){
                document.getElementsByClassName('categoryTitle')[i].hidden = true;
            }
            for(let i = 0; i < document.getElementsByClassName('subsectionTitle').length; i++){
                document.getElementsByClassName('subsectionTitle')[i].hidden = true;
            }
            for(let i = 0; i < document.getElementsByClassName('calculatorTitle').length; i++){
                document.getElementsByClassName('calculatorTitle')[i].hidden = true;
                if(document.getElementsByClassName("calculatorTitle")[i].tagName == "INPUT"){
                    if(i == 2){
                        document.getElementsByClassName('calculatorTitle')[i].value = '1';
                    }
                    else{
                        document.getElementsByClassName('calculatorTitle')[i].value = '0';
                    }
                    document.getElementsByClassName('calculatorTitle')[i].checked = false;
                }
            }
            for(let i = 0; i < document.getElementsByClassName('visualTitle').length; i++){
                document.getElementsByClassName('visualTitle')[i].hidden = true;
            }
            Plotly.purge('myPlot');
            document.getElementById('canv').hidden = true;
        }
        if(pressedItem == 'rev2'){
            //hides higher numbered revertTitles, subsectionTitles, calculatorTitles,
            // and unhides categoryTitles
            for(let i = 0; i < document.getElementsByClassName("revertTitle").length; i++){
                if(i != 0){
                    document.getElementsByClassName('revertTitle')[i].hidden = true;
                }
            }
            for(let i = 0; i < document.getElementsByClassName('categoryTitle').length; i++){
                document.getElementsByClassName('categoryTitle')[i].hidden = false;
            }
            for(let i = 0; i < document.getElementsByClassName('subsectionTitle').length; i++){
                document.getElementsByClassName('subsectionTitle')[i].hidden = true;
            }
            for(let i = 0; i < document.getElementsByClassName('calculatorTitle').length; i++){
                document.getElementsByClassName('calculatorTitle')[i].hidden = true;
                if(document.getElementsByClassName("calculatorTitle")[i].tagName == "INPUT"){
                    document.getElementsByClassName('calculatorTitle')[i].value = '0';
                    document.getElementsByClassName('calculatorTitle')[i].checked = false;
                }
            }
            for(let i = 0; i < document.getElementsByClassName('visualTitle').length; i++){
                document.getElementsByClassName('visualTitle')[i].hidden = true;
            }
            Plotly.purge('myPlot');
            document.getElementById('canv').hidden = true;
        }
        if(pressedItem == 'rev3'){
            //hides higher numbered revertTitles, calculatorTitles,
            // and unhides subsectionTitles            
            for(let i = 0; i < document.getElementsByClassName("revertTitle").length; i++){
                if(i > 1){
                    document.getElementsByClassName('revertTitle')[i].hidden = true;
                }
            }
            for(let i = 0; i < document.getElementsByClassName('subsectionTitle').length; i++){
                if(document.getElementsByClassName('subsectionTitle')[i].innerHTML != ''){
                    document.getElementsByClassName('subsectionTitle')[i].hidden = false;
                }
            }
            for(let i = 0; i < document.getElementsByClassName('calculatorTitle').length; i++){
                document.getElementsByClassName('calculatorTitle')[i].hidden = true;
                if(document.getElementsByClassName("calculatorTitle")[i].tagName == "INPUT"){
                    document.getElementsByClassName('calculatorTitle')[i].value = '0';
                    document.getElementsByClassName('calculatorTitle')[i].checked = false;
                }
            }
            for(let i = 0; i < document.getElementsByClassName('visualTitle').length; i++){
                document.getElementsByClassName('visualTitle')[i].hidden = true;
            }
            Plotly.purge('myPlot');
            document.getElementById('canv').hidden = true;
        }
    }
}

//Loads the data within the toes whenever a toe is pressed
function loadToes(pressedItem){
    if(document.getElementById(pressedItem).className == "gameTitle"){
        
        //load categoryToes
        for(let i = 0; i < document.getElementsByClassName("gameTitle").length; i++){
            for(let v = 0; v < document.getElementsByClassName("categoryTitle").length; v++){
                document.getElementsByClassName("categoryTitle")[v].innerHTML = categoryString[i][v];
                if(categoryString[i][v] == ""){
                    document.getElementsByClassName("categoryTitle")[v].hidden = true;
                }
            }
        }
    }
    if(document.getElementById(pressedItem).className == "categoryTitle"){
        
        //load subsectionToes
        for(let i = 0; i < document.getElementsByClassName("gameTitle").length; i++){
            for(let v = 0; v < document.getElementsByClassName("categoryTitle").length; v++){
                for(let s = 0; s < document.getElementsByClassName("subsectionTitle").length; s++){
                    if(pressedItem == document.getElementsByClassName("categoryTitle")[v].id){
                        document.getElementsByClassName("subsectionTitle")[s].innerHTML = subsectionString[i][v][s];
                        if(subsectionString[i][v][s] == ""){
                            document.getElementsByClassName("subsectionTitle")[s].hidden = true;
                        }
                    }
                }
            }
        }
    }
    if(document.getElementById(pressedItem).className == "subsectionTitle"){
        //load calculator toes, much more crust
        //how about instead of going through all, we can look at revs, if rev1.innerHTML = gam1.innerHTML etc
        var a = 0;
        for(let i = 0; i < document.getElementsByClassName("gameTitle").length; i++){
            //if(document.getElementsByClassName("gameTitle")[i].innerHTML == document.getElementById("rev1").innerHTML){
                //maybe use?
            //}
            for(let v = 0; v < document.getElementsByClassName("categoryTitle").length; v++){
                for(let s = 0; s < document.getElementsByClassName("subsectionTitle").length; s++){
                    if(document.getElementById('rev2').innerHTML == document.getElementsByClassName("categoryTitle")[v].innerHTML){
                        for(let t = 0; t < document.getElementsByClassName("calculatorTitle").length; t++){
                            if(pressedItem == document.getElementsByClassName("subsectionTitle")[s].id){
                                document.getElementsByClassName("calculatorTitle")[t].innerHTML = calculatorString[i][v][s][t]+':';
                                if(document.getElementsByClassName('calculatorTitle')[t].tagName === "BUTTON"){
                                    document.getElementsByClassName('calculatorTitle')[t].innerHTML = 'Submit'
                                }
                                if(calculatorString[i][v][s][t] == '' && document.getElementsByClassName('calculatorTitle')[t].tagName != "BUTTON"){
                                    document.getElementsByClassName("calculatorTitle")[t].hidden = true;
                                }
                                //creates options for dropdowns
                                else if(document.getElementsByClassName("calculatorTitle")[t].tagName === 'SELECT' && document.getElementsByClassName("calculatorTitle")[t].length === 0){
                                    for(let b = 0; b < dropdownString[i][v][s][a].length; b++){
                                        let y = document.createElement("OPTION");
                                        y.innerHTML = dropdownString[i][v][s][a][b];
                                        document.getElementsByClassName("calculatorTitle")[t].appendChild(y);
                                    }
                                    a++;  
                                }
                                //sets data to last used if it was used last
                                if(parentG == document.getElementById('rev2').innerHTML && enterG == document.getElementById('rev3').innerHTML){
                                    if(t == 1 && document.getElementsByClassName('calculatorTitle')[t].hidden == false)
                                        document.getElementsByClassName('calculatorTitle')[t].value = data1G;
                                    if(t == 2 && document.getElementsByClassName('calculatorTitle')[t].hidden == false)
                                        document.getElementsByClassName('calculatorTitle')[t].value = data1G;
                                    if(t == 3 && document.getElementsByClassName('calculatorTitle')[t].hidden == false)
                                        document.getElementsByClassName('calculatorTitle')[t].checked = data1G;
                                    if(t == 5 && document.getElementsByClassName('calculatorTitle')[t].hidden == false)
                                        document.getElementsByClassName('calculatorTitle')[t].value = data2G;
                                    if(t == 6 && document.getElementsByClassName('calculatorTitle')[t].hidden == false)
                                        document.getElementsByClassName('calculatorTitle')[t].value = data2G;
                                    if(t == 7 && document.getElementsByClassName('calculatorTitle')[t].hidden == false)
                                        document.getElementsByClassName('calculatorTitle')[t].checked = data2G;
                                    if(t == 9 && document.getElementsByClassName('calculatorTitle')[t].hidden == false)
                                        document.getElementsByClassName('calculatorTitle')[t].value = data3G;
                                    if(t == 10 && document.getElementsByClassName('calculatorTitle')[t].hidden == false)
                                        document.getElementsByClassName('calculatorTitle')[t].value = data3G;
                                    if(t == 11 && document.getElementsByClassName('calculatorTitle')[t].hidden == false)
                                        document.getElementsByClassName('calculatorTitle')[t].checked = data3G;
                                    if(t == 13 && document.getElementsByClassName('calculatorTitle')[t].hidden == false)
                                        document.getElementsByClassName('calculatorTitle')[t].value = data4G;
                                    if(t == 14 && document.getElementsByClassName('calculatorTitle')[t].hidden == false)
                                        document.getElementsByClassName('calculatorTitle')[t].value = data4G;
                                    if(t == 15 && document.getElementsByClassName('calculatorTitle')[t].hidden == false)
                                        document.getElementsByClassName('calculatorTitle')[t].checked = data4G;
                                    if(t == 17 && document.getElementsByClassName('calculatorTitle')[t].hidden == false)
                                        document.getElementsByClassName('calculatorTitle')[t].value = data5G;
                                    if(t == 18 && document.getElementsByClassName('calculatorTitle')[t].hidden == false)
                                        document.getElementsByClassName('calculatorTitle')[t].value = data5G;
                                    if(t == 19 && document.getElementsByClassName('calculatorTitle')[t].hidden == false)
                                        document.getElementsByClassName('calculatorTitle')[t].checked = data5G;
                                    if(t == 21 && document.getElementsByClassName('calculatorTitle')[t].hidden == false)
                                        document.getElementsByClassName('calculatorTitle')[t].value = data6G;
                                    if(t == 22 && document.getElementsByClassName('calculatorTitle')[t].hidden == false)
                                        document.getElementsByClassName('calculatorTitle')[t].value = data6G;
                                    if(t == 23 && document.getElementsByClassName('calculatorTitle')[t].hidden == false)
                                        document.getElementsByClassName('calculatorTitle')[t].checked = data6G;
                                    
                                }
                            }
                        }
                    } 
                }
            }
        }
        a=0;
    }
    if(document.getElementById(pressedItem).className == "calculatorTitle"){
        //load visual titles and graphs/tables (done :D)
        for(let i = 0; i < document.getElementsByClassName('gameTitle').length; i++){
            if(document.getElementsByClassName("gameTitle")[i].innerHTML == document.getElementById("rev1").innerHTML){
                for(let v = 0; v < document.getElementsByClassName('categoryTitle').length; v++){
                    if(document.getElementsByClassName('categoryTitle')[v].innerHTML == document.getElementById('rev2').innerHTML){
                        for(let s = 0; s < document.getElementsByClassName('subsectionTitle').length; s++){
                            if(document.getElementsByClassName('subsectionTitle')[s].innerHTML == document.getElementById('rev3').innerHTML){
                                const c = [];
                                let noPass;
                                noPass = false;
                                //temp stores values within a list to be used for calculations
                                for(let b = 0; b < document.getElementsByClassName('calculatorTitle').length; b++){
                                    if(document.getElementsByClassName('calculatorTitle')[b].tagName == "INPUT" && document.getElementsByClassName('calculatorTitle')[b].type == "checkbox"){
                                        if(calculatorString[i][v][s][b] == ' '){
                                            c.push(document.getElementsByClassName('calculatorTitle')[b].checked);
                                            noPass = true;
                                        }
                                    }
                                    if(document.getElementsByClassName('calculatorTitle')[b].tagName == "SELECT"){
                                        if(document.getElementsByClassName('calculatorTitle')[b].value != undefined && document.getElementsByClassName('calculatorTitle')[b].value != ''){
                                            c.push(document.getElementsByClassName('calculatorTitle')[b].value);
                                            noPass = true;
                                        }
                                    }
                                        
                                    if(noPass == false){
                                        if(document.getElementsByClassName('calculatorTitle')[b].tagName == "INPUT" && document.getElementsByClassName('calculatorTitle')[b].type == "number" ){
                                            //check for undefined and stop those toes from attacking the queen yaaaaa
                                            //remember to set all values to 0 or 1 when clicking rev1/2/3
                                            if(document.getElementsByClassName('calculatorTitle')[b].value != undefined && calculatorString[i][v][s][b] == ' '){
                                                c.push(document.getElementsByClassName('calculatorTitle')[b].value);
                                            }
                                        }
                                    }
                                    noPass = false;
                                }
                                //displays visualTitles
                                for(let t = 0; t < document.getElementsByClassName('visualTitle').length; t++){
                                    document.getElementsByClassName('visualTitle')[t].innerHTML = visualString[i][v][s][t]+": ";
                                    
                                    if(visualString[i][v][s][t] == ''){
                                        document.getElementsByClassName('visualTitle')[t].hidden = true;
                                    }
                                    while(c.length < 6){
                                        c.push('0')
                                    }
                                    document.getElementsByClassName('visualTitle')[t].innerHTML += 
                                    formulaToes(document.getElementById('rev2').innerHTML,document.getElementById('rev3').innerHTML,c[0],c[1],c[2],c[3],c[4],c[5],t);
                                    //console.log(c);
                                    
                                }
                                createGraph(calculatorString[i][v][s][0], visualString[i][v][s][0]);
                                console.log("Submitted values for "+document.getElementsByClassName('subsectionTitle')[s].innerHTML);
                            }
                        }
                    }
                }
            }
        }
    }
}

//Makes a toe conform to the fungus, also allows the fungus to grow
function forceAmountToes(changedItem){
    //confirm input type
    if(document.getElementById(changedItem).tagName === "INPUT"){
        if(document.getElementById(changedItem).value == ''){
            document.getElementById(changedItem).value = 0;
        } 
    }
    if(document.getElementById('cal7').hidden == true){

        let i;
            //find a game name that matches rev1
            for(let a = 0; a < document.getElementsByClassName('gameTitle').length; a++){
                if(document.getElementById('rev1').innerHTML == document.getElementsByClassName('gameTitle')[a].innerHTML){
                    i = a;
                }
            }
            let v;
            //find a category name that matches rev2
            for(let a = 0; a < document.getElementsByClassName('categoryTitle').length; a++){
                if(document.getElementsByClassName('categoryTitle')[a].innerHTML == document.getElementById('rev2').innerHTML){
                    v = a;
                }
            }
            let s;
            //find a subsection name that matches rev3
            for(let a = 0; a < document.getElementsByClassName('subsectionTitle').length; a++){
                if(document.getElementsByClassName('subsectionTitle')[a].innerHTML == document.getElementById('rev3').innerHTML){
                    s = a;
                }
            }

        let changedData;
        let indexOfCal;
        let noPass;
        noPass = false;

        //is this even needed???
        for(let b = 0; b < document.getElementsByClassName('calculatorTitle').length; b++){
            if(document.getElementById(changedItem) == document.getElementsByClassName('calculatorTitle')[b]){
                indexOfCal = b;
                    if(document.getElementsByClassName('calculatorTitle')[b].tagName == "INPUT" && document.getElementsByClassName('calculatorTitle')[b].type == "checkbox"){
                        if(calculatorString[i][v][s][b] == ' '){
                            changedData = document.getElementsByClassName('calculatorTitle')[b].checked;
                            noPass = true;
                        }
                    }
                    if(document.getElementsByClassName('calculatorTitle')[b].tagName == "SELECT"){
                        if(document.getElementsByClassName('calculatorTitle')[b].value != undefined && document.getElementsByClassName('calculatorTitle')[b].value != ''){
                            changedData = document.getElementsByClassName('calculatorTitle')[b].value;
                            noPass = true;
                        }
                    }
                                        
                    if(noPass == false){
                        if(document.getElementsByClassName('calculatorTitle')[b].tagName == "INPUT" && document.getElementsByClassName('calculatorTitle')[b].type == "number" ){
                            //check for undefined and stop those toes from attacking the queen yaaaaa
                            //remember to set all values to 0 or 1 when clicking rev1/2/3
                            if(document.getElementsByClassName('calculatorTitle')[b].value != undefined && calculatorString[i][v][s][b] == ' '){
                                changedData = document.getElementsByClassName('calculatorTitle')[b].value;
                            }
                        }
                    }
                    noPass = false;
                
            }
        }
        //sets data to last used if it was used last
        if(parentG == document.getElementById('rev2').innerHTML && enterG == document.getElementById('rev3').innerHTML){
            if(indexOfCal == 1 && document.getElementsByClassName('calculatorTitle')[indexOfCal].hidden == false)
                data1G = document.getElementsByClassName('calculatorTitle')[indexOfCal].value;
            if(indexOfCal == 2 && document.getElementsByClassName('calculatorTitle')[indexOfCal].hidden == false)
                data1G = document.getElementsByClassName('calculatorTitle')[indexOfCal].value;
            if(indexOfCal == 3 && document.getElementsByClassName('calculatorTitle')[indexOfCal].hidden == false)
                data1G = document.getElementsByClassName('calculatorTitle')[indexOfCal].checked;
            if(indexOfCal == 5 && document.getElementsByClassName('calculatorTitle')[indexOfCal].hidden == false)
                data2G = document.getElementsByClassName('calculatorTitle')[indexOfCal].value;
            if(indexOfCal == 6 && document.getElementsByClassName('calculatorTitle')[indexOfCal].hidden == false)
                data2G = document.getElementsByClassName('calculatorTitle')[indexOfCal].value;
            if(indexOfCal == 7 && document.getElementsByClassName('calculatorTitle')[indexOfCal].hidden == false)
                data2G = document.getElementsByClassName('calculatorTitle')[indexOfCal].checked;
            if(indexOfCal == 9 && document.getElementsByClassName('calculatorTitle')[indexOfCal].hidden == false)
                data3G = document.getElementsByClassName('calculatorTitle')[indexOfCal].value;
            if(indexOfCal == 10 && document.getElementsByClassName('calculatorTitle')[indexOfCal].hidden == false)
                data3G = document.getElementsByClassName('calculatorTitle')[indexOfCal].value;
            if(indexOfCal == 11 && document.getElementsByClassName('calculatorTitle')[indexOfCal].hidden == false)
                data3G = document.getElementsByClassName('calculatorTitle')[indexOfCal].checked;
            if(indexOfCal == 13 && document.getElementsByClassName('calculatorTitle')[indexOfCal].hidden == false)
                data4G = document.getElementsByClassName('calculatorTitle')[indexOfCal].value;
            if(indexOfCal == 14 && document.getElementsByClassName('calculatorTitle')[indexOfCal].hidden == false)
                data4G = document.getElementsByClassName('calculatorTitle')[indexOfCal].value;
            if(indexOfCal == 15 && document.getElementsByClassName('calculatorTitle')[indexOfCal].hidden == false)
                data4G = document.getElementsByClassName('calculatorTitle')[indexOfCal].checked;
            if(indexOfCal == 17 && document.getElementsByClassName('calculatorTitle')[indexOfCal].hidden == false)
                data5G = document.getElementsByClassName('calculatorTitle')[indexOfCal].value;
            if(indexOfCal == 18 && document.getElementsByClassName('calculatorTitle')[indexOfCal].hidden == false)
                data5G = document.getElementsByClassName('calculatorTitle')[indexOfCal].value;
            if(indexOfCal == 19 && document.getElementsByClassName('calculatorTitle')[indexOfCal].hidden == false)
                data5G = document.getElementsByClassName('calculatorTitle')[indexOfCal].checked;
            if(indexOfCal == 21 && document.getElementsByClassName('calculatorTitle')[indexOfCal].hidden == false)
                data6G = document.getElementsByClassName('calculatorTitle')[indexOfCal].value;
            if(indexOfCal == 22 && document.getElementsByClassName('calculatorTitle')[indexOfCal].hidden == false)
                data6G = document.getElementsByClassName('calculatorTitle')[indexOfCal].value;
            if(indexOfCal == 23 && document.getElementsByClassName('calculatorTitle')[indexOfCal].hidden == false)
                data6G = document.getElementsByClassName('calculatorTitle')[indexOfCal].checked;
        }
        for(let t = 0; t < document.getElementsByClassName('visualTitle').length; t++){
            document.getElementsByClassName('visualTitle')[t].innerHTML = visualString[i][v][s][t]+": ";
                                    
            if(visualString[i][v][s][t] == ''){
                document.getElementsByClassName('visualTitle')[t].hidden = true;
            }
            document.getElementsByClassName('visualTitle')[t].innerHTML += 
            formulaToes(document.getElementById('rev2').innerHTML,document.getElementById('rev3').innerHTML,data1G,data2G,data3G,data4G,data5G,data6G,t);
            //console.log("Refreshed value");
                                    
        }
        createGraph(calculatorString[i][v][s][0], visualString[i][v][s][0]);
        changedValue = true;
        //console.log("Submitted values for "+document.getElementsByClassName('subsectionTitle')[s].innerHTML);

    }
}

//formulas the toes into multiple categories based on texture
function formulaToes(parent, enter, d1, d2, d3, d4, d5, d6, i){
    parentG = parent;
    enterG = enter;
    data1G = d1;
    data2G = d2;
    data3G = d3;
    data4G = d4;
    data5G = d5;
    data6G = d6;
    iG = i;
    let output;
    output = 0.001;
        if(parent == "Player Data"){
            if(enter == "Health"){
                level = Number(d1);
                totalDex = Number(d2);
                vitality = Number(d3);
                if(i == 0){
                    //estimation
                    let baseHealth;
                    baseHealth = -748031721.292*Math.pow(level, -1.90410567265);
                    baseHealth += 779370715.358*Math.pow(level, -1.90391429441);
                    baseHealth += 424.948514369*Math.pow(level, -28.5977515991);
                    baseHealth += 18.908114238*Math.pow(level, 0.894448718694);
                    baseHealth += -31339438.195*Math.pow(level, -1.8993698279);
                    baseHealth += 3.58965212725*Math.pow(level, 1.41199359695);
                    baseHealth += 111.690224049;
                    output =  baseHealth;
                }
                if(i == 1){
                    let health;
                    //base health
                    health = -748031721.292*Math.pow(level, -1.90410567265);
                    health += 779370715.358*Math.pow(level, -1.90391429441);
                    health += 424.948514369*Math.pow(level, -28.5977515991);
                    health += 18.908114238*Math.pow(level, 0.894448718694);
                    health += -31339438.195*Math.pow(level, -1.8993698279);
                    health += 3.58965212725*Math.pow(level, 1.41199359695);
                    health += 111.690224049;
                    //health from dexterity
                    health += totalDex*((vitality / 100) + 10);
                    output =  health;
                }
                if(typeof i === 'string' || i instanceof String){
                    if(i == '0'){
                        let str;
                        str = '-748031721.292*Math.pow(x, -1.90410567265)';
                        str += '+779370715.358*Math.pow(x, -1.90391429441)';
                        str += '+424.948514369*Math.pow(x, -28.5977515991)';
                        str += '+18.908114238*Math.pow(x, 0.894448718694)';
                        str += '-31339438.195*Math.pow(x, -1.8993698279)';
                        str += '+3.58965212725*Math.pow(x, 1.41199359695)';
                        str += '+111.690224049';
                        return str;
                    }
                    if(i == '1'){
                        let str;
                        str = '-748031721.292*Math.pow(x, -1.90410567265)';
                        str += '+779370715.358*Math.pow(x, -1.90391429441)';
                        str += '+424.948514369*Math.pow(x, -28.5977515991)';
                        str += '+18.908114238*Math.pow(x, 0.894448718694)';
                        str += '-31339438.195*Math.pow(x, -1.8993698279)';
                        str += '+3.58965212725*Math.pow(x, 1.41199359695)';
                        str += '+111.690224049';
                        str += '+'+totalDex*((vitality / 100) + 10);
                    }
                }
            }
            else if(enter == "Experience"){
                level = Number(d1);
                if(i == 0){
                    let experience;
                    experience = 3*level*level + 9*level - 3;
                    output =  experience;
                }
                if(i == 1){
                    let percentageSaved;
                    if(level > 999){
                        percentageSaved = 90;
                    }
                    else{
                        percentageSaved = 10* Math.floor(level / 100);
                    }
                    
                    output =  percentageSaved;
                }
                if(i == 2){
                    let expSaved;
                    expSaved = 3*level*level + 9*level - 3;
                    let percentageSaved;
                    if(level > 999){
                        percentageSaved = 90;
                    }
                    else{
                        percentageSaved = 10* Math.floor(level / 100);
                    }
                    expSaved *= percentageSaved / 100;
                    output =  expSaved;
                }
                if(typeof i === 'string' || i instanceof String){
                    if(i == '0'){
                        let experience;
                        experience = '3*x*x + 9*x - 3';
                        return experience;
                    }
                    if(i == '1'){
                        let percentageSaved;
                        if(level > 999){
                            percentageSaved = '90';
                        }
                        else{
                            percentageSaved = '10* Math.floor(x / 100)';
                        }
                        return percentageSaved;
                    }
                    if(i == '2'){
                        let expSaved;
                        expSaved = '3*x*x + 9*x - 3';
                        let percentageSaved;
                        if(level > 999){
                            percentageSaved = '90';
                        }
                        else{
                            percentageSaved = '10* Math.floor(x / 100)';
                        }
                        expSaved += '*'+(percentageSaved / 100);
                        return expSaved;
                    }
                }
            }
            else if(enter == "Stamina"){
                level = Number(d1);
                agility = Number(d2);
                strength = Number(d3);
                vitality = Number(d4);
                if(i == 0){
                    let baseStamina;
                    baseStamina = 100 + 5*level;
                    output =  baseStamina;
                }
                if(i == 1){
                    let stamina;
                    stamina = 100 + 5*level + (agility + strength + vitality) / 10;
                    stamina = Math.round(stamina*10)/10
                    output =  stamina;
                }
                if(i == 2){
                    let staminaRegen;
                    staminaRegen = 100 + 5*level + (agility + strength + vitality) / 10;
                    staminaRegen = (Math.round(staminaRegen*10)/10) / 28;
                    output = staminaRegen;
                }
                if(typeof i === 'string' || i instanceof String){
                    if(i == '0'){
                        let baseStamina;
                        baseStamina = '100 + 5*x';
                        return baseStamina;
                    }
                    if(i == '1'){
                        let stamina;
                        stamina = 'Math.round((100 + 5*x + '+(agility + strength + vitality) / 10+')*10) / 10';
                        return stamina;
                    }
                    if(i == '2'){
                        let staminaRegen;
                        staminaRegen = '(Math.round((100 + 5*x + '+(agility + strength + vitality) / 10+')*10) / 10) / 28';
                        return staminaRegen;
                    }
                }
            }
            else if(enter == "Damage"){
                baseDmg = Number(d1);
                strength = Number(d2);
                type = d3;
                if(i == 0){
                    let playerDmg;
                    playerDmg = strength * baseDmg / 250 + baseDmg;
                    output =  playerDmg;
                }
                if(i == 1){
                    let critDmg;
                    let wtype;
                    if(type == "One-Hand" || type == "Dual Wield"){
                        wtype = 1;
                    }
                    else if(type == "Two-Hand"){
                        wtype = 0.5;
                    }
                    else if(type == "Rapier"){
                        wtype = 1.4;
                    }
                    else if(type == "Dagger"){
                        wtype = 1.7;
                    }
                    //maybe have a few if statements to set weaponType here or in the JFrame
                    critDmg = strength * baseDmg / 250 + baseDmg + wtype * baseDmg;
                    output =  critDmg;
                }
                if(typeof i === 'string' || i instanceof String){
                    if(i == '0'){
                        let playerDmg;
                        playerDmg = strength+'*x / 250 + x';
                        return playerDmg;
                    }
                    if(i == '1'){
                        let critDmg;
                        let wtype;
                        if(type == "One-Hand" || type == "Dual Wield"){
                            wtype = 1;
                        }
                        else if(type == "Two-Hand"){
                            wtype = 0.5;
                        }
                        else if(type == "Rapier"){
                            wtype = 1.4;
                        }
                        else if(type == "Dagger"){
                            wtype = 1.7;
                        }
                        //maybe have a few if statements to set weaponType here or in the JFrame
                        critDmg = strength +'* baseDmg / 250 + x + '+wtype+' * x';
                        return critDmg;
                    }
                }
            }
            else if(enter == "Vitality"){
                vitality = Number(d1);
                totalDex = Number(d2);
                if(i == 0){
                    let incHealth;
                    incHealth = totalDex * (vitality / 100 + 10);
                    output =  incHealth;
                }
                if(i == 1){
                    let incStamina;
                    incStamina = vitality / 10;
                    output =  incStamina;
                }
                if(i == 2){
                    let incResistance;
                    incResistance = vitality / 100;
                    output =  incResistance;
                }
                if(typeof i === 'string' || i instanceof String){
                    if(i == '0'){
                        let incHealth;
                        incHealth = totalDex +'* (x / 100 + 10)';
                        return incHealth;
                    }
                    if(i == '1'){
                        let incStamina;
                        incStamina = 'x / 10';
                        return incStamina;
                    }
                    if(i == '2'){
                        let incResistance;
                        incResistance = 'x / 100';
                        return incResistance;
                    }
                }
            }
            else if(enter == "Agility"){
                agility = Number(d1);
                type = d2;
                if(i == 0){
                    let incStamina;
                    incStamina = agility / 10;
                    output =  incStamina;
                }
                if(i == 1){
                    let incWalkSpeed;
                    //base is 14
                    incWalkSpeed = agility / 250;
                    incWalkSpeed += 14;
                    output =  incWalkSpeed;
                }
                if(i == 2){
                    let incRunSpeed;
                    //base is 28, dagger gets +2
                    incRunSpeed = agility / 50;
                    if(type == "Dagger"){
                        incRunSpeed += 30;
                    }
                    else{
                        incRunSpeed += 28;
                    }
                    output =  incRunSpeed;
                }
                if(i == 3){
                    //estimations
                    let decHitCooldown;
                    if(type == "One-Hand"){
                        //base is ~5/6 seconds
                        decHitCooldown = 5/6;
                        decHitCooldown -= agility / 2000;
                    }
                    if(type == "Dual Wield"){
                        //base is ~1 second
                        decHitCooldown = 1 - agility / 1000;
                    }
                    if(type == "Two-Hand"){
                        //base is ~7/6 seconds
                        decHitCooldown = 7/6 - agility / 1500;
                    }
                    if(type == "Rapier"){
                        //base is ~7/12 seconds
                        decHitCooldown = 7/12 - 39 * agility / 54000;
                    }
                    if(type == "Dagger"){
                        //base is ~5/12 seconds
                        decHitCooldown = 5/12 - agility / 6000;
                    }
                    if(decHitCooldown < 0)decHitCooldown = 0;
                    output = decHitCooldown;
                }
                if(i == 4){
                    let decJumpCooldown;
                    //base is ~1 second
                    decJumpCooldown = 1;
                    decJumpCooldown -= agility / 1000;
                    if(decJumpCooldown < 0)decJumpCooldown = 0;
                    output =  decJumpCooldown;
                }
                if(typeof i === 'string' || i instanceof String){
                    if(i == '0'){
                        let incStamina;
                        incStamina = 'x / 10';
                        return incStamina;
                    }
                    if(i == '1'){
                        let incWalkSpeed;
                        //base is 14
                        incWalkSpeed = 'x / 250';
                        incWalkSpeed += '+14';
                        return incWalkSpeed;
                    }
                    if(i == '2'){
                        let incRunSpeed;
                        //base is 28, dagger gets +2
                        incRunSpeed = 'x / 50';
                        if(type == "Dagger"){
                            incRunSpeed += '+30';
                        }
                        else{
                            incRunSpeed += '+28';
                        }
                        return incRunSpeed;
                    }
                    if(i == '3'){
                        //estimations
                        let decHitCooldown;
                        if(type == "One-Hand"){
                            //base is ~5/6 seconds
                            decHitCooldown = '5/6';
                            decHitCooldown += '-x / 2000';
                        }
                        if(type == "Dual Wield"){
                            //base is ~1 second
                            decHitCooldown = '1 - x / 1000';
                        }
                        if(type == "Two-Hand"){
                            //base is ~7/6 seconds
                            decHitCooldown = '7/6 - x / 1500';
                        }
                        if(type == "Rapier"){
                            //base is ~7/12 seconds
                            decHitCooldown = '7/12 - 39 * x / 54000';
                        }
                        if(type == "Dagger"){
                            //base is ~5/12 seconds
                            decHitCooldown = '5/12 - x / 6000';
                        }
                        return decHitCooldown;
                    }
                    if(i == '4'){
                        let decJumpCooldown;
                        //base is ~1 second
                        decJumpCooldown = '1';
                        decJumpCooldown += '- x / 1000';
                        return decJumpCooldown;
                    }
                }
            }
            else if(enter == "Luck"){
                luck = Number(d1);
                if(i == 0){
                    let incCriticalChance;
                    //base is 15%
                    incCriticalChance = 15;
                    incCriticalChance += luck / 100;
                    output =  incCriticalChance;
                }
                if(i == 1){
                    let incDropChance;
                    //item not obtained and max luck -> 2x drop chance for said item
                    incDropChance = luck / 100;
                    output =  incDropChance;
                }
                if(i == 2){
                    let incMultiHit;
                    //reminder that max % is 15% when both str and luck are maxed
                    incMultiHit = luck / 50;
                    output =  incMultiHit;
                }
                if(typeof i === 'string' || i instanceof String){
                    if(i == '0'){
                        let incCriticalChance;
                        //base is 15%
                        incCriticalChance = '15';
                        incCriticalChance += '+x / 100';
                        return incCriticalChance;
                    }
                    if(i == '1'){
                        let incDropChance;
                        //item not obtained and max luck -> 2x drop chance for said item
                        incDropChance = 'x / 100';
                        return incDropChance;
                    }
                    if(i == '2'){
                        let incMultiHit;
                        //reminder that max % is 15% when both str and luck are maxed
                        incMultiHit = 'x / 50';
                        return incMultiHit;
                    }
                }
            }
            else if(enter == "Strength"){
                strength = Number(d1);
                baseDmg = Number(d2);
                if(i == 0){
                    let incDmg;
                    incDmg = strength * baseDmg / 250;
                    output =  incDmg;
                }
                if(i == 1){
                    let incStamina;
                    incStamina = strength / 10;
                    output =  incStamina;
                }
                if(i == 2){
                    let incMultiHit;
                    //reminder that max % is 15% when both str and luck are maxed
                    incMultiHit = strength / 50;
                    output =  incMultiHit;
                }
                if(typeof i === 'string' || i instanceof String){
                    if(i == '0'){
                        let incDmg;
                        incDmg = 'x * '+baseDmg+' / 250';
                        return incDmg;
                    }
                    if(i == '1'){
                        let incStamina;
                        incStamina = 'x / 10';
                        return incStamina;
                    }
                    if(i == '2'){
                        let incMultiHit;
                        //reminder that max % is 15% when both str and luck are maxed
                        incMultiHit = 'x / 50';
                        return incMultiHit;
                    }
                }
            }
            else if(enter == "Defense"){
                defense = Number(d1);
                totalDef = Number(d2);
                if(i == 0){
                    let damageReduced;
                    damageReduced = defense / 100;
                    damageReduced += 5;
                    damageReduced *= totalDef;
                    output =  damageReduced;
                }
                if(typeof i === 'string' || i instanceof String){
                    if(i == '0'){
                        let damageReduced;
                        damageReduced = 'x / 100';
                        damageReduced += '+5';
                        damageReduced += '*'+totalDef;
                        return damageReduced;
                    }
                }
            }
            else if(enter == "Smithing Experience"){
                smithingSK = Number(d1);
                type = d2;
                if(i == 0){
                    //estimations
                    let smithingExperience;
                    if(type == "Normal"){
                        smithingExperience = 1.2524 * smithingSK - 0.415796;
                        smithingExperience = Math.round(smithingExperience);
                    }
                    if(type == "Boost" || type == "Game-pass"){
                        smithingExperience = 1.2524 * smithingSK - 0.415796;
                        smithingExperience = Math.round(smithingExperience);
                        smithingExperience += 2.5;
                    }
                    if(type == "Boost w/ Game-pass"){
                        smithingExperience = 1.2524 * smithingSK - 0.415796;
                        smithingExperience = Math.round(smithingExperience);
                        smithingExperience += 5;
                    }
                    
                    output =  smithingExperience;
                }
                if(typeof i === 'string' || i instanceof String){
                    if(i == '0'){
                        //estimations
                        let smithingExperience;
                        if(type == "Normal"){
                            smithingExperience = '1.2524 * x - 0.415796';
                        }
                        if(type == "Boost" || type == "Game-pass"){
                            smithingExperience = '1.2524 * x - 0.415796 + 2.5';
                        }
                        if(type == "Boost w/ Game-pass"){
                            smithingExperience = '1.2524 * x - 0.415796 + 5';
                        }
                        return smithingExperience;
                    }
                }
            }
        }
        else if(parent == "Inventory Data"){
            //Weapon and Gear Data
            if(enter == "Weapon Damage"){
                weaponSK = Number(d1);
                type = d2;
                legType = d3;
                if(i == 0){
                    //estimations
                    let weaponDamage;
                    if(legType == "Normal"){
                        if(type == "One-Hand"){
                            weaponDamage = 1053.85 * Math.pow(weaponSK, -28.6);
                            weaponDamage += 0.629964 * Math.pow(weaponSK, 1.37402);
                            weaponDamage += 0.07308 * weaponSK;
                            weaponDamage += -1.8146 * Math.pow(10, 7) * Math.pow(weaponSK, -2.63841) * Math.sin(-3.14165 * Math.pow(weaponSK, -0.000128815));
                        }
                        if(type == "Two-Hand"){
                            weaponDamage = 0.987388 * Math.pow(weaponSK, 1.36874);
                            weaponDamage += -1.08924 * Math.pow(weaponSK, 0.230083);
                            weaponDamage += 3.82497;
                        }
                        if(type == "Rapier"){
                            weaponDamage = 0.605588 * Math.pow(weaponSK, 1.36133);
                            weaponDamage += -0.429357 * Math.pow(weaponSK, 0.624546);
                            weaponDamage += 2.766;
                        }
                        if(type == "Dagger"){
                            weaponDamage = 21.4516 * Math.pow(weaponSK, -1.14518);
                            weaponDamage += 0.511652 * Math.pow(weaponSK, 1.37416);
                            weaponDamage += 10.976836 * weaponSK;
                            weaponDamage += -23.5568 * Math.pow(weaponSK, -1.81666) * Math.sin(2.16489 * Math.pow(weaponSK, 0.731571));
				weaponDamage += ((146.245*weaponSK+11876.1)*(72.2266*weaponSK+82.3802)*(10.9196*weaponSK-1.10078))/((81.6589*weaponSK+84.379)*(-1.4703*weaponSK-97.7443)*(0.109724*weaponSK+120.002)) -1.10078;
				weaponDamage *= .5;
			 	weaponDamage = Math.round(weaponDamage);
                        }
                    }
                    output =  weaponDamage;
                }
                if(typeof i === 'string' || i instanceof String){
                    if(i == '0'){
                        //estimations
                        let weaponDamage;
                        if(legType == "Normal"){
                            if(type == "One-Hand"){
                                weaponDamage = '1053.85 * Math.pow(x, -28.6)';
                                weaponDamage += '+0.629964 * Math.pow(x, 1.37402)';
                                weaponDamage += '+0.07308 * x';
                                weaponDamage += '-1.8146 * Math.pow(10, 7) * Math.pow(x, -2.63841) * Math.sin(-3.14165 * Math.pow(x, -0.000128815))';
                            }
                            if(type == "Two-Hand"){
                                weaponDamage = '0.987388 * Math.pow(x, 1.36874)';
                                weaponDamage += '-1.08924 * Math.pow(x, 0.230083)';
                                weaponDamage += '+3.82497';
                            }
                            if(type == "Rapier"){
                                weaponDamage = '0.605588 * Math.pow(x, 1.36133)';
                                weaponDamage += '-0.429357 * Math.pow(x, 0.624546)';
                                weaponDamage += '+2.766';
                            }
                            if(type == "Dagger"){
                                weaponDamage = 'Math.round((21.4516 * Math.pow(x, -1.14518)';
                                weaponDamage += '+0.511652 * Math.pow(x, 1.37416)';
                                weaponDamage += '+10.976836 * x';
                                weaponDamage += '-23.5568 * Math.pow(x, -1.81666) * Math.sin(2.16489 * Math.pow(x, 0.731571))';
				weaponDamage += '+((146.245*x+11876.1)*(72.2266*x+82.3802)*(10.9196*x-1.10078))/((81.6589*x+84.379)*(-1.4703*x-97.7443)*(0.109724*x+120.002)) -1.10078)';
				weaponDamage += '*.5)';
                            }
                        }
                        return weaponDamage;
                    }
                }
            }
            else if(enter == "Weapon Worth"){
                weaponSK = Number(d1);
                if(i == 0){
                    //estimations
                    let weaponWorth;
                    weaponWorth = 289.008 * Math.pow(weaponSK, 1.00062) - 19.1322;
                    output = weaponWorth;
                }
                if(typeof i === 'string' || i instanceof String){
                    if(i == '0'){
                    //estimations
                    let weaponWorth;
                    weaponWorth = '289.008 * Math.pow(x, 1.00062) - 19.1322';
                    return weaponWorth;
                }
                }
            }
            else if(enter == "Skill Damage"){
                weaponDmg = Number(d1);
                skillNumber = Number(d2);
                type = d3;
                user = String(d4) == 'true';
                if(i == 0){
                    //estimations
                    let skillDamage;
                    if(user){
                        if(type == "Dagger"){
                            //checked
				if(skillNumber == 1){
					skillDamage = Math.floor(1.4951 * weaponDmg);
				}
				if(skillNumber == 2){
					skillDamage = Math.floor(2.14103 * weaponDmg);
				}
				if(skillNumber == 3){
					skillDamage = Math.round(2.64 * weaponDmg);
				}
				if(skillNumber == 4){
					skillDamage = Math.floor(3.14 * weaponDmg);
				}
				if(skillNumber == 5){
					skillDamage = Math.ceil(3.342 * weaponDmg);
				}
                            if(skillNumber == 6){
                                skillDamage = Math.round(3.5485 * weaponDmg);
                            }
                            if(skillNumber == 7){
                                skillDamage = Math.floor(3.7485 * weaponDmg);
                            }
                            //assumed, first 3 seem to be different, with the last 4 following
                            //the below formula
                            //else{
                                //skillDamage = Math.round((2.3485 + 0.2 * skillNumber) * weaponDmg);
                            //}
                        }
                        else{ //other weapons not yet done
                            skillDamage = 0;
                        }
                    }
                    else{ //NPC/mob/boss dmg yet to be formulated
                        skillDamage = 0;
                    }
                    output = skillDamage;
                }
                if(typeof i === 'string' || i instanceof String){
                    if(i == '0'){
                        //estimations
                        let skillDamage;
                        if(user){
                            if(type == "Dagger"){
                                //checked
				if(skillNumber == 1){
					skillDamage = 'Math.floor(1.4951 * x)';
				}
				if(skillNumber == 2){
					skillDamage = 'Math.floor(2.14103 * x)';
				}
				if(skillNumber == 3){
					skillDamage = 'Math.round(2.64 * x)';
				}
				if(skillNumber == 4){
					skillDamage = 'Math.floor(3.14 * x)';
				}
				if(skillNumber == 5){
					skillDamage = 'Math.ceil(3.342 * x)';
				}
                                if(skillNumber == 6){
                                    skillDamage = 'Math.round(3.5485 * x)';
                                }
                                if(skillNumber == 7){
                                    skillDamage = 'Math.floor(3.7485 * x)';
                                }
                                //assumed, first 3 seem to be different, with the last 4 following
                                //the below formula
                                //else{
                                    //skillDamage = 'Math.round((2.3485 + 0.2 * '+skillNumber+') * x)';
                                //}
                            }
                            else{
                                skillDamage = '0';
                            }
                        }
                        else{
                            skillDamage = '0';
                        }
                        return skillDamage;
                    }
                }
            }
            else if(enter == "Gear Dexterity"){
                gearLevel = Number(d1);
                type = d2;
                
                if(i == 0){
                    //estimations
                    let armorDex;
                    if(type == "Normal"){
                        armorDex = 1.31732 * Math.pow(gearLevel, -500);
                        armorDex += 1.49258 * Math.pow(gearLevel, 1.33823);
                        armorDex += -0.380652 * gearLevel;
                        armorDex += 7.20016 * Math.pow(gearLevel, -0.939635) * Math.sin(0.079352 * gearLevel);
                    }
                    if(type == "Badge"){
                        armorDex = 0.457371 * Math.pow(gearLevel, 1.45233);
                        armorDex += 5.08398 * Math.pow(gearLevel, 1.0922);
                        armorDex += -4.68986 * gearLevel + 4.16089;
                    }
                    if(type == "Game-pass"){
                        //not done
                    }
                    if(type == "Legendary"){
                        //not done
                    }
                    output = armorDex;
                }
                if(i == 1){
                    //estimation
                    let headwearDex;
                    if(type == "Normal"){
                        headwearDex = 0.556583 * Math.pow(gearLevel, 1.32396);
                        headwearDex += 0.422066 * Math.pow(gearLevel, 0.171806);
                        headwearDex += -0.244749 * gearLevel;
                        headwearDex += 4.7701 * Math.pow(10, -9) * Math.pow(gearLevel, 3.71974) * Math.sin(0.20283 * gearLevel);
                    }
                    if(type == "Badge"){
                        //not done
                    }
                    if(type == "Game-pass"){
                        //not done
                    }
                    if(type == "Legendary"){
                        //not done
                    }
                    output = headwearDex;
                }
                if(typeof i === 'string' || i instanceof String){
                    if(i == '0'){
                        //estimations
                        let armorDex;
                        if(type == "Normal"){
                            armorDex = '1.31732 * Math.pow(x, -500)';
                            armorDex += '+1.49258 * Math.pow(x, 1.33823)';
                            armorDex += '-0.380652 * x';
                            armorDex += '+7.20016 * Math.pow(x, -0.939635) * Math.sin(0.079352 * x)';
                        }
                        if(type == "Badge"){
                            armorDex = '0.457371 * Math.pow(x, 1.45233)';
                            armorDex += '+5.08398 * Math.pow(x, 1.0922)';
                            armorDex += '-4.68986 * x + 4.16089';
                        }
                        if(type == "Game-pass"){
                            //not done
                        }
                        if(type == "Legendary"){
                            //not done
                        }
                        return armorDex;
                    }
                    if(i == '1'){
                        //estimation
                        let headwearDex;
                        if(type == "Normal"){
                            headwearDex = '0.556583 * Math.pow(x, 1.32396)';
                            headwearDex += '+0.422066 * Math.pow(x, 0.171806)';
                            headwearDex += '-0.244749 * x';
                            headwearDex += '+4.7701 * Math.pow(10, -9) * Math.pow(x, 3.71974) * Math.sin(0.20283 * x)';
                        }
                        if(type == "Badge"){
                            //not done
                        }
                        if(type == "Game-pass"){
                            //not done
                        }
                        if(type == "Legendary"){
                            //not done
                        }
                        return headwearDex;
                    }
                }
            }
            else if(enter == "Gear Defense"){
                gearLevel = Number(d1);
                type = d2;
                if(i == 0){
                    //estimations
                    let armorDef;
                    if(type == "Normal"){
                        armorDef = -0.123213 * Math.pow(gearLevel, 1.02241);
                        armorDef += 0.29208 * Math.pow(gearLevel, 1.32682);
                        armorDef += 0.517196;
                    }
                    if(type == "Badge"){
                        armorDef = 0.615838 * Math.pow(gearLevel, -0.343928);
                        armorDef += 0.226188 * Math.pow(gearLevel, 1.36863);
                        armorDef += 0.0898362 * gearLevel;
                        armorDef += 0.51296 * Math.pow(gearLevel, -0.424603) * Math.sin(0.121605 * gearLevel);
                    }
                    if(type == "Game-pass"){
                        //not done
                    }
                    if(type == "Legendary"){
                        //not done
                    }
                    output = armorDef;
                }
                if(i == 1){
                    //estimation
                    let shieldDefense;
                    if(type == "Normal"){
                        shieldDefense = 0.156019 * Math.pow(gearLevel, 1.34907);
                        shieldDefense += -1.81904 * Math.pow(gearLevel, 0.0925967);
                        shieldDefense += 2.26883;
                    }
                    if(type == "Badge"){
                        //not done
                    }
                    if(type == "Game-pass"){
                        //not done
                    }
                    if(type == "Legendary"){
                        //not done
                    }
                    output = shieldDefense;
                }
                if(typeof i === 'string' || i instanceof String){
                    if(i == '0'){
                        //estimations
                        let armorDef;
                        if(type == "Normal"){
                            armorDef = '-0.123213 * Math.pow(x, 1.02241)';
                            armorDef += '+0.29208 * Math.pow(x, 1.32682)';
                            armorDef += '+0.517196';
                        }
                        if(type == "Badge"){
                            armorDef = '0.615838 * Math.pow(x, -0.343928)';
                            armorDef += '+0.226188 * Math.pow(x, 1.36863)';
                            armorDef += '+0.0898362 * x';
                            armorDef += '+0.51296 * Math.pow(x, -0.424603) * Math.sin(0.121605 * x)';
                        }
                        if(type == "Game-pass"){
                            //not done
                        }
                        if(type == "Legendary"){
                            //not done
                        }
                        return armorDef;
                    }
                    if(i == '1'){
                        //estimation
                        let shieldDefense;
                        if(type == "Normal"){
                            shieldDefense = '0.156019 * Math.pow(x, 1.34907)';
                            shieldDefense += '-1.81904 * Math.pow(x, 0.0925967)';
                            shieldDefense += '+2.26883';
                        }
                        if(type == "Badge"){
                            //not done
                        }
                        if(type == "Game-pass"){
                            //not done
                        }
                        if(type == "Legendary"){
                            //not done
                        }
                        return shieldDefense;
                    }
                }
            }
            else if(enter == "Gear Worth"){
                gearLevel = Number(d1);
                type = d2;
                if(i == 0){
                    //estimations
                    let gearWorth;
                    if(type == "Armor"){
                        gearWorth = 480 * gearLevel;
                    }
                    else if(type == "Shield"){
                        gearWorth = 380 * gearLevel;
                    }
                    else if(type == "Headwear"){
                        gearWorth = 260 * gearLevel;
                    }
                    output = gearWorth;
                }
                if(typeof i === 'string' || i instanceof String){
                    if(i == '0'){
                        //estimations
                        let gearWorth;
                        if(type == "Armor"){
                            gearWorth = '480 * x';
                        }
                        else if(type == "Shield"){
                            gearWorth = '380 * x';
                        }
                        else if(type == "Headwear"){
                            gearWorth = '260 * x';
                        }
                        return gearWorth;
                    }
                }
            }
            else if(enter == "Material Worth"){
		
            }
            else if(enter == "Consumable Worth"){

            }
        }
        else if(parent == "Entity Data"){
            //Mob/Boss Data
            if(enter == "Mob Health"){
                mobLevel = Number(d1);
                night = Boolean(d2);
                if(i == 0){
                    //estimation
                    let mobHealth;
                    mobHealth = Math.round(((-4/3)*mobLevel + 20.6013 * Math.pow(mobLevel, 1.36611) + 19.4195) / 10) * 10;
                    output = mobHealth;
                }
                if(i == 1){
                    if(night){
                        let mobHealth;
                        mobHealth = Math.round(((-4/3)*mobLevel + 20.6013 * Math.pow(mobLevel, 1.36611) + 19.4195) / 10) * 10;
                        mobHealth += 40*mobLevel -1370 + 2.5*Math.floor((mobLevel-9)/2.75);
                        output = mobHealth;
                    }
                }
                if(typeof i === 'string' || i instanceof String){
                    if(i == '0'){
                        //estimation
                        let mobHealth;
                        mobHealth = 'Math.round(((-4/3)*x + 20.6013 * Math.pow(x, 1.36611) + 19.4195) / 10) * 10';
                        return mobHealth;
                    }
                    if(i == '1'){
                        if(night){
                            let mobHealth;
                            mobHealth = 'Math.round(((-4/3)*mobLevel + 20.6013 * Math.pow(mobLevel, 1.36611) + 19.4195) / 10) * 10';
                            mobHealth += '+40*mobLevel -1370 + 2.5*Math.floor((mobLevel-9)/2.75)';
                            return mobHealth;
                        }
                    }
                }
            }
            else if(enter == "Mob Experience"){
                mobLevel = Number(d1);
                if(i == 0){
                    let mobExperience;
                    mobExperience = Math.floor(2.5 * mobLevel + 10 * Math.floor(mobLevel / 10));
                    output = mobExperience;
                }
                if(typeof i === 'string' || i instanceof String){
                    if(i == '0'){
                        let mobExperience;
                        mobExperience = 'Math.floor(2.5 * x + 10 * Math.floor(x / 10))';
                        return mobExperience;
                    }
                }
            }
            else if(enter == "Mob Damage"){
                mobLevel = Number(d1);
                if(i == 0){
                    let mobDamage;
                    mobDamage = -5.518*Math.pow(10,6) * Math.pow(mobLevel, -1.31869);
                    mobDamage += 0.46077*Math.pow(mobLevel, 1.73794);
                    mobDamage += 5.518*Math.pow(10,6)*Math.pow(mobLevel, -1.31868);
                    mobDamage += 8.62832*mobLevel - 24.3971;
                    output = mobDamage;
                }
                if(i == 1){
                    let mobDamage;
                    mobDamage = -0.00393671*Math.pow(mobLevel, 2.31455);
                    mobDamage += 9.2093*Math.pow(10,-18) * Math.pow(mobLevel, 8.79928);
                    mobDamage += 20.2464*Math.pow(mobLevel, 1.19025);
                    mobDamage += -20.2696*mobLevel + 10.5413;
                    output = mobDamage;
                }
                if(typeof i === 'string' || i instanceof String){
                    if(i == "0"){
                        let mobDamage;
                        mobDamage = "-5.518*Math.pow(10,6) * Math.pow(x, -1.31869)";
                        mobDamage += "+0.46077*Math.pow(x, 1.73794)";
                        mobDamage += "+5.518*Math.pow(10,6) * Math.pow(x, -1.31868)";
                        mobDamage += "+8.62832*x - 24.3971";
                        return mobDamage;
                    }
                    if(i == "1"){
                        let mobDamage;
                        mobDamage = "-0.00393671*Math.pow(x, 2.31455)";
                        mobDamage += "+9.2093*Math.pow(10,-18) * Math.pow(x, 8.79928)";
                        mobDamage += "+20.2464*Math.pow(x, 1.19025)";
                        mobDamage += "-20.2696*x + 10.5413";
                        return mobDamage;
                    }
                }
            }
            else if(enter == "Mob Col"){
                mobLevel = Number(d1);
                if(i == 0){
                    let mobCol;
                    mobCol = 5 * mobLevel;
                    output = mobCol;
                }
                if(typeof i === 'string' || i instanceof String){
                    if(i == '0'){
                        let mobCol;
                        mobCol = '5 * x';
                        return mobCol;
                    }
                }
            }
            if(enter == "Boss Health"){
                bossLevel = Number(d1);
                if(i == 0){
                    //estimation
                    let bossHealth;
                    bossHealth = Math.round((503.152 * Math.pow(bossLevel, 1.36891) + 7660.28) / 1000) * 1000;
                    output = bossHealth;
                }
                if(typeof i === 'string' || i instanceof String){
                    if(i == '0'){
                        //estimation
                        let bossHealth;
                        bossHealth = 'Math.round((503.152 * Math.pow(x, 1.36891) + 7660.28) / 1000) * 1000';
                        return bossHealth;
                    }
                }
            }
            else if(enter == "Boss Experience"){
                bossLevel = Number(d1);
                if(i == 0){
                    let bossExperience;
                    bossExperience = 180 * bossLevel;
                    output = bossExperience;
                }
                if(typeof i === 'string' || i instanceof String){
                    if(i == '0'){
                        let bossExperience;
                        bossExperience = '180 * x';
                        return bossExperience;
                    }
                }
            }
            else if(enter == "Boss Damage"){
                bossLevel = Number(d1);
                if(i == 0){
                    let bossDamage;
                    bossDamage = -0.00393671*Math.pow(bossLevel, 2.31455);
                    bossDamage += 9.2093*Math.pow(10,-18) * Math.pow(bossLevel, 8.79928);
                    bossDamage += 20.2464*Math.pow(bossLevel, 1.19025);
                    bossDamage += -20.2696*bossLevel + 10.5413;
                    output = bossDamage;
                }
                if(typeof i === 'string' || i instanceof String){
                    if(i == "0"){
                        let bossDamage;
                        bossDamage = "-0.00393671*Math.pow(x, 2.31455)";
                        bossDamage += "+9.2093*Math.pow(10,-18) * Math.pow(x, 8.79928)";
                        bossDamage += "+20.2464*Math.pow(x, 1.19025)";
                        bossDamage += "-20.2696*x + 10.5413";
                        return bossDamage;
                    }
                }
            }
            else if(enter == "Boss Col"){
                bossLevel = Number(d1);
                if(i == 0){
                    let bossCol;
                    bossCol = 24 * bossLevel;
                    output = bossCol;
                }
                if(typeof i === 'string' || i instanceof String){
                    if(i == '0'){
                        let bossCol;
                        bossCol = '24 * x';
                        return bossCol;
                    }
                }
            }
        }
        else if(parent == "Status Data"){
            if(enter == "Damage"){
                health = Number(d1);
                vitality = Number(d2);
                statusEffect = d3;
                armor = String(d4) == 'true';
                uppHead = String(d5) == 'true';
                lowHead = String(d6) == 'true';
                if(i == 0){
                    let statusDmg;
                    let resistance;
                    resistance = 0;
                    if(armor){
                        resistance += .4;
                    }
                    if(uppHead){
                        resistance += .2;
                    }
                    if(lowHead){
                        resistance += .2;
                    }
                    resistance += vitality/10000;
                    if(statusEffect == "Poison"){
                        statusDmg = Math.ceil((health*(1-resistance))/200);
                    }
                    else if(statusEffect == "Bleed"){
                        statusDmg = Math.ceil((health*(1-resistance))/200);
                    }
                    else if(statusEffect == "Freeze"){
                        statusDmg = Math.ceil((health*(1))/80);
                    }
                    else if(statusEffect == "Burn"){
                        statusDmg = Math.ceil((health*(1-resistance))/40);
                    }
                    else if(statusEffect == "Paralysis"){
                        statusDmg = 0;
                    }
                    else if(statusEffect == "Decay"){
                        statusDmg = Math.ceil((health*(1-resistance))/20);
                    }
                    else if(statusEffect == "Light"){
                        statusDmg = Math.ceil((health*(1-resistance))/20);
                    }
                    output = statusDmg;
                }
                if(typeof i === 'string' || i instanceof String){
                    if(i == '0'){
                        let statusDmg;
                        let resistance;
                        resistance = 0;
                        if(armor){
                            resistance += .4;
                        }
                        if(uppHead){
                            resistance += .2;
                        }
                        if(lowHead){
                            resistance += .2;
                        }
                        resistance += vitality/10000;
                        if(statusEffect == "Poison"){
                            statusDmg = "Math.ceil((x*(1-"+resistance+"))/200)";
                        }
                        else if(statusEffect == "Bleed"){
                            statusDmg = "Math.ceil((x*(1-"+resistance+"))/200)";
                        }
                        else if(statusEffect == "Freeze"){
                            statusDmg = "Math.ceil((x*(1))/80)";
                        }
                        else if(statusEffect == "Burn"){
                            statusDmg = "Math.ceil((x*(1-"+resistance+"))/40)";
                        }
                        else if(statusEffect == "Paralysis"){
                            statusDmg = '0';
                        }
                        else if(statusEffect == "Decay"){
                            statusDmg = "Math.ceil((x*(1-"+resistance+"))/20)";
                        }
                        else if(statusEffect == "Light"){
                            statusDmg = "Math.ceil((x*(1-"+resistance+"))/20)";
                        }
                        return statusDmg;
                    }
                }
            }
            else if(enter == "Duration"){
                vitality = Number(d1);
                statusEffect = d2;
                armor = String(d3) == 'true';
                uppHead = String(d4) == 'true';
                lowHead = String(d5) == 'true';
                if(i == 0){
                    let statusDura;
                    let resistance;
                    resistance = 0;
                    if(armor){
                        resistance += .4;
                    }
                    if(uppHead){
                        resistance += .2;
                    }
                    if(lowHead){
                        resistance += .2;
                    }
                    resistance += vitality/10000;
                    if(statusEffect == "Freeze"){
                        statusDura = 5*(1-resistance);
                    }
                    else if(statusEffect == "Paralysis"){
                        statusDura = 5*(1-resistance);
                    }
                    else{
                        statusDura = 5;
                    }
                    output = statusDura;
                }
                if(i == 1){
                    let statusDura;
                    let resistance;
                    resistance = 0;
                    if(armor){
                        resistance += .4;
                    }
                    if(uppHead){
                        resistance += .2;
                    }
                    if(lowHead){
                        resistance += .2;
                    }
                    resistance += vitality/10000;
                    if(statusEffect == "Freeze"){
                        statusDura = 7*(1-resistance);
                    }
                    else if(statusEffect == "Paralysis"){
                        statusDura = 7*(1-resistance);
                    }
                    else{
                        statusDura = 7;
                    }
                    output = statusDura;
                }
                if(typeof i === 'string' || i instanceof String){
                    if(i == '0'){
                        let statusDura;
                        let resistance;
                        resistance = 0;
                        if(armor){
                            resistance += .4;
                        }
                        if(uppHead){
                            resistance += .2;
                        }
                        if(lowHead){
                            resistance += .2;
                        }
                        //resistance += vitality/10000;
                        if(statusEffect == "Freeze"){
                            statusDura = "5*(1-"+resistance+"-x/10000)";
                        }
                        else if(statusEffect == "Paralysis"){
                            statusDura = '5*(1-'+resistance+'-x/10000)';
                        }
                        else{
                            statusDura = "5";
                        }
                        return statusDura;
                    }
                    if(i == '1'){
                        let statusDura;
                        let resistance;
                        resistance = 0;
                        if(armor){
                            resistance += .4;
                        }
                        if(uppHead){
                            resistance += .2;
                        }
                        if(lowHead){
                            resistance += .2;
                        }
                        //resistance += vitality/10000;
                        if(statusEffect == "Freeze"){
                            statusDura = "7*(1-"+resistance+"-x/10000)";
                        }
                        else if(statusEffect == "Paralysis"){
                            statusDura = '7*(1-'+resistance+'-x/10000)';
                        }
                        else{
                            statusDura = "7";
                        }
                        return statusDura;
                    }
                }
            }
        }
        
        //if null then return to default value
        if(isNaN(output)){
            output = 0.001;
        }
   
        //final floor to force numbers to be 3 digits
        if(output != 0){
            if(Math.log10(output) > 7){
                //pretty eh?, the -3 means precision to 3 decimal points, so 4 sig figs max
                output = Math.round(output/Math.pow(10,Math.floor(Math.log10(output)) - 3)) * Math.pow(10,Math.floor(Math.log10(output))-3);
                //same thing but forces precision
                output = parseFloat(output).toPrecision(4);
            }
            else{
                output = Math.floor(output * 100) / 100;
            }
        }
        return output;
}
//Resets formula variables, not currently implemented, fr dont know if it is needed
function resetVar(){
    level = 0;
    totalDex = 0;
    totalDef = 0;   
    agility = 0;
    strength = 0;
    vitality = 0;
    defense = 0;
    luck = 0;
    baseDmg = 0;
    type = "";
    legType = "";
    smithingSK = 0;
    weaponSK = 0;
    weaponDmg = 0;
    skillNumber = 0;
    user = false;
    gearLevel = 0;
    
    mobLevel = 0;
    bossLevel = 0;

}

function createGraph(calcStr, visStr){
    //console.log(document.getElementsByClassName('myPlot').attributes);
    let exp = formulaToes(parentG,enterG,data1G,data2G,data3G,data4G,data5G,data6G,''+0);

    let myCanvas = document.getElementById('canv');
    const dpr = 2*window.devicePixelRatio;
    const rect = myCanvas.getBoundingClientRect();

    // Generate values
    const xValues = [];
    const yValues = [];
    for (let x = 1; x <= 1000; x += 1) {
        xValues.push(x);
        yValues.push(eval(exp));
    }

    // Display using Plotly
    const data = [{x:xValues, y:yValues, mode:"lines"}];
    var layout = {
        title: {
            text: calcStr+' vs '+visStr,
            font: {
                color: 'white',
            },
        },
        xaxis: {
            title: ''+calcStr,
            titlefont: {
            family: 'Chakra Petch, sans-serif',
            size: 18,
            color: 'lightgrey'
            },
            showticklabels: true,
            tickangle: 'auto',
            tickfont: {
                family: 'Chakra Petch, serif',
                size: 14,
                color: 'white'
            },
            gridcolor: 'grey',
            exponentformat: 'k',
            showexponent: 'all'
        },
        yaxis: {
            title: ''+visStr,
            titlefont: {
            family: 'Chakra Petch, sans-serif',
            size: 18,
            color: 'lightgrey'
            },
            showticklabels: true,
            tickangle: 45,
            tickfont: {
                family: 'Chakra Petch, serif',
                size: 14,
                color: 'white'
            },
            gridcolor: 'grey',
            exponentformat: 'k',
            showexponent: 'all'
        },
        
        autosize: true,
        width: dpr*rect.width,
        height: 3*height,
        plot_bgcolor: 'rgb(50, 50, 50)',
        paper_bgcolor: 'rgb(27, 27, 27)',
        dragmode: "pan"
        };
    const config = {
        modeBarButtonsToRemove: [
            'toImage','select2d','lasso2d',
            'resetScale2d','zoom2d','toggleSpikelines'
        ], 
        scrollZoom: true, 
        displaylogo: false, 
        responsive: true
    }
    Plotly.newPlot("myPlot", data, layout, config);
    function updateData(leftx, rightx){
        const xValues_update = [];
        const yValues_update = [];
        let steps;
        
        steps = Math.abs(rightx-leftx)/1000;
        dist = Math.abs(rightx-leftx);
        
        for (let y = leftx; y <= rightx; y += steps) {
            let x;
            if(dist > 10){
                x = Math.round(y);
            }
            else{
                x = y;
            }
            xValues_update.push(x);
            yValues_update.push(eval(exp));
        }
        const data_update = [{x:xValues_update, y:yValues_update, mode:"lines"}];
        Plotly.react("myPlot",data_update, layout);
        return true;
    }
    
    document.getElementById("myPlot").on('plotly_relayout',
        function(eventdata){
            let check;
            if(typeof eventdata['xaxis.range[0]'] !== 'undefined'){
                check = updateData(eventdata['xaxis.range[0]'], eventdata['xaxis.range[1]']);
                currentXRange = eventdata['xaxis.range[0]'];
                currentYRange = eventdata['xaxis.range[1]']
            }
            if(eventdata['xaxis.autorange'] == true){
                Plotly.react("myPlot",data, layout);
            }
            else if(!check){
                //Plotly.relayout('myPlot', {
                //    'xaxis.autorange': true,
                //    'yaxis.autorange': true
                //});
                //Plotly.react("myPlot",data, layout);
                updateData(currentXRange, currentYRange);
                console.log("Screen has been resized or a mobile bug has occurred.");
            }
        }
    );
    
    if(changedValue == true){
        //if possible add a timer, such as 2 seconds so that so
        //many calculations arent needed
        updateData(currentXRange, currentYRange);
        changedValue = false;
    }
    return;
}

var textField1 = document.getElementById("textField1");
// Execute a function when the user presses a key on the keyboard
textField1.addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();

    //ENSURE that forceAmountToes is called!!
    forceAmountToes("textField1");

    // Trigger the button element with a click
    document.getElementById("cal7").click();
  }
  if (event.key === " ") {
    //event.preventDefault();
    //textField1.innerHTML+= textField1.value + ',';
    //console.log(document.getElementById("textField1").innerHTML);
    
  }
});

// Execute a function when the user presses a key on the keyboard
document.getElementById("textField2").addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();

    //ENSURE that forceAmountToes is called!!
    forceAmountToes("textField2");

    // Trigger the button element with a click
    document.getElementById("cal7").click();
  }
});
// Execute a function when the user presses a key on the keyboard
document.getElementById("textField3").addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();

    //ENSURE that forceAmountToes is called!!
    forceAmountToes("textField3");

    // Trigger the button element with a click
    document.getElementById("cal7").click();
  }
});
// Execute a function when the user presses a key on the keyboard
document.getElementById("textField4").addEventListener("keypress", function(event) {
  // If the user presses the "Enter" key on the keyboard
  if (event.key === "Enter") {
    // Cancel the default action, if needed
    event.preventDefault();

    //ENSURE that forceAmountToes is called!!
    forceAmountToes("textField4");

    // Trigger the button element with a click
    document.getElementById("cal7").click();
  }
});

//Calls setup
window.onload = function(){
    setupGame("gameTitle");
    setupCategory("categoryTitle");
    setupSubsection("subsectionTitle");
    setupCalculator("calculatorTitle");
    setupVisual("visualTitle");
    setupRevert("revertTitle");
    setupCanvas();
    //createGraph();
    console.log("Loaded Buttons");
    //remove once other games are added
    document.getElementById("gam1").click();
}
