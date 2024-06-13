import BaseController from "./BaseController";
import CourseController from "./CourseController";
import UserController from "./UserController";
import data from "../data/data.json"

class DataUserCourse {

    // Le pasamos el id de usuario y el nombre del curso
    constructor(userID, course) {
        this.userID = userID;
        this.course = course;
    }

    // Función que envía un array con el título del curso y 
    async courseData() {
        let url = "";
        // asignammos la url correspondiente al nombre de curso
        if (this.course === "cyber") {
            url = "medaapjtitzwxtf";
        } else if (this.course === "analyst") {
            url = "mj97hqc55wg51mo";
        } else {
            url = "mfwt7k74aqa4waf";
        }
        // Instanciar los cursos
        let course = new CourseController(url, this.course);
        // Obtener datos completos del curso
        let allCourseData = await course.getCourse();

        // Obtener los datos concretos del usuario y usar shift para quitar el id
        let userCourseData = allCourseData.filter(data => data.userID === this.userID).shift()
        // Crear un array de objetos con el título y un boleano que indique si está completado
        let completedUnities = [];
        // Instanciar userCourseData para añadir los datos corerspondientes
        for(let i = 1; i < 4; i++) {
            completedUnities.push({completed:userCourseData.uf1[1]})
        }
        console.log(completedUnities);
    }

}

export default DataUserCourse;
