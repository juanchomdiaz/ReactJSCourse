export const getClassFor = (presupuesto, restante) => {
    let css_class;

    if ( (presupuesto / 4) > restante) {
        css_class = 'alert alert-danger';
    } else if( (presupuesto / 2) > restante) {
        css_class = 'alert alert-warning';
    } else {
        css_class = 'alert alert-success';
    }

    return css_class;
}