import TwiterFollowUser from './TwitterFollowUser'

const TwiterFollowCard = ({users}) => {

    return (
    <section>
        {users.map(user => (
            <TwiterFollowUser key={user.id} username={user.username} name={user.name} initialIsFollowing={user.isFollowing}/>
        ))}
    </section>
    )
}

export default TwiterFollowCard