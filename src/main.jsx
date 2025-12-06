import React from 'react';
import ReactDOM from 'react-dom/client';
import App from '@/App';
import '@/index.css';

// Scroll to top immediately on page load
window.scrollTo(0, 0);
document.documentElement.scrollTop = 0;
document.body.scrollTop = 0;

// Custom event listener for showing toasts
window.addEventListener('show-toast', (event) => {
  const { title, description } = event.detail;
  // This assumes `useToast` will be used within a component rendered by ReactDOM.
  // For a global event, `useToast` won't be directly accessible here.
  // A common pattern is to trigger a state update in a parent component
  // that uses `useToast`, or pass the `toast` function down.
  // For this context, we assume `Toaster` component in App.jsx will catch this via its own mechanism.
  // (In a real app, you might use a global state management or context for toasts)
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <App />
);