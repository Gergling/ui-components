import factory from './delimitedTextInputServiceFactory';

describe('delimitedTextInputServiceFactory', () => {
  test('Testing unit tests', () => {
    expect(2).toEqual(2);
  });

  test('Can generate a service instance which calls a callback', done => {
    factory('-', () => done());
  });

  describe('Service instance calls callback when running', () => {
    test('#setDelimiter', done => {
      expect(factory('-', () => done())
        .setDelimiter('=')
        .getDelimiter()
      ).toEqual('=');
    });
    test('#setDelimitations', done => {
      expect(factory('-', () => done())
        .setDelimitations(4)
        .getItems().length
      ).toEqual(4);
    });
    test('#setItemWidth', done => {
      expect(factory('-', () => done())
        .setItemWidth(20, 0)
        .getItems()[0].width
      ).toEqual(20);
    });
    test('#setItem', done => {
      expect(factory('-', () => done())
        .setItem('Kirk', 1)
        .getItems()[1].value
      ).toEqual('Kirk');
    });
    test('#setFocus', done => {
      expect(factory('-', () => done())
        .setItem('Kirk', 1)
        .setFocus(1)
        .getItems()[1].focus
      ).toEqual(true);
      expect(factory('-', () => done())
        .setItem('Kirk', 1)
        .setFocus()
        .getItems()[1].focus
      ).toEqual(false);
    });
  });
});