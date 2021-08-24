const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteOneSkills,
    edit,
    update
    
    
}

function update(req, res) {
    Skill.update(req.params.id, req.body);
    res.redirect('/skills/');
}

function edit(req, res) {
    res.render('skills/edit', {
      skill: Skill.getOne(req.params.id)
    });
  }



function index(req, res) {
    res.render('skills/index',{
    skills: Skill.getSkills(),
    skill: req.expertise,

  })
}

function newSkill(req, res) {
    res.render('skills/new')
}

function show(req, res) {
   res.render('skills/show',{
       skill: Skill.getOne(req.params.id),
       skillNum:
      Skill.getSkills().findIndex(
        (el) => el.id === parseInt(req.params.id)
      ) + 1,

   })

}

function create(req, res) {
    console.log(req.body);
    // The model is responsible for creating data
    Skill.create(req.body);
    // Do a redirect anytime data is changed
    res.redirect("/");
}

function deleteOneSkills(req, res) {
    Skill.deleteSkills(req.params.id);
    res.redirect("/");
}



 