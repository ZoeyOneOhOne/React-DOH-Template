import React, { Component } from 'react';
import './Style.css';

// export default class Contact extends Component {

//     render() {
//         return (
//             <main>
//                 <h1>If you have any questions or concerns please contact us.</h1>
        
//                 <form>
//                   <label>
//                     Name:
//                     <input type="text" name="name" />
//                   </label>
//                   <input type="submit" value="Submit" />
//                 </form>
//             </main>
//           );
//     }

// }

function Contact() {
    return (
      <main>
          <h1>If you have any questions or concerns feel free to contact us.</h1>
  
          <form>
            <label>
              Name:
              <input type="text" name="name" />
            </label>
            <input type="submit" value="Submit" />
          </form>
      </main>
    );
  }
  
  export default Contact;