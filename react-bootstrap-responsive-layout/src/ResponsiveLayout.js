import React from 'react';
import {Container, Row, Col} from 'react-bootstrap';

const ResponsiveLayout = () => {
    return (
        <Container>
            {/* 第一行布局 */}
            <Row>
                <Col xs={12} sm={6} md={4}>
                    <div style={{backgroundColor: 'lightblue', padding: '20px'}}>
                        第一行第一列内容，在超小屏幕占满整行，小屏幕占一半宽度，中等屏幕占三分之一宽度。
                    </div>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <div style={{backgroundColor: 'lightgreen', padding: '20px'}}>
                        第一行第二列内容，在超小屏幕占满整行，小屏幕占一半宽度，中等屏幕占三分之一宽度。
                    </div>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <div style={{backgroundColor: 'lightyellow', padding: '20px'}}>
                        第一行第三列内容，在超小屏幕占满整行，小屏幕占一半宽度，中等屏幕占三分之一宽度。
                    </div>
                </Col>
            </Row>

            {/* 第二行布局 */}
            <Row>
                <Col xs={12} sm={8} md={6}>
                    <div style={{backgroundColor: 'pink', padding: '20px'}}>
                        第二行第一列内容，在超小屏幕占满整行，小屏幕占三分之二宽度，中等屏幕占二分之一宽度。
                    </div>
                </Col>
                <Col xs={12} sm={4} md={6}>
                    <div style={{backgroundColor: 'lavender', padding: '20px'}}>
                        第二行第二列内容，在超小屏幕占满整行，小屏幕占三分之一宽度，中等屏幕占二分之一宽度。
                    </div>
                </Col>
            </Row>

            {/* 第三行布局 */}
            <Row>
                <Col xs={12} md={3}>
                    <div style={{backgroundColor: 'lightcoral', padding: '20px'}}>
                        第三行第一列内容，在超小屏幕占满整行，中等屏幕占四分之一宽度。
                    </div>
                </Col>
                <Col xs={12} md={3}>
                    <div style={{backgroundColor: 'lightcyan', padding: '20px'}}>
                        第三行第二列内容，在超小屏幕占满整行，中等屏幕占四分之一宽度。
                    </div>
                </Col>
                <Col xs={12} md={3}>
                    <div style={{backgroundColor: 'mintcream', padding: '20px'}}>
                        第三行第三列内容，在超小屏幕占满整行，中等屏幕占四分之一宽度。
                    </div>
                </Col>
                <Col xs={12} md={3}>
                    <div style={{backgroundColor: 'thistle', padding: '20px'}}>
                        第三行第四列内容，在超小屏幕占满整行，中等屏幕占四分之一宽度。
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default ResponsiveLayout;