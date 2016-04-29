import sps from './simplePubSub';
import EntryListItem from './EntryListItem';
import idgen from './idgen';

export default class EntryStateContainer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedEntries: []
    };
  }
  updateSelected(selected) {
    this.setState({selectedEntries: selected });
  }
  componentDidMount() {
    var that = this;
    sps.on('entries:selectItem', that.updateSelected.bind(that));
    sps.on('entries:deselectItem', that.updateSelected.bind(that));
  }
  render() {
    var that = this,
      selected = that.state.selectedEntries,
      handlers = {
        selectItem: that.props.selectItem,
        deselectItem: that.props.deselectItem
      };

    return <ul className='entry-list'>
      {this.props.entries.map((c,i,a)=> <EntryListItem listItem={c} selected={selected} background={c.imageUrl} key={idgen.generateUUID()} handlers={handlers} />)}
    </ul>;
  }
}
