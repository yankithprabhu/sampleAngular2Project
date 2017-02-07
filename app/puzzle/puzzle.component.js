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
                        template: "\n       <section class=\"setup\">\n       git add\n       <h2>Game Setup</h2>\n       Enter your name please :\n       <input type=\"text\" #name (keyup)=\"0\">\n        </section>\n        <section \n        [ngClass]=\"{puzzle: true,\n         solved: switch1.value == switch1Number &&\n                 switch2.value == switch2Number &&\n                 switch3.value == switch3Number &&\n                 switch4.value == switch4Number }\"\n        [ngStyle]=\"{display: name.value === '' ? 'none' : 'block'}\">\n        <h2>The Puzzle</h2>\n        <p>Ok Welcome<span class=\"name\"> {{name.value}}</span></p>\n        <br>\n        SWITCH 1:\n        <input type=\"text\" #switch1 (keyup)=\"0\"><br>\n        SWITCH 2:\n        <input type=\"text\" #switch2 (keyup)=\"0\"><br>\n        SWITCH 3:\n        <input type=\"text\" #switch3 (keyup)=\"0\"><br>\n        SWITCH 4:\n        <input type=\"text\" #switch4 (keyup)=\"0\"><br>\n        </section>\n        <h2>Congratulatins {{name.value}}, you did it!</h2>\n"
                    }), 
                    __metadata('design:paramtypes', [])
                ], PuzzleComponent);
                return PuzzleComponent;
            }());
            exports_1("PuzzleComponent", PuzzleComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBbUNBO2dCQUFBO2dCQWtCQSxDQUFDO2dCQVZHLGtDQUFRLEdBQVI7b0JBQ0ksSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUMvQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUM7b0JBQy9DLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQztvQkFDL0MsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFDO29CQUMvQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztvQkFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7b0JBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDO29CQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQztnQkFDcEMsQ0FBQztnQkFoREw7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDUCxRQUFRLEVBQUMsV0FBVzt3QkFDcEIsUUFBUSxFQUFFLCsvQkEyQmI7cUJBQ0EsQ0FBQzs7bUNBQUE7Z0JBbUJGLHNCQUFDO1lBQUQsQ0FsQkEsQUFrQkMsSUFBQTtZQWxCRCw2Q0FrQkMsQ0FBQSIsImZpbGUiOiJwdXp6bGUvcHV6emxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcbmltcG9ydCB7T25Jbml0fSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjpcIm15LXB1enpsZVwiLFxuICAgIHRlbXBsYXRlOiBgXG4gICAgICAgPHNlY3Rpb24gY2xhc3M9XCJzZXR1cFwiPlxuICAgICAgIGdpdCBhZGRcbiAgICAgICA8aDI+R2FtZSBTZXR1cDwvaDI+XG4gICAgICAgRW50ZXIgeW91ciBuYW1lIHBsZWFzZSA6XG4gICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI25hbWUgKGtleXVwKT1cIjBcIj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8c2VjdGlvbiBcbiAgICAgICAgW25nQ2xhc3NdPVwie3B1enpsZTogdHJ1ZSxcbiAgICAgICAgIHNvbHZlZDogc3dpdGNoMS52YWx1ZSA9PSBzd2l0Y2gxTnVtYmVyICYmXG4gICAgICAgICAgICAgICAgIHN3aXRjaDIudmFsdWUgPT0gc3dpdGNoMk51bWJlciAmJlxuICAgICAgICAgICAgICAgICBzd2l0Y2gzLnZhbHVlID09IHN3aXRjaDNOdW1iZXIgJiZcbiAgICAgICAgICAgICAgICAgc3dpdGNoNC52YWx1ZSA9PSBzd2l0Y2g0TnVtYmVyIH1cIlxuICAgICAgICBbbmdTdHlsZV09XCJ7ZGlzcGxheTogbmFtZS52YWx1ZSA9PT0gJycgPyAnbm9uZScgOiAnYmxvY2snfVwiPlxuICAgICAgICA8aDI+VGhlIFB1enpsZTwvaDI+XG4gICAgICAgIDxwPk9rIFdlbGNvbWU8c3BhbiBjbGFzcz1cIm5hbWVcIj4ge3tuYW1lLnZhbHVlfX08L3NwYW4+PC9wPlxuICAgICAgICA8YnI+XG4gICAgICAgIFNXSVRDSCAxOlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoMSAoa2V5dXApPVwiMFwiPjxicj5cbiAgICAgICAgU1dJVENIIDI6XG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNzd2l0Y2gyIChrZXl1cCk9XCIwXCI+PGJyPlxuICAgICAgICBTV0lUQ0ggMzpcbiAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI3N3aXRjaDMgKGtleXVwKT1cIjBcIj48YnI+XG4gICAgICAgIFNXSVRDSCA0OlxuICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc3dpdGNoNCAoa2V5dXApPVwiMFwiPjxicj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8aDI+Q29uZ3JhdHVsYXRpbnMge3tuYW1lLnZhbHVlfX0sIHlvdSBkaWQgaXQhPC9oMj5cbmBcbn0pXG5leHBvcnQgY2xhc3MgUHV6emxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcblxuICAgIHN3aXRjaDFOdW1iZXI6IG51bWJlcjtcbiAgICBzd2l0Y2gyTnVtYmVyOm51bWJlcjtcbiAgICBzd2l0Y2gzTnVtYmVyOm51bWJlcjtcbiAgICBzd2l0Y2g0TnVtYmVyOm51bWJlcjtcblxuXG4gICAgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuc3dpdGNoMU51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIHRoaXMuc3dpdGNoMk51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIHRoaXMuc3dpdGNoM051bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIHRoaXMuc3dpdGNoNE51bWJlciA9IE1hdGgucm91bmQoTWF0aC5yYW5kb20oKSk7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3dpdGNoMU51bWJlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3dpdGNoMk51bWJlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3dpdGNoM051bWJlcik7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc3dpdGNoNE51bWJlcik7XG4gICAgfVxufSJdfQ==
