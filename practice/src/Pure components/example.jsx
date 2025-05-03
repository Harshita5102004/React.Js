import React, { PureComponent, useState } from 'react';

// PureComponent (class-based)
class Greeting extends PureComponent {
  render() {
    console.log("Greeting was rendered at", new Date().toLocaleTimeString());
    
    return (
      <h3>
        Hello{this.props.name ? `, ${this.props.name}` : ''}!
       
      </h3>
    );
  }
}

class Greetig extends PureComponent {
  render() {
    console.log("Address was rendered at", new Date().toLocaleTimeString());
    
    return (
      <h3>
        address{this.props.address ? `, ${this.props.address}` : ''}!
       
      </h3>
    );
  }
}

export default function PureComponents() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');

  return (
    <div style={{ padding: '20px' }}>
      <div>
        <label>
          Name:{' '}
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Address:{' '}
          <input
            type="text"
            value={address}
            onChange={e => setAddress(e.target.value)}
          />
        </label>
      </div>
      <Greeting name={name} />
      <Greetig address={address} />
      {/* <p> address is: {address}</p>
      */}
    </div>
  );
}




// import React, { useState, memo } from 'react';

// const Greeting = memo(({ name }) => {
//   console.log("Greeting was rendered at", new Date().toLocaleTimeString());

//   return (
//     <h3>
//       Hello{name ? `, ${name}` : ''}!
//     </h3>
//   );
// });

// const Address = memo(({ address }) => {
//   console.log("Address was rendered at", new Date().toLocaleTimeString());

//   return (
//     <h3>
//       Address{address ? `, ${address}` : ''}!
//     </h3>
//   );
// });

// export default function PureComponents() {
//   const [name, setName] = useState('');
//   const [address, setAddress] = useState('');

//   return (
//     <div style={{ padding: '20px' }}>
//       <div>
//         <label>
//           Name:{' '}
//           <input
//             type="text"
//             value={name}
//             onChange={e => setName(e.target.value)}
//           />
//         </label>
//       </div>
//       <div>
//         <label>
//           Address:{' '}
//           <input
//             type="text"
//             value={address}
//             onChange={e => setAddress(e.target.value)}
//           />
//         </label>
//       </div>
//       <Greeting name={name} />
//       <Address address={address} />
//     </div>
//   );
// }
