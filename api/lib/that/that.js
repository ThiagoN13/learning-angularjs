(function() {
  var isNode =  ( typeof module === 'object' && module ) && ( typeof module.exports === 'object' && module.exports );

  var That = (function () {
    var objectPrototype = Object.prototype,
      toString = objectPrototype.toString;

    function _isObject( arg ) {
      return toString.call( arg ) === '[object Object]';
    }

    function _isArray( arg ) {
      return toString.call( arg ) === '[object Array]';
    }

    function _isString( arg ) {
      return toString.call( arg ) === '[object String]';
    }

    function _isNumber( arg ) {
      return toString.call( arg ) === '[object Number]';
    }

    function _isBool( arg ) {
      return toString.call( arg ) === '[object Boolean]';
    }

    function _isEmpty( arg ) {
      if ( !arg ) {

        return true;

      } else if ( _isObject(arg) ) {
        for ( var property in arg ) {
          return false;
        }
        return true;
      } else if ( _isArray( arg ) ) {
        if ( arg.length <= 0 ) {

          return true;

        }
      }

      return false;
    }

    function _isNotEmpty( arg ) {
      if ( !arg ) {

        return false;

      } else if ( _isObject(arg) ) {
        for ( var property in arg ) {
          return true;
        }
      } else if ( _isArray( arg ) ) {
        if ( arg.length <= 0 ) {

          return false;

        }
      }

      return true;
    }

    function _isBool( arg ) {
      return toString.call( arg ) === '[object Boolean]';
    }

    function _isEqual( arg, valueToCompare ) {
      for ( var property in arg ) {
        if ( _isObject( arg ) && arg[ property ] === valueToCompare ) {
          return true;
        }
      }

      return arg === valueToCompare;
    }

    function _hasEqual ( arg, value, options ) {
      options = options || 'all';
      var count = 0;

      if ( _isArray( arg ) && _isArray( value )) {
        for( var index = 0; index < arg.length ; index++) {
          for ( var indicator = 0; indicator < value.length; indicator++) {
            if ( arg[ index ] === value[ indicator ] ) {
              count++;
            }
          }
        }
        if ( count === value.length && options === 'all' ){
          return true;
        } else if ( count > 0 && options === 'any' ) {
          return true;
        }
      }

      return false;
    }

    function _findValue( where, value, options ) {
      if ( _isObject( where ) ) {
        for ( var property in where ) {
          if ( _isArray( value ) && _hasEqual(  where[ property ], value, options ) ) {
            return value;
          } else if ( where[ property ] === value) {
            return value;
          }
        }
      }

      return undefined;
    }

    function _copy( dist, src ) {
      if ( _isObject( dist ) && _isObject( src ) ) {
        for ( var property in src ) {
          if ( !src.hasOwnProperty( property ) ) continue;
          dist[ property ] = src[ property ];
        }
      }
    }

    /**
    *Does the property search, returns true if the object has the property sent
    */
    function _hasDeepProperty( arg, property ){
      if ( _isString( property ) && _isObject( arg ) ) {
        for ( var ownership in arg ) {
          if ( ownership === property ) {
            return true;
          }
        }
      }

      return false;
    }



    return {
      isObject: _isObject,
      isArray: _isArray,
      isNumber: _isNumber,
      isString: _isString,
      isBool: _isBool,
      isEmpty: _isEmpty,
      isNotEmpty: _isNotEmpty,
      isEqual: _isEqual,
      findValue: _findValue,
      copy: _copy,
      hasDeepProperty: _hasDeepProperty,
      hasEqual: _hasEqual
    };
  })();

  if ( isNode ) {
    module.exports = That;
  } else {
    window[ 'that' ] = That;
  }

})();
