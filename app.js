const paragraphs=[
    "Honesty is the practice of speaking and acting truthfully and with integrity, and it is essential to building trust and respect in our relationships. Whether it's being honest with ourselves and others about our thoughts and feelings, admitting our mistakes and shortcomings, or communicating clearly and transparently, honesty can create a sense of authenticity and connection in our interactions with others.  ",
    "Humility is the practice of recognizing our limitations and imperfections, and it is essential to personal growth and development. Whether it's acknowledging our mistakes and shortcomings, seeking feedback from others, or approaching new situations with a sense of openness and curiosity, humility can help us learn and grow in meaningful ways.  ",
    "One of the most important uses of technology in nature is the development of conservation tools. From wildlife tracking devices to habitat restoration techniques, we are constantly finding new ways to protect endangered species and their ecosystems. With the help of technology, we can make a real difference in the fight against extinction.  ",
    "Adaptability is the ability to adjust and thrive in changing circumstances, and it is essential to navigating the complexities of life. Whether it's adapting to new technologies, social norms, or personal challenges, adaptability allows us to stay resilient and flexible in the face of change.  ",
    "Optimism is the belief that good things can happen, even in the face of challenges and adversity, and it is essential to maintaining a positive outlook and sense of hope. Whether it's focusing on the positive aspects of a situation, reframing challenges as opportunities, or seeking out support and encouragement, optimism can help us stay resilient and hopeful in difficult times.  ",
    "One of the most exciting aspects of technology and nature is the ability to explore the unexplored. From deep sea drones that can capture footage of marine life to space probes that can explore distant planets, technology is allowing us to discover new things about the world around us. With these advancements, we are constantly pushing the boundaries of what we thought was possible.",
    "The use of drone technology in wildlife conservation is another innovative application of technology in nature. Drones can be used to monitor wildlife populations and habitats, helping to inform conservation strategies and actions. The smell of freshly cut grass wafted through the air, making everyone feel more alive and energized.",
    "The use of genetic engineering in nature conservation is another exciting development. Genetic engineering can be used to modify the genes of organisms to improve their chances of survival or to remove invasive species. This technology has the potential to revolutionize the way we manage ecosystems and protect biodiversity.",
    "Another important application of technology in nature is through the use of machine learning. With machine learning, we can analyze vast amounts of data to identify patterns and make predictions about the behavior of complex environmental systems. This technology has the potential to revolutionize the way we manage natural resources and respond to environmental threats.",
    "With the increasing popularity of podcasts, there's a growing demand for quality audio equipment. From noise-cancelling headphones to high-end microphones, people are investing in their listening experiences.The use of smart grids is another exciting development in technology and nature. Smart grids use data and analytics to optimize energy distribution and consumption, reducing waste and promoting more efficient use of resources.",
    "Another exciting development in technology and nature is the use of robots. With the help of robots, we can explore areas that are too dangerous or inaccessible for humans. Robots can also be used to clean up pollution and monitor the health of the natural world. With these advancements, we are able to do more than ever before to protect the planet.",
    "Humility is the practice of recognizing and accepting our limitations and imperfections, and it is essential to developing compassion and understanding towards ourselves and others. Whether it's admitting our mistakes and seeking out opportunities for growth and improvement, acknowledging the contributions of others and expressing gratitude, or simply taking a step back and listening to the perspectives of those around us.",
    "The popularity of online courses has exploded in recent years, with people seeking out opportunities to learn new skills and advance their careers. It's a convenient and affordable way to access education from anywhere in the worldThe sound of laughter filled the room as friends gathered around the table to share stories and make memories.",
    "The development of green chemistry is another important application of technology in nature. Green chemistry focuses on designing chemical processes that are safe, efficient, and environmentally friendly. By using green chemistry, we can reduce the environmental impact of chemical production and waste. The sound of a dog barking in the distance added to the ambiance of the neighborhood.",
    "The use of precision agriculture technologies is another important application of technology in nature. Precision agriculture uses data and analytics to optimize farming practices, reducing waste and promoting more sustainable use of resources.The development of sustainable seafood certification systems is another important application of technology and nature. These systems use data and analytics to certify sustainable fishing practices.",
];

const typingText=document.querySelector(".textContainer .text"),
inpField=document.querySelector(".input"),
timeTag=document.querySelector(".timer-sec"),
mistakeTag = document.querySelector(".mistakes"),
wpmTag = document.querySelector(".wpm"),
cpmTag = document.querySelector(".cpm");

let timer,
maxTime=60,
timeLeft=maxTime,
charIndex = mistakes = isTyping = 0;

function randomParagraph(){
    const randnIndex=Math.floor(Math.random()*paragraphs.length);
    paragraphs[randnIndex].split("").forEach(span =>{
         let spanTag = `<span>${span}</span>`;
         typingText.innerHTML += spanTag;
    });
    // document.addEventListener("keydown",()=>inpField.focus());
    typingText.addEventListener("click",()=>inpField.focus());
}

function initTyping(){
    const characters = typingText.querySelectorAll("span");
    let typedChar=inpField.value.split("")[charIndex];
    if(charIndex < (characters.length - 1) && timeLeft > 0){
        if(!isTyping){
            timer = setInterval(initTimer,1000);
            isTyping = true;
        }
      
        if(typedChar == null){
            charIndex--;
           if(  characters[charIndex].classList.contains("incorrect")){
            mistakes--;
           }
            characters[charIndex].classList.remove("correct","incorrect");
        }else{
        if(characters[charIndex].innerText === typedChar){
            characters[charIndex].classList.add("correct");
        }else{
            mistakes++;
            characters[charIndex].classList.add("incorrect");
        }
        charIndex++;
        }
        characters.forEach(span => span.classList.remove("active"));
        characters[charIndex].classList.add("active");
    
        let wpm = Math.round((((charIndex - mistakes)/5) / (maxTime - timeLeft)) * 60);
        wpm = 0 || !wpm || wpm === Infinity ? 0 : wpm;
        wpmTag.innerText = wpm;
        mistakeTag.innerText = mistakes;
        cpmTag.innerText = charIndex - mistakes;
    } else {
        inpField.value = "";
        clearInterval(timer);
    }
}

function initTimer(){
    if(timeLeft > 0){
        timeLeft--;
        timeTag.innerText = timeLeft;
    }else{
        clearInterval(timer);
    }
}

randomParagraph();

inpField.addEventListener("input",initTyping); 

function Send(){

    let name = document.getElementById("Name").value;
    let email = document.getElementById("Email").value;
    let contact = document.getElementById("Contact").value;
    let sub = document.getElementById("subject").value;
    let msg = document.getElementById("message").value;

    let body = "Name:" + name + "<br/>Email:" + email + "<br/> Contact Number:" + contact + "<br/>Message:" + msg;

    console.log(body);


    Email.send({

        SecureToken : "c8d32c9d-e1b7-46d2-90c9-0f10b526d7a9",
        To : "ektaprajapati0914@gmail.com",
        From : "ektaprajapati0914@gmail.com",
        Subject : sub,
        Body : body
    }).then(
           message =>{
               if(message=='OK'){

                   swal("Successfull", "Your Data Successfully Received", "success");
               }
               else{

                   swal("Something Wrong", "Your Data is not Received", "error");
                }
            }
        );
} 