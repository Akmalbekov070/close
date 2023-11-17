import { Box, HStack, Heading, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import Link from 'next/link';
import React from 'react';
import { PiList } from 'react-icons/pi';
import { PiArrowBendDoubleUpLeftBold, PiArrowBendDoubleUpRightBold } from 'react-icons/pi';
import { MdCloudUpload } from 'react-icons/md';
import { BsListNested } from 'react-icons/bs';

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
				px={{ base: '10px', sm: '20px', lg: '23px', xl: '110px' }}
			>
				<Box>
					<Heading fontWeight={'400'} fontSize={{ base: '2xl', lg: '3xl', xl: '5xl' }}>
						Pattern Print
					</Heading>
				</Box>
				<Box>
					<Box w={'full'} display={{ base: 'flex', lg: 'none' }} mt={-4}>
						<Menu colorScheme={'facebook'} variant={'solid'}>
							<MenuButton color={'blue'}>
								<BsListNested size={'40'} />
							</MenuButton>
							<MenuList bg={'white'} color={'black'}>
								<MenuItem>главная</MenuItem>
								<MenuItem bg={'white'}>футболки</MenuItem>
								<MenuItem bg={'white'}>мужской</MenuItem>
								<MenuItem bg={'white'}>Pattern Print</MenuItem>
							</MenuList>
						</Menu>
					</Box>
					<HStack gap={6} display={{ base: 'none', lg: 'flex' }}>
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
					<Box w={'full'} display={{ base: 'flex', xl: 'flex' }} mt={-4}>
						<Menu colorScheme={'facebook'} variant={'solid'}>
							<MenuButton color={'white'} mt={4}>
								<BsListNested size={'24'} />
							</MenuButton>
							<MenuList bg={'white'} color={'black'}>
								<MenuItem bg={'white'}>Home</MenuItem>
								<MenuItem bg={'white'}>Project title</MenuItem>
								<MenuItem bg={'white'}>Share</MenuItem>
							</MenuList>
						</Menu>
					</Box>
					<Text display={{ base: 'none', lg: 'flex' }} fontSize={'xl'}>
						Home
					</Text>
					<HStack gap={5} cursor={'pointer'}>
						<PiArrowBendDoubleUpLeftBold size={'28'} />
						<PiArrowBendDoubleUpRightBold size={'28'} />
					</HStack>
				</HStack>
				<Box>
					<Heading display={{ base: 'none', lg: 'flex' }} fontWeight={'500'}>
						Project title
					</Heading>
				</Box>
				<HStack gap={6}>
					<Box w={'1px'} h={'50px'} mt={5} bg={'white'} display={{ base: 'none', xl: 'flex' }}></Box>
					<HStack>
						<Text display={{ base: 'none', lg: 'flex' }} fontSize={'xl'} fontWeight={'700'}>
							Share
						</Text>
						<MdCloudUpload size={'30'} />
					</HStack>
				</HStack>
			</Box>
		</>
	);
}
