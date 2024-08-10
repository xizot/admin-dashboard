import { Col, Radio, RadioChangeEvent, Row, Typography } from 'antd'
import { ThemeCategory } from '../../types/theme'
import './_settingDrawerItem.scss'

type ThemeStylesItemProps = ThemeCategory & {
  onChange?: (id: string, value: string) => void
  selected?: string
}

const SettingDrawerItem = ({ name, id, options = [], onChange, selected }: ThemeStylesItemProps) => {
  const handleOptionChange = (event: RadioChangeEvent) => {
    const { value } = event.target
    if (onChange) {
      onChange(id, value)
    }
  }

  return (
    <div className="setting-drawer-item">
      <Typography.Paragraph className="setting-drawer-item__title">{name}</Typography.Paragraph>
      <Radio.Group name={id} onChange={handleOptionChange} value={selected} className="setting-drawer-item__options">
        <Row className="setting-drawer-item__row">
          {options.map((option: any) => (
            <Col key={option.value} span={24 / 3}>
              <Radio value={option.value}>{option.name}</Radio>
            </Col>
          ))}
        </Row>
      </Radio.Group>
    </div>
  )
}

export default SettingDrawerItem
