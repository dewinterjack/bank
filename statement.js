module.exports = function(){

  function transactionProperties(obj) {
    if (obj == null) return; // recursive approach
    console.log(Object.getOwnPropertyNames(obj));
    logAllProperties(Object.getPrototypeOf(obj));
  }

  function header(headers){
    var formatted = headers.map(head => 
      blockify(head[0].toUpperCase() + head.substring(1)));
    return formatted;
  }

  function blockify(string){
    return '| ' + string + ' |';
  }

  function blockifyByLargest(){

  }

  function formatRows(transactions){
    var formatted = transactions.map(t => {
      return {
        date: t.getDate(),
        type: t.type,
        amount: t.amount
      };
    });
  }

  return {
    header: header
  };

}();

  // takes a string and puts it in the centre of a block of | pipes | of size of largest header
  // use .map to take transactions to blocked ones