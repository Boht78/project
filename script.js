






//Respones gtml
function Header(){
   let WindowWidth = window.innerWidth;
   let WindowHeight = window.innerHeight;

//headers Element
let MealsLogo = document.querySelector('.meals-logo');
let night = document.querySelector('.night');
let icon = document.querySelector('.icon');
let logo = document.querySelector('.logo');
let MealsImages = document.querySelector('.meals-images')

//console.log( WindowHeight / 20, WindowWidth / 12)

let ListType = document.querySelectorAll('.list-type-food')

//console.log(ListType)
if(WindowWidth > WindowHeight ){


    let SetMeals = WindowHeight -50 ; 
   MealsImages.style.height = `${SetMeals}px`
    //console.log(SetMeals - 100)
    WindowWidth > 1000? MealsImages.style.height = `${SetMeals -250}px`: MealsImages.style.height = `${SetMeals}px`
   if(WindowWidth > 1000){


   }



}//ifWindowWidth > WindowHeight


if(WindowHeight > WindowWidth){

   if(WindowHeight >= 765, WindowWidth >= 750){
      
      let SetNewHeight = WindowHeight / 3 ;
      let SetHeightImgageLogo =  WindowHeight / 10;
      let SetIconAndLogo = WindowWidth / 8;

//console.log(WindowWidth / 9)
MealsImages.style.height = `${SetNewHeight}px`;


}


}








}Header()

//window.addEventListener('resize', Header)









//Respones html End
























//JavaScript



function CheckOrientation(){
   
   let rightmenu = document.querySelector('.right-menu');
   let MealsNames = document.querySelector('.meals-logo');
   let infoM = MealsNames.getBoundingClientRect();
   let infoR = rightmenu.getBoundingClientRect()
  // console.log(infoM.y,)
   let WindowWidth = window.innerWidth;
   let WindowHeight = window.innerHeight;



if(WindowWidth > WindowHeight){

   let SetWidth = WindowWidth / 4;

   
   rightmenu.style.width = `${SetWidth}px`
   rightmenu.style.height = `${WindowHeight}px`

//   console.log(WindowHeight )

}
else{

    
   rightmenu.style.width = '25vh'

}




}//Check if Device Ratote






//header tag start

//right-menu start

let rightmenu = document.querySelector('.right-menu');
let btn1 = document.querySelector('.btn-h');
let lang = document.querySelector('.lang');
let largeboxs = document.querySelectorAll('.s-l-c-m'); 
let smallboxs = document.querySelectorAll('.l-c-m');
let spans = document.querySelectorAll('.top-down');
let arrow1 = document.querySelectorAll('.line1');
let arrow2 = document.querySelectorAll('.line2');
let ArrowsLines = document.querySelectorAll('.lines');
let night = document.querySelector('.night')
//fuction open and close menu right side 


function OpenMenuRight(){


   let WindowWidth = window.innerWidth;
   let WindowHeight = window.innerHeight;


let i = 0;
btn1.addEventListener('click',(events)=>{


 if(i === 0){
     rightmenu.style.width = '25vh';
     rightmenu.style.opacity = '1';
     document.querySelector('.night').style.opacity = '0';
     night.style.transition = '0s';

     CheckOrientation()
    //rightmenu.style.width = '25vh'
   
   



   i =1
 }
//ifi=0



 else{
     rightmenu.style.width = '0vh';
     rightmenu.style.opacity = '0';
     document.querySelector('.night').style.opacity = '1'
    
  
     spans.forEach((span,value)=>{
        span.style.background = '';
     })

     i = 0
 }
 

});


}OpenMenuRight();
//function end

















// function for open height: auto when click

