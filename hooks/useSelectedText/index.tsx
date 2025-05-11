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

  const isSelectionInTarget = useCallback((): boolean => {
    const selection = document.getSelection() as Selection | null;

    if ( ! selection?.rangeCount || ! targetRef?.current ) {
      return false;
    }

    const range: Range = selection.getRangeAt( 0 );

    return (
      targetRef.current.contains( range.startContainer ) &&
      targetRef.current.contains( range.endContainer )
    );
  }, [targetRef]);

  /**
   * On Selection.
   *
   * Get the selected text range and
   * populate the state.
   *
   * @return {void}
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
}

export default useSelectedText;
