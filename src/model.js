

export class ResumeData {
  general = {
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  }
  school = {
    name: '',
    titleStudy: '',
    date: ''
  };

  work = [];
}

class Work {
  name = '';
  position = '';
  responsibilites = [];
  from = '';
  to = '';
}