/*

function btnOpenandClose(){


largeboxs.forEach((item1, index1)=>{

  
    
 let x = 0;
    item1.addEventListener('click',(valuespan)=>{
       
   
        
    let linkva = spans[index1];
    let ArrowValu1 = arrow1[index1];
    let ArrowValu2 = arrow2[index1];
    let ArrowsColor = ArrowsLines[index1];
    //console.log(ArrowValu1)

       

         if(x === 0 ){

            

            ArrowValu1.style.cssText = 
            `                  
           
           translate: 3px 4px;
             rotate: -40deg;      
            `
             
            ArrowValu2.style.cssText = 
            `
            
            translate: -5px 4px;
             rotate: 40deg;      
            
            `





          
        item1.style.cssText = 
        `
        height: auto;
        `
          x = 1;
          
         }

         else{
            
         
            ArrowValu1.style.cssText = 
       `                  
      translate: 3px 4px;
        rotate: 40deg;      
       `
    
       ArrowValu2.style.cssText = 
       `
       
       translate: -5px 4px;
        rotate: -40deg;      
       
       `;



          
         

        item1.style.cssText = 
        `
        height: 80px;
        `
        x = 0;
       
         }


    
  //spans 

    });
//click

  
});
//item1





}btnOpenandClose();
//function end

  */




function testcode(){

let texts = document.querySelectorAll('.fix')
let Lists = document.querySelectorAll('.l-c-m')

let line1 = document.querySelectorAll('.line1')
//let line2 = document.querySelectorAll('.line2')


texts.forEach((item,index)=>{






let IsOpen = false;
item.addEventListener('click',()=>{


if(!IsOpen){


   Lists[index].style.height = 'auto'

  line1[index].src = '/right-menu/icon-down-balck.png'
  
  



   IsOpen = true

}


else{
   Lists[index].style.height = '0px'
   line1[index].src = '/right-menu/icon-top-balck.png'

   IsOpen = false
}



})



})






}testcode()























function NightAndMoring(){

   let changeColor = document.querySelectorAll('.list-menu, .meals,  .Dishes span,p  ,.title-food span,p,   infos ,a')
   let namef = document.querySelectorAll('.name-f');
   let moonsun = document.querySelector('.night-s');
   let lamb = document.querySelector('.image');
   let night = document.querySelector('.night');
   let pen = document.querySelector('.penfood1');
   let divwrite = document.querySelector('.div-write1');
   let next = document.querySelectorAll('.ArrowRight')
   let prev = document.querySelectorAll('.ArrowLeft')
   let Up = document.querySelector('.Up')
   let btnup = document.querySelector('.backup') 
   let line1 = document.querySelectorAll('.line1')
  // console.log(Up)

   let bod = document.body

   





 let Colection = [

   {selector: '.prev-next'},
   {selector: '.name-food'},
   {selector: '.explain'},
   {selector: '.price'},
   {selector: '.icon-sp'},

 ];//group of datas












//Left and Right
   function Whitecolor(){
   
      //start = repeat

   

 let line1 = document.querySelectorAll('.line1')

  Colection.forEach((item,index)=>{
   


   prev[index].src = '/main/imgs foods/600px/arrows/icon-right-white.png'   
   next[index].src = '/main/imgs foods/600px/arrows/icon-left-white.png'
   let span = document.querySelectorAll(item.selector)
  
    for(i = 0; i < span.length; i++){
        
  
       span[i].style.color = 'white'
 
      
       };//forloop
 

    });
    //Colectiom.item
    
   

   };//fuction white






   function Blackcolor(){
   
      //start = repeat

   

 

  Colection.forEach((item,index)=>{

//   let ArrowLeft = prev[index].src = ''

   let span = document.querySelectorAll(item.selector)
  
    prev[index].src = '/main/imgs foods/600px/arrows/icon-left-balck.png'   
   next[index].src = '/main/imgs foods/600px/arrows/icon-right-balck.png'

    for(i = 0; i < span.length; i++){

     
       span[i].style.color = 'black'

      

       };//forloop
 

    });
    //Colectiom.item
    
   

   };//balck function













   
  
   // console.log(namef)

  // console.log(mainspan.length)   

   changeColor.forEach((item,  index)=>{


    
    

    let DivideValues = Math.round(index /7.5)
    let MixItems = namef[DivideValues]
 
    //MixItems.style.background = 'black'
         //item.style.color = 'white'
   
      
   //night.style.background = 'blue'
  
   let Isclick = false;
   night.addEventListener('click', ()=>{
    
   
    
      if(!Isclick){

    bod.style.background = 'rgb(0, 0, 0)'
   
    item.style.color = 'white'
    MixItems.style.background = ' rgb(236, 230, 230)'

    Up.src = '/main/imgs foods/600px/arrows/ArrowUp/icon-top-white.png' 
    btnup.style.cssText = 
    `
   
    border: solid white; 
    
    
    `;

    lamb.style.cssText = ` background-image: linear-gradient(to top left, rgba(139, 138, 138, 0.2) 0%,#ffffffc4 25% )`;   
    moonsun.style.cssText = ` background-image: url(/header/600px/moonandsun/full-moon.png);`;
    divwrite.style.background = 'black';

    let ActiveWhite = Whitecolor();
  
    


    let penblack = document.styleSheets[0];
    
    penblack.insertRule(`
      
      .penfood1::before {
      
      background: black;
      border-left: solid white;
      }
      
      `,penblack.cssRules.length)





    Isclick = true
   }  
   //if()






   else{
 

        
      bod.style.background = 'rgba(240, 240, 192, 0.74)'
     
      //item[index].style.color = 'black'

    
      Up.src = '/main/imgs foods/600px/arrows/ArrowUp/icon-top-balck.png' 
      

      btnup.style.cssText = 
      `
     
      border: solid 2px black; 
         
      `;


      MixItems.style.background = 'rgba(126, 121, 121, 0.89)'
      item.style.color = 'black'
      lamb.style.cssText = ``  
     moonsun.style.cssText = ` background-image: url(/header/600px/moonandsun/sun.png);`
    let ActiveBlack = Blackcolor();


     
    divwrite.style.background = ' hsl(60, 58%, 86%)'
    
    let penblack = document.styleSheets[0];
    
    penblack.insertRule(`
      
      .penfood1::before {
      
      background:  hsl(60, 58%, 86%);
      border-left: solid blue;
      }
      
      `,penblack.cssRules.length)




      Isclick = false 
       
   };//eles
  

   




  




});
//night.click

});
//item,index

   }NightAndMoring()
   
   




















