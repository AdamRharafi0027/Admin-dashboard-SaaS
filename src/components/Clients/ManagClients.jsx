import React from 'react'
import ContentSide from '../ContentSide'
import Header from '../Header'
import ManagClientsBody from './ManagClientsBody/ManagClientsBody'

const ManagClients = () => {
  return (
    <>
        <ContentSide>
            <Header>
                Manage Clients
            </Header>
            <ManagClientsBody />
        </ContentSide>
    </>
  )
}

export default ManagClients