import { useEffect, useState } from 'react';
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';

import { filterData, getFilterValues } from '../utils/filterData';

import React from 'react'

const SearchFilters = () => {
    const [allFilters] = useState(filterData)
    const router = useRouter()
    const searchProperties = (newFilter) => {
        const path = router.pathname
        const { query } = router
        const allValues = getFilterValues(newFilter)
        allValues.forEach((item) => {
            query[item.name] = item.value // query.purpose 
        });
        router.push({ pathname: path, query })
    }

    const handleFilter = (index, newValue) => {
        allFilters[index] = newValue
        searchProperties(allFilters) // including all values (changed value & the rest keep same)
    }

    return (
        <Flex bg='gray.100' p='4' justifyContent='center' flexWrap='wrap'>
            {allFilters.map((filter) => (
                <Box key={filter.queryName}>
                    <Select
                        onChange={(e) => handleFilter(filter.queryName, e.target.value)}
                        placeholder={filter.placeholder}
                        w='fit-content'
                        p='2'
                    >
                        {filter?.items?.map((item) => (
                            <option value={item.value} key={item.value}>
                                {item.name}
                            </option>
                        ))}
                    </Select>
                </Box>
            ))
            }

        </Flex >
    )
}

export default SearchFilters