var that = require( '../that' ),
  assert = require ( 'assert' );

describe( 'Simple test for methods the validations', function() {
  it( 'Testing method isObject. Should return true.', function() {
    assert( that.isObject({}) );
  });

  it( 'Testing method isArray. Should return true.', function() {
    assert( that.isArray([]) );
  });

  it( 'Testing method isString. Should return true.', function() {
    assert( that.isString('') );
  });

  it( 'Testing method isNumber. Should return true.', function() {
    assert( that.isNumber(1) );
  });

  it( 'Testing method isBool. Should return true.', function() {
    assert( that.isBool(false) );
  });

  it( 'Testing method isEmpty. Should return true.', function() {
    assert.equal( that.isEmpty({}), true, 'isEmpty for Object fail ;(' );
    assert.equal( that.isEmpty([]), true, 'isEmpty for Array fail ;(' );
    assert.equal( that.isEmpty(), true, 'isEmpty for other types fail ;(' );
  });

  it( 'Testing method isNotEmpty. Should return true.', function() {
    assert( that.isNotEmpty({ isEmpty: false }), 'isNotEmpty for Object fail ;(' );
    assert( that.isNotEmpty([ true ]), 'isNotEmpty for Array fail ;(' );
    assert( that.isNotEmpty( 'Anything' ), 'isNotEmpty for other types fail ;(' );
  });
});


describe( 'Simple test for method the arrays', function() {
  it( 'Testing method hasEqual. Should return true.', function() {
    assert( that.hasEqual([1, 2, 3], [3, 2, 1]), 'hasEqual It has any no equal value.' );
    assert( that.hasEqual(['car', 'ball', 'money'], ['money', 'ball', 'car'], 'all'), 'hasEqual All values ​​must be equal.' );
    assert( that.hasEqual([1, 2, 3], [3], 'any'), 'hasEqual Must have only a few values ​​equal.' );
  });
});


describe( 'Simple test for method the objects', function() {
  it( 'Testing method copy.', function() {
    var clone = {};
    that.copy(clone, { test: true });
    assert.equal( clone.test , true, 'Testing for method copy fail.' );
  });

  it( 'Testing method hasDeepProperty. Should return true.', function() {
    assert( that.hasDeepProperty({ nome: 'teste' }, 'nome'), 'hasDeepProperty do not have the property' );
  });

  it( 'Testing method isEqual. Should return true', function() {
    var obj = { string: 'teste', number: 12345 };
    assert( that.isEqual( obj , 'teste' ), 'isEqual No property has this value' );
    assert( that.isEqual( obj.string , 'teste' ), 'isEqual The reported property does not have this value' );
    assert( that.isEqual( obj.number , 12345 ), 'isEqual The reported property does not have this value' );
    assert( that.isEqual( 'teste' , 'teste' ), 'isEqual The sent string is not the same' );
    assert( that.isEqual( 12345 , 12345 ), 'isEqual The number sent is not the same' );
  });

  it( 'Testing method FindValue. Should return true.', function() {
    assert( that.findValue({ number: 1 }, 1), 'FindValue The array does not have the value reported');
    assert( that.findValue({ string1: 'Jhon', string2: 'Richard'}, 'Richard'), 'FindValue The object does not have the value reported');
    assert( that.findValue({ array: [1, 2, 3] }, [3, 2, 1]), 'FindValue The informed array does not contain object');
    assert( that.findValue({ array: [1, 2, 3] }, [3, 2, 1], 'all'), 'FindValue The object does not have the array informed');
    assert( that.findValue({ array: [1, 2, 3] }, [3], 'any'), 'FindValue The object does not have the array informed');
  });
});
