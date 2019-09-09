import React, {Component} from 'react';

class HeaderContent extends Component {
    constructor (props) {
        super(props)
        console.log(this.props.getname)
        this.state = {
            name: this.props.getname
        }
    }
    clickPre = () => {
        this.props.clickMe('你好，我是子组件')
    }
    render () {
        let {name} = this.state;
        return (
            <div>
                <h2 className="hello" style={{'height':'90px','color':'red'}}>我是子组件的header</h2>

                {name}
                <button onClick={this.clickPre}>调用父组件的方法</button>
            </div>
        )
    }
}
export default  HeaderContent