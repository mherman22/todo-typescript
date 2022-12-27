import React from 'react'

interface ButtonProps {
    buttonType:'submit' | 'reset' | 'button' | undefined;
    children: React.ReactNode;
}

const Button = ({buttonType, children}:ButtonProps) => {
  return (
    <button type='submit' className='button__submit'>{children}</button>
  )
}

export default Button