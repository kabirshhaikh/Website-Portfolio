import "./Header.css";
import { Link } from "react-scroll";

const Header = () => {
  const title = [
    {
      id: 1,
      name: "Intro",
    },
    {
      id: 2,
      name: "Project",
    },
    {
      id: 3,
      name: "Contact",
    },
  ];

  return (
    <div className="header-container">
      <nav className="header-navbar">
        <div className="navbar-heading">
          <h2>Kabir's Portfolio Website</h2>
        </div>
        <ul>
          {title.map((menu) => (
            <li>
              <Link to={menu.name} smooth={true} offset={85} duration={500}>
                {menu.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Header;
