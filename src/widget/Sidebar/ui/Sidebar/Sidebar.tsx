import React, { useState } from 'react';
import cls from './Sidebar.module.scss';
import classNames from 'shared/lib/classNames/classNames';
import { MyButton, ThemeButton } from 'shared/ui/Button';
import { ThemeSwitcher } from 'widget/ThemeSwitcher';
import { LanguageSwitcher } from 'widget/LanguageSwitcher';
import { SidebarItemsList } from 'widget/Sidebar/model/types';
import SidebarItem from '../SideBarItem/SidebarItem';

export interface SidebarProps {
  readonly className?: string;
}

function Sidebar(props: SidebarProps) {
  const { className } = props;
  const [collapsed, setCollapsed] = useState(false);

  const openSidebar = () => {
    setCollapsed(pr => !pr);
  };

  return (
    <div
      className={classNames(cls.sidebar, { [cls.collapsed]: collapsed }, [
        className
      ])}
      data-testid="test-sidebar"
    >
      <div className={cls.links}>
        {SidebarItemsList.map(el => {
          return <SidebarItem collapsed={collapsed} item={el} key={el.text} />;
        })}
      </div>
      <MyButton
        className={classNames(cls.collapseBtn, {}, ['white'])}
        data-testid="test-sidebar-button"
        onClick={openSidebar}
        theme={ThemeButton.BACKGROUND_INVERTED}
      >
        {collapsed ? '>' : '<'}
      </MyButton>

      <div
        className={classNames(cls.switchers, { [cls.column]: collapsed }, [])}
      >
        <ThemeSwitcher />

        <LanguageSwitcher />
      </div>
    </div>
  );
}

const memoizedSidebar = React.memo(Sidebar);

export { memoizedSidebar as Sidebar };
