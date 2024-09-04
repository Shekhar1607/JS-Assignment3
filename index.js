/* Q1.Find Grades
Your school has the following grading system based upon the marks (M) obtained by a student:
-- If M≤10, the grade will be E.
-- If 11≥M≤20, the grade will be D.
-- If 21≥M≤30, the grade will be C.
-- If 31≥M≤40, the grade will be B.
-- If 41≥M≤50, the grade will be A.*/

let marks = 44;
let grade;
switch (true) {
    case (marks >= 0 && marks <= 10):
        grade = "E"
        break;
    case (marks >= 11 && marks <= 20):
        grade = "D"
        break;
    case (marks >= 21 && marks <= 30):
        grade = "C"
        break;
    case (marks >= 31 && marks <= 40):
        grade = "B"
        break;
    case (marks >= 41 && marks <= 50):
        grade = "A-Grade"
        break;
    default:
        grade = "Input Invalid"

}
console.log("Student Grade: ", grade)

/*Q2. Get Value
You are provided with a table containing some characters and their 
corresponding values. Your task will be to find the value from the 
table corresponding to an input character and return it.
| P or p - PrepBytes |
| Z or z - Zenith |
| E or e - Expert Coder |
| D or d - Data Structure |
*/
let input = "p"
let Result;
switch (true) {
    case ((input == "P") || (input == "p")):
        Result = "PrepBytes"
        break;
    case ((input == "Z") || (input == "z")):
        Result = "Zenith"
        break;
    case ((input == "E") || (input == "e")):
        Result = "Expert Coder"
        break;
    case ((input == "D") || (input == "d")):
        Result = "Data Structure"
        break;
    default:
        Result = "Invalid Input"

}
console.log(Result);

// Q3. Find the maximum out of three numbers.

let a = 27
let b = 24
let c = 22

if (a > c && a > b)
    console.log('Largest number is:' ,a)
else if (b > c && b > a)
    console.log('Largest number is:' ,b)
else if (c > a && c > b)
    console.log('Largest number is:' ,c)
else
    console.log("You entered equal numbers!")

// Q4. Second Smallest

let x = 14;
let y = 23;
let z = 29;

if ((x > y && x < z) || (x > z && x < y))
    console.log('Second smllest number is:' ,x)
else if ((y > x && y < z) || (y > z && y < x))
    console.log('Second smllest number is:' ,y)
else if ((z > x && z < y) || (z > y && z < x))
    console.log('Second smllest number is:' ,z)
else
    console.log("You entered equal numbers!")

// Q.5. Check whether the triangle is Acute or Obtuse

let A = 45
let B = 45
let C = 90

if (A + B + C !== 180) {
    console.log("The angles do not form a valid triangle.");
}
else {

    if (A < 90 && B < 90 && C < 90) {
        console.log("The triangle is acute.");
    }
    else if (A > 90 || B > 90 || C > 90) {
        console.log("The triangle is Obtuse")
    }
    else {
        console.log("The triangle is right angle triangle")
    }

}

