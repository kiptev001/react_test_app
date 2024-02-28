import React, { type FC, useState } from 'react'
import cls from './Sidebar.module.scss'
import classNames from 'shared/lib/classNames/classNames'
import { MyButton, ThemeButton } from 'shared/ui/Button'
import { ThemeSwitcher } from 'widget/ThemeSwitcher'
import { LanguageSwitcher } from 'widget/LanguageSwitcher'
import { useTranslation } from 'react-i18next'

export interface SidebarProps {
  readonly className?: string
}

const Sidebar: FC<SidebarProps> = (props) => {
  const { className } = props
  const [collapsed, setCollapsed] = useState(false)
  const { t } = useTranslation()
  const openSidebar = () => {
    setCollapsed((pr) => !pr)
  }

  return (
    <div
        className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
          className
        ])}
        data-testid="test-sidebar"
    >
      <MyButton
          data-testid="test-sidebar-button"
          onClick={openSidebar}
          theme={ThemeButton.CLEAR}
      >
        {t('Открыть')}
      </MyButton>

      <div className={cls.switchers}>
        <ThemeSwitcher />

        <LanguageSwitcher />
      </div>
    </div>
  )
}

export { Sidebar }
