import data from './courses/courses.json'

function formatPath(name) {
    return name.replace(/\s+/g, '_')
}

export default function getPagePath(course_name, lesson_name="") {
    let result = ''

    result = result.concat("/course_", formatPath(course_name))

    if (lesson_name == "") {
        return result
    }

    console.log(result)
    return result.concat("/", formatPath(lesson_name))
}

function getLessonArray(course) {
    let result = [];

    course.sections.forEach(section => {
        section.lessons.forEach(lesson => {
            result.push(lesson.name)
        })
    })

    return result
}

// doesn't care if you click previous on first page
function getLessonPathOffset(course, current_lesson_name, offset) {
    let lessonNames = getLessonArray(course)

    for (let i = 0; i < lessonNames.length - 1; i++) {
        if (lessonNames[i] == current_lesson_name) {
            return getPagePath(course.name, lessonNames[i + offset])
        }
    }

    // todo Add other fallback url
    return "/"
}

export function getNextLessonPath(course, current_lesson_name) {
    return getLessonPathOffset(course, current_lesson_name, 1)
}

export function getPreviousLessonPath(course, current_lesson_name) {
    return getLessonPathOffset(course, current_lesson_name, -1)
}

export function getCourseListFromTag(tag) {
    let result = [];
    data.courses.forEach(course => {
        if (course.tags.includes(tag)) { result.push(course) }
    })
    return result
}