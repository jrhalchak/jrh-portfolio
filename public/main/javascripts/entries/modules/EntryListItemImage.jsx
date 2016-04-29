export default class EntryListItemImage extends React.Component {
  render() {
    var c = this.props.item,
      imageStyle = {
        backgroundImage: `url('${this.props.bg}')`
      },
      codeLink = c.codeLink ? <a href={c.codeLink} target='_blank'>View Code</a> : null,
      entryLink = c.link ? <a href={c.link} target='_blank'>View</a> : null;

    return <div className='entry-list__image' style={imageStyle}>
      <div className='entry-list__image-links'>
        {entryLink}
        {codeLink}
      </div>
    </div>;
  }
}
