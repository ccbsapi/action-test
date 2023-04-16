function f_search_sage(code){
  const endpoint = "https://benri.ga/api/sage.py";
  const url = endpoint + "?code=" + encodeURIComponent(code);
  const sage = JSON.parse(UrlFetchApp.fetch(url));
  const {stdout,images,files} = sage;
  const res = [
    {
      type : 'text',
      content : stdout,
    }
  ]
  if(files.length){
    res.push({
      type : 'text',
      content : 'Files:\n'+files.join('\n'),
    });
  }
  for(let i in media){
    res.push({
      type : 'image',
      url : media[i],
    })
  }
  return res;
}

test(){
  Logger.log(f_search_sage('print(3*5)'));
}