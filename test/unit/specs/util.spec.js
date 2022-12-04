import { getPropByPath } from 'element-ui/src/utils/util';

describe('utils.getPropByPath', () => {
  it('getPropByPath', () => {

    const target = {
      mountains: {
        'Mt. Fiji': 1,
        'Mountain: Mt. Blanca': 2,
        'mt fiji': 3,
        'fiji': 4,
        'A Very \'Strange\' ["key"]': 5
      }
    };

    expect(getPropByPath(target, 'mountains[\'Mt. Fiji\']').v).to.equal(1);
    expect(getPropByPath(target, 'mountains[\'Mountain: Mt. Blanca\']').v).to.equal(2);
    expect(getPropByPath(target, 'mountains[\'mt fiji\']').v).to.equal(3);
    expect(getPropByPath(target, 'mountains["Mt. Fiji"]').v).to.equal(1);
    expect(getPropByPath(target, 'mountains["Mountain: Mt. Blanca"]').v).to.equal(2);
    expect(getPropByPath(target, 'mountains["mt fiji"]').v).to.equal(3);
    expect(getPropByPath(target, 'mountains[fiji]').v).to.equal(4);
    expect(getPropByPath(target, 'mountains.fiji').v).to.equal(4);
    expect(getPropByPath(target, 'mountains["A Very \'Strange\' ["key"]"]').v).to.equal(5);

  });

});
