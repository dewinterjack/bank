module.exports = function(){

  function header(headers){
    var formatted = headers.map(head => 
      blockify(head[0].toUpperCase() + head.substring(1)));
    return formatted;
  }

  function blockify(string){
    return '| ' + string + ' |';
  }

  function blockifyByHead(){

  }

  return {
    header: header
  };

}();

  // takes a string and puts it in the centre of a block of | pipes | of size of largest header
  // use .map to take transactions to blocked ones