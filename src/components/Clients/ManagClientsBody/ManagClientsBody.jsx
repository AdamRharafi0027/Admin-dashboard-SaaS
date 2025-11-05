import React from 'react'
import Container from '../../Container'
import InnerContainer from '../../InnerContainer'
import ManagClientsStats from './ManagClientsStats'
import SearchComponent from '../../SearchComponent'
import ManagClientsTable from './ManagClientsTable'

const ManagClientsBody = () => {
  return (
    <>
        <Container>
            <ManagClientsStats />
            <InnerContainer>
                <SearchComponent placeholder={"Search By Client name,email, ID ..."} />
                <ManagClientsTable />
            </InnerContainer>
        </Container>
    </>
  )
}

export default ManagClientsBody