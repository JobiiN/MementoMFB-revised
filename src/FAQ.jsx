import { useState, useEffect } from 'react'

import './FAQ.css';
import { ChevronUp } from 'lucide-react';
import { ChevronDown } from 'lucide-react';

/*
function FAQ() {

    const [questOpen, setquestOpen] = useState(false)
    const [quest2Open, setquest2Open] = useState(false)
    const [quest3Open, setquest3Open] = useState(false)
    const [quest4Open, setquest4Open] = useState(false)
    const [quest5Open, setquest5Open] = useState(false)

    return (
        <>
            <div className='FAQ'>
                <span className='little-title'>FAQs</span>
                <h2 className='big-title'>Frequently Asked Questions</h2>

                <div className='qcon'>
                    <div className='mqcon'>
                        <p className="question">Who owns Memento Microfinance Bank?</p>
                        <div className={`up ${questOpen ? 'up--open' : ''}`}
                            onClick={() => setquestOpen(!questOpen)}>
                            {questOpen ? <ChevronUp /> : <ChevronDown />}
                        </div>
                    </div>
                    <p className={`answer ${questOpen ? 'answer--open' : ''}`}>Memento Microfinance Bank Limited is a subsidiary of Paga Group Ltd, a company incorporated in the United Kingdom. Paga Group Ltd owns the Memento brand and associated trademarks, which are licensed for use by its subsidiaries.
                        As part of the Paga Group, Memento supports the Group’s broader objective of expanding access to regulated financial services through technology, partnerships and embedded finance.</p>
                </div>

                <div className='qcon'>
                    <div className='mqcon'>
                        <p className="question">What type of banking licence does Memento hold?</p>
                        <div className={`up ${quest2Open ? 'up--open' : ''}`}
                            onClick={() => setquest2Open(!quest2Open)}>
                            {quest2Open ? <ChevronUp /> : <ChevronDown />}
                        </div>
                    </div>
                    <p className={`answer ${quest2Open ? 'answer2--open' : ''}`}>Memento is licensed by the Central Bank of Nigeria as a Tier 1 Unit Microfinance Bank.
                        This licence permits Memento to provide approved microfinance banking services in Nigeria, subject to the operating limits, geographic scope and regulatory requirements applicable to its licence category.
                        Memento operates under the supervision of the Central Bank of Nigeria and in accordance with applicable banking, consumer protection, anti-money laundering and data protection requirements.</p>
                </div>

                <div className='qcon'>
                    <div className='mqcon'>
                        <p className="question"> Are deposits with Memento insured?</p>
                        <div className={`up ${quest3Open ? 'up--open' : ''}`}
                            onClick={() => setquest3Open(!quest3Open)}>
                            {quest3Open ? <ChevronUp /> : <ChevronDown />}
                        </div>
                    </div>
                    <p className={`answer ${quest3Open ? 'answer3--open' : ''}`}>Yes. Memento is insured by the Nigeria Deposit Insurance Corporation.
                        Eligible deposits held with Memento are protected by the NDIC, subject to the applicable coverage limits, conditions and regulations established by the NDIC.</p>
                </div>

                <div className='qcon'>
                    <div className='mqcon'>
                        <p className="question"> What services does Memento provide?</p>
                        <div className={`up ${quest4Open ? 'up--open' : ''}`}
                            onClick={() => setquest4Open(!quest4Open)}>
                            {quest4Open ? <ChevronUp /> : <ChevronDown />}
                        </div>
                    </div>
                    <p className={`answer ${quest4Open ? 'answer4--open' : ''}`}>Memento provides regulated microfinance banking services to individuals, entrepreneurs and small businesses.
                        These services may include:
                        <ul>
                            <li>Savings and deposit products.</li>
                            <li>Business and personal accounts.</li>
                            <li>Credit and working-capital facilities.</li>
                            <li>Payment and collection services.</li>
                            <li>Financial products delivered through approved partners and Paga Group platforms.</li>
                            <li>Embedded financial services that allow eligible partners to offer Memento-powered financial products within their own platforms and customer journeys.</li>
                            <li>The availability of each service is subject to eligibility requirements, regulatory approval and Memento’s applicable policies.</li>
                        </ul>
                    </p>
                </div >

                <div className='qcon'>
                    <div className='mqcon'>
                        <p className="question">What is the history and role of Memento within the Paga Group?</p>
                        <div className={`up ${quest5Open ? 'up--open' : ''}`}
                            onClick={() => setquest5Open(!quest5Open)}>
                            {quest5Open ? <ChevronUp /> : <ChevronDown />}
                        </div>
                    </div>
                    <p className={`answer ${quest5Open ? 'answer5--open' : ''}`}>Memento was established as a licensed microfinance bank in Nigeria and is a part of the Paga Group.
                        Within the Group, Memento provides the regulated banking capabilities required to offer savings, credit and related financial services. It works alongside other Paga Group businesses and platforms to support individuals, small businesses and partners.
                        Memento’s role is primarily to provide secure, compliant and technology-enabled financial services, including services that may be embedded within products operated by other members of the Paga Group or approved third-party partners.</p>
                </div>
            </div>


        </>
    );

*/
function FAQ() {
const faqs = [
    { q: "Who owns Memento Microfinance Bank?", a: "Memento Microfinance Bank Limited is a subsidiary of Paga Group Ltd, a company incorporated in the United Kingdom. Paga Group Ltd owns the Memento brand and associated trademarks, which are licensed for use by its subsidiaries. As part of the Paga Group, Memento supports the Group’s broader objective of expanding access to regulated financial services through technology, partnerships and embedded finance." },
    { q: "What type of banking licence does Memento hold?", a: "Memento is licensed by the Central Bank of Nigeria as a Tier 1 Unit Microfinance Bank. This licence permits Memento to provide approved microfinance banking services in Nigeria, subject to the operating limits, geographic scope and regulatory requirements applicable to its licence category. Memento operates under the supervision of the Central Bank of Nigeria and in accordance with applicable banking, consumer protection, anti-money laundering and data protection requirements." },
    { q: "Are deposits with Memento insured?", a: "Yes. Memento is insured by the Nigeria Deposit Insurance Corporation. Eligible deposits held with Memento are protected by the NDIC, subject to the applicable coverage limits, conditions and regulations established by the NDIC." },
    {
        q: "What services does Memento provide?",
        a: (
            <>
                Memento provides regulated microfinance banking services to individuals, entrepreneurs and small businesses.
                These services may include:
                <ul>
                    <li>Savings and deposit products.</li>
                    <li>Business and personal accounts.</li>
                    <li>Credit and working-capital facilities.</li>
                    <li>Payment and collection services.</li>
                    <li>Financial products delivered through approved partners and Paga Group platforms.</li>
                    <li>Embedded financial services that allow eligible partners to offer Memento-powered financial products within their own platforms and customer journeys.</li>
                </ul>
                The availability of each service is subject to eligibility requirements, regulatory approval and Memento's applicable policies.
            </>
        )
    },
    { q: "What is the history and role of Memento within the Paga Group?", a: "Memento was established as a licensed microfinance bank in Nigeria and is a part of the Paga Group. Within the Group, Memento provides the regulated banking capabilities required to offer savings, credit and related financial services. It works alongside other Paga Group businesses and platforms to support individuals, small businesses and partners. Memento’s role is primarily to provide secure, compliant and technology-enabled financial services, including services that may be embedded within products operated by other members of the Paga Group or approved third-party partners." }
];



    const [openIndex, setOpenIndex] = useState(null);

    return (
        <>
            <div className='FAQ'>
                <span className='little-title'>FAQs</span>
                <h2 className='big-title'>Frequently Asked Questions</h2>

                {faqs.map((faq, i) => {
                    const isOpen = openIndex === i;
                    return (
                        <div className="qcon" key={i}>
                            <div className="mqcon" onClick={() => setOpenIndex(isOpen ? null : i)}>
                                <p className="question">{faq.q}</p>
                                <div className={`up ${isOpen ? 'up--open' : ''}`}>
                                    {isOpen ? <ChevronUp /> : <ChevronDown />}
                                </div>
                            </div>
                            <div className={`answer ${isOpen ? 'answer--open' : ''}`}>{faq.a}</div>
                        </div>
                    );
                })}


            </div>
        </>
    );
}

export default FAQ;