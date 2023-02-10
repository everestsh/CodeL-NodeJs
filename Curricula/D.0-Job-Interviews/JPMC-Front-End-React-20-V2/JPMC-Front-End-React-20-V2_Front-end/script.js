window.divider = window.divider || {};
// console.log("1 window.divider === ", window.divider )
(function(){
    errorMessages ={
        // Fill the proper error message to the variables below and throw them according to the requirements
        InvalidInput: "",
        InvalidDivisisor: ""
    };

    window.divider.init = function(){
        document.getElementById('divide-btn').addEventListener("click", this.getResults);
    }
    console.log("2 window.divider === ", window.divider )

    window.divider.getResults = function (){
        let result = 0;

        try {
            result = window.divider.calculate();
            document.getElementsByClassName("result-value")[0].innerHTML = result;
        } catch (e) {
            console.log('Error caught: '+ e);
        }
    }

    window.divider.calculate = function() {
        let num1 = Number(document.getElementById("value-1").value);
        let num2 = Number(document.getElementById("value-2").value);
        
        if (isNaN(num1) || isNaN(num2)) {
            throw new Error(errorMessages.InvalidInput);
        }
        if (num2 === 0) {
            throw new Error(errorMessages.InvalidDivisor);
        }
        return num1 / num2;
    };
    
})();