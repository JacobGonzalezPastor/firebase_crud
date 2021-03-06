import React, { useEffect, useState } from 'react'
import { Container, Stack, Button, Form, Table } from 'react-bootstrap'
import MonitoriasForm from '../components/MonitoriasForm';
import MonitoriasFormEdit from '../components/MonitoriasFormEdit';
import EliminarMonitorias from '../functions/EliminarMonitorias';
import getAllMonitoreos from '../functions/GetMonitorias';
import FiltarMentoria from "../functions/FiltarMentoria";
const Monitorias = () => {

    const [monitorias, setMonitoreos] = useState([]);
    const [isModalCrear, setIsModalCrear] = useState(false)
    const [isModalEditar, setIsModalEditar] = useState(false)
    const [monitoriasEditar, setMonitoriasEditar] = useState()

    function actulizarEstadoMent(){
        getAllMonitoreos().then((monitorias)=>{
            setMonitoreos(monitorias);
        })
    }

    useEffect(() => {
        actulizarEstadoMent();
    }, [])
    
    function CrearMonitoria(){
        setIsModalCrear(true);
    }

    async function FiltarMentoriaHandler(e){
        e.preventDefault();
        const filtrar = e.target.buscar.value;
       FiltarMentoria(filtrar);
        //setMonitoreos(newdocs);
    }

    return (
        <Container>
            <h1>Monitorias</h1>
            <hr/>
            <MonitoriasForm
            isModalCrear={isModalCrear}
            setIsModalCrear={setIsModalCrear}
            actulizarEstadoMent={actulizarEstadoMent}
            />
            {monitoriasEditar&& (<MonitoriasFormEdit
                isModalEditar={isModalEditar}
                setIsModalEditar={setIsModalEditar}
                actulizarEstadoMent={actulizarEstadoMent}
                monitoriasEditar={monitoriasEditar}
                setMonitoriasEditar={setMonitoriasEditar}
            />)}
            {/* buscador */}
            <Form onSubmit={FiltarMentoriaHandler}>
                <Stack direction='horizontal'>
                    <Form.Group controlId="buscar"  className='w-75 m-3'>
                        <Form.Control type="text" placeholder="buscar">
                        </Form.Control>
                    </Form.Group>
                    <Button variant="secondary" type='submit' >
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
                        <th>Nombre de la materia</th>
                        <th>Fecha</th>
                        <th>Salon o numero del salon</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {monitorias && monitorias.map((monitoreos, index)=>(
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{monitoreos.materia}</td>
                            <td>{monitoreos.fecha}</td>
                            <td>{monitoreos.salon}</td>
                            <td>
                                <Button variant="primary" onClick={()=>
                                    {

                                        setMonitoriasEditar({...monitoreos});
                                        setIsModalEditar(true);
                                    }
                                    
                                    }>Editar</Button>
                                <Button variant="danger" onClick={()=>{
                                    EliminarMonitorias(monitorias).then((confirmacion)=>{
                                        actulizarEstadoMent();
                                    }); 
                                }}
                                >Eliminar</Button>
                            </td>
                        </tr>
                    ))}                   
                </tbody>
            </Table>
            <Button variant="warning" onClick={CrearMonitoria}>Crear monitoria</Button>
        </Container>
    )
}

export default Monitorias