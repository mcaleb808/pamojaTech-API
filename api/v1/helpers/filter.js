const filter = info => {
  return info.map(item => {
    return { tweet: item.tweet, author: item.username };
  });
};

export default filter;
