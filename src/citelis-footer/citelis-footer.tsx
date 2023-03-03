import { Component, Prop, h ,getAssetPath} from '@stencil/core';

@Component({
    tag: 'citelis-footer',
    styleUrl: 'citelis-footer.css',
    assetsDirs: ['assets'],
    shadow: true,
})
export class ATButton {
    @Prop() text: string;
    @Prop() image = "so.png";

    render() {
        const imageSrc = getAssetPath('./assets/citelis-favicon.png');
        return <footer class="pie-pagina">
        <div class="grupo-1">
            <div class="box">
                <figure>
                    <a href="#">
                        
                        
                    </a>
                    <img class="imageClass" src={imageSrc} />
                </figure>
            </div>
            <div class="box">
                <h2>SOBRE NOSOTROS</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio, ipsa?</p>
            </div>
            <div class="box">
                <h2>SIGUENOS</h2>
                <div class="red-social">
                    <a href="#" class="fa fa-facebook"></a>
                    <a href="#" class="fa fa-instagram"></a>
                    <a href="#" class="fa fa-twitter"></a>
                    <a href="#" class="fa fa-youtube"></a>
                </div>
            </div>
        </div>
        <div class="grupo-2">
            <small>&copy; Todos los Derechos Reservados <b>citelis</b> 2023 </small>
        </div>
    </footer>;
    }
}