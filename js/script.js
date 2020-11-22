
// Questions Level
const   question1 = [
    {
        q: "ვინ იყო საქართველოს მეოთხე პრეზიდენტი ",
        options: ['ზვიად გამსახურდია','სალომე ზურაბიშვილი','მიხეილ სააკაშვილი','გიორგი მარგველაშვილი'],
        correct: 3
    },
    {
        q: "რომელი კერძი ენატრება რუბენ ხაჩიკიანს ფილმში 'მიმინო'?",
        options: ['სუში','აკროშკა','ტოლმა','ბურიტო'],
        correct: 2
    }
]

const   question2 = [
    {
        q: "'იალბუზე ფეხი შედგა, დიდმა მთებმა იწყეს დრეკა' - ეს უცნაური საქციელი ჩაიდინა:",
        options: ['რიჩარდ ლომგულმა','ივანე მრისხანემ','ვახტანგ გორგასალმა','პიპინ მოკლემ'],
        correct: 2
    }
]

const   question3 = [
    {
        q: "აგორებულ ქვას ... არ მოეკიდებაო",
        options: ['ხავსი','ვალი','ობი','ცეცხლი'],
        correct: 0
    }
]
const   question4 = [
    {
        q: "ქართული ზღაპრის თანახმად, მუჭანახევარას უნდა მოეტანა...",
        options: ['მიწა','მარილი','შაქარი','ოქრო'],
        correct: 1
    }
]

const   question5 = [
    {
        q: "უფრო მომთმენი და სტაბილური გამწევი, ვიდრ ცხენი და ნაკლებ ჯიუტი და მეტი ინტელექტის მქონე, ვიდრე ვირი:",
        options: ['ხარი','კამეჩი','ბიზონი','ჯორი'],
        correct: 3
    }
]

const   question6 = [
    {
        q: "რამდენჯერ მეტია ძირითად ერთეულზე 'მეგა'?",
        options: ['ასჯერ','ათასჯერ','მილიონჯერ','ასიათასჯერ'],
        correct: 2
    }
]

const   question7 = [
    {
        q: "რომელია მსოფლიოს ყველაზე მსხვილი პორტი ტვირთბრუნვის მიხედვით ?",
        options: ['სინგაპური','როტერდამი','ჰამბურგი','შანხაი'],
        correct: 3
    }
]

const   question8 = [
    {
        q: "ძველი აღქმის თანახმად, პირველ, დოკუმენტირებულ კონფლიქტში გაწყდა კაცობრიობის:",
        options: ['მეათასედი','მეოთხედი','ნახევარი','მემილიონედი'],
        correct: 1
    }
]

const   question9 = [
    {
        q: "მარტივ რიცხვა ცხრილის შედგენის უძველეს მარტივ ხერხს უწოდებენ:",
        options: ['ერატოსთენეს საცერს','ფიბონაჩის რიცხვებს','ნიუტონის აკვანს','პასკალის სამკუთხედს'],
        correct: 0
    }
]

const   question10 = [
    {
        q: "რომელი ქვეყნის ძველქართული სახელია აბაშეთი ?",
        options: ['სირიის','ეგვიპტის','ეთიოპიის','ინდოეთის'],
        correct: 2
    }
]


const   question11 = [
    {
        q: "მეორე მსოფლიო ომის აფრიკული კამპანიის გენერალ ერინ რომლის დამსახურებით ხშირად მოიხსენიება, როგორც 'ომი...'",
        options: ['უსისხლოდ','აჩრდილებთან','სიძულვილის გარეშე','უგულო სისასტიკე'],
        correct: 2
    }
]

const   question12 = [
    {
        q: "ვესტინდოეთის მეკობრეებში სახელგანთქმული 'შავწვერა' გახლდა:",
        options: ['ჰენრი მორგანი','სამუელ ბელამი','ჯონ რექჰემი','ედუარდ თიჩი'],
        correct: 3
    }
]

const   question13 = [
    {
        q: "არმაზის ბილინგვა = 'მე ვარ სერაფიტი, ასული ზევახ მცირისა, ფარსმან მეფის პიტიახშისა, მეუღლე...'",
        options: ['ქსეფარნუგისა','აგრიპასი','იოდმანგანისა','ფარნაჯომისა'],
        correct: 2
    }
]


