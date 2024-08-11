import { Button, Col, Drawer, Row } from 'antd'
import { ThemeConfig, themeConfigs } from '../../constants/themeConfig'
import { useAppDispatch, useAppSelector } from '../../hooks/redux.hook'
import { updateThemeConfig } from '../../store/reducers/appConfig.reducer'
import SettingDrawerItem from '../SettingDrawerItem'
import './_settingDrawer.scss'
import { useState } from 'react'
import SettingDrawerFooter from './SettingDrawerFooter'

type TabType = 'ThemeStyles' | 'ThemeColor'

const Tab: Record<TabType, TabType> = {
  ThemeStyles: 'ThemeStyles',
  ThemeColor: 'ThemeColor',
}

const tabs = [
  {
    id: Tab.ThemeStyles,
    name: 'Theme Styles',
  },
  {
    id: Tab.ThemeColor,
    name: 'Theme Color',
  },
]

type SettingDrawerProps = {
  open: boolean
  onClose: () => void
}

const SettingDrawer = ({ open, onClose }: SettingDrawerProps) => {
  const { themeConfig } = useAppSelector((state) => state.appConfig)
  const [activeTab, setActiveTab] = useState<TabType>(Tab.ThemeStyles)

  const dispatch = useAppDispatch()

  const handleChangeTab = (tabId: TabType) => {
    setActiveTab(tabId)
  }

  const handleChangeConfig = (id: string, value: string) => {
    dispatch(updateThemeConfig({ ...themeConfig, [id]: value }))
  }

  return (
    <Drawer onClose={onClose} open={open} title="Switcher" className="setting-drawer white-drawer" footer={<SettingDrawerFooter />}>
      <Row className="setting-drawer__tabs">
        {tabs.map((tab) => (
          <Col key={tab.id} span={24 / tabs.length}>
            <Button onClick={handleChangeTab.bind(null, tab.id)} className={`setting-drawer__tab__btn${activeTab === tab.id ? ' active' : ''} `}>
              {tab.name}
            </Button>
          </Col>
        ))}
      </Row>
      {activeTab === Tab.ThemeStyles &&
        Object.keys(themeConfigs).map((key) => {
          const { id, name, options } = themeConfigs[key as keyof ThemeConfig]
          const selectedValue = themeConfig[id as keyof ThemeConfig]
          return <SettingDrawerItem key={id} id={id} name={name} options={options} onChange={handleChangeConfig} selected={selectedValue} />
        })}
    </Drawer>
  )
}

export default SettingDrawer
