import './Project.css';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Project() {

    const [showBackButton, setShowBackButton] = useState(true);
    const navigate = useNavigate();
   
    const fontStyles = {
        fontFamily: 'Inria Sans, sans-serif',
    };

    const pageStyles = {
       background: 'linear-gradient(to right top, #090f18, #383a41, #696a6f, #9e9ea1, #d6d6d6)',
       minHeight: '130vh',
    };

    const handleBackBtn = () => {
        navigate('/');
    }
    
    return (
        <>
     <div style={pageStyles} className='flex flex-col items-center h-screen'>
        <div className="title text-white text-2xl flex flex-col items-center mt-20 mb-14" style={fontStyles}>
            <h1 className='hover:underline'><a href="https://knowitforward.netlify.app/">Know It Forward</a></h1>
        </div>

        <div className="desc" style={fontStyles}>
            <h2 className="text-white text-2xl flex flex-col items-center mb-10">What it is:</h2>
            <p className="text-white text-xl text-center flex flex-col items-center mx-10">An educational platform for lifelong learners and educators to come together. Attending and taking seminars
                will lead to knowledge sharing. Best of all, all money paid for seminars goes to charity.
            </p>
        </div>

        <div className="proj-img flex items-center justify-center mt-20">
            <a href="https://knowitforward.netlify.app/"><img src="/KnowItForward.jpeg" alt="project image for KnowItForward" 
            style={{
                width: '300px', 
                height: '370px' 
            }}
            />
            </a>
        </div>


        {showBackButton && (
                    <button 
                        onClick={handleBackBtn} 
                        className="mt-10 px-6 py-2 bg-blue-500 text-white rounded"
                    >
                        Back
                    </button>
                )}
        </div>
        </>
    );
}