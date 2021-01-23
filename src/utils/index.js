import { PureComponent } from "react"

export function connect(mapStateToProps, mapDispatchToProp) {
    // 返回一个高阶组件
    return function enhanceHOC(wrappedComponent) {
        return class extends PureComponent{
            render() {
                return <wrappedComponent {...this.props}/>
            }
        }
    }
}
import React, { PureComponent } from 'react'

export default class index extends PureComponent {
    render() {
        return (
            <div>
                <h2>{props.counter}</h2>
                <div onClick={e=>props.addNumber()}></div>
            </div>
        )
    }
}



//connect(参数1，参数2)(组件)

//对应的映射--state
const mapStateToProps = (state) => {
    return {
        counter: state.counter
    }
};
//映射到props
const mapDispatchToProp = (dispatch) => {
    return {
        addNumber: function () {
            dispatch(addNumber())
        }
    }
}
connect(mapStateToProps, mapDispatchToProp)