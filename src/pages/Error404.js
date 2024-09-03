import React from 'react';
import { FiAlertCircle } from 'react-icons/fi';
// import AdsensePlacement from '../components/AdsensePlacement';
import { useNavigate } from 'react-router-dom';


const Error404 = () => {
  const navigate = useNavigate();
  const handleReturn = () => {
    console.log('Going to where the heart is...');
    navigate('/');
  };

  return (
    <div className="flex items-center justify-center min-h-[92dvh] bg-[#2c2c2c] text-[#fefefe] object-cover"  style={{ objectFit: "fill",
        backgroundImage: "url(https://assets.lummi.ai/assets/QmdRGLNSnLtoL67mkL5nACo7sTSiJ4J4Egepf39pQngD5r?auto=format&w=1500",
        
      }}>
      <div className="text-center p-8 bg-[#fefefe] rounded-lg shadow-xl max-w-md mx-4">
        {/* Google adPlacemt */}

        <h1 className="text-6xl font-bold text-[#ff4b14] mb-4">Ooops!</h1>
        <div className="relative">
          <h2 className="text-8xl font-bold text-[#ff4b14] opacity-20">404</h2>
          <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
            <FiAlertCircle className="text-[#ff4b14] w-16 h-16" />
          </div>
        </div>
        <p className="text-[#2c2c2c] mt-4 mb-6">
          Either this page is missing or it has been removed. Please try again or return home.
        </p>
        {/* Google adPlacemt */}
        <button className="bg-[#ff4b14] text-[#fefefe] px-6 py-2 rounded-full hover:bg-opacity-90 transition-colors" onClick={handleReturn}>
          Take me Home
        </button>
      </div>
    </div>
  );
};

export default Error404;