export function About(){
    return (
        <div className="d-flex flex-column align-items-center justify-content-center" style={{height:"100vh"}}>
            <h1 className="display-1">About</h1>
            <p className="lead align-items-center justify-content-center mb-3">This is a simple store made with React and Bootstrap</p>
            <div className="d-flex flex-row justify-content-center">
                <div className="d-flex flex-column align-items-center justify-content-center"> 
                    <img src="https://avatars.githubusercontent.com/u/109928093?v=4" alt="profile" className="rounded-circle" style={{width:"10rem", height:"10rem"}}/>
                    <a href="https://github.com/lucassdmp">
                        <h3 className="mt-3">Lucas</h3>
                    </a>
                    
                </div>                                                          
            </div>
        </div>
    )
    
}