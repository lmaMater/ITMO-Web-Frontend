(function () {
    const form = document.getElementById('character-form');
    const tableBody = document.getElementById('characters-table').querySelector('tbody');

    // Загрузка персонажей из localStorage при загрузке страницы
    const loadCharacters = () => {
        const characters = JSON.parse(localStorage.getItem('characters')) || [];
        characters.forEach(addCharacterToTable);
    };

    // Сохранение персонажей в localStorage
    const saveCharacter = (character) => {
        const characters = JSON.parse(localStorage.getItem('characters')) || [];
        characters.push(character);
        localStorage.setItem('characters', JSON.stringify(characters));
    };

    // Добавление персонажа в таблицу
    const addCharacterToTable = (character) => {
        const row = document.createElement('tr');
        // row.innerHTML = `
        //     <td><img src="${character.image}" alt="${character.name}" class="character-image"></td>
        //     <td>${character.name}</td>
        //     <td>${character.description}</td>
        // `;
        
        const imageCell = document.createElement('td');
        const image = document.createElement('img');
        image.src = character.image;
        image.alt = character.name;
        image.classList.add('character-image');
        imageCell.appendChild(image);
        
        const nameCell = document.createElement('td');
        const nameText = document.createTextNode(character.name);
        nameCell.appendChild(nameText);
        
        const descriptionCell = document.createElement('td');
        const descriptionText = document.createTextNode(character.description);
        descriptionCell.appendChild(descriptionText);
        
        row.appendChild(imageCell);
        row.appendChild(nameCell);
        row.appendChild(descriptionCell);
        
        tableBody.appendChild(row);
    };

    form.addEventListener('submit', (event) => {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const imageFile = document.getElementById('image').files[0];

        if (!name || !description || !imageFile) return;

        const reader = new FileReader();
        reader.onload = () => {
            const character = {
                name,
                description,
                image: reader.result
            };
            saveCharacter(character);
            addCharacterToTable(character);

            form.reset();
        };
        reader.readAsDataURL(imageFile);
    });

    loadCharacters();
})();
