const skills = [
    {id:1, expertise: 'html'},
    {id:2, expertise: 'css'},
    {id:3, expertise: 'javaScript'}
   

]
module.exports = {
    getSkills,
    getOne,
    create,
    deleteSkills,
    update

}

function update(id, skill) {
    const idex = skills.findIndex((el) => el.id === parseInt(id));
    skill.id = parseInt(id);
    skills.splice(idex, 1, skill);
}

function getSkills() {
    return skills;
}

function getOne(id) {
    return skills.find((el) =>el.id === parseInt(id))
}

function create(el) {
    el.id = Date.now() % 1000000;
    skills.push(el);
}

function deleteSkills(id) {
    const idex = skills.findIndex((el) => el.id === parseInt(id));
  skills.splice(idex, 1);
}