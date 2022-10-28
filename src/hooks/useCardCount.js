import { useState } from 'react';

function useCardCount(CARD_COUNT, CARD_BREAKPOINT) {
  const [countAddCards, setCountAddCards] = useState(0);
  const [startCountCards, setStartCountCards] = useState(0);

  function setParamsCountCards(mode) {
    const deviceWidth = document.documentElement.clientWidth;
    const isUpdate = mode === 'all';

    const middleDevice =
      deviceWidth <= CARD_BREAKPOINT.TWO && deviceWidth > CARD_BREAKPOINT.ONE;
    const smallDevice =
      deviceWidth <= CARD_BREAKPOINT.ONE && deviceWidth >= 320;

    if (middleDevice) {
      setCountAddCards(CARD_COUNT.MIDDLE_DEVICE.ADD);
      if (isUpdate) setStartCountCards(CARD_COUNT.MIDDLE_DEVICE.START);
    } else if (smallDevice) {
      setCountAddCards(CARD_COUNT.SMALL_DEVICE.ADD);
      if (isUpdate) setStartCountCards(CARD_COUNT.SMALL_DEVICE.START);
    } else {
      setCountAddCards(CARD_COUNT.BIG_DEVICE.ADD);
      if (isUpdate) setStartCountCards(CARD_COUNT.BIG_DEVICE.START);
    }
  }
  return { countAddCards, startCountCards, setParamsCountCards };
}

export default useCardCount;
