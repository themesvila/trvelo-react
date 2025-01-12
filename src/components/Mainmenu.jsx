import React, { Component } from 'react'
import { Link } from "react-router-dom";
import menu_data from "../demodata/menu_data";


export class Mainmenu extends Component {
  render() {
    return (
      <div>
        <ul>
            {menu_data.map((item, i) => (
                <li key={i} className={`${item.has_dropdown && "menu-item-has-children"}`}>
                    <Link to={item.link}>{item.title}</Link>
                    {item.has_dropdown &&
                    <ul className="sub-menu">
                        {item.sub_menus?.map((sub_menu, index) => (
                        <li key={index}><Link to={sub_menu.link}>{sub_menu.title}</Link></li>
                        ))}
                    </ul>
                    }
                </li>
            ))} 
        </ul> 
      </div>
    )
  }
}

export default Mainmenu