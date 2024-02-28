import React from 'react'
import classNames from 'shared/lib/classNames/classNames'
import cls from './PageLoader.module.scss'
import { Loader } from 'shared/ui/Loader'

export interface PageLoaderProps {
  readonly className?: string
}

function PageLoader ({ className }: PageLoaderProps) {
  return (
    <div className={classNames(cls.pageLoader, {}, [className])}>
      <Loader />
    </div>
  )
}

export { PageLoader }
