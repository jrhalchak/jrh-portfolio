import sps from './simplePubSub';
import entryApp from './EntryStateContainer';

var appModel = {
    entries: []
  },
  selectedCache = [];

export default {
  getEntries: ()=> {
    return $.ajax({
      url: '/api/entries',
      method: 'GET',
      dataType: 'json'
    });
  },
  selectItem: (id)=> {
    var index = selectedCache.indexOf(id);
    index === -1 && selectedCache.push(id);
    sps.trigger('entries:selectItem', selectedCache);
  },
  deselectItem: (id)=> {
    var index = selectedCache.indexOf(id);
    index !== -1 && selectedCache.splice(index, 1);
    sps.trigger('entries:deselectItem', selectedCache);
  },
  renderApp: function(node) {
    appModel.selectItem = this.selectItem;
    appModel.deselectItem = this.deselectItem;
    ReactDOM.render(React.createElement(entryApp, appModel), node);
    return this;
  },
  initApp: function(node) {
    var that = this;

    that.getEntries().then((data)=> {
      appModel.entries = data;
      that.renderApp(node);
    });
  }
};
