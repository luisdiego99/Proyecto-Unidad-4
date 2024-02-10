
// Program to determinate insurance price for TK-U company. 


let keep_going = true;
while (keep_going) {
    
    alert("Bienvenido al cotizador automático de Seguros TK-U.\nPresione ´Aceptar´ para iniciar su cotización.");

    var base_price = 2000;

    //Check if customer is older than 18
    var customer_age = parseInt(prompt("Ingrese su edad:"))

    if (customer_age < 18) {
        alert("Usted es menor de edad. No puede realizar una cotización.");

    } else if (customer_age >= 18) {
    //Check if customer has a spouse.
        var spouse_age = parseInt(prompt("Ingrese la edad de su esposo/a.\n Si usted es soltero/a, coloque 0."));
    //Check number of children.
        var children_number = parseInt(prompt("Ingrese su número de hijos:"))
    //Check number of properties.
    var properties_number = parseInt(prompt("Ingrese su número de propiedades:"))
    //Check monthly salary.
    var salary = parseInt(prompt("Ingrese el valor numérico de su salario mensual:")) 

    // Determinate extra fee based on customer age. 
    if (customer_age >= 18 && customer_age <= 24) {
        var customer_age_fee = base_price * 0.1;
    } else if (customer_age >= 25 && customer_age <= 49) {
        var customer_age_fee = base_price * 0.2;
    } else if (customer_age >= 50) {
        var customer_age_fee = base_price * 0.3;
    }

    // Determinate extra fee based on spouse age. 
    if (spouse_age <18) {
        var spouse_age_fee = 0
    } else if (spouse_age >= 18 && spouse_age <= 24) {
        var spouse_age_fee = base_price * 0.1;
    } else if (spouse_age >= 25 && spouse_age <= 49) {
        var spouse_age_fee = base_price * 0.2;
    } else if (spouse_age >= 50) {
        var spouse_age_fee = base_price * 0.3;
    }

    // Determinate fee based on children number.
    var children_fee = children_number * base_price * 0.2

    // Determinate fee based on properties number.
    var properties_fee = properties_number * base_price * 0.35

    // Determinate fee based on salary.
    var salary_fee = salary * 0.05

    //Add all fees to base price
    var total_bill = base_price + customer_age_fee + spouse_age_fee + children_fee + properties_fee + salary_fee;

    alert("COTIZACION FINALIZADA.\n El precio de su seguro es de: " + total_bill);
}
let another_price = prompt("Desea realizar otra cotización?\nIngrese ´Si´ para continuar.\nIngrese ´No´ para salir.");

if (another_price.toLowerCase() == 'no') {
    keep_going = false;
}
}

alert("Fue un gusto atenderle. Vuelva pronto.");


// End --------------






