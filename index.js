function locationHashParser(hash = ""){
  if(!hash){
    return {};
  }

  hash.trim();

  if(hash[0] === "#"){
    hash = hash.slice(1);
  }

  const items = hash.split("&");

  return items.reduce((res, item) => {
    const pair = item.split("=");
    res[pair[0]] = pair[1];
    return res;
  }, {})
}

module.exports = locationHashParser;