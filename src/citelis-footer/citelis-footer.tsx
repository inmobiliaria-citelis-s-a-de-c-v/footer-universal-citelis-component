import { Component, Prop, h ,getAssetPath,Method,State,Element} from '@stencil/core';
import citelis from './assets/agencias.json'; // This import style requires "esModuleInterop", see "side notes"

@Component({
    tag: 'citelis-footer',
    styleUrl: 'citelis-footer.css',
    assetsDirs: ['assets'],
    shadow: true,
})
export class CitFooter {
    @Prop() position: string;
    @Prop() image = "so.png";
    @Prop() show: boolean;
    @Prop() negocios: [];

    @State() value: string;
    @Element() private element: HTMLElement;
    @Prop() data: string[];

    constructor() {
        this.data = ['one', 'two', 'three', 'four'];
        console.log(this.element); // outputs undefined
    }

    // child elements will only exist once the component has finished loading
    componentDidLoad() {
        const list = this.element.shadowRoot.querySelectorAll('.accordion');
        [].forEach.call(list, li => li.addEventListener("click", function() {
            this.classList.toggle("active");
            var panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        })
        ); 
    }

    /* changeStates(){
        const elementInShadowDom = this.element.shadowRoot.querySelector('.collapsible');
        console.log(elementInShadowDom);
    }    */

    render() {
        {/* ----------------------------- ASSETS AND FONTS  --------------------------- */}
        const imageSrc = getAssetPath('./assets/citelis-favicon.png');
        /* const iconSrc = getAssetPath('./assets/discord.svg'); */
        //const poweredByCit = getAssetPath('./assets/poweredby-logo.webp');
        const poweredByCit = 'https://storage.googleapis.com/citelis-assets/footer/powered-by-citelis.png'
        /*  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Tilt+Prism&display=swap" rel="stylesheet">'; */
        const font = 'https://fonts.gstatic.com'
        const font2 = 'https://fonts.googleapis.com/css2?family=Tilt+Prism&display=swap'

        let element = document.querySelector(`link[href="${font}"]`);
        if (!element) {
            element = document.createElement('link');
            element.setAttribute('rel', 'preconnect');
            element.setAttribute('crossorigin', 'anonymus');
            element.setAttribute('href', font);
            document.head.appendChild(element);
        }
        let element2 = document.querySelector(`link[href="${font2}"]`);
        if (!element2) {
            element2 = document.createElement('link');
            element2.setAttribute('rel', 'stylesheet');
            element2.setAttribute('href', font2);
            document.head.appendChild(element2);
        }
        {/* ----------------------------- END ASSETS AND FONTS  --------------------------- */}

        //ejemplo llamada de funcion
       /*  this.fetchPokemon('pikachu').then(data => console.log(data)) */

        {/* ----------------------------- RENDERIZADO DINAMICO DE ACORDEON DEL OBJ CITELIS  --------------------------- */}
        let renderHibrid = [];
        let renderHibrid2 = [];
        let renderHibrid3 = [];

        Object.entries(citelis).forEach(([key, value], index) => {
            renderHibrid2 = [];
            renderHibrid3 = [];
            renderHibrid.push(<button class="accordion" key={index}> <h3 class="textHeader">{key}</h3>  </button>); 
        
            //llenando rowgrids de marcas
            Object.entries(value).forEach(([key2, value2], index2) => {
                //row gris de 6 push
                renderHibrid2.push(
                            <div class="rowgrid">
                                <a class="textNegocio" href={value2.url} key={index2}>{key2}</a>
                            </div>
                ); 
            });

            renderHibrid3.push(<div class="content">
                <div class="grupo-1">
                    {renderHibrid2}
                </div>
            </div>); 

            renderHibrid.push(<div class="panel">
                    {renderHibrid3}
                </div>
            ); 
        
        });

        {/* ----------------------------- fixed footer --------------------------- */}
        let fixedFooter = <div>
            <footer class="pie-pagina pie-position-abs">
                <div class="fila-top">
                    {/* {items} */}
                    <span part='textCopyright' class="textCopyright">Copyright © 2023 citelis®. Todos los derechos reservados. </span>
                </div>
                <div class="grupo-2">
                    <img class="poweredCitelis" src={poweredByCit} /> 
                    <h6 class="texConoce">Conoce más de citelis ® y sus unidades de negocio</h6>
                    <p class="textAviso"><a class="textAviso" href='/'>Aviso de privacidad</a></p>
                    
                </div>
                {renderHibrid} 
            </footer>
        </div>
        {/* ----------------------------- end fixed footer --------------------------- */}


        if (this.position == 'fixed'){
            /* return  fixedFooter; */
            return  fixedFooter;
        }else if (this.position == 'relative'){
            return <div>
                <footer class="pie-pagina pie-position-rel">
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
                </footer>
            </div>

            
        }
        
        
    }

    @Method()
    async fetchPokemon(name) {
        const pokemonQuery = `
          query PokemonInfo($name: String) {
            pokemon(name: $name) {
              id
              number
              name
              image
              attacks {
                special {
                  name
                  type
                  damage
                }
              }
            }
          }
        `
      
        const response = await window.fetch('https://graphql-pokemon2.vercel.app/', {
          // learn more about this API here: https://graphql-pokemon2.vercel.app/
          method: 'POST',
          headers: {
            'content-type': 'application/json;charset=UTF-8',
          },
          body: JSON.stringify({
            query: pokemonQuery,
            variables: {name: name.toLowerCase()},
          }),
        })
      
        const {data, errors} = await response.json()
        if (response.ok) {
          const pokemon = data?.pokemon
          if (pokemon) {
            // add fetchedAt helper (used in the UI to help differentiate requests)
            pokemon.fetchedAt = new Date()
            return pokemon
          } else {
            return Promise.reject(new Error(`No pokemon with the name "${name}"`))
          }
        } else {
          // handle the graphql errors
          const error = new Error(errors?.map(e => e.message).join('\n') ?? 'unknown')
          return Promise.reject(error)
        }
      }


}
