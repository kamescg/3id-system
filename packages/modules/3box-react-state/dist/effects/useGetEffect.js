"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = require("react");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* --- Component --- */
var useGetEffect = (state, dispatch) => {
  var [dispatched, setDispatched] = (0, _react.useState)();
  (0, _react.useEffect)(() => {
    if (state.store.gets) {
      var selected = state.store.gets[0];

      if (selected) {
        var runEffect =
        /*#__PURE__*/
        function () {
          var _ref = _asyncToGenerator(function* () {
            var {
              space,
              access,
              key
            } = selected;

            try {
              var read;

              if (space) {
                read = yield state.spaces[space].instance[access].get(key);
                dispatch({
                  type: 'GET_SUCCESS',
                  id: key,
                  access: access || 'public',
                  space,
                  payload: read
                });
                setDispatched(true);
              } else {
                read = yield state.instance[access].get(key);
                dispatch({
                  type: 'GET_SUCCESS',
                  id: key,
                  access,
                  payload: read
                });
                setDispatched(true);
              }
            } catch (error) {
              dispatch({
                type: 'GET_FAILURE',
                payload: error
              });
              setDispatched(false);
            }
          });

          return function runEffect() {
            return _ref.apply(this, arguments);
          };
        }();

        runEffect();
      }
    }
  }, [state.store.gets]);
  return dispatched;
};
/* --- Export --- */


var _default = useGetEffect;
exports.default = _default;