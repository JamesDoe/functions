function ToggledAtLeastOnce(_toggle) {
  return (function () {
    let _isToggled = false, _Toggled = _toggle;
    return function (toggled) {
      if (!_Toggled && !_isToggled) {
        if (!!toggled) _isToggled = true;
        return false;
      }
      return true;
    };
  })();
};
