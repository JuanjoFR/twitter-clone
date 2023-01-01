export interface User {
  id: string
  fullName: string
  nickName: string
  image: string
  url: string
}

interface TweetMeta {
  time: string
  answers: string
  retweets: string
  likes: string
}

export interface Tweet {
  id: string
  user: User
  body: React.ReactNode
  meta: TweetMeta
  url: string
}

export interface Topic {
  id: string
  country: string
  body: string
  tweets?: string
}
