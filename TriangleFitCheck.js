
console.log(doesTriangleFit([1, 1, 1], [1, 1, 1]));
console.log(doesTriangleFit([1, 1, 1], [2, 2, 2]));
console.log(doesTriangleFit([1, 2, 3], [1, 2, 2]));
console.log(doesTriangleFit([1, 2, 4], [1, 2, 6]));

function doesTriangleFit(triangle1, triangle2) {

    if (!isValidTriangle(triangle1) || !isValidTriangle(triangle2)) {
        return false;
    }

    perim1 = triangle1[0] + triangle1[1] + triangle1[2];
    perim2 = triangle2[0] + triangle2[1] + triangle2[2];

    if (perim1 > perim2) {
        return false;
    }

    return true;

}

function isValidTriangle(triangle) {
    if (triangle[0] + triangle[1] > triangle[2] && triangle[0] + triangle[2] > triangle[1] && 
            triangle[1] + triangle[2] > triangle[0]) {
        return true;
    } else {
        return false;
    }
}