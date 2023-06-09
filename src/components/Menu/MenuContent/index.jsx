import React, { useContext } from "react";
import { GitHub, Instagram, Linkedin, Mail, Twitter } from "react-feather";
import "./style.scss";
import { MenuContext } from "../MenuManager";
import cn from "classnames";
//import Reddit from "../../../images/reddit.png"
import { Link } from "react-router-dom";

const internalLinks = [
  {
    url: "/",
    component: <span>Home</span>,
  },
  {
    url: "#2",
    component: <span>Resume</span>,
  },
  {
    url: "/aboutme",
    component: <span>About Me</span>,
  },
  {
    url: "/collab",
    component: <span>Collab</span>,
  },
];

const externalLinks = [
  {
    url: "https://www.instagram.com/d_j_saru/",
    component: <Instagram />,
  },
  {
    url: "https://www.linkedin.com/in/sarang-jaybhaye-453080233/",
    component: <Linkedin />,
  },
  {
    url: "https://twitter.com/D_J_Saru",
    component: <Twitter />,
  },
  {
    url: "https://github.com/DJsaru",
    component: <GitHub />,
  },
  {
    url: "mailto:smartysarangdj@gmail.com",
    component: <Mail />,
  },
];

const MenuContent = () => {
  const { open, setOpen } = useContext(MenuContext);

  return (
    <div className="menu-holder">
      <div className={cn("menu-inside", { open })}>
        <div className="menu-nav-container">
          <ul className="internal-nav-links">
            {internalLinks.map((link) => {
              return (
                <>
                  <li key={link.url}>
                    <Link
                      to={link.url}
                      onClick={() => setOpen(!open)}
                      key={link.url}
                    >
                      {link.component}
                    </Link>
                  </li>
                </>
              );
            })}
          </ul>
          <ul className="external-nav-links">

            {externalLinks.map((link) => (
              <li key={link.url}>
                <a target="_blank" rel="noreferrer" href={link.url} key={link.url}>
                  {link.component}
                </a>
              </li>
            ))}


          </ul>
        </div>
      </div>
    </div>
  );
};

export default MenuContent;
