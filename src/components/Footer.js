import twlogo from '../assets/images/logos/twlogo.svg';
import iglogo from '../assets/images/logos/iglogo.svg';
import fblogo from '../assets/images/logos/fblogo.svg';

const Footer = () => {
    return(
    <footer class="bg-black d-flex flex-wrap justify-content-between align-items-center borde-top mt-5">
    <div class="col-md-4 d-flex align-items-center">
        <img class="mx-2" src={require("../assets/images/logos/deerlogo.png")} alt="deer crypto" width="40" height="40" />
      <span>© 2022 DeerCrypto</span>
    </div>
    <ul class="nav col-md-4 justify-content-center list-unstyled d-flex">
      <li class="mx-3"><a class="text-muted" href="https://twitter.com/" target="_blank"><img class="bi" src={twlogo} width="25" height="25"/></a></li>
      <li class="mx-3"><a class="text-muted" href="https://instagram.com/" target="_blank"><img class="bi" src={iglogo} width="25" height="25"/></a></li>
      <li class="mx-3"><a class="text-muted" href="https://facebook.com/" target="_blank"><img class="bi" src={fblogo} width="25" height="25"/></a></li>
    </ul>
  </footer>
  );
}
export default Footer;