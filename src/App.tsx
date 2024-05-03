import { ChakraProvider } from '@chakra-ui/react'
import './App.css'
import Table from './components/Table'

function App() {

  return (
    <ChakraProvider>
      <Table />
    </ChakraProvider>
  )
}

export default App
