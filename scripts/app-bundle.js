var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('__dot_dot__/src/elements/backpack/kawaii-backpack',["require", "exports", "aurelia-framework", "./../kawaii-element", "./../../mood"], function (require, exports, aurelia_framework_1, kawaii_element_1, mood_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var KawaiiBackpack = (function (_super) {
        __extends(KawaiiBackpack, _super);
        function KawaiiBackpack() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.size = 240;
            _this.mood = mood_1.Mood.Blissful;
            _this.color = '#FFD882';
            _this.paths = {
                pocketShapePath: 'M11.329 0h90.555c7.42 0 11.13 2.538 11.13 7.614v49.828c0 5.325-3.36 7.987-10.082 7.987H11.414c-8.474 0-12.23-2.6-11.267-7.802V7.263C.147 2.42 3.875 0 11.33 0z',
                pocketShapeShadowPath: 'M11.329 0h90.555c7.42 0 11.13 2.538 11.13 7.614v49.828c0 5.325-3.36 7.987-10.082 7.987H11.414c-8.474 0-12.23-2.6-11.267-7.802V7.263C.147 2.42 3.875 0 11.33 0z',
                hangingLoopShape: 'M0 33.872c3.088-9.656 5.841-16.215 8.258-19.678 1.945-2.786 4.895-4.488 6.72-6.462 3.444-3.722 5.393-6.574 6.665-6.574 1.12 0-3.688 3.488-5.891 10.96-1.04 3.529-2.014 10.78-2.919 21.754H0zm43.62.992H30.8c-.904-11.217-1.876-18.63-2.915-22.237-2.2-7.636-7.029-11.47-5.91-11.47 1.271 0 3.243 3.183 6.682 6.987 1.824 2.018 4.77 3.758 6.713 6.606 2.415 3.539 5.164 10.244 8.25 20.114z',
                mainCompartmentShape: 'M68.899 0c38.235 0 68.898 34.267 68.898 76.539v93.207c0 14.095-10.283 21.584-22.966 21.584H22.966C10.283 191.33 0 183.84 0 169.746V76.54C0 34.267 30.664 0 68.899 0z',
                mainCompartmentBottomStripe: 'M137.797 156.949v13.373c0 13.924-10.283 21.324-22.966 21.324H22.966c-12.683 0-22.966-7.4-22.966-21.324v-13.373h137.797z',
                mainCompartmentTop: 'M137.797 82.423v-5.948C137.797 34.423 107.134.333 68.9.333S-.001 34.423 0 76.475v5.948C0 40.371 30.664 6.281 68.899 6.281s68.898 34.09 68.898 76.142z',
                zip: 'M109.285 1.983h2.028l.547 8.922h-2.974l.4-8.922zm.592 6.94v.99h.991v-.99h-.99z'
            };
            return _this;
        }
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiBackpack.prototype, "size", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiBackpack.prototype, "mood", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiBackpack.prototype, "color", void 0);
        return KawaiiBackpack;
    }(kawaii_element_1.KawaiiElement));
    exports.KawaiiBackpack = KawaiiBackpack;
});
;
define('text!__dot_dot__/src/elements/backpack/kawaii-backpack.html',[],function(){return "<template>\r\n    <svg\r\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n      width.bind=\"size * 0.63\"\r\n      height.bind=\"size\"\r\n      viewBox=\"0 0 138 218\"\r\n    >\r\n      <defs>\r\n        <path id=\"pocket__shape-path\" d.one-time=\"paths.pocketShapePath\" />\r\n        <path id=\"pocket__shape__shadow-path\" d.one-time=\"paths.pocketShapeShadowPath\" />\r\n      </defs>\r\n      <g id=\"kawaii-backpack\" transform=\"translate(0 -1)\">\r\n        <g\r\n          id=\"right-shoulder-strap\"\r\n          transform=\"matrix(-1 0 0 1 125.901 13.054)\"\r\n        >\r\n          <path\r\n            id=\"right-shoulder-strap__back\"\r\n            fill.bind=\"color\"\r\n            d=\"M0 5.948v43.619l13.879-14.792z\"\r\n          />\r\n          <path\r\n            id=\"right-shoulder-strap__back__shadow\"\r\n            fill=\"#FFF\"\r\n            fill-rule=\"nonzero\"\r\n            opacity=\"0.4\"\r\n            d=\"M0 5.948v43.619l13.879-14.792z\"\r\n          />\r\n          <path\r\n            id=\"right-shoulder-strap__front\"\r\n            fill.bind=\"color\"\r\n            d=\"M9.193 34.697L0 5.127 21.014 0l7.735 24.677z\"\r\n          />\r\n        </g>\r\n        <g id=\"left-shoulder-strap\" transform=\"translate(11.896 13.054)\">\r\n          <path\r\n            id=\"left-shoulder-strap__back\"\r\n            fill.bind=\"color\"\r\n            d=\"M0 5.948v43.619l13.879-14.792z\"\r\n          />\r\n          <path\r\n            id=\"left-shoulder-strap__back_shadow\"\r\n            fill=\"#FFF\"\r\n            fill-rule=\"nonzero\"\r\n            opacity=\"0.4\"\r\n            d=\"M0 5.948v43.619l13.879-14.792z\"\r\n          />\r\n          <path\r\n            id=\"left-shoulder-strap__front\"\r\n            fill.bind=\"color\"\r\n            d=\"M9.193 34.697L0 5.127 21.014 0l7.735 24.677z\"\r\n          />\r\n        </g>\r\n        <g id=\"hanging-loop\" transform=\"translate(47.585)\">\r\n          <path\r\n            id=\"hanging-loop__back\"\r\n            fill.bind=\"color\"\r\n            d=\"M16.853 7.931h9.913L21.81.991z\"\r\n          />\r\n          <path\r\n            id=\"hanging-loop__back_shadow\"\r\n            fill=\"#121212\"\r\n            fill-rule=\"nonzero\"\r\n            opacity=\"0.14\"\r\n            d=\"M16.853 7.931h9.913L21.81.991z\"\r\n          />\r\n          <path\r\n            id=\"hanging-loop__shape\"\r\n            fill.bind=\"color\"\r\n            d.one-time=\"paths.hangingLoopShape\"\r\n          />\r\n        </g>\r\n        <g id=\"main-compartment\" transform=\"translate(0 26.617)\">\r\n          <path\r\n            id=\"main-compartment__shape\"\r\n            fill.bind=\"color\"\r\n            d.one-time=\"paths.mainCompartmentShape\"\r\n          />\r\n          <path\r\n            id=\"main-compartment__bottom-stripe\"\r\n            fill=\"#121212\"\r\n            fill-rule=\"nonzero\"\r\n            d.one-time=\"paths.mainCompartmentBottomStripe\"\r\n            opacity=\"0.07\"\r\n          />\r\n          <g as-element=\"kawaii-face\"\r\n            mood.one-time=\"mood\"\r\n            transform=\"translate(36 70)\"\r\n            unique-id.bind=\"getUniqueId()\"\r\n          />\r\n          <path\r\n            id=\"main-compartment__top\"\r\n            fill=\"#121212\"\r\n            fill-rule=\"nonzero\"\r\n            d.one-time=\"paths.mainCompartmentTop\"\r\n            opacity=\"0.07\"\r\n          />\r\n        </g>\r\n        <g id=\"pocket\" transform=\"translate(12.888 135.981)\">\r\n          <mask id=\"mask-4\" fill=\"#fff\">\r\n            <use xlink:href=\"#pocket__shape-path\" />\r\n          </mask>\r\n          <use\r\n            id=\"pocket__shape\"\r\n            fill.bind=\"color\"\r\n            xlink:href=\"#pocket__shape-path\"\r\n          />\r\n          <mask id=\"mask-6\" fill=\"#fff\">\r\n            <use xlink:href=\"#pocket__shape__shadow-path\" />\r\n          </mask>\r\n          <use\r\n            id=\"pocket__shape__shadow\"\r\n            fill=\"#121212\"\r\n            fill-rule=\"nonzero\"\r\n            opacity=\"0.14\"\r\n            xlink:href=\"#pocket__shape__shadow-path\"\r\n          />\r\n          <g id=\"Group-6\" mask=\"url(#mask-6)\">\r\n            <g transform=\"translate(0 15.862)\">\r\n              <path\r\n                id=\"Rectangle-7\"\r\n                fill=\"#33363B\"\r\n                opacity=\"0.408\"\r\n                d=\"M0 2.974h113.014v2.974H0z\"\r\n              />\r\n              <path\r\n                id=\"Rectangle-7-Copy\"\r\n                fill=\"#555D67\"\r\n                opacity=\"0.408\"\r\n                d=\"M0 0h113.014v2.974H0z\"\r\n              />\r\n              <path\r\n                id=\"Rectangle-8\"\r\n                fill=\"#6D727A\"\r\n                opacity=\"0.587\"\r\n                d=\"M107.066 0h5.948v5.948h-5.948z\"\r\n              />\r\n              <path id=\"zip\" fill=\"#49505A\" d.one-time=\"paths.zip\" opacity=\"0.746\" />\r\n            </g>\r\n          </g>\r\n          <g id=\"brand\" mask=\"url(#mask-6)\">\r\n            <g transform=\"translate(78.737 39.368)\">\r\n              <path id=\"Rectangle-6\" fill=\"#FFFDFD\" d=\"M0 0h27.789v18.526H0z\" />\r\n              <path\r\n                id=\"Rectangle-6-Copy\"\r\n                fill=\"#121212\"\r\n                opacity=\"0.298\"\r\n                d=\"M1.158 1.158h25.474v16.211H1.158z\"\r\n              />\r\n              <path\r\n                id=\"brand\"\r\n                fill=\"#FFF\"\r\n                d=\"M2.316 2.316h23.158v13.895H2.316z\"\r\n              />\r\n            </g>\r\n          </g>\r\n        </g>\r\n      </g>\r\n    </svg>\r\n  \r\n</template>";});;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('__dot_dot__/src/elements/browser/kawaii-browser',["require", "exports", "aurelia-framework", "./../kawaii-element", "./../../mood"], function (require, exports, aurelia_framework_1, kawaii_element_1, mood_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var KawaiiBrowser = (function (_super) {
        __extends(KawaiiBrowser, _super);
        function KawaiiBrowser() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.size = 180;
            _this.mood = mood_1.Mood.KO;
            _this.color = '#FDA7DC';
            _this.paths = {
                shape: 'M199.648 71.479V22.712C199.645 10.22 189.412-.003 176.902 0L22.74.006C10.233.006 0 10.228 0 22.72v92.044l.055-.01c.403 3.632 3.537 22.819 24.729 22.819 23.407 0 144.572 1.377 152.834 0 8.261-1.377 22.03-4.13 22.03-23.408V71.479z',
                shadow: 'M134.155 138.181c22.682.029 40.563-.108 43.562-.608 8.262-1.377 22.03-4.13 22.03-23.408V22.712C199.746 10.22 189.513-.003 177.002 0h-10.427c12.449.071 22.607 10.265 22.61 22.712v91.453c0 19.277-13.769 22.031-22.03 23.408-2.515.42-15.497.583-33 .608z',
                addressBar: 'M0 22.712C0 10.228 10.23.006 22.733.006L176.842 0c12.506-.003 22.736 10.22 22.738 22.712'
            };
            return _this;
        }
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiBrowser.prototype, "size", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiBrowser.prototype, "mood", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiBrowser.prototype, "color", void 0);
        return KawaiiBrowser;
    }(kawaii_element_1.KawaiiElement));
    exports.KawaiiBrowser = KawaiiBrowser;
});
;
define('text!__dot_dot__/src/elements/browser/kawaii-browser.html',[],function(){return "<template>\r\n    <svg\r\n      width.bind=\"size * 1.44\"\r\n      height.bind=\"size\"\r\n      viewBox=\"0 0 200 139\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n    >\r\n      <g id=\"kawaii-browser\">\r\n        <g id=\"kawaii-browser__body\" fill-rule=\"nonzero\">\r\n          <path d.one-time=\"paths.shape\" id=\"kawaii-browser__shape\" fill.bind=\"color\" />\r\n          <path\r\n            d.one-time=\"paths.shadow\"\r\n            id=\"kawaii-browser__shadow\"\r\n            fill=\"#121212\"\r\n            opacity=\".1\"\r\n          />\r\n          <g id=\"address-bar\" transform=\"translate(.097)\">\r\n            <path d.one-time=\"paths.addressBar\" fill=\"#111\" />\r\n            <ellipse fill=\"#FFF\" cx=\"168.855\" cy=\"10.901\" rx=\"3.4\" ry=\"3.395\" />\r\n            <ellipse fill=\"#FFF\" cx=\"180.074\" cy=\"10.901\" rx=\"3.4\" ry=\"3.395\" />\r\n            <g id=\"address\" transform=\"translate(12.654 5.47)\" fill=\"#FFF\">\r\n              <rect\r\n                x=\".277\"\r\n                y=\".163\"\r\n                width=\"145.775\"\r\n                height=\"10.563\"\r\n                rx=\"5.282\"\r\n              />\r\n            </g>\r\n          </g>\r\n        </g>\r\n        <g as-element=\"kawaii-face\"\r\n          mood.one-time=\"mood\"\r\n          transform=\"translate(67 63)\"\r\n          unique-id.bind=\"getUniqueId()\"\r\n        />\r\n      </g>\r\n    </svg>\r\n  \r\n</template>";});;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('__dot_dot__/src/elements/cat/kawaii-cat',["require", "exports", "aurelia-framework", "./../kawaii-element", "./../../mood"], function (require, exports, aurelia_framework_1, kawaii_element_1, mood_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var KawaiiCat = (function (_super) {
        __extends(KawaiiCat, _super);
        function KawaiiCat() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.size = 320;
            _this.mood = mood_1.Mood.Excited;
            _this.color = '#596881';
            _this.paths = {
                body: 'M113.876 132.295c.91 2.705 21.818 65.749-6.184 65.397H77.846c-27.898.35-7.248-62.228-6.195-65.365-19.954-2.157-47.848-9.752-55.173-35.81-3.673-1.957-6.497-3.081-6.497-3.081l4.667-5.333S-3.096 89.64 1.109 85.436s13.333-15.744 13.333-15.744-11.23 2.103-9.128 0c1.044-1.044 6.153-3.788 12.67-8.442 3.162-9.69 8.325-17.38 14.502-23.48-4.482-10.424-.853-20.191 1.822-21.206 2.226-.83 14.75 3.197 21.214 5.384 4.043-6.006 6.53-12.307 6.53-12.307l5.333 4.667S65.846-3.436 70.05.769s15.744 13.334 15.744 13.334-2.103-11.231 0-9.129c2.051 2.052 10.667 19.795 27.436 33.077-9.487-7.436-22-14.41-37.949-21.23-10.77 4.615-19.897 9.076-27.641 13.64 8.462-5.743 14.41-20.82 14.41-20.82l5.334 4.667S65.846-3.436 70.05.769c4.2 4.2 15.712 13.308 15.744 13.334-.008-.041-2.099-11.227 0-9.129.862.863 2.885 4.5 6.187 9.412l.48-.018v-.009s.052 0 .153.004l.154-.004c.306.019.832.04 1.554.084 3.182-4.76 5.14-8.265 5.985-9.11 2.102-2.102 0 9.129 0 9.129s11.538-9.129 15.743-13.334 2.667 13.539 2.667 13.539L124.05 10s2.475 6.22 6.474 12.204c6.58-2.216 18.582-6.04 20.757-5.23 2.672 1.014 6.296 10.76 1.838 21.17 6.084 6.113 11.15 13.797 14.24 23.454 6.28 4.443 11.16 7.077 12.178 8.094 2.103 2.103-9.128 0-9.128 0s9.128 11.539 13.334 15.744c4.018 4.018-12.005 2.792-13.437 2.675l-.01.097 4.575 5.228s-2.6 1.034-6.054 2.846c-7.188 26.118-34.949 33.806-54.942 36.013z',
                shadow: 'M167.36 61.598c6.28 4.443 11.16 7.077 12.178 8.094 2.103 2.103-9.128 0-9.128 0s9.128 11.539 13.334 15.744c4.018 4.018-12.005 2.792-13.437 2.675l-.01.097 4.575 5.228s-2.6 1.034-6.054 2.846c-7.17 26.053-34.81 33.768-54.791 35.996-.72.08-1.433-.184-2.142-.791.847-.136 1.701-.282 2.562-.44 23.176-4.238 50.835-16.837 47.912-53.816-3.869-48.949-50.714-59.804-69.841-62.199-.02-.224-.038-.448-.056-.673 0 0 .667.011 1.878.085a1.95 1.95 0 0 1 .132-.224c3.094-4.646 5.004-8.055 5.836-8.887 2.102-2.102 0 9.129 0 9.129s11.538-9.129 15.743-13.334 2.667 13.539 2.667 13.539L124.05 10s2.508 6.302 6.554 12.323c1.037-.522 2.307-.958 2.492-1.02 10.446-3.511 16.508-4.954 18.185-4.329 2.672 1.014 6.296 10.76 1.838 21.17 6.084 6.113 11.15 13.797 14.24 23.454z',
                legs: 'M8.846 3.692C7.36 11.59 4.59 20.615 8.692 28.205c.667 1.23-1.897 1.487-2.513 1.59C4.744 29.949 3 29.333 2.231 28c-4.36-8.051.102-18.205 1.743-26.667C4.18.205 9.154 2 8.846 3.693zM14.128 14.359c-.256 4.872 1.026 9.692 2.667 14.205.872 2.36 6.564.872 5.743-1.436-1.487-4.154-2.717-8.513-2.615-12.923.103-3.23 1.026-6.308 2.256-9.282 1.129-2.82-4.153-2.718-5.025-.564h-.513c-1.282 3.23-2.359 6.513-2.513 10z'
            };
            return _this;
        }
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiCat.prototype, "size", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiCat.prototype, "mood", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiCat.prototype, "color", void 0);
        return KawaiiCat;
    }(kawaii_element_1.KawaiiElement));
    exports.KawaiiCat = KawaiiCat;
});
;
define('text!__dot_dot__/src/elements/cat/kawaii-cat.html',[],function(){return "<template>\r\n    <svg\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n      width.bind=\"size * 0.84\"\r\n      height.bind=\"size\"\r\n      viewBox=\"0 0 185 220\"\r\n    >\r\n      <g id=\"Kawaii-Builder\" fill=\"none\" fill-rule=\"evenodd\">\r\n        <g id=\"kawaii-cat\">\r\n          <g\r\n            id=\"kawaii-cat_tail\"\r\n            transform=\"translate(29.23 153.846)\"\r\n            fill-rule=\"nonzero\"\r\n          >\r\n            <path\r\n              d=\"M45.487 29.59l3.18 5.077s-7.744 6.666-17.282 8.615C24.513 44.718.05 46.564.05 21.846s17.231-28.82 9.436-7.949c0 0-2.82 8.77.82 14.667 3.642 5.898 14.052 11.128 23.488 6.257l11.692-5.231z\"\r\n              id=\"tail_inner_shadow\"\r\n              fill.bind=\"color\"\r\n            />\r\n            <path\r\n              d=\"M45.487 29.59l3.18 5.077s-7.744 6.666-17.282 8.615C24.513 44.718.05 46.564.05 21.846s17.231-28.82 9.436-7.949c0 0-2.82 8.77.82 14.667 3.642 5.898 14.052 11.128 23.488 6.257l11.692-5.231z\"\r\n              id=\"tail_inner\"\r\n              fill=\"#121212\"\r\n              opacity=\"0.25\"\r\n            />\r\n          </g>\r\n          <g\r\n            id=\"kawaii-cat_legs\"\r\n            transform=\"translate(81 190)\"\r\n            fill.bind=\"color\"\r\n            fill-rule=\"nonzero\"\r\n          >\r\n            <path d.one-time=\"paths.legs\" id=\"kawaii-cat_legs_inner\" />\r\n          </g>\r\n          <g\r\n            id=\"kawaii-cat_arms\"\r\n            transform=\"translate(58 132)\"\r\n            fill.bind=\"color\"\r\n            fill-rule=\"nonzero\"\r\n          >\r\n            <path d=\"M55.949.205s27.948 51.641 2 53.898\" />\r\n            <path d=\"M13.641.205s-27.949 51.641-2 53.898\" />\r\n          </g>\r\n          <g\r\n            id=\"kawaii-cat_arms-shadow\"\r\n            transform=\"translate(58 132)\"\r\n            fill=\"#121212\"\r\n            fill-rule=\"nonzero\"\r\n            opacity=\"0.25\"\r\n          >\r\n            <path d=\"M55.949.205s27.948 51.641 2 53.898\" />\r\n            <path d=\"M13.641.205s-27.949 51.641-2 53.898\" />\r\n          </g>\r\n          <path\r\n            d.one-time=\"paths.body\"\r\n            id=\"kawaii-cat_body\"\r\n            fill.bind=\"color\"\r\n            fill-rule=\"nonzero\"\r\n          />\r\n          <g\r\n            id=\"kawaii-cat_ears\"\r\n            transform=\"translate(34 23)\"\r\n            fill=\"#121212\"\r\n            fill-rule=\"nonzero\"\r\n            opacity=\"0.25\"\r\n          >\r\n            <path\r\n              d=\"M103.795 2.897s18.718-8.974 13.077 8.975\"\r\n              id=\"kawaii-cat_ear-r\"\r\n            />\r\n            <path\r\n              d=\"M14.923 2.538S-3.795-6.436 1.846 11.513\"\r\n              id=\"kawaii-cat_ear-l\"\r\n            />\r\n          </g>\r\n          <path\r\n            d=\"M92.243 190.282h.004v-48.667h-.004c7.075-.36 11.946-2.615 11.946-2.615 16.709 54.254-11.62 51.324-11.946 51.282-.376.042-28.705 2.972-11.945-51.282 0 0 4.869 2.255 11.942 2.615z\"\r\n            id=\"kawaii-cat_belly\"\r\n            fill=\"#121212\"\r\n            fill-rule=\"nonzero\"\r\n            opacity=\"0.25\"\r\n          />\r\n          <g as-element=\"kawaii-face\"\r\n            mood.one-time=\"mood\"\r\n            transform=\"translate(59 67)\"\r\n            unique-id.bind=\"getUniqueId()\"\r\n          />\r\n          <path\r\n            d=\"M96.935 77.625c-.975-2.106-8.13-2.227-8.889 0-.47 1.458 2.746 4.454 4.372 4.373 1.663-.121 5.095-3.118 4.517-4.373z\"\r\n            id=\"kawaii-cat_nose\"\r\n            fill=\"#121212\"\r\n            fill-rule=\"nonzero\"\r\n          />\r\n          <path\r\n            d.one-time=\"paths.shadow\"\r\n            id=\"kawaii-cat_shadow\"\r\n            fill=\"#121212\"\r\n            fill-rule=\"nonzero\"\r\n            opacity=\"0.1\"\r\n          />\r\n        </g>\r\n      </g>\r\n    </svg>\r\n  \r\n</template>";});;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('__dot_dot__/src/elements/chocolate/kawaii-chocolate',["require", "exports", "aurelia-framework", "./../kawaii-element", "./../../mood"], function (require, exports, aurelia_framework_1, kawaii_element_1, mood_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var KawaiiChocolate = (function (_super) {
        __extends(KawaiiChocolate, _super);
        function KawaiiChocolate() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.size = 320;
            _this.mood = mood_1.Mood.Blissful;
            _this.color = '#fc105c';
            _this.paths = {
                choco_background: 'M114 206a4 4 0 01-4 4H4a4 4 0 01-4-4V4a4 4 0 014-4h106a4 4 0 014 4v202z',
                choco_inner_1: 'M15 8h-5a2 2 0 00-2 2v30a2 2 0 002 2h41a2 2 0 002-2V10a2 2 0 00-2-2H15zm28 26a2 2 0 002-2V18a2 2 0 00-2-2H18a2 2 0 00-2 2v14a2 2 0 002 2h25z',
                choco_inner_2: 'M68 8h-5a2 2 0 00-2 2v30a2 2 0 002 2h41a2 2 0 002-2V10a2 2 0 00-2-2H68zm28 26a2 2 0 002-2V18a2 2 0 00-2-2H71a2 2 0 00-2 2v14a2 2 0 002 2h25z',
                choco_inner_3: 'M15 50h-5a2 2 0 00-2 2v30a2 2 0 002 2h41a2 2 0 002-2V52a2 2 0 00-2-2H15zm28 26a2 2 0 002-2V60a2 2 0 00-2-2H18a2 2 0 00-2 2v14a2 2 0 002 2h25z',
                choco_inner_4: 'M68 50h-5a2 2 0 00-2 2v30a2 2 0 002 2h41a2 2 0 002-2V52a2 2 0 00-2-2H68zm28 26a2 2 0 002-2V60a2 2 0 00-2-2H71a2 2 0 00-2 2v14a2 2 0 002 2h25z',
                choco_inner_5: 'M15 92h-5a2 2 0 00-2 2v30a2 2 0 002 2h41a2 2 0 002-2V94a2 2 0 00-2-2H15zm28 26a2 2 0 002-2v-14a2 2 0 00-2-2H18a2 2 0 00-2 2v14a2 2 0 002 2h25z',
                choco_inner_6: 'M68 92h-5a2 2 0 00-2 2v30a2 2 0 002 2h41a2 2 0 002-2V94a2 2 0 00-2-2H68zm28 26a2 2 0 002-2v-14a2 2 0 00-2-2H71a2 2 0 00-2 2v14a2 2 0 002 2h25z',
                paper: 'M0 125l114-32.5V207a4 4 0 01-4 4H4a4 4 0 01-4-4v-82z',
                paper_folded: 'M0 125.016h102.305L114 92.5 0 125.016z'
            };
            return _this;
        }
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiChocolate.prototype, "size", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiChocolate.prototype, "mood", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiChocolate.prototype, "color", void 0);
        return KawaiiChocolate;
    }(kawaii_element_1.KawaiiElement));
    exports.KawaiiChocolate = KawaiiChocolate;
});
;
define('text!__dot_dot__/src/elements/chocolate/kawaii-chocolate.html',[],function(){return "<template>\r\n    <svg\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n      width.bind=\"size * 0.54\"\r\n      height.bind=\"size\"\r\n      fill=\"none\"\r\n      viewBox=\"0 0 114 211\"\r\n    >\r\n      <g id=\"chocolate\">\r\n        <path id=\"body\" fill=\"#8E5434\" d.one-time=\"paths.choco_background\"></path>\r\n        <g id=\"bars\">\r\n          <g id=\"choco-inner_1\">\r\n            <path\r\n              id=\"Union\"\r\n              fill=\"#fff\"\r\n              fill-opacity=\"0.1\"\r\n              fill-rule=\"evenodd\"\r\n              d.one-time=\"paths.choco_inner_1\"\r\n              clip-rule=\"evenodd\"\r\n            ></path>\r\n          </g>\r\n          <g id=\"choco-inner_2\">\r\n            <path\r\n              id=\"Union_2\"\r\n              fill=\"#fff\"\r\n              fill-opacity=\"0.1\"\r\n              fill-rule=\"evenodd\"\r\n              d.one-time=\"paths.choco_inner_2\"\r\n              clip-rule=\"evenodd\"\r\n            ></path>\r\n          </g>\r\n          <g id=\"choco-inner_3\">\r\n            <path\r\n              id=\"Union_3\"\r\n              fill=\"#fff\"\r\n              fill-opacity=\"0.1\"\r\n              fill-rule=\"evenodd\"\r\n              d.one-time=\"paths.choco_inner_3\"\r\n              clip-rule=\"evenodd\"\r\n            ></path>\r\n          </g>\r\n          <g id=\"choco-inner_4\">\r\n            <path\r\n              id=\"Union_4\"\r\n              fill=\"#fff\"\r\n              fill-opacity=\"0.1\"\r\n              fill-rule=\"evenodd\"\r\n              d.one-time=\"paths.choco_inner_4\"\r\n              clip-rule=\"evenodd\"\r\n            ></path>\r\n          </g>\r\n          <g id=\"choco-inner_5\">\r\n            <path\r\n              id=\"Union_5\"\r\n              fill=\"#fff\"\r\n              fill-opacity=\"0.1\"\r\n              fill-rule=\"evenodd\"\r\n              d.one-time=\"paths.choco_inner_5\"\r\n              clip-rule=\"evenodd\"\r\n            ></path>\r\n          </g>\r\n          <g id=\"choco-inner_6\">\r\n            <path\r\n              id=\"Union_6\"\r\n              fill=\"#fff\"\r\n              fill-opacity=\"0.1\"\r\n              fill-rule=\"evenodd\"\r\n              d.one-time=\"paths.choco_inner_6\"\r\n              clip-rule=\"evenodd\"\r\n            ></path>\r\n          </g>\r\n        </g>\r\n        <g id=\"Group 15\">\r\n          <path id=\"paper\" fill.bind=\"color\" d.one-time=\"paths.paper\"></path>\r\n          <g id=\"paper-folded\">\r\n            <path id=\"Vector\" fill.bind=\"color\" d.one-time=\"paths.paper_folded\"></path>\r\n            <path\r\n              id=\"Vector_2\"\r\n              fill=\"#000\"\r\n              fill-opacity=\"0.15\"\r\n              d=\"M0 125.016h102.305L114 92.5 0 125.016z\"\r\n            ></path>\r\n          </g>\r\n        </g>\r\n      </g>\r\n      <g as-element=\"kawaii-face\"\r\n        mood.one-time=\"mood\"\r\n        transform=\"translate(25 150)\"\r\n        unique-id.bind=\"getUniqueId()\"\r\n      />\r\n    </svg>\r\n  \r\n</template>";});;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('__dot_dot__/src/elements/credit-card/kawaii-credit-card',["require", "exports", "aurelia-framework", "./../kawaii-element", "./../../mood"], function (require, exports, aurelia_framework_1, kawaii_element_1, mood_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var KawaiiCreditCard = (function (_super) {
        __extends(KawaiiCreditCard, _super);
        function KawaiiCreditCard() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.size = 200;
            _this.mood = mood_1.Mood.Blissful;
            _this.color = '#83D1FB';
            _this.paths = {
                shape: 'M187.018 143H10.982C4.916 143 0 138.097 0 132.047V10.953C0 4.903 4.916 0 10.982 0h176.036C193.084 0 198 4.903 198 10.953v121.094c0 6.05-4.916 10.953-10.982 10.953',
                shadow: 'M176.018 143c6.066 0 10.982-4.903 10.982-10.953V10.953C187 4.903 182.084 0 176.018 0h11C193.084 0 198 4.903 198 10.953v121.094c0 6.05-4.916 10.953-10.982 10.953h-11z'
            };
            return _this;
        }
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiCreditCard.prototype, "size", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiCreditCard.prototype, "mood", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiCreditCard.prototype, "color", void 0);
        return KawaiiCreditCard;
    }(kawaii_element_1.KawaiiElement));
    exports.KawaiiCreditCard = KawaiiCreditCard;
});
;
define('text!__dot_dot__/src/elements/credit-card/kawaii-credit-card.html',[],function(){return "<template>\r\n    <svg\r\n      width.bind=\"size * 1.38\"\r\n      height.bind=\"size\"\r\n      viewBox=\"0 0 198 143\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n    >\r\n      <g id=\"kawaii-creditCard\">\r\n        <g id=\"kawaii-creditCard__body\" fill-rule=\"nonzero\">\r\n          <path d.one-time=\"paths.shape\" id=\"kawaii-creditCard__shape\" fill.bind=\"color\" />\r\n          <path\r\n            d.one-time=\"paths.shadow\"\r\n            id=\"kawaii-creditCard__shadow\"\r\n            fill=\"#000\"\r\n            opacity=\".1\"\r\n          />\r\n          <path\r\n            id=\"kawaii-creditCard__stripe\"\r\n            fill=\"#000\"\r\n            d=\"M0 17h198v27H0z\"\r\n          />\r\n        </g>\r\n        <g as-element=\"kawaii-face\"\r\n          mood.one-time=\"mood\"\r\n          transform=\"translate(66 73)\"\r\n          unique-id.bind=\"getUniqueId()\"\r\n        />\r\n      </g>\r\n    </svg>\r\n  \r\n</template>";});;
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('__dot_dot__/src/elements/face/kawaii-face',["require", "exports", "aurelia-framework", "./../../mood"], function (require, exports, aurelia_framework_1, mood_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var KawaiiFace = (function () {
        function KawaiiFace() {
            this.paths = {
                defs: 'M1.45656876,3.14684877 C1.45656876,3.14684877 1.45656876,3.14684877 1.45656876,3.14684877 L0,3.14685315 C0,2.31818182 0.346033696,1.50734266 0.949429952,0.922027972 C1.55390756,0.335664336 2.38979521,0 3.2440659,0 L25.9525272,0 C26.8067979,0 27.6416041,0.335664336 28.2460818,0.922027972 C28.8505594,1.50734266 29.1965931,2.31818182 29.1965931,3.14685315 C29.1890236,5.85734266 28.240675,8.44825175 26.7127199,10.6814685 C25.1771954,12.9104895 23.0317865,14.8122378 20.4040931,16.0227273 C18.6544603,16.8251748 16.6809868,17.3087413 14.5982965,17.3076923 C11.4666916,17.3076923 8.61299495,16.2241259 6.33025392,14.5951049 C4.0399434,12.9587413 2.264358,10.779021 1.16245695,8.33811189 C0.431460764,6.70909091 0.0010813553,4.95314685 0,3.14685315 L1.45656896,3.14685315 Z',
                tongue: 'M9.59865983,9.95467851 C9.59865983,9.95467851 9.59865983,9.95467851 9.59865983,9.95467851 L9,9.95467851 C9,9.66740582 9.14222222,9.38631493 9.39022222,9.18340586 C9.63866667,8.98013316 10.3333333,8 15,8 C19.6666667,8 20.3608889,8.98013316 20.6093333,9.18340586 C20.8577778,9.38631493 21,9.66740582 21,9.95467851 C20.9968889,10.8943148 20.6071111,11.7924965 19.9791111,12.5666783 C19.348,13.3394055 18.4662222,13.9986781 17.3862222,14.4183144 C16.6671111,14.6964962 15.856,14.8641326 15,14.8637689 C13.7128889,14.8637689 12.54,14.4881326 11.6017778,13.9234054 C10.6604444,13.3561327 9.93066667,12.6004964 9.47777778,11.7543147 C9.17733333,11.1895875 9.00044444,10.5808603 9,9.95467851 L9.59865983,9.95467851 Z',
                happy: 'M6,1.9999998 C6.00066667,3.14799969 6.26599997,4.26466625 6.7166666,5.29933281 C7.39599986,6.85066599 8.49066642,8.23599919 9.90199962,9.27666575 C11.3099995,10.311999 13.0693326,10.9999989 14.9999991,10.9999989 C16.283999,11.0006656 17.5006655,10.6939989 18.5793321,10.1833323 C20.1993319,9.41466574 21.5219985,8.20599919 22.468665,6.788666 C23.4106649,5.36999947 23.9953316,3.72333297 23.9999982,1.9999998 C23.9999982,0.895333245 23.104665,0 21.9999984,0 C20.8953319,0 19.9999986,0.895333245 19.9999986,1.9999998 C20.0006653,2.51933308 19.8739986,3.11066636 19.6166653,3.7006663 C19.233332,4.58733288 18.5526654,5.4513328 17.7299988,6.0519994 C16.9033323,6.65733268 15.9686657,6.99999931 14.9999991,6.99999931 C14.3513325,6.99999931 13.7259992,6.84799932 13.1299993,6.56666602 C12.2373327,6.14866606 11.4226661,5.4193328 10.8599995,4.57066622 C10.2919996,3.7246663 9.99533294,2.77733306 9.99999961,1.9999998 C9.99999961,0.895333245 9.10466636,0 7.9999998,0 C6.89533325,0 6,0.895333245 6,1.9999998',
                sad: 'M6,1.9999998 C6.00066667,3.14799969 6.26599997,4.26466625 6.7166666,5.29933281 C7.39599986,6.85066599 8.49066642,8.23599919 9.90199962,9.27666575 C11.3099995,10.311999 13.0693326,10.9999989 14.9999991,10.9999989 C16.283999,11.0006656 17.5006655,10.6939989 18.5793321,10.1833323 C20.1993319,9.41466574 21.5219985,8.20599919 22.468665,6.788666 C23.4106649,5.36999947 23.9953316,3.72333297 23.9999982,1.9999998 C23.9999982,0.895333245 23.104665,7.10542736e-15 21.9999984,7.10542736e-15 C20.8953319,7.10542736e-15 19.9999986,0.895333245 19.9999986,1.9999998 C20.0006653,2.51933308 19.8739986,3.11066636 19.6166653,3.7006663 C19.233332,4.58733288 18.5526654,5.4513328 17.7299988,6.0519994 C16.9033323,6.65733268 15.9686657,6.99999931 14.9999991,6.99999931 C14.3513325,6.99999931 13.7259992,6.84799932 13.1299993,6.56666602 C12.2373327,6.14866606 11.4226661,5.4193328 10.8599995,4.57066622 C10.2919996,3.7246663 9.99533294,2.77733306 9.99999961,1.9999998 C9.99999961,0.895333245 9.10466636,7.10542736e-15 7.9999998,7.10542736e-15 C6.89533325,7.10542736e-15 6,0.895333245 6,1.9999998',
                bliss1: 'M11.3298651,9.72876106 C9.83321993,9.72876106 8.62018766,8.55758439 8.62018766,7.11258087 C8.62018766,6.27104292 7.91115541,5.58647579 7.03954249,5.58647579 C6.16883282,5.58647579 5.45889734,6.27104292 5.45889734,7.11258087 C5.45889734,8.55758439 4.2467683,9.72876106 2.74921991,9.72876106 C1.25257476,9.72876106 0.0395424927,8.55758439 0.0395424927,7.11258087 C0.0395424927,3.38626826 3.18005862,0.354115435 7.03954249,0.354115435 C10.8999296,0.354115435 14.0395425,3.38626826 14.0395425,7.11258087 C14.0395425,8.55758439 12.8274135,9.72876106 11.3298651,9.72876106',
                bliss2: 'M57.3298651,9.72876106 C55.8332199,9.72876106 54.6201877,8.55758439 54.6201877,7.11258087 C54.6201877,6.27104292 53.9111554,5.58647579 53.0395425,5.58647579 C52.1688328,5.58647579 51.4588973,6.27104292 51.4588973,7.11258087 C51.4588973,8.55758439 50.2467683,9.72876106 48.7492199,9.72876106 C47.2525748,9.72876106 46.0395425,8.55758439 46.0395425,7.11258087 C46.0395425,3.38626826 49.1800586,0.354115435 53.0395425,0.354115435 C56.8999296,0.354115435 60.0395425,3.38626826 60.0395425,7.11258087 C60.0395425,8.55758439 58.8274135,9.72876106 57.3298651,9.72876106',
                lovestruck1: 'M11.980165,2.98190092 C11.8050001,1.25390423 10.4403753,0.000206846623 8.73257491,0.000206846623 C7.5948106,0.000206846623 6.55305237,0.548970938 5.96686143,1.42848278 C5.38597852,0.537594374 4.38691529,0 3.26738291,0 C1.55981331,0 0.194957712,1.25369738 0.0200235653,2.98169407 C0.00617653522,3.05802048 -0.0505962882,3.45971662 0.12203002,4.11479988 C0.370814995,5.05967525 0.945466744,5.91912297 1.78344285,6.59964836 C1.78344285,6.59964836 4.36682268,10 5.96409202,10 C7.56136137,10 10.216515,6.59985521 10.216515,6.59985521 C11.0544911,5.91912297 11.6291428,5.0598821 11.8779278,4.11479988 C12.0505541,3.45992347 11.9937813,3.05822732 11.980165,2.98190092 Z',
                lovestruck2: 'M62.980165,2.98190092 C62.8050001,1.25390423 61.4403753,0.000206846623 59.7325749,0.000206846623 C58.5948106,0.000206846623 57.5530524,0.548970938 56.9668614,1.42848278 C56.3859785,0.537594374 55.3869153,0 54.2673829,0 C52.5598133,0 51.1949577,1.25369738 51.0200236,2.98169407 C51.0061765,3.05802048 50.9494037,3.45971662 51.12203,4.11479988 C51.370815,5.05967525 51.9454667,5.91912297 52.7834428,6.59964836 C52.7834428,6.59964836 55.3668227,10 56.964092,10 C58.5613614,10 61.216515,6.59985521 61.216515,6.59985521 C62.0544911,5.91912297 62.6291428,5.0598821 62.8779278,4.11479988 C63.0505541,3.45992347 62.9937813,3.05822732 62.980165,2.98190092 Z',
                shocked1: 'M5.29976191,8.12776191 L7.18533333,10.0133333 C7.576,10.404 8.088,10.5993333 8.6,10.5993333 C9.11133333,10.5993333 9.62333333,10.404 10.014,10.0133333 C10.7953333,9.23266667 10.7953333,7.966 10.014,7.18533333 L8.12814284,5.29966667 L10.014,3.414 C10.7953333,2.63333333 10.7953333,1.36666667 10.014,0.586 C9.23266667,-0.195333333 7.96666667,-0.195333333 7.18533333,0.586 L5.29976191,2.47157143 L3.414,0.586 C2.63266667,-0.195333333 1.36733333,-0.195333333 0.586,0.586 C-0.195333333,1.36666667 -0.195333333,2.63333333 0.586,3.414 L2.47166667,5.29966667 L0.586,7.18533333 C-0.195333333,7.966 -0.195333333,9.23266667 0.586,10.0133333 C0.976666667,10.404 1.488,10.5993333 2,10.5993333 C2.512,10.5993333 3.02333333,10.404 3.414,10.0133333 L5.29976191,8.12776191 Z',
                shocked2: 'M51.2997619,8.12776191 L53.1853333,10.0133333 C53.576,10.404 54.088,10.5993333 54.6,10.5993333 C55.1113333,10.5993333 55.6233333,10.404 56.014,10.0133333 C56.7953333,9.23266667 56.7953333,7.966 56.014,7.18533333 L54.1281428,5.29966667 L56.014,3.414 C56.7953333,2.63333333 56.7953333,1.36666667 56.014,0.586 C55.2326667,-0.195333333 53.9666667,-0.195333333 53.1853333,0.586 L51.2997619,2.47157143 L49.414,0.586 C48.6326667,-0.195333333 47.3673333,-0.195333333 46.586,0.586 C45.8046667,1.36666667 45.8046667,2.63333333 46.586,3.414 L48.4716667,5.29966667 L46.586,7.18533333 C45.8046667,7.966 45.8046667,9.23266667 46.586,10.0133333 C46.9766667,10.404 47.488,10.5993333 48,10.5993333 C48.512,10.5993333 49.0233333,10.404 49.414,10.0133333 L51.2997619,8.12776191 Z',
                ko1: 'M52.9142136,5.03553391 L50.4393398,2.56066017 C49.8535534,1.97487373 49.8535534,1.02512627 50.4393398,0.439339828 C51.0251263,-0.146446609 51.9748737,-0.146446609 52.5606602,0.439339828 L55.0355339,2.91421356 L57.5104076,0.439339828 C58.0961941,-0.146446609 59.0459415,-0.146446609 59.631728,0.439339828 C60.2175144,1.02512627 60.2175144,1.97487373 59.631728,2.56066017 L57.1568542,5.03553391 L59.631728,7.51040764 C60.2175144,8.09619408 60.2175144,9.04594155 59.631728,9.63172798 C59.0459415,10.2175144 58.0961941,10.2175144 57.5104076,9.63172798 L55.0355339,7.15685425 L52.5606602,9.63172798 C51.9748737,10.2175144 51.0251263,10.2175144 50.4393398,9.63172798 C49.8535534,9.04594155 49.8535534,8.09619408 50.4393398,7.51040764 L52.9142136,5.03553391 Z',
                ko2: 'M2.91421356,5.03553391 L0.439339828,2.56066017 C-0.146446609,1.97487373 -0.146446609,1.02512627 0.439339828,0.439339828 C1.02512627,-0.146446609 1.97487373,-0.146446609 2.56066017,0.439339828 L5.03553391,2.91421356 L7.51040764,0.439339828 C8.09619408,-0.146446609 9.04594155,-0.146446609 9.63172798,0.439339828 C10.2175144,1.02512627 10.2175144,1.97487373 9.63172798,2.56066017 L7.15685425,5.03553391 L9.63172798,7.51040764 C10.2175144,8.09619408 10.2175144,9.04594155 9.63172798,9.63172798 C9.04594155,10.2175144 8.09619408,10.2175144 7.51040764,9.63172798 L5.03553391,7.15685425 L2.56066017,9.63172798 C1.97487373,10.2175144 1.02512627,10.2175144 0.439339828,9.63172798 C-0.146446609,9.04594155 -0.146446609,8.09619408 0.439339828,7.51040764 L2.91421356,5.03553391 Z'
            };
        }
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], KawaiiFace.prototype, "mood", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], KawaiiFace.prototype, "uniqueId", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", String)
        ], KawaiiFace.prototype, "transform", void 0);
        return KawaiiFace;
    }());
    exports.KawaiiFace = KawaiiFace;
    var RemoveSvg = (function () {
        function RemoveSvg() {
        }
        RemoveSvg.prototype.beforeCompile = function (fragment) {
            var svg = fragment.querySelector('svg');
            if (svg) {
                var remove = svg.hasAttribute('remove');
                if (remove) {
                    while (svg.childElementCount) {
                        svg.parentNode.insertBefore(svg.firstElementChild, svg);
                    }
                    svg.parentNode.removeChild(svg);
                }
            }
        };
        RemoveSvg = __decorate([
            aurelia_framework_1.viewEngineHooks()
        ], RemoveSvg);
        return RemoveSvg;
    }());
    exports.RemoveSvg = RemoveSvg;
});
;
define('text!__dot_dot__/src/elements/face/kawaii-face.html',[],function(){return "<template>\n    <svg remove>\n        <g id=\"kawaii-face\">\n            <defs>\n                <path d.one-time=\"paths.defs\" id=\"kawaii-face__path-1\" />\n            </defs>\n            <g id=\"kawaii-face__mouth\" transform=\"translate(18.000000, 16.000000)\">\n                <g if.bind=\"mood === 'blissful' || mood === 'lovestruck' || mood === 'excited'\"\n                    id=\"kawaii-face__mouth__joy\" transform=\"translate(0.000000, 1.000000)\">\n                    <mask id=\"kawaii-face__mask-2-${uniqueId}\" fill=\"white\">\n                        <use xlink:href=\"#kawaii-face__path-1\" />\n                    </mask>\n                    <use id=\"Combined-Shape\" fill=\"#000000\" xlink:href=\"#kawaii-face__path-1\" />\n                    <path d.one-time=\"paths.tongue\" id=\"kawaii-face__tongue\" fill=\"#E74144\"\n                        mask=\"url(#kawaii-face__mask-2-${uniqueId})\"\n                        transform=\"translate(15.000000, 11.431885) scale(1, -1) translate(-15.000000, -11.431885)\" />\n                </g>\n\n                <path if.bind=\"mood === 'happy'\" d.one-time=\"paths.happy\" id=\"kawaii-face__mouth__happy\" fill=\"#000000\" />\n\n                <ellipse if.bind=\"mood === 'shocked'\" id=\"kawaii-face__mouth__shocked\" cx=\"15\" cy=\"14\" rx=\"9\" ry=\"10\"\n                    fill=\"#000000\" />\n\n                <path if.bind=\"mood === 'sad' || mood === 'ko'\" d.one-time=\"paths.sad\" id=\"kawaii-face__mouth__sad\"\n                    fill=\"#000000\"\n                    transform=\"translate(14.999999, 5.500000) scale(1, -1) translate(-14.999999, -5.500000)\" />\n            </g>\n            <g id=\"kawaii-face__blush\" transform=\"translate(0.000000, 15.000000)\" fill=\"#000000\" opacity=\"0.2\">\n                <circle id=\"Oval\" cx=\"3\" cy=\"3\" r=\"3\" />\n                <circle id=\"Oval\" cx=\"63\" cy=\"3\" r=\"3\" />\n            </g>\n            <g id=\"kawaii-face__eyes\" transform=\"translate(2.000000, 0.000000)\" fill=\"#000000\">\n                <g if.bind=\"mood === 'blissful'\" id=\"kawaii-face__eyes__arc\" transform=\"translate(1.000000, 0.000000)\">\n                    <path d.one-time=\"paths.bliss1\" id=\"Fill-5\" />\n                    <path d.one-time=\"paths.bliss2\" id=\"Fill-5\" />\n                </g>\n\n                <g if.bind=\"mood === 'happy' || mood === 'sad' || mood === 'shocked' || mood === 'excited'\"\n                    id=\"kawaii-face__eyes__circle\" transform=\"translate(1.000000, 2.000000)\">\n                    <circle id=\"Oval-3\" cx=\"4.5\" cy=\"4.5\" r=\"4.5\" />\n                    <circle id=\"Oval-3\" cx=\"56.5\" cy=\"4.5\" r=\"4.5\" />\n                </g>\n\n                <g if.bind=\"mood === 'lovestruck'\" id=\"kawaii-face__eyes__heart\"\n                    transform=\"translate(0.000000, 2.000000)\" fillRule=\"nonzero\">\n                    <path d.one-time=\"paths.lovestruck1\" id=\"Shape\" />\n                    <path d.one-time=\"paths.lovestruck2\" id=\"Shape\" />\n                </g>\n\n                <g if.bind=\"mood === 'ko'\" id=\"kawaii-face__eyes__ko\" transform=\"translate(1.500000, 1.000000)\"\n                    fillRule=\"nonzero\">\n                    <path d.one-time=\"paths.ko1\" id=\"Cross\" />\n                    <path d.one-time=\"paths.ko2\" id=\"Cross\" />\n                </g>\n            </g>\n        </g>\n    </svg>\n</template>\n";});;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('__dot_dot__/src/elements/file/kawaii-file',["require", "exports", "aurelia-framework", "./../kawaii-element", "./../../mood"], function (require, exports, aurelia_framework_1, kawaii_element_1, mood_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var KawaiiFile = (function (_super) {
        __extends(KawaiiFile, _super);
        function KawaiiFile() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.size = 200;
            _this.mood = mood_1.Mood.KO;
            _this.color = '#83D1FB';
            _this.paths = {
                shape: 'M14.938 0C7.24 0 .998 6.24.998 13.938v125.124C1 146.76 7.24 153 14.938 153h76.124c7.698 0 13.939-6.24 13.939-13.938V35.569c0-.457-.183-.895-.505-1.218L70.65.504',
                shadow: 'M105,34.8555 L95.954,34.8555 C95.961,35.1885 95.979,35.5195 95.979,35.8545 L95.979,138.9965 C95.979,146.7255 89.648,152.9895 81.836,152.9895 L90.927,152.9895 C98.739,152.9895 105.07,146.7255 105.07,138.9965 L105.07,35.8545 C105.07,35.5215 105.066,35.1885 105.059,34.8555 L105,34.8555 Z'
            };
            return _this;
        }
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiFile.prototype, "size", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiFile.prototype, "mood", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiFile.prototype, "color", void 0);
        return KawaiiFile;
    }(kawaii_element_1.KawaiiElement));
    exports.KawaiiFile = KawaiiFile;
});
;
define('text!__dot_dot__/src/elements/file/kawaii-file.html',[],function(){return "<template>\r\n    <svg\r\n      width.bind=\"size * 0.68\"\r\n      height.bind=\"size\"\r\n      viewBox=\"0 0 105 153\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n    >\r\n      <g id=\"kawaii-file\">\r\n        <g id=\"kawaii-file__body\" fill-rule=\"nonzero\">\r\n          <path d.one-time=\"paths.shape\" id=\"kawaii-file__shape\" fill.bind=\"color\" />\r\n          <path\r\n            d.one-time=\"paths.shadow\"\r\n            id=\"kawaii-file__shadow\"\r\n            fill=\"#000\"\r\n            opacity=\".1\"\r\n          />\r\n          <path\r\n            id=\"kawaii-file__fold\"\r\n            fill=\"#000\"\r\n            opacity=\".2\"\r\n            d=\"M70.1445,0 L70.1445,22.641 C70.1445,29.387 75.6135,34.855 82.3595,34.855 L104.9995,34.855 L70.1445,0\"\r\n          />\r\n        </g>\r\n        <g as-element=\"kawaii-face\"\r\n          mood.one-time=\"mood\"\r\n          transform=\"translate(20 66)\"\r\n          unique-id.bind=\"getUniqueId()\"\r\n        />\r\n      </g>\r\n    </svg>\r\n  \r\n</template>";});;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('__dot_dot__/src/elements/ghost/kawaii-ghost',["require", "exports", "aurelia-framework", "./../kawaii-element", "./../../mood"], function (require, exports, aurelia_framework_1, kawaii_element_1, mood_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var KawaiiGhost = (function (_super) {
        __extends(KawaiiGhost, _super);
        function KawaiiGhost() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.size = 240;
            _this.mood = mood_1.Mood.Blissful;
            _this.color = '#E0E4E8';
            _this.paths = {
                shape: 'M63.004.034C27.572 1.238 0 36.002 0 76.472v76.272c0 8.116 5.832 14.718 13 14.718s13-6.602 13-14.718c0-2.705 1.944-4.906 4.333-4.906 2.39 0 4.334 2.2 4.334 4.906 0 8.116 5.831 14.718 13 14.718 3.472 0 6.737-1.53 9.192-4.31 2.456-2.78 3.808-6.477 3.807-10.408 0-2.712 1.939-4.906 4.334-4.906 2.39 0 4.333 2.2 4.333 4.906 0 8.116 5.832 14.718 13 14.718 7.169 0 13-6.602 13-14.718 0-2.705 1.944-4.906 4.334-4.906 2.39 0 4.333 2.2 4.333 4.906 0 8.116 5.832 14.718 13 14.718s13-6.602 13-14.718V73.592c0-41.028-29.82-74.82-66.996-73.558z',
                shadow: 'M111.5 166.08c4.427-2.35 7.5-7.444 7.5-13.336V73.592C119 35.918 93.857 4.346 60.962.412a6.603 6.603 0 0 1 2.042-.378C100.181-1.228 130 32.564 130 73.592v79.152c0 8.116-5.832 14.718-13 14.718-1.965 0-3.829-.496-5.5-1.383z'
            };
            return _this;
        }
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiGhost.prototype, "size", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiGhost.prototype, "mood", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiGhost.prototype, "color", void 0);
        return KawaiiGhost;
    }(kawaii_element_1.KawaiiElement));
    exports.KawaiiGhost = KawaiiGhost;
});
;
define('text!__dot_dot__/src/elements/ghost/kawaii-ghost.html',[],function(){return "<template>\r\n    <svg\r\n      width.bind=\"size * 0.77\"\r\n      height.bind=\"size\"\r\n      viewBox=\"0 0 130 168\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n    >\r\n      <g id=\"kawaii-ghost\">\r\n        <g id=\"kawaii-ghost__body\">\r\n          <path d.one-time=\"paths.shape\" id=\"kawaii-ghost__shape\" fill.bind=\"color\" />\r\n          <path\r\n            d.one-time=\"paths.shadow\"\r\n            id=\"kawaii-ghost__shadow\"\r\n            fill-opacity=\".1\"\r\n            fill=\"#000000\"\r\n          />\r\n        </g>\r\n        <g as-element=\"kawaii-face\"\r\n          mood.one-time=\"mood\"\r\n          transform=\"translate(34 57)\"\r\n          unique-id.bind=\"getUniqueId()\"\r\n        />\r\n      </g>\r\n    </svg>\r\n  \r\n</template>";});;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('__dot_dot__/src/elements/ice-cream/kawaii-ice-cream',["require", "exports", "aurelia-framework", "./../kawaii-element", "./../../mood"], function (require, exports, aurelia_framework_1, kawaii_element_1, mood_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var KawaiiIceCream = (function (_super) {
        __extends(KawaiiIceCream, _super);
        function KawaiiIceCream() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.size = 300;
            _this.mood = mood_1.Mood.Blissful;
            _this.color = '#FDA7DC';
            _this.paths = {
                stick: 'M56.142 219.63h-3.964c-4.36 0-7.927-3.53-7.927-7.843v-31.372h19.818v31.372c0 4.314-3.568 7.843-7.927 7.843z',
                shape: 'M57.184 0h-4.34C24.19 0 .75 23.192.75 51.54v113.456c0 8.502 6.964 15.392 15.558 15.392H93.72c8.593 0 15.557-6.89 15.557-15.392V51.54C109.277 23.192 85.837 0 57.184 0z',
                shadow: 'M83.97 180.388c8.593 0 15.557-6.89 15.557-15.392V51.54c0-27.41-21.913-49.998-49.264-51.464.938-.05 1.881-.076 2.83-.076h4.34c28.653 0 52.094 23.192 52.094 51.54v113.456c0 8.502-6.964 15.392-15.557 15.392h-10z'
            };
            return _this;
        }
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiIceCream.prototype, "size", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiIceCream.prototype, "mood", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiIceCream.prototype, "color", void 0);
        return KawaiiIceCream;
    }(kawaii_element_1.KawaiiElement));
    exports.KawaiiIceCream = KawaiiIceCream;
});
;
define('text!__dot_dot__/src/elements/ice-cream/kawaii-ice-cream.html',[],function(){return "<template>\r\n    <svg\r\n      width.bind=\"size * 0.5\"\r\n      height.bind=\"size\"\r\n      viewBox=\"0 0 110 220\"\r\n      version=\"1.1\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n    >\r\n      <g id=\"kawaii-iceCream\">\r\n        <g fill-rule=\"nonzero\">\r\n          <path d.one-time=\"paths.stick\" id=\"kawaii-iceCream__stick\" fill=\"#FCCB7E\" />\r\n          <path d.one-time=\"paths.shape\" id=\"kawaii-iceCream__shape\" fill.bind=\"color\" />\r\n          <path\r\n            d.one-time=\"paths.shadow\"\r\n            id=\"kawaii-iceCream__shadow\"\r\n            fill=\"#000000\"\r\n            opacity=\".1\"\r\n          />\r\n        </g>\r\n        <g as-element=\"kawaii-face\"\r\n          mood.one-time=\"mood\"\r\n          transform=\"translate(22.000000, 81.000000)\"\r\n          unique-id.bind=\"getUniqueId()\"\r\n        />\r\n      </g>\r\n    </svg>\r\n  \r\n</template>";});;
define('__dot_dot__/src/elements/kawaii-element',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var KawaiiElement = (function () {
        function KawaiiElement() {
        }
        KawaiiElement.prototype.getUniqueId = function () {
            return Math.random().toString(36).substring(2, 15);
        };
        return KawaiiElement;
    }());
    exports.KawaiiElement = KawaiiElement;
});
;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('__dot_dot__/src/elements/mug/kawaii-mug',["require", "exports", "aurelia-framework", "./../kawaii-element", "./../../mood"], function (require, exports, aurelia_framework_1, kawaii_element_1, mood_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var KawaiiMug = (function (_super) {
        __extends(KawaiiMug, _super);
        function KawaiiMug() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.size = 170;
            _this.mood = mood_1.Mood.Blissful;
            _this.color = '#A6E191';
            _this.paths = {
                shape: 'M17.591 22.258h21.5V5.565C39.091 2.49 41.718 0 44.955 0h121.181C169.374 0 172 2.49 172 5.565v70.483C172 97.526 153.588 115 130.955 115H80.136c-20.764 0-37.93-14.72-40.633-33.733C17.283 78.701 0 60.722 0 38.952c0-9.205 7.891-16.694 17.591-16.694zm20.627 47.704V33.387h-21.5c-3.233 0-5.863 2.496-5.863 5.565 0 15.485 11.835 28.37 27.363 31.01z',
                shadow: 'M156.99 0h9.106C169.356 0 172 2.49 172 5.565v70.483C172 97.526 153.462 115 130.673 115h-16.89 7.784c22.79 0 41.327-17.474 41.327-38.952V5.565c0-3.074-2.644-5.565-5.903-5.565H106z'
            };
            return _this;
        }
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiMug.prototype, "size", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiMug.prototype, "mood", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiMug.prototype, "color", void 0);
        return KawaiiMug;
    }(kawaii_element_1.KawaiiElement));
    exports.KawaiiMug = KawaiiMug;
});
;
define('text!__dot_dot__/src/elements/mug/kawaii-mug.html',[],function(){return "<template>\r\n    <svg\r\n      width.bind=\"size * 1.5\"\r\n      height.bind=\"size\"\r\n      viewBox=\"0 0 172 115\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n    >\r\n      <g id=\"kawaii-mug\">\r\n        <g id=\"kawaii-mug__body\" fill-rule=\"nonzero\">\r\n          <path d.one-time=\"paths.shape\" id=\"kawaii-mug__shape\" fill.bind=\"color\" />\r\n          <path\r\n            d.one-time=\"paths.shadow\"\r\n            id=\"kawaii-mug__shadow\"\r\n            fill=\"#000\"\r\n            opacity=\".1\"\r\n          />\r\n        </g>\r\n        <g as-element=\"kawaii-face\"\r\n          mood.one-time=\"mood\"\r\n          transform=\"translate(71 42)\"\r\n          unique-id.bind=\"getUniqueId()\"\r\n        />\r\n      </g>\r\n    </svg>\r\n  \r\n</template>";});;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('__dot_dot__/src/elements/planet/kawaii-planet',["require", "exports", "aurelia-framework", "./../kawaii-element", "./../../mood"], function (require, exports, aurelia_framework_1, kawaii_element_1, mood_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var KawaiiPlanet = (function (_super) {
        __extends(KawaiiPlanet, _super);
        function KawaiiPlanet() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.size = 190;
            _this.mood = mood_1.Mood.Blissful;
            _this.color = '#FCCB7E';
            _this.paths = {
                shape: 'M67 134c37.003 0 67-29.997 67-67S104.003 0 67 0 0 29.997 0 67s29.997 67 67 67z',
                shadow: 'M61.5 133.777C95.93 130.98 123 102.151 123 67 123 31.849 95.93 3.02 61.5.223A67.906 67.906 0 0 1 67 0c37.003 0 67 29.997 67 67s-29.997 67-67 67c-1.852 0-3.686-.075-5.5-.223z'
            };
            return _this;
        }
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiPlanet.prototype, "size", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiPlanet.prototype, "mood", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiPlanet.prototype, "color", void 0);
        return KawaiiPlanet;
    }(kawaii_element_1.KawaiiElement));
    exports.KawaiiPlanet = KawaiiPlanet;
});
;
define('text!__dot_dot__/src/elements/planet/kawaii-planet.html',[],function(){return "<template>\r\n    <svg\r\n      width.bind=\"size\"\r\n      height.bind=\"size\"\r\n      version=\"1.1\"\r\n      viewBox=\"0 0 134 134\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n    >\r\n      <defs>\r\n        <path d.one-time=\"paths.shape\" id=\"kawaii-planet__shape--path\" />\r\n        <path d.one-time=\"paths.shadow\" id=\"kawaii-planet__shadow--path\" />\r\n      </defs>\r\n      <g id=\"kawaii-planet\">\r\n        <g id=\"kawaii-planet__body\">\r\n          <mask id=\"mask-2\" fill=\"#fff\">\r\n            <use xlink:href=\"#kawaii-planet__shape--path\" />\r\n          </mask>\r\n          <use\r\n            id=\"kawaii-planet__shape\"\r\n            fill.bind=\"color\"\r\n            xlink:href=\"#kawaii-planet__shape--path\"\r\n          />\r\n          <mask id=\"mask-4\" fill=\"#fff\">\r\n            <use xlink:href=\"#kawaii-planet__shadow--path\" />\r\n          </mask>\r\n          <use\r\n            id=\"kawaii-planet__shadow\"\r\n            fill=\"#000000\"\r\n            opacity=\".1\"\r\n            xlink:href=\"#kawaii-planet__shadow--path\"\r\n          />\r\n        </g>\r\n        <g as-element=\"kawaii-face\"\r\n          mood.one-time=\"mood\"\r\n          transform=\"translate(34 57)\"\r\n          unique-id.bind=\"getUniqueId()\"\r\n        />\r\n      </g>\r\n    </svg>\r\n  \r\n</template>";});;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
define('__dot_dot__/src/elements/speech-bubble/kawaii-speech-bubble',["require", "exports", "aurelia-framework", "./../kawaii-element", "./../../mood"], function (require, exports, aurelia_framework_1, kawaii_element_1, mood_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var KawaiiSpeechBubble = (function (_super) {
        __extends(KawaiiSpeechBubble, _super);
        function KawaiiSpeechBubble() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.size = 220;
            _this.mood = mood_1.Mood.Happy;
            _this.color = '#83D1FB';
            _this.paths = {
                body: 'M186 19.335C185.997 8.701 176.464-.002 164.809 0L21.186.005C9.533.005 0 8.708 0 19.342v78.362l.05-.008c.377 3.092 3.297 19.426 23.04 19.426h35.435l-.098 21.646c.054 1.205.216 1.98.485 2.323.405.516 1.424 1.77 3.724 1.887 2.3.116 2.336-.265 2.743-.31.271-.03 2.41-1.43 6.418-4.198l29.944-21.348c39.824.406 61.07.406 63.735 0C173.172 115.95 186 113.606 186 97.194V19.335z',
                shadow: 'M165.512 116.482c7.683-1.166 20.488-3.498 20.488-19.82V19.23C185.997 8.653 176.481-.002 164.846 0h-9.697c11.577.06 21.025 8.691 21.027 19.23v77.432c0 16.322-12.805 18.654-20.487 19.82-2.34.355-14.412.494-30.689.515 21.094.024 37.723-.092 40.512-.515z'
            };
            return _this;
        }
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiSpeechBubble.prototype, "size", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiSpeechBubble.prototype, "mood", void 0);
        __decorate([
            aurelia_framework_1.bindable,
            __metadata("design:type", Object)
        ], KawaiiSpeechBubble.prototype, "color", void 0);
        return KawaiiSpeechBubble;
    }(kawaii_element_1.KawaiiElement));
    exports.KawaiiSpeechBubble = KawaiiSpeechBubble;
});
;
define('text!__dot_dot__/src/elements/speech-bubble/kawaii-speech-bubble.html',[],function(){return "<template>\r\n    <svg\r\n      width.bind=\"size * 1.3\"\r\n      height.bind=\"size\"\r\n      viewBox=\"0 0 186 143\"\r\n      xmlns=\"http://www.w3.org/2000/svg\"\r\n      xmlns:xlink=\"http://www.w3.org/1999/xlink\"\r\n    >\r\n      <g id=\"Kawaii-Builder\" fill=\"none\" fill-rule=\"evenodd\">\r\n        <g id=\"Kawaii-speechBubble\" transform=\"translate(-27 -57)\">\r\n          <g id=\"kawaii-speechBubble\" transform=\"translate(27 57)\">\r\n            <path\r\n              d.one-time=\"paths.body\"\r\n              id=\"kawaii-speechBubble_body\"\r\n              fill.bind=\"color\"\r\n              fill-rule=\"nonzero\"\r\n            />\r\n            <path\r\n              d.one-time=\"paths.shadow\"\r\n              id=\"kawaii-speechBubble_shadow\"\r\n              fill=\"#121212\"\r\n              fill-rule=\"nonzero\"\r\n              opacity=\"0.07\"\r\n            />\r\n            <g as-element=\"kawaii-face\"\r\n              mood.one-time=\"mood\"\r\n              transform=\"translate(60 46)\"\r\n              unique-id.bind=\"getUniqueId()\"\r\n            />\r\n          </g>\r\n        </g>\r\n      </g>\r\n    </svg>\r\n  \r\n</template>";});;
define('__dot_dot__/src/index',["require", "exports", "aurelia-pal"], function (require, exports, aurelia_pal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
        config.globalResources([
            aurelia_pal_1.PLATFORM.moduleName('./elements/face/kawaii-face'),
            aurelia_pal_1.PLATFORM.moduleName('./elements/backpack/kawaii-backpack'),
            aurelia_pal_1.PLATFORM.moduleName('./elements/browser/kawaii-browser'),
            aurelia_pal_1.PLATFORM.moduleName('./elements/cat/kawaii-cat'),
            aurelia_pal_1.PLATFORM.moduleName('./elements/chocolate/kawaii-chocolate'),
            aurelia_pal_1.PLATFORM.moduleName('./elements/credit-card/kawaii-credit-card'),
            aurelia_pal_1.PLATFORM.moduleName('./elements/file/kawaii-file'),
            aurelia_pal_1.PLATFORM.moduleName('./elements/ghost/kawaii-ghost'),
            aurelia_pal_1.PLATFORM.moduleName('./elements/ice-cream/kawaii-ice-cream'),
            aurelia_pal_1.PLATFORM.moduleName('./elements/mug/kawaii-mug'),
            aurelia_pal_1.PLATFORM.moduleName('./elements/planet/kawaii-planet'),
            aurelia_pal_1.PLATFORM.moduleName('./elements/speech-bubble/kawaii-speech-bubble')
        ]);
    }
    exports.configure = configure;
});
;
define('__dot_dot__/src/mood',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Mood;
    (function (Mood) {
        Mood["Sad"] = "sad";
        Mood["Shocked"] = "shocked";
        Mood["Happy"] = "happy";
        Mood["Blissful"] = "blissful";
        Mood["Lovestruck"] = "lovestruck";
        Mood["Excited"] = "excited";
        Mood["KO"] = "ko";
    })(Mood = exports.Mood || (exports.Mood = {}));
});
;
define('app',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var App = (function () {
        function App() {
            this.message = 'from Aurelia!';
        }
        App.prototype.clicked = function () {
            alert('A primary button click or a touch');
        };
        return App;
    }());
    exports.App = App;
});
;
define('text!app.html',[],function(){return "<template>\r\n    <style>\r\n        .examples {\r\n            display: flex;\r\n            flex-wrap: wrap;\r\n            justify-content: space-between;\r\n        }\r\n\r\n        .examples > div {\r\n            text-align: center;\r\n            margin: 10px;\r\n        }\r\n    </style>\r\n\r\n    <h1>Aurelia Kawaii</h1>\r\n    <p>Aurelia Kawaii is a fork of <a href=\"https://github.com/miukimiu/react-kawaii\">React Kawaii</a>: cute SVG\r\n        illustrations as custom elements. Ideal if you want to give some cuteness and personality to your Aurelia\r\n        application.</p>\r\n\r\n    <hr>\r\n\r\n    <div class=\"examples\">\r\n        <div>\r\n            <h2>Backpack</h2>\r\n            <kawaii-backpack></kawaii-backpack>\r\n        </div>\r\n\r\n        <div>\r\n            <h2>Browser</h2>\r\n            <kawaii-browser></kawaii-browser>\r\n        </div>\r\n\r\n        <div>\r\n            <h2>Cat</h2>\r\n            <kawaii-cat></kawaii-cat>\r\n        </div>\r\n\r\n        <div>\r\n            <h2>Chocolate</h2>\r\n            <kawaii-chocolate></kawaii-chocolate>\r\n        </div>\r\n\r\n        <div>\r\n            <h2>Credit Card</h2>\r\n            <kawaii-credit-card></kawaii-credit-card>\r\n        </div>\r\n\r\n        <div>\r\n            <h2>File</h2>\r\n            <kawaii-file></kawaii-file>\r\n        </div>\r\n\r\n        <div>\r\n            <h2>Ghost</h2>\r\n            <kawaii-ghost></kawaii-ghost>\r\n        </div>\r\n\r\n        <div>\r\n            <h2>Ice Cream</h2>\r\n            <kawaii-ice-cream></kawaii-ice-cream>\r\n        </div>\r\n\r\n        <div>\r\n            <h2>Mug</h2>\r\n            <kawaii-mug></kawaii-mug>\r\n        </div>\r\n\r\n        <div>\r\n            <h2>Planet</h2>\r\n            <kawaii-planet></kawaii-planet>\r\n        </div>\r\n\r\n        <div>\r\n            <h2>Speech Bubble</h2>\r\n            <kawaii-speech-bubble></kawaii-speech-bubble>\r\n        </div>\r\n    </div>\r\n</template>\r\n";});;
define('environment',["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.default = {
        debug: true,
        testing: true
    };
});
;
define('main',["require", "exports", "./environment"], function (require, exports, environment_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(aurelia) {
        aurelia.use
            .standardConfiguration()
            .feature('resources');
        aurelia.use.developmentLogging(environment_1.default.debug ? 'debug' : 'warn');
        if (environment_1.default.testing) {
            aurelia.use.plugin('aurelia-testing');
        }
        aurelia.start().then(function () { return aurelia.setRoot(); });
    }
    exports.configure = configure;
});

//# sourceMappingURL=app-bundle.js.map