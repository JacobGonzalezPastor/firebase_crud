import React, { useState } from 'react'
import { Container, Stack, Button, Form, Table } from 'react-bootstrap'
import MonitoresForm from '../components/MonitoresForm'
import getAllMonitores from '../functions/GetMonitores'
const Monitores = () => {
    const [monitoress, setMonitoress] = useState([]);
    const [isModalRegistar, setIsModalRegistrar] = useState(false)


    function actulizarEstadoMoni() {
        getAllMonitores().then((monitoress) => {
            setMonitoress(monitoress);
        })
    }
    function RegistarMonitor() {
        setIsModalRegistrar(true);
    }
    return (
        <Container>
            <MonitoresForm
                isModalRegistar={isModalRegistar}
                setIsModalRegistrar={setIsModalRegistrar}
                actulizarEstadoMoni={actulizarEstadoMoni}
            />
            <h1>Monitores</h1>
            <hr />
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
                        <th>#</th>
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
                    {monitoress && monitoress.map((monitores, index) =>(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{monitores.nombres}</td>
                            <td>{monitores.apellidos}</td>
                            <td>{monitores.carrera}</td>
                            <td>{monitores.semestre}</td>
                            <td>{monitores.cedula}</td>
                            <td>{monitores.info_contact}</td>
                            <td>
                                <Button variant="primary">Editar</Button>
                                <Button variant="danger" >Eliminar</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <Button onClick={RegistarMonitor}>Registar Monitor</Button>
        </Container>
    )
}

export default Monitores