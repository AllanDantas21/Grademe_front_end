import { useCallback } from 'react'

const CopySection: React.FC = () => {
    const handleCopy = useCallback(() => {
        navigator.clipboard.writeText("Texto para copiar")
    }, [])

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="text-black bg-gradient-to-r from-grey/50 to-grey/50 backdrop-blur rounded-xl shadow-xl flex items-center gap-2 w-96 h-16">
                <div className="w-4/5 m-5">
                    <a href="#" onClick={(e) => { e.preventDefault(); handleCopy() }}>Link para copiar</a>
                </div>
                <button 
                    onClick={handleCopy} 
                    className="h-full w-24 flex items-center rounded-r-xl justify-center bg-gradient-to-r from-blue-400 to-blue-200 via-blue-500 to-transparent bg-[length:200%_100%] bg-[position:100%_0] hover:bg-[position:0_0] transition-all duration-500"
                >
                    Copy
                </button>
            </div>
        </div>
    );
}

export default CopySection;
