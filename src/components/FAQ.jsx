import { useState } from 'react';
import { faqs } from '../data/faq';

function FAQ() {
    const [openId, setOpenId] = useState(null);

    const toggle = (id) => {
        setOpenId((prev) => (prev === id ? null : id));
    };

    return (
        <section className="faq" id="faq">
            <div className="container">
                <div className="section-header">
                    <span className="section-header__badge">常見問題</span>
                    <h2 className="section-header__title">你可能想知道的事</h2>
                    <p className="section-header__desc">
                        找不到答案？歡迎直接聯繫我們的支援團隊，我們將在一個工作日內回覆。
                    </p>
                </div>

                <div className="faq__list">
                    {faqs.map((item) => {
                        const isOpen = openId === item.id;
                        return (
                            <div
                                key={item.id}
                                className={`faq__item${isOpen ? ' faq__item--open' : ''}`}
                            >
                                <button
                                    className="faq__question"
                                    onClick={() => toggle(item.id)}
                                    aria-expanded={isOpen}
                                >
                                    <span>{item.question}</span>
                                    <span className="faq__icon" aria-hidden="true">
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 20 20"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                d="M5 7.5L10 12.5L15 7.5"
                                                stroke="currentColor"
                                                strokeWidth="1.8"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </span>
                                </button>
                                <div className="faq__answer-wrapper">
                                    <div className="faq__answer">
                                        <p>{item.answer}</p>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}

export default FAQ;
