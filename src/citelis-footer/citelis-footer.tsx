import { Component, Prop, h ,Method,State,Element} from '@stencil/core';
/* import citelis from '../citelis-footer/assets/agencias.json'; */


@Component({
    tag: 'citelis-footer',
    styleUrl: 'citelis-footer.css',
    assetsDirs: ['assets'],
    shadow: true,
})
export class CitFooter {
    @Prop() position: string;
    @Prop() theme: string;
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
        /* const iconSrc = getAssetPath('./assets/discord.svg'); */
        /* const poweredByCit = getAssetPath('./assets/poweredby-logo.webp'); */
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

        const citelis = {
          "citelis Grupo":{
              "CITELIS": {
                  "tipo":"Citelis",
                  "url":"https://www.citelis.com.mx/"
              }
          },
          "citelis Real Estate": {
              "eleva park": {
                  "tipo":"Real estate",
                  "url":"https://www.elevapark.com.mx/"
              },
              "esfera monterrey": {
                      "tipo":"Real estate",
                      "url":"https://www.citelis.com.mx/life-center/esfera-monterrey"
              },
              "esfera querétaro":{
                "tipo":"Real estate",
                "url":"https://citelis.com.mx/life-center/esfera-queretaro"
              },
              "esfera bike park mty":{
                  "tipo":"Real estate",
                  "url":"https://www.citelis.com.mx/life-center/esfera-monterrey/tiendas-y-servicios/bike-park"
              },
              "soho panamá":{
                  "tipo":"Real estate",
                  "url":"https://citelis.com.mx/life-center/soho-city-center"
              },
              "escala las américas":{
                  "tipo":"Real estate",
                  "url":"https://citelis.com.mx/life-center/espacio-las-americas"
              }
          },
          "citelis Mobility": {
              "mazda ecatepec":{
                  "tipo":"Mobility",
                  "url":"https://www.mazda.mx/distribuidores/mazda-ecatepec"
              },
              "ford ravisa las américas": {
                  "tipo":"Mobility",
                  "url":"https://www.fordravisa.mx/"
              },
              "ford ravisa periodismo":{
                  "tipo":"Mobility",
                  "url":"https://www.fordravisa.mx/"
              },
              "ford ravisa celaya":{
                  "tipo":"Mobility",
                  "url":"https://www.fordravisa.mx/"
              },
              "ford ravisa querétaro":{
                  "tipo":"Mobility",
                  "url":"https://www.fordravisa.mx/"
              },
              "hino ravisa morelia":{
                  "tipo":"Mobility",
                  "url":"https://hinomorelia.com/"
              },
              "hino ravisa cdmx":{
                  "tipo":"Mobility",
                  "url":"https://www.hinocdmx.com/home"
              },
              "jac store morelia":{
                  "tipo":"Mobility",
                  "url":"https://morelia.jac.mx/seller/"
              },
              "jac store leon":{
                  "tipo":"Mobility",
                  "url":"https://morelia.jac.mx/seller/"
              },
              "jac store san luis":{
                  "tipo":"Mobility",
                  "url":"https://morelia.jac.mx/seller/"
              },
              "jac escala morelia":{
                  "tipo":"Mobility",
                  "url":"https://morelia.jac.mx/seller/"
              },
              "mazda ravisa morelia":{
                  "tipo":"Mobility",
                  "url":"http://mazdamorelia.com.mx/"
              },
              "mazda ravisa uruapan":{
                  "tipo":"Mobility",
                  "url":"http://www.mazdauruapan.com/"
              },
              "mazda lázaro cárdenas":{
                  "tipo":"Mobility",
                  "url":"http://www.mazdalazarocardenas.com/"
              },
              "mazda lomas":{
                  "tipo":"Mobility",
                  "url":"https://www.citelis.com.mx/unidad-de-negocio/mobility/mazda-lomas"
              },
              "mazda carranza":{
                  "tipo":"Mobility",
                  "url":"https://www.mazda.mx/distribuidores/mazda-san-luis-carranza"
              },
              "mazda carretera 57":{
                  "tipo":"Mobility",
                  "url":"https://www.citelis.com.mx/unidad-de-negocio/mobility/mazda-carretera-57"
              },
              "mazda ravisa coacalco":{
                  "tipo":"Mobility",
                  "url":"https://www.mazda.mx/distribuidores/mazda-ravisa-mexico"
              },
              "mercedes-benz morelia":{
                "tipo":"Mobility",
                "url":"http://www.mercedesmorelia.mx/"
              },
              "sigo sobre ruedas":{
                  "tipo":"Mobility",
                  "url":"https://www.sigo.com.mx/"
              },
              "wiximo":{
                  "tipo":"Mobility",
                  "url":"https://wiximo.com/"
              }
          },
          "citelis Hospitality": {
              "Catering":{
                  "tipo":"Hospitality",
                  "url":"https://cater.mx/"
              },
              "Holiday Inn Morelia":{
                  "tipo":"Hospitality",
                  "url":"https://www.holidayinn.com/hotels/us/es/reservation"
              },
              "Holiday Inn express morelia":{
                  "tipo":"Hospitality",
                  "url":"https://www.holidayinn.com/hotels/us/es/reservation"
              },
              "Holiday Inn express guadalajara expo":{
                  "tipo":"Hospitality",
                  "url":"https://www.holidayinn.com/hotels/us/es/reservation"
              },
              "Multicentro":{
                  "tipo":"Hospitality",
                  "url":"https://citelis.com.mx/unidad-de-negocio/centros-de-espectaculos/multicentro"
              }
          }
      }


