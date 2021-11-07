import s from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={s.footer}>
      <p className={s.text}>
        &copy; {new Date().getFullYear()} Trending movies
      </p>
    </footer>
  );
};

export default Footer;
