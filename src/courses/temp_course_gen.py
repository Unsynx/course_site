import json

class CourseList:
    def __init__(self) -> None:
        self.courses = []

    def addCourse(self, course):
        course.prep()
        self.courses.append(course)

    def toJson(self, name):        
        self.courses = listOfObjToDicts(self.courses)

        with open(name, "w") as f:
            json.dump(self.__dict__, f)

class Course:
    def __init__(self, name, author, level, description) -> None:
        self.name = name
        self.author = author
        self.level = level
        self.description = description

        self.sections = []

    def addSection(self, section):
        self.sections.append(section)

    def addLessonToLastSection(self, lesson):
        self.sections[len(self.sections) - 1].addLesson(lesson)

    def prep(self):
        print(self.sections)
        for section in self.sections:
            section.lessons = listOfObjToDicts(section.lessons)
            
        
        self.sections = listOfObjToDicts(self.sections)

class Section:
    def __init__(self, name) -> None:
        self.name = name

        self.lessons = []

    def addLesson(self, lesson):
        self.lessons.append(lesson)

class Lesson:
    def __init__(self, name, link, description) -> None:
        self.name = name
        self.link = link
        self.description = description

def listOfObjToDicts(list):
    print(f"in {list}")
    result = []
    for obj in list:
        result.append(obj.__dict__)
    print(f"out {result}")
    return result


courseList = CourseList()

course = Course("temp", "Nik", "easy", "this is a sample course")
course.addSection(Section("Section 1"))
for i in range(5):
    course.addLessonToLastSection(Lesson(f"Lesson {i}", "https://www.youtube.com/embed/7q_sOSFLWEY?si=RPvh25oNOVZt8V0F", ""))
courseList.addCourse(course)

course = Course("contiuned", "Nik", "hard", "this is a sample course")
course.addSection(Section("Section 1"))
for i in range(3):
    course.addLessonToLastSection(Lesson(f"Lesson {i}", "", ""))
courseList.addCourse(course)

courseList.toJson("courses.json")
    