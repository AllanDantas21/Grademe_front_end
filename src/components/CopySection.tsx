import { useCallback, useState } from 'react'
import isMobile from '../components/isMobile'

const CopySection: React.FC = () => {
    const [copyMessage, setCopyMessage] = useState<string>("");
    const [showMessage, setShowMessage] = useState<boolean>(false);
    
    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText("source <(curl https://grademe.com.br/api/install)")
        setCopyMessage("Copied to clipboard!");
        setShowMessage(true);
        
        setTimeout(() => {
            setShowMessage(false);
        }, 2000);
    }, [])

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
            <div className="relative">
                <div className={`text-black bg-gradient-to-r from-grey/50 to-grey/50 backdrop-blur rounded-xl shadow-xl flex items-center gap-2 border border-gray-300 transition-all duration-500 transform hover:scale-105 ${isMobile() ? 'w-full h-auto py-4 flex-col' : 'w-98 h-16'}`}>
                    <div className={`${isMobile() ? 'w-full px-3 overflow-x-auto whitespace-normal text-center mb-2' : 'w-4/5 m-5'}`}>
                        <a href="#" onClick={(e) => { e.preventDefault(); handleCopy() }}>source &lt;(curl https://grademe.com.br/api/install.sh)</a>
                    </div>
                    <button 
                        onClick={handleCopy} 
                        className={`flex items-center justify-center bg-gradient-to-r from-blue-400 to-blue-200 via-blue-500 to-transparent bg-[length:200%_100%] bg-[position:100%_0] hover:bg-[position:0_0] transition-all duration-500 transform hover:scale-105 ${isMobile() ? 'w-1/2 h-10 rounded-xl' : 'h-full w-24 rounded-r-xl'}`}
                    >
                        Copy
                    </button>
                </div>
                
                {showMessage && (
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-black/80 text-white px-3 py-1 rounded-md shadow-lg text-sm transition-all duration-300 animate-fade-in-out">
                        {copyMessage}
                    </div>
                )}
            </div>
        </div>
    );
}

export default CopySection;
