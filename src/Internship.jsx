import React from "react";
import Internshipcard from "./Internshipcard";
import './internship.css';
function Internship (){
    return(
        <div id="Internship">
            <h3>Internships</h3>
            <h2>Our Internships</h2>
            <p className="para">Our internships are available in a range of fields, including Web<br/> Development, Machine Learning, Data Science, and more.<br/>
             Interns will have the chance to work on real-world projects, collaborate with teams, <br/>and gain valuable insights into their respective industries.

            </p>
            <div style={{display:"flex",flexWrap:"wrap",gap:"20px",padding:"20px"}}>
                <Internshipcard
                    title="Software Developer Internship"
                    topics={[
                        "Overview",
                        "Lyfe Cycle",
                        "CLI Apps",
                        "GUI Apps",
                        "Web Scraping",
                    ]}
                />
                <Internshipcard
                    title="Web Dev Internship"
                    isPopular={true}
                    topics={[
                        "Overview",
                        "HTML5 && CSS3",
                        "Javascript",
                        "Responsive Website",
                        "Web Applications",
                    ]}
                />
                <Internshipcard
                    title="Full Stack Web Dev"
                    topics={[
                        "Overview",
                        "Authentication & Authorization",
                        "REST APIs & Database",
                        "Mini Proj: ECommerce",
                        "Mini Proj: Chat App",
                    ]}
                />
                <Internshipcard
                    title="Machine Learning Internship"
                    topics={[
                        "Overview",
                        "Data Analysis",
                        "Supervised Learning",
                        "Unsupervised Learning",
                        "Deep Learning",
                    ]}
                />
                <Internshipcard
                    title="Data Science Internship"
                    isPopular={true}
                    topics={[
                        "Overview",
                        "EDA",
                        "Data Pre-processing",
                        "Data Visualization",
                        "BI Tools",
                    ]}
                />
                <Internshipcard
                    title="Generative AI Interns"
                    topics={[
                        "Text Generation",
                        "Image Generation",
                        "markov Chains",
                        "Conditional GAN",
                        "Nural Style Transfer",
                    ]}
                />
                <Internshipcard
                    title="Software Testing Internship"
                    topics={[
                        "Overview",
                        "Unit Testing",
                        "Manual Testing",
                        "Automated Testing",
                        "Cross Browser Testing",
                    ]}
                />
                <Internshipcard
                    title="Cyber Security Internship"
                    isPopular={true}
                    topics={[
                        "Caesar Cipher",
                        "Pixel Manipulation",
                        "Password Complexity",
                        "Keyloggers",
                        "Network Packet Analysis",
                    ]}
                />  
                <Internshipcard
                title="Android Development Internship"
                topics={[
                        "Overview",
                        "Kotli/Flutter/React Native",
                        "Simplw Apps",
                        "Advanced Apps",
                        "Cloud Appd",
                ]} 
                />
            </div>
        </div>
    );

}
export default Internship;