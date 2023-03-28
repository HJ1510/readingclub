import "assets/css/layout/Layout.css";

function Footer() {

  return (

    <div class="container" style={{backgroundColor:"black"}}>
    <footer class="py-3 my-4" >
      <ul class="nav justify-content-center border-bottom pb-3 mb-3" style={{marginTop:"150px",fontSize:"1.5em",fontWeight:"bolder" }}>
        <a class="nav-item"><a href="#" class="nav-link px-2 text-muted" style={{color:" #fefbf3"}}>Home</a></a>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">Meeting</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">MyNote</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link px-2 text-muted">About</a></li>
      </ul>
      <p class="text-center text-muted">&copy; 2023 Gobook, Inc</p>
    </footer>
  </div>
  );
}
export default Footer;