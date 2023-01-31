const BASE_URL = 'https://api.hnpwa.com/v0'
const BASE_DOMAIN = 'https://news.ycombinator.com'

const SECTIONS = {
    top: '/news',
    new: '/newest',
    ask: '/ask',
    show: '/show',
    jobs: '/jobs'
}

const getItem = async (id) => {
    const res = await fetch(`${BASE_URL}/item/${id}.json`)
    const item = await res.json()
    return item
}

const getParam = (url, param) => {
    const params = new URLSearchParams(url);
    return params.get(param); // is the string "Jonathan"
}

const getItems = async (section, page) => {
    res = await fetch(`${BASE_URL}${SECTIONS[section]}/${page}.json`)
    stories = await res.json()

    // console.log(stories);
    return stories
}

const getUserLink = (user) => {
    return `${BASE_DOMAIN}/user?id=${user}`
}

const getItemLink = (id) => {
    return `/item?id=${id}.json`
}

const getComments = (obj) => {
    comments = []
    const flattenComments = (obj) => {
        Object.keys(obj).forEach(key => {        
            if (key === 'comments') {
                const comment = {
                    id: obj.id, 
                    user: obj.user,
                    level: obj.level,
                    time_ago: obj.time_ago,
                    content: obj.content,
                    url: obj.url
                }
                // console.log(comment);
                comments.push(comment)
            }

            if (typeof obj[key] === 'object' && obj[key] !== null) {
                flattenComments(obj[key])
            }
        })

    }

    flattenComments(obj)

    console.log(comments.length);
    console.log(comments);
    return comments.slice(1)
}

const scrollToTop = () => {
    document.body.scrollTop = 0
    document.documentElement.scrollTop = 0;
    // window.scrollTo({top: 0, behavior: 'smooth'});
}

const getApiInfo = async () => {
    res = await fetch(BASE_URL)
    data = await res.json()
    return data
    // console.log(data)
} 
