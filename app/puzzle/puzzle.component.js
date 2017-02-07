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
    var PuzzleComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            PuzzleComponent = (function () {
                function PuzzleComponent() {
                }
                PuzzleComponent.prototype.ngOnInit = function () {
                    this.switch1Number = Math.round(Math.random());
                    this.switch2Number = Math.round(Math.random());
                    this.switch3Number = Math.round(Math.random());
                    this.switch4Number = Math.round(Math.random());
                    console.log(this.switch1Number);
                    console.log(this.switch2Number);
                    console.log(this.switch3Number);
                    console.log(this.switch4Number);
                };
                PuzzleComponent = __decorate([
                    core_1.Component({
                        selector: "my-puzzle",
                        template: "\n       <section class=\"setup\">\n       <h2>Game Setup</h2>\n       Enter your name please :\n       <input type=\"text\" #name (keyup)=\"0\">\n        </section>\n        <section \n        [ngClass]=\"{puzzle: true,\n         solved: switch1.value == switch1Number &&\n                 switch2.value == switch2Number &&\n                 switch3.value == switch3Number &&\n                 switch4.value == switch4Number }\"\n        [ngStyle]=\"{display: name.value === '' ? 'none' : 'block'}\">\n        <h2>The Puzzle</h2>\n        <p>Ok Welcome<span class=\"name\"> {{name.value}}</span></p>\n        <br>\n        SWITCH 1:\n        <input type=\"text\" #switch1 (keyup)=\"0\"><br>\n        SWITCH 2:\n        <input type=\"text\" #switch2 (keyup)=\"0\"><br>\n        SWITCH 3:\n        <input type=\"text\" #switch3 (keyup)=\"0\"><br>\n        SWITCH 4:\n        <input type=\"text\" #switch4 (keyup)=\"0\"><br>\n        </section>\n        <h2>Congratulatins {{name.value}}, you did it!</h2>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0NBO2dCQUFBO2dCQWtCQSxDQUFDO2dCQVZHLGtDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkEvQ0w7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsV0FBVzt3QkFDcEIsUUFBUSxFQUFFLCsrQkEwQmI7cUJBQ0EsQ0FBQzs7bUNBQUE7Z0JBbUJGLHNCQUFDO1lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtZQWxCRCw2Q0FrQkMsQ0FBQSIsImZpbGUiOiJwdXp6bGUvcHV6emxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7T25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjpcIm15LXB1enpsZVwiLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgPHNlY3Rpb24gY2xhc3M9XCJzZXR1cFwiPlxuICAgICAgIDxoMj5HYW1lIFNldHVwPC9oMj5cbiAgICAgICBFbnRlciB5b3VyIG5hbWUgcGxlYXNlIDpcbiAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjbmFtZSAoa2V5dXApPVwiMFwiPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxzZWN0aW9uIFxuICAgICAgICBbbmdDbGFzc109XCJ7cHV6emxlOiB0cnVlLFxuICAgICAgICAgc29sdmVkOiBzd2l0Y2gxLnZhbHVlID09IHN3aXRjaDFOdW1iZXIgJiZcbiAgICAgICAgICAgICAgICAgc3dpdGNoMi52YWx1ZSA9PSBzd2l0Y2gyTnVtYmVyICYmXG4gICAgICAgICAgICAgICAgIHN3aXRjaDMudmFsdWUgPT0gc3dpdGNoM051bWJlciAmJlxuICAgICAgICAgICAgICAgICBzd2l0Y2g0LnZhbHVlID09IHN3aXRjaDROdW1iZXIgfVwiXG4gICAgICAgIFtuZ1N0eWxlXT1cIntkaXNwbGF5OiBuYW1lLnZhbHVlID09PSAnJyA/ICdub25lJyA6ICdibG9jayd9XCI+XG4gICAgICAgIDxoMj5UaGUgUHV6emxlPC9oMj5cbiAgICAgICAgPHA+T2sgV2VsY29tZTxzcGFuIGNsYXNzPVwibmFtZVwiPiB7e25hbWUudmFsdWV9fTwvc3Bhbj48L3A+XG4gICAgICAgIDxicj5cbiAgICAgICAgU1dJVENIIDE6XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2gxIChrZXl1cCk9XCIwXCI+PGJyPlxuICAgICAgICBTV0lUQ0ggMjpcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDIgKGtleXVwKT1cIjBcIj48YnI+XG4gICAgICAgIFNXSVRDSCAzOlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMyAoa2V5dXApPVwiMFwiPjxicj5cbiAgICAgICAgU1dJVENIIDQ6XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2g0IChrZXl1cCk9XCIwXCI+PGJyPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxoMj5Db25ncmF0dWxhdGlucyB7e25hbWUudmFsdWV9fSwgeW91IGRpZCBpdCE8L2gyPlxuYFxufSlcbmV4cG9ydCBjbGFzcyBQdXp6bGVDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgc3dpdGNoMU51bWJlcjogbnVtYmVyO1xuICAgIHN3aXRjaDJOdW1iZXI6bnVtYmVyO1xuICAgIHN3aXRjaDNOdW1iZXI6bnVtYmVyO1xuICAgIHN3aXRjaDROdW1iZXI6bnVtYmVyO1xuXG5cbiAgICBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5zd2l0Y2gxTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgdGhpcy5zd2l0Y2gyTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgdGhpcy5zd2l0Y2gzTnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgdGhpcy5zd2l0Y2g0TnVtYmVyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zd2l0Y2gxTnVtYmVyKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zd2l0Y2gyTnVtYmVyKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zd2l0Y2gzTnVtYmVyKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5zd2l0Y2g0TnVtYmVyKTtcbiAgICB9XG59Il19
