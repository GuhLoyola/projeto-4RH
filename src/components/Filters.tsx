import {
    HStack,
    Icon,
    Input,
    InputGroup,
    InputLeftElement,
} from "@chakra-ui/react";
import SearchIcon from "./icons/SearchIcon";

const Filters = ({ filtering, setFiltering }) => {


    return (
        <HStack mb={6} spacing={3}>
            <InputGroup size="sm" maxW="12rem">
                <InputLeftElement pointerEvents="none">
                    <Icon as={SearchIcon} />
                </InputLeftElement>
                <Input
                    type="text"
                    variant="filled"
                    placeholder="Filtrar por Nome / ID"
                    borderRadius={5}
                    value={filtering}
                    onChange={e => setFiltering(e.target.value)}
                />
            </InputGroup>
        </HStack>
    );
};
export default Filters;