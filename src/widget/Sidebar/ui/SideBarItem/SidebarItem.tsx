import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import AppLink, { AppLinkTheme } from 'shared/ui/AppLink/AppLink';
import { type ISidebarItemType } from '../../model/types';
import cls from './SidebarItem.module.scss';

export interface ISidebarItemProps {
  readonly item: ISidebarItemType;
  readonly collapsed: boolean;
}

const SidebarItem = ({ item, collapsed }: ISidebarItemProps) => {
  const { t } = useTranslation();

  return (
    <AppLink className={cls.item} theme={AppLinkTheme.SECONDARY} to={item.path}>
      {collapsed ? (
        <item.icon className={cls.icon} />
      ) : (
        <div className={cls.link}>
          <item.icon className={cls.icon} />
          {t(item.text)}
        </div>
      )}
    </AppLink>
  );
};

export default memo(SidebarItem);
