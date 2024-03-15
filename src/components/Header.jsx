import React from 'react'
import { Button, Navbar, TextInput } from 'flowbite-react';
import { Link,useLocation} from 'react-router-dom';
import { AiOutlineSearch} from 'react-icons/ai';
import { FaMoon} from 'react-icons/fa';

export default function Header() {
    const path=useLocation().pathname;
  return (
    <Navbar className='border-b-2'>
        <Link to="/" className='self-centerr whitespace-nowrap text-sm sm:text-xl font-semibold '>
            <span className='px-2 py-1 bg-gradient-to-r from-green-200
             via-blue-300 to-blue-500 rounded-lg text-white'>Leka's Blog</span>
        </Link>
        <form>
            <TextInput
                type='text'
                placeholder='Search...'
                rightIcon={AiOutlineSearch}
            />
        </form>
        <Button className='w-12 h-10 lg:hidden' color='Gray' pill>
            <AiOutlineSearch/>
        </Button>
        <div className="flex gap-2 md:order-2">
            <Button className='w-12 h-10 hidden sm:inline' color='Gray' pill>
                <FaMoon />
            </Button>
            <Link to='/Signin'>
                <Button gradientDuoTone='purpleToBlue'>
                    SignIn
                </Button>
            </Link>
            <Navbar.Toggle />
           
        </div>
        <Navbar.Collapse>
                <Navbar.Link active={path==="/>"} as={'div'}>
                    <Link to='/'>
                        Home
                    </Link>
                    
                </Navbar.Link>
                <Navbar.Link active={path==="/About>"} as={'div'}>
                    <Link to='/About'>
                        About
                    </Link>
                </Navbar.Link>
                <Navbar.Link active={path==="/Projects>"} as={'div'}>
                    <Link to='/Projects'>
                        Projects
                    </Link>
                </Navbar.Link>
            </Navbar.Collapse>

    </Navbar>
  );
}
