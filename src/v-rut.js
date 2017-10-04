import { vRutDirective } from './vRutDirective';

exports.install = function (Vue) {
	Vue.directive('rut', vRutDirective);
}