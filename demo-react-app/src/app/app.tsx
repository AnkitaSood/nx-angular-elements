import * as React from 'react';

export function App() {
  const title = 'reactapp';
  const label = 'Angular Button';
  return (
    <div>
      <div style={{ textAlign: 'center' }}>
        {React.createElement('simple-greeting-comp', { title })}
        {React.createElement('angular-button', {label})}
        {React.createElement('angular-greetings')}
      </div>
    </div>
  );
}
