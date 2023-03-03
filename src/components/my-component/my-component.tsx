import { Component, Prop, h, getAssetPath } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
 assetsDirs: ['assets'], 
/*   shadow: true, */
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;
  @Prop() image = "imagentest.png";

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    const imageSrc = getAssetPath('./assets/imagentest.png');
  
    return <div>Hello, World! I'm {this.getText()}
    <img src={imageSrc} />
    </div>;
  }
}
