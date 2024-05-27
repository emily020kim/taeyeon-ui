import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';

const Navbar = () => {
    return (
        <div className="flex justify-between items-center w-full py-2 px-2 border-b-2 border-b-slate-900 bg-yellow-50">
            <h1 className="uppercase font-semibold font-mono text-2xl">
                est. 2015
            </h1>
            <a 
                className="uppercase font-semibold font-mono text-2xl"
                href="/"
            >
                taeyeon
            </a>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                    _hover={ "bg-yellow-50" }
                />
                <MenuList className='bg-yellow-50'>
                    <MenuItem 
                        className='uppercase font-semibold font-mono text-base'
                    >   
                        <a href='/about'>
                            about
                        </a>
                    </MenuItem>
                    <MenuItem className='uppercase font-semibold font-mono text-base'>
                        <a href='/albums'>
                            albums
                        </a>
                    </MenuItem>
                </MenuList>
            </Menu>
        </div>
    )
}

export default Navbar