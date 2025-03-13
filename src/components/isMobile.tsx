import { useState, useEffect } from 'react';

function isMobile(): boolean {
    const [isMobile, setIsMobile] = useState<boolean>(false);
    
    useEffect(() => {
        const checkIsMobile = (): void => {
            setIsMobile(window.innerWidth < 768);
        }
        
        checkIsMobile();
        
        window.addEventListener('resize', checkIsMobile);
        
        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);
    
    return isMobile;
}

export default isMobile;