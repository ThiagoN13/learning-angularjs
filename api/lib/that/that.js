(function() {
  var isNode =  (module || typeof module === 'object') && (module.exports || typeof module.exports === 'object');

  var That = (function () {
    var objectPrototype = Object.prototype,
      toString = objectPrototype.toString;

    function _isObject( arg ) {
      if ( toString.call( arg ) === '[object Object]' ) {
        return true;
      }

      return false;
    }

    function _isArray( arg ) {
      if ( toString.call( arg ) === '[object Array]' ) {
        return true;
      }

      return false;
    }

    function _isString( arg ) {
      if ( toString.call( arg ) === '[object String]' ) {
        return true;
      }

      return false;
    }

    function _isNumber( arg ) {
      if ( toString.call( arg ) === '[object Number]' ) {
        return true;
      }

      return false;
    }

    function _isBool( arg ) {
      if ( toString.call( arg ) === '[object Boolean]' ) {
        return true;
      }

      return false;
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

    // function _isExist( arg ) {
    //
    // }


    return {
      isObject: _isObject,
      isArray: _isArray,
      isNumber: _isNumber,
      isString: _isString,
      isBool: _isBool,
      isEmpty: _isEmpty
    };
  })();

  if ( isNode ) {
    module.exports = That;
  } else {
    window['that'] = That;
  }

})();
