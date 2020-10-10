import React from 'react'

const Bar = () =>{

function borderBar(e){
 const line = document.querySelector('#line')
 const box = document.querySelector('.box')
 line.style.left = e.offsetLeft + 'px'
 line.style.width = e.offsetWidth + 'px'
 if(e.innerHTML === "Explore"){;
     box.style.transform = 'translateX(0%)';
 }else{
     box.style.transform = 'translateX(-100%)';
 }
}


	return(
		<div className="header">
    <h1>Pic Store</h1>
    <div><nav>
    	<ul>
    		<li onClick={e=>{borderBar(e.target)}}>Explore</li>
    		<li onClick={e=>{borderBar(e.target)}}>Favorites</li>
            <div id="line"></div>
    	</ul>
    </nav></div>
    </div>)
}

export default Bar