import { useState } from 'react';

function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 500) {
      setVisible(true);
    } else if (scrolled <= 500) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);
  return (
    <button
      className="scrollup__link"
      aria-label="Scroll up"
      onClick={scrollToTop}
      style={{ display: visible ? 'inline' : 'none' }}
    >
      <i aria-hidden="true" className="fas fa-arrow-up" />
    </button>
  );
}

export default ScrollButton;
