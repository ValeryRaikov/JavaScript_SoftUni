const baseUrl = 'http://localhost:3030/jsonstore/tasks';

const addCourseBtnElement = document.getElementById('add-course');
const editCourseMainBtnElement = document.getElementById('edit-course');
const loadCoursesBtnElement = document.getElementById('load-course');

const titleInputElement = document.getElementById('course-name');
const typeInputElement = document.getElementById('course-type');
const descriptionInputElement = document.getElementById('description');
const teacherInputElement = document.getElementById('teacher-name');

const clearInputFields = () => {
    document.getElementById('course-name').value = '';
    document.getElementById('course-type').value = '';
    document.getElementById('description').value = '';
    document.getElementById('teacher-name').value = '';
}

const loadCourses = async () => {
    const listDivElement = document.getElementById('list');
    listDivElement.innerHTML = '';

    try {
        const res = await fetch(baseUrl);

        if (!res.ok) {
            throw new Error('Error!');
        }

        const courseData = await res.json();

        Object.values(courseData).forEach(course => {
            const titleH2Element = document.createElement('h2');
            titleH2Element.textContent = course.title;
            const teacherH3Element = document.createElement('h3');
            teacherH3Element.textContent = course.teacher;
            const typeH3Element = document.createElement('h3');
            typeH3Element.textContent = course.type;
            const descriptionH4Element = document.createElement('h4');
            descriptionH4Element.textContent = course.description;

            const editCourseBtnElement = document.createElement('button');
            editCourseBtnElement.classList.add('edit-btn');
            editCourseBtnElement.textContent = 'Edit Course';

            const finishCourseBtnElement= document.createElement('button');
            finishCourseBtnElement.classList.add('finish-btn');
            finishCourseBtnElement.textContent = 'Finish Course';

            const divContainerElement = document.createElement('div');
            divContainerElement.classList.add('container');
            divContainerElement.appendChild(titleH2Element);
            divContainerElement.appendChild(teacherH3Element);
            divContainerElement.appendChild(typeH3Element);
            divContainerElement.appendChild(descriptionH4Element);
            divContainerElement.appendChild(editCourseBtnElement);
            divContainerElement.appendChild(finishCourseBtnElement);

            listDivElement.appendChild(divContainerElement);

            editCourseBtnElement.addEventListener('click', () => {
                divContainerElement.remove();

                titleInputElement.value = titleH2Element.textContent;
                typeInputElement.value = typeH3Element.textContent;
                descriptionInputElement.value = descriptionH4Element.textContent;
                teacherInputElement.value = teacherH3Element.textContent;

                editCourseMainBtnElement.removeAttribute('disabled');
                addCourseBtnElement.setAttribute('disabled', 'disabled');
            });

            editCourseMainBtnElement.addEventListener('click', async () => {
                try {
                    const res = await fetch(`${baseUrl}/${course._id}`, {
                        method: 'PUT',
                        headers: {
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            title: titleInputElement.value,
                            type: typeInputElement.value,
                            description: descriptionInputElement.value,
                            teacher: teacherInputElement.value,
                            _id: course._id,
                        })
                    });

                    if (!res.ok) {
                        throw new Error('Error!');
                    }
                } catch (err) {
                    console.error(err);
                }

                editCourseMainBtnElement.setAttribute('disabled', 'disabled');
                addCourseBtnElement.removeAttribute('disabled');

                await loadCourses();
                clearInputFields();
            });

            finishCourseBtnElement.addEventListener('click', async () => {
                try {
                    const res = await fetch(`${baseUrl}/${course._id}`, {
                        method: 'DELETE',
                    });

                    if (!res.ok) {
                        throw new Error('Error!');
                    }
                } catch (err) {
                    console.error(err);
                }

                await loadCourses();
            });
        });

        editCourseMainBtnElement.setAttribute('disabled', 'disabled');

    } catch (err) {
        console.error(err);
    }
}

const addCourse = async () => {
    try {
        const res = await fetch(baseUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                title: titleInputElement.value,
                type: typeInputElement.value,
                description: descriptionInputElement.value,
                teacher: teacherInputElement.value,
            }),
        });

        if (!res.ok) {
            throw new Error('Error!');
        }
    } catch (err) {
        console.error(err);
    }

    await loadCourses();
    clearInputFields();
}

loadCoursesBtnElement.addEventListener('click', loadCourses);
addCourseBtnElement.addEventListener('click', addCourse);