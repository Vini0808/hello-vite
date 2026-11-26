import { atlag, Student } from "./student";
import 'bootstrap/dist/css/bootstrap.css'
import './style.css'

const student = new Student("Józsi", 4)

const students = [
  new Student ('A', 3),
  new Student ('B', 2),
  new Student ('C', 5),
  new Student ('D', 4),
  new Student ('E', 3),
  new Student ('F', 2),
]
console.log(atlag(students))

const app = document.getElementById('app')
app.textContent = new Date().toLocaleDateString();
app.textContent += student
