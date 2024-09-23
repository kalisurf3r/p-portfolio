import ReactTypingEffect from 'react-typing-effect';
import './Home.css';

export default function Home() {
   
    const fontStyles = {
        fontFamily: 'Inria Sans, sans-serif',
    };
    
    return (

        
        <>
        <div className='flex flex-col items-center h-screen'  style={fontStyles}>
            <ReactTypingEffect
                text={[
                    "Hi there, I'm Arturo.",
                    "I'm a web developer.",
                    "Welcome."
                ]}
                speed={100}
                eraseSpeed={50}
                eraseDelay={1500}
                typingDelay={100}
                className='text-2xl text-white mt-20'   
            />

        <div className='avatar mt-6'>
                <img src="/avatar.jpeg" alt="profile picture" style={{
                        borderRadius: '50%',
                        width: '300px', 
                        height: '370px' 
                    }} />
        </div>
        
        <div className='forte'>
                    <h2 className='text-2xl text-white mt-20'>Some of my fortes:</h2>
                    <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }} className='text-white text-2xl'>
                        <li>React</li>
                        <li>Express</li>
                        <li>Sequelize</li>
                        <li>Mongoose</li>
                    </ul>
        </div>

<div className='bio'>
    <h4 className='text-2xl text-white mt-20'>💻 I like to code on both ends, remember to check out my latest project 🚀</h4>
</div>


<div className='email'>
<h2 className='text-2xl text-white mt-20 email-hover'>Email me: ayalaarturo925@gmail.com</h2>
</div>
        </div>
        </>
    );
}