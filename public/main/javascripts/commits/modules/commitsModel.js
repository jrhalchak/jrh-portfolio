function getCommits(url) {
  return $.ajax({
    method: 'GET',
    contentType: 'jsonp',
    url: url
  });
}

function padLeft(s) {
  var str = s.toString();
  while(str.length < 2) {
    str = '0' + str;
  }
  return str;
}

function makeDateString(d) {
  return `${padLeft((d.getMonth() + 1).toString())}/${padLeft(d.getDate())}/${d.getFullYear().toString().slice(2)}`;
}

function mergeByAttribute(arr = []) {
  var uniqueDates = {};

  return arr.filter((c,i,a)=> {
    var dateString = c.date.replace(/\//g, ''),
      prev;

    if(uniqueDates.hasOwnProperty(dateString)) {
      prev = uniqueDates[dateString];
      prev.count += 1;
      return false;
    }
    uniqueDates[dateString] = c;
    return true;
  }).sort((a,b)=> {
    return new Date(a.date) - new Date(b.date);
  });
}

export default (repositories, callback) => {
  var promises = [],
    commitLists = [];

  repositories.forEach((c,i,a)=> {
    promises.push(getCommits(c).then((data)=> {
      var tempList = [];

      data.forEach((cur,ind,arr)=> {
        var curDate = new Date(cur.commit.author.date);
        tempList.push({
          //ids: [cur.sha],
          date: makeDateString(curDate),
          count: 1
        });
      });

      commitLists.push(mergeByAttribute(tempList.slice()));
    }));
  });

  $.when(...promises).done(()=> {
    //filterDown
    callback(commitLists);
  });

};
