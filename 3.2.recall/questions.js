let selectElementsStartingWithA = (array) => {
    let tab = [];
    array.forEach(element => {
        if (element[0] == 'a')
        {
            tab.push(element);
        }
    });
    return tab;
}

let selectElementsStartingWithVowel = (array) => {
    let tab = [];
    array.forEach(element => {
        if ((element[0] == 'a') || (element[0] == 'e') || (element[0] == 'i') || (element[0] == 'o') || (element[0] == 'u') || (element[0] == 'y'))
        {
            tab.push(element);
        }
    });
    return tab;
}

let removeNullElements = (array) => {
    let tab = [];
    array.forEach(element => {
        if (element != null)
        {
            tab.push(element);
        }
    });
    return tab;
}

let removeNullAndFalseElements = (array) => {
    let tab = [];
    array.forEach(element => {
        if ((element !== null) && (element !== false) )
        {
            tab.push(element);
        }
    });
    return tab;
}

let reverseWordsInArray = (array) => {
    for (let i = 0; i < array.length;i++)
    {
        array[i] = array[i].split("");
        array[i] = array[i].reverse();
        array[i] = array[i].join("");
    }
    return array;
}

let everyPossiblePair = (array) => {
    let tab = [];
    let final = [];
    for (let i = 0; i < array.length;i++)
    {
        for (let j = 0; j < array.length; j++)
        {
            if (i != j)
            {
                tab.push([array[i],array[j]]);
            }
        }
    }
    
    console.log(tab);
    return tab;
    
}


let allElementsExceptFirstThree = (array) => {
    let tab = [];
    for (let i = 0; i < array.length;i++)
    {
        if (i > 2)
        {
            tab.push(array[i]);
        }
    }
    return tab;
}

let addElementToBeginning = (array, element) => {
    array.unshift(element);
    return array;
}

let sortByLastLetter = (array) => {
    for (let i = 0; i < array.length;i++)
    {
        array[i] = array[i].split("");
        array[i] = array[i].reverse();
        array[i] = array[i].join("");
    }
    array.sort();
    for (let i = 0; i < array.length;i++)
    {
        array[i] = array[i].split("");
        array[i] = array[i].reverse();
        array[i] = array[i].join("");
    }
    return array;
}

let getFirstHalf = (string) => {
    let tab = "";
    for (let i = 0;i < string.length;i++)
    {
        if (i < string.length/2)
        {
            tab += string[i];
        }
    }
    return tab;
}

let makeNegative = (number) => {
    return (number < 0 ? number : -number  );
}

let numberOfPalindromes = (array) => {
    let arr =[];
    for (let i = 0; i < array.length;i++)
    {
        arr.push(array[i]);
    }
    let sum = 0;
    for (let i = 0; i < array.length;i++)
    {
        array[i] = array[i].split("");
        array[i] = array[i].reverse();
        array[i] = array[i].join("");
    }
    for (let j = 0;j < arr.length;j++)
    {
        if (arr[j] == array[j])
        {
            sum++;
        }
    }
    return sum;
}

let shortestWord = (array) => {
    let tab = [];
    
    for (let i = 0; i < array.length;i++)
    {
        tab.push(array[i].length);
    }
    let min = Math.min(...tab);
    let final;
    for (let i = 0; i < array.length;i++)
    {
        if (array[i].length == min)
        {
            final = array[i];
            
        }
        
    }
    return final;
    

}

let longestWord = (array) => {
    let tab = [];
    
    for (let i = 0; i < array.length;i++)
    {
        tab.push(array[i].length);
    }
    let min = Math.max(...tab);
    let final;
    for (let i = 0; i < array.length;i++)
    {
        if (array[i].length == min)
        {
            final = array[i];
            
        }
        
    }
    return final;
}

let sumNumbers = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length;i++)
    {
        sum += array[i];
    }
    return sum;
}

let repeatElements = (array) => {
    let tab = array;
    return (array.join("") + tab.join("")).split("");
}

let stringToNumber = (string) => {
    return parseFloat(string);
}

let calculateAverage = (array) => {
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    return array.reduce(reducer)/array.length;
}

let getElementsUntilGreaterThanFive = (array) => {
    let tab = [];
    let bool = true;
    for (let i = 0;i < array.length;i++)
    {
        if ((array[i] <= 5) && (bool == true))
        {
            tab.push(array[i]);
        }
        else
        {
            bool = false;
        }
    }
    return tab;
}

let convertArrayToObject = (array) => {
    let key = [];
    let value = [];
    let obj = {};
    for (let i = 0; i < array.length;i++)
    {
        if (i % 2 == 0)
        {
            key.push(array[i]);
        }
        else
        {
            value.push(array[i]);
        }
    }
    for (let i = 0; i < array.length/2;i++)
    {
        obj[key[i]] = value[i];
    }
    return obj;
}

let getAllLetters = (array) => {
    for (let i = 0; i < array.length;i++)
    {
        array[i] = array[i].split("");
    }
    
    let arr = array.flat();
    let set = new Set(arr);
    let arr1 = [...set];
    return arr1.sort();
}

let swapKeysAndValues = (object) => {
    let obj = {};
    
    for (let item in object)
    {
        obj[object[item]] = item;
    }
    return obj;
}

let sumKeysAndValues = (object) => {
    let sum = 0;
    for (let item in object)
    {
        sum += parseInt(object[item])  + parseInt(item) ;
    }
    return sum;
}

let removeCapitals = (string) => {
    string = string.split(" ");
    for (let i = 0;i < string.length;i++)
    {
        string[i] = string[i].slice(1,string[i].length );
    }
    string = string.join(" ");
    return string;
}

let roundUp = (number) => {
    return Math.ceil(number);
}

let formatDateNicely = (date) => {
    return 'Write your method here';
}

let getDomainName = (string) => {
    return 'Write your method here';
}

let titleize = (string) => {
    return 'Write your method here';
}

let checkForSpecialCharacters = (string) => {
    for (let i = 0; i < string.length;i++)
    {
        //if ((string[i] != ));
    }
}

let squareRoot = (number) => {
    return Math.pow(number,1/2);
}

let factorial = (number) => {
    return (number <= 1 ? 1 : number * factorial(number - 1));
}

let findAnagrams = (string) => {
    return 'Write your method here';
}

let convertToCelsius = (number) => {
    return Math.round((number - 32) * 5/9);
}

let letterPosition = (array) => {
    let alpha = "abcdefghijklmnopqrstuvwxyz";
    let arr = array.join("");
    arr = arr.toLowerCase().split("");

    for (let i = 0; i < arr.length; i++)
    {
        for (let j = 0; j < alpha.length; j++)
        {
            if (arr[i] == alpha[j])
            {
                arr[i] = j + 1;
            }
        }
    }
    return arr;
}
