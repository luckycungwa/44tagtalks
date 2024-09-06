import { Button } from '@nextui-org/react';
import React from 'react';
import { FiArrowUp } from 'react-icons/fi';

const ScrollToTop = () => {
    return (
        <div>
            <Button isIconOnly 
                className="fixed bottom-4 right-4 bg-primarybg-[#ff4b14] text-white font-bold w-10 h-10 absolute rounded-full"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <FiArrowUp />
            </Button>
        </div>
    );
}

export default ScrollToTop;
