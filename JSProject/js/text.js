const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')
//const picElement = document.getElementById("pic")

let state = {}

function startGame(){
    
    state = {}
    showTextNode(1)
    
    
}


    
  

function showTextNode(textNodeIndex)
{
    const textNode = textNodes.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    



    
    //loops through the array of objects and picks up all image paths set inside the imgPath key. Then writes image tag each time and places it inside an empty <div>, lastly it gets appended as a constructed element on the page inside a game id

 

//    for (let i = 0; i < textNodes.length; i++) {
//
//        let img = '<img src="' + textNodes[i].imgPath + '">';
//
//        var elem = document.createElement('div'); //<div></div>
//
//        var content = document.createTextNode(img); //now the image is available to insert into the empty div
//
//        elem.appendChild(content); //<div><img</div>
//
//        document.getElementById('game').appendChild(elem); //<div id="game"><div><img></div></div>
//
//
//    }
//    
//    
//    
    
    
    
    
    
    
    
    
    while(optionButtonsElement.firstChild){
        optionButtonsElement.removeChild(optionButtonsElement.firstChild)
        
    }
    
    textNode.options.forEach(option => {
        if (showOption(option)){
            const button = document.createElement('button')
            button.innerText = option.text
            button.classList.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
            
        }
    })
    
}

function showOption(option){
    return option.requiredState == null || option.requiredState(state)
    
}


function selectOption(option){
    const nextTextNodeId = option.nextText
    
    if(nextTextNodeId <= 0){
        return startGame()
        
    }
    
    state = Object.assign(state, option.setState)
    showTextNode(nextTextNodeId)
    
}

