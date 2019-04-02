class TaskedController {
  constructor(){}

  index( req, res) {
    res.render('index.ejs', {
      tasckeds: [
        {
          title: 'tascked one',
          text: ' tascked one tascked one tascked one tascked one tascked one',
        },
        {
          title: 'tascked one',
          text: ' tascked one tascked one tascked one tascked one tascked one',
        },
        {
          title: 'tascked one',
          text: ' tascked one tascked one tascked one tascked one tascked one',
        },
        {
          title: 'tascked one',
          text: ' tascked one tascked one tascked one tascked one tascked one',
        },
        {
          title: 'tascked one',
          text: ' tascked one tascked one tascked one tascked one tascked one',
        },
      ],
    });

  }
}

module.exports = TaskedController;
