import { useState } from 'react';
import Link from 'next/link';

import { Layout, Badge, theme, Typography, Button, Drawer, Menu, Dropdown, Space } from "antd"
const { Title } = Typography;
const { Header } = Layout;
import { IconChefHat, IconShoppingCart, IconMoonFilled, IconSunFilled, IconMenu2 } from '@tabler/icons-react';
import { DownOutlined, SmileOutlined } from '@ant-design/icons';

import { magentaTheme, darkTheme } from '../../themes';
import { menuOptions } from '@/utils/menuOptions';

import styles from './menu.module.css'

const items = [
  {
    key: '1',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.antgroup.com">
        1st menu item
      </a>
    ),
  },
  {
    key: '2',
    label: (
      <a target="_blank" rel="noopener noreferrer" href="https://www.aliyun.com">
        2nd menu item (disabled)
      </a>
    ),
    icon: <SmileOutlined />,
    disabled: true,
  },
];

export const HeaderComponent = ({ setTheme, handleClick }) => {
  const [ isDark, setIsDark] = useState(false)
  const [open, setOpen] = useState(false);

  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const { useToken } = theme;
  const { token } = useToken();

  const handleDarkMode = () => {
    setIsDark(!isDark)
    !isDark ? setTheme({...darkTheme}) : setTheme({...magentaTheme})
  }


  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };
  
  return (
    <Header 
      style={{ 
        background: colorBgContainer,
        // borderBottom: `2px dotted ${token.colorPrimary}`,
        display: 'flex', 
        padding: '0px 20px', 
        position: 'sticky',
        top: 0,
        transition: '0.3s', 
        zIndex: 2,
        opacity: .9,
        marginBottom: '20px'
      }}
    >
      <nav 
        style={{
          display: 'flex', 
          width: '100%', 
          justifyContent: 'space-between',
 
          maxWidth: '1400px', 
          margin: '0 auto'
        }}
        >
          <div style={{ display: 'flex', alignItems: 'center'}} >
            <Button className={styles.menuIcon} type="text" onClick={showDrawer} icon={<IconMenu2 color={token.colorPrimary} />} />
            
            <Drawer
              // title="Menu"
              placement="left"
              onClose={onClose}
              open={open}
              >
              <Menu
                style={{ 
                  borderInline: 'none',
                  borderRadius: '10px',
                  paddingBottom: '10px',
                }}
                mode="inline"
                defaultSelectedKeys={['1']}
                items= {...menuOptions}
                onClick={(e) => {handleClick(e)}}
                />
            </Drawer>

            <Link href="/" style={{display: 'flex', alignItems: 'center'}}>
              <IconChefHat size={36} color={`${token.colorPrimary}`}/>      
              <Title level={4} style={{marginLeft:'5px'}}>Magenta kitchen</Title>
            </Link>
          </div>

        <div style={{display: "flex"}} >
        <Dropdown
        menu={{
          items,
        }}
      >
        <a onClick={(e) => e.preventDefault()}>
          {/* <Space> */}
            <Title style={{color: token.colorPrimary}} level={4}>
              Admin
            </Title>
            {/* <DownOutlined /> */}
          {/* </Space> */}
        </a>
      </Dropdown>
          <div style={{display: 'flex',alignItems: 'center', marginRight: '20px'}}>
            <Button 
              icon={ isDark ? <IconSunFilled /> :<IconMoonFilled />} 
              type='text' 
              shape='circle' 
              onClick={handleDarkMode}
            />
          </div>

          
          <Link href='/checkout' style={{display: 'flex',alignItems: 'center'}}>
            <Badge count={1}>
              <IconShoppingCart />
            </Badge>
          </Link>
        </div>
      </nav>
    </Header>
  )
}