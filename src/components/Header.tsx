import StarButton from './Star';
import { FaGraduationCap } from 'react-icons/fa';

export default function Header() {
    return (
        <header className="sticky top-0 z-50">
            <div className="navbar flex items-center justify-between bg-blue-100 shadow-md px-4 py-2">
                <div className="flex-1 flex items-center justify-center md:justify-between">
                    <div className="flex items-center">
                        <FaGraduationCap className="text-black text-primary text-2xl mr-2" />
                        <a href="https://grademe.fr" className="text-black font-semibold text-3xl hover:text-primary transition-colors duration-300">
                            GradeMe
                        </a>
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <div className="flex items-center ml-2">
                            <h1 className='text-black text-xl '>Visit grademe.ft</h1>
                            <StarButton />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}