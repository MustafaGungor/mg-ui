"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
// 'HelloProps' describes the shape of props.
// State is never set so we use the '{}' type.
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            asyncIcon: "fa-circle-o-notch",
            async: false,
            icon: props.icon
        };
        return _this;
    }
    /**
     * @returns {any}
     */
    Button.prototype.render = function () {
        return "button";
    };
    Button.prototype.onClick = function (e) {
        var async = this.props.async != undefined ? (this.props.async == true ? true : false) : false;
        async == true ? this.setState({ async: true }) : null;
        this.props.onClick != undefined ? (async == true ? this.props.onClick(e, this.done.bind(this)) : this.props.onClick(e)) : null;
    };
    Button.prototype.done = function () {
        this.setState({
            async: false
        });
    };
    return Button;
}(React.Component));
exports.default = Button;
//# sourceMappingURL=Button.js.map