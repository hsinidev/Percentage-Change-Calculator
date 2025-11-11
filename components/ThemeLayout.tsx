
import React, { useState, useCallback, Fragment } from 'react';
import { SeoSchemas } from '../utils/SeoArticle';

const modalContent: Record<string, { title: string; content: React.ReactNode }> = {
    'About': {
        title: 'About Us',
        content: <p>This Percentage Change Calculator is a modern web tool designed by HSINI MOHAMED to provide instant, accurate calculations for financial analysts, students, and business professionals. Our goal is to offer a seamless and visually engaging user experience.</p>,
    },
    'Contact': {
        title: 'Contact Information',
        content: <div>
            <p>For inquiries, please reach out via the following channels:</p>
            <ul className="list-disc list-inside mt-2">
                <li>Email: <a href="mailto:hsini.web@gmail.com" className="text-cyan-400 hover:underline">hsini.web@gmail.com</a></li>
                <li>Website: <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:underline">doodax.com</a></li>
            </ul>
        </div>,
    },
    'Guide': {
        title: 'How to Use',
        content: <div>
            <p>Using the calculator is simple:</p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
                <li>Enter the initial or "Start Value" in the first input field.</li>
                <li>Enter the final or "End Value" in the second input field.</li>
                <li>Click the "Calculate Change" button.</li>
                <li>The result will be displayed below, showing the percentage change, the direction (increase/decrease), and the raw difference.</li>
            </ol>
        </div>,
    },
    'Privacy Policy': {
        title: 'Privacy Policy',
        content: <p>We respect your privacy. This application is a client-side tool, meaning all calculations are performed directly in your browser. We do not collect, store, or transmit any personal data or the numbers you enter. Your financial calculations remain completely private and anonymous.</p>,
    },
    'Terms of Service': {
        title: 'Terms of Service',
        content: <p>This tool is provided for informational purposes only. While we strive for accuracy, we are not liable for any errors or financial decisions made based on the results. Use this calculator as a guide and always verify critical calculations with a professional financial advisor.</p>,
    },
    'DMCA': {
        title: 'DMCA Policy',
        content: <p>All content, design, and code on this website are the original work of HSINI MOHAMED. If you believe any content infringes on your copyright, please contact us at hsini.web@gmail.com with the necessary details, and we will address the issue promptly.</p>,
    }
};

const Modal: React.FC<{ activeModal: string | null; onClose: () => void }> = ({ activeModal, onClose }) => {
    if (!activeModal || !modalContent[activeModal]) return null;

    const { title, content } = modalContent[activeModal];

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4" onClick={onClose}>
            <div className="bg-slate-800 border border-slate-600 rounded-lg shadow-2xl w-full max-w-lg text-white p-6 relative animate-fade-in" onClick={(e) => e.stopPropagation()}>
                <h2 className="text-2xl font-bold text-cyan-400 mb-4">{title}</h2>
                <div className="text-slate-300 space-y-4">{content}</div>
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-slate-400 hover:text-white transition-colors"
                    aria-label="Close modal"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
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
            <div className="relative min-h-screen w-full bg-slate-900 text-white font-sans overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-50 cosmic-bg"></div>
                <style>{`
                    @keyframes move-bg {
                        0% { background-position: 0% 50%; }
                        50% { background-position: 100% 50%; }
                        100% { background-position: 0% 50%; }
                    }
                    .cosmic-bg {
                        background: radial-gradient(ellipse at top, #1b2735 0%, #090a0f 100%),
                                    radial-gradient(ellipse at bottom, #3a4b67 0%, #090a0f 100%);
                        background-size: 200% 200%;
                        animation: move-bg 15s ease infinite;
                    }
                    @keyframes fade-in {
                        from { opacity: 0; transform: scale(0.95); }
                        to { opacity: 1; transform: scale(1); }
                    }
                    .animate-fade-in {
                        animation: fade-in 0.3s ease-out forwards;
                    }
                `}</style>

                <div className="relative z-10 flex flex-col min-h-screen">
                    <header className="bg-black/30 backdrop-blur-sm border-b border-slate-700/50 sticky top-0 z-30">
                        <nav className="container mx-auto px-4 py-3">
                            <ul className="flex flex-wrap justify-center sm:justify-end gap-x-4 gap-y-2">
                                {navLinks.map(link => (
                                    <li key={link}>
                                        <button onClick={() => openModal(link)} className="text-slate-300 hover:text-cyan-400 transition-colors text-sm font-medium">
                                            {link}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </header>

                    <main className="flex-grow">
                        {children}
                    </main>

                    <footer className="bg-black/30 backdrop-blur-sm border-t border-slate-700/50 py-6 text-center">
                        <div className="container mx-auto px-4 text-slate-400 text-sm">
                            <p className="mb-2">
                                <a href="https://github.com/hsinidev" target="_blank" rel="noopener noreferrer" className="font-bold text-[#FFD700] hover:text-yellow-300 transition-colors">
                                    Powered by HSINI MOHAMED
                                </a>
                            </p>
                            <p>
                                <a href="https://doodax.com" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">doodax.com</a>
                                <span className="mx-2">|</span>
                                <a href="mailto:hsini.web@gmail.com" className="hover:text-cyan-400 transition-colors">hsini.web@gmail.com</a>
                            </p>
                        </div>
                    </footer>
                </div>

                <Modal activeModal={activeModal} onClose={closeModal} />
            </div>
        </>
    );
};

export default ThemeLayout;
   