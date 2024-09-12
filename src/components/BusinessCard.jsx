import './BusinessCard.css'

const hoverHandle = document.querySelector('.hover-handle');

hoverHandle.addEventListener('touchstart', () => {
    hoverHandle.classList.add('hover');
});

hoverHandle.addEventListener('touchend', () => {
    hoverHandle.classList.remove('hover');
});


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
                        <div className='hover-handle'>
                            <img src="/github-logo.png" alt="github logo" className="logo"></img>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    );
}