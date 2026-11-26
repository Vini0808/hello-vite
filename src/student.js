export class Student {
    constructor(name, grade){
        this.name = name;
        this.grade = grade;
    }

    joTanulo(){
        if (this.grade >= 4){
            return true;
        } else{
            return false;
        }
    }

    toString(){
        return ` ${this.name} - ${this.grade}`;
    }
}

export function atlag(tanulok){
    let sum = 0;
    for (const t of tanulok){
        sum += t.grade
    }
    return sum / tanulok.length
}