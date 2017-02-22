import {TestBed} from '@angular/core/testing';
import {AppComponent} from './app.component';

describe('When opening the application', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({ declarations: [AppComponent] });
    });

    it('It bootstraps the AppComponent', () => {
        let fixture = TestBed.createComponent(AppComponent);
        expect(fixture.componentInstance instanceof AppComponent).toBe(true);
    });

    it('It displays a title', () => {
        let fixture = TestBed.createComponent(AppComponent);
        let element = fixture.nativeElement;
        expect(element.querySelector('h1').innerHTML).toBe('Hello from Angular App with Webpack');
    });
});