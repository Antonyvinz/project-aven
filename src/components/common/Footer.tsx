import { Col, Row, Tag } from "antd";
import {
    TwitterOutlined, YoutubeOutlined, FacebookOutlined, GooglePlusOutlined,
} from '@ant-design/icons';


function AppFooter() {
    return (
        <div className="App-Footer">
            <Row justify="space-between">
                <Col>
                    <h3>Copyright Aven - Creative Template 2014</h3>
                </Col>
                <Col>
                    <div className="social-media-footer">
                        <Tag icon={<FacebookOutlined />} />
                        <Tag icon={<TwitterOutlined />} />
                        <Tag icon={<GooglePlusOutlined />} />
                        <Tag icon={<YoutubeOutlined />} />
                    </div>
                </Col>
            </Row>
        </div>
    );
}

export default AppFooter;