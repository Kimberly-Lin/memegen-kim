const formElement= document.querySelector("form");
const imgInput= document.querySelector('input[name="pic-link"]');
const topTextInput= document.querySelector('input[name="top-text"]');
const botTextInput= document.querySelector('input[name="bot-text"]');
const post = document.querySelector('#memes');

formElement.addEventListener("submit", function(event){
    event.preventDefault();
    post.appendChild(combineMeme());
    imgInput.value="";
    topTextInput.value="";
    botTextInput.value="";
});

post.addEventListener("click",function(e){
    if (e.target.tagName==="BUTTON"){
        e.target.parentElement.remove();
    }
    console.log(e.target.tagName)
});

function combineMeme(){
    const finalMeme=document.createElement('div');
    finalMeme.style.position="relative";
    finalMeme.style.float= "left"
    finalMeme.style.margin="30px"
    finalMeme.appendChild(addTop(topTextInput.value));
    finalMeme.appendChild(makeMemePic(imgInput.value));
    finalMeme.appendChild(addBot(botTextInput.value));
    finalMeme.appendChild(makeButton());
    return finalMeme;
}

function makeButton(){
    const button=document.createElement('button');
    button.innerText = "X";
    return button;
}

function makeMemePic(someLink){
    const meme=document.createElement('img');
    meme.src= someLink;
    meme.alt= "oops something went wrong";
    meme.style.width= "500px";
    meme.style.height = "auto"
    return meme;
}

function addTop(topText){
    const header = document.createElement('div');
    header.innerText = topText;
    header.style.fontSize="20px";
    header.style.fontFamily="Arial"
    header.style.position= "absolute";
    header.style.textAlign= "center";
    header.style.left="200px";
    header.style.top="5%"
    header.style.fontWeight="400"
    header.style.color="white";
    header.style.backgroundColor="black"
    return header;
}

function addBot(botText){
    const footer = document.createElement('div');
    footer.innerText = botText;
    footer.style.fontSize="20px";
    footer.style.fontFamily="Arial"
    footer.style.position= "absolute";
    footer.style.textAlign= "center";
    footer.style.left="200px";
    footer.style.bottom="5%"
    footer.style.fontWeight="400"
    footer.style.color="white";
    footer.style.backgroundColor="black"
    return footer;
}