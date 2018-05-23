module.exports = function(){

  function header(headers){
    return blockify(head);
  }

  function blockify(string){
    return '| ' + string + ' |';
  }

  function blockifyByHead(){

  }

  return {
    header: header,
    blockify: blockify
  };

}();

  // takes a string and puts it in the centre of a block of | pipes | of size of largest header
  // use .map to take transactions to blocked ones