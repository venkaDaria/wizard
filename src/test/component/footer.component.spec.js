"use strict";
Object.defineProperty(exports, "__esModule", {value: true});
var testing_1 = require("@angular/core/testing");
var platform_browser_1 = require("@angular/platform-browser");
var footer_component_1 = require("../../app/page/footer.component");
describe('FooterComponent for Step1 (inline template)', function () {
    var comp;
    var fixture;
    var de;
    var el;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [footer_component_1.FooterComponent1],
        });
        fixture = testing_1.TestBed.createComponent(footer_component_1.FooterComponent1);
        comp = fixture.componentInstance;
        de = fixture.debugElement.query(platform_browser_1.By.css('h1'));
        el = de.nativeElement;
    });
    it('should display original title', function () {
        fixture.detectChanges();
        expect(el.textContent).toContain(comp.title);
    });
    it('should display a different test title', function () {
        comp.title = 'Test Title';
        fixture.detectChanges();
        expect(el.textContent).toContain('Test Title');
    });
});
//# sourceMappingURL=footer.component.spec.js.map