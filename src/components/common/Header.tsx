import { Col, Row, Menu } from "antd";

function AppHeader() {
    return (
        <div className="App-Header">
            <Row justify="space-between">
                <Col>
                    Aven Creative Template
                </Col>
                <Col>
                    <Menu mode="horizontal">
                        <Menu.Item>HOME</Menu.Item>
                        <Menu.Item>ABOUT</Menu.Item>
                        <Menu.Item>TEAM</Menu.Item>
                        <Menu.Item>SERVICES</Menu.Item>
                        <Menu.Item>PRICINGS</Menu.Item>
                        <Menu.Item>PORTFOLIO</Menu.Item>
                        <Menu.Item>CONTACT</Menu.Item>
                    </Menu>
                </Col>
            </Row>

        </div>
    );

}

export default AppHeader;