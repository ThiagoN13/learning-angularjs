var that = require( '../that' ),
  assert = require ( 'assert' );

describe( 'Simple test for lib that', function() {
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
