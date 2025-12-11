
import React, { useState, useCallback } from 'react';
import { SeoSchemas } from '../utils/SeoArticle';

const modalContent: Record<string, { title: string; content: React.ReactNode }> = {
    'About': {
        title: 'About Us',
        content: (
            <div className="space-y-4">
                <p>Welcome to the <strong>Percentage Change Calculator</strong>, a premier financial analytics tool conceptualized and developed by <strong>HSINI MOHAMED</strong>.</p>
                <p>Our mission is to democratize financial literacy by providing robust, accessible, and aesthetically pleasing tools for students, professionals, and business owners. Unlike generic calculators, this platform focuses on the <em>context</em> of the numbers, offering deep insights into what percentage changes actually represent in real-world scenarios.</p>
                <p>Hosted at <strong>doodax.com</strong>, we are committed to continuous improvement and high-quality user experiences.</p>
            </div>
        ),
    },
    'Contact': {
        title: 'Contact Information',
        content: (
            <div className="space-y-4">
                <p>We value open communication with our users. Whether you have a feature request, found a bug, or just want to say hello, please reach out.</p>
                <div className="bg-slate-900/50 p-4 rounded-lg border border-slate-700">
                    <h4 className="font-semibold text-cyan-400 mb-2">Direct Contact</h4>
                    <ul className="space-y-2">
                        <li className="flex items-center">
                            <span className="text-slate-400 w-24">Email:</span>
                            <a href="mailto:hsini.web@gmail.com" className="text-white hover:text-cyan-400 hover:underline transition-colors">hsini.web@gmail.com</a>
                        </li>
                        <li className="flex items-center">
                            <span className="text-slate-400 w-24">Website:</span>
                            <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 hover:underline transition-colors">doodax.com</a>
                        </li>
                        <li className="flex items-center">
                            <span className="text-slate-400 w-24">Developer:</span>
                            <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-400 hover:underline transition-colors">HSINI MOHAMED</a>
                        </li>
                    </ul>
                </div>
                <p className="text-sm text-slate-400">We aim to respond to all legitimate inquiries within 24-48 business hours.</p>
            </div>
        ),
    },
    'Guide': {
        title: 'How to Use',
        content: (
            <div className="space-y-4">
                <p>Mastering this tool is effortless. Follow these steps for accurate results:</p>
                <ol className="list-decimal list-inside space-y-2 text-slate-300">
                    <li><strong className="text-white">Identify your Start Value:</strong> This is your baseline number (e.g., last year's revenue, original stock price). Enter it in the first field.</li>
                    <li><strong className="text-white">Identify your End Value:</strong> This is the current or final number (e.g., this year's revenue, current stock price). Enter it in the second field.</li>
                    <li><strong className="text-white">Calculate:</strong> Press the specialized gradient button.</li>
                    <li><strong className="text-white">Analyze:</strong> Read the percentage result, the raw difference, and the directional indicator (Increase/Decrease).</li>
                </ol>
                <div className="bg-slate-700/30 p-3 rounded text-sm mt-2">
                    <span className="text-yellow-400 font-bold">Tip:</span> You can use decimal numbers (e.g., 12.50) for precise financial calculations.
                </div>
            </div>
        ),
    },
    'Privacy Policy': {
        title: 'Privacy Policy',
        content: (
            <div className="space-y-4 text-sm leading-relaxed">
                <p><strong>Effective Date:</strong> October 27, 2023</p>
                <p>At <strong>doodax.com</strong>, accessible from https://doodax.com, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by us and how we use it.</p>
                
                <h4 className="font-bold text-white mt-4">Data Collection & Client-Side Processing</h4>
                <p>This application operates primarily as a <strong>client-side tool</strong>. When you enter numbers into the calculator, the mathematical processing occurs exclusively within your web browser using JavaScript. <strong>We do not transmit your input values to any external server or database.</strong> Your financial data remains strictly on your device.</p>

                <h4 className="font-bold text-white mt-4">Log Files</h4>
                <p>Like many other Web sites, doodax.com makes use of log files. The information inside the log files includes internet protocol (IP) addresses, type of browser, Internet Service Provider (ISP), date/time stamp, referring/exit pages, and number of clicks to analyze trends, administer the site, track user's movement around the site, and gather demographic information. IP addresses and other such information are not linked to any information that is personally identifiable.</p>

                <h4 className="font-bold text-white mt-4">Cookies and Web Beacons</h4>
                <p>doodax.com uses 'cookies' to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information.</p>

                <p className="mt-4">If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us at <strong>hsini.web@gmail.com</strong>.</p>
            </div>
        ),
    },
    'Terms of Service': {
        title: 'Terms of Service',
        content: (
            <div className="space-y-4 text-sm leading-relaxed">
                <p><strong>Last Updated:</strong> October 27, 2023</p>
                <p>Please read these Terms of Service ("Terms", "Terms of Service") carefully before using the Percentage Change Calculator website (the "Service") operated by HSINI MOHAMED via <strong>doodax.com</strong>.</p>
                
                <h4 className="font-bold text-white mt-4">1. Conditions of Use</h4>
                <p>By accessing this website we assume you accept these terms and conditions. Do not continue to use doodax.com if you do not agree to take all of the terms and conditions stated on this page.</p>

                <h4 className="font-bold text-white mt-4">2. Accuracy of Materials</h4>
                <p>The materials appearing on doodax.com could include technical, typographical, or photographic errors. We do not warrant that any of the materials on its website are accurate, complete or current. We may make changes to the materials contained on its website at any time without notice.</p>

                <h4 className="font-bold text-white mt-4">3. Disclaimer</h4>
                <p>The materials on doodax.com are provided on an 'as is' basis. We make no warranties, expressed or implied, and hereby disclaim and negate all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>
                
                <p className="border-l-4 border-red-500 pl-4 py-2 bg-slate-900/50 my-4">
                    <strong>Financial Disclaimer:</strong> This tool is for informational and educational purposes only. It does not constitute professional financial advice. Always consult with a qualified financial advisor before making significant financial decisions.
                </p>
            </div>
        ),
    },
    'DMCA': {
        title: 'DMCA Copyright Policy',
        content: (
            <div className="space-y-4 text-sm leading-relaxed">
                <p>doodax.com respects the intellectual property rights of others. It is our policy to respond to any claim that Content posted on the Service infringes the copyright or other intellectual property infringement of any person.</p>
                <p>The design, code, logic, and original text content of this application are the proprietary work of <strong>HSINI MOHAMED</strong>.</p>
                <p>If you are a copyright owner, or authorized on behalf of one, and you believe that the copyrighted work has been copied in a way that constitutes copyright infringement that is taking place through the Service, you must submit your notice in writing to the attention of "Copyright Infringement" via email to <strong>hsini.web@gmail.com</strong> and include in your notice a detailed description of the alleged infringement.</p>
            </div>
        ),
    }
};

const Modal: React.FC<{ activeModal: string | null; onClose: () => void }> = ({ activeModal, onClose }) => {
    if (!activeModal || !modalContent[activeModal]) return null;

    const { title, content } = modalContent[activeModal];

    return (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4 transition-opacity duration-300" onClick={onClose}>
            <div className="bg-slate-800 border border-slate-600 rounded-xl shadow-2xl w-full max-w-2xl text-white flex flex-col max-h-[90vh] animate-scale-in" onClick={(e) => e.stopPropagation()}>
                <div className="flex justify-between items-center p-6 border-b border-slate-700 bg-slate-900/50 rounded-t-xl">
                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-indigo-400">{title}</h2>
                    <button
                        onClick={onClose}
                        className="text-slate-400 hover:text-white transition-colors p-2 hover:bg-slate-700 rounded-full"
                        aria-label="Close modal"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className="p-6 overflow-y-auto custom-scrollbar text-slate-300 leading-relaxed">
                    {content}
                </div>
                <div className="p-4 border-t border-slate-700 bg-slate-900/30 rounded-b-xl flex justify-end">
                    <button onClick={onClose} className="px-6 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg transition-colors text-sm font-medium">
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

const ThemeLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [activeModal, setActiveModal] = useState<string | null>(null);

    const openModal = useCallback((modalName: string) => {
        setActiveModal(modalName);
    }, []);

    const closeModal = useCallback(() => {
        setActiveModal(null);
    }, []);

    const navLinks = ['About', 'Contact', 'Guide', 'Privacy Policy', 'Terms of Service', 'DMCA'];

    return (
        <>
            <SeoSchemas />
            <div className="relative min-h-screen w-full bg-[#0a0a0a] text-white font-sans overflow-hidden flex flex-col">
                {/* Advanced Galaxy Background */}
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#0f172a] opacity-90"></div>
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
                    
                    {/* Nebula Effects */}
                    <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-purple-600/20 rounded-full blur-[120px] animate-pulse-slow"></div>
                    <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-cyan-600/20 rounded-full blur-[120px] animate-pulse-slow delay-1000"></div>
                    <div className="absolute top-[40%] left-[40%] w-[30%] h-[30%] bg-indigo-600/10 rounded-full blur-[100px] animate-float"></div>
                </div>

                <style>{`
                    @keyframes pulse-slow {
                        0%, 100% { opacity: 0.2; transform: scale(1); }
                        50% { opacity: 0.3; transform: scale(1.1); }
                    }
                    @keyframes float {
                        0% { transform: translate(0, 0); }
                        50% { transform: translate(-20px, 20px); }
                        100% { transform: translate(0, 0); }
                    }
                    .animate-pulse-slow {
                        animation: pulse-slow 8s infinite ease-in-out;
                    }
                    .animate-float {
                        animation: float 15s infinite ease-in-out;
                    }
                    @keyframes scale-in {
                        from { opacity: 0; transform: scale(0.95); }
                        to { opacity: 1; transform: scale(1); }
                    }
                    .animate-scale-in {
                        animation: scale-in 0.2s ease-out forwards;
                    }
                    .custom-scrollbar::-webkit-scrollbar {
                        width: 8px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-track {
                        background: rgba(30, 41, 59, 0.5);
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb {
                        background: rgba(71, 85, 105, 0.8);
                        border-radius: 4px;
                    }
                    .custom-scrollbar::-webkit-scrollbar-thumb:hover {
                        background: rgba(100, 116, 139, 1);
                    }
                `}</style>

                <div className="relative z-10 flex flex-col min-h-screen">
                    <header className="bg-black/20 backdrop-blur-md border-b border-white/5 sticky top-0 z-30">
                        <nav className="container mx-auto px-4 py-4">
                            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                                <div className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-400">
                                    doodax.com
                                </div>
                                <ul className="flex flex-wrap justify-center gap-x-6 gap-y-2">
                                    {navLinks.map(link => (
                                        <li key={link}>
                                            <button 
                                                onClick={() => openModal(link)} 
                                                className="text-slate-400 hover:text-cyan-300 transition-colors text-sm font-medium tracking-wide hover:scale-105 transform duration-200"
                                            >
                                                {link}
                                            </button>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </nav>
                    </header>

                    <main className="flex-grow flex flex-col items-center justify-start pt-8 md:pt-16 pb-12">
                        {children}
                    </main>

                    <footer className="bg-black/40 backdrop-blur-md border-t border-white/10 py-8 text-center mt-auto">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-col items-center space-y-4">
                                <p className="text-slate-400 text-sm">
                                    &copy; {new Date().getFullYear()} Percentage Change Calculator. All rights reserved.
                                </p>
                                <div className="flex flex-wrap justify-center items-center gap-4 text-sm text-slate-500">
                                    <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">doodax.com</a>
                                    <span className="text-slate-700">•</span>
                                    <a href="mailto:hsini.web@gmail.com" className="hover:text-cyan-400 transition-colors">hsini.web@gmail.com</a>
                                </div>
                                <div className="mt-4 pt-4 border-t border-white/5 w-full max-w-xs">
                                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-2">Developed By</p>
                                    <a 
                                        href="https://github.com/hsinidev" 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="inline-flex items-center space-x-2 text-white font-semibold hover:text-cyan-400 transition-all group"
                                    >
                                        <span>HSINI MOHAMED</span>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="opacity-0 group-hover:opacity-100 transform translate-x-[-5px] group-hover:translate-x-0 transition-all duration-300" viewBox="0 0 16 16">
                                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </div>

                <Modal activeModal={activeModal} onClose={closeModal} />
            </div>
        </>
    );
};

export default ThemeLayout;
