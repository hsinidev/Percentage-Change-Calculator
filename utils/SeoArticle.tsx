
import React from 'react';

export const SeoSchemas: React.FC = () => {
    const webSiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "url": "https://doodax.com/",
        "name": "Percentage Change Calculator | Doodax",
        "description": "The ultimate professional tool for calculating percentage increase and decrease. Features in-depth financial analysis guides and educational resources.",
        "potentialAction": {
            "@type": "SearchAction",
            "target": "https://doodax.com/?q={search_term_string}",
            "query-input": "required name=search_term_string"
        }
    };

    const webAppSchema = {
        "@context": "https://schema.org",
        "@type": "WebApplication",
        "name": "Percentage Change Calculator",
        "url": "https://doodax.com/",
        "applicationCategory": "FinanceApplication",
        "operatingSystem": "All",
        "browserRequirements": "HTML5 compatible browser",
        "author": {
            "@type": "Person",
            "name": "HSINI MOHAMED",
            "url": "https://github.com/hsinidev"
        },
        "offers": {
            "@type": "Offer",
            "price": "0",
            "priceCurrency": "USD"
        },
        "description": "A powerful, privacy-focused interactive tool to calculate the percentage change between two numbers instantly. Ideal for financial analysis, stock market tracking, and business metric evaluation."
    };

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Mastering Percentage Change: The Definitive Financial Analysis Guide",
        "alternativeHeadline": "How to Calculate Percentage Increase and Decrease for Business Intelligence",
        "author": {
            "@type": "Person",
            "name": "HSINI MOHAMED"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Doodax",
            "url": "https://doodax.com",
            "logo": {
                "@type": "ImageObject",
                "url": "https://doodax.com/favicon.svg"
            }
        },
        "datePublished": "2023-10-27",
        "dateModified": "2024-05-15",
        "mainEntityOfPage": "https://doodax.com/",
        "wordCount": 3500,
        "keywords": "percentage change, finance calculator, stock market math, business analytics, KPI measurement, ROI calculation",
        "articleSection": "Finance & Education",
        "articleBody": "..." // Full content representation
    };

    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": "What is the formula for percentage change?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "The formula for percentage change is: ((New Value - Old Value) / |Old Value|) × 100. Using the absolute value of the old value in the denominator is crucial for consistent calculations with negative numbers."
                }
            },
            {
                "@type": "Question",
                "name": "How do I calculate a percentage decrease?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Use the same formula: ((New - Old) / Old) * 100. If the New number is smaller than the Old number, the result will be negative, indicating a decrease. For example, going from 100 to 80 results in a -20% change."
                }
            },
            {
                "@type": "Question",
                "name": "Can I calculate percentage change with negative numbers?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, but you must be careful with the denominator. The standard method uses the absolute value of the starting number in the denominator to ensure the direction of change (positive or negative) is mathematically correct relative to the number line."
                }
            }
        ]
    };

    return (
        <>
            <script type="application/ld+json">{JSON.stringify(webSiteSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(webAppSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(articleSchema)}</script>
            <script type="application/ld+json">{JSON.stringify(faqSchema)}</script>
        </>
    );
};

export const SeoArticle: React.FC = () => {
    return (
        <article className="prose prose-slate prose-invert max-w-none text-slate-300">
             <style>{`
                .prose-invert h1 { color: transparent; background-clip: text; background-image: linear-gradient(to right, #22d3ee, #818cf8); font-size: 2.5rem; margin-bottom: 2rem; }
                .prose-invert h2 { color: #e2e8f0; font-size: 1.8rem; margin-top: 3rem; border-bottom: 1px solid #334155; padding-bottom: 0.5rem; }
                .prose-invert h3 { color: #94a3b8; font-size: 1.4rem; margin-top: 2rem; }
                .prose-invert a { color: #22d3ee; text-decoration: none; border-bottom: 1px dashed #22d3ee; transition: all 0.2s; }
                .prose-invert a:hover { color: #fff; border-bottom-style: solid; }
                .prose-invert strong { color: #f8fafc; font-weight: 700; }
                .prose-invert blockquote { border-left-color: #818cf8; background: rgba(30, 41, 59, 0.5); padding: 1.5rem; border-radius: 0 8px 8px 0; font-style: italic; }
                .prose-invert ul li::marker { color: #22d3ee; }
                .prose-invert table { width: 100%; border-collapse: separate; border-spacing: 0; margin: 2rem 0; overflow: hidden; border-radius: 8px; border: 1px solid #334155; }
                .prose-invert th { background-color: #1e293b; color: #fff; padding: 1rem; text-align: left; }
                .prose-invert td { padding: 1rem; border-top: 1px solid #334155; background-color: rgba(30, 41, 59, 0.3); }
                .prose-invert code { color: #e2e8f0; background-color: #0f172a; padding: 0.2em 0.4em; border-radius: 4px; border: 1px solid #334155; font-family: 'Fira Code', monospace; }
            `}</style>
            
            <header>
                <h1>Mastering Percentage Change: The Definitive Financial Analysis Guide</h1>
                <p className="lead text-lg text-slate-400 mb-8">
                    Welcome to the most comprehensive resource on the web regarding percentage change. In an era driven by data, the ability to interpret the <em>rate of change</em> is more valuable than the raw data itself. Whether you are a Wall Street analyst evaluating quarterly earnings, a digital marketer calculating ROI, or a student mastering statistics, this guide serves as your ultimate handbook.
                </p>
            </header>

            <nav className="bg-slate-900/50 p-6 rounded-xl border border-slate-700/50 mb-10 shadow-lg">
                <h2 className="!mt-0 !text-xl !border-none mb-4 text-cyan-400">Table of Contents</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2 text-sm">
                    <li><a href="#introduction">1. Introduction to Relative Metrics</a></li>
                    <li><a href="#formula-deep-dive">2. The Mathematical Foundation</a></li>
                    <li><a href="#why-it-matters">3. The Psychology of Percentages</a></li>
                    <li><a href="#business-intelligence">4. Business Intelligence Applications</a></li>
                    <li><a href="#financial-markets">5. Financial Markets & Volatility</a></li>
                    <li><a href="#advanced-scenarios">6. Advanced Scenarios: Negative Numbers</a></li>
                    <li><a href="#common-pitfalls">7. Common Pitfalls & Logical Fallacies</a></li>
                    <li><a href="#real-world-examples">8. Real World Case Studies</a></li>
                    <li><a href="#faq-section">9. Extensive FAQ</a></li>
                    <li><a href="#conclusion">10. Conclusion</a></li>
                </ul>
            </nav>

            <section id="introduction">
                <h2>1. Introduction to Relative Metrics</h2>
                <p>Numbers in isolation are often meaningless. "Company X earned $1 million" sounds impressive, but if they earned $10 million last year, the story changes drastically. This is the realm of <strong>relative metrics</strong>.</p>
                <p>Percentage change provides the necessary context to interpret data. It creates a standardized language that allows us to compare entities of vastly different sizes. It bridges the gap between a "mom and pop" store growing its sales by $5,000 and a tech giant growing its sales by $5 billion. If both represent a 10% increase, the <em>rate of growth</em> is identical, suggesting similar momentum despite the scale difference.</p>
                <blockquote>"Data without context is just noise. Percentage change is the volume knob that brings the signal into focus."</blockquote>
            </section>
            
            <section id="formula-deep-dive">
                <h2>2. The Mathematical Foundation</h2>
                <p>While modern tools like our calculator above handle the heavy lifting, understanding the underlying algebra is crucial for professional analysis.</p>
                
                <h3>The Universal Formula</h3>
                <div className="bg-[#0f172a] p-6 rounded-lg border border-slate-700 my-6 text-center shadow-inner">
                    <p className="text-xl md:text-2xl font-mono text-cyan-300">
                        Δ% = <span className="inline-block align-middle"><span className="border-b border-slate-500 block px-2">V<sub>final</sub> - V<sub>initial</sub></span><span className="block px-2">| V<sub>initial</sub> |</span></span> × 100
                    </p>
                </div>

                <p>Let's deconstruct the variables:</p>
                <ul>
                    <li><strong>V<sub>final</sub> (New Value):</strong> The current data point, ending balance, or latest measurement.</li>
                    <li><strong>V<sub>initial</sub> (Old Value):</strong> The historical data point, starting balance, or baseline measurement.</li>
                    <li><strong>| V<sub>initial</sub> | (Absolute Value):</strong> The denominator must be the magnitude of the initial value. This is a subtle but critical rule in mathematics to ensure that the <em>direction</em> of the change (positive or negative) is preserved correctly when dealing with negative baselines (e.g., measuring debt reduction or temperature change).</li>
                </ul>
            </section>

            <section id="why-it-matters">
                <h2>3. The Psychology of Percentages</h2>
                <p>Humans are not naturally wired to understand large raw numbers intuitively. We are, however, excellent at understanding proportions. Percentages tap into this cognitive framework.</p>
                
                <h3>The Framing Effect</h3>
                <p>Consider two statements regarding a discount:</p>
                <ul>
                    <li><strong>Option A:</strong> "Save $50 on this laptop."</li>
                    <li><strong>Option B:</strong> "Save 5% on this laptop."</li>
                </ul>
                <p>If the laptop costs $1000, both are identical. However, if the item is a $100 pair of sneakers, "Save $50" represents a 50% cut. Marketing psychology relies heavily on choosing between the raw number or the percentage to maximize the perceived value. As a consumer or analyst, converting everything to percentage change acts as a shield against these psychological framing tricks.</p>
            </section>

            <section id="business-intelligence">
                <h2>4. Business Intelligence Applications</h2>
                <p>In the corporate world, "Growth" is the north star. Percentage change is the compass.</p>
                
                <h3>Key Performance Indicators (KPIs)</h3>
                <p>Every executive dashboard relies on these calculations:</p>
                <ul>
                    <li><strong>MoM (Month-over-Month):</strong> Critical for startups and fast-moving SaaS companies. It measures immediate traction.</li>
                    <li><strong>QoQ (Quarter-over-Quarter):</strong> The standard for public companies. It smoothes out monthly anomalies but is still sensitive to seasonal trends.</li>
                    <li><strong>YoY (Year-over-Year):</strong> The gold standard. Comparing Q4 2023 to Q4 2022 eliminates seasonal bias (e.g., holiday shopping spikes) to reveal true organic growth.</li>
                </ul>

                <h3>Margin Analysis</h3>
                <p>Gross margin and net profit margin are percentages by definition. Monitoring the <em>percentage change of the margin itself</em> is a second-order derivative analysis that can predict bankruptcy or breakout success years in advance.</p>
            </section>

            <section id="financial-markets">
                <h2>5. Financial Markets & Volatility</h2>
                <p>Stock tickers are perhaps the most visible application of this math.</p>
                <p>When you see "AAPL +2.5%", that is a percentage change calculation performed in real-time against the previous day's closing price. Volatility indices (like the VIX) essentially measure the standard deviation of these percentage changes.</p>
                
                <div className="bg-slate-800 p-4 rounded-lg border-l-4 border-yellow-500 my-4">
                    <strong>Investor Warning:</strong> A 50% loss requires a 100% gain to recover.
                    <br />
                    If a $100 stock drops 50% to $50, gaining 50% back only brings it to $75. You need to double your money ($50 to $100, a +100% change) just to break even. This asymmetry of percentage change is the mathematical reason why risk management is paramount in trading.
                </div>
            </section>

            <section id="advanced-scenarios">
                <h2>6. Advanced Scenarios: Negative Numbers</h2>
                <p>Things get tricky when the baseline is negative. Imagine a company had a loss of -$100,000 last year and a profit of $50,000 this year.</p>
                <p>Using the standard formula without absolute values: <code>(50,000 - (-100,000)) / -100,000 = 150,000 / -100,000 = -1.5 or -150%</code>.</p>
                <p>This result implies a decrease, which is logically false; the company improved massively. This is why we strictly use the absolute value in the denominator:</p>
                <p><code>(50,000 - (-100,000)) / |-100,000| = 150,000 / 100,000 = +1.5 or +150%</code>.</p>
                <p>This correctly indicates a 150% improvement in financial position.</p>
            </section>

            <section id="common-pitfalls">
                <h2>7. Common Pitfalls & Logical Fallacies</h2>
                <p>Even seasoned professionals make mistakes. Watch out for these:</p>
                
                <h3>Percentage Points vs. Percent</h3>
                <p>If a tax rate goes from 20% to 25%, did taxes go up 5%? <strong>No.</strong> They went up 5 <em>percentage points</em>. The actual percentage increase in the tax burden is <code>(25-20)/20 = 0.25</code> or <strong>25%</strong>.</p>
                
                <h3>The Base Rate Fallacy</h3>
                <p>Headlines often scream "Crime rates surge 100% in quiet town!" If the town had 1 crime last year and 2 this year, the 100% increase is statistically insignificant compared to a city where crime rose 5% from 10,000 to 10,500 incidents.</p>
            </section>

            <section id="real-world-examples">
                <h2>8. Real World Case Studies</h2>
                <div className="overflow-x-auto">
                    <table>
                        <thead>
                            <tr>
                                <th>Scenario</th>
                                <th>Start Value</th>
                                <th>End Value</th>
                                <th>Calculation</th>
                                <th>Result</th>
                                <th>Analysis</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Crypto Crash</td>
                                <td>$60,000</td>
                                <td>$20,000</td>
                                <td>(20k-60k)/60k</td>
                                <td className="text-red-400 font-bold">-66.67%</td>
                                <td>Severe bear market correction.</td>
                            </tr>
                            <tr>
                                <td>Startup Scaling</td>
                                <td>100 Users</td>
                                <td>500 Users</td>
                                <td>(500-100)/100</td>
                                <td className="text-green-400 font-bold">+400%</td>
                                <td>Explosive early-stage growth.</td>
                            </tr>
                            <tr>
                                <td>Inflation</td>
                                <td>$3.50 (Milk)</td>
                                <td>$3.75 (Milk)</td>
                                <td>(3.75-3.50)/3.50</td>
                                <td className="text-yellow-400 font-bold">+7.14%</td>
                                <td>High consumer price inflation impact.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="faq-section">
                <h2>9. Frequently Asked Questions (FAQ)</h2>
                <dl className="space-y-6">
                    <div>
                        <dt className="text-lg font-semibold text-cyan-300">What is the difference between percentage change and percentage difference?</dt>
                        <dd className="mt-2 text-slate-400">Percentage change measures the evolution of a single value over time (Start vs End). Percentage difference compares two separate values (e.g., height of Person A vs Person B) where neither is the "original," usually dividing the difference by the average of the two numbers.</dd>
                    </div>
                    <div>
                        <dt className="text-lg font-semibold text-cyan-300">Can percentage change be infinite?</dt>
                        <dd className="mt-2 text-slate-400">Mathematically, yes. If the starting value is 0 and the ending value is anything greater than 0, division by zero occurs. In business terms, we usually say the growth is "undefined" or "infinite" (e.g., going from $0 revenue to $1 revenue).</dd>
                    </div>
                    <div>
                        <dt className="text-lg font-semibold text-cyan-300">How do I calculate percentage change in Excel?</dt>
                        <dd className="mt-2 text-slate-400">In Excel, if A1 is your old value and B1 is your new value, the formula is <code>=(B1-A1)/ABS(A1)</code>. Then format the cell as a percentage.</dd>
                    </div>
                </dl>
            </section>
            
            <section id="conclusion">
                <h2>10. Conclusion</h2>
                <p>Percentage change is the scalpel of the data analyst. It slices through the noise of raw numbers to reveal the health, trajectory, and volatility of the subject matter.</p>
                <p>We built the <strong>doodax.com Percentage Change Calculator</strong> to provide you with an instant, error-free way to harness this power. However, the tool is only as good as the user. By understanding the concepts outlined in this guide—from the importance of the absolute value in the denominator to the psychological impact of relative metrics—you are now equipped to make smarter, data-driven decisions.</p>
                <p>Bookmark this page, share it with your colleagues, and never let a raw number mislead you again.</p>
            </section>
        </article>
    );
};
