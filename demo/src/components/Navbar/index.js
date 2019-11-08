import React from "react";
import { Menu, Icon } from "antd";
import {Link} from "react-router-dom";
const { SubMenu } = Menu;

class Navbar extends React.Component {
    handleClick = (event) => {
        console.log(event.key);

    };

    render() {
        return (
            <Menu
                onClick={this.handleClick}
                style={{ width: 256 }}
                defaultSelectedKeys={['0']}
                mode="inline"
            >
                <SubMenu
                    key="sub1"
                    title={
                        <span>
                            <Icon type="mail" />
                            <span>Navbar</span>
                        </span>
                    }
                >
                    <Menu.Item key="/">Home
                    <Link to = "/"></Link>
                    </Menu.Item>
                    <Menu.Item key="/profile">Profile
                    <Link to = "/profile"></Link>
                    </Menu.Item>
                    <Menu.Item key="/create">Create
                    <Link to = "/create"></Link>
                    </Menu.Item>
                </SubMenu>
            </Menu>
        )
    }
}

export default Navbar;

