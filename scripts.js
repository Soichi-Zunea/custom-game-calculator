/* Place your JavaScript in this file */

//CHANGE THESE CONSTANTS
const gameString = ["Sword Blox Online:Rebirth"] //create more gamebuttons if more games
const categoryString = [
    //add more if games are added
    [//Sword Blox Online:Rebirth
        "Player Data" ,"Weapon and Gear Data",
        "Mob Data","Boss Data"
    ]
]
const subsectionString = [
    //add more if games are added
    [//Sword Blox Online:Rebirth
        [//Player Data
            'Health','Experience','Stamina','Damage','Strength',
            'Agility','Defense','Vitality','Luck','Smithing Experience'
        ],
        [//Weapon and Gear Data
            'Weapon Damage','Weapon Worth','Skill Damage','Gear Dexterity',
            'Gear Defense','Gear Worth','','','',''
        ],
        [//Mob Data
            'Health','Experience','Col','','','','','','',''
        ],
        [//Boss Data
            'Health','Experience','Col','','','','','','',''
        ]
    ]
]
const calculatorString = [
    //add more if games are added
    [//Sword Blox Online:Rebirth
        [//Player Data
            [//Health
                'Player Level',' ','','',
                'Total Dexterity',' ','','',
                'Player Vitality',' ','','',
                '','','','',
                '','','',''
            ],
            [//Experience
                'Player Level',' ','','',
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
                '','','',''
            ],
            [//Damage
                'Base Damage',' ','','',
                'Player Strength',' ','','',
                'Weapon Type','',' ','',
                '','','','',
                '','','',''
            ],
            [//Strength
                'Player Strength',' ','','',
                'Base Damage',' ','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//Agility
                'Player Agility',' ','','',
                'Weapon Type','',' ','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//Defense
                'Player Defense',' ','','',
                'Total Gear Defense',' ','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//Vitality
                'Player Vitality',' ','','',
                'Total Gear Dexterity',' ','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//Luck
                'Player Luck',' ','','',
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
                '','','',''
            ],
        ],
        [//Weapon and Gear Data
            [//Weapon Damage
                'Weapon SK',' ','','',
                'Weapon Type','',' ','',
                'Type','',' ','',
                '','','','',
                '','','',''
            ],
            [//Weapon Worth
                'Weapon SK',' ','','',
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
                '','','',''
            ],
            [//Gear Dexterity
                'Gear Level',' ','','',
                'Gear Type','',' ','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//Gear Defense
                'Gear Level',' ','','',
                'Gear Type','',' ','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//Gear Worth
                'Gear Level',' ','','',
                'Gear Type','',' ','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//blank
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
                '','','',''
            ],
            [//blank
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
                '','','',''
            ],
        ],
        [//Mob Data
            [//Health
                'Mob Level',' ','','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//Experience
                'Mob Level',' ','','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//Col
                'Mob Level',' ','','',
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
                '','','',''
            ],
            [//blank
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
                '','','',''
            ],
            [//blank
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
                '','','',''
            ],
            [//blank
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
                '','','',''
            ],
        ],
        [//Boss Data
            [//Health
                'Mob Level',' ','','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//Experience
                'Mob Level',' ','','',
                '','','','',
                '','','','',
                '','','','',
                '','','',''
            ],
            [//Col
                'Mob Level',' ','','',
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
                '','','',''
            ],
            [//blank
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
                '','','',''
            ],
            [//blank
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
                '','','',''
            ],
            [//blank
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
                '','','',''
            ],
        ]
    ]
]
const dropdownString = [
    [//Sword Blox Online:Rebirth
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
                ['Normal','Boost','Game-pass'] //,'Boost w/ Game-pass'
            ],
        ],
        [
            [//Weapon Damage
                ['One-Hand','Two-Hand','Rapier','Dagger'],
                ['Normal'] //,'Badge','Game-pass','Legendary',
            ],
            [],
            [//Skill Damage
                ['4','5','6','7'], //'1','2','3', before
                ['Dagger'], //'One-Hand','Two-Hand','Rapier', before
            ],
            [//Gear Dexterity
                ['Normal','Badge'] //,'Game-pass','Legendary'
            ],
            [//Gear Defense
                ['Normal','Badge'] //,'Game-pass','Legendary'
            ],
            [//Gear Worth
                ['Armor','Shield','Headwear']
            ],

        ]
    ]
]
const visualString = [
    [//Sword Blox Online:Rebirth
        [//Player Data
            [//Health
                'Player Base Health','Player Health','','',''
            ],
            [//Experience
                'Player Experience','Percentage Saved','Player Experience Saved','',''
            ],
            [
                'Player Base Stamina','Player Stamina','','',''
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
        [
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
            ['','','','',''],
            ['','','','',''],
            ['','','','',''],
            ['','','','','']
        ],
        [
            ['Mob Health','','','',''],
            ['Mob Experience','','','',''],
            ['Mob Col','','','',''],
            ['','','','',''],
            ['','','','',''],
            ['','','','',''],
            ['','','','',''],
            ['','','','',''],
            ['','','','',''],
            ['','','','','']
        ],
        [
            ['Boss Health','','','',''],
            ['Boss Experience','','','',''],
            ['Boss Col','','','',''],
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
let bossLevel;

//LETS FOR VISUALS
let parentG;
let enterG;
let data1G;
let data2G;
let data3G;
let data4G;
let iG;

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
            document.getElementsByClassName("calculatorTitle")[i].hidden = true;
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
        //load visual titles and graphs/tables(later)
        for(let i = 0; i < document.getElementsByClassName('gameTitle').length; i++){
            if(document.getElementsByClassName("gameTitle")[i].innerHTML == document.getElementById("rev1").innerHTML){
                for(let v = 0; v < document.getElementsByClassName('categoryTitle').length; v++){
                    if(document.getElementsByClassName('categoryTitle')[v].innerHTML == document.getElementById('rev2').innerHTML){
                        for(let s = 0; s < document.getElementsByClassName('subsectionTitle').length; s++){
                            if(document.getElementsByClassName('subsectionTitle')[s].innerHTML == document.getElementById('rev3').innerHTML){
                                const c = [];
                                let noPass;
                                noPass = false;
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
                                for(let t = 0; t < document.getElementsByClassName('visualTitle').length; t++){
                                    document.getElementsByClassName('visualTitle')[t].innerHTML = visualString[i][v][s][t]+": ";
                                    
                                    if(visualString[i][v][s][t] == ''){
                                        document.getElementsByClassName('visualTitle')[t].hidden = true;
                                    }
                                    while(c.length < 4){
                                        c.push('0')
                                    }
                                    document.getElementsByClassName('visualTitle')[t].innerHTML += 
                                    formulaToes(document.getElementById('rev2').innerHTML,document.getElementById('rev3').innerHTML,c[0],c[1],c[2],c[3],t);
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

function forceAmountToes(changedItem){
    //confirm input type
    if(document.getElementById(changedItem).tagName === "INPUT"){
        if(document.getElementById(changedItem).value == ''){
            document.getElementById(changedItem).value = 0;
        } 
    }
}

function formulaToes(parent, enter, d1, d2, d3, d4, i){
    parentG = parent;
    enterG = enter;
    data1G = d1;
    data2G = d2;
    data3G = d3;
    data4G = d4;
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
                    output =  stamina;
                }
                if(typeof i === 'string' || i instanceof String){
                    if(i == '0'){
                        let baseStamina;
                        baseStamina = '100 + 5*x';
                        return baseStamina;
                    }
                    if(i == '1'){
                        let stamina;
                        stamina = '100 + 5*x + '+(agility + strength + vitality) / 10;
                        return stamina;
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
                    }
                    if(type == "Boost"){
                        smithingExperience = 1.24867 * smithingSK + 2.81122;
                    }
                    if(type == "Game-pass"){
                        smithingExperience = 1.24867 * smithingSK + 2.81122;
                    }
                    if(type == "Boost w/ Game-pass"){
                        //not done
                    }
                    smithingExperience = Math.round(smithingExperience);
                    output =  smithingExperience;
                }
                if(typeof i === 'string' || i instanceof String){
                    if(i == '0'){
                        //estimations
                        let smithingExperience;
                        if(type == "Normal"){
                            smithingExperience = '1.2524 * x - 0.415796';
                        }
                        if(type == "Boost"){
                            smithingExperience = '1.24867 * x + 2.81122';
                        }
                        if(type == "Game-pass"){
                            smithingExperience = '1.24867 * x + 2.81122';
                        }
                        if(type == "Boost w/ Game-pass"){
                            //not done
                        }
                        return smithingExperience;
                    }
                }
            }
        }
        else if(parent == "Weapon and Gear Data"){
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
                            weaponDamage += 0.057236 * weaponSK;
                            weaponDamage += -23.5568 * Math.pow(weaponSK, -1.81666) * Math.sin(2.16489 * Math.pow(weaponSK, 0.731571));
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
                                weaponDamage = '21.4516 * Math.pow(x, -1.14518)';
                                weaponDamage += '+0.511652 * Math.pow(x, 1.37416)';
                                weaponDamage += '+0.057236 * x';
                                weaponDamage += '-23.5568 * Math.pow(x, -1.81666) * Math.sin(2.16489 * Math.pow(x, 0.731571))';
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
                            if(skillNumber == 6){
                                skillDamage = Math.round(3.5485 * weaponDmg);
                            }
                            if(skillNumber == 7){
                                skillDamage = Math.floor(3.7485 * weaponDmg);
                            }
                            //assumed, first 3 seem to be different, with the last 4 following
                            //the below formula
                            else{
                                skillDamage = Math.round((2.3485 + 0.2 * skillNumber) * weaponDmg);
                            }
                        }
                        else{
                            skillDamage = 0;
                        }
                    }
                    else{
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
                                if(skillNumber == 6){
                                    skillDamage = 'Math.round(3.5485 * x)';
                                }
                                if(skillNumber == 7){
                                    skillDamage = 'Math.floor(3.7485 * x)';
                                }
                                //assumed, first 3 seem to be different, with the last 4 following
                                //the below formula
                                else{
                                    skillDamage = 'Math.round((2.3485 + 0.2 * '+skillNumber+') * x)';
                                }
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
        }
        else if(parent == "Mob Data"){
            //Mob/Boss Data
            if(enter == "Health"){
                mobLevel = Number(d1);
                if(i == 0){
                    //estimation
                    let mobHealth;
                    mobHealth = Math.round(((-4/3)*mobLevel + 20.6013 * Math.pow(mobLevel, 1.36611) + 19.4195) / 10) * 10;
                    output = mobHealth;
                }
                if(typeof i === 'string' || i instanceof String){
                    if(i == '0'){
                        //estimation
                        let mobHealth;
                        mobHealth = 'Math.round(((-4/3)*x + 20.6013 * Math.pow(x, 1.36611) + 19.4195) / 10) * 10';
                        return mobHealth;
                    }
                }
            }
            else if(enter == "Experience"){
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
            else if(enter == "Col"){
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
        }
        else if(parent == "Boss Data"){
            if(enter == "Health"){
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
            else if(enter == "Experience"){
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
            else if(enter == "Col"){
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
                        output = bossCol;
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
    let exp = formulaToes(parentG,enterG,data1G,data2G,data3G,data4G,''+0);

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
            family: 'Arial, sans-serif',
            size: 18,
            color: 'lightgrey'
            },
            showticklabels: true,
            tickangle: 'auto',
            tickfont: {
                family: 'Old Standard TT, serif',
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
            family: 'Arial, sans-serif',
            size: 18,
            color: 'lightgrey'
            },
            showticklabels: true,
            tickangle: 45,
            tickfont: {
                family: 'Old Standard TT, serif',
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
        };
    Plotly.newPlot("myPlot", data, layout, {modeBarButtonsToRemove: ['toImage','select2d','lasso2d','resetScale2d','zoom2d','toggleSpikelines'], scrollZoom: true, displaylogo: false, responsive: true});
    return;

    //Halt so that unnecessary processing does not take place

    
    const ctx = myCanvas.getContext("2d", { alpha: true });
    myCanvas.hidden = false;

    //Note: The following is code found and adjusted from 
    //https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Optimizing_canvas
    // Get the DPR and size of the canvas
    

    // Set the "actual" size of the canvas
    myCanvas.width = rect.width * dpr;
    myCanvas.height = rect.height * dpr;

    // Scale the context to ensure correct drawing operations
    ctx.scale(2*dpr, 2.15*dpr);

    // Set the "drawn" size of the canvas
    myCanvas.style.width = `${2*width}px`;
    myCanvas.style.height = `${2*height}px`;
    //end of adjusted code//

    if(tries == 0){
        myCanvas.hidden = true;
        tries++;
        return;
    }

    ctx.beginPath();
    //the graph needs to be shifted down and to the right
    let padding = width/20;
    let labelPadding = width/20;
    let gridColor = "#dfdfdf";
    let pointColor = '#000000';
    let lineColor = "#2c66e6";
    let pointWidth = 10;
    let numberYDivisions = 10;

    let MAX = 500;
    let step = 2;
    let maxComponents = MAX/step +1;

    let counter;
    counter = 0;
    let ymax;
    ymax = 0;
    let ymin;
    ymin = 1e10;

    const xcoords = []; //holds all x coordinates 
    const ycoords = []; //holds all y coordinates

    
    let temp = data1G; //saves the previously used data
    //get x and y values to display
    for(let i = 0; i <= MAX; i += step){
        xcoords.push(i);
        ycoords.push(formulaToes(parentG, enterG, i, data2G, data3G, data4G, 0));
    }
    data1G = temp; //sets the previously used data
    //find ycoord max value
    for(let v = 0; v < MAX/step + 1; v++){
        if(ycoords[v] > ymax){
            ymax = ycoords[v];
        }
    }
    //find ycoord lowest value
    for(let v = 0; v < MAX/step +1; v++){
        if(ycoords[v] < ymin){
            ymin = ycoords[v];
        }
    }

    document.getElementById('graphAlt').innerHTML = 
        'A graph of the function relating the first input and first output presented.<br>TO DO:<br>';
    document.getElementById('graphAlt').innerHTML +=
        'The current point position is (x,y).<br>The minimum value is at point (x1,y1) and the maximum value is at point (x2,y2).<br>';
    //Note: The following is code found and adjusted from 
    //https://stackoverflow.com/questions/8693342/ by Rodrigo Castro
    ctx.clearRect(0,0,500,500);
    ctx.fillStyle = 'white';
    ctx.fillRect(padding + labelPadding, padding, width - (2 * padding) - labelPadding, height - 2 * padding - labelPadding);
    ctx.fillStyle = 'black';
    // create hatch marks and grid lines for y axis.
    for (let i = 0; i < numberYDivisions+1; i++) {
        let x0 = padding + labelPadding;
        let x1 = pointWidth + padding + labelPadding;
        let y0 = height - ((i * (height - padding * 2 - labelPadding)) / numberYDivisions + padding + labelPadding);
        let y1 = y0;
            
            ctx.strokeStyle = gridColor;
            ctx.moveTo(padding + labelPadding + 1 + pointWidth, y0);
            ctx.lineTo(width - padding, y1);
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.strokeStyle = 'black';
            ctx.font = Math.floor(width/45)+'px Arial'
            let yLabel;
            yLabel = ""+(parseFloat((i*.1*(ymax-ymin))+ymin).toPrecision(7));
            if(isNaN(yLabel)){
                yLabel = '0.00';
            }
            let labelWidth = ctx.measureText(yLabel).width;
            ctx.fillText(yLabel, x0 - Math.floor(labelWidth) - 5, y0 + (5 / 2) - 3);
            ctx.closePath();
        if(i != 0){
            ctx.moveTo(x0, y0);
            ctx.lineTo(x1, y1);
            ctx.stroke();
            
        }

    }
    // and for x axis
    for (let i = 0; i < MAX+1; i++) {
            
        let x0 = i * (width - padding * 2 - labelPadding) / (MAX - 1) + padding + labelPadding;
        let x1 = x0;
        let y0 = height - padding - labelPadding;
        let y1 = y0 - pointWidth;
        if ((i % (((MAX / 10.0)))) == 0) {
            ctx.strokeStyle = gridColor;
            ctx.moveTo(x0, height - padding - labelPadding - 1 - pointWidth);
            ctx.lineTo(x1, padding);
            ctx.stroke();
            ctx.closePath();
            ctx.beginPath();
            ctx.strokeStyle = 'black';
            let xLabel = i + "";
            let labelWidth = ctx.measureText(xLabel).width;
            ctx.fillText(xLabel, x0 - labelWidth / 2, y0 + (width/45));
        if(i != 0){
            ctx.moveTo(x0, y0);
            ctx.lineTo(x1, y1);
            ctx.stroke();
            }
        }
    }
    ctx.moveTo(padding + labelPadding, height - padding - labelPadding);
    ctx.lineTo(padding + labelPadding, padding);
    ctx.stroke();
    ctx.moveTo(padding + labelPadding, height - padding - labelPadding);
    ctx.lineTo(width - padding, height - padding - labelPadding);
    ctx.stroke();
    ctx.closePath();
    
    ctx.beginPath();
    ctx.strokeStyle = lineColor;
    ctx.lineWidth = 1;

    let xScale = (width - (2 * padding) - labelPadding) / (MAX - 1);
    let yScale;
    if(ymax != 0){
        yScale = (height - 2 * padding - labelPadding) / (ymax - ymin);
    }
    else{
        yScale = 1;
    }

    //change x and y coords in accordance with the  setup
    const graphxPoints = [];
    const graphyPoints = [];
    for (let i = 0; i < MAX+1; i+= step) {
        let x1 = Math.floor(i * xScale + padding + labelPadding);
        let y1;
        if(ymax != 0){
            y1 = Math.floor((ymax - ycoords[counter]) * yScale + padding);
        }
        else{
            //statement in case ymax is 0, since this entails that the
            //function is constant
            y1 = Math.floor((ymax - ycoords[counter]) * yScale + height/35*padding);
        }
        graphxPoints.push(x1);
        graphyPoints.push(y1);
        counter++;
    }
    //display graph
    for (let i = 0; i < graphxPoints.length-1; i++) {
        let x1 = graphxPoints[i];
        let y1 = graphyPoints[i];
        let x2 = graphxPoints[i+1];
        let y2 = graphyPoints[i+1];
        ctx.moveTo(x1, y1);
        ctx.lineTo(x2, y2);
        ctx.stroke(); 
    }
    //end of adjusted code//
}

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
}
