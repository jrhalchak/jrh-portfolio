import EntryListItemImage from './EntryListItemImage';
import EntryListItemContent from './EntryListItemContent';

export default class EntryListItem extends React.Component {
    render() {
        var that = this,
          c = that.props.listItem,
          bg = that.props.background,
          isSelected = that.props.selected.indexOf(c._id) >= 0,
          handlers = that.props.handlers;

        return <li className={'entry-list__item' + (isSelected ? ' is-active' : '') }>
          <EntryListItemImage item={c} bg={bg} />
          <EntryListItemContent item={c} selected={isSelected} handlers={handlers} />
        </li>;
    }
}
