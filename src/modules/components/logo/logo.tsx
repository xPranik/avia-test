import { LogoIcon } from "@/shared/icons";
const styles = require("./logo.module.scss");

const Logo = () => {
  return (
    <a href="#" className={styles.logo}>
      <LogoIcon />
    </a>
  );
};

export default Logo;
