import json

class Tags:
    EQUIPMENT = "equipment"
    SKILL = "skill"
    PROJECT = "project"    

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
        self.tags = []

        self.sections = []

    def addSection(self, section):
        self.sections.append(section)

    def addTag(self, tag):
        self.tags.append(tag)

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


for i in range(5):
    course = Course(f"equip #{i}", "Nik", "easy", "this is a sample course")
    course.addTag(Tags.EQUIPMENT)
    courseList.addCourse(course)

for i in range(2):
    course = Course(f"skill #{i}", "Nik", "easy", "this is a sample course")
    course.addTag(Tags.SKILL)
    courseList.addCourse(course)

for i in range(3):
    course = Course(f"project #{i}", "Nik", "easy", "this is a sample course")
    course.addTag(Tags.PROJECT)
    courseList.addCourse(course)

courseList.toJson("courses.json")
    