import { useState, useEffect } from 'react';

function CookieConsent() {
    const [visible, setVisible] = useState(false);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('cookie-consent');
        if (!consent) {
            setVisible(true);
            // 稍微延遲觸發 CSS transition，確保 DOM 已渲染
            requestAnimationFrame(() => {
                requestAnimationFrame(() => setShow(true));
            });
        }
    }, []);

    const handleConsent = (value) => {
        setShow(false);
        setTimeout(() => {
            localStorage.setItem('cookie-consent', value);
            setVisible(false);
        }, 400);
    };

    if (!visible) return null;

    return (
        <div className={`cookie-consent${show ? ' cookie-consent--visible' : ''}`}>
            <div className="cookie-consent__content">
                <p className="cookie-consent__text">
                    🍪 我們使用 Cookie 來改善您的瀏覽體驗、分析網站流量及個人化內容。繼續使用即表示您同意我們的隱私政策。
                </p>
                <div className="cookie-consent__actions">
                    <button
                        className="btn btn--sm btn--outline"
                        onClick={() => handleConsent('declined')}
                    >
                        僅必要
                    </button>
                    <button
                        className="btn btn--sm btn--primary"
                        onClick={() => handleConsent('accepted')}
                    >
                        接受全部
                    </button>
                </div>
            </div>
        </div>
    );
}

export default CookieConsent;
