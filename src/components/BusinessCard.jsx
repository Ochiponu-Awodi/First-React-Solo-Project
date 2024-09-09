import './BusinessCard.css'

export default function BusinessCard () {
    return (
        <div className='container'>
            <div className='app-container'>
                <h1 className='title'>My Digital Business Card</h1>
                <div className='business-card'>
                    <h2 className='subtitle'>Ochiponu Musa</h2>
                    <p>UI/Ux Engineer</p>
                    <p>Email: awodiomale@gmail.com</p>
                    <p>Phone: (234) 813 8656 549</p>
                    <a href="https://github.com/Ochiponu-Awodi">
                        <img src="./src/assets/github-logo.png" alt="github logo" className="logo"></img>
                    </a>
                </div>
            </div>
        </div>
    );
}