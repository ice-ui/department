import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.scss';
import iconAdd from '../../../assets/icon_add.png';
import iconSearch from '../../../assets/icon_search.png';
import { connect } from 'react-redux';

 function EmployeeSearch(props) {
    const { searchInputValue, changeSearchValue } = props;
    return (
        <div className={styles.content}>
            <div className={styles.search_box}>
            <i className={styles.search_icon}>
                    <img src={iconSearch} alt=""></img>
                </i>
                <input className={styles.input}
                    placeholder="姓名、工号、部门"
                    onChange={changeSearchValue}
                    value={searchInputValue}>
                </input>
            </div>
            <div className={styles.add_icon}>
                <NavLink to="/addEmployee">      
                    <img src={iconAdd} alt=""></img>
                </NavLink>
               
            </div>
        </div>
    )
};
const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeSearch);