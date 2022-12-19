interface User {
  fullName: String
  nickName: String
  image: string
}

interface TweetMeta {
  time: String
  answers: String
  retweets: String
  likes: String
}

export interface Tweet {
  id: string
  user: User
  body: React.ReactNode;
  meta: TweetMeta
}