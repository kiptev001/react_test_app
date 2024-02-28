import React, { type ButtonHTMLAttributes, type FC } from 'react'
import cls from './MyButton.module.scss'
import classNames from 'shared/lib/classNames/classNames'

export interface MyButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  readonly className?: string
  readonly theme?: ThemeButton
}

export enum ThemeButton {
  CLEAR = 'clear',
  OUTLINE = 'outline'
}

const MyButton: FC<MyButtonProps> = (props) => {
  const { className, children, theme, ...otherProps } = props
  return (
    <button
        className={classNames(cls.btn, {}, [className, cls[theme]])}
        type="button"
        {...otherProps}
    >
      {children}
    </button>
  )
}

export { MyButton }
