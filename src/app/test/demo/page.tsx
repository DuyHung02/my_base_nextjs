import { Button, Col, Input, Row } from 'antd';
import React from 'react';

const DemoPage = () => {
  return (
    <div>
      <Row>
        <Col>Col 1</Col>
        <Col>
          <Input />
        </Col>
        <Col>
          <Button />
        </Col>
      </Row>
    </div>
  )
}

export default DemoPage;