import TwiterFollowCard from './components/TwitterFollowCard'

const users = [
    {   
        id: 1,
        name: 'Migel Angel Duran',
        username: 'midudev',
        isFollowing: true
    },
    {
        id: 2,
        name: 'Osmel Medero Rosales',
        username: 'osmelmr',
        isFollowing: false
    },
    {
        id: 3,
        name: 'Migel Angel Duran',
        username: 'midudev',
        isFollowing: true
    },
    {
        id: 4,
        name: 'Migel Angel Duran',
        username: 'midudev',
        isFollowing: true
    },
    
]

const App = () => {
    return (
        <TwiterFollowCard users={users}/>
    )
}

export default App