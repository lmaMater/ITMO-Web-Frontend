document.addEventListener("DOMContentLoaded", () => {
    const authForm = document.getElementById("auth-form");
    const commentsSection = document.getElementById("comments-section");
    const preloader = document.getElementById("preloader");
    const commentsContainer = document.getElementById("comments-container");
    const errorMessage = document.getElementById("error-message");
    const commentForm = document.getElementById("comment-form");
    const filterToggle = document.getElementById("filter-toggle"); // Кнопка для переключения фильтра

    const BASE_URL = "https://jsonplaceholder.typicode.com/comments";
    let localComments = [];
    let allComments = []; // Хранит все загруженные комментарии
    let showOnlyLocal = false; // Флаг для фильтра

    // Проверяем localStorage
    const savedName = localStorage.getItem("name");
    const savedEmail = localStorage.getItem("email");
    if (savedName && savedEmail) {
        showCommentsSection();
    }

    // Форма авторизации
    authForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = document.getElementById("auth-name").value;
        const email = document.getElementById("auth-email").value;

        localStorage.setItem("name", name);
        localStorage.setItem("email", email);

        showCommentsSection();
    });

    function showCommentsSection() {
        document.getElementById("auth-section").hidden = true;
        commentsSection.hidden = false;
        fetchComments();
    }

    async function fetchComments() {
        try {
            preloader.style.display = "block";
            commentsContainer.innerHTML = "";
            errorMessage.textContent = "";

            const response = await fetch(BASE_URL);
            if (!response.ok) throw new Error(`Ошибка сети: ${response.status}`);

            const comments = await response.json();
            allComments = comments; // Сохраняем загруженные комментарии
            preloader.style.display = "none";
            renderComments(getFilteredComments());
        } catch (error) {
            preloader.style.display = "none";
            errorMessage.textContent = `⚠ Ошибка: ${error.message}`;
        }
    }

    function getFilteredComments() {
        return showOnlyLocal ? localComments : [...localComments, ...allComments];
    }

    function renderComments(comments) {
        commentsContainer.innerHTML = comments
            .slice(0, 10)
            .map(
                (comment) => `
                <div class="comment">
                    <h3>${comment.name}</h3>
                    <p>${comment.body}</p>
                    <small>${comment.email}</small>
                </div>
            `
            )
            .join("");
    }

    commentForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const body = document.getElementById("comment-body").value;
        const name = localStorage.getItem("name");
        const email = localStorage.getItem("email");

        const newComment = { name, email, body };
        localComments.unshift(newComment);
        renderComments(getFilteredComments());
        commentForm.reset();
    });

    // Фильтр
    filterToggle.addEventListener("click", () => {
        showOnlyLocal = !showOnlyLocal;
        filterToggle.textContent = showOnlyLocal
            ? "Показать все"
            : "Показать мои";
        renderComments(getFilteredComments());
    });
});
