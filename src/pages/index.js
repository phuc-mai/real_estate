import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button } from '@chakra-ui/react';
import { baseUrl, fetchApi } from '../../utils/fetchApi';
import Property from '../../components/Property';
import Banner from '../../components/Banner';


const Home = ({ forSales, forRent }) => {
  return (
    <Box>
      <Banner
        purpose='RENT A HOME'
        title1='Rental Homes for'
        title2='Everyone'
        desc1='Explore from Apartments, builder floors, villas'
        desc2='and more'
        buttonText='Explore Renting'
        linkName='/search?purpose=for-rent'
        imageUrl='/images/banner_rent.jpg'
      />
      <Flex flexWrap="wrap">
        {forRent.map((property) => <Property property={property} key={property.id} />)}
      </Flex>
      <Banner
        purpose='BUY A HOME'
        title1=' Find, Buy & Own Your'
        title2='Dream Home'
        desc1=' Explore from Apartments, land, builder floors,'
        desc2=' villas and more'
        buttonText='Explore Buying'
        linkName='/search?purpose=for-sale'
        imageUrl='/images/banner_buy.jpg'
      />
      <Flex flexWrap='wrap'>
        {forSales.map((property) => <Property property={property} key={property.id} />)}
      </Flex>
    </Box>
  )
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=6020&purpose=for-sale&hitsPerPage=9&page=1`)
  const propertyForRent = await fetchApi(`${baseUrl}/properties/list?locationExternalIDs=6020&purpose=for-rent&hitsPerPage=6&page=0`)

  return {
    props: {
      forSales: propertyForSale?.hits,
      forRent: propertyForRent?.hits,
    }
  }
}

export default Home