        Object.entries(citelis).forEach(([key, value], index) => {
            renderHibrid2 = [];
            renderHibrid3 = [];
            renderHibrid.push(<button class="accordion" key={index}> <h3 class="textHeader">{key}</h3>  </button>);

            //llenando rowgrids de marcas
            Object.entries(value).forEach(([key2, value2], index2) => {
                //row gris de 6 push
                renderHibrid2.push(
                            <div class="rowgrid">
                                <a class="textNegocio" href={value2.url} key={index2} target="_blank">{key2}</a>
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

        {/* ----------------------------- absolute footer --------------------------- */}
        let absoluteFooter = <div>
            <footer class="pie-pagina pie-position-abs">
            <div class={{ 'clase-dark': this.theme === 'dark', 'clase-light': this.theme === 'light' }}>
                    {/* {items} */}
                    <span part='textCopyright' class="textCopyright">Copyright © 2023 citelis®. Todos los derechos reservados. </span>
                </div>

                
                <div class="grupo-2">
                    <img class="poweredCitelis" src={poweredByCit} />
                    <h6 class="texConoce">Conoce más de citelis ® y sus unidades de negocio</h6>
                    <p class="textAviso"><a class="textAviso" href='https://www.citelis.com.mx/assets/docs/aviso-de-privacidad.pdf' target="_blank" >Aviso de privacidad</a></p>

                </div>
                {renderHibrid}
            </footer>
        </div>
        {/* ----------------------------- end absolute footer --------------------------- */}


        {/* ----------------------------- fixed footer --------------------------- */}
        let fixedFooter = <div>
            <footer class="pie-pagina pie-position-fix">
                <div class={{ 'clase-dark': this.theme === 'dark', 'clase-light': this.theme === 'light' }}>
                    {/* {items} */}
                    <span class="textCopyright">Copyright © 2023 citelis®. Todos los derechos reservados. </span>
                </div>

                
                <div class="grupo-2">
                    <img class="poweredCitelis" src={poweredByCit} />
                    <h6 class="texConoce">Conoce más de citelis ® y sus unidades de negocio</h6>
                    <p class="textAviso"><a class="textAviso" href='https://www.citelis.com.mx/assets/docs/aviso-de-privacidad.pdf' target="_blank" >Aviso de privacidad</a></p>

                </div>
                {renderHibrid}
            </footer>
        </div>
        {/* ----------------------------- end absolute footer --------------------------- */}


        {/* ----------------------------- relative footer --------------------------- */}
        let relativeFooter = <div>
            <footer class="pie-pagina pie-position-rel">
            <div class={{ 'clase-dark': this.theme === 'dark', 'clase-light': this.theme === 'light' }}>
                    {/* {items} */}
                    <span class="textCopyright">Copyright © 2023 citelis®. Todos los derechos reservados. ??</span>
                </div>

                
                <div class="grupo-2">
                    <img class="poweredCitelis" src={poweredByCit} />
                    <h6 class="texConoce">Conoce más de citelis ® y sus unidades de negocio</h6>
                    <p class="textAviso"><a class="textAviso" href='https://www.citelis.com.mx/assets/docs/aviso-de-privacidad.pdf' target="_blank" >Aviso de privacidad</a></p>

                </div>
                {renderHibrid}
            </footer>
        </div>
        {/* ----------------------------- end relative footer --------------------------- */}


        if (this.position == 'fixed'){
            return  fixedFooter;
        }else if (this.position == 'relative'){
            return  relativeFooter;
        }else if (this.position == 'absolute'){
            return absoluteFooter;
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
