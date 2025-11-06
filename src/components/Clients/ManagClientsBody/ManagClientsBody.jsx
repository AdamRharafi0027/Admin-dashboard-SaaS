import React from 'react'
import Container from '../../Container'
import InnerContainer from '../../InnerContainer'
import ManagClientsStats from './ManagClientsStats'
import SearchComponent from '../../SearchComponent'
import ManagClientsTable from './ManagClientsTable'
import ClientsCharts from './ClientsCharts/ClientsCharts'

const ManagClientsBody = () => {
  return (
    <>
        <Container>
            <ManagClientsStats />
            <InnerContainer>
                <SearchComponent placeholder={"Search By Client name,email, ID ..."} />
                <ManagClientsTable />
                <ClientsCharts />
            </InnerContainer>
        </Container>
    </>
  )
}

export default ManagClientsBody