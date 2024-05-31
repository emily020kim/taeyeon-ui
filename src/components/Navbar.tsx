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
        <div className="fixed top-0 flex justify-between items-center w-full py-2 px-2 text-amber-300">
            <h1 className="uppercase font-medium font-mono text-2xl">
                est. 2015
            </h1>
            <a 
                className="uppercase font-medium font-mono text-2xl"
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
                    className='bg-amber-300 text-slate-900'
                />
                <MenuList>
                    <MenuItem 
                        className='uppercase font-medium font-mono text-base'
                    >   
                        <a href='/about'>
                            about
                        </a>
                    </MenuItem>
                    <MenuItem className='uppercase font-medium font-mono text-base'>
                        <a href='/albums'>
                            albums
                        </a>
                    </MenuItem>
                    <MenuItem className='uppercase font-medium font-mono text-base'>
                        <a href='/awards'>
                            awards
                        </a>
                    </MenuItem>
                </MenuList>
            </Menu>
        </div>
    )
}

export default Navbar