import "assets/css/layout/Layout.css";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";

function Navigation() {
  const handleMouseEnter = (e) => {
    e.target.querySelector("::before").style.width = "100%";
  };

  const handleMouseLeave = (e) => {
    e.target.querySelector("::before").style.width = "0%";
  };

  return (
    <header className="site-header">
      <div className="container">
        <nav>
          <ul className="nav-menu">
            <li>
              <a
                href="/"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Home
              </a>
            </li>
            <li>
              <Link
                to={"/meeting"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Meeting
              </Link>
            </li>
            <li>
              <Link
                to={"/booknote"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                booknote
              </Link>
            </li>
            <li>
              <Link
                to={"/community"}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                Community
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <Link
            to={"/login"}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            Login-in
          </Link>
        </div>
      </div>
    </header>
    // <ul className="Navigation">
    //   <li>
    //
    //     <Link to={"/booknote"}>
    //       <Button className="Header-button" variant="secondary">
    //         NOTE
    //       </Button>
    //     </Link>
    //     <Link to={"/community"}>
    //       <Button className="Header-button" variant="secondary">
    //         COMMUNITY
    //       </Button>
    //     </Link>
    //   </li>
    //   <div className="LoginJoin">
    //     <Link to="/login" style={{ textDecoration: "none" }}>
    //       Login-in
    //     </Link>
    //   </div>
    // </ul>
  );
}

export default Navigation;

// import React, { Component } from "react";

// class Header extends Component {
//   handleMouseEnter = (e) => {
//     e.target.querySelector("::before").style.width = "100%";
//   };

//   handleMouseLeave = (e) => {
//     e.target.querySelector("::before").style.width = "0";
//   };

//   render() {
//     return (
//       <header className="site-header">
//         <div className="container">
//           <a className="logo" href="/">
//             Lee Hwaik Gallery
//           </a>
//           <nav>
//             <ul className="nav-menu">
//               <li>
//                 <a
//                   href="/"
//                   onMouseEnter={handleMouseEnter}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   Home
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/about"
//                   onMouseEnter={handleMouseEnter}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/services"
//                   onMouseEnter={handleMouseEnter}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/gallery"
//                   onMouseEnter={handleMouseEnter}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   Gallery
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="/contact"
//                   onMouseEnter={handleMouseEnter}
//                   onMouseLeave={handleMouseLeave}
//                 >
//                   Contact
//                 </a>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </header>
//     );
//   }
// }
