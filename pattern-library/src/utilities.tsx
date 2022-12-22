import { faker } from '@faker-js/faker';
import React from 'react';

export function generateTweet() {
  return {
    id: faker.datatype.uuid(),
    user: {
      fullName: faker.name.fullName(),
      nickName: `@${faker.internet.userName()}`,
      image: faker.internet.avatar()
    },
    body: (
      <React.Fragment>
        {faker.lorem.lines().split("\n").map(paragraph => <p>{paragraph}</p>)}
      </React.Fragment>
    ),
    meta: {
      time: `${faker.datatype.number({ min: 0, max: 20 }).toString()}h`,
      answers: faker.datatype.number({ min: 0, max: 100 }).toString(),
      retweets: faker.datatype.number({ min: 0, max: 555 }).toString(),
      likes: faker.datatype.number({ min: 0, max: 999 }).toString()
    }
  };
}

export function generateHotTopic() {
  return {
    id: faker.datatype.uuid(),
    country: faker.address.country(),
    body: faker.random.words(),
    tweets: `${faker.datatype.number({ min: 1, max: 999 })}K`
  };
}