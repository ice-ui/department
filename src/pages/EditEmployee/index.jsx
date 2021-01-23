import React, { PureComponent } from 'react';
import editEmployee from './EditEmployee.module.scss';
import Nav from '../../components/Nav';
import EditEmployeeInfo from '../../components/EditEmployeeInfo';

export default class EditEmployee extends PureComponent {
    render() {
        return (
            <div className={editEmployee.content}>
                {/* 顶部导航栏 */}
                <Nav/>
                {/* 编辑员工部分 */}
                <EditEmployeeInfo/>
            </div>
        )
    }
}
