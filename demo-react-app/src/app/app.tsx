import * as React from 'react';
import { useEffect } from 'react';

export function App() {
  const title = 'reactapp';

  useEffect(() => {
    if (!customElements.get('simple-greeting-comp')) {
      console.warn('Custom element simple-greeting-comp is not defined.');
    }
  }, []);

  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        {React.createElement('simple-greeting-comp', { title })}
        {React.createElement('angular-button')}
      </div>
    </div>
  );
}
