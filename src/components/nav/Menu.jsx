import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Menu() {
  const { t } = useTranslation();
  const location = useLocation();

  const linkClass = (path) =>
    `relative md:text-2xl text-lg font-medium text-white px-4 py-2 ${
      location.pathname === path
        ? "before:absolute before:top-0 before:left-0 before:right-0 before:h-[2px] before:bg-white after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-white"
        : ""
    }`;

  return (
    <div className="w-full bg-[#297da9] px-4 py-4">
      <div className="mx-auto flex max-w-[800px] justify-center gap-10">
        <Link className={linkClass("/")} to="/">
          {t("menu.home")}
        </Link>
        <Link className={linkClass("/tours")} to="/tours">
          {t("menu.tours")}
        </Link>
        <Link className={linkClass("/contact")} to="/contact">
          {t("menu.contact")}
        </Link>
      </div>
    </div>
  );
}

export default Menu;
