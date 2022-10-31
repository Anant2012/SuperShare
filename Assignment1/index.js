var table = document.getElementById("table");
var outtable = document.getElementById("outputTable");

// Input Array
var inpArr =[0,4,0,0,0,6,0,6,4,0];

// Making dynamic table
var n = 7;     // Input

var tag=[];
var tag2=[];
for(let i=0; i<10*n; i++){
    tag[i] = document.createElement("div");
    var text = document.createTextNode(``);
    tag[i].appendChild(text);
    tag[i].className=`item item${i}`;
    table.appendChild(tag[i]);

    tag2[i] = document.createElement("div");
    tag2[i].appendChild(text);
    tag2[i].className=`item itemout${i}`;
    outtable.appendChild(tag2[i]);
}

outtable.style.gridTemplateRows = `repeat(${n}, 30px)`;
table.style.gridTemplateRows = `repeat(${n}, 30px)`;

// Coloring yellows to input table
for(let i=0; i<10; i++){
    let start = 10*(n-1)+i;
    for(let j=0; j<inpArr[i]; j++){
        let classStyle = document.querySelector(`.item${start-10*j}`);
        classStyle.style.backgroundColor="yellow";
    }
}

// Finding blue cell
let noteS, noteE=0;
let newinpArr = [0,0,0,0,0,0,0,0,0,0];
for(let i=0; i<9; i++){
    let min = inpArr[i];
    for(let j=i+1; j<10; j++){
        if(inpArr[j]!=0){
            noteE = j-1;
            if(inpArr[j]<=min){
                min = inpArr[j];
            }
            break;
        }
    }
    noteS = i+1;
    let k = noteS;
    while(k<=noteE){
        newinpArr[k]=min;
        k++;
    }
    if(noteS<noteE){
        i = noteE-1;
    }
    else{
        i = noteS-1;
    }
}

// Coloring blues to input and output table
for(let i=0; i<10; i++){
    let start = 10*(n-1)+i;
    for(let j=0; j<newinpArr[i]; j++){
        let classStyle = document.querySelector(`.item${start-10*j}`);
        let classStyle2 = document.querySelector(`.itemout${start-10*j}`);
        classStyle.style.backgroundColor="lightblue";
        classStyle2.style.backgroundColor="lightblue";
    }
}

// Output
let output=0;
for(let i=0; i<10; i++){
    output = output + newinpArr[i];
}


var inp = document.querySelector(`.inputArr`);
inp.innerText = `[${inpArr}]`;
var nV = document.querySelector(`.nValue`);
nV.innerText = `n=${n}`;
var out = document.querySelector(`.printOutput`);
out.innerText = `${output} Units`;




