import React, { PureComponent } from 'react';
import styles from './index.module.scss';

export default class AddEmployeeInfo extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      department: '',
      position: '',
    };
  }
  render() {
    return (
      <div className={styles.box}>
        <div className={styles.login_frame}>
          <form onSubmit={e => this.handleSubmit(e)}>
            <p>
              <label className={styles.label_input}>姓名</label>
              <input
                type="text"
                className={styles.text_field}
                placeholder="请输入姓名"
                onChange={e => this.handleChange(e)}
                value={this.state.username}
                name="username"
                autoFocus
              ></input>
            </p>
            <p>
              <label className={styles.label_input}>邮箱</label>
              <input
                type="email"
                className={styles.text_field}
                placeholder="请输入邮箱"
                onChange={e => this.handleChange(e)}
                value={this.state.email}
                name="email"
              ></input>
              <div ref="error"></div>
            </p>

            <p className={styles.select}>
              <label className={styles.label_input}>部门</label>
              <select
                name="department"
                onChange={e => this.handleChange(e)}
                value={this.state.department}
              >
                <option>请选择部门</option>
                <option>App开发部</option>
                <option>Web开发部</option>
                <option>品质管理部</option>
              </select>
            </p>
            <p className={styles.select}>
              <label className={styles.label_input}>职位</label>
              <select name="position" onChange={e => this.handleChange(e)}>
                <option>请选择职位</option>
                <option>Frontend Engineer</option>
                <option>iOS Engineer</option>
                <option>Android Engineer</option>
                <option>QA Engineer</option>
                <option>Backend Engineer</option>
              </select>
            </p>
            <button className={styles.cancle_btn} onClick={() => window.history.back(-1)}>
              取消
            </button>
            <button className={styles.create_btn} type="submit">
              确认
            </button>
          </form>
        </div>
      </div>
    );
  }
  handleSubmit(event) {
    event.preventDefault();
    const { username, email, department, position } = this.state;
    console.log(username, email, department, position);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }
}
