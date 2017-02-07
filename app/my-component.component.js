System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var MyComponentComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MyComponentComponent = (function () {
                function MyComponentComponent() {
                    this.name = "Awesome";
                }
                MyComponentComponent = __decorate([
                    core_1.Component({
                        selector: 'my-component',
                        template: "\nThis is <span [class.is-awesome]=\"inputElement.value === 'yes'\">{{name}}</span> <span [style.color]=\"inputElement.value === 'yes' ? 'red' : '' \">component</span>!!!\u00DF\n<br>\n\nhow is it??<input type=\"text\" #inputElement (keyup)=\"0\">\n<br><br>\n<button [disabled]=\"inputElement.value !== 'yes'\"> I'm not clikable untill you say yes</button>\n",
                        styleUrls: ['src/css/mycomponent.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], MyComponentComponent);
                return MyComponentComponent;
            }());
            exports_1("MyComponentComponent", MyComponentComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm15LWNvbXBvbmVudC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFlQTtnQkFBQTtvQkFDSSxTQUFJLEdBQUUsU0FBUyxDQUFDO2dCQUNwQixDQUFDO2dCQWZEO29CQUFDLGdCQUFTLENBQUM7d0JBQ1AsUUFBUSxFQUFDLGNBQWM7d0JBQ3ZCLFFBQVEsRUFBQyx1V0FPWjt3QkFDRyxTQUFTLEVBQUMsQ0FBQyx5QkFBeUIsQ0FBQztxQkFDeEMsQ0FBQzs7d0NBQUE7Z0JBSUYsMkJBQUM7WUFBRCxDQUZBLEFBRUMsSUFBQTtZQUZELHVEQUVDLENBQUEiLCJmaWxlIjoibXktY29tcG9uZW50LmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6J215LWNvbXBvbmVudCcsXG4gICAgdGVtcGxhdGU6YFxuVGhpcyBpcyA8c3BhbiBbY2xhc3MuaXMtYXdlc29tZV09XCJpbnB1dEVsZW1lbnQudmFsdWUgPT09ICd5ZXMnXCI+e3tuYW1lfX08L3NwYW4+IDxzcGFuIFtzdHlsZS5jb2xvcl09XCJpbnB1dEVsZW1lbnQudmFsdWUgPT09ICd5ZXMnID8gJ3JlZCcgOiAnJyBcIj5jb21wb25lbnQ8L3NwYW4+ISEhw59cbjxicj5cblxuaG93IGlzIGl0Pz88aW5wdXQgdHlwZT1cInRleHRcIiAjaW5wdXRFbGVtZW50IChrZXl1cCk9XCIwXCI+XG48YnI+PGJyPlxuPGJ1dHRvbiBbZGlzYWJsZWRdPVwiaW5wdXRFbGVtZW50LnZhbHVlICE9PSAneWVzJ1wiPiBJJ20gbm90IGNsaWthYmxlIHVudGlsbCB5b3Ugc2F5IHllczwvYnV0dG9uPlxuYCxcbiAgICBzdHlsZVVybHM6WydzcmMvY3NzL215Y29tcG9uZW50LmNzcyddXG59KVxuXG5leHBvcnQgY2xhc3MgTXlDb21wb25lbnRDb21wb25lbnQge1xuICAgIG5hbWUgPVwiQXdlc29tZVwiO1xufSJdfQ==