const   question14 = [
    {
        q: "ოპიორფინი არის მორფინზე რამდენჯერმე ძლიერმოქმედი ნივთიერება, რომელიც პირველად გამოყვეს ადამიანის:",
        options: ['ნერწყვიდან','ცრემლიდან','ლიმფიდან','ლიქვორიდან'],
        correct: 0
    }
]

const   question15 = [
    {
        q: "რა იყო მდინარე ყვირალას ძველბერძნული სახელწოდება ?",
        options: ['ჰიპოსი','რეზოსი','ისტოსი','გლავკოსი'],
        correct: 3
    }
]




    const checkAnsSound = new Audio('../sound/checkSound.mp3');
    const waiting = new Audio('../sound/waitSound.mp3');
    const intro = new Audio('../sound/intro.m4a');
    const helpSound = new Audio('../sound/helpSound.mp3');
    const coverSound = new Audio('../sound/coverSound.mp3');
    const afterAnswer = new Audio('../sound/afterAnswer.mp3');


const questionText = document.querySelector('.question-text');
const questionAnswers = document.querySelector('.question-answers');


let availableQuestions  = [];
let currentQuestion;
let currentOption;
let levelCounter = 1;
let animationDelay = 0;


// GetNewQuestion
function newQuestion(){

    switch(levelCounter) {
        case 1:
         
          for(let i = 0; i < question1.length; i++){
            availableQuestions.push(question1[i]);
          }

          currentQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions .length)];
          questionText.innerHTML = currentQuestion.q;

          questionAnswers.innerHTML = '';
          animationDelay = 0.2;

          for(let i = 0; i < currentQuestion.options.length; i++){
            const div = document.createElement('div');
            div.id = i;
            div.className  = "answer";
            div.innerHTML = currentQuestion.options[i];
            div.setAttribute('onclick','checkAnswer(this)');
            questionAnswers.appendChild(div);
          }
          break;

        case 2:
           
            for(let i = 0; i < question2.length; i++){
                availableQuestions.push(question2[i]);
              }
    
              currentQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions .length)];
              questionText.innerHTML = currentQuestion.q;

              questionAnswers.innerHTML = '';

             
              for(let i = 0; i < currentQuestion.options.length; i++){
                const div = document.createElement('div');
                div.id = i;
                div.className  = "answer";
                div.innerHTML = currentQuestion.options[i];
                div.setAttribute('onclick','checkAnswer(this)');
                questionAnswers.appendChild(div);

              }
              
          break;
        case 3:
           
            for(let i = 0; i < question3.length; i++){
                availableQuestions.push(question3[i]);
              }
    
              currentQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions .length)];
              questionText.innerHTML = currentQuestion.q;

              questionAnswers.innerHTML = '';
             
              for(let i = 0; i < currentQuestion.options.length; i++){
                const div = document.createElement('div');
                div.id = i;
                div.className  = "answer";
                div.innerHTML = currentQuestion.options[i];
                div.setAttribute('onclick','checkAnswer(this)');
                questionAnswers.appendChild(div);
              }
          break;
        case 4:
           
            for(let i = 0; i < question4.length; i++){
                availableQuestions.push(question4[i]);
              }
    
              currentQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions .length)];
              questionText.innerHTML = currentQuestion.q;

              questionAnswers.innerHTML = '';

              for(let i = 0; i < currentQuestion.options.length; i++){
                const div = document.createElement('div');
                div.id = i;
                div.className  = "answer";
                div.innerHTML = currentQuestion.options[i];
                div.setAttribute('onclick','checkAnswer(this)');
                questionAnswers.appendChild(div);
              }
          break;
        case 5:
         
            for(let i = 0; i < question5.length; i++){
                availableQuestions.push(question5[i]);
              }
    
              currentQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions .length)];
              questionText.innerHTML = currentQuestion.q;

              questionAnswers.innerHTML = '';
             
              for(let i = 0; i < currentQuestion.options.length; i++){
                const div = document.createElement('div');
                div.id = i;
                div.className  = "answer";
                div.innerHTML = currentQuestion.options[i];
                div.setAttribute('onclick','checkAnswer(this)');
                questionAnswers.appendChild(div);

              }
          break;
        case 6:
           
            for(let i = 0; i < question6.length; i++){
                availableQuestions.push(question6[i]);
              }
    
              currentQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions .length)];
              questionText.innerHTML = currentQuestion.q;

              questionAnswers.innerHTML = '';
    
             
              for(let i = 0; i < currentQuestion.options.length; i++){
                const div = document.createElement('div');
                div.id = i;
                div.className  = "answer";
                div.innerHTML = currentQuestion.options[i];
                div.setAttribute('onclick','checkAnswer(this)');
                questionAnswers.appendChild(div);

              }
          break;
        case 7:
          
            for(let i = 0; i < question7.length; i++){
                availableQuestions.push(question7[i]);
              }
    
              currentQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions .length)];
              questionText.innerHTML = currentQuestion.q;

              questionAnswers.innerHTML = '';
             
              for(let i = 0; i < currentQuestion.options.length; i++){
                const div = document.createElement('div');
                div.id = i;
                div.className  = "answer";
                div.innerHTML = currentQuestion.options[i];
                div.setAttribute('onclick','checkAnswer(this)');
                questionAnswers.appendChild(div);

              }
         break;
         case 8:
          
            for(let i = 0; i < question8.length; i++){
                availableQuestions.push(question8[i]);
              }
    
              currentQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions .length)];
              questionText.innerHTML = currentQuestion.q;

              questionAnswers.innerHTML = '';
             
              for(let i = 0; i < currentQuestion.options.length; i++){
                const div = document.createElement('div');
                div.id = i;
                div.className  = "answer";
                div.innerHTML = currentQuestion.options[i];
                div.setAttribute('onclick','checkAnswer(this)');
                questionAnswers.appendChild(div);

              }
         break;
         case 9:
          
            for(let i = 0; i < question9.length; i++){
                availableQuestions.push(question9[i]);
              }
    
              currentQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions .length)];
              questionText.innerHTML = currentQuestion.q;

              questionAnswers.innerHTML = '';

             
              for(let i = 0; i < currentQuestion.options.length; i++){
                const div = document.createElement('div');
                div.id = i;
                div.className  = "answer";
                div.innerHTML = currentQuestion.options[i];
                div.setAttribute('onclick','checkAnswer(this)');
                questionAnswers.appendChild(div);

              }
         break;
         case 10:
           
            for(let i = 0; i < question10.length; i++){
                availableQuestions.push(question10[i]);
              }
    
              currentQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions .length)];
              questionText.innerHTML = currentQuestion.q;

              questionAnswers.innerHTML = '';
             
              for(let i = 0; i < currentQuestion.options.length; i++){
                const div = document.createElement('div');
                div.id = i;
                div.className  = "answer";
                div.innerHTML = currentQuestion.options[i];
                div.setAttribute('onclick','checkAnswer(this)');
                questionAnswers.appendChild(div);

              }
         break;
         case 11:
            
            for(let i = 0; i < question11.length; i++){
                availableQuestions.push(question11[i]);
              }
    
              currentQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions .length)];
              questionText.innerHTML = currentQuestion.q;

              questionAnswers.innerHTML = '';
             
              for(let i = 0; i < currentQuestion.options.length; i++){
                const div = document.createElement('div');
                div.id = i;
                div.className  = "answer";
                div.innerHTML = currentQuestion.options[i];
                div.setAttribute('onclick','checkAnswer(this)');
                questionAnswers.appendChild(div);

              }
         break;
         case 12:
           
            for(let i = 0; i < question12.length; i++){
                availableQuestions.push(question12[i]);
              }
    
              currentQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions .length)];
              questionText.innerHTML = currentQuestion.q;

              questionAnswers.innerHTML = '';
             
              for(let i = 0; i < currentQuestion.options.length; i++){
                const div = document.createElement('div');
                div.id = i;
                div.className  = "answer";
                div.innerHTML = currentQuestion.options[i];

                div.setAttribute('onclick','checkAnswer(this)');
                questionAnswers.appendChild(div);

              }
         break;
         case 13:
     
            for(let i = 0; i < question13.length; i++){
                availableQuestions.push(question13[i]);
              }
    
              currentQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions .length)];
              questionText.innerHTML = currentQuestion.q;

              questionAnswers.innerHTML = '';
             
              for(let i = 0; i < currentQuestion.options.length; i++){
                const div = document.createElement('div');
                div.id = i;
                div.className  = "answer";
                div.innerHTML = currentQuestion.options[i];
                div.setAttribute('onclick','checkAnswer(this)');
                questionAnswers.appendChild(div);
              }
         break;
         case 14:
    
            for(let i = 0; i < question14.length; i++){
                availableQuestions.push(question14[i]);
              }
    
              currentQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions .length)];
              questionText.innerHTML = currentQuestion.q;

              questionAnswers.innerHTML = '';
             
              for(let i = 0; i < currentQuestion.options.length; i++){
                const div = document.createElement('div');
                div.id = i;
                div.className  = "answer";
                div.innerHTML = currentQuestion.options[i];
                div.setAttribute('onclick','checkAnswer(this)');
                questionAnswers.appendChild(div);
              }
         break;
         case 15:

            for(let i = 0; i < question15.length; i++){
                availableQuestions.push(question15[i]);
              }
    
              currentQuestion = availableQuestions[Math.floor(Math.random() * availableQuestions .length)];
              questionText.innerHTML = currentQuestion.q;

              questionAnswers.innerHTML = '';
             
              for(let i = 0; i < currentQuestion.options.length; i++){
                const div = document.createElement('div');
                div.id = i;
                div.className  = "answer";
                div.innerHTML = currentQuestion.options[i];
                div.setAttribute('onclick','checkAnswer(this)');
                questionAnswers.appendChild(div);
              }
         break;
      }
}

