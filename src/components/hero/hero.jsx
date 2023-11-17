import { Box, Button, HStack, Menu, MenuButton, MenuItem, MenuList, Text } from '@chakra-ui/react';
import React from 'react';
import { TbLetterA, TbLetterB, TbLetterI, TbLetterU } from 'react-icons/tb';
import { BsListNested } from 'react-icons/bs';

export default function Hero() {
	return (
		<Box w={'full'} bg={'white'}>
			<Box w={'full'} display={'flex'} alignItems={'center'} flexWrap={'wrap'} py={1.5} px={4} gap={4}>
				<Button w={'150px'} colorScheme={'teal'} variant={'solid'}>
					Open.Sans
				</Button>
				<Button w={'150px'} colorScheme={'teal'} variant={'solid'}>
					<HStack gap={4}>
						<Box w={'1px'} h={10} bg={'wheat'}></Box>
						<Text color={'black'}>24</Text>
						<Box w={'1px'} h={10} bg={'wheat'}></Box>
					</HStack>
				</Button>
				<HStack color={'black'} display={{ base: 'none', lg: 'flex' }}>
					<Box w={'full'} display={{ base: 'flex', lg: 'none' }} mt={-4}>
						<Menu colorScheme={'facebook'} variant={'solid'}>
							<MenuButton color={'white'} mt={4}>
								<BsListNested size={'24'} />
							</MenuButton>
							<MenuList bg={'white'} color={'black'}>
								<MenuItem>
									<TbLetterA size={'26'} />
								</MenuItem>
								<MenuItem>
									<TbLetterB size={'26'} />
								</MenuItem>
								<MenuItem>
									<TbLetterI size={'26'} />
								</MenuItem>
								<MenuItem>
									<TbLetterU size={'26'} />
								</MenuItem>
							</MenuList>
						</Menu>
					</Box>
					<TbLetterA size={'26'} />
					<TbLetterB size={'26'} />
					<TbLetterI size={'26'} />
					<TbLetterU size={'26'} />
				</HStack>
			</Box>
		</Box>
	);
}
