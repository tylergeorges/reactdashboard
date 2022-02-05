const {pfp} = './images/pfp.png';

class App extends React.Component{

    render(){
        return(

            <div className='background'>

            <div className="center">
            <div className="container">
                    
                <div className="box">
               
                    <div className ="sidebar">
                        
                    <div className = "sidebarText">Dashboard</div>
                    <div className = "sidebarText">Widget</div>
                    <div className = "sidebarText">Reviews</div>
                    <div className = "sidebarText">Customers</div>
                    <div className = "sidebarText">Online Analysis</div>
                    <div className = "sidebarText">Settings</div>
                    </div>
                    
                    <div className="sqaures" id="reviews">
                    <footer>
                    <div className = "name">Reviews</div>
                    <img className ="pfp" src={'./images/pfp.png'}></img>
                    </footer>
                    </div>

                    <div className="sqaures" id="rating"><footer>Average Rating</footer></div>
                    <div className="sqaures" id="analysis"><footer>Sentiment Analysis</footer></div>
                    <div  className="sqaures" id="vistors">Website Vistors</div>
                </div>

            </div>
            </div>
            </div>
        )
    }
}

ReactDOM.render(<App/>,document.getElementById('root'));