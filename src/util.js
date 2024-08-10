function formatPath(name) {
    return name.replace(/\s+/g, '_')
}

function getPagePath(course_name, lesson_name="") {
    let result = ''

    result = result.concat("/course_", formatPath(course_name))

    if (lesson_name == "") {
        return result
    }

    console.log(result)
    return result.concat("/", formatPath(lesson_name))
}

export default getPagePath