import React from "react";
import "./index.css"
function Lists(){

    const css = {

    }



    let today = new Date(2023,7,4,6);
    today = today.getHours();
    let greetings = "";
    if(today>1 && today<12) {
        greetings = "good morning"
        css.color = "green"
    }
    else if (today>=12 && today <=18) {
        greetings = "good afternoon"
        css.color = "yellow"

    }
    else {
        greetings = "good night"
        css.color = "black"

    }
   
    return(
        <>

    <div class="anas">

    <h1 class = "abdul" style = {css} > you are my boy </h1>
    <h1 class = "rahul" style = {css} > {greetings}</h1>

</div>
    </>
    )
}
export default Lists
    