let stepCounter = 14;
const achievementContainer = document.querySelector('.achievement-inner');
const achievementList = document.querySelectorAll('.achievement-inner .step');

// პასუხის შემოწმება
function checkAnswer(e){
    let id = e.id
    e.classList.add('wait-answer');
    checkAnsSound.play()
    setTimeout(()=> {
        waiting.play();
    },1000)
    setTimeout(()=>{
        if(id == currentQuestion.correct){
            afterAnswer.play();
            e.classList.add('correct-answer');
            stepCounter--;
            stepLevel();
        } else {
            e.classList.add('wrong-answer')
             setTimeout(()=> {
                gameOver();
             },1000)
            const answerShow = questionAnswers.children.length;
            for(let i = 0; i < answerShow; i++){
                if(parseInt(questionAnswers.children[i].id) == currentQuestion.correct){
                    questionAnswers.children[i].classList.add('correct-answer');
                }
            }
        }
    },3000)

    if(levelCounter < 16){
        levelCounter++;
        setTimeout(()=>{
            availableQuestions = [];
            newQuestion()
        },4000)
    } else {
        gameOver();
    }
    if(levelCounter === 16 && id == currentQuestion.correct){
        setTimeout(()=> {
            clearInterval(claerTime);
            gameWon();
         },5000)
    }


    blockOtherAnswer(e);
}

