var React = require('react'),
    Editor = require('react-md-editor');

class Test extends React.Component{
    constructor(props){
        super(props);
    }
    getInitialState() {
        return {
            code: "# Markdown"
        };
    }
    updateCode(newCode) {
        this.setState({
            code: newCode
        });
    }
    render() {
            return <Editor value={this.state.code} onChange={() => {this.updateCode('#test')} }/>
    }
}

export default Test;