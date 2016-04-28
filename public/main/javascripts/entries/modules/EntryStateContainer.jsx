export default class EntryStateContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedEntry: null
    }
  }
  componentDidMount() {
    // sub stuff here
  }
  render() {
    return <EntryList listItems={this.props.entries} selected={this.state.selected} />;
  }
}