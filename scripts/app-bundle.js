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
define('text!__dot_dot__/src/elements/backpack/kawaii-backpack.html',[],function(){return "<template>\n    <svg xmlns:xlink=\"http://www.w3.org/1999/xlink\" width.bind=\"size * 0.63\" height.bind=\"size\" viewBox=\"0 0 138 218\">\n        <defs>\n            <path id=\"pocket__shape-path\" d.one-time=\"paths.pocketShapePath\" />\n            <path id=\"pocket__shape__shadow-path\" d.one-time=\"paths.pocketShapeShadowPath\" />\n        </defs>\n        <g id=\"kawaii-backpack\" transform=\"translate(0 -1)\">\n            <g id=\"right-shoulder-strap\" transform=\"matrix(-1 0 0 1 125.901 13.054)\">\n                <path id=\"right-shoulder-strap__back\" fill.bind=\"color\" d=\"M0 5.948v43.619l13.879-14.792z\" />\n                <path id=\"right-shoulder-strap__back__shadow\" fill=\"#FFF\" fill-rule=\"nonzero\" opacity=\"0.4\"\n                    d=\"M0 5.948v43.619l13.879-14.792z\" />\n                <path id=\"right-shoulder-strap__front\" fill.bind=\"color\"\n                    d=\"M9.193 34.697L0 5.127 21.014 0l7.735 24.677z\" />\n            </g>\n            <g id=\"left-shoulder-strap\" transform=\"translate(11.896 13.054)\">\n                <path id=\"left-shoulder-strap__back\" fill.bind=\"color\" d=\"M0 5.948v43.619l13.879-14.792z\" />\n                <path id=\"left-shoulder-strap__back_shadow\" fill=\"#FFF\" fill-rule=\"nonzero\" opacity=\"0.4\"\n                    d=\"M0 5.948v43.619l13.879-14.792z\" />\n                <path id=\"left-shoulder-strap__front\" fill.bind=\"color\"\n                    d=\"M9.193 34.697L0 5.127 21.014 0l7.735 24.677z\" />\n            </g>\n            <g id=\"hanging-loop\" transform=\"translate(47.585)\">\n                <path id=\"hanging-loop__back\" fill.bind=\"color\" d=\"M16.853 7.931h9.913L21.81.991z\" />\n                <path id=\"hanging-loop__back_shadow\" fill=\"#121212\" fill-rule=\"nonzero\" opacity=\"0.14\"\n                    d=\"M16.853 7.931h9.913L21.81.991z\" />\n                <path id=\"hanging-loop__shape\" fill.bind=\"color\" d.one-time=\"paths.hangingLoopShape\" />\n            </g>\n            <g id=\"main-compartment\" transform=\"translate(0 26.617)\">\n                <path id=\"main-compartment__shape\" fill.bind=\"color\" d.one-time=\"paths.mainCompartmentShape\" />\n                <path id=\"main-compartment__bottom-stripe\" fill=\"#121212\" fill-rule=\"nonzero\"\n                    d.one-time=\"paths.mainCompartmentBottomStripe\" opacity=\"0.07\" />\n\n                <g as-element=\"kawaii-face\" mood.bind=\"mood\" transform=\"translate(36 70)\"\n                    unique-id.bind=\"getUniqueId()\">\n                </g>\n\n                <path id=\"main-compartment__top\" fill=\"#121212\" fill-rule=\"nonzero\"\n                    d.one-time=\"paths.mainCompartmentTop\" opacity=\"0.07\" />\n            </g>\n            <g id=\"pocket\" transform=\"translate(12.888 135.981)\">\n                <mask id=\"mask-4\" fill=\"#fff\">\n                    <use xlink:href=\"#pocket__shape-path\" />\n                </mask>\n                <use id=\"pocket__shape\" fill.bind=\"color\" xlink:href=\"#pocket__shape-path\" />\n                <mask id=\"mask-6\" fill=\"#fff\">\n                    <use xlink:href=\"#pocket__shape__shadow-path\" />\n                </mask>\n                <use id=\"pocket__shape__shadow\" fill=\"#121212\" fill-rule=\"nonzero\" opacity=\"0.14\"\n                    xlink:href=\"#pocket__shape__shadow-path\" />\n                <g id=\"Group-6\" mask=\"url(#mask-6)\">\n                    <g transform=\"translate(0 15.862)\">\n                        <path id=\"Rectangle-7\" fill=\"#33363B\" opacity=\"0.408\" d=\"M0 2.974h113.014v2.974H0z\" />\n                        <path id=\"Rectangle-7-Copy\" fill=\"#555D67\" opacity=\"0.408\" d=\"M0 0h113.014v2.974H0z\" />\n                        <path id=\"Rectangle-8\" fill=\"#6D727A\" opacity=\"0.587\" d=\"M107.066 0h5.948v5.948h-5.948z\" />\n                        <path id=\"zip\" fill=\"#49505A\" d.one-time=\"paths.zip\" opacity=\"0.746\" />\n                    </g>\n                </g>\n                <g id=\"brand\" mask=\"url(#mask-6)\">\n                    <g transform=\"translate(78.737 39.368)\">\n                        <path id=\"Rectangle-6\" fill=\"#FFFDFD\" d=\"M0 0h27.789v18.526H0z\" />\n                        <path id=\"Rectangle-6-Copy\" fill=\"#121212\" opacity=\"0.298\"\n                            d=\"M1.158 1.158h25.474v16.211H1.158z\" />\n                        <path id=\"brand\" fill=\"#FFF\" d=\"M2.316 2.316h23.158v13.895H2.316z\" />\n                    </g>\n                </g>\n            </g>\n        </g>\n    </svg>\n</template>\n";});;
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
define('text!__dot_dot__/src/elements/browser/kawaii-browser.html',[],function(){return "<template>\n    <svg width.bind=\"size * 1.44\" height.bind=\"size\" viewBox=\"0 0 200 139\" xmlns=\"http://www.w3.org/2000/svg\"\n        xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n        <g id=\"kawaii-browser\">\n            <g id=\"kawaii-browser__body\" fillRule=\"nonzero\">\n                <path d.one-time=\"paths.shape\" id=\"kawaii-browser__shape\" fill.bind=\"color\" />\n                <path d.one-time=\"paths.shadow\" id=\"kawaii-browser__shadow\" fill=\"#121212\" opacity=\".1\" />\n                <g id=\"address-bar\" transform=\"translate(.097)\">\n                    <path d.one-time=\"paths.addressBar\" fill=\"#111\" />\n                    <ellipse fill=\"#FFF\" cx=\"168.855\" cy=\"10.901\" rx=\"3.4\" ry=\"3.395\" />\n                    <ellipse fill=\"#FFF\" cx=\"180.074\" cy=\"10.901\" rx=\"3.4\" ry=\"3.395\" />\n                    <g id=\"address\" transform=\"translate(12.654 5.47)\" fill=\"#FFF\">\n                        <rect x=\".277\" y=\".163\" width=\"145.775\" height=\"10.563\" rx=\"5.282\" />\n                    </g>\n                </g>\n            </g>\n            <g as-element=\"kawaii-face\" mood.bind=\"mood\" transform=\"translate(67 63)\" unique-id.bind=\"getUniqueId()\" />\n        </g>\n    </svg>\n</template>\n";});;
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
define('text!__dot_dot__/src/elements/cat/kawaii-cat.html',[],function(){return "<template>\n    <svg xmlns=\"http://www.w3.org/2000/svg\" width.bind=\"size * 0.84\" height.bind=\"size\" viewBox=\"0 0 185 220\">\n        <g id=\"Kawaii-Builder\" fill=\"none\" fill-rule=\"evenodd\">\n            <g id=\"kawaii-cat\">\n                <g id=\"kawaii-cat_tail\" transform=\"translate(29.23 153.846)\" fill-rule=\"nonzero\">\n                    <path\n                        d=\"M45.487 29.59l3.18 5.077s-7.744 6.666-17.282 8.615C24.513 44.718.05 46.564.05 21.846s17.231-28.82 9.436-7.949c0 0-2.82 8.77.82 14.667 3.642 5.898 14.052 11.128 23.488 6.257l11.692-5.231z\"\n                        id=\"tail_inner_shadow\" fill.bind=\"color\" />\n                    <path\n                        d=\"M45.487 29.59l3.18 5.077s-7.744 6.666-17.282 8.615C24.513 44.718.05 46.564.05 21.846s17.231-28.82 9.436-7.949c0 0-2.82 8.77.82 14.667 3.642 5.898 14.052 11.128 23.488 6.257l11.692-5.231z\"\n                        id=\"tail_inner\" fill=\"#121212\" opacity=\"0.25\" />\n                </g>\n                <g id=\"kawaii-cat_legs\" transform=\"translate(81 190)\" fill.bind=\"color\" fill-rule=\"nonzero\">\n                    <path d.one-time=\"paths.legs\" id=\"kawaii-cat_legs_inner\" />\n                </g>\n                <g id=\"kawaii-cat_arms\" transform=\"translate(58 132)\" fill.bind=\"color\" fill-rule=\"nonzero\">\n                    <path d=\"M55.949.205s27.948 51.641 2 53.898\" id=\"arm-r\" />\n                    <path d=\"M13.641.205s-27.949 51.641-2 53.898\" id=\"arm-l\" />\n                </g>\n                <g id=\"kawaii-cat_arms-shadow\" transform=\"translate(58 132)\" fill=\"#121212\" fill-rule=\"nonzero\"\n                    opacity=\"0.25\">\n                    <path d=\"M55.949.205s27.948 51.641 2 53.898\" id=\"arm-r\" />\n                    <path d=\"M13.641.205s-27.949 51.641-2 53.898\" id=\"arm-l\" />\n                </g>\n                <path d.one-time=\"paths.body\" id=\"kawaii-cat_body\" fill.bind=\"color\" fill-rule=\"nonzero\" />\n                <g id=\"kawaii-cat_ears\" transform=\"translate(34 23)\" fill=\"#121212\" fill-rule=\"nonzero\" opacity=\"0.25\">\n                    <path d=\"M103.795 2.897s18.718-8.974 13.077 8.975\" id=\"kawaii-cat_ear-r\" />\n                    <path d=\"M14.923 2.538S-3.795-6.436 1.846 11.513\" id=\"kawaii-cat_ear-l\" />\n                </g>\n                <path\n                    d=\"M92.243 190.282h.004v-48.667h-.004c7.075-.36 11.946-2.615 11.946-2.615 16.709 54.254-11.62 51.324-11.946 51.282-.376.042-28.705 2.972-11.945-51.282 0 0 4.869 2.255 11.942 2.615z\"\n                    id=\"kawaii-cat_belly\" fill=\"#121212\" fill-rule=\"nonzero\" opacity=\"0.25\" />\n                <g as-element=\"kawaii-face\" mood.bind=\"mood\" transform=\"translate(59 67)\" unique-id.bind=\"getUniqueId()\" />\n                <path\n                    d=\"M96.935 77.625c-.975-2.106-8.13-2.227-8.889 0-.47 1.458 2.746 4.454 4.372 4.373 1.663-.121 5.095-3.118 4.517-4.373z\"\n                    id=\"kawaii-cat_nose\" fill=\"#121212\" fill-rule=\"nonzero\" />\n                <path d.one-time=\"paths.shadow\" id=\"kawaii-cat_shadow\" fill=\"#121212\" fill-rule=\"nonzero\" opacity=\"0.1\" />\n            </g>\n        </g>\n    </svg>\n</template>\n";});;
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
                shadow: 'M176.018 143c6.066 0 10.982-4.903 10.982-10.953V10.953C187 4.903 182.084 0 176.018 0h11C193.084 0 198 4.903 198 10.953v121.094c0 6.05-4.916 10.953-10.982 10.953h-11z',
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
define('text!__dot_dot__/src/elements/credit-card/kawaii-credit-card.html',[],function(){return "<template>\n    <svg width.bind=\"size * 1.38\" height.bind=\"size\" viewBox=\"0 0 198 143\" xmlns=\"http://www.w3.org/2000/svg\"\n        xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n        <g id=\"kawaii-creditCard\">\n            <g id=\"kawaii-creditCard__body\" fillRule=\"nonzero\">\n                <path d.one-time=\"paths.shape\" id=\"kawaii-creditCard__shape\" fill.bind=\"color\" />\n                <path d.one-time=\"paths.shadow\" id=\"kawaii-creditCard__shadow\" fill=\"#000\" opacity=\".1\" />\n                <path id=\"kawaii-creditCard__stripe\" fill=\"#000\" d=\"M0 17h198v27H0z\" />\n            </g>\n            <g as-element=\"kawaii-face\" mood.bind=\"mood\" transform=\"translate(66 73)\" unique-id.bind=\"getUniqueId()\" />\n        </g>\n    </svg>\n</template>\n";});;
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
define('__dot_dot__/src/index',["require", "exports", "aurelia-pal"], function (require, exports, aurelia_pal_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    function configure(config) {
        config.globalResources([
            aurelia_pal_1.PLATFORM.moduleName('./elements/face/kawaii-face'),
            aurelia_pal_1.PLATFORM.moduleName('./elements/backpack/kawaii-backpack'),
            aurelia_pal_1.PLATFORM.moduleName('./elements/browser/kawaii-browser'),
            aurelia_pal_1.PLATFORM.moduleName('./elements/cat/kawaii-cat'),
            aurelia_pal_1.PLATFORM.moduleName('./elements/credit-card/kawaii-credit-card')
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
define('text!app.html',[],function(){return "<template>\n    <h1>Aurelia Kawaii</h1>\n    <p>Aurelia Kawaii is a fork of <a href=\"https://github.com/miukimiu/react-kawaii\">React Kawaii</a>: cute SVG\n        illustrations as custom elements. Ideal if you want to give some cuteness and personality to your Aurelia\n        application.</p>\n\n    <hr>\n\n    <h2>Backpack</h2>\n\n    <kawaii-backpack size=\"180\" color=\"#FFD882\" mood=\"blissful\"></kawaii-backpack>\n    <kawaii-backpack size=\"180\" color=\"#FFD882\" mood=\"sad\"></kawaii-backpack>\n    <kawaii-backpack size=\"180\" color=\"#FFD882\" mood=\"happy\"></kawaii-backpack>\n    <kawaii-backpack size=\"180\" color=\"#FFD882\" mood=\"shocked\"></kawaii-backpack>\n    <kawaii-backpack size=\"180\" color=\"#FFD882\" mood=\"lovestruck\"></kawaii-backpack>\n    <kawaii-backpack size=\"180\" color=\"#FFD882\" mood=\"excited\"></kawaii-backpack>\n    <kawaii-backpack size=\"180\" color=\"#FFD882\" mood=\"ko\"></kawaii-backpack>\n\n    <h2>Browser</h2>\n\n    <kawaii-browser size=\"80\" mood=\"blissful\"></kawaii-browser>\n    <kawaii-browser size=\"80\" mood=\"sad\"></kawaii-browser>\n    <kawaii-browser size=\"80\" mood=\"happy\"></kawaii-browser>\n    <kawaii-browser size=\"80\" mood=\"shocked\"></kawaii-browser>\n    <kawaii-browser size=\"80\" mood=\"lovestruck\"></kawaii-browser>\n    <kawaii-browser size=\"80\" mood=\"excited\"></kawaii-browser>\n    <kawaii-browser size=\"80\" mood=\"ko\"></kawaii-browser>\n\n    <h2>Cat</h2>\n\n    <kawaii-cat size=\"140\" mood=\"blissful\"></kawaii-cat>\n    <kawaii-cat size=\"140\" mood=\"sad\"></kawaii-cat>\n    <kawaii-cat size=\"140\" mood=\"happy\"></kawaii-cat>\n    <kawaii-cat size=\"140\" mood=\"shocked\"></kawaii-cat>\n    <kawaii-cat size=\"140\" mood=\"lovestruck\"></kawaii-cat>\n    <kawaii-cat size=\"140\" mood=\"excited\"></kawaii-cat>\n    <kawaii-cat size=\"140\" mood=\"ko\"></kawaii-cat>\n\n    <h2>Credit Card</h2>\n\n    <kawaii-credit-card size=\"85\" mood=\"blissful\"></kawaii-credit-card>\n    <kawaii-credit-card size=\"85\" mood=\"sad\"></kawaii-credit-card>\n    <kawaii-credit-card size=\"85\" mood=\"happy\"></kawaii-credit-card>\n    <kawaii-credit-card size=\"85\" mood=\"shocked\"></kawaii-credit-card>\n    <kawaii-credit-card size=\"85\" mood=\"lovestruck\"></kawaii-credit-card>\n    <kawaii-credit-card size=\"85\" mood=\"excited\"></kawaii-credit-card>\n    <kawaii-credit-card size=\"85\" mood=\"ko\"></kawaii-credit-card>\n\n</template>\n";});;
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