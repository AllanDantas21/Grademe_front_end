import StarButton from './Star';
import { FaGraduationCap } from 'react-icons/fa';
import Head from 'next/head';

export default function Header() {
    return (
        <>
            <Head>
                <title>GradeMe</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="icon" href={`data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M622.34 153.2L343.4 67.5c-15.2-4.67-31.6-4.67-46.79 0L17.66 153.2c-23.54 7.23-23.54 38.36 0 45.59l48.63 14.94c-10.67 13.19-17.23 29.28-17.88 46.9C38.78 266.15 32 276.11 32 288c0 10.78 5.68 19.85 13.86 25.65L20.33 428.53C18.11 438.52 25.71 448 35.94 448h56.11c10.24 0 17.84-9.48 15.62-19.47L82.14 313.65C90.32 307.85 96 298.78 96 288c0-11.57-6.47-21.25-15.66-26.87.76-15.02 8.44-28.3 20.69-36.72L296.6 284.5c9.06 2.78 26.44 6.25 46.79 0l278.95-85.7c23.55-7.24 23.55-38.36 0-45.6zM352.79 315.09c-28.53 8.76-52.84 3.92-65.59 0l-145.02-44.55L128 384c0 35.35 85.96 64 192 64s192-28.65 192-64l-14.18-113.47-145.03 44.56z"/></svg>')}` } />
            </Head>
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
                                <StarButton />
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}