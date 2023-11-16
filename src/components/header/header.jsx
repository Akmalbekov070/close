import { Box, HStack, Heading, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { PiList } from 'react-icons/pi';
import { PiArrowBendDoubleUpLeftBold, PiArrowBendDoubleUpRightBold } from 'react-icons/pi';
import { MdCloudUpload } from 'react-icons/md';

export default function Header() {
	return (
		<>
			<Box
				w={'full'}
				h={'110px'}
				bg={'blue.300'}
				display={'flex'}
				justifyContent={'space-between'}
				alignItems={'center'}
				py={10}
				px={'110px'}
			>
				<Box>
					<Heading fontWeight={'400'} fontSize={'5xl'}>
						Pattern Print
					</Heading>
				</Box>
				<Box>
					<HStack gap={6}>
						<Text color={'gold'}>
							<Link href={'/'}>главная</Link>
						</Text>
						<Text className='hover:text-yellow-400'>
							<Link href={'/'}>мужской</Link>
						</Text>
						<Text className='hover:text-yellow-400'>
							<Link href={'/'}>футболки</Link>
						</Text>
						<Text className='hover:text-yellow-400'>
							<Link href={'/'}>Pattern Print</Link>
						</Text>
					</HStack>
				</Box>
			</Box>
			{/* header2======= */}
			<Box
				w={'full'}
				h={20}
				bg={'blue.600'}
				display={'flex'}
				justifyContent={'space-between'}
				alignItems={'center'}
				px={6}
				pt={2}
			>
				<HStack gap={10}>
					<PiList size={'28'} />
					<Text fontSize={'xl'}>Home</Text>
					<HStack gap={5}>
						<PiArrowBendDoubleUpLeftBold size={'28'} />
						<PiArrowBendDoubleUpRightBold size={'28'} />
					</HStack>
				</HStack>
				<Box>
					<Heading fontWeight={'500'}>Project title</Heading>
				</Box>
				<HStack gap={6}>
					<Box w={'1px'} h={'50px'} mt={5} bg={'white'}></Box>
					<HStack>
						<Text fontSize={'xl'} fontWeight={'700'}>
							Share
						</Text>
						<MdCloudUpload size={'30'} />
					</HStack>
				</HStack>
			</Box>
		</>
	);
}
