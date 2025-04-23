const bgAddQuiz = document.getElementById('bgAdd')
const bgMain = document.getElementById('bgmain')
const quizContainer = document.getElementById('quizcontainer')
const btnAddQuiz = document.getElementById('addQuiz')
const btnSendQuiz = document.getElementById('sendquiz')
const nextBtn = document.getElementById('next')
const previousBtn = document.getElementById('previous')
const delBtn = document.getElementById('delete')
let pageCount = document.getElementById('pagecount')
let quizText = document.getElementById('quiztext')
let answertext = document.getElementById('answertext')
let quizAdded = document.getElementById('quiz')
let answerAdd = document.getElementById('answer')
let quizNew;
let answerNew;
let count = 0
let currenPage = 1
let index = 0
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
        pageCount.innerHTML=`${currenPage}/${count}`
        showQuiz()
    }
})

function showQuiz(){
    quizContainer.style.display='flex'
    quizContainer.classList.remove('flipped'); 
    quizText.innerText=Arrq[index]
    quizText.classList.remove('fade-in');
    void quizText.offsetWidth; 
    quizText.classList.add('fade-in');
    quizContainer.classList.add('quiznowshow')
}

quizContainer.addEventListener('click',showAnswer)

function showAnswer(){
    quizContainer.classList.toggle('flipped');
    if(quizContainer.classList.contains('quiznowshow')){
        answertext.innerText=Arra[index]
        quizContainer.classList.remove('quiznowshow')
    }
    else{
        quizContainer.classList.add('quiznowshow')
    }
}

nextBtn.addEventListener('click',function(){
    if(currenPage<count){
        currenPage++
        index++
        pageCount.innerHTML=`${currenPage}/${count}`
        showQuiz();
    }
})

previousBtn.addEventListener('click',function(){
    if(currenPage>1){
        currenPage--
        index--
        pageCount.innerHTML=`${currenPage}/${count}`
        showQuiz();
    }
})

delBtn.addEventListener('click',function(){
    Arrq.splice(index,1)
    Arra.splice(index,1)
    count--
    if(index === 0){
        if(count>0){
            quizText.innerText=Arrq[index]
            answertext.innerText=Arra[index]
            pageCount.innerHTML=`${currenPage}/${count}`
        }
        else{
            quizContainer.style.display='none'
            quizText.innerText=''
            answertext.innerText=''
        }
    }
    else{
        index--
        quizText.innerText=Arrq[index]
        answertext.innerText=Arra[index]
        currenPage--
        pageCount.innerHTML=`${currenPage}/${count}`
    }
    
})
console.log(index);
