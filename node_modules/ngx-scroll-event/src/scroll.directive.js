"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ScrollDirective = /** @class */ (function () {
    function ScrollDirective() {
        this.onScroll = new core_1.EventEmitter();
        this.bottomOffset = 100;
        this.topOffset = 100;
    }
    // handle host scroll
    ScrollDirective.prototype.scrolled = function ($event) {
        this.elementScrollEvent($event);
    };
    // handle window scroll
    ScrollDirective.prototype.windowScrolled = function ($event) {
        this.windowScrollEvent($event);
    };
    ScrollDirective.prototype.windowScrollEvent = function ($event) {
        var target = $event.target;
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        var isReachingTop = scrollTop < this.topOffset;
        var isReachingBottom = (target.body.offsetHeight - (window.innerHeight + scrollTop)) < this.bottomOffset;
        var emitValue = { isReachingBottom: isReachingBottom, isReachingTop: isReachingTop, originalEvent: $event, isWindowEvent: true };
        this.onScroll.emit(emitValue);
    };
    ScrollDirective.prototype.elementScrollEvent = function ($event) {
        var target = $event.target;
        var scrollPosition = target.scrollHeight - target.scrollTop;
        var offsetHeight = target.offsetHeight;
        var isReachingTop = target.scrollTop < this.topOffset;
        var isReachingBottom = (scrollPosition - offsetHeight) < this.bottomOffset;
        var emitValue = { isReachingBottom: isReachingBottom, isReachingTop: isReachingTop, originalEvent: $event, isWindowEvent: false };
        this.onScroll.emit(emitValue);
    };
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], ScrollDirective.prototype, "onScroll", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ScrollDirective.prototype, "bottomOffset", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Number)
    ], ScrollDirective.prototype, "topOffset", void 0);
    __decorate([
        core_1.HostListener('scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], ScrollDirective.prototype, "scrolled", null);
    __decorate([
        core_1.HostListener('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Event]),
        __metadata("design:returntype", void 0)
    ], ScrollDirective.prototype, "windowScrolled", null);
    ScrollDirective = __decorate([
        core_1.Directive({
            selector: '[detect-scroll]'
        }),
        __metadata("design:paramtypes", [])
    ], ScrollDirective);
    return ScrollDirective;
}());
exports.ScrollDirective = ScrollDirective;
//# sourceMappingURL=scroll.directive.js.map