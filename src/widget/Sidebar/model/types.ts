import { RoutePath } from 'shared/config/appRouter/appRouterconfig';
import HomeIcon from 'shared/icons/home.svg';
import LoginIcon from 'shared/icons/login.svg';

export interface ISidebarItemType {
  path: string;
  text: string;
  icon: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
}

export const SidebarItemsList: ISidebarItemType[] = [
  { path: RoutePath.main, text: 'Главная', icon: HomeIcon },
  { path: RoutePath.profile, text: 'Профиль', icon: LoginIcon }
];
