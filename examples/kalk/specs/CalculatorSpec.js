describe('kalk.Calculator', function() {
    describe('buffer', function() {
        it('should initialize with 0 as the first entry', function() {
            var calc = new kalk.Calculator();
            
            expect(calc.buffer[0]).toBe(0);
        });    
    });
    
    describe('input', function() {
        var calc;
        
        beforeEach(function() {
            calc = new kalk.Calculator();
        });
        
        it('should accept regular numbers', function() {             
            expect(function() {
                 calc.input(3);
            }).not.toThrow();
        });
        
        it('should accept "stringified" numbers', function() {             
            expect(function() {
                 calc.input('3');
            }).not.toThrow();
        });
        
        it('should accept + as a valid operation', function() {             
            expect(function() {
                 calc.input('+');
            }).not.toThrow();
        });
        
        it('should accept - as a valid operation', function() {             
            expect(function() {
                 calc.input('-');
            }).not.toThrow();
        });
        
        it('should accept / as a valid operation', function() {             
            expect(function() {
                 calc.input('/');
            }).not.toThrow();
        });
        
        it('should accept * as a valid operation', function() {             
            expect(function() {
                 calc.input('*');
            }).not.toThrow();
        });
        
        it('should accept = as a valid operation', function() {             
            expect(function() {
                 calc.input('=');
            }).not.toThrow();
        });
        
        it('should fail on any non-numeric and non-valid operation', function() {             
            expect(function() {
                 calc.input('r');
            }).toThrow('Invalid input. "r" is not a number or a valid operation');
        });
        
        it('should overwrite the last buffer entry if it is number and the new input is also a number', function() {
            expect(calc.buffer[0]).toBe(0);
            
            calc.input(5);
            expect(calc.buffer[0]).toBe(5);
            calc.input(14);
            
            expect(calc.buffer[0]).toBe(14);
            expect(calc.buffer.length).toBe(1);
        });
        
        it('should push an operation into the buffer if the last entry is a number', function() {             
            calc.input(7);
            
            calc.input('+');
            
            expect(calc.buffer.length).toBe(2);
            expect(calc.buffer[1]).toBe('+');
        });
        
        it('should push a number into the buffer if the last entry is not a number', function() {             
            calc.input(50);
            calc.input('-');
            calc.input(10);
            
            expect(calc.buffer.length).toBe(3);
            expect(calc.buffer[2]).toBe(10);
        });
        
        it('should calculate the result if the expression in the buffer given the "=" operation', function() {
            calc.input(25);
            calc.input('+');
            calc.input(15);
            
            calc.input('=');
            
            expect(calc.result).toBe(40);
        });
    });

    xdescribe('add', function() {
        it('should calculate the sum of the given operands', function() {
            var calc = new kalk.Calculator();
            
            calc.input(5);
            calc.input('+')
            calc.input(4);
            calc.input('=');
            
            expect(calc.result).toEqual(9);
        });
    });
});