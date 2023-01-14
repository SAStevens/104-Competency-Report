function displayTable(){
    let petSection = document.getElementById("newTable");
    let table ="";
    for(let i=0; i < petSalon.pets.length; i++){
        let pet = petSalon.pets[i];
        table += `
            <tr id="${pet.id}">
                <td>${pet.name}</td>
                <td>${pet.age}</td>
                <td>${pet.gender}</td>
                <td>${pet.breed}</td>
                <td>${pet.service}</td>
                <td>${pet.owner}</td>
                <td>${pet.phone}</td>
                <td>${pet.payment}</td>
                <td><button class="btn btn-danger" onclick="deletePet(${pet.id});">Delete</button></td>
            </tr>
        `;
    }
    petSection.innerHTML=table;
}