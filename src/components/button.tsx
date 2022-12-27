import React from 'react'

interface SearchButtonProps {
    buttonType:'submit' | 'reset' | 'button' | undefined;
    children: React.ReactNode;
}

const SearchButton = ({buttonType, children}:SearchButtonProps) => {
  return (
    <button type='submit' className='button__submit'>{children}</button>
  )
}

export default SearchButton