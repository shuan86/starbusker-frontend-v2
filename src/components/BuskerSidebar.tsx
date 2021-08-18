import React from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import Photo from '../public/img/busker-info-photo.png'
import pageIcon from '../public/svg/busker-page-icon.svg'
import dataIcon from '../public/svg/busker-data-icon.svg'
import performanceIcon from '../public/svg/busker-performance-icon.svg'
import commentIcon from '../public/svg/busker-comment-icon.svg'
import '../public/css/buskerSidebar.css'
import { path } from "../modules/routerPath";

type useLocationType = {
    pathname: string
    search: string
    hash: string
}

const SidebarItem = ({ icon, name, path }) => {
    let location = useLocation();
    let pathLocation = JSON.stringify(location);
    const pageLocattion: useLocationType = JSON.parse(pathLocation)
    let history = useHistory();
    const onClickSidebarItem = (path) => {
        history.push(path);
    }
    return (
        <div className={pageLocattion.pathname == path ? 'busker-sidebar-item busker-sidebar-item-active' : 'busker-sidebar-item'} onClick={() => onClickSidebarItem(path)}>
            {/* busker-sidebar-item-active 觸發*/}
            <img src={icon} className='busker-sidebar-item-icon'></img>
            <div className='busker-sidebar-item-name'>{name}</div>
        </div>
    )
}



export const BuskerSidebar = () => {
    return (
        <div className='busker-sidebar'>
            <img src={Photo} alt='Photo' className='busker-sidebar-photo' />
            <h3 className='busker-sidebar-name'>謝孟迪</h3>
            <SidebarItem icon={pageIcon} name='資訊總覽' path={path.busker} />
            <SidebarItem icon={dataIcon} name='洞察分析' path={path.busker_data} />
            <SidebarItem icon={performanceIcon} name='演出登記' path={path.busker_apply_performance} />
            <SidebarItem icon={commentIcon} name='留言板' path={path.busker_comment_board} />
        </div>
    )
}
