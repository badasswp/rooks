import { useEffect, useState, useCallback } from 'react';

/**
 * useSelectedText Hook.
 *
 * This hook is used to track the
 * selected text.
 *
 * @param {React.RefObject<HTMLElement>} targetRef - The element to track selection in.
 * @returns string The selected text.
 */
const useSelectedText = (targetRef?: React.RefObject<HTMLElement>): string => {
  const [selectedText, setSelectedText] = useState('');

  /**
   * Determines whether the current text selection
   * is entirely within the target element.
   *
   * If the selection starts and ends within the target element;
   * return `true`, otherwise, `false`.
   *
   * @returns {boolean}
   */
  const isSelectionInTarget = useCallback((): boolean => {
    const selection = document.getSelection() as Selection | null;

    if (!selection?.rangeCount || !targetRef?.current) {
      return false;
    }

    const range: Range = selection.getRangeAt(0);

    return (
      targetRef.current.contains(range.startContainer) &&
      targetRef.current.contains(range.endContainer)
    );
  }, [targetRef]);

  /**
   * Handles text selection logic.
   *
   * Grabs the currently selected text and updates
   * state based on whether the selection is within
   * the target element.
   *
   * @returns {void}
   */
  const handleSelection = useCallback((): void => {
    const selectedString: string = document.getSelection()?.toString() || '';

    if (targetRef?.current) {
      setSelectedText(isSelectionInTarget() ? selectedString : '');
      return;
    }

    setSelectedText(selectedString);
  }, [isSelectionInTarget, targetRef]);

  useEffect(() => {
    document.addEventListener('selectionchange', handleSelection);

    return () => {
      document.removeEventListener('selectionchange', handleSelection);
    };
  }, [handleSelection]);

  return selectedText;
};

export default useSelectedText;