// ღილაკების დაბლოკვა
function blockOtherAnswer(e){
    e.style.opacity = "1";
    for(let i = 0; i < answersContainerChildren.length; i++){
            answersContainerChildren[i].classList.add('block-answers-none')
    }
}

let winMoney = 0;

// ეტაპების თვლა
function stepLevel(){
    setTimeout(()=>{
        achievementContainer.querySelector('.active').classList.remove('active');
        for(let i = 0; i < achievementList.length; i++){
            achievementList[stepCounter].classList.add('active');
         }
         if(stepCounter === 8){
            afterAnswer.play();
            Swal.fire('თქვენი გარანტირებული თანხდა შეადგენს 200 ლარს')
            winMoney = '200';
            document.getElementById('overMoney').innerHTML = winMoney;
            achievementList[9].classList.add('active-won');
         }
         if(stepCounter === 3){
            afterAnswer.play();
            Swal.fire('თქვენი გარანტირებული თანხდა შეადგენს 3 000 ლარს')
            winMoney = '3 000';
            document.getElementById('overMoney').innerHTML = winMoney;
            achievementList[4].classList.add('active-won');
         }
    },1000)
   
}


// წაგების ფანჯარა
function gameOver(){
    document.getElementById('mainCont').classList.add('game-over-hide');
    document.getElementById('gameOutSection').classList.remove('game-section-hide');
}

