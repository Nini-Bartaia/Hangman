WORDS=[
    'APPLE',
    'OXYGEN',
    'ZOMBIE',
    'MIRACLES',
    'CROWD',
    'FISHERMAN',
    'STRENGTH',
    'FLOWER',
    'GARDEN',
    'SWORD'
]

const buttons=document.querySelectorAll('.btn')
const wrapper=document.querySelector('[wrapper]')
const head=document.querySelector('[head]')
const body=document.querySelector('[body]')
const lefthand=document.querySelector('[lefthand]')
const righthand=document.querySelector('[righthand]')
const leftleg=document.querySelector('[leftleg]')
const rightleg=document.querySelector('[rightleg]')
const lefteye=document.querySelector('[lefteye]')
const righteye=document.querySelector('[righteye]')
const sadmouth=document.querySelector('[sadmouth]')
const wrapper2=document.querySelector('[wrapper2]')
const text=document.querySelector('[text]')
const button=document.querySelector('[button]')


guessLimit=6;

randomWord()
word=randomWord()
key=character(word)
char=drawWord(word)
drawWrong(word,char)
resultBtn()




function randomWord(){
    guessingWord=Math.floor(Math.random() * WORDS.length);
    console.log(WORDS[guessingWord])

    return WORDS[guessingWord]

}


function character(word){
    par=document.getElementsByTagName('p')
    console.log(word)
    counter=0
    buttons.forEach(button=>{
        button.addEventListener('click',()=>{
          
            for(let i=0;i<word.length;i++){
               
                if(word[i]==button.innerText ){
                    counter++
                    button.disabled=true
                  
                   par[i].style='display:block;'
                  
                    

                }

                if(counter==word.length  && guessLimit<=6){
                    console.log('full')
                    wrapper2.style='display:block'
                    text.innerText='You Won!'
                }

                
                
                
            }

          

            
          
        })
       
         
        return button.innerText
    })
   
}

function drawchar(key,char){
    if(key===char){
        console.log('ok')
    }
}

function drawWord(word){
    p=document.getElementsByTagName('p')
    let arr=[]
    for(let i=0; i<word.length; i++)
    {
        const div = document.createElement("div");
        const p= document.createElement('p')
        wrapper.appendChild(div)
       
        div.appendChild(p)
        p.innerText=word[i]
       
        arr.push(word[i])
        console.log(word[i])

        
       
    }

    return arr
}


function checkChar(key,word){
    
    console.log(key)
    console.log(word)


    for (let i=0;i<char;i++){
        
        if(i===key){
            console.log('ok')
        }
    }
}

let wrong
function drawWrong(word,array){
    para=document.getElementsByTagName('p')
    console.log(word)
    console.log(array)
     
    
    buttons.forEach(btn=>{
        btn.addEventListener('click', ()=>{
            console.log(btn.innerText)

            for(let i=0;i<array.length;i++){
                if(!array.includes(btn.innerText) && guessLimit==6){
                    guessLimit=guessLimit-1
                    console.log('no match')
                    console.log(guessLimit)
                    head.style='display:block'
                    wrapper.style='margin-top:15%'
                    break
                    
                }

                if(array.includes(btn.innerText) && guessLimit==6){
                    
                    console.log('match')
                    head.style='display:none'
                    break
                }
                if(!array.includes(btn.innerText) && guessLimit==5){
                    guessLimit=guessLimit-1
                    console.log('no match')
                    body.style='display:block'
                    break
                }

                if(array.includes(btn.innerText) && guessLimit==5){
                    
                    console.log('match')
                    body.style='display:none'
                    break
                }
                if(!array.includes(btn.innerText) && guessLimit==4){
                    guessLimit=guessLimit-1
                    console.log('no match')
                    console.log(guessLimit)
                    lefthand.style='display:block'
                    righthand.style='display:block'
                    break
                }

                if(array.includes(btn.innerText) && guessLimit==4){
                    
                    console.log('match')
                    lefthand.style='display:none'
                    righthand.style='display:none'
                    break
                }
                if(!array.includes(btn.innerText) && guessLimit==3){
                    guessLimit=guessLimit-1
                    console.log('no match')
                    console.log(guessLimit)
                    lefthand.style='display:block'
                    righthand.style='display:block'
                    break
                }
                if(array.includes(btn.innerText) && guessLimit==3){
                    
                    console.log('no match')
                    console.log(guessLimit)
                    lefthand.style='display:none'
                    righthand.style='display:none'
                    break
                }
                if(!array.includes(btn.innerText) && guessLimit==2){
                    guessLimit=guessLimit-1
                    console.log('no match')
                    console.log(guessLimit)
                    leftleg.style='display:block'
                    rightleg.style='display:block'
                    break
                }
                if(array.includes(btn.innerText) && guessLimit==2){
                   
                    console.log('no match')
                    console.log(guessLimit)
                    leftleg.style='display:none'
                    rightleg.style='display:none'
                    break
                }
                if(!array.includes(btn.innerText) && guessLimit==1){
                    guessLimit=guessLimit-1
                    console.log('no match')
                    console.log(guessLimit)
                    lefteye.style='display:block'
                    righteye.style='display:block'
                    break
                }
                if(array.includes(btn.innerText) && guessLimit==1){
                    
                    console.log('no match')
                    console.log(guessLimit)
                    lefteye.style='display:none'
                    righteye.style='display:none'
                    break
                }
                if(!array.includes(btn.innerText) && guessLimit==0){
                    guessLimit=guessLimit-1
                    console.log('no match')
                    console.log(guessLimit)
                    sadmouth.style='display:block'
                    wrapper2.style='display:block'
                    text.innerText='You Lost!'
                    
                    break
                }
                if(array.includes(btn.innerText) && guessLimit==0){
                   
                    console.log('no match')
                    console.log(guessLimit)
                    sadmouth.style='display:none'
                    
                    
                    break
                }

                if(!array.includes(btn.innerText) && guessLimit==0){
                    console.log('no')
                    wrapper2.style='display:block'
                    text.innerText='You Lost!'
                    break

                    
                }
                



    
            }


           
        
        })

        
        
    })

    

   
}


function resultBtn(){
    button.addEventListener('click', ()=>{
        wrapper2.style='display:none'
       
       location.reload()
       
    })
}