//nav scroll start
function scroll(){
let ItemsScroll = document.querySelectorAll('.items');
let ArrowFood = document.querySelectorAll('.name-f');
let wordfood = document.querySelectorAll('.letter1')
let title = document.querySelectorAll('.title-food')
let BackupScroll = document.querySelector('.backup')
let btnback = document.querySelector('.btn-backup')
let numbers = document.querySelectorAll('.span-rating') 
let coneight = document.querySelector('.container')









//console.log(container.scrollHeight)

let ValueForScrollY = [650, 1470, 2100, 3070, 3670  ]



ItemsScroll.forEach((namef,index)=>{
   
  

namef.addEventListener('click',()=>{
   let AddNewValue = ValueForScrollY[index]
   let WordSpan = wordfood[index]
   //let TitleIndex = title[index]
   
 
 if(index + 1){
   
   window.scrollBy(0,AddNewValue) 
   

   
 }
//if index + 1

})
//click


})


























function Show(call){


  let numbers5 = numbers.length
   //console.log(numbers.length )



   let i = 0;
  
   //let ValueForOpenHeight

     //console.log(numbers, differentTime)
      




   title.forEach((item,index)=>{  
      let ValueIndex = index
      let differentTime = [50, 100, 50, 90, 50]    
      let CutValuesTime = differentTime[index]
     //console.log(ValueIndex)
      
      
      
   
      
let start = 0;
let end = [349,20,240,144,560]
let NumberIndex = numbers[index]
let MixEnd = end[index]
//console.log(MixEnd , CutValuesTime)
      
   let info = item.getBoundingClientRect()
    
   //index = info.y

  

   
  

window.addEventListener('scroll',()=>{
 

   let SetClientScroll = coneight.scrollHeight - coneight.clientWidth
let DivideValues = SetClientScroll / 5;   
let makeValue = DivideValues * index ;
  // console.log(makeValue + 250)


  let countScrollY = coneight.scrollHeight 
  let Scrolled = window.scrollY
   
  
  //console.log(Scrolled)
 
//let MoveScrollAndOpen = ValueForOpenHeight[index]




if(Scrolled > makeValue + 250){
//let i = window.scrollY
//console.log(i)
item.style.height = 'auto'

setInterval(()=>{


   if(start < MixEnd){

      NumberIndex.innerHTML = '+'+ start++
     // console.log(ValueIndex)
   }



},ValueIndex * CutValuesTime)

}


else{

  

}

if(Scrolled >= 200){

BackupScroll.style.opacity = '1'

}

else{

   BackupScroll.style.opacity = '0'

}


})
//item and index




})
//scroll addlisner




























btnback.addEventListener('click',()=>{


   window.scrollBy(0, -100000)


})













   
   
   

}Show()
//function Show















}scroll()
//function Scroll






























