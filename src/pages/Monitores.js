import React from 'react'
import { Container, Stack, Button, Form, Table } from 'react-bootstrap'
const Monitores = () => {
    return (
        <Container>
            <Form>
                <Stack direction='horizontal'>
                    <Form.Group controlId="buscar" className='w-75 m-3'>
                        <Form.Control type="text" placeholder="buscar">
                        </Form.Control>
                    </Form.Group>
                    <Button variant="secondary" type='submit'>
                        Buscar
                    </Button>
                    <Button variant="dark">
                        reset
                    </Button>
                </Stack>
            </Form>
            <hr />
            <Table>
                <thead>
                    <tr>
                        <th>Nombres</th>
                        <th>Apellidos</th>
                        <th>Programa academico</th>
                        <th>Semestre</th>
                        <th>Cedula</th>
                        <th>Informacion de contacto</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    
                </tbody>
            </Table>
        </Container>
    )
}

export default Monitores