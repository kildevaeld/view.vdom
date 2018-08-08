import { h, Component } from 'preact';

export interface Props {
    who: string;
}

export class Test extends Component<Props, any> {


    explode() {
        this.setState({ rapper: 'tesdt' })
    }

    render() {
        return <div>
            <h1>Hello, {this.props.who} - {this.state.rapper}</h1>
        </div>
    }

}