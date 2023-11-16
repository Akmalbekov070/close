import React from 'react';
import { Box } from '@chakra-ui/react';
import Header from '../header/header';
import Sidebar from '../sidebar/sidebar';
import Hero from '../hero/hero';

export default function ClosePage() {
	return (
		<>
			<Header />
			<Box w={'full'} display={'flex'}>
				<Sidebar />
				<Hero />
			</Box>
		</>
	);
}
