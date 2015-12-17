
var interval = function(){
    return {
        componentDidMount:function(){
            this.interval = setInterval(this.tick,1000)
        },
        componentWillUnmount:function(){
            clearInterval(this.interval);
        }
    }
}
var Component = React.createClass({
    mixins:[interval()],
    getInitialState:function(){
        return {
            count:0
        }
    },
    tick:function(){
        this.setState({
            count:this.state.count+1
        });
        console.log(this.state.count);
    },
    render:function(){
        return (<p>组件运行时间：{this.state.count}<br/><span onClick={this.kill}>删除组件</span></p>)
    },
    kill:function(){
        console.log(document.getElementById('app'));
        ReactDOM.unmountComponentAtNode(document.getElementById('app') );
    }
});
ReactDOM.render(<Component/>,document.getElementById('app'));