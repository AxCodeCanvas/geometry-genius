function calculateTriangleArea() {

    // get triangle base value
    const baseField = document.getElementById('triangle-base');
    const baseValueText = baseField.value;
    const baseValue = parseFloat(baseValueText)
    console.log(baseValue)
    // validate input
    if (isNaN(baseValue)) {
        alert('please insert a number')
        return
    }

    // get triangle height value 
    const heightField = document.getElementById('triangle-height')
    const heightValueText = heightField.value
    const heightValue = parseFloat(heightValueText)
    console.log(heightValue)
    // validate input
    if (isNaN(heightValue)) {
        alert("please insert a number")
        return
    }

    const triangleArea = 0.5 * baseValue * heightValue
    console.log(triangleArea)

    // show triangle area
    const triangleSpan = document.getElementById('triangle-area')
    triangleSpan.innerText = triangleArea

}
///__________________________

function calculateRectangleArea() {
    // get rectangle value
    const widthField = document.getElementById('rectangle-width')
    const widthValueText = widthField.value
    const widthValue = parseFloat(widthValueText)
    console.log(widthValue)
    // validate input
    if (isNaN(widthValue)) {
        alert('please insert a number')
        return
    }

    // get rectangle height value
    const rectangleHeightField = document.getElementById('rectangle-length')
    const rectangleHeightValueText = rectangleHeightField.value
    const rectangleHeightValue = parseFloat(rectangleHeightValueText)
    console.log(rectangleHeightValue)
    // validate input
    if (isNaN(rectangleHeightValue)) {
        alert('please insert a number')
        return
    }

    const rectangleArea = widthValue * rectangleHeightValue
    console.log(rectangleArea)

    // show rectangle area

    const rectangleSpan = document.getElementById('rectangle-area')
    rectangleSpan.innerText = rectangleArea

}


//_____________________________ Reusable function---> reduce duplicate code _____________________________--> 




function calculateParallelogramArea() {
    const base = getInputValue('parallelogram-base')
    console.log(base)
    // validate input
    if (isNaN(base)) {
        alert('please insert a number')
        return
    }

    const height = getInputValue('parallelogram-height')
    console.log(height)
     // validate input
     if (isNaN(height)) {
        alert('please insert a number')
        return
    }

    const area = base * height
    console.log(area)

    setElementInnerText('parallelogram-area', area)

}

function calculateEllipseArea() {
    const majorRadius = getInputValue('ellipse-major-radius')
    console.log(majorRadius)
     // validate input
     if (isNaN(majorRadius)) {
        alert('please insert a number')
        return
    }

    const minorRadius = getInputValue('ellipse-minor-radius')
    console.log(minorRadius)
     // validate input
     if (isNaN(minorRadius)) {
        alert('please insert a number')
        return
    }

    const area = 3.1416 * majorRadius * minorRadius
    const areaTwoDecimal = area.toFixed(2)
    setElementInnerText('ellipse-area', areaTwoDecimal)

}



// reusable get input value field in number

function getInputValue(fieldId) {
    const inputField = document.getElementById(fieldId)
    const inputValueText = inputField.value
    const valueInteger = parseFloat(inputValueText)
    return valueInteger

}

// reusable set span, p, div etc text

function setElementInnerText(elementId, area) {

    const element = document.getElementById(elementId, area)
    element.innerText = area
}

//____________________________________________________________

// Data validation
/*
1. set the proper type of the input field.(number, data, email)
2. check type using typeof 
3. NaN means: Not a Number. isNaN is checking whether the input is not a number or not
*/