const textNodes = [
    
{
    
    id: 1, 
    text: 'Do You Want To Play this Text Adventure Game?????',
    
    // imgPath: '../images/1.jpg',
        
        options:        
        [            
            {                
                text: 'START  ',
                nextText: 2
                
            }
        ]
        
    },
    
    {
        
        id: 2, 
        text: 'An Evil wizard and his minion of Orcs has kidnaped the princess and taken her to his castle which lies in the middle of jungle located far outskirt of the kingdom. As the best knight in kingdom you are tasked to rescue the princess. ',
            // imgPath: '../images/2.jpg',
        
        options: [
            
            {
                
                text: 'Next',
                
              
                nextText: 4
                
            },
            

        ]
        
    },
    


  {
        
        id: 4, 
        text: 'The king gives you a holy water to be used in your adventure.  ',
        
        options: [
            
            {
                
                text: 'Take',
                setState: { water: true },              
                nextText: 5
                
            },
            
            {
                
                text: 'Refuse',        
              
                nextText: 5
                
            },
            
            

        ]
        
    },

{
          id: 5, 
        text: 'On your way you find an injured Griffin on the side of the road. ',
        
        options: [
            
            
            
            {
                
                text: 'Heal the Griffin using holy water',
                requiredState: (currentState) => currentState.water,
                setState: { water: false, griffin: true }, 
                nextText:6
                
            },
            
 

            {
                
                text: 'Kill the Griffin',
               
                nextText: 50
                
            },
            
            {
                
                text: 'Ignore and continue',
               
                nextText: 50
                
            }  



        ]
},
    
       {
        id: 6,
        text: "You healed the Griffin using holy water. The Griffin gives you a summoning scroll and fly away.",
            
            options: [
                {
                    text: 'Next',
                    nextText: 50
                    
                }
            ]
    },
    
    
    
    
        {
        
        id: 50, 
        text: 'After a long journey you finally reached the edge of the jungle. In a faraway distant you see group of Orcs with a captured Dragon. The Orcs haven’t seen you yet. ',
        
        options: [
            
            {
                
                text: 'Ignore Orcs and continue ',
                

                nextText: 53
                
            },
            
            {
                text: 'Fight the Orcs',
                nextText: 51
                
                
            }
        ]
        
    },
    
    
    {
        
        id: 51, 
        text: 'You kill all the Orcs. You see the captured Dragon trying to free itself form the chain. ',
        
        options: [
            
            {
                
                text: 'Release the Dragon',
                setState: { dragon: true },
                nextText: 52
                
            },
            
            {
                
                text: 'Ignore and continue',
                setState: { dragon: true },
                nextText: 53
                
            },
            
            {
                text: 'Kill the Dragon',
                nextText: 53
                
                
            }
        ]
        
    },
    
        
        {
        id: 52,
        text: "Once the Dragon is free and it gives you a summoning scroll before flying away.",
            
            options: [
                {
                    text: 'Next',
                    nextText: 53
                    
                }
            ]
    },
    
    
    {
          id: 53, 
        text: 'You continue your journey through the jungle toward the wizard castle, but you see horde of Orocs camping up ahead. There is river just south of you and a cave north of you.',
        
        options: [
            
            {
                
                text: 'Fight the Orcs',
               
                nextText: 54
                
            },
            
                        {
                
                text: 'Ignore Orcs and try to sneak through the Cave ',
               
                nextText: 100
                
            },
            
            {
                text: 'Ignore Orcs and try to sneak through River ',
                nextText: 200
                
                
            }
        ]
},
    
    
        
    {
        id: 54,
        text: "You fought with the Orcs, but they were too many of them and you are killed.",
            
            options: [
                {
                    text: 'Next',
                    nextText: 1000
                    
                }
            ]
    },
    
    
// ///////////////////////////////   The Cave Section Start here
     

{
          id: 100, 
        text: 'You are walking through the cave the see dozens of bats on the side of the cave.',
        
        options: [
            
            {
                
                text: 'Ignore the bats and continue forward',
               
                nextText: 101
                
            },
            
                        {
                
                text: 'Kill the bats ',
               
                nextText: 110
                
            }
        ]
},
    
{
          id: 101, 
        text: 'As you go deeper into the cave you suddenly meet group of Orcs camping. You are spotted by the Orcs.',
        
        options: [
            
            {
                
                text: 'Fight the Orcs ',
               
                nextText: 103
                
            },
            
                        {
                
                text: 'Try to run away ',
               
                nextText: 102
                
            }
        ]
},
       
    
{
          id: 102, 
        text: 'The Orcs chase you and you are hit by arrow on your back.',
        
        options: [
            
            {
                
                text: 'Next ',
               
                nextText: 1000
                
            },
            

        ]
},
    
    {
          id: 103, 
        text: 'You manage to kill the Orcs and move forward toward the exit of cave. ',
        
        options: [
            
            {
                
                text: 'Next ',
               
                nextText: 120
                
            },
            

        ]
},
    
{
          id: 110, 
        text: 'You try to kill the bats, but the bats run away. The bats were covering a different route',
        
        options: [
            
            {
                
                text: 'Continue to the same path ',
               
                nextText: 101
                
            },
            
            {
                
                text: 'Take the new route ',
               
                nextText: 120
                
            }
            

        ]
},
        

{
          id: 120, 
        text: 'As you are walking through the cave, you see about to exit to cave. As you Approach the exit suddenly a humongous Monster appears behind you.',
        
        options: [
            
            {
                
                text: 'Fight the Monster ',
               
                nextText: 121
                
            },
            
            {
                
                text: 'Try to run away',
               
                nextText: 122
                
            }
            

        ]
},
    


{
          id: 121, 
        text: 'During your fierce fight with monster, you slip and lose the fight to the monster.',
        
        options: [
            
            {
                
                text: 'Next ',
               
                nextText: 1000
                
            },
            

        ]
},    

    
{
          id: 122, 
        text: 'The monster start chasing you. During the chase the monster somehow manages to kick you and you are sent flying. Fortunately, you fly straight in front of the wizard’s castle. ',
        
        options: [
            
            {
                
                text: 'Next ',
               
                nextText: 300
                
            },
            

        ]
},    
        
        
//    //////////////////////////////////////the River section start here    
        
    
{
          id: 200, 
        text: ' You manage to swim under water and skip pass the horde of Orcs. You are moving quietly through the river when you hear a large splash up ahead. ',
        
        options: [
            
            {
                
                text: 'Continue moving through river cautiously',
               
                nextText: 210
                
            },
            
            {
                
                text: 'Leave the river and move back to the land',
               
                nextText: 201
                
            }
            

        ]
},
    

{
          id: 201, 
        text: ' As you continue your journey toward wizard castle you are spotted by small group of Orcs. ',
        
        options: [
            
            {
                
                text: 'Fight the Orcs',
               
                nextText: 203
                
            },
            
            {
                
                text: 'Try to run away',
               
                nextText: 202
                
            }
            

        ]
},
    
    {
          id: 202, 
        text: 'You try to run away from the Orcs but because of your wet Armor, they manage to catch you and stab you in the back.  ',
        
        options: [
            
            {
                
                text: 'Next',
               
                nextText: 1000
                
            }
            

        ]
},
   
 {
          id: 203, 
        text: 'You manage to kill the Orcs and move forward toward wizard castle.',
        
        options: [
            
            {
                
                text: 'Next',
               
                nextText: 210
                
            }
            

        ]
}, 

{
          id: 210, 
        text: 'In your path you suddenly see a big monster. ',
        
        options: [
            
            {
                
                text: 'Fight the Monster',
               
                nextText: 211
                
            },
            
            {
                
                text: 'Try to hide from the monster',
               
                nextText: 212
                
            },
            
            {
                
                text: 'Try to run away',
               
                nextText: 220
                
            }
            
            

        ]
}, 

{
          id: 211, 
        text: 'During your fierce fight with monster, you slip and lose the fight to the monster.',
        
        options: [
            
            {
                
                text: 'Next ',
               
                nextText: 1000
                
            },
            

        ]
},  
    
{
          id: 212, 
        text: 'Monster notices you and immediately begin attacking you.',
        
        options: [
            
            {
                
                text: 'Next ',
               
                nextText: 1000
                
            },
            

        ]
},  
  
    
{
          id: 220, 
        text: 'The monster start chasing you. During the chase the monster somehow manages to kick you and you are sent flying. Fortunately, you fly straight in front of the wizard’s castle. ',
        
        options: [
            
            {
                
                text: 'Next ',
               
                nextText: 300
                
            },
            

        ]
},    
  

//    Infront of the Castle            
{
          id: 300, 
        text: 'You are Infront of the castle and see the castle is well patrolled by the Orcs.',
        
        options: [
            
            {
                
                text: 'Fight the Orc ',
               
                nextText: 301
                
            },
            
            {
                
                text: 'Try to sneak in through back',
               
                nextText: 310
                
            }
            

        ]
}, 
    
{
          id: 301, 
        text: 'You Fight Orcs Valiantly but you are surrounded and outnumbered.',
        
        options: [
            
            {
                
                text: 'Keep fighting  ',
               
                nextText: 302
                
            },
            
            {
                
                text: 'Surrender and hope for the best',
               
                nextText: 303
                
            }            

        ]
},
    
{
          id: 302, 
        text: 'You kill many Orcs but eventually defeated.',
        
        options: [
            

            {
                
                text: 'Next',
               
                nextText: 1000
                
            }            

        ]
},
    
{
          id: 303, 
        text: 'The Orcs chain you and takes you inside the castle to deliver you to the wizard. ',
        
        options: [
            

            {
                
                text: 'Next',
               
                nextText: 304
                
            }            

        ]
},
    
{
          id: 304, 
        text: 'On your way to wizard you, see a big pit and have chance to push the Orcs guarding you.',
        
        options: [
            

            {
                
                text: 'Push them',
               
                nextText: 306
                
            },
                        {
                
                text: 'Do nothing',
               
                nextText: 305
                
            }  

        ]
},
  
{
          id: 305, 
        text: 'You are brought to the wizard. As you are chained you are enabled to do anything. Wizard just laughs at you than shoots lighting at you. ',
        
        options: [
            


            {
                
                text: 'Next',
               
                nextText: 1000
                
            }  

        ]
},

    
{
          id: 306, 
        text: 'You manage to throw all the Orcs inside the pit that were delivering you to the wizard. You manage to find the key to your chain. ',
        
        options: [
            
            {
                
                text: 'Next',
               
                nextText: 350
                
            }  

        ]
},

{
          id: 350, 
        text: 'Now you are inside the castle and start looking for the wizard inside the castle. ',
        
        options: [
            
            {
                
                text: 'Next',
               
                nextText: 400
                
            }  

        ]
},
    
    
{
          id: 310, 
        text: 'You manage to successfully infiltrate the castle. As you are searching for wizard few Orcs inside the castle spots you.  ',
        
        options: [
            
            {
                
                text: 'Fight the Orcs',
               
                nextText: 312
                
            },
            
            {
                
                text: 'Try to run away ',
               
                nextText: 311
                
            }              

        ]
},

{
          id: 311, 
        text: 'As you are running away, you fall inside a big pit. ',
        
        options: [
            

            {
                
                text: 'Next ',
               
                nextText: 1000
                
            }              

        ]
},

{
          id: 312, 
        text: 'You manage to kill the Orcs.',
        
        options: [
            

            {
                
                text: 'Next ',
               
                nextText: 350
                
            }              

        ]
},
    
    

    
    
// ////////////////////////////the wizard section   
    
{
          id: 400, 
        text: 'You finally come face to face with the wizard at top of the castle. You see the princess inside a cell chained to the wall. ',
        
        options: [
            
            {
                
                text: 'Next',
               
                nextText: 401
                
            }  

        ]
},
    
{
          id: 401, 
        text: 'Wizard warns he is the very powerful and gives you opportunity to give up and leave.',
        
        options: [
            
            {
                
                text: 'Fight the Wizard',
               
                nextText: 402
                
            },
            
            {
                
                text: 'Leave the princess and run away',
               
                nextText: 1001
                
            }  

        ]
},
    
{
          id: 402, 
        text: ' As you charge to attack, he shoots lighting at you, but u manage to dodge them and injure the wizard. ',
        
        options: [
            
            {
                
                text: 'Next',
               
                nextText: 403
                
            }  

        ]
},
    
{
          id: 403, 
        text: ' He attacks you with many spells, but you manage to dodge them all. In his desperate struggle he uses all his magic to summon large golem. ',
        
        options: [
            
            {
                
                text: 'Next',
               
                nextText: 404
                
            }  

        ]
},

{
          id: 404, 
        text: ' You attack the golem with all your might have but the golem is too strong. ',
        
        options: [
            
            
            
            {
                
                text: 'Summon the Dragon using scroll',
                requiredState: (currentState) => currentState.dragon,
                nextText:405
                
            },
            
            
            {
                
                text: 'Summon the Griffin using scroll',
                requiredState: (currentState) => currentState.griffin,
                nextText:406
                
            },
            
 

            {
                
                text: 'Run away',
               
                nextText: 1001
                
            }  



        ]
},

{
          id: 405, 
        text: ' Golem is defeated by the Dragon. The wizard is now helpless as the wizard had used all his magic. ',
        
        options: [
            
            
            
            {
                
                text: 'Kill the wizard',
                nextText:410
                
            },
            
            
            {
                
                text: 'Capture wizard to face justice',
                nextText:420
                
            }


        ]
},
    
    {
          id: 406, 
        text: ' Golem is defeated by the Griffin. The wizard is now helpless as the wizard had used all his magic. ',
        
        options: [
            
            
            
            {
                
                text: 'Kill the wizard',
                nextText:410
                
            },
            
            
            {
                
                text: 'Capture wizard to face justice',
                nextText:420
                
            }


        ]
},
    
{
          id: 410, 
        text: ' You stab the wizard in the heart but smiles and calls you fool. As soon as he dies his body cause big explosion. ',
        
        options: [
                
            
            {
                
                text: 'Next',
                nextText:1000
                
            }


        ]
},
    
{
          id: 420, 
        text: ' You free the princes and return to the kingdom. The princess has been rescued and wizard is put in the prison with his magic taken away from him.  ',
        
        options: [
                
            
            {
                
                text: 'Next',
                nextText:421
                
            }


        ]
},

{
          id: 421, 
        text: ' Congratulation, you have completed the adventure. Thank you for playing.',
        
        options: [
                
            
            {
                
                text: 'Next',
                nextText:-1
                
            }


        ]
},
  
  
   
   
    
    

    
    
// //////////////////the death section
     
    
    {
          id: 1001, 
        text: 'You manage to escape alive, but you are haunted by your own cowardness and kill yourself.',
        
        options: [
            
            {
                
                text: 'Next',
               
                nextText: 1000
                
            }  

        ]
},
    
    {
        id: 1000,
        text: 'You have died and failed to save the Princess.',
            
            options: [
                {
                    text: 'Try Again',
                    nextText: -1
                    
                }
            ]
    }
    
    
        
    
    
    
    
]


startGame()