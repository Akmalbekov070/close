import { Box, HStack, Text } from '@chakra-ui/react';
import React from 'react';
import { SiAffinitydesigner } from 'react-icons/si';
import { BiCategory, BiText } from 'react-icons/bi';
import { FaPaintBrush } from 'react-icons/fa';

export default function Sidebar() {
	return (
		<Box>
			<Box
				w={'72px'}
				h={'71vh'}
				bg={'black'}
				display={'flex'}
				flexDirection={'column'}
				alignItems={'center'}
				pt={10}
				gap={4}
				cursor={'pointer'}
			>
				<HStack flexDirection={'column'} color={'white'}>
					<SiAffinitydesigner size={'20'} />
					<Text fontSize={'sm'}>Designer</Text>
				</HStack>
				<HStack flexDirection={'column'} color={'white'}>
					<BiCategory size={'25'} />
					<Text fontSize={'sm'}>Elements</Text>
				</HStack>
				<HStack flexDirection={'column'} color={'white'}>
					<BiText size={'25'} />
					<Text fontSize={'sm'}>Text</Text>
				</HStack>
				<HStack flexDirection={'column'} color={'white'}>
					<FaPaintBrush size={'25'} />
					<Text fontSize={'sm'}>Paints</Text>
				</HStack>
			</Box>
		</Box>
	);
}
