import { useCallback } from 'react'
import isMobile from '../components/isMobile'

const CopySection: React.FC = () => {
    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText("source <(curl https://grademe.com.br/api/install)")
    }, [])

    return (
        <div className="min-h-screen flex items-center justify-center px-4">
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
        </div>
    );
}

export default CopySection;
