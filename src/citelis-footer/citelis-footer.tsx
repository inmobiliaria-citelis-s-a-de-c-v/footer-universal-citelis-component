import { Component, Prop, h } from '@stencil/core';

@Component({
    tag: 'citelis-footer',
    styleUrl: 'citelis-footer.css',
    shadow: true,
})
export class ATButton {
    @Prop() text: string;

    render() {
        return <button class='button'>{this.text}</button>;
    }
}