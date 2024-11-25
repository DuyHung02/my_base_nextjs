'use client';

import React from 'react';
import { Button, Result } from 'antd';

function Page() {
  return (
    <Result
      style={{ marginTop: '5%' }}
      status="403"
      title="403"
      subTitle="Sorry, you do not have permission to access this page."
      extra={
        <Button type="primary" onClick={() => window.location.replace('/')}>
          Back
        </Button>
      }
    />
  );
}

export default Page;
