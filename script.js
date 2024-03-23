console.log("i am working")
let x
let btn1 = document.querySelector(".but1")
let btn2 = document.querySelector(".but2")
let btn3 = document.querySelector(".but3")
function randGenerator(x){
    return Math.floor(Math.random() * (x.length - 1))

}
const memeList = ["1.jpeg", "2.jpeg", "3.jpeg", "4.jpeg", "5.jpeg"];
const jokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "I told my wife she was drawing her eyebrows too high. She looked surprised.",
    "Parallel lines have so much in common. It's a shame they'll never meet.",
    "Why don't skeletons fight each other? They don't have the guts.",
    "I'm reading a book on anti-gravity. It's impossible to put down!",
    "What do you call fake spaghetti? An impasta!",
    "I'm on a whiskey diet. I've lost three days already!",
    "Why don't oysters donate to charity? Because they're shellfish!",
    "What did one hat say to the other? You stay here, I'll go on ahead!",
    "Why did the tomato turn red? Because it saw the salad dressing!"
];
const riddles = [
    {
        question: "What has keys but can't open locks?",
        answer: "A piano"
    },
    {
        question: "What has a head and a tail but no body?",
        answer: "A coin"
    },
    {
        question: "The more you take, the more you leave behind. What am I?",
        answer: "Footsteps"
    },
    {
        question: "What comes once in a minute, twice in a moment, but never in a thousand years?",
        answer: "The letter 'M'"
    },
    {
        question: "What has a neck but no head?",
        answer: "A bottle"
    },
    {
        question: "What has hands but cannot clap?",
        answer: "A clock"
    },
    {
        question: "I speak without a mouth and hear without ears. I have no body, but I come alive with the wind. What am I?",
        answer: "An echo"
    },
    {
        question: "What has to be broken before you can use it?",
        answer: "An egg"
    },
    {
        question: "What runs around the whole yard without moving?",
        answer: "A fence"
    },
    {
        question: "What can you catch but not throw?",
        answer: "A cold"
    }
];
function clearAll(){
    const meme = document.querySelector('.meme')
    const joke = document.querySelector('.joke')
    const riddle = document.querySelector('.riddle')
    meme.innerHTML='';
    joke.innerHTML='';
    riddle.innerHTML='';

}
function meme() {
    let memeElement = document.createElement('img')
    const randMeme = randGenerator(memeList)
    memeElement.src = memeList[randMeme];
    memeElement.style.height = "400px";
    let div = document.querySelector(".meme")
    clearAll()

    div.appendChild(memeElement)
}
function joke(){
    const jokeElement = document.createElement('p')
    const randJoke = randGenerator(jokes)
    clearAll()
    jokeElement.innerText=jokes[randJoke];
    const p =document.querySelector('.joke')
    p.appendChild(jokeElement)
}
function riddle(){
    const question = document.createElement('p')
    const answer = document.createElement('p')
    question.setAttribute('class','question')
    answer.setAttribute('class','answer')
    const randRiddle = randGenerator(riddles)
    clearAll()
    question.innerText=riddles[randRiddle].question
    answer.innerText='the answer is :' + riddles[randRiddle].answer
    const target = document.querySelector('.riddle')
    target.appendChild(question)
    target.appendChild(answer).hidden=true
}
function riddleAnswer(){

    const check =document.querySelector(".question")
    if(check){
        const ranswer = document.querySelector(".answer")
        ranswer.hidden=false

    }
    else{
        alert("no riddle selected")
    }
}
