import React, { useState, useEffect } from 'react';

const TypingEffect = ({ texts, speed = 100, eraseSpeed = 50, delay = 2000 }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let typingTimeout;

    if (isDeleting) {
      typingTimeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length - 1));
        if (displayedText === '') {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }, eraseSpeed);
    } else {
      typingTimeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, displayedText.length + 1));
        if (displayedText === currentText) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      }, speed);
    }

    return () => clearTimeout(typingTimeout);
  }, [displayedText, isDeleting, textIndex, texts, speed, eraseSpeed, delay]);

  return (
    <span>
      {displayedText}
      <span className="text-[#8245ec]">|</span>
    </span>
  );
};

export default TypingEffect;
