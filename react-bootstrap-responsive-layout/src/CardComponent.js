/**
 * Created by George on 2024/11/10.
 */


import React from 'react';
import {Container, Row, Col, Card} from 'react-bootstrap';

const CardComponent = () => {
    return (
        <Container>
            <Row>
                <Col xs={12} sm={6} md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>卡片1标题</Card.Title>
                            <Card.Text>
                                这是卡片1的内容。
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>卡片2标题</Card.Title>
                            <Card.Text>
                                这是卡片2的内容。
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} sm={6} md={4}>
                    <Card>
                        <Card.Body>
                            <Card.Title>卡片3标题</Card.Title>
                            <Card.Text>
                                这是卡片3的内容。
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default CardComponent;


