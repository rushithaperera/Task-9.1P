import React from 'react'

function Navigation(){
    return(
        <div>
    <ul>
        <li><a class="active" href="#home">How it works</a></li>
        <li><a href="#news">Requesters</a></li>
        <li><a href="#contact">Workers</a></li>
        <li><a href="#pricing">Pricing</a></li>
        <li><a href="#about">About</a></li>
        <button className = "btn-signup">Sign in</button>
    </ul>
</div>
    )
}

export default Navigation