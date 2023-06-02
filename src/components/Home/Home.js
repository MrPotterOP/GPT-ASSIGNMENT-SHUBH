import React, { useState } from "react";

import "./home.css";


const Home = ()=>{

    const [cardData, setCardData]= useState([{"property": "Core Web Vitals", "weight": 11.1, tick: true}, {"property": "Optimized Codes", "weight": 11.1, tick: false}, {"property": "SEO Friendly Website", "weight": 11.1, tick: false}, {"property": "Efficient Browser Caching", "weight": 11.1, tick: false}, {"property": "Server Security", "weight": 11.1, tick: false}, {"property": "Crawling and Indexing", "weight": 11.1, tick: false}, {"property": "User Interaction", "weight": 11.1, tick: false}, {"property": "Large Network Payload", "weight": 11.1, tick: false}, {"property": "Encryption", "weight": 11.1, tick: false}]);
    
    //Handlers
    const handleClick = (index) =>{
        
        let newArr = [...cardData];

        newArr[index] = {"property": cardData[index].property, "weight": cardData[index].weight, tick: !cardData[index].tick}

        setCardData(()=> newArr)
    }

    //Functional Components
    const mapCard = (i, index)=>{
        return(
            <Card property={i.property} weight={i.weight} key={i.property} tick={i.tick} index={index}/>
        )
    }

    //Components
    const Meter = ()=>{
        let left = .5;
        cardData.forEach(i =>{
            if(i.tick){
                left += i.weight - .5;
            }
        })

        return(
            <div className="meter-container">
                <div className="flex-row meter-values">
                    <p>High</p>
                    <p>Medium</p>
                    <p>Low</p>
                </div>
                <div className="bar-container">
                <div className="meter">
                    <img className="img-needle" style={{"left": left + "%"}} alt="needle" src="/images/needle.png"></img>
                </div>
                </div>

                <div className="more-info">
                <div className="flex-row">
                    <p>Check Detailed Checklist</p>
                    <img className="img-arrow" alt="arrow" src="/images/arrow.png"></img>
                </div>
                </div>
            </div>
        )
    }

    const Card = ({property, weight, tick, index})=>{

        return(
            <div className="flex-clm card">
                <img className="img-info" alt="info" src="/images/info.png"></img>

                <div className="flex-row check-box-container" onClick={() =>handleClick(index)}>
                    <div className={tick ? "check-box checked" : "check-box"}>
                        {tick ? <img className="img-tick" alt="tick" src="/images/tick.png"></img> : null}
                    </div>
                    <h2>{property}</h2>
                </div>

                <div className="flex-row weightage-container">
                    <div className="weightage-bar">
                        <p>Edit Weightage</p>
                    </div>
                    <p>{weight}%</p>
                </div>
            </div>
        )
    }

    const Top = ()=>{
        return(
            <div className="home-top">
                <h1>Risk Meter</h1>
                <p>Your website is often the face of your brand. It is where you present your products and services and how you build brand awareness and trust. However, in today’s fast-paced digital world, risks are commonplace. So, it is critical to implement certain website maintenance practices to help reduce your risk. Calculate yours now:</p>
            </div>
        )
    }

    const Bottom = ()=>{
        return(
            <div className="flex-clm home-bottom">
                <div className="checkboxes">
                {cardData.map((i, x) => mapCard(i, x))}
                </div>
                <Meter />
            </div>
        )
    }

    return(
        <section id="home">
            <div className="flex-clm home-container">
                <Top />
                <Bottom />
            </div>
        </section>
    )
}


export default Home;