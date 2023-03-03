import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'footer-citelis-component',
    styleUrl: 'footer-citelis-component.css',
    shadow: true,
})
export class CitFooter {
    @Prop() text: string;

    render() {
        return <div><div class='footerBottom'>
            <p>bottom side</p>
        </div>
        <div class='footer'>
        <p>{this.text}</p>
        <a href='https://www.citelis.com.mx/' target='_blank'>Citelis</a>
    </div> </div>;
    }
}