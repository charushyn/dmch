'use client'

class TeamMember {
    constructor(name, role, description, photo) {
        this.name = name;
        this.role = role,
        this.description = description,
        this.photo = photo
    }
}

const team = []

team.push(new TeamMember(
    'Julia Barnes1', 
    'Project Manager', 
    'Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    './team-f.png'
))
team.push(new TeamMember(
    'Julia Barnes2', 
    'Project Manager', 
    'Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    './team-s.png'
))
team.push(new TeamMember(
    'Julia Barnes3', 
    'Project Manager', 
    'Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    './team-t.png'
))
team.push(new TeamMember(
    'Julia Barnes4', 
    'Project Manager', 
    'Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    './team-t.png'
))
team.push(new TeamMember(
    'Julia Barnes5', 
    'Project Manager', 
    'Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    './team-t.png'
))
team.push(new TeamMember(
    'Julia Barnes6', 
    'Project Manager', 
    'Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    './team-t.png'
))
team.push(new TeamMember(
    'Julia Barnes7', 
    'Project Manager', 
    'Lorem ipsum dolor sit amet, consectetur adipiscing. Lorem ipsum dolor amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    './team-t.png'
))

const slicesOfTeam = []

export const lengthOfSlices = Math.ceil(team.length / 3)

for(let i = 1; i <= lengthOfSlices; i++){
    slicesOfTeam.push(
        [team[i * 3 - 3] ? team[i * 3 - 3] : null, team[i * 3 - 2] ? team[i * 3 - 2] : null, team[i * 3 - 1] ? team[i * 3 - 1] : null]
        )
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

export const exportedTeam = team;

export const indexShowForMd = getRandomInt(0, team.length - 1);


export default slicesOfTeam;

