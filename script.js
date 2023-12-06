let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector("#reset");
let newGameBtn=document.querySelector("#new");
let msgcontainer=document.querySelector(".msg-container");
let message=document.querySelector("#msg");

let turnO=true;
let cnt=0;

const win_pattern=[[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

const resetGame = () =>{
    turnO=true;
    cnt=0;
    enableBoxes();
    boxes.innerText="";
    msgcontainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        // console.log("box was clicked");
        if(turnO){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        cnt++;
        
        let isWinner=checkWinner();

        if(cnt===9 && !isWinner){
            gameDraw();
        }

    });
});

const gameDraw = () => {
    msg.innerText=`Tie`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};

const disableBoxes = () => {
    for (let box of boxes) {
        box.disabled=true;
    }
};

const enableBoxes = () => {
    for (let box of boxes) {
        box.disabled=false;
        box.innerText="";
    }
};



const showWinner=(winner)=>{
    msg.innerText=`Congratulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();
};


const checkWinner = ()=> {
    for (let pattern of win_pattern) {

        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        // );
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;

        if(pos1!="" && pos2!=""&& pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                // console.log("Winner",pos1);
                showWinner(pos1);
            }
            // else{
            //     console.log("Tied");
            // }
        }
    }
};

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);