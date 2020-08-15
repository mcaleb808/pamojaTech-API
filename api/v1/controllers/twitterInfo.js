import util from '../utils/utils';
import tweets from '../data/tweets';
import filter from '../helpers/filter';

export default class TwitterInfoController {
  static getAllTweets(_req, res) {
    util.setSuccess(201, 'All tweets', tweets);
    return util.send(res);
  }

  static getCovidEnTweets(_req, res) {
    const info = tweets.filter(obj => obj.tweet.includes('COVID') && obj.language === 'en');

    util.setSuccess(201, 'Covid-19 tweets', filter(info));
    return util.send(res);
  }

  static getCovidKrTweets(_req, res) {
    const info = tweets.filter(obj => obj.tweet.includes('COVID') && obj.language === 'kr');

    util.setSuccess(201, 'Tweets za Covid-19', filter(info));
    return util.send(res);
  }

  static getSchoolsKrTweets(_req, res) {
    const info = tweets.filter(obj => obj.tweet.includes('Amashuri') && obj.language === 'kr');

    util.setSuccess(201, 'Tweets zivuga ku mashuri', filter(info));
    return util.send(res);
  }

  static getSchoolsEnTweets(_req, res) {
    const info = tweets.filter(obj => obj.tweet.includes('schools') && obj.language === 'en');

    util.setSuccess(201, 'Tweets about schools', filter(info));
    return util.send(res);
  }

  static getFrenchTweets(_req, res) {
    const info = tweets.filter(obj => obj.language === 'fr');

    util.setSuccess(201, 'Tweets in french', filter(info));
    return util.send(res);
  }
}
