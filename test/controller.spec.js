const supertest = require('supertest');
const app = require('../app');
request = supertest(app);

const contents = {
  string: '測試',
  number: 100
};

describe('contents is an Object,', () => {
  it('contents have string and number fields.', (done) => {
    contents.should.be.an.Object(); // 確認 contents 資料型態
    contents.should.have.key('string', 'number'); // 確認 Object 的欄位。準確要求欄位用 keys，反之用 properties
    contents.string.should.be.String();
    contents.string.should.be.equal('測試'); // 確認 string 的值
    contents.number.should.be.Number().and.equal(100); // 確認 Type 和 Value 也可以寫在一起
    return done();
  });
});

describe('Controllers\' testing.', () => {

  it('This is a HTML.', (done) => {

    request.get('/').end((err, res) => {
      if (err) return done(err); // 與 Server 相關錯誤
      if (res.statusCode !== 200) return done(res.body); // 與 API 有關的錯誤

      const result = res.text;
      result.length.should.be.above(0);
      return done();
    })
  });

  it('This is a Jade.', (done) => {
    request.get('/jade').end((err, res) => {
      if (err) return done(err);
      if (res.statusCode !== 200) return done(res.body);

      const result = res.text;
      result.length.should.be.above(0);

      return done();
    });
  });
});
