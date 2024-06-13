import BaseController from "./BaseController";

class CourseController extends BaseController {

    constructor(tableUrl, tableName) {
        super(tableUrl, tableName);
    }

    async getCourse() {
        let course = await this.getAll();
        return course;
    }

}


export default CourseController;