import {
    HStack,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
} from "@chakra-ui/react";
import SearchIcon from "./icons/SearchIcon";

const Filters = ({ columnFilters, setColumnFilters }) => {
    const productName = columnFilters.find((f) => f.id === "productName")?.value || "";

    const onFilterChange = (id, value) =>
        setColumnFilters((prev) =>
            prev
                .filter((f) => f.id !== id)
                .concat({
                    id,
                    value,
                })
        );

    return (
        <HStack mb={6} spacing={3}>
            <InputGroup size="sm" maxW="12rem">
                <InputLeftElement pointerEvents="none">
                    <Icon as={SearchIcon} />
                </InputLeftElement>
                <Input
                    type="text"
                    variant="filled"
                    placeholder="Filtrar pelo nome"
                    borderRadius={5}
                    value={productName}
                    onChange={(e) => onFilterChange("productName", e.target.value)}
                />
            </InputGroup>
        </HStack>
    );
};
export default Filters;