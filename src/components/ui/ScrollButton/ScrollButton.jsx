import { useState } from 'react';

import './ScrollButton.scss';

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

  // TODO: use effect
  window.addEventListener('scroll', toggleVisible);

  return (
    <button
      aria-label="Scroll up"
      className="scrollup__link"
      onClick={scrollToTop}
      style={{ display: visible ? 'inline' : 'none' }}
    >
      <i aria-hidden="true" className="fas fa-arrow-up" />
    </button>
  );
}

export default ScrollButton;
