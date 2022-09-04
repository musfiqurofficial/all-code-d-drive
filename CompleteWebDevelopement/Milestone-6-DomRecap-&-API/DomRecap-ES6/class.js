class TeamMember {
    name;
    location;
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    provideFeedback() {
        console.log(`${this.name} thank you for your feedback.`);
    }
}


class Developer extends TeamMember {
    designation = 'Web Course Instructor'
    team = 'Web team'
    language;
    developerFeather(feature) {
        console.log(`Web site Feature ${feature}`)
    }
    constructor(name, location, language) {
        super(name, location);
        this.language = language;
    }
    release(version) {
        console.log(`Release website${version}`)
    }
}
class Instructor extends TeamMember {
    designation = 'Web Course Instructor'
    team = 'Web team'
    tech;
    startSupportSession(time) {
        console.log(`start the support session at ${time}`)
    }
    constructor(name, location) {
        super(name, location);
    }
    createQuiz(module) {
        console.log(`please create quiz for module ${module}`)
    }
}
class JobPlacement extends TeamMember {
    designation = 'Web Course Instructor'
    team = 'Web team'
    tech;
    region;
    provideResume(time) {
        console.log(`start the support session at ${time}`)
    }
    constructor(name, location, region) {
        super(name, location);
        this.region = region
    }
    prepareStudent(module) {
        console.log(`please create quiz for module ${module}`)
    }
}


const alia = new Developer('Alia Bhatt', 'Dhaka', 'React',)
console.log(alia)

alia.provideFeedback();


// const musfiq = new Instructor('musfiq', 'barisal');
// const babul = new Instructor('babul', 'dhaka');
// const siam = new Instructor('siam', 'muladi');
// const karim = new Instructor('karim', 'sylet');

// console.log(musfiq);
// console.log(babul);
// console.log(siam);
// console.log(karim);
// musfiq.startSupportSession('9.00');
// musfiq.createQuiz(60);

