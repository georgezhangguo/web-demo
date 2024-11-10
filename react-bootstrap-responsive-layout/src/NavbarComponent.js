/**
 * Created by George on 2024/11/10.
 */
import React from 'react';
import {Navbar, Nav, Container, NavbarBrand, NavbarToggle, NavbarCollapse, NavLink} from 'react-bootstrap';

const NavbarComponent = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <NavbarBrand href="#">品牌名称</NavbarBrand>
                <NavbarToggle aria-controls="basic-navbar-nav"/>
                <NavbarCollapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <NavLink href="#">首页</NavLink>
                        <NavLink href="#">产品</NavLink>
                        <NavLink href="#">服务</NavLink>
                        <NavLink href="#">联系我们</NavLink>
                    </Nav>
                </NavbarCollapse>
            </Container>
        </Navbar>
    );
};

export default NavbarComponent;