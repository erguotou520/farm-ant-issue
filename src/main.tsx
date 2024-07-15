import './main.css'
import zhCN from 'antd/locale/zh_CN'
import { Button, ConfigProvider } from 'antd'
import { useEffect } from 'react'
export function Main() {
  useEffect(() => {
    console.log('Hello, Ant Design!')
    // message.info('Hello, Ant Design!')
    fetch('/api/hello').catch(console.warn)
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
          borderRadius: 2,
        },
        components: {
          Menu: {
            darkItemBg: 'transparent',
            darkItemColor: 'black',
            darkItemHoverBg: '#8473FF',
            itemBorderRadius: 4,
            itemPaddingInline: 30,
          },
          Button: {
            borderRadius: 4,
          },
        },
      }}
    >
      <Button>123</Button>
    </ConfigProvider>
  )
}
