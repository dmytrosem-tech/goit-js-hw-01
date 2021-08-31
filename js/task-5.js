let countryName = prompt('Напиши пажалста страну');

switch (countryName.toLowerCase()) {
    case 'китай':
        console.log(`Доставка в ${countryName} будет стоить 100 кредитов`);
        break;
    case 'чили':
        console.log(`Доставка в ${countryName} будет стоить 250 кредитов`);
        break;
    case 'австралия':
        console.log(`Доставка в ${countryName} будет стоить 170 кредитов`);
        break;
    case 'индия':
        console.log(`Доставка в ${countryName} будет стоить 80 кредитов`);
        break;
    case 'ямайка':
        console.log(`Доставка в ${countryName} будет стоить 120 кредитов`);
        break;
    default:
        console.log('В вашей стране доставка не доступна');

}