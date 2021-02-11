import Vue from 'vue'
import {
    FormPlugin, 
    ButtonPlugin,
    ModalPlugin, 
    FormTextareaPlugin, 
    FormSelectPlugin, 
    BCarousel, 
    BCarouselSlide, 
    FormInputPlugin, 
    FormGroupPlugin
}
from
'bootstrap-vue';

Vue.use(ModalPlugin)
Vue.use(FormPlugin)
Vue.use(ButtonPlugin)
Vue.component('b-carousel', BCarousel)
Vue.component('b-carousel-slide', BCarouselSlide)
Vue.use(FormTextareaPlugin)
Vue.use(FormSelectPlugin)
Vue.use(FormInputPlugin)
Vue.use(FormGroupPlugin)