// მოგების ფანჯარა Win
function gameWon(){
    document.getElementById('mainCont').classList.add('game-over-hide');
    document.getElementById('gameWon').classList.remove('game-section-hide');
}




// Help Buttons
const computerLogic  = document.getElementById('computerLogic');
const usersHelp  = document.getElementById('usersHelp');



// // 1/3 Help

// const answersContainer = document.querySelector('.question-answers');
// const answersContainerChildren = answersContainer.children;
// let helpVariants = [];
// let gen = [];

// computerLogic.addEventListener('click',()=> {
    
//     computerLogic.classList.add('disable-button')

//     for( let i = 0; i < answersContainerChildren.length; i++){
//         helpVariants.push(answersContainerChildren[i])
//         if(parseInt(answersContainerChildren[i].id) === currentQuestion.correct) {
//               let index = helpVariants.indexOf(answersContainerChildren[i]);
//               helpVariants.splice(index,1);
       
//         }
//     }
//     setTimeout(()=> {
//         for( let i = 0; i < helpVariants.length; i++){
       
//             let index = helpVariants[Math.floor(Math.random() * helpVariants.length)];
//             index.classList.add('block-answers');    
//         }
//     },2000)

// });

// HELP 50 / 50
  
const answersContainer = document.querySelector('.question-answers');
const answersContainerChildren = answersContainer.children;
let avalaibleAnswers = [];

computerLogic.addEventListener('click',()=> {

        computerLogic.classList.add('disable-button');
        helpSound.play();
        for(let k = 0; k < answersContainerChildren.length; k++){
            answersContainerChildren[k].classList.add('anim-choose');
            setTimeout(()=>{
                answersContainerChildren[k].classList.remove('anim-choose')
            },1000)
        }
    
    
    let answersLen = currentQuestion.options.length;

    for(let i = 0; i < answersLen; i++){
        avalaibleAnswers.push(i);
    }

    for(let i = 0; i < avalaibleAnswers.length; i++){
        if( avalaibleAnswers[i] === currentQuestion.correct){
            
           let ansIndex = avalaibleAnswers.indexOf(avalaibleAnswers[i]);
           avalaibleAnswers.splice(ansIndex,1);
            
        } 
        
    }

    let gen = [];

   for( let i = 0; i < 2; i++){

    let random_index;

    while(!random_index){
        let tmp = Math.floor(Math.random() * avalaibleAnswers.length);
        if( !gen.filter((g) => avalaibleAnswers[tmp] == g).length)
        random_index = tmp;
    }
    gen.push(avalaibleAnswers[random_index]);
}

for( let i = 0; i < gen.length; i++){
     let curIndex = gen[i];
     setTimeout(()=>{
        answersContainerChildren[curIndex].classList.add('block-answers');  
     },2000)
}

    
})




// usersHelp
const  rangeCont = document.querySelectorAll('.range-bar .bar');
const  parcentText = document.querySelectorAll('.range-bar span');
const usersPanel = document.getElementById('usersPanel');
const  usersClose = document.querySelector('.users-close')


usersHelp.addEventListener('click', ()=> {

    usersHelp.classList.add("disable-button-help");
    usersPanel.classList.toggle("users-hide");

    let percent1 = Math.floor(Math.random() * 25) + 1;
    let percent2 = Math.floor(Math.random() * 25) + 1;
    let percent3 = Math.floor(Math.random() * 25) + 1;
    let percent4 = Math.floor(Math.random() * 25) + 1;

    for(let i = 0; i <  rangeCont.length; i++){
        rangeCont[i].style.maxWidth  = "300px";
    }



    let clearApp = setInterval(() => {
         
        let allPercent = percent1 + percent2 +  percent3 +  percent4;
        if(allPercent < 100){

                percent1++;
                percent2++;
                percent3++;
                percent4++;
 
                // let maxPercent = Math.max(percent1, percent2, percent3, percent1);


                document.getElementById('range01').innerHTML = percent1 + " %"; 
                document.getElementById('range02').innerHTML = percent2 + " %"; 
                document.getElementById('range03').innerHTML = percent3 + " %"; 
                document.getElementById('range04').innerHTML = percent4 + " %"; 
                               

                rangeCont[0].style.width = ( percent1 * 5 ) + "px";
                rangeCont[1].style.width = ( percent2 * 5 ) + "px";
                rangeCont[2].style.width = ( percent3 * 5 ) + "px";
                rangeCont[3].style.width = ( percent4 * 5 ) + "px";
               
        }  else{

               clearInterval(clearApp);
        } 

    }, 200);
         
})


