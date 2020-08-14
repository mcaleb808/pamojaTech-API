import { Router } from 'express';
import TwitterInfoController from '../controllers/twitterInfo';
import async from '../middleware/async';

const router = Router();

router.route('/en/covid').get(async(TwitterInfoController.getCovidEnTweets));
router.route('/kr/covid').get(async(TwitterInfoController.getCovidKrTweets));
router.route('/kr/schools').get(async(TwitterInfoController.getSchoolsKrTweets));
router.route('/en/schools').get(async(TwitterInfoController.getSchoolsEnTweets));
router.route('/fr').get(async(TwitterInfoController.getFrenchTweets));

export default router;
