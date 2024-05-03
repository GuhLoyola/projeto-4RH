import { Box } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { getData } from "../services/getData";


interface Product {
    portfolioProductId: string;
    productName: string;
    correctedQuota: number;
    value: number;
}

const Table = () => {

    const [product, setProducts] = useState<Product[]>([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getData()
                const productData = await response.data.dailyEquityByPortfolioChartData

                setProducts(productData)

                console.log(productData)

            } catch (error) {
                throw new Error('Houve um problema ao listar os dados')
            }
        }

        fetchData()
    }, [])
    return (
        <Box>Dale</Box>
    )
}

export default Table