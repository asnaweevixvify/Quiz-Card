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
    quizText.style.display='flex'
    quizText.innerText=Arrq[currenPage]
    answertext.style.display='none'
    quizContainer.classList.add('quiznowshow')
}

quizContainer.addEventListener('click',showAnswer)

function showAnswer(){
    if(quizContainer.classList.contains('quiznowshow')){
        quizText.style.display='none'
        answertext.innerText=Arra[currenPage]
        answertext.style.display='flex'
        quizContainer.classList.remove('quiznowshow')
    }
    else{
        answertext.style.display='none'
        quizText.style.display='flex'
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


