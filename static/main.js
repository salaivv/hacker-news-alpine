const BASE_URL = 'https://api.hnpwa.com/v0'
const BASE_DOMAIN = 'https://news.ycombinator.com'

const geItem = async (id) => {
    res = await fetch(`${BASE_URL}/item/${id}.json`)
    item = await res.json()
    return item
}

const getTopStories = async (page=1) => {
    const res = await fetch(`${BASE_URL}/news/${page}.json`)
    const stories = await res.json()

    console.log(stories);
    return stories
}


const getUserLink = (user) => {
    return `${BASE_DOMAIN}/user?id=${user}`
}