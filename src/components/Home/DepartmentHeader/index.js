import React, { PureComponent } from 'react';
import styles from './styles.module.scss';
import iconViewList from '../../../assets/icon_view_list.png';
import iconViewModule from '../../../assets/icon_view_module.png';

export default class DepartmentHeader extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
  }
  render() {
    return (
      <div className={styles.nav}>
        <div className={styles.select_list}>
          {/* 左边部门切换部分 */}
          <ul className="header_left">
            {React.Children.map(this.props.children, (element, index) => {
              return (
                <li
                  className={this.itemNav(index)}
                  onClick={() => this.setState({ currentIndex: index })}
                >
                  {element.props.name}
                </li>
              );
            })}
          </ul>
          {/* 生序降序部分 */}
          <div className={styles.header_right}>
            <select className={styles.order}>
              <option>工号升序</option>
              <option>工号降序</option>
            </select>
            <div className={styles.switch}>
              <span className={styles.view_list}>
                <img src={iconViewList} alt=""></img>
              </span>
              <span className={styles.view_module}>
                <img src={iconViewModule} alt=""></img>
              </span>
            </div>
          </div>
          {/* 员工信息展示部分 */}
          <div class="content">
            {React.Children.map(this.props.children, (element, index) => {
              return (
                <div
                  onClick={() => {
                    this.setState({ currentIndex: index });
                  }}
                  className={this.itemContent(index)}
                >
                  {element}
                </div>
              );
            })}
          </div>
        </div>
        {/* <DepartmentNav/> */}
      </div>
    );
  }
}
