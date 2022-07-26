/* eslint-disable max-len */
import {
  FocusEvent, MouseEvent, useCallback, useState,
} from 'react';

/**
 * Use for display or hide tooltip.
 * If ellipsis CSS applied for the text tooltip would be displayed.
 * @property {Boolean} isOpen applies for Tooltip component for 'open' property
 * @property {Function.prototype} onShowTooltip applies to wrapped by Tooltip element for 'onMouseOver' event
 * @property {Function.prototype} onHideTooltip applies to wrapped by Tooltip element for 'onMouseOut' event
 * @return {{isOpen: Boolean, onShowTooltip:onShowTooltip, onHideTooltip:onHideTooltip}}
 */
const useTooltip = (): {
  isOpen: boolean;
  onShowTooltip: (event: MouseEvent | FocusEvent) => void;
  onHideTooltip: () => void;
} => {
  const [isOpen, setIsOpen] = useState(false);

  /**
      * @param {{MouseEvent}} event MouseEvent
     */
  const onShowTooltip = useCallback((event) => {
    if (event.currentTarget.offsetWidth < event.currentTarget.scrollWidth) {
      setIsOpen(true);
    } else setIsOpen(false);
  }, []);

  const onHideTooltip = useCallback(() => setIsOpen(false), []);

  return {
    isOpen,
    onShowTooltip,
    onHideTooltip,
  };
};

export default useTooltip;
