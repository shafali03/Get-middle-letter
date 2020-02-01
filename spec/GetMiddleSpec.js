describe('GetMiddle', function() {
  var getMiddle 

  //only show one letter for odd
  it('should show middle letter for "testing"', function() {
    getMiddle = new GetMiddle();
    expect(getMiddle.getLetter('testing')).toEqual('t')
  })

  it('should show middle letter for "A"', function() {
    getMiddle = new GetMiddle();
    expect(getMiddle.getLetter('A')).toEqual('A')
  })

  // only show two letter of even
  it('should show middle letters for "middle"', function() {
    getMiddle = new GetMiddle();
    expect(getMiddle.getLetter('middle')).toEqual('dd')
  })

  it('should show middle letters for "of"', function() {
    getMiddle = new GetMiddle();
    expect(getMiddle.getLetter('of')).toEqual('of')
  })

  it('should show middle letters for "test"', function() {
    getMiddle = new GetMiddle();
    expect(getMiddle.getLetter('test')).toEqual('es')
  })
})