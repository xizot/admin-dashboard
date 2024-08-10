import React from 'react'
import './_settingDrawerFooter.scss'
import { Button, Col, Row } from 'antd'
import { useAppDispatch } from '../../../hooks/redux.hook'
import { resetThemeConfig } from '../../../store/reducers/appConfig.reducer'

const SettingDrawerFooter = () => {
  const dispatch = useAppDispatch()

  const handleResetConfig = () => {
    dispatch(resetThemeConfig())
  }
  return (
    <Row className="setting-drawer-footer" justify="center" gutter={[8, 8]}>
      <Col className="setting-drawer-footer__item" flex="auto">
        <Button type="primary">Buy Now</Button>
      </Col>
      <Col className="setting-drawer-footer__item" flex="auto">
        <Button className="setting-drawer-footer__portfolio">Our Portfolio</Button>
      </Col>
      <Col className="setting-drawer-footer__item" flex="auto">
        <Button className="setting-drawer-footer__reset" onClick={handleResetConfig}>
          Reset
        </Button>
      </Col>
    </Row>
  )
}

export default SettingDrawerFooter
