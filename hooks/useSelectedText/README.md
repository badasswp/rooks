# useSelectedText

The `useSelectedText` hook is a custom React hook that helps you track the selected text by the user.

## How To Use

```js
import type { JSX } from 'react';

import { useSelectedText } from '@badasswp/rooks';

/**
 * SelectedText component.
 *
 * This component is used to demonstrate
 * the use of the useSelectedText hook.
 *
 * @returns {JSX.Element} The SelectedText component.
 */
const SelectedText = (): JSX.Element => {
  const selectedText = useSelectedText();

  return (
    <section>
      <p>{selectedText || `Nothing Selected.`}</p>
      <div>Qui et duis eu esse anim culpa. Elit officia et voluptate aute sint est laboris consequat do adipisicing culpa adipisicing ad. Excepteur sint minim enim duis culpa quis non voluptate. Sint nulla consectetur et eu. Pariatur et laboris amet officia tempor est tempor irure elit anim ad exercitation velit amet cillum. Sunt adipisicing ea voluptate magna aute et. Est fugiat ea aute culpa reprehenderit. Duis consequat minim cupidatat eiusmod mollit eu sit aliqua consequat dolore.</div>
    </section>
  );
}

export default SelectedText;
```
