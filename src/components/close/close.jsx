import {
	Box,
	Button,
	ButtonGroup,
	Card,
	CardBody,
	CardFooter,
	Divider,
	HStack,
	Heading,
	Image,
	Link,
	Stack,
	Text,
} from '@chakra-ui/react';
import React from 'react';
import { TbHeartPlus } from 'react-icons/tb';
import { PiShoppingCartLight } from 'react-icons/pi';

export default function Close() {
	return (
		<Box w={'full'} px={{ base: '20px', lg: '28' }} py={10}>
			<Box w={'full'} display={'flex'} justifyContent={'space-between'} alignItems={'center'} flexWrap={'wrap'}>
				<Heading fontSize={{ base: '20px', sm: 'xl', xl: '2xl' }} px={{ base: '32px' }}>
					Новые рисунки{' '}
				</Heading>
				<HStack gap={10} py={{ base: 4, xl: 0 }}>
					<Text color={'gray.400'}>Сортировать:</Text>
					<Button colorScheme={'facebook'} variant={'outline'} color={'black'}>
						Цена повозрастанию
					</Button>
				</HStack>
			</Box>

			<Box w={'full'} display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} pt={20} flexWrap={'wrap'}>
				<Card maxW='250px'>
					<Link href='/closePage'>
						<Box borderRadius='lg'>
							<Image
								w={'full'}
								h={'300px'}
								objectFit={'cover'}
								src='https://cdn.palbincdn.com/users/31244/images/SUDADERA-CAPUCHA-MUJER-BICOLOR-CELESTE-BLANCO-1612106048.jpg'
								alt='Green double couch with wooden legs'
							/>
							<HStack px={6} py={2}>
								<Heading size='sm'>Белый Boncai 30.000 сум</Heading>
							</HStack>
						</Box>
					</Link>
					<Divider />
					<CardFooter px={2}>
						<Box w={'full'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
							<HStack>
								<TbHeartPlus size={'25'} />
								<PiShoppingCartLight size={'25'} />
							</HStack>
							<Box>
								<Button w={'92px'} h={'30px'} colorScheme={'teal'} variant={'outline'} borderRadius={'xl'}>
									Подробнее
								</Button>
							</Box>
						</Box>
					</CardFooter>
				</Card>
				<Card maxW='250px'>
					<Link href='/closePage'>
						<Box borderRadius='lg'>
							<Image
								w={'full'}
								h={'300px'}
								objectFit={'cover'}
								src='https://cdn.palbincdn.com/users/31244/images/SUDADERA-CAPUCHA-MUJER-BICOLOR-CELESTE-BLANCO-1612106048.jpg'
								alt='Green double couch with wooden legs'
							/>
							<HStack px={6} py={2}>
								<Heading size='sm'>Белый Boncai 30.000 сум</Heading>
							</HStack>
						</Box>
					</Link>
					<Divider />
					<CardFooter px={2}>
						<Box w={'full'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
							<HStack>
								<TbHeartPlus size={'25'} />
								<PiShoppingCartLight size={'25'} />
							</HStack>
							<Box>
								<Button w={'92px'} h={'30px'} colorScheme={'teal'} variant={'outline'} borderRadius={'xl'}>
									Подробнее
								</Button>
							</Box>
						</Box>
					</CardFooter>
				</Card>
				<Card maxW='250px'>
					<Link href='./closePage'>
						<Box borderRadius='lg'>
							<Image
								w={'full'}
								h={'300px'}
								objectFit={'cover'}
								src='https://cdn.palbincdn.com/users/31244/images/SUDADERA-CAPUCHA-MUJER-BICOLOR-CELESTE-BLANCO-1612106048.jpg'
								alt='Green double couch with wooden legs'
							/>
							<HStack px={6} py={2}>
								<Heading size='sm'>Белый Boncai 30.000 сум</Heading>
							</HStack>
						</Box>
					</Link>
					<Divider />
					<CardFooter px={2}>
						<Box w={'full'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
							<HStack>
								<TbHeartPlus size={'25'} />
								<PiShoppingCartLight size={'25'} />
							</HStack>
							<Box>
								<Button w={'92px'} h={'30px'} colorScheme={'teal'} variant={'outline'} borderRadius={'xl'}>
									Подробнее
								</Button>
							</Box>
						</Box>
					</CardFooter>
				</Card>
			</Box>

			<Box w={'full'} display={'flex'} justifyContent={'space-evenly'} alignItems={'center'} pt={20} flexWrap={'wrap'}>
				<Card maxW='250px'>
					<Link href='/closePage'>
						<Box borderRadius='lg'>
							<Image
								w={'full'}
								h={'300px'}
								objectFit={'cover'}
								src='https://cdn.palbincdn.com/users/31244/images/SUDADERA-CAPUCHA-MUJER-BICOLOR-CELESTE-BLANCO-1612106048.jpg'
								alt='Green double couch with wooden legs'
							/>
							<HStack px={6} py={2}>
								<Heading size='sm'>Белый Boncai 30.000 сум</Heading>
							</HStack>
						</Box>
					</Link>
					<Divider />
					<CardFooter px={2}>
						<Box w={'full'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
							<HStack>
								<TbHeartPlus size={'25'} />
								<PiShoppingCartLight size={'25'} />
							</HStack>
							<Box>
								<Button w={'92px'} h={'30px'} colorScheme={'teal'} variant={'outline'} borderRadius={'xl'}>
									Подробнее
								</Button>
							</Box>
						</Box>
					</CardFooter>
				</Card>
				<Card maxW='250px'>
					<Link href='/closePage'>
						<Box borderRadius='lg'>
							<Image
								w={'full'}
								h={'300px'}
								objectFit={'cover'}
								src='https://cdn.palbincdn.com/users/31244/images/SUDADERA-CAPUCHA-MUJER-BICOLOR-CELESTE-BLANCO-1612106048.jpg'
								alt='Green double couch with wooden legs'
							/>
							<HStack px={6} py={2}>
								<Heading size='sm'>Белый Boncai 30.000 сум</Heading>
							</HStack>
						</Box>
					</Link>
					<Divider />
					<CardFooter px={2}>
						<Box w={'full'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
							<HStack>
								<TbHeartPlus size={'25'} />
								<PiShoppingCartLight size={'25'} />
							</HStack>
							<Box>
								<Button w={'92px'} h={'30px'} colorScheme={'teal'} variant={'outline'} borderRadius={'xl'}>
									Подробнее
								</Button>
							</Box>
						</Box>
					</CardFooter>
				</Card>
				<Card maxW='250px'>
					<Link href='/closePage'>
						<Box borderRadius='lg'>
							<Image
								w={'full'}
								h={'300px'}
								objectFit={'cover'}
								src='https://cdn.palbincdn.com/users/31244/images/SUDADERA-CAPUCHA-MUJER-BICOLOR-CELESTE-BLANCO-1612106048.jpg'
								alt='Green double couch with wooden legs'
							/>
							<HStack px={6} py={2}>
								<Heading size='sm'>Белый Boncai 30.000 сум</Heading>
							</HStack>
						</Box>
					</Link>
					<Divider />
					<CardFooter px={2}>
						<Box w={'full'} display={'flex'} alignItems={'center'} justifyContent={'space-between'}>
							<HStack>
								<TbHeartPlus size={'25'} />
								<PiShoppingCartLight size={'25'} />
							</HStack>
							<Box>
								<Button w={'92px'} h={'30px'} colorScheme={'teal'} variant={'outline'} borderRadius={'xl'}>
									Подробнее
								</Button>
							</Box>
						</Box>
					</CardFooter>
				</Card>
			</Box>
		</Box>
	);
}
