function ToggledAtLeastOnce(_toggle) {
    return (function () {
        let _isToggled = false, _Toggled = _toggle;
        return function (toggled) {
            if (!_isToggled) {
                if (!!_Toggled || !!toggled) return !(_isToggled = true);
            }
            return true;
        };
    })(_toggle)
};
