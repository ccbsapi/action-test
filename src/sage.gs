function f_search_sage(code){
  const endpoint = "https://benri.ga/api/sage.py";
  const url = endpoint + "?code=" + encodeURIComponent(code);
  const json = UrlFetchApp.fetch(url);
  Logger.log(json);
  const sage = JSON.parse(json);
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
  for(let i in images){
    res.push({
      type : 'image',
      url : images[i],
    })
  }
  return res;
}

function test(){
  Logger.log(f_search_sage('print(3*5)'));
}