//nav scroll end




















//images start  
 let image = document.querySelector('.image');
 let imgs = document.querySelectorAll('.block-img');
let foods = document.querySelectorAll('.imgs')




function repeat(){

let ChanageImg = 0;

imgs.forEach((item,index)=>{
   

setTimeout(()=>{




if(item.classList.contains('active') === true){

//console.log(imgs[ChanageImg])
ChanageImg = index + 1;
item.classList.remove('active')

}
if(ChanageImg < imgs.length){
   
  imgs[ChanageImg].classList.add('active')

}
else{
ChanageImg = 0;
imgs[ChanageImg].classList.add('active')

}



//console.log(ChanageImg)
},index * 6000)



//set
})
//item
Receive()
}repeat()
//F






function Receive(){


setTimeout(()=>{

   repeat()

},30000)


}







//header tag end































//main start
//main start


let dishes = document.querySelector('.dishes')
let write1 = document.querySelector('.write1')
let write2 = document.querySelector('.write2')
let rapid = document.querySelector('.rapid')
let paper = document.querySelector('.paper')
let pen = document.querySelector('.penfood1')
let pen2 = document.querySelector('.penfood2')
let ScrollRound = document.querySelectorAll('.list-type-food')
let foodsdiv = document.querySelectorAll('.foods')
let LocationScroll = document.querySelectorAll('.scroll')
let move = document.querySelector('.move')
let LeftRight = document.querySelectorAll('.prev-next')
let prev = document.querySelectorAll('.next1')
let next = document.querySelectorAll('.prev2')


//console.log(LocationScroll)


function changeColor(){

let MakeDifferentTime = [5000,10000,20000,50000,60000]


let colors = ['red', 'blue', 'brown', 'blueviolet', 'rgba(240, 240, 192, 0.74)'];
let text260 =  ['Taste:⭐⭐⭐', 'Service:⭐⭐⭐', 'Speed:⭐⭐⭐', 'White:⭐⭐⭐', 'Fame:⭐⭐⭐']     //['testttttttt', 'bbbbbbbbb', 'mmmmmmm', 'xxxxxxx'];

 let text1 = ['Taste: ⭐⭐⭐⭐⭐', 'Service:⭐⭐⭐⭐⭐', 'Speed:⭐⭐⭐⭐⭐', 'White:⭐⭐⭐⭐⭐', 'Fame:⭐⭐⭐⭐⭐']; 
 
 let Bigscreen = ['Why Choose Us?','Rapid-Time – Fast food at lightning speed!',  'Order, track, and eat – all in minutes.',  'One click, hot food, zero wait.',  'Smart tech. Faster meals.',]
  
 











 colors.forEach((color,index)=>{

   
   let MixTimeValue = MakeDifferentTime[index]
   //let time = 30;
   let fisttext = text1[index]

   let ChangeText = Bigscreen[index]
   let MixSmallSize = text260[index]
  // let math = Math.pow(time,3) / 5

//console.log(ChangeText)
//console.log(MixTextandIndex.length * math)
setTimeout(()=>{

rapid.style.color = color

if(window.innerWidth < 260){

pen.textContent = MixSmallSize

}
else if(window.innerWidth < 639){
//if()


pen.textContent = fisttext 

}
else{
   pen.textContent = ChangeText
}

},index   * 5000)



/*
setTimeout(()=>{

pen.textContent = MixTextandIndex

},MixTextandIndex * 3000)

*/



})
}changeColor()

