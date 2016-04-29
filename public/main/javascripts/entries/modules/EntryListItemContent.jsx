export default class EntryListItemContent extends React.Component {
  handleClick(e) {
    var id = e.target.dataset.id,
      selectFunction = this.props.selected ? this.props.handlers.deselectItem : this.props.handlers.selectItem;

    selectFunction(id);
  }
  render() {
    var c = this.props.item;

    return <div className='entry-list__item-content'>
      <div className='entry-list__title'>{c.title}</div>
      <div className='entry-list__body' dangerouslySetInnerHTML={{__html: c.body}}></div>
      <div className='entry-list__more-button' onClick={this.handleClick.bind(this)} data-id={c._id}>{this.props.selected ? 'Collapse' : 'Read More'}</div>
    </div>;
  }
}
