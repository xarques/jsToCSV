import { jsTocsv } from './jsTocsv';

// import enBackendErrorsResources from './en/backendErrors';
// import enCarbonFootprint from './en/carbonFootprint';
// import enResources from './en/translation';
// import enExternalLinks from './en/externalLinks';
// import enGameFrance from './en/gamefrance';
// import enGameWorld from './en/gameworld';
// import frBackendErrorsResources from './fr/backendErrors';
// import frCarbonFootprint from './fr/carbonFootprint';
// import frResources from './fr/translation';
// import frExternalLinks from './fr/externalLinks';
// import frGameFrance from './fr/gamefrance';
// import frGameWorld from './fr/gameworld';

// const output = '/Users/xarques/code/xarques/dataforgood/CAPLClimat/front-end/src/locales';

describe('Convert JS object ot CSV', () => {
  it('should convert JS object to CSV', () => {
    const dictionaryFr = {
      header: {
        common: {
          actions: 'Sauvegarder',
          button: 'Bouton',
        },
        common2: {
          actions2: 'Imprimer',
          button2: 'Bouton2',
        },
        title: 'titre',
      },
    };
    const dictionaryEn = {
      header: {
        common: {
          actions: 'Save',
          button: 'Button',
        },
        common2: {
          actions2: 'Print',
          button2: 'Button2',
        },
      },
    };
    const cvsExpected = `"header","common","actions","","","Sauvegarder","Save"
"header","common","button","","","Bouton","Button"
"header","common2","actions2","","","Imprimer","Print"
"header","common2","button2","","","Bouton2","Button2"
"header","title","","","","titre",""`;

    const csv = jsTocsv(dictionaryFr, dictionaryEn);
    // console.log('csv', csv);
    expect(csv).toEqual(cvsExpected);
    // getCSV({ title: 'backendErrors', obj1: frBackendErrorsResources, obj2: enBackendErrorsResources, output });
    // getCSV({ title: 'carbonFootprint', obj1: frCarbonFootprint, obj2: enCarbonFootprint, output });
    // getCSV({ title: 'pages', obj1: frResources, obj2: enResources, output });
    // getCSV({ title: 'externalLinks', obj1: frExternalLinks, obj2: enExternalLinks, output });
    // getCSV({ title: 'gamefrance', obj1: frGameFrance, obj2: enGameFrance, output });
    // getCSV({ title: 'gameworld', obj1: frGameWorld, obj2: enGameWorld, output });
  });
});
