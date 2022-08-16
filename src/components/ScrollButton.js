import { useState } from 'react';

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };
  window.addEventListener('scroll', toggleVisible);

  return (
    <button
      className="scrollup__link"
      aria-label="Scroll up"
      onClick={scrollToTop}
      style={{ display: visible ? 'inline' : 'none' }}
    >
      <i aria-hidden="true" className="fas fa-arrow-up"></i>
    </button>
  );
};

export default ScrollButton;
