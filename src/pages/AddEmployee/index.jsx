import React, { PureComponent } from 'react'
import Nav from '../../components/Nav';
import addEmployee from './AddEmployee.module.scss';
import AddEmployeeInfo from '../../components/AddEmployeeInfo';

export default class AddEmoloyee extends PureComponent {
    render() {
        return (
            <div className={addEmployee.content}>
                {/* 顶部导航栏 */}
                <Nav/>
                {/* 创建员工信息部分 */}
                <AddEmployeeInfo/>
              </div>
        )
    }
}
