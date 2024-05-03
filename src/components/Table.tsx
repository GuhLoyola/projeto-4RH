import { Box, Icon } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import { getData } from "../services/getData";
import { flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, useReactTable } from "@tanstack/react-table";
import Cell from "./Cell";
import Filters from "./Filters";
import SortIcon from "./icons/SortIcon";


interface Product {
    portfolioProductId: string;
    productName: string;
    correctedQuota: number;
    value: number;
}

const Table = () => {

    const [products, setProducts] = useState<Product[]>([])
    const [filtering, setFiltering] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getData()
                const productData = await response.data.dailyEquityByPortfolioChartData

                setProducts(productData)

            } catch (error) {
                throw new Error('Houve um problema ao listar os dados')
            }
        }

        fetchData()
    }, [])

    const columns = [
        {
            accessorKey: 'portfolioProductId',
            header: "Id",
            cell: Cell
        },
        {
            accessorKey: 'productName',
            header: "Nome do Produto",
            size: 450,
            cell: Cell
        },
        {
            accessorKey: 'correctedQuota',
            header: "Cota Corrigida",
            size: 170,
            cell: Cell
        },
        {
            accessorKey: 'value',
            header: "Valor",
            cell: Cell
        }
    ]

    const tabela = useReactTable({
        data: products,
        columns,
        state: {
            globalFilter: filtering
        },
        onGlobalFilterChange: setFiltering,
        getCoreRowModel: getCoreRowModel(),
        getFilteredRowModel: getFilteredRowModel(),
        getSortedRowModel: getSortedRowModel(),
        columnResizeMode: "onChange"
    })

    return (
        <Box className="container" >
            <Filters
                filtering={filtering}
                setFiltering={setFiltering}
            />

            <Box className="table" w={tabela.getTotalSize()}>
                {tabela.getHeaderGroups().map((headerGroup) =>
                    <tr key={headerGroup.id} className="tr">
                        {headerGroup.headers.map((header) =>
                            <Box key={header.id} className="th" w={header.getSize()}>
                                {header.column.columnDef.header}
                                {
                                    header.column.getCanSort() &&
                                    <Icon as={SortIcon} mx={3} fontSize={14} onClick={header.column.getToggleSortingHandler()} />
                                }
                                <div
                                    onMouseDown={header.getResizeHandler()}
                                    onTouchStart={header.getResizeHandler()}
                                    className={`resizer ${header.column.getIsResizing() ? "isResizing" : ""
                                        }`}
                                />
                            </Box>
                        )}
                    </tr>
                )}
                {
                    tabela.getRowModel().rows.map((row) => (
                        <tr className="tr" key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <Box className="td" key={cell.id} w={cell.column.getSize()}>
                                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                </Box>
                            ))}
                        </tr>
                    ))
                }
            </Box>
        </Box>
    )
}

export default Table