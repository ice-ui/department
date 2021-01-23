import React, { PureComponent } from 'react'
import styles from './styles.module.scss';
import { connect } from 'react-redux';

class EmployeeMessageNav extends PureComponent {
    render() {
        return (
              <table>
                <thead className={styles.content}>
                    <tr>
                        <th>工号</th>
                        <th>姓名</th>
                        <th>邮箱</th>
                        <th>部门</th>
                        <th>职位</th>
                    </tr>
                </thead>
                {/* 显示所有员工信息 */}
                <tbody>      
                </tbody>
            </table>
            
        )
    }
}
 const mapStateToProps = state => ({
   
 });

const mapDispatchToProps = dispatch => ({
       
})
    
export default connect(mapStateToProps,mapDispatchToProps)(EmployeeMessageNav);