setInterval(changeColor,25000)

























function ScrollLeftOrRight(number = 0){


let foods = document.querySelectorAll('.foods')
let humbar = document.querySelectorAll('.scroll')
let Element1 = document.querySelectorAll('.food1')
let Element5= document.querySelectorAll('.food5')

//console.log(12*96)

ScrollRound.forEach((item, index)=>{

   
   //2832
   //3346
   // 4254

   item.addEventListener('scroll',()=>{


   let Scrolled = item.scrollLeft;
   
   let SetScrollClient = item.scrollWidth - item.clientWidth;

   let DivideValues = SetScrollClient / 5;


 // console.log(Scrolled)
 //  console.log(DivideValues)

   
for(i = 0; i < Element1.length; i++){

   i = DivideValues
//console.log(i *5)
prev[index].style.opacity = Scrolled >= 5 ? 1 : 0 ;
 
};


for(i = 0; i < Element5.length; i++){

   i = DivideValues
 let BigValue = Math.round( i * 5 ) 
//console.log(BigValue)

next[index].style.opacity = Scrolled > BigValue - 90 ? 0 : 1;
  
};



   })
 //item scroll


})




  

ScrollRound.forEach((item, index)=>{
 

 

   foodsdiv.forEach((item2, index2)=>{
 
    let infoitem2 = item2.getBoundingClientRect()
    //console.log(  index2 /5 ===0 ? null:item2 )
    //item.scrollLeft = 30
 
      
 
     //let WidthWindow =  window.innerWidth 
     let setcount = Math.round(index2 / 5)
 //    console.log(setcount)
    let newset = item.scrollWidth
    let  setnew = item.scrollWidth - item.clientWidth
    let SetSizeScreen = Math.round( setnew / window.innerWidth )
    let test = Math.round( setnew / SetSizeScreen) 
    let makevalue = (test * setcount ) // fakevalue
            
          setcount = test
          let NewValue = newset / 5;
        
      
     
 let click = [0,1,2,3,4];
 
  
     next[index].addEventListener('click',()=>{
     
       
       
        
        if(SetSizeScreen >= 3){
 
       item.scrollBy(NewValue ,0);
       prev[index].style.opacity = '1';
 
       
        }
       //if 
 
 

     });
     //next.click
  
      
 
 
 
 
 
 
 
     prev[index].addEventListener('click',()=>{
     
    
 
      if(SetSizeScreen >= 3){
 
       item.scrollBy(-NewValue ,0);
     
       
 
      }
     //if

 
     });
     //prev.click
 
 
 
 
 
 
 });
 //foreach item,index
   });
 //foreach item2,index2






}ScrollLeftOrRight()
//function

  
 
 
// setInterval(ScrollLeftOrRight, 5000)
 
 
 
 
 
 
 
 






















 function ExtrudedMessage(){

let buy = document.querySelector('.icon-sp')
let divbuy = document.querySelectorAll('.icon-b')
let logo = document.querySelector('.logo')
let container = document.querySelector('.container')   
let infologo = logo.getBoundingClientRect()


//console.log(infologo)



 divbuy.forEach((item,index)=>{






 
     //console.log(item)
    item.addEventListener('click',(click)=>{

      let AddValueIndex = index + 1;

   
      
    

     
   item.style.position = 'relative'
   let massenge = document.createElement('img')
   massenge.src = 'main/imgs foods/600px/Delivery/delivery (2).png'   

   massenge.setAttribute('class', 'fly2')
   
   let MixElement = item.appendChild(massenge);

       
      MixElement.setAttribute('class', 'fly')

     // console.log(MixElement) 

/*

    MixElement.style.cssText = 
    `

   position: absolute ;
    height:10vh;
    width: 5vh;
    z-index:10000
    `
     */
let WindowHeight = window.innerHeight;
let WindowWidth = window.innerWidth;


   
   let start = null;
   let duration = 20000;
   let move = 200;



let ResponseValue =  WindowHeight / move;

let SetSeconds =  ResponseValue * duration;



let countstart = 0;
let valueY = 3;  
let isAnimation = true;


     function animate(timetemp){
     //console.log(ResponseValue * duration)
      
        if(!start)

         start = timetemp
         let progress = start - timetemp;
      

          let position = Math.min(Math.round(progress   / 25.5,move * duration))

          MixElement.style.transform = `translate( ${(-position)-2}vw ,${valueY * (position) - 5 }vw ) `
          
       
       // console.log(progress)
          
          if(progress < duration){

            item.style.background = 'rgb(0, 255, 0)'; 
       
          let SetCountStart = countstart++

        

             if(SetCountStart > 150 ){

               item.style.background = 'rgb(11, 148, 11)'   
            return stop

             }
           
          requestAnimationFrame(animate) 
              
         
         }          

      



         ///}
       
                          
         }//animate()
   //animate function
   requestAnimationFrame(animate)
 //  setTimeout()

    
       
     

    })
  // click listener

 });
//item,index















function ChangePrice(){

let  ScrollRound = document.querySelectorAll('.list-type-food')
let Price = document.querySelectorAll('.price')
let next = document.querySelectorAll('.next1')
let prev = document.querySelectorAll('.prev2')
let foods = document.querySelectorAll('.foods')

   console.log(foods.length)

   
   let infoClass = [

      { selector: '.scroll', prices: ['2.5$', '1$', '3.1$', '2.9$', '0.90$'] },
      { selector: '.pizza', prices: ['5$', '7.3$', '3.1$', '5.9$', '10.90$'] },
      { selector: '.chicken', prices: ['8$', '10.3$', '13.1$', '6.9$', '15.90$'] },
      { selector: '.sandiwches', prices: ['4.7$', '4.56$', '20$:long', '5.9$', '12.2$'] },
      { selector: '.sandiwches', prices: ['1$', '0.29$', '1.2$', '3$', '2.5$'] }

     ];


     let InfoClass2 = [
     
      '2.5$', '1$', '3.1$', '2.9$', '0.90$',
      '5$', '7.3$', '3.1$', '5.9$', '10.90$',
      '8$', '10.3$', '13.1$', '6.9$', '15.90$',
      '4.7$', '4.56$', '20$:long', '5.9$', '12.2$',
      '1$', '0.29$', '1.2$', '3$', '2.5$',

              ];


















     function ScrollPrice(stop){

      let WindowWidth = window.innerWidth;
 //let foods = document.querySelectorAll(infoClass.selector)

 infoClass.forEach((item,index)=>{

  let foods = document.querySelectorAll(item.selector)
   
     //foods.style.background = 'black'
     //console.log(foods.length)

     
    if(WindowWidth < 635){

    ScrollRound[index].addEventListener('scroll',()=>{

        
     let Scrolled = ScrollRound[index].scrollLeft;
     let SetScrollClient = ScrollRound[index].scrollWidth - ScrollRound[index].clientWidth;
     let divideWidth = SetScrollClient / 5;
        

     

     foods.forEach((item2, Index2)=>{
     //console.log(Index2)
      let MixValue = item.prices[Index2];
      let MakeValueforitems = divideWidth * Index2;

    

      if(Scrolled > MakeValueforitems){

         Price[index].innerHTML = MixValue
 
         
   
      }//if(Scrolled)


     });//item2, index2

       });//addlistenElement('scroll')


      }//if Window.innerWidth < 639 
      else{


         foods.forEach((itemC, indexC)=>{

            // console.log(indexC  )
    
             itemC.addEventListener('click',()=>{
    
              Price[index].innerHTML = InfoClass2[indexC]
    
             });
    
            });
             

     };//eles
   

       











      });//item,index
 

   }ScrollPrice()












   
   }ChangePrice()//ChangePrice



  
    




 }ExtrudedMessage()
// first function


































 //main end1
 //main end
 






















//Footer start
//footer start

function footer(){

let infos = document.querySelectorAll('.infos')

infos.forEach((item,index)=>{

item.addEventListener('click',()=>{






})




})



}footer()




//Footer end 
//Footer end 

















