import axios from 'axios'

class CourseServices
{
    getAllCourses()
    {
        return axios.get("http://localhost:5000/api/v1/all")
    }
    createCourse(course)
    {
        return axios.post("http://localhost:5000/api/v1/create_course",course)
    }
    getBottomRatedReviews()
    {
        return axios.get("http://localhost:5000/api/v1/ascending_reviews")
    }
    getTopRatedReviews()
    {
        return axios.get("http://localhost:5000/api/v1/descending_reviews")
    }
    saveReviews(element)
    {
        return axios.post("http://localhost:5000/api/v1/create_review",element)
    }
    saveFeedbacks(element)
    {
        return axios.post("http://localhost:5000/api/v1/save_feedback",element)
    }
    getFeedbacks()
    {
        return axios.get("http://localhost:5000/api/v1/get_feedbacks")
    }
    getCourses()
    {
        return axios.get("http://localhost:5000/api/v1/course_names")
    }
}

export default new CourseServices()