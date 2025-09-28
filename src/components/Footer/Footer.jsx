import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">
      <p className="footer__text">
        © {new Date().getFullYear()} Grim Gateway of Ebonmane Ink Creative
        Studios and Jordan Campbell. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;
