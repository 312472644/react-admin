import Home from '../../pages/home/home'
import RoleManager from '../../pages/roleManager/roleManager'
import UserManager from '../../pages/userManager/index';
import SystemTool from '../../pages/systemTool/systemTool'
import Performance from '../../pages/performance/performance'
import Resource from '../../pages/resource/resource'

import { HomeFilled, SettingFilled, DashboardFilled, ToolFilled, ZhihuCircleFilled, TwitterCircleFilled } from '@ant-design/icons'
const menu = [{
    id: 1,
    name: 'home',
    path: '/home',
    title: '首页',
    icon: <HomeFilled />,
    component: Home
}, {
    id: 2,
    name: 'system',
    path: '/system',
    title: '系统管理',
    icon: <SettingFilled />,
    subMenu: [{
        id: 3,
        name: 'userManager',
        path: '/system/userManager',
        title: '用户管理',
        icon: <ZhihuCircleFilled />,
        component: UserManager
    }, {
        id: 4,
        name: 'roleManager',
        path: '/system/roleManager',
        title: '角色管理',
        icon: <TwitterCircleFilled />,
        component: RoleManager
    }]
}, {
    id: 5,
    name: 'systemMonitor',
    path: '/systemMonitor',
    title: '系统监控',
    icon: <DashboardFilled />,
    component: '',
    subMenu: [{
        id: 7,
        name: 'performance',
        path: '/systemMonitor/performance',
        title: '用户监控',
        icon: <ZhihuCircleFilled />,
        component: Performance
    }, {
        id: 8,
        name: 'resource',
        path: '/systemMonitor/resource',
        title: '资源监控',
        icon: <ZhihuCircleFilled />,
        component: Resource
    }]
}, {
    id: 6,
    name: 'systemTool',
    path: '/systemTool',
    title: '系统工具',
    icon: <ToolFilled />,
    component: SystemTool
}]

export default menu;