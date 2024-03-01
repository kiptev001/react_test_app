import React from 'react'
import classNames from 'shared/lib/classNames/classNames'
import cls from './Navbar.module.scss'

export interface NavbarProps {
  readonly className?: string
}

function Navbar ({ className }: NavbarProps) {
  return (
    <div className={classNames(cls.navbar, {}, [className])}>
      <div className={cls.links}>
        /
      </div>
    </div>
  )
}

export { Navbar }
