function removeUrlAnchor(url){
    //split the url at the # and return the first value
    var split = url.split('#', 1);
    //toString
    return split.toString();
    //console.log(split);
  }