/*
 * Formats Chilean DNI
 * @author Eduardo Aguad <eduaguad@gmail.com>
 *
 */

export const vRutDirective = {
  data: {
    vModel: null,
  },
  bind(el, binding, vnode) {
    el.value = format(el.value);
    setVModelValue(format(el.value), vnode);
  },
  update(el, binding, vnode) {
    if(el.value < 3) return false;
    el.value = format(el.value);
    setVModelValue(el.value, vnode);
  }
};

/*
 * Format rut with dots and dash
 * @param {string} The value we need to format
 * @return {string} The formatted Rut
 */
function format(val) {
  if(!val.length) return '';
  return clean(val).slice(0, -1).replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.") + '-' + clean(val).slice(-1);
}

/*
 * Clean input value
 * @param {string} The value we need to clean
 * @return {string} Clean value
 */
function clean(val) {
  return val.replace(/[^[0-9kK]/g, '');
}

/*
 * Finds v-model expression
 * @param {Object} Vue vnode
 * @return {string} expression
 */
function findVModelName(vnode) {
  return vnode.data.directives.find(function (o) {
    return o.name === 'model';
  }).expression;
}

/*
 * Sets v-model value
 * @param {string} Value
 * @param {Object} Vue vnode
 */
function setVModelValue(value, vnode) {
  vnode.context[findVModelName(vnode)] = value;
}

