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
});
