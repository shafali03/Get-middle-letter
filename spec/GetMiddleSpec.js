// get_middle("test") # => "es"
// get_middle("testing") # => "t"
// get_middle("middle") # => "dd"
// get_middle("A") # => "A"
// get_middle("of") # => "of"

describe('GetMiddle', function() {


  var getMiddle 

  //only show one letter for odd

  it('should show middle letter for "testing"', function() {
    getMiddle = new GetMiddle();
    expect(getMiddle.getLetter('testing')).toEqual('t')
  })

  it('should show middle letters for "test"', function() {
    getMiddle = new GetMiddle();
    expect(getMiddle.getLetter('test')).toEqual('es')
  })

})