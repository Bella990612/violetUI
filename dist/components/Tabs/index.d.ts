import { FC } from 'react'
import { TabsProps } from './tabs'
import { TabItemProps } from './tabItem'
export type ITabsComponent = FC<TabsProps> & {
  Item: FC<TabItemProps>
}
declare const TransTabs: ITabsComponent
export default TransTabs
