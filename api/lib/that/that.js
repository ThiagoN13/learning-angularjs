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
      var isTrue = true;
      if ( !arg ) {

        return true;

      } else if ( _isObject(arg) ) {
        for ( var property in arg ) {
          isTrue = false;
        }
        return isTrue;
      } else if ( _isArray( arg ) ) {
        if ( arg.length <= 0 ) {

          return true;

        }
      }

      return false;
    }

    function _isNotEmpty( arg ) {
      var isTrue;
      if ( !arg ) {

        return false;

      } else if ( _isObject(arg) ) {
        for ( var property in arg ) {
          isTrue = true;
        }
        return isTrue;
      } else if ( _isArray( arg ) ) {
        if ( arg.length <= 0 ) {

          return false;

        }
      }

      return true;
    }

    function _copy( dist, src ) {
      if ( _isObject( dist ) && _isObject( src ) ) {
        for ( var property in src ) {
          if ( !src.hasOwnProperty( property ) ) continue;
          dist[ property ] = src[ property ];
        }
      }
    }

    return {
      isObject: _isObject,
      isArray: _isArray,
      isNumber: _isNumber,
      isString: _isString,
      isBool: _isBool,
      isEmpty: _isEmpty,
      isNotEmpty: _isNotEmpty,
      copy: _copy
    };
  })();

  if ( isNode ) {
    module.exports = That;
  } else {
    window[ 'that' ] = That;
  }

})();
