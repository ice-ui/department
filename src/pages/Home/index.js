import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import styles from './index.module.scss';
import { getDepartments, getEmployees } from '../../actions';
import Nav from '../../components/Nav';
import EmployeeSearch from '../../components/Home/EmployeeSearch';
import DepartmentHeader from '../../components/Home/DepartmentHeader';
import DepartmentList from '../../components/Home/DepartmentList';
import EmployeeMessageNav from '../../components/Home/EmployeeMessageNav';

class Home extends PureComponent {
  render() {
    return (
      <div className={styles.home}>
        <div className={styles.content}>
          {/* 顶部导航栏 */}
          <Nav />
          {/* 搜索框 */}
          <EmployeeSearch />
          {/* 部门信息部分 */}
          <DepartmentHeader />
          <EmployeeMessageNav />
          <DepartmentList />
        </div>
      </div>
    );
  }
}

// eslint-disable-next-line no-unused-vars
const mapStateToProps = state => ({
  departments: state.departments,
  employees: state.employees,
});

const mapDispatchToProps = dispatch => ({
  getDepartments: () => {
    dispatch(getDepartments());
  },
  getEmployees: () => {
    dispatch(getEmployees());
  },
});

Home.propTypes = {};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
