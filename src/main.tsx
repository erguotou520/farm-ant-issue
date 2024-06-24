import "./main.css";
import zhCN from 'antd/locale/zh_CN'
import { ConfigProvider, message } from "antd";
import { useEffect } from "react";
export function Main() {

  useEffect(() => {
    message.info('Hello, Ant Design!');
  }, [])

  return (
    <ConfigProvider
        locale={zhCN}
        theme={{
          cssVar: true,
          hashed: false,
          token: {
            colorPrimary: '#8473FF',
            colorLink: '#8473FF',
            colorInfo: '#8473FF',
            borderRadius: 2
          },
          components: {
            Menu: {
              darkItemBg: 'transparent',
              darkItemColor: 'black',
              darkItemHoverBg: '#8473FF',
              itemBorderRadius: 4,
              itemPaddingInline: 30
            },
            Button: {
              borderRadius: 4
            }
          }
        }}
      >
        <div>123</div>
    </ConfigProvider>
  );
}
