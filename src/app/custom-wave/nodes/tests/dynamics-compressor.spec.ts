import {Component, ViewChild} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {providers} from '../../constants/fallback';
import {CustWebAudioModule} from '../../module';
import {WebAudioDynamicsCompressor} from '../dynamics-compressor';

describe('DynamicsCompressorNode', () => {
    @Component({
        template: `
            <div waDynamicsCompressorNode></div>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioDynamicsCompressor)
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
        expect(testComponent.node instanceof DynamicsCompressorNode).toBe(true);
    });
});

describe('DynamicsCompressorNode factory fallback', () => {
    @Component({
        template: `
            <div waDynamicsCompressorNode></div>
        `,
    })
    class TestComponent {
        @ViewChild(WebAudioDynamicsCompressor)
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
        expect(testComponent.node instanceof DynamicsCompressorNode).toBe(true);
    });
});
