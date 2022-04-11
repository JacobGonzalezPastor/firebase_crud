import React from 'react'
import { Button, Form } from 'react-bootstrap';

const MonitoresForm = () => {
    return (
        <div className='container p-4'>
            <h1>Registro de monitores</h1>
            <div className='row'>
                <Form>
                    <Form.Group controlId="form-group-id">
                        <Form.Label>Nombres</Form.Label>
                        <Form.Control type="text" placeholder="Nombres" />
                        <Form.Label>Apellidos</Form.Label>
                        <Form.Control type="text" placeholder="Apellidos" />
                    </Form.Group>
                    <Form.Group controlId="form-group-id">
                        <Form.Label>Programa academico</Form.Label>
                        <Form.Control type="text" placeholder="Carrera" />
                        <Form.Label>Semestre</Form.Label>
                        <Form.Control type="number" placeholder="semestre" />
                    </Form.Group>
                    <Form.Group controlId="form-group-id">
                        <Form.Label>Cedula</Form.Label>
                        <Form.Control type="number" placeholder="N° de cedula" />
                        <Form.Label>informacion de contacto</Form.Label>
                        <Form.Control type="text" placeholder="Contacto" />
                        <Form.Text className="text-muted">
                            Ya sea tu numero de telefono, correo electronico o red social favorita
                        </Form.Text>
                    </Form.Group>
                    <br />
                    <Button variant="primary" type="submit">
                        Registrar
                    </Button>
                </Form>
            </div>
        </div>
    )
}

export default MonitoresForm