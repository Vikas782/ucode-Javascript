let btn=document.querySelector("#btn")
        btn.addEventListener("click",function(event)
        {
            if(event.target.dataset.text=="off")
            {
                event.target.innerHTML="machine is on";
                event.target.dataset.text="on"
            }
            else if(event.target.dataset.text=="on"){
                event.target.innerHTML="machine is off";
                event.target.dataset.text="off"
            }
        })
        