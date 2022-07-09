import React from 'react';
import { Accordion, Form } from 'react-bootstrap';
import Navbar from '../Navbar';
import './styled.css';

const Categories = () => {
    return (
        <body>
            <Accordion className="custom-accordion" defaultActiveKey="0" >
                <Accordion.Item eventKey="0">
                    <Accordion.Header className="custom-accordion-header">
                        <div className="title lead fw-bold">
                            Suas Categorias
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <Form className="categories">
                            <Form.Check type="checkbox" label="Exemplo" />
                            <Form.Check type="checkbox" label="Exemplo" />
                            <Form.Check type="checkbox" label="Exemplo" />
                            <Form.Check type="checkbox" label="Exemplo" />
                        </Form>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </body>
    )
}

export default Categories;