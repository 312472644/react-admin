import MenuList from '../config/router/menu';

/**
 * 获取所有菜单列表
 *
 * @return {*} 
 */
const getAllMenuList = () => {
    let menuList = [];
    MenuList.forEach((item) => {
        if (item.subMenu?.length) {
            item.subMenu.forEach((subMenu) => {
                menuList.push(subMenu);
            });
        }
        menuList.push(item);
    });
    return menuList;
}

/**
 * 通过子节点id获取父节点
 *
 * @param {*} id
 */
const getParentNode = (id) => {
    let parentNode = '';
    MenuList.forEach((item) => {
        if (item.subMenu) {
            if (item.subMenu.some(_t => {
                return _t.id === id;
            })) {
                parentNode = item;
            }
        }
    })
    return parentNode;
};
export { getAllMenuList, getParentNode };