import React from 'react'
import ReactPlayer from "react-player";
import './Chat.css'
function Chat() {
    return (
        <div >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', margin: '20px' }}>
                <h1 >Get subscription to start <br />your preparation</h1>
                <button className='subs-btn' >
                    View subscription plans
                </button>
            </div >

            <div style={{ margin: "16px 150px", borderTop: "1px solid #ccc" }} />
            <h2 style={{ marginLeft: '150px', marginTop: '50px', color: '#484b48e7' }}>Recommended batch for <br /> IIT JEE preparation</h2>
            <div className="container">
                <div className="item"># Best for full syllabus preparation   </div>
                <div className="item"># Live & recorded online classes    </div>
                <div className="item"># Curated by best educators</div>
            </div>
            <br />

            <div style={{ width: "20%", height: "30%", marginLeft: "150px" }}>
                <ReactPlayer
                    url="https://www.youtube.com/watch?v=S_rO2KPOHQs&t=1s"

                    controls
                />
            </div>
            <h2 style={{ marginLeft: '150px', marginTop: '50px', color: '#484b48e7' }}>Explore subject-wise courses</h2>
            <div className="container">
                <div className="item"># Best for IIT JEE online coaching  </div>
                <div className="item">#
                    Learn a subject from your favourite educator    </div>

            </div>
        </div>
    );
}

export default Chat;