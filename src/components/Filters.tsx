import { Box, Icon, Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useState } from 'react'; // Importe o useState
import SearchIcon from './icons/SearchIcon';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const Filters = ({ columnFilters, setColumnFilters }) => {
    const [filterValue, setFilterValue] = useState('');

    const onFilterChange = (value) => {
        setFilterValue(value);
        setColumnFilters((prev) =>
            prev.map((filter) => {
                if (filter.id === "productName" || filter.id === "portfolioProductId") {
                    return { ...filter, value };
                }
                return filter;
            })
        );
    };


    return (
        <Box mb={6}>
            <InputGroup size="sm" maxW={"13rem"}>
                <InputLeftElement pointerEvents={'none'}>
                    <Icon as={SearchIcon} />
                </InputLeftElement>
                <Input type='text' variant="filled" placeholder='Nome ou ID' borderRadius={5}
                    value={filterValue} onChange={(e) => onFilterChange(e.target.value)}
                />
            </InputGroup>
        </Box>
    );
};

export default Filters;
