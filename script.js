const projects = [
    {
        title: "StrelkaExpressBot",
        description: "Бот для регистрации заявок на грузоперевозки с многоуровневым меню и админ-панелью",
        url: "strelkaexpress_bot.html",
        image: "images/project_1.png"
    },
    {
        title: "Оба-На розыгрыш",
        description: "Бот для проведения розыгрышей и выбора случайного пользователя среди участников",
        url: "obana_bot.html",
        image: "images/project_2.png"
    }
];

function createProjectButtons() {
    const container = document.getElementById('projects-container');
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');
        projectDiv.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-title">${project.title}</div>
            <div class="project-description">${project.description}</div>
        `;
        projectDiv.onclick = () => window.location.href = project.url;
        container.appendChild(projectDiv);
    });
}

createProjectButtons();
