const bgAddQuiz = document.getElementById('bgAdd')
const bgMain = document.getElementById('bgmain')
const quizContainer = document.getElementById('quizcontainer')
const btnAddQuiz = document.getElementById('addQuiz')
const btnSendQuiz = document.getElementById('sendquiz')
const nextBtn = document.getElementById('next')
const previousBtn = document.getElementById('previous')
let pageCount = document.getElementById('pagecount')
let quizText = document.getElementById('quiztext')
let answertext = document.getElementById('answertext')
let quizAdded = document.getElementById('quiz')
let answerAdd = document.getElementById('answer')
let quizNew;
let answerNew;
let count = 0
let currenPage = 0
let Arrq=[]
let Arra=[]

btnAddQuiz.addEventListener('click',function(){
    bgMain.style.display='none'
    bgAddQuiz.style.display='flex'
    quizAdded.value =''
    answerAdd.value=''
})

btnSendQuiz.addEventListener('click',function(){
    if(quizAdded.value === '' || answerAdd.value === ''){
        Swal.fire({
            icon: "error",
            title: `<h1 class="alert">โปรดกรอกค่าให้ครบ</h1>`,
          });
    }
    else{
        quizNew = quizAdded.value
        answerNew = answerAdd.value 
        bgAddQuiz.style.display='none'
        bgMain.style.display='flex'
        Arrq.push(quizNew)
        Arra.push(answerNew)
        count++
        pageCount.innerHTML=`${currenPage+1}/${count}`
        showQuiz()
    }
})

function showQuiz(){
    quizContainer.classList.remove('flipped'); // กลับหน้าการ์ด
    quizText.innerText=Arrq[currenPage]
    quizText.classList.remove('fade-in');
    void quizText.offsetWidth; // รีเซต animation
    quizText.classList.add('fade-in');
    quizContainer.classList.add('quiznowshow')
}

quizContainer.addEventListener('click',showAnswer)

function showAnswer(){
    quizContainer.classList.toggle('flipped');
    if(quizContainer.classList.contains('quiznowshow')){
        answertext.innerText=Arra[currenPage]
        quizContainer.classList.remove('quiznowshow')
    }
    else{
        quizContainer.classList.add('quiznowshow')
    }
}

nextBtn.addEventListener('click',function(){
    if(currenPage+1<count){
        currenPage++
        pageCount.innerHTML=`${currenPage+1}/${count}`
        showQuiz();
    }
})

previousBtn.addEventListener('click',function(){
    if(currenPage>0){
        currenPage--
        pageCount.innerHTML=`${currenPage+1}/${count}`
        showQuiz();
    }
})


