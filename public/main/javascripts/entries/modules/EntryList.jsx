export default class EntryList extends React.Component {
    render() {
        var that = this,
          entryList = that.props.listItems;
          
        return <ul className='entry-list'>
          {entryList.map(c,i,a) => {
            var selected = that.props.selected,
              imageStyle = {
                backgroundImage: c.imageUrl
              }
            return <li className={'entry-list__item' + (selected == c._id ? 'is-active' : '') } key=''>
                <EntryListItemImage item={c} />
                <EntryListItemContent item={c} />
            </li>;
          }}
        </ul>;
    }
}

export default class EntryListItemImage extends React.Component {
  render() {
    var codeLink = c.codeLink ? <a href={c.link} target='_blank'>View Code</a> : null,
      link = c.link ? <a href={c.link} target='_blank'>View</a> : null;
      
    return <div className='entry-list__image' style={imageStyle}>
      <div className='entry-list__image-links'>
        {link}
        {codeLink}
      </div>
    </div>
  }
}

export default class EntryListItemContent extends React.Component {
  render() {
    return <div className='entry-list__item-content'>
      <div className='entry-list__title'>{c.title}</div>
      <div className='entry-list__body'>{c.body}</div>
    </div>
  }
}