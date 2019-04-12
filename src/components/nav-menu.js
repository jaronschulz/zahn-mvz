import React from "react"
import { Link } from "gatsby"

const menuItems = [
  {
    name: "treatment",
    slag: "/treatment/",
    id: 1,
  },
  {
    name: "das team",
    slag: "/team/",
    id: 2,
  },
  {
    name: "ablauf",
    slag: "/process/",
    id: 3,
  },
  {
    name: "dokumente",
    slag: "/docs/",
    id: 4,
  },
  {
    name: "anfahrt",
    slag: "/location/",
    id: 5,
  },
  {
    name: "kontakt",
    slag: "/contacts/",
    id: 6,
  },
  {
    name: "impressum",
    slag: "/imprint/",
    id: 7,
  },
  {
    name: "datenschutz",
    slag: "/data-protection/",
    id: 8,
  },
]
const NavMenu = () => (
  <nav>
    <button>
      <h1>MENU</h1>
    </button>
    <ul>
      {menuItems.map(({ name, id, slag }) => (
        <li>
          <Link key={id} to={slag}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  </nav>
)

export default NavMenu
