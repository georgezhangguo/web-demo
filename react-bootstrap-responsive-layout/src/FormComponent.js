/**
 * Created by George on 2024/11/10.
 */

import { Container, Row, Col, Form } from 'react-bootstrap';

const FormComponent = () => {
    return (
        <Container>
            <Form>
                <Row>
                    <Col xs={12} sm={6}>
                        <Form.Group controlId="formEmail">
                            <Form.Label>邮箱</Form.Label>
                            <Form.Control type="email" placeholder="请输入邮箱" />
                        </Form.Group>
                    </Col>
                    <Col xs={12} sm={6}>
                        <Form.Group controlId="formPassword">
                            <Form.Label>密码</Form.Label>
                            <Form.Control type="password" placeholder="请输入密码" />
                        </Form.Group>
                    </Col>
                </Row>
                <Row>
                    <Col xs={12}>
                        <Form.Group controlId="formRemember">
                            <Form.Check type="checkbox" label="记住我" />
                        </Form.Group>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
};

export default FormComponent;

