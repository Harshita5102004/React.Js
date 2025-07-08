import React from 'react';

// Higher-Order Component
function withLogger(WrappedComponent) {
  return function LoggedComponent(props) {
    console.log("Props passed:", props);
    return <WrappedComponent {...props} />;
  };
}

// Simple Component
function Hello({ name }) {
  return <h2>Hello, {name}!</h2>;
}

// Wrapped Component
const HelloWithLogger = withLogger(Hello);

// Main App Component
export default function  WEithLogger() {
  return (
    <div style={{ padding: '20px' }}>
      <HelloWithLogger name="Harshita" />
    </div>
  );
}
