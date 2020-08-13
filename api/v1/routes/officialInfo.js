import { Router } from 'express';
import OfficialInfo from '../controllers/officialInfo';
import async from '../middleware/async';

const router = Router();

router.route('/reopen').get(async(OfficialInfo.getSchoolReopening));
router.route('/afterReopen/basicEducation').get(async(OfficialInfo.afterReopeningBasic));
router.route('/afterReopen/highEducation').get(async(OfficialInfo.afterReopeningBasicHigh));
router.route('/disbursements').get(async(OfficialInfo.getDisbursementInfo));
router.route('/affected/national').get(async(OfficialInfo.getAffectedSchoolsInfo));
router.route('/affected/international').get(async(OfficialInfo.getInternationalSchoolsInfo));
router.route('/fees').get(async(OfficialInfo.getSchoolFeesInfo));
router.route('/fees/refund').get(async(OfficialInfo.getFeesRefundInfo));
router.route('/gov/recommendations').get(async(OfficialInfo.getGovRecommendationsInfo));

export default router;
