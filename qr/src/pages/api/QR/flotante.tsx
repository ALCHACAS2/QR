import { useState } from "react";
import Image from "next/image";

interface ReportProps {
    onClose: () => void;
}
export default function Report({ onClose }: ReportProps) {
    const [showReport, setShowReport] = useState(true);
    function handleClose() {
        setShowReport(false);
        onClose();
    }
    const handlePrint = () => {
        window.print();
    };
    return (
        <>
            {showReport && (
                <div className="flex flex-col fixed inset-0 z-50 justify-center items-center bg-blue-300 bg-opacity-50">
                    <div className="flex flex-col bg-slate-200 p-10 border border-black rounded-3xl w-full h-auto items-center fixed left-0 top-0 right-0 bottom-auto">
                        <button className="print:hidden absolute top-0 right-0 z-10 w-8 h-8 m-2 text-gray-500 hover:text-black transition-colors duration-200 focus:outline-none" onClick={handleClose}>
                            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" className="text-black hover:text-red-500">
                                <path strokeWidth="2" strokeLinecap="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                        <Image src="/Logo.svg" alt="" width={300} height={300}></Image>
                        <span className="text-center text-3xl mb-5">Departure report</span>
                        <div className="">
                            <ul>
                                <li>dsfsdfsf</li>
                                <li>dsfsdfsf</li>
                                <li>dsfsdfsf</li>
                                <li>dsfsdfsf</li>
                                <li>dsfsdfsf</li>
                                <li>dsfsdfsf</li>
                            </ul>
                        </div>
                        <button className="print:hidden mt-5 border border-black text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2" onClick={handlePrint}>
                            Print
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
