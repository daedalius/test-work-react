import fetchSomeData from './fetchSomeData.js'

export default function someDataFetcherHOC(WrappedComponent) {
    return class extends React.Component {
        // constructor(props) {
        //     super(props);
        //     this.handleChange = this.handleChange.bind(this);
        //     this.state = {
        //         someData: null
        //     };
        // }

        componentDidMount() {
            fetchSomeData().then((someData) => {
                this.setState({ someData })
            })
        }

        render() {
            return <WrappedComponent someData={this.state.someData} {...this.props} />;
        }
    };
}
