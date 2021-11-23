import styled from '@emotion/styled'
import Image from 'next/image'
import { Menu } from '@heroicons/react/solid'

function Header() {
  return (
    <HeaderContainer className='
      flex
      bg-gray-500
      items-center
      shadow-lg
    '
    >
      <LogoContainer className='flex items-center justify-center w-full md:w-2/3'>
        <Image 
          src='/logo.png'
          alt='logo'
          height={50}
          width={100}
          objectFit='cover'
        />
      </LogoContainer>
      <NavigationContainer className='hidden md:flex md:bg-green-200 sm:w-1/3 sm:p-4 md:space-x-4 md:justify-center'>
        <NavigationItem className=''>Home</NavigationItem>
        <NavigationItem className=''>About</NavigationItem>
        <NavigationItem className=''>Contact</NavigationItem>
      </NavigationContainer>  
      
    </HeaderContainer>


  )
}

export default Header

const HeaderContainer = styled.div``;

const LogoContainer = styled.div``;

const NavigationContainer = styled.nav``;

const NavigationItem = styled.a``;