import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Cards';
import './index.css';

ReactDOM.render(
    <>
        <h1 className="heading_style">Top 3 Netflix Series </h1>    
    
        <Card imgsrc="https://wallpapercave.com/wp/wp4056410.jpg" title="A Netfil Original Series" sname="DARK" link="https://www.netflix.com/in/title/80100172"/>
        <Card imgsrc="https://wallpapercave.com/wp/wp2102930.jpg" title="A Netflix Original Series" sname="F.R.I.E.N.D.S" link="https://www.netflix.com/in/title/80192098"/>
        <Card imgsrc="https://wallpapercave.com/wp/wp1917154.jpg" title="A Prime Original Series" sname="Stranger Things" link="https://www.primevideo.com/detail/Mirzapur/0FBF7DWFYG99Y3TSNVJ4ELOLBO"/>  
         
        
    </>,
document.getElementById("root")
);
