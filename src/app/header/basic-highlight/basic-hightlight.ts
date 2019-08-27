import { Directive, OnInit, ElementRef, Renderer2, HostListener, HostBinding, Input } from "@angular/core";

@Directive({
    selector: '[appBasicHighlight]'
})

export class BasicHighDirective implements OnInit {
    @Input() myColor: string = 'yellow';
    @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';
    constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

    ngOnInit() {
        // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    }

    @HostListener('mouseenter') mouseenter(eventData: Event) {
        this.backgroundColor = this.myColor;
    }

    @HostListener('mouseleave') mouseleave(eventData: Event) {
        this.backgroundColor = 'transparent';
    }
}