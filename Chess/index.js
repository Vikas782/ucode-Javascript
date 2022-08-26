let container= document.getElementById("container")

for (let i=1;i<9;i++)
{
    let chessRow=document.createElement("div")
    chessRow.classList.add("chessrow")
    if(i%2==0)
    {
        chessRow.style.flexDirection="row-reverse"
    }
    for(let i=1;i<9;i++)
    {
        let chessColumn=document.createElement("div")
        chessColumn.classList.add("chessColumn")
        if(i%2==0)
        {
            chessColumn.style.background="black";
        }
        else{
            chessColumn.style.background="white";
        }
        chessRow.appendChild(chessColumn);
    }
    container.appendChild(chessRow);
}