class Score {
    constructor(math, physics, chemistry, average) {
        this.math = math;
        this.physics = physics;
        this.chemistry = chemistry;
        this.average = (this.math + this.physics + this.chemistry) / 3;
    }
}
class Student {
    constructor(name, score) {
        this.name = name;
        this.score = score;
    }
}
const students = [
    new Student("Nguyen Van A", new Score(10, 9,6)),
    new Student("Tran Thi B", new Score(8, 7,9)),
    new Student("Khuc Xuan E", new Score(10, 5,10)),
    new Student("Khuc Xuan A", new Score(10, 5,10)),
    new Student("Khuc Xuan C", new Score(10, 5,10)),

];
const customSort = (arr) => {
    const len = arr.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - i - 1; j++) {
            const currentAvg = arr[j].score.average;
            const nextAvg = arr[j + 1].score.average;
            if (currentAvg < nextAvg) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            } 
            else if (currentAvg === nextAvg) {
                if (arr[j].name > arr[j + 1].name) {
                    [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                }
            }
        }
    }

    return arr;
}
function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length - 1;
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const midAvg = arr[mid].score.average;
        console.log(left+'-'+right);
        console.log(arr[mid]);
        if (midAvg === target) {
            return arr[mid];
        } else if (midAvg > target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return null;
}
const sortedStudents = customSort(students);
sortedStudents.forEach(student => {
    console.log(`Name: ${student.name}, Average Score: ${student.score.average}`);
});
const targetAverage = 8;
const studentWithTargetAverage = binarySearch(sortedStudents, targetAverage);

if (studentWithTargetAverage) {
    console.log(`Found student with average score of ${targetAverage}: ${studentWithTargetAverage.name}`);
} else {
    console.log(`No student found with average score of ${targetAverage}`);
}