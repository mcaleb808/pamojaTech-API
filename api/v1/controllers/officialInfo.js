import util from '../utils/utils';
import officialData from '../data/officialData';

const source = {
  name: 'Ministry of Education',
  link: 'https://mineduc.gov.rw/index.php?id=166'
};

export default class OfficialInfoController {
  static getSchoolReopening(_req, res) {
    const info = officialData[0].answer;
    util.setSuccess(201, 'Reopening information', { info, source });
    return util.send(res);
  }

  static afterReopeningBasic(_req, res) {
    const info = officialData[1].answer;
    util.setSuccess(201, 'After reopening information', { info, source });
    return util.send(res);
  }

  static afterReopeningBasicHigh(_req, res) {
    const info = officialData[2].answer;
    util.setSuccess(201, 'After reopening information', { info, source });
    return util.send(res);
  }

  static getDisbursementInfo(req, res) {
    const info = officialData[3].answer;
    util.setSuccess(201, 'Disbursement information', {
      info,
      source
    });
    return util.send(res);
  }

  static getAffectedSchoolsInfo(req, res) {
    const info = officialData[4].answer;
    util.setSuccess(201, 'Affected schools information', {
      info,
      source
    });
    return util.send(res);
  }

  static getInternationalSchoolsInfo(req, res) {
    const info = officialData[5].answer;
    util.setSuccess(201, 'International schools information', {
      info,
      source
    });
    return util.send(res);
  }

  static getSchoolFeesInfo(req, res) {
    const info = officialData[6].answer;
    util.setSuccess(201, 'Schools fees information', {
      info,
      source
    });
    return util.send(res);
  }

  static getFeesRefundInfo(req, res) {
    const info = officialData[7].answer;
    util.setSuccess(201, 'Refunds information', {
      info,
      source
    });
    return util.send(res);
  }

  static getGovRecommendationsInfo(req, res) {
    const info = officialData[8].answer;
    util.setSuccess(201, 'Government recommendations', {
      info,
      source
    });
    return util.send(res);
  }
}
