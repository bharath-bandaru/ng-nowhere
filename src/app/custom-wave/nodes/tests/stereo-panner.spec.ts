import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {providers} from '../../constants/fallback';
import {CustWebAudioModule} from '../../module';
import {WebAudioStereoPanner} from '../stereo-panner';

describe('StereoPannerNode', () => {
    @Component({
        template: `
            <div waStereoPannerNode></div>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioStereoPanner)
        node!: AudioNode;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [CustWebAudioModule],
            declarations: [TestComponent],
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('creates node', () => {
        expect(testComponent.node instanceof StereoPannerNode).toBe(true);
    });
});

describe('StereoPannerNode factory fallback', () => {
    @Component({
        template: `
            <div waStereoPannerNode></div>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioStereoPanner)
        node!: AudioNode;
    }

    let fixture: ComponentFixture<TestComponent>;
    let testComponent: TestComponent;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [CustWebAudioModule],
            declarations: [TestComponent],
            providers,
        });
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(TestComponent);
        testComponent = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('creates node', () => {
        expect(testComponent.node instanceof StereoPannerNode).toBe(true);
    });
});
