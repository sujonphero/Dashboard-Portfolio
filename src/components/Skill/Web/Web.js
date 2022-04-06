import React from 'react';
import { Link } from 'react-router-dom';

const Web = () => {
    return (
        <div className='w-full top-0 pl-64 bg-slate-50'>

            <h1 className='text-center uppercase pt-10 text-3xl font-semibold text-slate-600 font-[poppins] underline'>my skills</h1><br /><br />
            
            {/* button section here */}
            <div className='px-40 font-[roboto]'>
            <Link to='/web' className="text-white font-bold bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-blue-300 rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2">Web</Link>

            <Link to='/programming' className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2">Programming</Link>

            <Link to='/others' className="text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:ring-green-200 dark:focus:ring-green-800 font-bold rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2">Others</Link>

            <Link to='/tools' className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 font-bold rounded-lg text-2xl px-5 py-2.5 text-center mr-2 mb-2">Tools</Link>
            </div><br /> <br />

            {/* progressBar */}
            <div className='px-40 w-4/8 font-[poppins]'>

                <span className="mb-1 font-bold text-2xl text-blue-700">React</span>
                <div className="w-full bg-gray-400 rounded">
                <div className="bg-blue-600 h-8 w-[700px] rounded"></div>
                </div>
    
                <span className="mb-1 font-bold text-2xl">Express.JS</span>
                <div className="w-full bg-gray-400 rounded">
                <div className="bg-gray-600 h-8 w-[500px] rounded"></div>
                </div>
    
                <span className="mb-1 font-bold text-2xl text-green-700">Node JS</span>
                <div className="w-full bg-gray-400 rounded">
                <div className="bg-green-600 h-8 w-[490px] rounded"></div>
                </div>
    
                <span className="mb-1 font-bold text-2xl text-orange-400">MongoDB</span>
                <div className="w-full bg-gray-400 rounded">
                <div className="bg-orange-400 h-8 w-[610px] rounded"></div>
                </div>
    
                <span className="mb-1 font-bold text-2xl text-indigo-700">Bootstrap</span>
                <div className="w-full bg-gray-400 rounded">
                <div className="bg-indigo-600 h-8 w-[700px] rounded"></div>
                </div>
    
                <span className="mb-1 font-bold text-2xl text-purple-700">Tailwind</span>
                <div className="w-full bg-gray-400 rounded">
                <div className="bg-purple-600 h-8 w-[630px] rounded"></div>
                </div>
    
                <span className="mb-1 font-bold text-2xl text-pink-700">Material UI</span>
                <div className="w-full bg-gray-400 rounded">
                <div className="bg-pink-600 h-8 w-[550px] rounded"></div>
                </div><br /><br />
            </div>
        </div>
    );
};

export default Web;