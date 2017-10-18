class Calculator = {
	add: function(a, b) {
		//...
		return a+b;
	},
	subtract: function(a,b) {
		return a-b;
	},
	multiply: function(a,b) {
		return a*b;
	},
	divide: function(a,b) {
		if(b!==0)
		return a/b;
	return NaN
	}
},
ScientificCalculator = {




}

function A(_name){
this.name=_name;

}

function B(){
A.prototype.call("Test");
}

B.prototype=Object.create(A.prototype);
var b= new B();
b.name;
Calculator.prototype = ScientificCalculator;

describe( "Calculator", function(){
var calculator;
	
	beforeEach( function(){
	calculator =  Calculator;
		});

	it( "adds 1 and 2", function(){
	expect( calculator.add( 1, 2 ) ).toBe( 3 );
	} );

	it( "subtracts 2 from 9", function(){
	expect( calculator.subtract( 9, 2 ) ).toBe( 7 );
	} );
	
	it( "multiplies 4 and 3", function(){
	expect( calculator.multiply( 4, 3 ) ).toEqual( 12 );
	} );
	
	it( "divides 10 by 2", function(){
	expect( calculator.divide( 10, 2 ) ).toBe( 5 );
	} );

	it( "does not divide by 0", function(){
	expect( calculator.divide( 5, 0 ),Number.isNaN(NaN) ).toBeTrue;
	} );
} );
describe( "ScientificCalculator", function(){
	var calculator;
	
	beforeEach( function(){
	calculator = ScientificCalculator;
	} );
		it( "extends Calculator", function(){
		expect( calculator ).to.be.instanceOf( Calculator );
		expect( calculator ).to.be.instanceOf( ScientificCalculator );
		} );
		it( "returns the sine of PI / 2", function(){
		expect( calculator.sin( Math.PI / 2 ) ).to.equal( 1 );
		} );
		it( "returns the cosine of PI", function(){
		expect( calculator.cos( Math.PI ) ).to.equal( -1 );
		} );
		it( "returns the tangent of 0", function(){
		expect( calculator.tan( 0 ) ).to.equal( 0 );
		} );
		it( "returns the logarithm of 1", function(){
		expect( calculator.log( 1 ) ).to.equal( 0 );
		} );
} )




