import {TestBed, ComponentFixture} from '@angular/core/testing';
import {AppComponent} from './app.component';

describe('When opening the application', () => {
    let fixture: ComponentFixture<AppComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent]
        });

        fixture = TestBed.createComponent(AppComponent);
    });

    it('It bootstraps the AppComponent', () => {
        expect(fixture.componentInstance).toBeDefined();
    });

    it('It displays the correct title', () => {
        let testTitle = 'Test Title';
        fixture.componentInstance.title = testTitle;
        fixture.detectChanges();

        let element = fixture.nativeElement;
        expect(element.querySelector('h1').innerHTML).toBe(testTitle);
    });

    it('It displays an image', () => {
        let element = fixture.nativeElement;
        expect(element.querySelector('img')).toBeDefined();
    });
});