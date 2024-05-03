import { ChakraProvider } from '@chakra-ui/react'
import Table from './components/Table'
import theme from './components/themes/theme'

function App() {

  return (
    <ChakraProvider theme={theme}>
      <Table />
    </ChakraProvider>
  )
}

export default App
