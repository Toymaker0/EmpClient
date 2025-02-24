import React from 'react'
import { Col, Navbar, Row } from 'react-bootstrap'
import { Outlet, useNavigate } from 'react-router-dom'

const Layout = () => {
    const dashBoardItem = [
        {
            name: 'Dashboard',
            path: '/dashboard'
        },
        {
            name: 'Dashboard',
            path: '/login'
        },
        {
            name: 'Dashboard',
            path: '/dashboard'
        },
        {
            name: 'Dashboard',
            path: '/dashboard'
        },
    ]
    const navigate=useNavigate()
    const handleMenu = (item) => {
        console.log(item);
navigate(item.path)
    }
    return (
        <>
            <Row>
                <Col md={2} className=' vh-100'>
                    <Row className='m-2 p-2  bg-secondary'>
                        head
                    </Row>
                    <ul className="list-group">
                        {
                            dashBoardItem.map((item, i) => {
                                return (
                                    <li key={i} className="list-group-item m-2" onClick={() => {handleMenu(item) }} aria-current="true">{item.name}</li>
                                )
                            })
                        }
                        {/* <li class="list-group-item active" aria-current="true">An active item</li> */}
                    </ul>
                </Col>
                <Col>
                    <Row>
                        <Navbar>h</Navbar>
                    </Row>
                    <Row>
                        <Outlet />
                    </Row>

                </Col>
            </Row>
        </>
    )
}

export default Layout