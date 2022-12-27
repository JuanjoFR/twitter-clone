export interface User {
  id: string
  fullName: string
  nickName: string
  image: string
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
}

export interface Topic {
  id: string
  country: string
  body: string
  tweets?: string
}
