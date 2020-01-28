function ToggledAtLeastOnce(Toggled) {
    return (function(toggle) {
              let _toggled = false, _Toggled = Toggled;
              return function(toggle = _Toggled||0) {
                if(!_toggled) {
                  if(!!toggle) return !(_toggled = true);
                }
                return true;
              };
})(Toggled)
};
