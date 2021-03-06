import React, { useState, useCallback, useMemo } from 'react';
import { Typography, Button, Space, Tooltip } from 'antd';
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';

const { Paragraph } = Typography;

const paragraphStyle = { marginBottom: 0 };

function PasswordField({ children, copyable = true }: { children: string; copyable?: boolean }) {
  const [show, setShow] = useState(false);

  const showToggle = useCallback(e => {
    e.stopPropagation();
    setShow(prev => !prev);
  }, []);

  const copyConfig = useMemo(() => ({ text: children }), [children]);

  return (
    <Space size={0}>
      <Paragraph style={paragraphStyle} copyable={copyable ? copyConfig : undefined}>
        {show ? children : '• • • • • • • •'}
      </Paragraph>
      <Tooltip title={show ? 'Hide' : 'Show'}>
        <Button type="link" size="small" onClick={showToggle}>
          {show ? <EyeInvisibleOutlined /> : <EyeOutlined />}
        </Button>
      </Tooltip>
    </Space>
  );
}

export default PasswordField;
