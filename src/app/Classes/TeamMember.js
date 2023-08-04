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

const length = Math.ceil(team.length / 3)

let slicesOfTeam = []

for(let i = 0; i < team.length; i+3){
    slicesOfTeam.push([
        team[i] ? team[i] : '-',
        team[i + 1] ? team[i + 1] : '-',
        team[i + 2] ? team[i + 2] : '-',
    ])
}

export default slicesOfTeam;