usersClose.addEventListener('click', ()=>{
    for(let i = 0; i < rangeCont.length; i++){
        rangeCont[i].style.width = 0 + 'px';
    }
    usersPanel.classList.toggle("users-hide");
})



const loginBox = document.querySelector('#login')
const avatarBox = document.querySelector('#avatar')
const registrationPanel = document.querySelector('#registration');

const guestAvatar = document.getElementById('guestAvatar');
const guestName = document.getElementById('guestName');
const guestLastName = document.getElementById('guestLastName');

const guestNameVal = document.getElementById('guestNameVal');
const guestLastNameVal = document.getElementById('guestLastNameVal');

const avatarsBox = document.querySelector('.avatars');
const avatars = avatarsBox.children;


let saveGuestAvatar;

// ავატარის არჩევა
function  changeAvatar() {
    for(let i = 0; i < avatars.length; i++){
        avatars[i].addEventListener('click', (e)=>{
            
            for(let k = 0; k < avatars.length; k++){
                avatars[k].classList.remove('choose-avatar');
            }
            avatars[i].classList.add('choose-avatar');
            saveGuestAvatar = e.target;
        })
    }
}


// რეგისტრაციის შემდეგი ეტაპი
function nextReg(){
    const saveGuestName = guestNameVal.value;
    const saveGuestLastName = guestLastNameVal.value;
    document.getElementById('hereGuestName').innerHTML = saveGuestName;
    if(saveGuestName.length < 1 || saveGuestLastName.length < 1 ){
        // guestNameVal.style.border = "1px solid red";
        // guestLastNameVal.style.border = "1px solid red";
        Swal.fire({
            title: "ველები სავარდებულოა!",
            confirmButtonText: "გასაგებია",
          });
          

    } else {
        loginBox.style.transform = "translateX(-300px)";
        avatarBox.style.transform = "translateX(-300px)";

        guestName.innerHTML = saveGuestName;
        guestLastName.innerHTML = saveGuestLastName;
        changeAvatar();
    }
    coverSound.play();

}


// თამაშის დაწყება
function startGame(){
    if(saveGuestAvatar === undefined) {
        Swal.fire('გთხოვთ, აირჩიეთ ავატარი')

    }  else {
        document.getElementById('mainCont').classList.remove('hide-cont');   
        registrationPanel.classList.add('reg-hidden')
        guestAvatar.append(saveGuestAvatar);
        document.getElementById('rules').classList.add("rules-hide");
        // intro.play();
    }
}

// შემდეგი სასწავლო წესი
function nextRule(){
    document.getElementById('rules').classList.remove("rules-hide");
    document.getElementById('rulesStep').classList.add("rulesStep-hide");
}

let claerTime;

// სისტემაში შესვლა
function startGameFun(){
    document.getElementById('rulesStep').classList.remove("rulesStep-hide");
     newQuestion();
      claerTime = setInterval(()=> {
        timerCountDown();
    },1000)    
    achievementList[stepCounter].classList.add('active');
    coverSound.pause();
}


function reloadGame(){
    window.location.reload();
}


// timer
const timeText = document.getElementById('timerText');

const startTime = 15;
let timerCounter = startTime * 60;

function timerCountDown(){
    timerCounter--;
    let minutes = Math.floor(timerCounter / 60)
    let second = timerCounter % 60;
    timeText.innerHTML = `${minutes} : ${second} `
    
    if(second < 10){
        timeText.innerHTML = `${minutes} : 0${second} `
    }
    if(minutes < 10){
        timeText.innerHTML = `0${minutes} : ${second} `
    }


    if(minutes === 0 && second < 10){
        timeText.innerHTML = `0${minutes} : 0${second} `
        timeText.classList.add('time-anim');
    }

    if(minutes === 0 && second === 0){
        clearInterval(claerTime);
        setTimeout(()=>{
            gameOver();
        },1000)

    }
}



// ClientWidth
document.getElementById('clientWid').innerHTML = "WIDTH " + screen.width + " PX"; 
document.getElementById('clientHei').innerHTML = " HEIGHT " + screen.height + " PX"; 