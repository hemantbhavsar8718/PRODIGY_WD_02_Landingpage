import React from "react";
import './Internshipcard.css';
function Internshipcard({title,topics,isPopular}){
    return(
        <div className={`card ${isPopular ? 'popular-card' : ''}`}>
            {isPopular && <div className="popular-badge">Popular</div>}
            <h3 className="card-title">{title}</h3>
            <ul className="topics">
                {topics.map((topics,index)=>(
                    <li key={index}>{topics}</li>
                ))}
            </ul>
            <div className="apply-btn">Apply Now</div>
        </div>
    );
}
export default Internshipcard;