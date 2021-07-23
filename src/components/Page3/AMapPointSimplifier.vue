<!--AMap.UI 组件库 PointSimplifier-->
<!--AMap.UI 组件库组件库的 PointSimplifier 类可以支持百万数量级别的点标记绘制-->
<template>
  <div class="inner-box">
    <div id="test"></div>
  </div>
</template>

<script>
import { lazyAMapApiLoaderInstance } from 'vue-amap'
export default {
  // name: 'AMapPointSimplifier',
  // mixins: [],
  components: {},
  props: {},
  data() {
    return {
      map: null,
      center: [116.403995, 39.915111],
      pointSimplifierIns: null,
      infoWindow: null
      // siteList: [
      //   {
      //     id: '0050f562a9344838a038dafd8bafa3bf',
      //     lon: '114.46901',
      //     lat: '35.58157',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '0063875e71dd43a9b910d13a212f4b5f',
      //     lon: '114.62965',
      //     lat: '35.90443',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '00671666c282455dbbd115fd24423d57',
      //     lon: '114.18961',
      //     lat: '35.50924',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '00e4a839dede4c5fb39152135c8376cd',
      //     lon: '113.55338',
      //     lat: '34.64996',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '00ebbaed728b4a2bade0467e21deb75f',
      //     lon: '113.69753',
      //     lat: '34.88998',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '0125620a420042b488329fa3d748399f',
      //     lon: '114.21830893',
      //     lat: '35.61347943',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '016f5433624d4d119f8066a7bf870436',
      //     lon: '114.17915',
      //     lat: '35.89877',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '0192691e462a4b19990fa117d113a4e4',
      //     lon: '113.77521',
      //     lat: '35.40809',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '01ce2bfbc4784078a1a5cc0372d2c7ce',
      //     lon: '114.32731',
      //     lat: '36.09856',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '01e608e095d741d3bac365c26101f198',
      //     lon: '114.285133',
      //     lat: '35.722516',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '01eed204a8bb402abeae25d426f7cf1e',
      //     lon: '114.26103',
      //     lat: '35.723187',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '01f584719a4f4f139a9400c3b1f853aa',
      //     lon: '113.691866',
      //     lat: '34.684234',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '0224a9dec02a4ff8881f66904637538f',
      //     lon: '113.88812',
      //     lat: '35.44565',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '028e87898715488985459f0bec7df918',
      //     lon: '113.27195',
      //     lat: '35.22327',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '02ed8df9568e44868245709459ef376f',
      //     lon: '114.592242',
      //     lat: '35.864635',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '039af34da3b74b8a8067ba805c3e7ae0',
      //     lon: '113.86425',
      //     lat: '35.49378',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '039e3587ac5941069cd7806eb8f1f265',
      //     lon: '113.73303',
      //     lat: '35.38682',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '03c4eb18d3de4805adc8caecfc64345d',
      //     lon: '113.688611',
      //     lat: '34.780833',
      //     reason: '1',
      //     siteType: '5G'
      //   },
      //   {
      //     id: '03d022768d1d4473830700eab792c16f',
      //     lon: '113.89229',
      //     lat: '35.23928',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '0408e5d513d841dd9579cbdc0854c751',
      //     lon: '113.19899',
      //     lat: '34.60515',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '042bd5aa31e044aea66a4a8ce6deb1ab',
      //     lon: '113.75849',
      //     lat: '35.48701',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '04938eda5b1241c1b8933a8cec925f3f',
      //     lon: '113.91222',
      //     lat: '35.26398',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '04995a079b4645229b70ce7894c35949',
      //     lon: '114.326424',
      //     lat: '35.554249',
      //     reason: '2',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '0596fb988002488082ce5ffb1b93c066',
      //     lon: '113.916388',
      //     lat: '35.277777',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '05c2336b4fdd41f38ad5e0a3c0608329',
      //     lon: '114.26381',
      //     lat: '35.65381',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '05e6d25ee6bc43e3a676c11088d0415e',
      //     lon: '114.24253464',
      //     lat: '35.52766851',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '0608a94dcd3244eca442f4c2d3096337',
      //     lon: '113.77521',
      //     lat: '35.40809',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '063da43454e94f03a25e34813c57835d',
      //     lon: '113.86389',
      //     lat: '35.29861',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '073f2a2d2cd74985bf8f552b425a2ce5',
      //     lon: '114.242165',
      //     lat: '35.563563',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '07489537d30949139e434589b8353866',
      //     lon: '113.50802',
      //     lat: '35.38997',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '07635492a1e14944a38dc150115ed31c',
      //     lon: '113.65598',
      //     lat: '34.90072',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '077114611ff24e5281f7e5d7b025907a',
      //     lon: '113.25710297',
      //     lat: '34.74489975',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '078e3f6defcd4c39b4d36808e400f4b6',
      //     lon: '114.284396',
      //     lat: '35.932529',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '07b328b351d7432b9fbea3f7b0b694b5',
      //     lon: '114.15515363',
      //     lat: '35.94719562',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '081d70cec24742d3a4aaaacdec8df166',
      //     lon: '114.349512',
      //     lat: '36.117531',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '0828d1a2152948098fca0d819a860847',
      //     lon: '114.17674005',
      //     lat: '35.89708534',
      //     reason: '2',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '0862c95670574d33b50ff24f7e0f3e5a',
      //     lon: '113.78807',
      //     lat: '35.42795',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '089ff97b5e2748239395364dde3ebb7b',
      //     lon: '113.76351',
      //     lat: '35.49483',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '08fcb72618704580b5823d384eb673e6',
      //     lon: '114.296666',
      //     lat: '36.104166',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '0972c0cbd36f47879706b3c5f84d3ffd',
      //     lon: '113.69171',
      //     lat: '34.60146',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '098aa6f1dd9f4b1d91d6c61f85d043a6',
      //     lon: '113.25209',
      //     lat: '35.25209',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '0999662085b0419796704c10e817b42d',
      //     lon: '113.52387',
      //     lat: '35.30806',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '09ae85d5a45245a3bcc22544db70b94d',
      //     lon: '114.32573',
      //     lat: '35.46355',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '09cd6e6cefdb4092b3dbf72fa16d1a0e',
      //     lon: '113.86331',
      //     lat: '35.30731',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '09f052bfeef142c6803ce0e8ebe0b4f8',
      //     lon: '114.26972',
      //     lat: '35.51638',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '0a01632a1e694255a1152f10db43951c',
      //     lon: '113.49085',
      //     lat: '34.40216',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '0a4c8b66b59d43018785eaceaf8a9c62',
      //     lon: '113.77426',
      //     lat: '35.45964',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '0af825101eb8476592feb2e3950f4306',
      //     lon: '114.22685',
      //     lat: '35.51051',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '0afdafe9d4024c9f83a85aac1da32da9',
      //     lon: '114.104949',
      //     lat: '35.591819',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '0b76c62d9a4943b198ee18e30bd8197c',
      //     lon: '114.285133',
      //     lat: '35.722516',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '0b7996ddbff5477a89092ae74d948640',
      //     lon: '113.75535',
      //     lat: '35.40531',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '0bb7a3205182421da9bd479ede5e4fd0',
      //     lon: '114.38388',
      //     lat: '35.53527',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '0bcb6a10fe0c46a4a7dd9088ba3df586',
      //     lon: '113.90095',
      //     lat: '35.79256',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '0c1c2905427c4672ade50aa4d9ac17d2',
      //     lon: '112.955925',
      //     lat: '34.526739',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '0c4088277073400393007f041ee090f9',
      //     lon: '113.70454',
      //     lat: '35.50591',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '0c41dfd6dcb84aab8c098e4d3e0f0dcb',
      //     lon: '114.07389',
      //     lat: '35.38993',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '0c933f36c746438e968985a688e4c336',
      //     lon: '113.46119',
      //     lat: '34.50595',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '0cb932864b9a4bc2bbd44a61b8a1e339',
      //     lon: '114.54249',
      //     lat: '35.88395',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '0cc9f1661bc748029c50596210a837a5',
      //     lon: '113.24473',
      //     lat: '35.26261',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '0cdf45d5dea2497ca73f30130439df87',
      //     lon: '113.80587',
      //     lat: '35.203156',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '0ce7c1bff77d4e10aa333cc478c95b7c',
      //     lon: '113.71194',
      //     lat: '35.40528',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '0d026078e9ad451a926261724b821104',
      //     lon: '113.54381',
      //     lat: '34.91087',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '0de3c93a9fcc44c6849df1cc28000f08',
      //     lon: '114.089554',
      //     lat: '35.539687',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '0e0169b2dd0443d18adcf5c1b47dd955',
      //     lon: '113.65952',
      //     lat: '34.66302',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '0e0bf2b869bf4735b3f50ce4858ddd71',
      //     lon: '114.07357',
      //     lat: '35.6031',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '0e31b564a10e41dabdb0c70af35100fc',
      //     lon: '114.222307',
      //     lat: '36.004329',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '0e3ff48a9c39469db6b0b56346e3262f',
      //     lon: '113.75535',
      //     lat: '35.40531',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '0e5593ac0f3c47cdbd895b6a801791e0',
      //     lon: '114.191096',
      //     lat: '35.517089',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '0e7cab094e7f43de9f92f88d7ebe5c82',
      //     lon: '113.85562',
      //     lat: '35.29803',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '0e7f910cda514761ba5b8a59f87b9df2',
      //     lon: '114.28222',
      //     lat: '35.76638',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '0f52eab057cc4be581b3742457609fbe',
      //     lon: '113.97804',
      //     lat: '35.30451',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '0f5497ea6960435e94648cf9ed140774',
      //     lon: '113.86247',
      //     lat: '35.30079',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '0f7ee0228c15445284bf753cd66ac23f',
      //     lon: '114.30799',
      //     lat: '35.772514',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '0fa5463aa14045a7bbfcf8d1f0a9fc49',
      //     lon: '114.29722',
      //     lat: '35.50694',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '0ffb940f95d84b1591525b2e4ae2b7dd',
      //     lon: '114.22755',
      //     lat: '35.66179',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '1037542ef8274f95a0e79f2d465069a5',
      //     lon: '114.30525',
      //     lat: '36.08227',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '10d07f069f54415aa027b9425fcc77b9',
      //     lon: '114.31681',
      //     lat: '35.50221',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '10d4486e55804c06956846549b0b975e',
      //     lon: '114.369644',
      //     lat: '36.164085',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '112bd4ef65e0434c8b069aa665c0f8d6',
      //     lon: '114.59095',
      //     lat: '36.09581',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '118909edfa6f4c16a4b97d4529f7446f',
      //     lon: '114.06664',
      //     lat: '35.37781',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '11a162797f03425c9b1cc79f1cb14e55',
      //     lon: '114.07812',
      //     lat: '36.06926',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '11b829697a804aa98217d873d6b3e2e8',
      //     lon: '113.79702',
      //     lat: '35.46442',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '11cde7a9062044c993a1e7a6d177a546',
      //     lon: '113.51703',
      //     lat: '34.69833',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '11e17b7e83cb4bf8a933f322c2426999',
      //     lon: '114.29418',
      //     lat: '36.08539',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '12007fcde0d74836b1b1e65a4ead5adf',
      //     lon: '113.76201',
      //     lat: '35.47309',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '12316db59ce94cfca5f52a8c4af6e1ee',
      //     lon: '114.222572',
      //     lat: '35.831593',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '12ae8d7b67ac44bea0ef4c0e53ccff89',
      //     lon: '113.54055',
      //     lat: '34.50126',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '1320e18cc71b4c89bdce3ee8c32be3fa',
      //     lon: '113.81501',
      //     lat: '35.45861',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '13a5fe6197974b85bbc487fa9667d356',
      //     lon: '113.36913118',
      //     lat: '35.24669877',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '13ab899625f74f099a3c29610c550717',
      //     lon: '113.65501',
      //     lat: '34.82001',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '13b14bc004f8462e8c018bb59f412cf1',
      //     lon: '113.768055',
      //     lat: '35.38501',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '13b58cf479c240e584b63906fe391c77',
      //     lon: '114.17883',
      //     lat: '35.57396',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '13cd988d803440f6832f7dfd408d5f89',
      //     lon: '113.535204',
      //     lat: '34.794858',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '13cfe507ce364e23aa9727a63b2f4125',
      //     lon: '114.28222',
      //     lat: '35.76638',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '140c41f8c19744f69f5ad2acb6606f4c',
      //     lon: '113.81012',
      //     lat: '35.38144',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '14818d8c68264b16932cf22559d0b053',
      //     lon: '113.65747',
      //     lat: '34.89771',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '148705f3bb264418a534d67093d6556e',
      //     lon: '113.63741',
      //     lat: '34.54197',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '14c7fa9bca394ce59ef408459c7aaaf3',
      //     lon: '114.61147785',
      //     lat: '33.53797863',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '14d776ba537e44998b800fa63c40d6ae',
      //     lon: '114.62151',
      //     lat: '35.98068',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '14eb6cc9e3ab46abbe13f895896829a0',
      //     lon: '113.90415',
      //     lat: '35.26391',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '1536990a7c4a4cc4bc6077a0f72fbfbc',
      //     lon: '113.324778',
      //     lat: '35.221313',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '1545d8fd3a424b17bcfb00d89c285d2e',
      //     lon: '113.91704',
      //     lat: '35.26291',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '155120961dfd448182693d1b6895f69d',
      //     lon: '113.84731',
      //     lat: '35.37891',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '1568baf660ff45409fe2b1b7d5e91ecd',
      //     lon: '114.433802',
      //     lat: '35.592974',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '15709ba0b93c47d08fee45ed29ae8080',
      //     lon: '114.101499',
      //     lat: '35.57491117',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '157607b06a4947ebb00e378f3be789e9',
      //     lon: '113.60189',
      //     lat: '35.35976',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '15b4dab917d64cbd83dae972734a3fb8',
      //     lon: '114.055927',
      //     lat: '35.538415',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '161e5c307eb04562ba987aad1ebb481e',
      //     lon: '113.89688',
      //     lat: '35.27601',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '1635fce8b8514146a24a5306b2f595ac',
      //     lon: '114.335381',
      //     lat: '36.083103',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '167a929daad645c2a89ff0234a442c1e',
      //     lon: '114.28222',
      //     lat: '35.76638',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '16806ba19ece45a987a0af1bfaefa81f',
      //     lon: '114.29909706',
      //     lat: '35.99349376',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '16d5fb5672b14d3dae53ae1373e8e7f0',
      //     lon: '114.200201',
      //     lat: '35.60729',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '16e19d6582044286b792369795f6ef17',
      //     lon: '113.40972',
      //     lat: '34.59151',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '1713c40464b246d1ba1f49b3f23069f7',
      //     lon: '114.113051',
      //     lat: '35.62055',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '17370ebec4904b80a3a7e67b47f8dfa6',
      //     lon: '113.54547',
      //     lat: '34.85418',
      //     reason: '3',
      //     siteType: '5G'
      //   },
      //   {
      //     id: '173a0ee9a01d43ca9520ab1722dbfcf7',
      //     lon: '114.117171',
      //     lat: '35.838418',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '178441d4818f4a6bb69191b4a87ddba1',
      //     lon: '114.325833',
      //     lat: '35.798888',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '1784d64cc0ee4ccc9db613a5ccf83a19',
      //     lon: '114.59095',
      //     lat: '36.09581',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '17a28151aa384a6680c73914d9c0cc0f',
      //     lon: '113.91089',
      //     lat: '35.27905',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '17e82bf00a2c4a10bc281c4274244671',
      //     lon: '114.22805',
      //     lat: '35.88388',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '18041bfafe204eacac8bb46533cea377',
      //     lon: '114.13468',
      //     lat: '36.06441',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '183a58267b56435f91f45339f648eb5d',
      //     lon: '113.50544',
      //     lat: '34.73307',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '1879a43217ff474bbd517fd2572284fb',
      //     lon: '114.482697',
      //     lat: '36.145832',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '1889665b06ab40e0a7f6d3a2b66c172d',
      //     lon: '114.35804',
      //     lat: '36.00038',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '18c93492019f4429ad411437bf6e2684',
      //     lon: '114.057999',
      //     lat: '35.389793',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '18cc379c0e0c4999be039d5083c146e9',
      //     lon: '113.86829',
      //     lat: '35.45559',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '18e346be46c543b299c7bed113550c7a',
      //     lon: '113.52479',
      //     lat: '34.83325',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '18f98c6f794f40bfb3fead631477379c',
      //     lon: '114.01614',
      //     lat: '35.34957',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '191507794c52423599d3e3e9b51d16df',
      //     lon: '114.186452',
      //     lat: '35.897244',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '19338860564844e7a2a574dcb1bb92b2',
      //     lon: '114.182569',
      //     lat: '35.624247',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '1968295b242943aeb4cbc86b052fe70c',
      //     lon: '113.87152',
      //     lat: '35.31974',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '19c0459e4f1b4ef7bc687f53b8ab5a1a',
      //     lon: '113.39221565',
      //     lat: '35.18417029',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '19e5566da25741f38548a8b4ff6c01ec',
      //     lon: '113.88889',
      //     lat: '35.33389',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '1a43c469a6064345bab03bb8b0799429',
      //     lon: '114.188328',
      //     lat: '35.834841',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '1a762d3d9c62492c922706697dc5dbb2',
      //     lon: '113.53649703',
      //     lat: '35.13203164',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '1a85b2a16c3b4da79459e9e25e04f512',
      //     lon: '114.1269836',
      //     lat: '35.89930725',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '1aaa1f5e01014fa58e0d0a03d2b3f7d9',
      //     lon: '114.208414',
      //     lat: '35.849587',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '1b45bbc57ac54e9cbc62afed56397550',
      //     lon: '114.2405167',
      //     lat: '35.69681549',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '1b5db5add1e44d2abacb17f7a194d94f',
      //     lon: '113.00047',
      //     lat: '34.52802',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '1b6f403f14e74c2b84fee6bcde103719',
      //     lon: '113.01898',
      //     lat: '34.50126',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '1b85cf1ce8974e479a8d1841eb7d9702',
      //     lon: '113.61727142',
      //     lat: '34.6999588',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '1b99913c9a624e859a98f348b861e452',
      //     lon: '114.08265',
      //     lat: '35.39825',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '1c7f2bdad79841dc9c9a145ee7f2b7eb',
      //     lon: '113.688323',
      //     lat: '34.775833',
      //     reason: '2',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '1c87f053f7a2499c8d6832cb24901d3f',
      //     lon: '113.85854',
      //     lat: '34.56475',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '1c891751152748adbf57d18fd098fa67',
      //     lon: '113.066944',
      //     lat: '34.667222',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '1d176ad8ed8b4b32b32ba8320bb97e1d',
      //     lon: '114.15454745',
      //     lat: '35.91559318',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '1d583ce4473847698e299d23da656d19',
      //     lon: '113.99705',
      //     lat: '35.30231',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '1d870f3e981549c38edf276ef69f8838',
      //     lon: '114.18209',
      //     lat: '35.61711',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '1da6042ef7e545248e3a26ff28572969',
      //     lon: '113.24989',
      //     lat: '35.25662',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '1e2a0e56351c4af89fd4c40852fd4d0d',
      //     lon: '113.76201',
      //     lat: '35.47309',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '1e33283667e94f11b9890f0c3aa8268e',
      //     lon: '114.20306057',
      //     lat: '35.61062723',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '1e4afa32cd4c4671a7153cafe2cba8e3',
      //     lon: '113.87746',
      //     lat: '35.28248',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '1e8e270ef56a4c1eb9aac96bebb43a29',
      //     lon: '114.21755',
      //     lat: '35.62753',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '1eb0be1d80fc4c768593dbb55146406c',
      //     lon: '114.17649865',
      //     lat: '35.85963087',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '1eb209e3d4724986ace3316b2f0f92d5',
      //     lon: '114.37958',
      //     lat: '36.11953',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '1ee28696144341b7ab3122ffdd19cc8e',
      //     lon: '114.06521',
      //     lat: '35.38798',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '1f40752f68404b1dab1e4d190333ef2f',
      //     lon: '113.65536',
      //     lat: '35.42707',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '1fb74583a67a444982c550a686d96c31',
      //     lon: '114.22631',
      //     lat: '35.59811',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '203ede16e1eb4a1b92b1d147dfb9912e',
      //     lon: '114.45949',
      //     lat: '34.08261',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '20489f4dd20d48fc9bccabeb8f721f09',
      //     lon: '113.86701',
      //     lat: '35.32251',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '20b47521815b478aacf10862fd33f951',
      //     lon: '113.15168',
      //     lat: '34.56548',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '20e9c389cdee456b9dd000421dfe9ec2',
      //     lon: '114.2836914',
      //     lat: '35.78250122',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '2105a804516d4169a6956a4d92a46dea',
      //     lon: '113.58696548',
      //     lat: '34.65740013',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '215b6ebc240c4deca8549355e569aaa8',
      //     lon: '113.27377',
      //     lat: '34.62446',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '21e24ebf9ebb4c08a9de17dac996ced1',
      //     lon: '114.27565',
      //     lat: '36.21453',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '21f66fd4e0bb4dea95e2ecc76fbf0e27',
      //     lon: '113.90695',
      //     lat: '35.26167',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '21fdb30492294332b8ebe42f9e68a1eb',
      //     lon: '113.92941',
      //     lat: '35.29499',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '223a50fc6f4543e6855bbd5f70a952eb',
      //     lon: '114.36617',
      //     lat: '36.11425',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '2270661a4f244e649e87066e334227f4',
      //     lon: '114.27666',
      //     lat: '35.71361',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '228a132a263744af95f6d69d1a3aa7da',
      //     lon: '113.865489',
      //     lat: '35.311263',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '22a3722f48034c01991c344224417586',
      //     lon: '113.91501',
      //     lat: '35.27441',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '22a8e7f6f9624e3ca69164feaecae087',
      //     lon: '114.2112001',
      //     lat: '35.499513',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '23580787bd4042dcb77c59b78d28ec9f',
      //     lon: '113.67571',
      //     lat: '34.75911',
      //     reason: '1',
      //     siteType: '5G'
      //   },
      //   {
      //     id: '2368b188a47749ecb832d5fb6f45e6de',
      //     lon: '113.72155',
      //     lat: '36.27591',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '2370c66c7b3b48729208a1b59cc7da94',
      //     lon: '114.34764',
      //     lat: '36.11532',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '23b3ea5094aa46f5b52a3fc7ddd330de',
      //     lon: '114.24253464',
      //     lat: '35.52766851',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '23bab7aef18e4c839185aa298eeb6b44',
      //     lon: '114.26972',
      //     lat: '35.51638',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '2404aa899de2403e9d226f536cab1b16',
      //     lon: '113.65857',
      //     lat: '34.78947',
      //     reason: '1',
      //     siteType: '5G'
      //   },
      //   {
      //     id: '24098feff49f4f868903c860afa48fab',
      //     lon: '113.58063',
      //     lat: '34.70944',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '241638e2439b4e3f884c94df340b5ad0',
      //     lon: '114.05345',
      //     lat: '36.08205',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '24215f75c62e48b2af004e4d8ee87c70',
      //     lon: '113.86247',
      //     lat: '35.30079',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '2475981dddec4cc7b207b9bd67e2e493',
      //     lon: '113.70726',
      //     lat: '36.17757',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '24e663f512224595981e35ccfddd0bcb',
      //     lon: '113.87257',
      //     lat: '35.31761',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '25afe1fb11484313a9aa096d7b8e064b',
      //     lon: '114.179138',
      //     lat: '35.89752',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '261db55bd93849b19f6150beb132c53e',
      //     lon: '114.195891',
      //     lat: '35.952893',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '26688ba4614b44f49613d37e4703b2ff',
      //     lon: '114.24028',
      //     lat: '36.15944',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '268a31668be949f5afd5e14bae2e187a',
      //     lon: '114.211666',
      //     lat: '35.881251',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '27226a6ba74948d1a9deb4fca9c06382',
      //     lon: '114.104949',
      //     lat: '35.591819',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '275a0bdca71a4596b91f7664b0f22af3',
      //     lon: '113.48462',
      //     lat: '35.39456',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '27afcb8e69fe4c9097a29d7dbf088c67',
      //     lon: '114.30842',
      //     lat: '35.56618',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '27bf16f78f974adc8f535c43568638c4',
      //     lon: '112.93841',
      //     lat: '34.50344',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '27e8391129f64187a8d95539b1b65b19',
      //     lon: '113.76496',
      //     lat: '35.43892',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '27fddaa74aa1432992fe9bc3be2b4eb0',
      //     lon: '113.40721',
      //     lat: '34.57499',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '2835705f8d3545b5a000cdd4a827799b',
      //     lon: '113.73305',
      //     lat: '35.48911',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '28d4fa9c81f242a2a6b37f3a535dfdd1',
      //     lon: '114.21043',
      //     lat: '36.10945',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '28fa36d79da444059ce2afc112ad0152',
      //     lon: '114.28222',
      //     lat: '35.76638',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '29082b1840e243c9acebf7ddcd4089f0',
      //     lon: '114.55326',
      //     lat: '35.70972',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '2913aa809c314268a39076d19e76447f',
      //     lon: '114.1507709',
      //     lat: '35.9237533',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '297105656a2a4d7997c146bb0d516eb4',
      //     lon: '114.41875',
      //     lat: '35.57246',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '29d58f7600eb474fbdd82a038bd02588',
      //     lon: '113.91089',
      //     lat: '35.27905',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '2a02f74c0e1a4edf9857fafeea61d7d7',
      //     lon: '114.13775',
      //     lat: '35.92222',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '2a172840c2714b66850887aab664ab6b',
      //     lon: '113.36121',
      //     lat: '34.58479',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '2a41841be6ed4c678b75051a0468ea36',
      //     lon: '113.673624',
      //     lat: '35.337929',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '2a5e4d8c47e24b2fa0c53b21967cfb3d',
      //     lon: '113.86201',
      //     lat: '35.30811',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '2a67b5b81fad45dc9b4051a3d98a9a7b',
      //     lon: '114.28222',
      //     lat: '35.76638',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '2c11f13f0d2446569d2a2dfe07d62f4d',
      //     lon: '113.27264',
      //     lat: '35.23198',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '2c1700c412844b67ac216f4bf0fba208',
      //     lon: '113.28413',
      //     lat: '34.59165',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '2c7b1728da76495da040bbe324a86462',
      //     lon: '113.73525',
      //     lat: '35.39482',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '2c97a64f38c945efaa21ec8ee10d63e2',
      //     lon: '114.3299',
      //     lat: '35.90051',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '2cb380a073b140d9a4df43a51b48a94e',
      //     lon: '114.21807853',
      //     lat: '35.67436601',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '2cb39231f0094da697bd0d58213d22b7',
      //     lon: '114.06521',
      //     lat: '35.38798',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '2cd6fd3066c0425c9504e05ecbe305b8',
      //     lon: '114.14176941',
      //     lat: '36.01244975',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '2d106a106a2b4d79851dd5a59af03005',
      //     lon: '113.60762',
      //     lat: '34.69211',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '2d89d8f75216452b9b9aedf5bf345cd9',
      //     lon: '114.14845',
      //     lat: '35.90225',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '2d95009d0cd74e55a29842eec071f770',
      //     lon: '114.241829',
      //     lat: '35.887429',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '2dabfcbeea3b46ee8c8fb1a64276fecc',
      //     lon: '113.23629',
      //     lat: '35.19827',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '2dd5c9560f2246c799a53f873acb60a1',
      //     lon: '114.101499',
      //     lat: '35.57491117',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '2ddc90dedff44b339dd7a8c37035664b',
      //     lon: '113.650501',
      //     lat: '34.734013',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '2dec6e705d5c4242a35314b3b16cf402',
      //     lon: '113.632401',
      //     lat: '34.771666',
      //     reason: '2',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '2e5462c10e27474cbd7260910a21adb5',
      //     lon: '113.91302',
      //     lat: '35.28228',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '2e5b9bb4d5a8495f9f74259602eeebc8',
      //     lon: '114.20138',
      //     lat: '35.83944',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '2e69c0b487584d37bec60656d0677b03',
      //     lon: '114.15608',
      //     lat: '35.90606',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '2e98432895084b2fa1ca1c8e68e80558',
      //     lon: '114.18521',
      //     lat: '35.86333',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '2ef9a6d391cf4687ad4a3159066bf8cf',
      //     lon: '113.86313',
      //     lat: '35.31054',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '2efc24b9522d4b819eefef431776595a',
      //     lon: '114.247101',
      //     lat: '35.95887',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '2f015a92af374df88cbae73dbb932f77',
      //     lon: '114.326424',
      //     lat: '35.554249',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '2f099f604b734dd38b8d9165be4a44c0',
      //     lon: '113.99705',
      //     lat: '35.30231',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '2f6a3582af324011995008e067f8a534',
      //     lon: '114.28005',
      //     lat: '35.47351',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '2f8de8ebc3b640a7bd0d4091981104e7',
      //     lon: '114.31681',
      //     lat: '35.50221',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '2fcef44420ec4aa6a12897d980ccbd15',
      //     lon: '114.26284',
      //     lat: '35.64702',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '301d1241970540f89637eb6a8576cc6e',
      //     lon: '114.25697',
      //     lat: '35.72083',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '304f578025424c47866fe0a6eb99f3e0',
      //     lon: '114.28222',
      //     lat: '35.76638',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '308304d79423438fac8d445417b974e3',
      //     lon: '113.38784',
      //     lat: '35.21513',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '310a2247bb8843cfb1743285be0792d8',
      //     lon: '113.91302',
      //     lat: '35.28228',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '3128e4ee9f2549e5a8242c2680389e2d',
      //     lon: '113.20327759',
      //     lat: '34.54806519',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '3164f5ffb81b4e2685cad0a641ff4e4b',
      //     lon: '113.50303',
      //     lat: '34.68692',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '31b89b7598aa426a9ca70bf9254db87d',
      //     lon: '114.19648',
      //     lat: '35.61809',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '31cc1eef35a847d09f991aeca74aa41e',
      //     lon: '115.65601',
      //     lat: '34.33681',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '31e4452b151245039a6e1d470e2e091c',
      //     lon: '114.37193781',
      //     lat: '35.52704421',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '321cf66bbc3042b68ebcf340e20b596f',
      //     lon: '113.76841',
      //     lat: '35.48639',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '322f31041a5b43dabd075353ade73ef5',
      //     lon: '114.24969',
      //     lat: '35.61565',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '323f77c928114605b5fc0885089c1f76',
      //     lon: '114.46901',
      //     lat: '35.58157',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '327d48965b384ba18030c1467db81632',
      //     lon: '113.36547',
      //     lat: '35.20757',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '32e2b10807e64a51b03aa4954cb819b0',
      //     lon: '114.235833',
      //     lat: '35.604444',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '33133a2bd0d04d8298ec9ebffb955fb4',
      //     lon: '114.193486',
      //     lat: '35.617322',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '338ebe566417435b8e40267021c898fb',
      //     lon: '114.09632',
      //     lat: '35.94608',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '3394e4bca4f24ed29cee7b1a5c3f5cc4',
      //     lon: '113.87107',
      //     lat: '35.49982',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '33bebae1dedb4d0fb4cce953f1a4758f',
      //     lon: '114.27505',
      //     lat: '35.605725',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '33c33b1491e44b3fa1d7c02330e29e8d',
      //     lon: '113.66796',
      //     lat: '34.861101',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '33ec1cd1878c4b358286d2c7d2646c51',
      //     lon: '114.21603',
      //     lat: '35.53337',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '34170a6b4ff74d72bd59153d484d70e7',
      //     lon: '113.78801311',
      //     lat: '35.3987132',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '344f9b0b9ab8450982db3264cd0e51b4',
      //     lon: '114.296666',
      //     lat: '36.104166',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '345630b71c69462b8e50c1507066483a',
      //     lon: '114.251198',
      //     lat: '35.590045',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '3493141585b546d49c2961c2be975656',
      //     lon: '113.78677',
      //     lat: '35.46032',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '34de5b4c30da4399a1d6c4b3e0c0b652',
      //     lon: '114.607518',
      //     lat: '35.961518',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '34e4d999e93849b2aaed3207932e032c',
      //     lon: '113.58861',
      //     lat: '34.61596',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '358af114a8c243539b8bbc7491cb11a0',
      //     lon: '113.77924',
      //     lat: '35.41632',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '35a2048c6d8c4324b9bb86fc999d2fbd',
      //     lon: '113.62707',
      //     lat: '34.72306',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '35d1fd8d9c9d4c6785377c6d32ba6437',
      //     lon: '113.27261',
      //     lat: '34.60777',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '364b1ebe01fb4c0896e3a5a6eacd0d70',
      //     lon: '114.71206',
      //     lat: '35.05734',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '364ff8b16238424e9168f4818fe6017e',
      //     lon: '113.924444',
      //     lat: '33.54250001',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '3673a3e5e63b43268e8a8237a0e8183e',
      //     lon: '113.74897',
      //     lat: '36.35491',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '36ea8a3916b54e3781246ea4d141a923',
      //     lon: '114.12610531',
      //     lat: '35.55492363',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '3709cf11535f4a4dad75ab495d1bf1c9',
      //     lon: '114.03191667',
      //     lat: '35.77494444',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '373b765408fe489aba610a8b51f62364',
      //     lon: '113.68756',
      //     lat: '35.50301',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '3767bb7694974d1f99b6b9326fa09c22',
      //     lon: '114.43206',
      //     lat: '35.65401',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '377def11f17f438ca005acd9ddece34b',
      //     lon: '113.91222',
      //     lat: '35.26398',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '37957671f6ac43a1b96a0c95834519dd',
      //     lon: '114.12610531',
      //     lat: '35.55492363',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '3796e13b59124700885cf903c54aba6f',
      //     lon: '114.43356046',
      //     lat: '35.63825386',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '37ce92b16da64272b620fc71a53155e5',
      //     lon: '114.38388',
      //     lat: '35.53527',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '37f9b5ace3c84deab878ff972737c34d',
      //     lon: '113.83967',
      //     lat: '35.36691',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '37fe81ad846a4c9bae161eed4b55967e',
      //     lon: '114.31082',
      //     lat: '35.80916',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '37fecd9314af412d8aaee53c0afc7e5a',
      //     lon: '114.19166',
      //     lat: '35.80277',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '381695263fba47f4ac1f912ed159d8b0',
      //     lon: '113.85861',
      //     lat: '35.30861',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '3868eefbffb8438a9f69402d592a5045',
      //     lon: '114.08085',
      //     lat: '35.39845',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '38aa6b420af646beb6787af6edebdee0',
      //     lon: '114.20359',
      //     lat: '35.46859',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '38b769a7d55c4023822ef387522cf37e',
      //     lon: '114.113051',
      //     lat: '35.62055',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '392369dde6664097834143b899e9a173',
      //     lon: '113.53012',
      //     lat: '34.81261',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '39284b2db6da4afe9ac37fc3856410f9',
      //     lon: '113.994231',
      //     lat: '35.464939',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '39358e32978b47f78fd990a28bd5ddda',
      //     lon: '113.614444',
      //     lat: '34.726111',
      //     reason: '3',
      //     siteType: '5G'
      //   },
      //   {
      //     id: '394ab95223f4414db364011c16260552',
      //     lon: '114.02313',
      //     lat: '36.34932',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '39a0bb1caceb4aa59fdf87f8e985c176',
      //     lon: '113.67003',
      //     lat: '34.66083',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '39eaee2145c94d4fad55b102a771f399',
      //     lon: '114.28222',
      //     lat: '35.76638',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '3a2efc009d2046089a6b8fe6bf9588b7',
      //     lon: '113.59723',
      //     lat: '34.67943',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '3ac898de328b4ac4a79a24b67f447769',
      //     lon: '113.94927',
      //     lat: '35.32165',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '3aca424625cd4c1b8e5d7d1b1e95765b',
      //     lon: '114.057497',
      //     lat: '35.405561',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '3ae10cfa96f3488cb8ee56f7577767ee',
      //     lon: '114.105004',
      //     lat: '35.53101',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '3b0ec38a98b74b45bd1134e0c55031f6',
      //     lon: '113.84731',
      //     lat: '35.37891',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '3b33e0576b0d4acc9baade4f58a64447',
      //     lon: '113.58703',
      //     lat: '34.69731',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '3b5907e573d64d76973204eb9e896392',
      //     lon: '113.58919708',
      //     lat: '34.64730337',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '3b616f5c19a9473085f0f9738b9b3cfb',
      //     lon: '114.32940066',
      //     lat: '35.52271323',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '3c14fac349bd4182bab925d4b3a76dbc',
      //     lon: '114.2405167',
      //     lat: '35.69681549',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '3c6456d2efcc43f28ebabf336de66969',
      //     lon: '113.674722',
      //     lat: '34.769722',
      //     reason: '1',
      //     siteType: '5G'
      //   },
      //   {
      //     id: '3c79f42cbe05423a8c2e082cb191d4ab',
      //     lon: '114.16277',
      //     lat: '35.60611',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '3c7ae1fca12048cf889609d89de6f62e',
      //     lon: '114.18101',
      //     lat: '35.91041',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '3c7d2ae2c4914cb0b241d9a2cf993f14',
      //     lon: '113.23305',
      //     lat: '34.57121',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '3c7f38a7d4364f27931b4674eccb3e81',
      //     lon: '114.191262',
      //     lat: '35.460424',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '3c8bff2715274cbfb1bad141e7ccaae4',
      //     lon: '113.88933',
      //     lat: '35.58093',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '3cb0336fc9c74825a9b2dff38c966c57',
      //     lon: '114.195714',
      //     lat: '35.90352962',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '3d5a6972c6014fae878b7efe47b17148',
      //     lon: '113.23934',
      //     lat: '35.18792',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '3db3af8bf91248afa9062f0557fd9a6c',
      //     lon: '113.47961',
      //     lat: '34.39991',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '3dc62be6eebb490f9193502b6127c935',
      //     lon: '114.17751',
      //     lat: '35.61083',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '3de2e720d2984f14814beb82c1261746',
      //     lon: '113.91302',
      //     lat: '35.28228',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '3dfe76559fad4a1dad9a5e99ec832d20',
      //     lon: '113.84456',
      //     lat: '35.32175',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '3e3209d9bcd44058b0786b71e354d790',
      //     lon: '114.14237',
      //     lat: '35.824022',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '3e5230efecc64349be99c460b17b1743',
      //     lon: '114.004833',
      //     lat: '35.452973',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '3e944e411ad840b1b40af510302c162c',
      //     lon: '114.35916',
      //     lat: '36.09831',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '3eb4ae45c94e4f8fad588daeeb1ad5cf',
      //     lon: '113.65386',
      //     lat: '35.36632',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '3ec58fcd67fa46f98514e44efb5ba51a',
      //     lon: '113.28315',
      //     lat: '34.60716',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '3ef3ec98ea1e41c58c118dbb7b55e6b9',
      //     lon: '114.2113001',
      //     lat: '35.47682',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '3efeafc8ca0d49638468d05f9d720697',
      //     lon: '114.092943',
      //     lat: '35.390024',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '3f299bdca01141ffb2443ca8133ec298',
      //     lon: '114.20467',
      //     lat: '35.710511',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '3fb38baa8af84ef183f5f561e7ed5bfe',
      //     lon: '113.58126173',
      //     lat: '35.02963515',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '3fc06e696bfd41df973fbf3b92b96e5e',
      //     lon: '114.19864',
      //     lat: '35.50333',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '3fd9539765bf447f8d982b0d018b82d1',
      //     lon: '113.92325',
      //     lat: '35.28855',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '3fe5621c8ecc4974bac673e2ce2c74c5',
      //     lon: '113.26392',
      //     lat: '35.235907',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '3fe9b8873f2c44a786b0bda27d33d627',
      //     lon: '113.92388',
      //     lat: '35.385111',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '3ffb0b8a2c774a5382a7ef959c2a6bb5',
      //     lon: '113.31278',
      //     lat: '34.55523',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '400aaa8c70e54681a9a1eae973ed0c7b',
      //     lon: '114.241829',
      //     lat: '35.887429',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '40229221d1bf4798afce3e21b3619a30',
      //     lon: '113.40691',
      //     lat: '35.10521',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '403bb59ce892423d9ea34aedc18fbe44',
      //     lon: '113.50512',
      //     lat: '34.68824',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '4041cb4ea33b4e8d822b5ba0425ec6c2',
      //     lon: '114.19502735',
      //     lat: '35.5431567',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '4056ef85a12d4d5da29cc957505db718',
      //     lon: '113.98051',
      //     lat: '35.29061',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '40b38a670ff247e48caf6e081be071f2',
      //     lon: '113.52501',
      //     lat: '34.826111',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '40dd33cf8c804ccf9e33d46af71aaa9f',
      //     lon: '114.25897',
      //     lat: '35.73718',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '40fcf5b168f54dad9ad6a7f98860cc06',
      //     lon: '114.08071',
      //     lat: '35.45697',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '41228b32de034cdaaa73c8c5d7545b13',
      //     lon: '114.20178',
      //     lat: '36.08056',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '413255bfaca844c1ae81a370e8c62181',
      //     lon: '114.257132',
      //     lat: '35.730643',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '413510ff544642e2943663644f8f6edf',
      //     lon: '114.248877',
      //     lat: '35.62705',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '41b8060dff8e4093a943640c329cac30',
      //     lon: '114.21830893',
      //     lat: '35.61347943',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '41ca10f7d92543f78340efc7020da604',
      //     lon: '114.20306057',
      //     lat: '35.61062723',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '42b46d6ef4c546c3b67844f0f350735e',
      //     lon: '113.86006',
      //     lat: '35.43781',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '42d97762ba784bc7a2731f0867839aa5',
      //     lon: '114.1380626',
      //     lat: '35.58417634',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '42e05676d24842e7959e7ba9e58780eb',
      //     lon: '113.87382',
      //     lat: '35.31914',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '4313eeed9bc4494fb6b7d9388ed90858',
      //     lon: '114.13075',
      //     lat: '35.96079',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '43872f15ab454f50b4926c285210707f',
      //     lon: '114.115394',
      //     lat: '35.883654',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '43ac0d0b4fe84a888ffbd4ed92502d37',
      //     lon: '114.17401493',
      //     lat: '35.90686669',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '43aee74f87a24bf1a256dd9626f2f7a9',
      //     lon: '114.39359665',
      //     lat: '35.54668347',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '43c73106212940d4a5a5a1b3a5705165',
      //     lon: '113.64189',
      //     lat: '34.744731',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '43e9c3c973d041e689a45ded3707c8fb',
      //     lon: '114.24385031',
      //     lat: '35.78939315',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '4415781835d7479e80185ee663bc5d1d',
      //     lon: '113.86896',
      //     lat: '35.26387',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '44680d280cbd4f0792b49ef0db206a82',
      //     lon: '113.93737',
      //     lat: '35.29557',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '44aea1c325264fd89a9db13ee188254f',
      //     lon: '113.81462',
      //     lat: '34.85196',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '44b58ab0e440402b9ae37b8e5218cf07',
      //     lon: '114.28708',
      //     lat: '36.10876',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '45234eac097a4261bc6df23172337689',
      //     lon: '114.28862',
      //     lat: '35.51558',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '45385efa3e7643c3b0c8c0f9ee000906',
      //     lon: '113.86006',
      //     lat: '35.43781',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '454e85f3cdb24424bd123a65ff987e3d',
      //     lon: '114.281108',
      //     lat: '35.763891',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '457c8f9109554439a50cde9d664be902',
      //     lon: '113.53355',
      //     lat: '34.65341',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '45c53be8803943b580ac1e4cf1ba3afb',
      //     lon: '114.01971',
      //     lat: '34.72543',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '465997efc3ed4a9e9ee2872027bd3654',
      //     lon: '114.20626',
      //     lat: '35.57561',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '46657e357a5346959de079f55a9d4e9c',
      //     lon: '114.23251',
      //     lat: '36.15965',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '466af4bf0c864dd5adf375a2eb489d67',
      //     lon: '113.533613',
      //     lat: '34.655699',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '467bc6e399624574a02c81ea4dd30197',
      //     lon: '113.73097',
      //     lat: '36.34715',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '46b9c0ed0ec346d9867e128f371ad191',
      //     lon: '113.90759',
      //     lat: '35.26707',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '47ba9e4a4eea4b258e896c6a1bb68776',
      //     lon: '114.1435928',
      //     lat: '35.93622208',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '47d2b0b4176b4b89b638d5bbcf20c27d',
      //     lon: '114.174156',
      //     lat: '35.834301',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '47d7af19237f425f91d9070d9d2e041f',
      //     lon: '113.62251',
      //     lat: '34.663611',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '47e767810e7c490db1324c892b9adab7',
      //     lon: '113.21389',
      //     lat: '35.25001',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '482ed646655a48e7ac0654f87e047a21',
      //     lon: '113.61895',
      //     lat: '35.35692',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '483f1a3af21e4564b25d138a2da1588d',
      //     lon: '114.17599976',
      //     lat: '35.89384791',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '484be710c0d2472881cd416baf3d964f',
      //     lon: '113.757919',
      //     lat: '35.191376',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '485596b42f3b49ef944061b8facbd8ff',
      //     lon: '114.073348',
      //     lat: '35.545568',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '486871d1628a45f1b0c8bc27a85c288c',
      //     lon: '114.20111',
      //     lat: '35.98351',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '48726540aa27406f827b57e0d1c6f97d',
      //     lon: '113.659056',
      //     lat: '34.775833',
      //     reason: '2',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '48cafab34a0d4521b65b9e700deb9e95',
      //     lon: '113.63645',
      //     lat: '34.71772',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '48d199e9551a467a8ddd1a65673e40a3',
      //     lon: '114.10006797',
      //     lat: '35.87527135',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '48d384f744fa41f0a20890e00933714f',
      //     lon: '114.17001',
      //     lat: '35.84777',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '49071ec0791c40579109ed6f329f4437',
      //     lon: '114.16407',
      //     lat: '35.897747',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '4917f87281e54fcbad4eeb4a24e1e653',
      //     lon: '114.05645',
      //     lat: '35.38507',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '49186b3000074a05be996c8f64568c5d',
      //     lon: '114.25332',
      //     lat: '35.70908',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '493535f9bdd04d54892e3a2f69e24f75',
      //     lon: '113.88812',
      //     lat: '35.44565',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '493f253fcf3447019ca37714ab55622e',
      //     lon: '113.585',
      //     lat: '34.785555',
      //     reason: '1',
      //     siteType: '5G'
      //   },
      //   {
      //     id: '4959883f9e1f48bfa292563e713f9f80',
      //     lon: '114.20536',
      //     lat: '35.61288',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '497868963faa496f86f64256f8ab6411',
      //     lon: '113.61353',
      //     lat: '34.67906',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '49d1bdf83212424a8d7b3632f4eaa81d',
      //     lon: '113.39738935',
      //     lat: '35.22171698',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '49dc788b97f2483c909c54a8e4586bef',
      //     lon: '113.710555',
      //     lat: '34.769722',
      //     reason: '1',
      //     siteType: '5G'
      //   },
      //   {
      //     id: '49e61f04cd9145dfaa56dffe3d8da9cd',
      //     lon: '113.86313',
      //     lat: '35.31054',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '4a18748e73924e479d316a4422be6e5d',
      //     lon: '114.24518',
      //     lat: '35.66142',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '4a330ce12cd94ab4af57e800ed33de50',
      //     lon: '114.54658',
      //     lat: '35.95244',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '4a4a1847f6a14ee0b2832164928ae1a8',
      //     lon: '114.39181',
      //     lat: '36.13501',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '4a62876c4e904416a69bca917048d832',
      //     lon: '114.317872',
      //     lat: '36.095784',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '4a6a2a9cdf23424798b1c5dbc36d8176',
      //     lon: '114.191629',
      //     lat: '35.858224',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '4a7d8a385e134f5782e7da51962753c3',
      //     lon: '113.98531',
      //     lat: '35.30626',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '4a921b4a44f84eeb821ed6bddc9d3c9c',
      //     lon: '114.21211',
      //     lat: '35.63814',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '4aa64bf5cf07462285d93419feb0be6d',
      //     lon: '113.42674',
      //     lat: '34.76729',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '4aa7865eca484b999e028e10401ceaf5',
      //     lon: '113.86571',
      //     lat: '35.45413',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '4afe6343e7a84111b7320552dc270490',
      //     lon: '115.65891',
      //     lat: '34.32471',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '4c445d5c1e1c42a4a116d61757f3698c',
      //     lon: '114.190521',
      //     lat: '35.592256',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '4c698f158b0e48d4bfcb757ee32fa126',
      //     lon: '113.66608',
      //     lat: '34.75337',
      //     reason: '1',
      //     siteType: '5G'
      //   },
      //   {
      //     id: '4ce3c93373e04e09ae7f1801af747dd9',
      //     lon: '113.29677192',
      //     lat: '35.19735755',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '4cfa7c1d59384e32b17d5cc9e10b8f89',
      //     lon: '113.965871',
      //     lat: '35.337199',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '4d143ca22a6943868408457f76573c4f',
      //     lon: '113.87107',
      //     lat: '35.49982',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '4d1c96a3211047349744f11444e45c7a',
      //     lon: '114.230578',
      //     lat: '35.48427',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '4d332f07721c4e8fbce173bb996024f0',
      //     lon: '113.37686',
      //     lat: '35.22684',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '4d33faa26ab14a66b117963b1f2ba10c',
      //     lon: '113.49085',
      //     lat: '34.40216',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '4d88addcf8084ebdb8f4ed674dad5791',
      //     lon: '114.21211',
      //     lat: '35.63814',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '4db5fb7b1859444dbc7d8f694b074e16',
      //     lon: '114.14995',
      //     lat: '36.25743',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '4e0635ebeea045d788e24d384136dc71',
      //     lon: '112.98312',
      //     lat: '34.34718',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '4e646bbb098a4935bc51fa936dd8177c',
      //     lon: '113.77504',
      //     lat: '35.37032',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '4e6599442e6240d8ad8781fc6f58608c',
      //     lon: '113.38598',
      //     lat: '34.60643',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '4e97c016b460411894d8be33d65f93f6',
      //     lon: '114.19673324',
      //     lat: '35.89894096',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '4e9c5934be3844a196ef8b3a76847155',
      //     lon: '114.25622',
      //     lat: '35.93076',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '4ea1a0d2125f4e77bdc4524cbe514685',
      //     lon: '114.245978',
      //     lat: '35.93821',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '4ea67dcf112544b48bf51a93075a97eb',
      //     lon: '113.36825',
      //     lat: '35.13616',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '4eb3ea18e1d74877b88f8523f5ebdee3',
      //     lon: '113.48854',
      //     lat: '35.36148',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '4eb990ab80514678bf82612dc1ec684f',
      //     lon: '113.68104',
      //     lat: '35.38962',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '4f3fd900881e4f879e9f0a73c541965f',
      //     lon: '114.10805',
      //     lat: '35.93083',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '4f4cd4c832564efb90cf3b011670d472',
      //     lon: '113.93101',
      //     lat: '35.38381',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '4f4d878cbec74e10a3e51024f5f0a5d0',
      //     lon: '113.806388',
      //     lat: '34.840555',
      //     reason: '3',
      //     siteType: '5G'
      //   },
      //   {
      //     id: '4f4f114f15534924ac6460b6f60f4047',
      //     lon: '113.35372',
      //     lat: '34.60352',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '4f9b8f72dabc4e579b032d5c49ce813a',
      //     lon: '114.24892',
      //     lat: '35.55194',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '4fe107f13b374de7941c95b05b33d71e',
      //     lon: '114.33639',
      //     lat: '36.05917',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '501f1e1aea6b424fb3be3daba64316f5',
      //     lon: '114.19502735',
      //     lat: '35.5431567',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '50353d1de62a499a86970f9d63d73be8',
      //     lon: '114.077666',
      //     lat: '35.447513',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '50472e26a9ac433e9c6f82bdf8102cf1',
      //     lon: '113.77193',
      //     lat: '35.37321',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '5097a31bcda942ba82515bce844144c3',
      //     lon: '113.13944309',
      //     lat: '34.59977331',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '50d0e287158641f19b5460bea30f070e',
      //     lon: '114.127823',
      //     lat: '36.027668',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '50e08cefbf0243148c999188bcb6fe84',
      //     lon: '113.89052',
      //     lat: '35.27922',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '50f96f6f0d0c493e9505ad01bf4b02e0',
      //     lon: '114.06593',
      //     lat: '35.43002',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '50feb170ec5740788fffad3aa3430597',
      //     lon: '114.14176941',
      //     lat: '36.01244975',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '510dc157394b4aaeb960202ceedd0f93',
      //     lon: '113.61697',
      //     lat: '34.67049',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '51124eef43e94a95afcccaf455b5a5a7',
      //     lon: '114.251198',
      //     lat: '35.590045',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '511b4f6580ac4084b1136caf06adc433',
      //     lon: '114.19648',
      //     lat: '35.61809',
      //     reason: '2',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '515499eae51c48c7befba2ac0b0e3168',
      //     lon: '114.20635',
      //     lat: '36.16746',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5166282dc7b546fb903aa4b729c31085',
      //     lon: '114.06664',
      //     lat: '35.37781',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '51a4a4a24215414d9c4566c205b30544',
      //     lon: '113.86971',
      //     lat: '35.50101',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '51e583125d484644b2869f35ca26eec8',
      //     lon: '114.37333',
      //     lat: '35.97889',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '51f0036de6624f1ea413ec0101ed9c0f',
      //     lon: '115.16401',
      //     lat: '34.65091',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5214b164e0544b9591de50733c543b13',
      //     lon: '113.66516',
      //     lat: '35.40143',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5215e462019846c7a746ab6fba9e256a',
      //     lon: '114.34203',
      //     lat: '36.24472',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '527adad9b8f943b2b333ed4f349fdfd0',
      //     lon: '113.374444',
      //     lat: '35.171944',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '52aa9e3dbd3a45f5abab6e7d842cddde',
      //     lon: '114.6465901',
      //     lat: '35.940701',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '52b3ad8127184e48a44b49d927178db5',
      //     lon: '113.72229',
      //     lat: '35.43091',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '52b8166d04c94434ad69fd09f027b131',
      //     lon: '113.87043',
      //     lat: '35.32138',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '5301753aa06347a9a58edf07328be3b2',
      //     lon: '113.52486',
      //     lat: '34.69761',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5371dfafb3c44e3a81706dd087e17b16',
      //     lon: '114.02777',
      //     lat: '35.57601',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '53aaa51ef7354ea4ae79377a40cf9f2f',
      //     lon: '113.63477',
      //     lat: '34.72284',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5402f37d811b4bb1ab7b6046fc656a12',
      //     lon: '113.33355',
      //     lat: '34.60941',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5440d3b24c1b430a84915b57dccae669',
      //     lon: '114.052733',
      //     lat: '35.730172',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '544b967ab7f845cdab7a0d3f170e9088',
      //     lon: '114.40972',
      //     lat: '35.55666',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '548d376725b3400f9a13801ddd8f9cc9',
      //     lon: '114.36361',
      //     lat: '35.80472',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5491060d2c0f42d9a87c1514c0705770',
      //     lon: '114.18743',
      //     lat: '35.82271',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '54aa7d771bad4ca587ec5457add29401',
      //     lon: '114.14371',
      //     lat: '36.11066',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '54d9f453bdab4f219f58b1a45f89a871',
      //     lon: '113.93698',
      //     lat: '35.41701',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '556f6cef61fd4162aaeba52f502968cb',
      //     lon: '113.6261901',
      //     lat: '34.65090445',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '55cedd4421e14cde8dd36ebcf0bf630c',
      //     lon: '113.94471',
      //     lat: '35.83915',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '55db173ce2bb49f8a99a3802f0eaa0e3',
      //     lon: '114.82472',
      //     lat: '35.27917',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '566025a2d0ad4c1c8dd051b9bcb8807e',
      //     lon: '114.07456934',
      //     lat: '35.61393298',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '56ce4ba09bc34aaf8fd27bb17ce07ed1',
      //     lon: '114.28222',
      //     lat: '35.76638',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '5705f5e3213c4535ab21387be07a5159',
      //     lon: '114.19020474',
      //     lat: '35.89379671',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5758a7ba6e8d4c7e9aa17e92b8d23950',
      //     lon: '113.63019',
      //     lat: '34.74181',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '57a71c20f04843b9a0d14568c640222a',
      //     lon: '114.007467',
      //     lat: '35.395953',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '57bbdd469a4748cfabf1d2a54b3a05bd',
      //     lon: '114.15081114',
      //     lat: '35.98348448',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '57bdbad960434118baa9411fdc06caff',
      //     lon: '113.77872',
      //     lat: '35.45381',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '58471dcdbb574b398e9daab1124df58f',
      //     lon: '114.01064',
      //     lat: '35.57969',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '5847d096a6e24fb59e87556f988a0752',
      //     lon: '113.53881',
      //     lat: '34.79062',
      //     reason: '3',
      //     siteType: '5G'
      //   },
      //   {
      //     id: '586a21c6cc38492993dbde9665a8ecb3',
      //     lon: '113.79436',
      //     lat: '35.66387',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '589e897a0b944a8a93472b1488029e66',
      //     lon: '113.77504',
      //     lat: '35.37032',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '58c261b586654ae193a3bc0fa2a35473',
      //     lon: '114.16584492',
      //     lat: '35.58208223',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '58f92c65f54448efb59ce446f9c9f969',
      //     lon: '114.209981',
      //     lat: '35.613288',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '59151aab03c4436b8888b17c811d0010',
      //     lon: '114.28798',
      //     lat: '35.68486',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '5924387736d944a296e352f17920db84',
      //     lon: '113.86201',
      //     lat: '35.32951',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '598818cf276e469387d4d25c58dbcdac',
      //     lon: '114.22459',
      //     lat: '35.96825',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '599bc886362f48db9bf2c208dbecdce2',
      //     lon: '113.40694',
      //     lat: '35.10709',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '59dae7da10cf4cf7a4aaded52437b7fa',
      //     lon: '113.77994',
      //     lat: '35.43184',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '59ed85a65cc5459683cf73b122ff46c8',
      //     lon: '113.58745',
      //     lat: '34.64138',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5a11f0ae22b14915a075a5492a852f0d',
      //     lon: '114.26381',
      //     lat: '35.65381',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '5a244ce8ef4145339e8ce5ed77207c11',
      //     lon: '114.127138',
      //     lat: '35.921213',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5a512ef80abd40ceb3d48c7834af087a',
      //     lon: '113.269722',
      //     lat: '35.204444',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '5a62451b768c49ee8621c832e63d9e3d',
      //     lon: '113.90224',
      //     lat: '35.55951',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '5a9c7aa178434d80a1d960fc937a82d4',
      //     lon: '114.32551',
      //     lat: '35.882812',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5ac10e6341b140ac95b547f51b9be149',
      //     lon: '114.23336',
      //     lat: '35.66278',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '5ad7c3cb82b94d6b885d4787e083dd66',
      //     lon: '112.97043',
      //     lat: '34.72398',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5ae4ce59554d44b8a2fabd5ce8b7cc18',
      //     lon: '113.27165',
      //     lat: '35.19444',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5b086f5114974be29832ee9286bf3a47',
      //     lon: '114.138504',
      //     lat: '35.428232',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5b25063712c24b3ba30424e1cc54fae9',
      //     lon: '113.892045',
      //     lat: '35.774513',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5b2dfc85d3fd48fbad331656a12f6c8f',
      //     lon: '114.021353',
      //     lat: '35.400596',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5b3baa68ed4142aab60ad87925a898a7',
      //     lon: '113.62639',
      //     lat: '34.71895',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5b84b918ba7247a0aa242941446fff3e',
      //     lon: '113.63751',
      //     lat: '34.67816',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5bc39b5b1c8f438483ba938f501f7350',
      //     lon: '113.613584',
      //     lat: '34.707097',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5bc7b56825e54eb4a9b8d18db63d90a0',
      //     lon: '114.20659572',
      //     lat: '35.6005389',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '5c12309a28534af297dfa5038496f029',
      //     lon: '113.769187',
      //     lat: '35.19088',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5c8b8e6442a042d2bdfc52042d1023f6',
      //     lon: '114.31082',
      //     lat: '35.80916',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5c9ebd97f862451a8b64a79995ce97b4',
      //     lon: '113.57761',
      //     lat: '34.73861',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5ca212716f044aadbb6f1a75248b0562',
      //     lon: '113.76916',
      //     lat: '34.66996',
      //     reason: '3',
      //     siteType: '5G'
      //   },
      //   {
      //     id: '5ca52a8852a1434c8ade819290308b80',
      //     lon: '114.20138',
      //     lat: '35.83944',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '5cdb2d9a96b64236b407e095152a8b51',
      //     lon: '113.79841',
      //     lat: '35.46096',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '5ce02ed06d4c4dfea8c7eb66fb52030f',
      //     lon: '113.78213',
      //     lat: '35.36661',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '5ce9da5c20e04f57a9a7bd5f02f41c74',
      //     lon: '114.056262',
      //     lat: '35.432633',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '5cf1fd8321584c7597a0a008468058df',
      //     lon: '114.296504',
      //     lat: '35.715639',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '5cf874b92ec747cfb0aff85b2eed2cb3',
      //     lon: '113.96567',
      //     lat: '35.35032',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '5cff13858a9940f1a0afc6bde035699e',
      //     lon: '113.91778',
      //     lat: '35.38546',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5d105591df8f41b59504977bdca8a9e0',
      //     lon: '115.58372',
      //     lat: '34.40853',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '5d1cb9526e4449c08445ead97a87132f',
      //     lon: '114.40201',
      //     lat: '35.54324',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '5d7ffb6a68244c8683ec12689682ffcb',
      //     lon: '114.25897',
      //     lat: '35.73718',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '5db5d30dcd4542c7aa400555869698c2',
      //     lon: '114.46778',
      //     lat: '36.12611',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5dc9ca6b1424456097f44c31bc1e05d7',
      //     lon: '114.16584492',
      //     lat: '35.58208223',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5df572d6e2594ff8a82c898e68d0952b',
      //     lon: '113.56492',
      //     lat: '34.49328',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5e3549ba25e44bbea94fe12a142e16b6',
      //     lon: '113.83722',
      //     lat: '35.37251',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '5e428f71547c4415a83a082fa1b124fa',
      //     lon: '113.88530001',
      //     lat: '35.45764',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5e55f403f3b24462b6b1ccfccf3152b1',
      //     lon: '114.285507',
      //     lat: '35.528099',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '5e5a4886fc6e43fb8bfa57aa61b8697f',
      //     lon: '114.126185',
      //     lat: '35.526791',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5ed640ef12c54496bdaf389d6b3f38b6',
      //     lon: '114.07357',
      //     lat: '35.6031',
      //     reason: '2',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5ef5caa43e63494e88dbdeb76f830255',
      //     lon: '113.15998',
      //     lat: '34.68234',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5ef6b42c0a2d4fc39e1e0b2cd99be48d',
      //     lon: '114.50218',
      //     lat: '36.14782',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5f0aa98f94f245e5902ade9c874400ed',
      //     lon: '113.39342',
      //     lat: '34.54506',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5f10fc0235a34662960062bb9deaf92f',
      //     lon: '113.42995',
      //     lat: '34.58362',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5f374dd43e474b5ab9ffae3e76a0dfbc',
      //     lon: '113.88527',
      //     lat: '35.29556',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '5faae9464c8e4833a5861f03a8c3689b',
      //     lon: '114.16925',
      //     lat: '35.90414',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5fb52cdf085d404ca79070ed10577b69',
      //     lon: '113.80402',
      //     lat: '35.40552',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '5fdf42a3576849cd87b0a20587701538',
      //     lon: '114.1435928',
      //     lat: '35.93622208',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '5fe2efb2abe1411eb24b38b04da262ab',
      //     lon: '114.35497',
      //     lat: '35.52253',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '5fe9bd908ae443d8a0d43fd7177f8a13',
      //     lon: '113.66365',
      //     lat: '34.82722',
      //     reason: '1',
      //     siteType: '5G'
      //   },
      //   {
      //     id: '5ff463a2bd5641b99e262355cb30dc5e',
      //     lon: '113.70454',
      //     lat: '35.50591',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '60113dd8bc2b4a5682c418c30a72b354',
      //     lon: '114.22068',
      //     lat: '35.63576',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '6023107dd94b4be7a782f8da42664843',
      //     lon: '114.30755',
      //     lat: '36.22667',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '604a7dd3be9448d6becb391c01924d25',
      //     lon: '114.077666',
      //     lat: '35.447513',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '6056f0f4d7df49488e7fe03226a19b75',
      //     lon: '113.61077',
      //     lat: '35.405031',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '60c80c7899694ac2aee1f6d9ab296dac',
      //     lon: '114.275385',
      //     lat: '35.728871',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '617aee33a5e94b438951e00b8d5d8e90',
      //     lon: '113.76318',
      //     lat: '35.45873',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '61ec8897a431425b8531721d9ed9a67e',
      //     lon: '113.82472',
      //     lat: '35.42833',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '62155e5c8cde4ede9e9cd7587f77d553',
      //     lon: '114.144179',
      //     lat: '35.586626',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '62467b3b5c854e37bceb52836efd6ebe',
      //     lon: '113.65058',
      //     lat: '34.81651',
      //     reason: '3',
      //     siteType: '5G'
      //   },
      //   {
      //     id: '63470c3603f74cd2928d379f7f8a38a0',
      //     lon: '114.34584',
      //     lat: '36.05811',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '636983c06315488aa88aa0a31f33599d',
      //     lon: '113.97368',
      //     lat: '35.29461',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '637f65cac67b46b58aa95ed574e3ead9',
      //     lon: '114.27505',
      //     lat: '35.605725',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '638648f5280249d19ef96c53d7220b1d',
      //     lon: '113.48854',
      //     lat: '35.36148',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '639f3609613b4c0c91a4c1923d458bef',
      //     lon: '113.38553',
      //     lat: '35.19992',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '63b0239031844eef801ab36ab1d8e291',
      //     lon: '113.967881',
      //     lat: '35.406097',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '63c1e0921e46423daf40e1ba00dfe69d',
      //     lon: '113.92101',
      //     lat: '35.28415',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '64204f32dbf140a5b102befa724c95e0',
      //     lon: '114.626762',
      //     lat: '35.922453',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '6441f7c5713e4c4e82cf593aa42bc42f',
      //     lon: '113.85012',
      //     lat: '35.35296',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '649718a0d7aa49bfb4d9a2802b1c80a6',
      //     lon: '113.52423',
      //     lat: '34.67557',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '649e5eba80ac47e9a6e3c8c7415871e8',
      //     lon: '114.26391',
      //     lat: '35.88261',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '64bfe040987d458095e37fb00c840b70',
      //     lon: '113.93541',
      //     lat: '35.195229',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '64e4397a520f473e8572d305dd618625',
      //     lon: '114.65081',
      //     lat: '35.98603',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '650e3232dd264539adfacb3b6b6b30f0',
      //     lon: '113.77371',
      //     lat: '35.44941',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '65542807621c451d8fed76478c1f7580',
      //     lon: '113.73201',
      //     lat: '36.23141',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '655cad089291492499332ad6737b2373',
      //     lon: '114.34511',
      //     lat: '36.012222',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '6561dbab2aed47f8adf317bd85c1d089',
      //     lon: '114.37641',
      //     lat: '36.02111',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '657c9ce43ad94bbd938e0d38d5dfc8dc',
      //     lon: '114.16674',
      //     lat: '36.05301',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '657f37de7a3f4e59ac667740d45de4cd',
      //     lon: '113.88506',
      //     lat: '35.48129',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '65994b216122472086674ec8f77c3c88',
      //     lon: '114.1426926',
      //     lat: '35.87027359',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '661f9539e4324223be16f7d3c11ce71f',
      //     lon: '113.45286',
      //     lat: '34.50411',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '667d935cab414b88856482bbaf1cb44d',
      //     lon: '113.84731',
      //     lat: '35.37891',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '66acfa6ceda9433faea3826e717f3ba8',
      //     lon: '114.21409249',
      //     lat: '35.9803243',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '66aebe0b342e429ba90ba3428b483f77',
      //     lon: '114.28222',
      //     lat: '35.76638',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '66d55236a3b2419d9703a066654c2f3b',
      //     lon: '114.16333',
      //     lat: '35.53916',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '672ebbddce6242e2ae4a00fe8107da8b',
      //     lon: '114.31895',
      //     lat: '36.20801',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '675559788c6f4145bee0b910bc108e81',
      //     lon: '114.124399',
      //     lat: '35.952502',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '67694ca1e1ed4b23b5e0059bf54fe3a2',
      //     lon: '114.16277',
      //     lat: '35.60611',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '676bb62c44a04f92a3c61b20b56fe816',
      //     lon: '113.83722',
      //     lat: '35.37251',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '67b7360a194f4411ae6ea8348ccdee97',
      //     lon: '113.00703',
      //     lat: '34.647401',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '67e05ef3cbcc421a89be0f362891d642',
      //     lon: '114.19211',
      //     lat: '35.61429',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '6800011c56014dd3969b88d90b58b651',
      //     lon: '113.87583',
      //     lat: '35.32472',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '6826af7c84bc453eb75703303f5fe3f6',
      //     lon: '114.21409249',
      //     lat: '35.9803243',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '68ffc748fddb49fab6ae8bf9fd670418',
      //     lon: '114.15916',
      //     lat: '35.68194',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '6900c9b7a5084c81845dc800b541d309',
      //     lon: '113.69024',
      //     lat: '35.68189',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '693d9c14c1f74af8b99a54244dfe161b',
      //     lon: '113.84001',
      //     lat: '35.35401',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '694fa008cace42688e16a737583c7292',
      //     lon: '114.295833',
      //     lat: '35.756111',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '698e2eda56e14704ab25b4c77458c8a5',
      //     lon: '114.65512',
      //     lat: '35.13916',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '69f4cc059d054bccb63895efaf62a277',
      //     lon: '114.34974',
      //     lat: '35.68888',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '6a3c60d337f5459598e841ad4859d969',
      //     lon: '113.82699',
      //     lat: '35.37841',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '6ace1f1ae2eb4e7093b9f92402df3d58',
      //     lon: '114.34923',
      //     lat: '36.21782',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '6b28c9c0bac54cb993ac4454d692f5ea',
      //     lon: '114.32845',
      //     lat: '35.70204',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '6b5c950786944cd3a528be0739f12777',
      //     lon: '114.17002916',
      //     lat: '35.72883817',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '6b63d6a0887d487099964f1a4fb06884',
      //     lon: '114.19648',
      //     lat: '35.61809',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '6b786c1ea23a465c80b1fb68632300c5',
      //     lon: '116.45869',
      //     lat: '33.95766',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '6ba476605abb4f5894edf447c7e54eb2',
      //     lon: '113.986798',
      //     lat: '35.417222',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '6bd934ebb46946e3b431bf2e88bb5d52',
      //     lon: '114.31639',
      //     lat: '35.81778',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '6bf4ca4569b04c629539a630b8aa5e04',
      //     lon: '113.51259',
      //     lat: '34.66272',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '6c26742982db4bb58d39e7229e3da2fa',
      //     lon: '113.40944',
      //     lat: '35.16787',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '6c7434825c384ef19606f088ebcd8ca4',
      //     lon: '113.99401',
      //     lat: '35.35251',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '6c96354457074c4ebbcb16b06e17f695',
      //     lon: '113.29241',
      //     lat: '35.22501',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '6cce8b716b7f4e3b9b841a97ce98bf84',
      //     lon: '113.779564',
      //     lat: '35.321423',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '6cd3090fc2324087806e2ab7f098a26e',
      //     lon: '113.58511',
      //     lat: '34.74921',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '6cf2b7e42756472297bbd7f0d6909fe7',
      //     lon: '114.515833',
      //     lat: '36.105833',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '6d79ea5fc1924136af38a174a119b7dd',
      //     lon: '113.54039',
      //     lat: '34.67584',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '6d9aefab7a314935b37b778cb822d5f2',
      //     lon: '113.93698',
      //     lat: '35.41701',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '6e0c88e609c44c24a724acf885bc6b16',
      //     lon: '114.20863',
      //     lat: '35.97552',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '6e9372268dfb491f958c1163e94bf8c5',
      //     lon: '114.53935',
      //     lat: '36.02553',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '6eccd3e58572413b949caf32d3a73bcd',
      //     lon: '114.33991',
      //     lat: '35.75449',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '6f0b7c972aaf4bb5835c5d30bbbce3d9',
      //     lon: '114.37029299',
      //     lat: '35.61483706',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '6f76834a82504274b99924e2ad40d8fa',
      //     lon: '114.358264',
      //     lat: '36.192455',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '6f7ccbaeb08f4cff97d815833e484375',
      //     lon: '113.91891',
      //     lat: '35.27851',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '6fac78d0c73c490480d41c6061e854ef',
      //     lon: '113.526863',
      //     lat: '34.915492',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '6fbffd4974184ac0a67df7c396688573',
      //     lon: '113.640892',
      //     lat: '34.73801',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '6fc33b9ce0094bf487970e5b3aa49d8f',
      //     lon: '114.24503446',
      //     lat: '35.77891544',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '6fd52a1d86394241a4cfd075d1572cca',
      //     lon: '113.33556',
      //     lat: '34.58911',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '705df9bc75ce46829c4ec23d2ee2c299',
      //     lon: '113.96228',
      //     lat: '35.26461',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '70e612baa47c490c9bab2b98904df34c',
      //     lon: '114.28222',
      //     lat: '35.76638',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '7118edcb4409459a8452a4b7aa99f572',
      //     lon: '113.73303',
      //     lat: '35.38682',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7131d30497af4ee9bcae77b411d17960',
      //     lon: '114.2112001',
      //     lat: '35.499513',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '716f1c067aa84c91876bb5661c329aa9',
      //     lon: '114.08044',
      //     lat: '35.45627',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '71855040262e4719979dede1a8777a54',
      //     lon: '113.35634',
      //     lat: '34.56064',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '71c9e8eda19b4e90842dcc51dd9ef473',
      //     lon: '114.21861',
      //     lat: '35.76861',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '71d0db45dd4e409c88fb6c1d6f401ca6',
      //     lon: '114.28222',
      //     lat: '35.76638',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '71f4ae7e09014498848ab9523b05f36d',
      //     lon: '114.17428046',
      //     lat: '35.90405975',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7200e1c3a3724637be97d39194632889',
      //     lon: '113.22071',
      //     lat: '34.53891',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '720a2b3b760c4279a866eeae841b478d',
      //     lon: '114.146944',
      //     lat: '35.543888',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '72536d637d204b4fb17ea12d93ba5b60',
      //     lon: '114.08911',
      //     lat: '35.95448',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '72ae3e22dfb04ae8ab2e02cad603aa99',
      //     lon: '114.20149',
      //     lat: '35.90261',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '72d386ffba0e42b59e5dc11366761d95',
      //     lon: '114.275385',
      //     lat: '35.728871',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '72edd70ec5294866be43c91e635b69af',
      //     lon: '113.61684',
      //     lat: '34.71787',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '72fae95a1fcb42e9a350d28f7ce4f492',
      //     lon: '113.624722',
      //     lat: '34.792777',
      //     reason: '3',
      //     siteType: '5G'
      //   },
      //   {
      //     id: '731449ef707c4117943251a841299341',
      //     lon: '114.25897',
      //     lat: '35.73718',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '731ca9411db8434686873fb633837bc3',
      //     lon: '113.78529',
      //     lat: '34.79698',
      //     reason: '1',
      //     siteType: '5G'
      //   },
      //   {
      //     id: '7352a9d72f714103bbbef26a3116622a',
      //     lon: '114.15612',
      //     lat: '35.48055',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '736992e856824c5a9f41a00a3f2c52dc',
      //     lon: '113.92388',
      //     lat: '35.385111',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '7396c68515e9413e9f2a2c3b99fea50d',
      //     lon: '113.98917',
      //     lat: '35.387511',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '73b5ac36d33d45c1855cfda12e95defd',
      //     lon: '113.86612',
      //     lat: '35.43251',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '7407cc39984c4511a39a93dc063918e2',
      //     lon: '114.38362',
      //     lat: '35.58667',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '743bf7edbd32472cbcf37a27343ef3b9',
      //     lon: '114.126185',
      //     lat: '35.526791',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '747169db77c84940a821258dfdf682b5',
      //     lon: '113.41927',
      //     lat: '34.60741',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '749d921daeb7499aabae2993586ac401',
      //     lon: '114.257198',
      //     lat: '35.50807',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '74cd207118c44834a49698d8fe8bc18e',
      //     lon: '114.22243953',
      //     lat: '35.947986',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '74df9ba9c9dc4c138b48f74452df3a51',
      //     lon: '114.33021',
      //     lat: '36.19613',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '74f32a70a9ff44ffbcbd2bbfdd55fb47',
      //     lon: '114.28222',
      //     lat: '35.76638',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '75127ccc66284f80b048837bf047f4e9',
      //     lon: '114.28222',
      //     lat: '35.76638',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '752182fc35c54394aeaa1a52c6f61e72',
      //     lon: '114.341642',
      //     lat: '36.000869',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '753c7057fc3b44fb8d9b883c93e03cd2',
      //     lon: '113.30223',
      //     lat: '34.61522',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7540702b48dc449aa93caa96d80edf00',
      //     lon: '113.32021',
      //     lat: '34.61941',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '754ab7bbf66249469924a20ef5fc2dbc',
      //     lon: '115.63631',
      //     lat: '34.36641',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '756895b512734669a26c19aec6d134a6',
      //     lon: '113.76065',
      //     lat: '35.48151',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '75f1f6e05a3b458d8778ad8a8380cdef',
      //     lon: '113.65244',
      //     lat: '34.71809',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '76155259290b4749b2f6864fbe43af25',
      //     lon: '114.20205',
      //     lat: '36.11921',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '763d9a34b7aa4b88bab13e4fc35d79d9',
      //     lon: '113.67441',
      //     lat: '34.82496',
      //     reason: '1',
      //     siteType: '5G'
      //   },
      //   {
      //     id: '76410b0d3e1b4819bdd5a3dce6d261a3',
      //     lon: '114.22243953',
      //     lat: '35.947986',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '76463113e00a47bfb40a37014b12a5e5',
      //     lon: '114.2261505',
      //     lat: '35.69322968',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '77101b1631f2427b8e846dd75d9c3dde',
      //     lon: '113.98117',
      //     lat: '35.29796',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '7713966cf5874c9eb586ca66f29623b8',
      //     lon: '114.60674',
      //     lat: '35.91553',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7757997fadd54c3e8c8b73a45fd57728',
      //     lon: '114.667994',
      //     lat: '35.153502',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '788abdb155dc451686821608d50fe3af',
      //     lon: '114.255455',
      //     lat: '35.908363',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '78aa3f009a57476c8faca9feed2e77da',
      //     lon: '113.87527',
      //     lat: '35.45024',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '78c5222efd454b6a8065d018aca40d3a',
      //     lon: '114.47944',
      //     lat: '36.07071',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '78dab7f89bbc43978365df85566222ce',
      //     lon: '113.75955',
      //     lat: '36.3537667',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '78f12c73f9644e77975ea5f639dbf68a',
      //     lon: '114.338041',
      //     lat: '36.227011',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '78f3ab85f8724d1a92425cf6860f4f24',
      //     lon: '113.76528',
      //     lat: '35.50589',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '7959d8a37b5a478a8640d8e239b4743a',
      //     lon: '113.34902108',
      //     lat: '35.13990582',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7963d5fb00cf4e39977fff7037c2ee86',
      //     lon: '113.23556',
      //     lat: '35.17778',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7a3b69df852e4146bb8c0afbd515a7ee',
      //     lon: '114.326424',
      //     lat: '35.554249',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7a5a3aae31384152b0ffe017255cb937',
      //     lon: '114.15374242',
      //     lat: '35.89100732',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7aade60751ea4774a8123919f202a9b9',
      //     lon: '114.23188',
      //     lat: '35.77368',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '7ab913defa5944bdbad20da658df6bad',
      //     lon: '114.32557',
      //     lat: '35.51842',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '7ad770f71db1421681622362656123f6',
      //     lon: '114.16667104',
      //     lat: '35.55499346',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7afae0b16fbb44a792a687025186bcb4',
      //     lon: '114.112368',
      //     lat: '35.886194',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7b4aad109e034fe78b742ebb1c0e10d7',
      //     lon: '114.52834',
      //     lat: '36.11951',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7b7df8dc91bb4045bc187f00bb3c648f',
      //     lon: '113.68104',
      //     lat: '35.38962',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '7b9336f19f68405ab05f41fedf204eac',
      //     lon: '113.54374',
      //     lat: '34.42507',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7c00bde5431c4c019a5d917ecd30d770',
      //     lon: '113.35517296',
      //     lat: '35.21365896',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7c2906b7281b444286c90685bfb3d383',
      //     lon: '114.18986',
      //     lat: '35.59871',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7c377bdbb17c4f7ca6b62ec895e9c124',
      //     lon: '113.54648',
      //     lat: '34.39411',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7c516ffa27f44b07ba9745092f285015',
      //     lon: '113.49226',
      //     lat: '34.79667',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7c56027a2e8741449b8a567302b14d0e',
      //     lon: '113.24516',
      //     lat: '35.17899',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7c56a2acc8c447359df8e565731df68e',
      //     lon: '114.304803',
      //     lat: '35.749765',
      //     reason: '2',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7cbe99ac99b24a589a23736252c95c10',
      //     lon: '114.06521',
      //     lat: '35.38798',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '7cdd1e4b854d43ae8d17fa4a6e4abe2b',
      //     lon: '114.1091232',
      //     lat: '35.60261154',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7d13ada5cfc04969813d39afa1ba97ba',
      //     lon: '114.29722',
      //     lat: '35.50694',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '7d395617eb4c43e3b8a3883f5b2cc216',
      //     lon: '114.40201',
      //     lat: '35.54324',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '7d9f115681854a91afba6de2175cb690',
      //     lon: '114.202829',
      //     lat: '35.779281',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7da5d059b87341fea2030fc2bb14db6a',
      //     lon: '113.759858',
      //     lat: '35.18738',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '7db06fd869834fa88ad81a0cff8f0db3',
      //     lon: '113.861388',
      //     lat: '35.2975',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7dbd5c2327f14ef2be752da604797077',
      //     lon: '113.269722',
      //     lat: '35.204444',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '7dd7fb07720f4ce095ed3799a9010868',
      //     lon: '114.17930424',
      //     lat: '35.89615982',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7deb5c9af1d84300b8156bffe4f089be',
      //     lon: '113.48821',
      //     lat: '34.57959',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7dedaa6010704800a2bce47e5b51a2ab',
      //     lon: '113.708111',
      //     lat: '34.777655',
      //     reason: '2',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7dff23230274439db0f728c7231a0bc7',
      //     lon: '115.12498',
      //     lat: '35.87241',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '7e40b7b8691747c6a764e1bc20fc35a4',
      //     lon: '113.63039',
      //     lat: '34.71666',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7e4f98739cc84d8bacd2025d7e4e1857',
      //     lon: '113.21366',
      //     lat: '34.59819',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7e75cc194b354921ab2eb1f0e9a1e3e6',
      //     lon: '114.37527',
      //     lat: '36.13194',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7ea5fab3282346989c24219e20f1f868',
      //     lon: '114.113055',
      //     lat: '35.721388',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7ecb4f8387314e83b1711bb3e9c993fb',
      //     lon: '114.22601',
      //     lat: '36.15641',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7f85ba94294b40e386c30eb5c5be4333',
      //     lon: '113.34814',
      //     lat: '34.58583',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7f86cbde44a94e19b9cb74a067d8788c',
      //     lon: '114.33113',
      //     lat: '36.09861',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7f92b63c87584722b94c1d9e24946d03',
      //     lon: '113.91089',
      //     lat: '35.27905',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '7fa7a813381c437fa5ec591c5fe1959b',
      //     lon: '114.202829',
      //     lat: '35.779281',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '7fbc4d4821494a2da7caba17e09d7c8f',
      //     lon: '113.25126529',
      //     lat: '35.229653',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7fbdc3e3908a40c5b9eb3ad2510125af',
      //     lon: '114.07357',
      //     lat: '35.6031',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '7fc5dac15fbc4413815961539a31e68d',
      //     lon: '113.95401',
      //     lat: '35.29854',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '7fcc186e9aa44e4494af99c1987549cf',
      //     lon: '114.24255',
      //     lat: '35.67837',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7fdcd1ad4c5f4eb7be76cfe0df3dbca7',
      //     lon: '113.25707',
      //     lat: '35.18714',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '7feff4a8dd82424a81a9cf5d24809249',
      //     lon: '114.22805',
      //     lat: '35.88388',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '8019a761690d4cf2be04d4373f7b056b',
      //     lon: '113.89404',
      //     lat: '35.25709',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '8024db37ad38423880ae2db6754dcd91',
      //     lon: '113.73397',
      //     lat: '36.20993',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '804999a54f2c418ab804994a48058d6f',
      //     lon: '114.43077',
      //     lat: '36.11293',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '806c699b5afd4480a6819b13af62cc09',
      //     lon: '113.80638',
      //     lat: '35.45972',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '8099d132355340d194c752b40eca9b00',
      //     lon: '114.24271',
      //     lat: '35.57195',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '809d4136cd1444c09d334572b1a11692',
      //     lon: '113.73682',
      //     lat: '33.22687',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '809dd4ae2e8a47a6b220789d9bc81767',
      //     lon: '113.683775',
      //     lat: '34.872553',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '80a72a5d330b4185804735e85a61830d',
      //     lon: '113.84001',
      //     lat: '35.35401',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '80ef724b32914e4a9746305ee15d68d2',
      //     lon: '113.93401',
      //     lat: '35.27311',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '811a82f948a248b3845d1d80a0240fdc',
      //     lon: '114.19648',
      //     lat: '35.61809',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '81902480f972489db51c1752d166c81a',
      //     lon: '114.232826',
      //     lat: '35.639389',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '81b7eb1d82c54e938dfcdb34c4083926',
      //     lon: '114.25765',
      //     lat: '35.56213',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '820780684f234839a741a2a161e129e5',
      //     lon: '114.27251',
      //     lat: '35.95277',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '82443209153e4f658c1b5855e62188e2',
      //     lon: '113.48462',
      //     lat: '35.39456',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '82549acc2af34500b807120b02f6db89',
      //     lon: '113.75163',
      //     lat: '34.72637',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '830211b6e3984e849ec23489d61ac616',
      //     lon: '113.64543',
      //     lat: '34.86314',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '8339942a0c8647f29c31001af960a48a',
      //     lon: '113.77872',
      //     lat: '35.45381',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '8380bea1c6024ddc99b1b2b2d22a9f35',
      //     lon: '114.22416687',
      //     lat: '35.90830922',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '83f80a2164b44628a668d4268ec2fe44',
      //     lon: '114.10805',
      //     lat: '35.93083',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '841a6dfdd97840d8af9063bc394814d4',
      //     lon: '113.841771',
      //     lat: '35.32181',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '847eac0344b742c7a6416ac9e1561618',
      //     lon: '113.64097',
      //     lat: '34.72593',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '847f2f978e9b42648b4652c5ee1f7176',
      //     lon: '113.71956',
      //     lat: '35.45821',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '84bc6fa4d5b640fcb7c88a8d5ff6e7ff',
      //     lon: '113.38553',
      //     lat: '35.19992',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '84bf4b120b384fbe9217e38459bd6e9e',
      //     lon: '115.65938',
      //     lat: '34.32384',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '84c2ff6295614d85845b67694790a4e6',
      //     lon: '113.25743',
      //     lat: '34.60521',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '84ecb3506c2d4cbc9fe2cb9bde41632c',
      //     lon: '114.295833',
      //     lat: '35.756111',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '850694dcfc2b4537b4223b43a6ec1003',
      //     lon: '114.28439',
      //     lat: '36.09893',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '854331d840b3454fb0df949184c8485e',
      //     lon: '113.57724',
      //     lat: '34.73804',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '8580eaaa847c4133aeacea8bccf5981b',
      //     lon: '113.74936',
      //     lat: '34.88865',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '85a30c7e63084298b554ae5063f83045',
      //     lon: '114.28222',
      //     lat: '35.76638',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '85a92e3ffbb542ca814913a2ad2edf26',
      //     lon: '113.76318',
      //     lat: '35.45873',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '85c344c496c74dfd81ceb29882210790',
      //     lon: '114.20330197',
      //     lat: '35.61703799',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '863dd70c5dfd44b49c4331500df19f6b',
      //     lon: '114.25193',
      //     lat: '36.22849',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '86446d328df8445f9fad395a75246d84',
      //     lon: '113.791666',
      //     lat: '35.314722',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '86927977f5c34cd3937a695ed6dba59d',
      //     lon: '113.51057617',
      //     lat: '35.21566184',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '86d884678e6141d2ba31d58eab3d6413',
      //     lon: '114.13676',
      //     lat: '36.27394',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '873c2483153340a5989e4a00e9cb5edf',
      //     lon: '113.58432',
      //     lat: '34.74836',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '877d7943c4ff42589121e63ebdcc54b8',
      //     lon: '114.26372',
      //     lat: '36.04688',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '8811cda18c8e44f5af3328299606070e',
      //     lon: '114.29962',
      //     lat: '36.11787',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '8829a2c09cbe4cb4812b460e1407129b',
      //     lon: '114.06483',
      //     lat: '35.85005',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '88c36b005d634b3db17ec961f6ce340c',
      //     lon: '114.613411',
      //     lat: '35.943011',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '88ce727dcbf7484abbab28e0688954b7',
      //     lon: '114.005457',
      //     lat: '35.473031',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '88f74d2a231a4905b635aa7c115c7e2b',
      //     lon: '113.495277',
      //     lat: '35.055277',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '892c5ba9b94644ebb8951ed62d55ffe0',
      //     lon: '113.39038',
      //     lat: '35.23406',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '8962f4645ee74909acd3e87c88720e03',
      //     lon: '113.50987315',
      //     lat: '34.44247296',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '897e3f72102b4eed86c927c3777246f5',
      //     lon: '114.21807853',
      //     lat: '35.67436601',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '89a45d1631de4d0698f345cd0b7005ec',
      //     lon: '113.67436',
      //     lat: '34.86821',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '89a693c30d5d404ebd4da1735fa00b74',
      //     lon: '114.06993',
      //     lat: '35.88708',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '89b5fe76a32a481f8ef97dd14b8c9f6c',
      //     lon: '114.256448',
      //     lat: '35.636203',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '89e6038d340b406e9e705ed89616460d',
      //     lon: '114.13964',
      //     lat: '35.71887',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '89e7bec629f04d459b832426e6b890cd',
      //     lon: '114.03657',
      //     lat: '35.95943',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '89fc4038f8e44050b16645f4c755fd75',
      //     lon: '114.10333',
      //     lat: '36.26556',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '8a49d9fd8ca74757a00914b7e41ffa89',
      //     lon: '114.35033',
      //     lat: '35.97996',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '8a4c663d26064d0d8bdbd66fe0b01a7d',
      //     lon: '114.38666',
      //     lat: '35.55346',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '8a9d3aa93069459eb21219c00b4d46ce',
      //     lon: '114.19648',
      //     lat: '35.61809',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '8aa6be10ba3941988c555736daae8d0b',
      //     lon: '114.16919',
      //     lat: '35.96902',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '8ac2f843132e4319a10839941120836c',
      //     lon: '114.60013',
      //     lat: '35.88686',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '8ac801a03fce4cffbbec5114ea73d86a',
      //     lon: '113.79311111',
      //     lat: '35.40511111',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '8c01ebf6600e4de3865234fd36f5e5c0',
      //     lon: '113.28852',
      //     lat: '35.22061',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '8c7be06d787a45e69a68a5df264da343',
      //     lon: '113.89515',
      //     lat: '35.31552',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '8cc7c15739b049f591250de4f9f51fa0',
      //     lon: '114.1903511',
      //     lat: '35.622757',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '8d420b7b5442414d911d46383de31a8e',
      //     lon: '114.18954',
      //     lat: '35.73301',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '8d53bb00b7564c3faa673bc0a7a3bb2e',
      //     lon: '113.481666',
      //     lat: '35.067777',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '8d578ead091a4521a552e1951cfe58a8',
      //     lon: '113.56358',
      //     lat: '34.88857',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '8e495a2767134894b1877ef349d3f17c',
      //     lon: '114.058495',
      //     lat: '35.407392',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '8ebc16e7d42d49a3b304276d122fc884',
      //     lon: '113.54053',
      //     lat: '34.62317',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '8ee296533dcc4531933ff0cdf7b375d5',
      //     lon: '113.61777',
      //     lat: '35.37786',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '8eeb649c89ff446d861bad2eec9758da',
      //     lon: '114.15351',
      //     lat: '35.60522',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '8f5216bb48184f7795573ca6fce59605',
      //     lon: '113.965871',
      //     lat: '35.337199',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '8f64a6d5b45841cabfd64424a55734c0',
      //     lon: '113.78878',
      //     lat: '35.45292',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '8fc4c283b3444bfe88308a1c2257d297',
      //     lon: '113.26392',
      //     lat: '35.235907',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '8fc7fb7fd36a405ca89a596ea3ade7d0',
      //     lon: '113.49725',
      //     lat: '35.38520001',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '9006961f31184da289ad8f36d6a20e29',
      //     lon: '114.27916',
      //     lat: '36.10944',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '901c1230045e4a26b756a786b8ff7796',
      //     lon: '113.51917',
      //     lat: '34.65815',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '902663b2591048e99e5efeae71d91e96',
      //     lon: '114.257744',
      //     lat: '35.716854',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '90575f909a654aa2ac2327d2ebb56a5f',
      //     lon: '113.98303',
      //     lat: '35.51691',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '90585713281c47bebb333a8bb7a62d27',
      //     lon: '113.41465',
      //     lat: '34.57075',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '9076807b24b748c689c23615919ecaeb',
      //     lon: '114.18961',
      //     lat: '35.50924',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '90a7497618ea47a6ae12249cdb25e3c8',
      //     lon: '114.24438',
      //     lat: '35.63566',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '90c59dbc004549a9adc97ae43ed10b0a',
      //     lon: '113.24998',
      //     lat: '35.185554',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '90e6ba7aa43d4f47a1043a8f48c42e8f',
      //     lon: '114.124399',
      //     lat: '35.952502',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '90f729348f074715bf05b7877730d1bd',
      //     lon: '113.93277',
      //     lat: '35.28805',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '91178d1428034b01b54674cdceed08c5',
      //     lon: '113.60015',
      //     lat: '34.64687',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '9170c583d4e5498584f1f046cd9f9f94',
      //     lon: '114.30901',
      //     lat: '35.52131',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '91d51c6f3ea048548651d5b3ad2ed5e2',
      //     lon: '113.664437',
      //     lat: '34.667501',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '922f1893271b4a8499519b3760f0b443',
      //     lon: '114.150833',
      //     lat: '35.596666',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '92849b2e23e24c449bc29d05663c0446',
      //     lon: '114.135833',
      //     lat: '35.853055',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '92e8b89442624db698c9a91b7209939d',
      //     lon: '113.64321',
      //     lat: '34.84778',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '931cbfac5d9f44aaabc239576c66f609',
      //     lon: '114.15833',
      //     lat: '35.61462',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '931e428070fc48ea96c9240c41646e37',
      //     lon: '114.43116',
      //     lat: '35.57604',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '931ec3dd70f74171bae3b16db43e2072',
      //     lon: '113.79207',
      //     lat: '35.45981',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '933e315da90f4e598ffe15837677b3ae',
      //     lon: '114.377911',
      //     lat: '36.116319',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '934542366707483fa170fedab99dded4',
      //     lon: '113.68756',
      //     lat: '35.50301',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '9372754b3ab24f9db6e1f8d87b3e06c5',
      //     lon: '113.65439',
      //     lat: '34.66756',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '938367a738994fb88098841b91cdd615',
      //     lon: '114.007467',
      //     lat: '35.395953',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '9401fdb6f25a4f11bbcc78597271c9b3',
      //     lon: '114.458251',
      //     lat: '36.132914',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '94049b320d7e4736b56f2b816639720a',
      //     lon: '114.18694',
      //     lat: '35.85333',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '946739e2238740418b38fb9133cf5985',
      //     lon: '113.299251',
      //     lat: '35.171978',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '946eb908b9e844fea91ca0232f789d05',
      //     lon: '113.46886',
      //     lat: '34.37721',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '947219b63f9c4fe3bfb51cea60741fbb',
      //     lon: '113.93698',
      //     lat: '35.41701',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '947b64a9a7ff4fc88aa3c956742605d2',
      //     lon: '114.120934',
      //     lat: '35.585285',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '949135b922504c288b39852ec64f16ff',
      //     lon: '114.19016182',
      //     lat: '35.60737369',
      //     reason: '2',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '9510ecaaff3442139748560eac47b652',
      //     lon: '113.988602',
      //     lat: '35.421618',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '9544d5f11f2f441e85abad03c47fbec5',
      //     lon: '113.59966',
      //     lat: '34.64011',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '9580669bee3f4eadad21f3451ef7f2a6',
      //     lon: '113.77994',
      //     lat: '35.43184',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '95958ab630d64acfb0b7a1f946d530df',
      //     lon: '113.61635',
      //     lat: '34.65118',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '95b6d3aba4794a7daa4391f8a39c0616',
      //     lon: '114.16992724',
      //     lat: '35.90122664',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '95c921d150fc4be4a0536c84e2b79adc',
      //     lon: '113.48533',
      //     lat: '34.62519',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '95f30975c56f45cfb35fa5f263bea7fe',
      //     lon: '113.88238',
      //     lat: '35.35625',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '95fa20c92b424eb58bf55cff0d8ae56f',
      //     lon: '113.41815',
      //     lat: '34.44987',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '9601fef87e93446180c1214e2bea92d7',
      //     lon: '113.66516',
      //     lat: '35.40143',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '961d6ecafdba40adaeed80122fb1aa47',
      //     lon: '113.91501',
      //     lat: '35.27441',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '963f6f25c07d47878a27889ba8b3992f',
      //     lon: '114.34449',
      //     lat: '35.97329',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '965baa5704bb4b58be77e7e99bd7521f',
      //     lon: '113.571944',
      //     lat: '34.745',
      //     reason: '3',
      //     siteType: '5G'
      //   },
      //   {
      //     id: '967157318fa541c282d0fc08417fbc12',
      //     lon: '114.37193781',
      //     lat: '35.52704421',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '96c09bf34f6e4360af08057c5e6a8cda',
      //     lon: '113.63447',
      //     lat: '34.75528',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '9722158e0fac4dbe846443880ed19036',
      //     lon: '113.681666',
      //     lat: '34.839722',
      //     reason: '1',
      //     siteType: '5G'
      //   },
      //   {
      //     id: '97715a25777d4cd6a287625b47fd666d',
      //     lon: '114.275385',
      //     lat: '35.728871',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '97acaaa6a3ec4c7e9118b13f033ff5ce',
      //     lon: '113.59219',
      //     lat: '34.63018',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '97ba5c05509b469ab8e872c062e02110',
      //     lon: '114.16919',
      //     lat: '35.96902',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '97bdcbb5d38a44a7b62cc6cb82dfecf3',
      //     lon: '113.990998',
      //     lat: '35.333977',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '97fa0426f79f47158d85ffd7e5301e41',
      //     lon: '114.14741',
      //     lat: '35.87802',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '98ac26286abc42458ef288def8aae9e7',
      //     lon: '113.87855',
      //     lat: '35.43082',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '98dae9c9122a4420850aa66444e24f41',
      //     lon: '113.69781',
      //     lat: '35.52438',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '993c1d514545499cabb058e2dd00857e',
      //     lon: '114.27705',
      //     lat: '35.51938',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '994c3efe12ca415193394a8f55951baf',
      //     lon: '114.299731',
      //     lat: '36.192478',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '994eff6175744125bd27524adcb0e38d',
      //     lon: '114.44096',
      //     lat: '35.594772',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '995d91c2fd234c2aa605ac15397f8938',
      //     lon: '113.77091',
      //     lat: '36.27426',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '99602cbf724649c0ad73465358dc1e99',
      //     lon: '114.268832',
      //     lat: '35.617344',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '99ddb208e77c4605add3e9d84b49467a',
      //     lon: '114.22305',
      //     lat: '35.65751',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '99f7b92adc5e4275bed96a5d035cef34',
      //     lon: '113.35091',
      //     lat: '35.24281',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '9a1cdf4e8d444a2d8a2f6ca66572ad94',
      //     lon: '113.24739',
      //     lat: '34.60287',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '9a2ef8187f3944798562954343e95cab',
      //     lon: '113.53767',
      //     lat: '34.82784',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '9a4c51e61ec0493c92c50d10b9672a22',
      //     lon: '113.89342',
      //     lat: '35.31974',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '9b39762e68424cd4af541c732949461e',
      //     lon: '113.5695',
      //     lat: '34.62259',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '9b55c0da2c484e62b9955d1045af65d0',
      //     lon: '113.82362',
      //     lat: '35.29942',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '9b73fcec56ac44f4a20d49a67912454e',
      //     lon: '114.350238',
      //     lat: '36.110257',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '9b8dcae3e13f439c90df3b16d86feadf',
      //     lon: '114.29194',
      //     lat: '36.11861',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '9be7ad8124294c3b86449030cf0a86d2',
      //     lon: '113.89291',
      //     lat: '35.23898',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '9bf78565811344b0a00549212f99a2e7',
      //     lon: '113.676645',
      //     lat: '34.775277',
      //     reason: '2',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '9d25bfa1b73f4cda89fe64e85cb0e6de',
      //     lon: '113.58865',
      //     lat: '34.60894',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '9d39f9e14ca04caba2b9641e4f3f396d',
      //     lon: '114.07491693',
      //     lat: '33.25941621',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '9d3ffea819d2404586ca34acffb58252',
      //     lon: '114.17751',
      //     lat: '35.61083',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '9d5d790788ee4dd18c0329010b053242',
      //     lon: '113.21389',
      //     lat: '35.25001',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '9d75ea856f654d669dac09be6f2e7bbd',
      //     lon: '113.894471',
      //     lat: '35.304891',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '9da381575b274024b234a8d162b1b8f2',
      //     lon: '114.24518',
      //     lat: '35.66142',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '9dc4bbd688d0482b8d7922d888d9c54b',
      //     lon: '113.94018',
      //     lat: '35.29153',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '9dcfa0ff4c8745f5bd264349876ab40d',
      //     lon: '114.46742',
      //     lat: '36.14297',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '9def219a1feb4dc3ad7681a9a5b41abb',
      //     lon: '114.222325',
      //     lat: '35.579073',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '9e0610f6795a46aca2c8dde1d30d6a6e',
      //     lon: '112.27632',
      //     lat: '35.14721',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '9e3bdef43af6480fbb621a16de44d289',
      //     lon: '113.30417',
      //     lat: '34.60449',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '9e4d63e5a48d4dd39e4ecd565e7f7c3a',
      //     lon: '114.13775',
      //     lat: '35.92222',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '9e736a2fdd81430c9790e44c63a9529d',
      //     lon: '113.86247',
      //     lat: '35.30079',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: '9e8d4fbe662147f0816a752d85adcc44',
      //     lon: '113.92947',
      //     lat: '35.04344',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: '9f19cd65c57d4240b420788022096af7',
      //     lon: '113.89472',
      //     lat: '35.31569',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'a0e269fe010745678b8ca76624b2c6d4',
      //     lon: '114.352496',
      //     lat: '36.026292',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a10225cb50e5452c9194fd51ade1fdfe',
      //     lon: '114.485701',
      //     lat: '35.595301',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a1189718b20640fabd21ba260c93d0ee',
      //     lon: '114.31556',
      //     lat: '35.838804',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a1499859081a48b2ae3c596e2130aa82',
      //     lon: '113.58832',
      //     lat: '34.72414',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a15cb2e0ba914251b1d7466bfec51225',
      //     lon: '113.86318',
      //     lat: '35.32081',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'a1ac43d6b761459d90b04b07bfb39a92',
      //     lon: '113.25963',
      //     lat: '34.56661',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a1eaa50e28ea4a0f9062962b3802e992',
      //     lon: '114.4320679',
      //     lat: '35.61414719',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'a1ff464abd8243debb0ff92b3b75fe7e',
      //     lon: '113.20578',
      //     lat: '34.52131',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a22c924cc5c54fad9a19c03ecddfc159',
      //     lon: '114.37432',
      //     lat: '36.18341',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a24136fc940a467e9b16d57bb5970b57',
      //     lon: '114.28222',
      //     lat: '35.76638',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'a286f70d8064401499a00028931ffca2',
      //     lon: '114.20659572',
      //     lat: '35.6005389',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'a2a7c96161e840dfac4bad086a57390e',
      //     lon: '113.65359',
      //     lat: '35.39051',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a2e7b565af6f4a12bb2b3b803ae743d8',
      //     lon: '114.38108',
      //     lat: '36.18061',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a310b1050df74fe88880bd2da9670b46',
      //     lon: '114.22631',
      //     lat: '35.59811',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a34d2fe1887846e4ab92fba6d4797b15',
      //     lon: '114.05475',
      //     lat: '35.78854',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a3acf6d86a42425dbc83d41cd9a225d9',
      //     lon: '114.14101839',
      //     lat: '35.56945533',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a3b0e1d6b44f4292b3c92b92369b639f',
      //     lon: '114.484595',
      //     lat: '36.17203',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a3c621e9a058421e85a36c26f774538e',
      //     lon: '114.338564',
      //     lat: '36.205035',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a4bf37b8813347b8bb73176adf76fd36',
      //     lon: '113.58061',
      //     lat: '34.63316',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a4c7633f95db488dbef079ba77d19adb',
      //     lon: '113.89738',
      //     lat: '35.25178',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'a4cf4cfaf9ef45f6b539b865eda3f088',
      //     lon: '114.50687',
      //     lat: '36.12745',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a4e10ab0008d456c83c076616b5d0893',
      //     lon: '113.56003',
      //     lat: '34.78187',
      //     reason: '3',
      //     siteType: '5G'
      //   },
      //   {
      //     id: 'a52d3da8f8f44b41aa0239ad10d4ebba',
      //     lon: '113.98051',
      //     lat: '35.29061',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'a54f4095f851452ea39d2c5133fd6601',
      //     lon: '113.25527677',
      //     lat: '35.16825769',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a5ebaa723f574b0297daba57bc2a45cc',
      //     lon: '114.1772221',
      //     lat: '35.648333',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a5f4ce0bfd1d4d0b8f7d599ce17fcf70',
      //     lon: '114.61223',
      //     lat: '33.67386',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a5fd6ca752774ab5af794862c8da8896',
      //     lon: '113.62936',
      //     lat: '34.91361',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a613751f6225431babb2eeba62e78a77',
      //     lon: '114.08835',
      //     lat: '35.48674',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a61c281fe8734b0692e8ac4bf6ce76d1',
      //     lon: '113.97368',
      //     lat: '35.29461',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'a65ac4ef20924ea7a5de9a324149d826',
      //     lon: '114.14690852',
      //     lat: '35.55677406',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a6647c5a80554daa88fc102f979b7bed',
      //     lon: '113.58677',
      //     lat: '34.72693',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a6a4bff550f949dab3527cfde1fd47b3',
      //     lon: '114.27666',
      //     lat: '35.71361',
      //     reason: '2',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a6e02088d5c84e8680bdc85cc6cc95d4',
      //     lon: '113.94018',
      //     lat: '35.29153',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'a6e57b246741470ea90e7febae35dd7f',
      //     lon: '114.24501',
      //     lat: '35.54527',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a6ec0e86617445da8c36a3e0c881ed8c',
      //     lon: '113.23951',
      //     lat: '34.58661',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a72ae62e6d30406dba421c7b7dc7b499',
      //     lon: '114.181201',
      //     lat: '35.90001',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a740b16fd6364ed6b288b2188f2ab1f3',
      //     lon: '113.78009',
      //     lat: '35.42587',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a78134627c2345e9b97453d7b614604b',
      //     lon: '113.32153408',
      //     lat: '35.17268231',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a8684b437adc43f78ddf589011aea827',
      //     lon: '113.18753',
      //     lat: '34.49939',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a86f7f62c4154509a1d845508fc6307b',
      //     lon: '114.26001',
      //     lat: '35.70549',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a87887760eaa41818413c3c1617273e5',
      //     lon: '113.945361',
      //     lat: '35.726722',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a8e8ea4426854d6db26c91014c923cf1',
      //     lon: '114.119979',
      //     lat: '35.866624',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a9249ae9790041c3a4a46fc4d24399ff',
      //     lon: '114.23611',
      //     lat: '35.71944',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a95424d893cb40aa94ba32d8a9cda8cb',
      //     lon: '114.20642',
      //     lat: '35.62663',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'a96de07d6add49b499f871c01fa41597',
      //     lon: '114.28225',
      //     lat: '36.05634',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'a980342de0a2442b85084b425c684486',
      //     lon: '113.273637',
      //     lat: '35.227198',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'aae35dc048af40f4b80a00c66bf0a36a',
      //     lon: '114.28222',
      //     lat: '35.76638',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'aae78cf18c8f4989bc7d494cdc394707',
      //     lon: '114.211666',
      //     lat: '35.881251',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ab626f47db4e4d09aa464a0ed1ca3cfd',
      //     lon: '114.058631',
      //     lat: '35.389741',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ab7e88dda1f54ee68311a141a0fcb53b',
      //     lon: '114.19648',
      //     lat: '35.61809',
      //     reason: '2',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'abd522823bb94359ac0b6b68ee1f2f8e',
      //     lon: '113.64313',
      //     lat: '34.65214',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'abe58e31db25401383174ae0fc3f2c58',
      //     lon: '113.66493',
      //     lat: '34.71308',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ac033a92765c44caa50f78bddea97e03',
      //     lon: '114.168082',
      //     lat: '35.907206',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ac0a5c176fc441168b45e8c12b235498',
      //     lon: '113.37979',
      //     lat: '34.62061',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ac3cda17b1334cc3979455a5733b5c03',
      //     lon: '114.19239',
      //     lat: '35.75481',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'acd0722be12f4ffe9ec333d82504f0a8',
      //     lon: '114.19751',
      //     lat: '36.14527',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ad003ec3ebc44783a6572005a27fcd29',
      //     lon: '113.541111',
      //     lat: '34.795833',
      //     reason: '1',
      //     siteType: '5G'
      //   },
      //   {
      //     id: 'ad6bd50cf17e47c287a37fa1a603e691',
      //     lon: '113.909166',
      //     lat: '35.281944',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'addee3c9ee0c48af89f59a2e17005499',
      //     lon: '113.70146',
      //     lat: '34.87293',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ae29da5f759145fd949bbce4e94fd14b',
      //     lon: '113.69944444',
      //     lat: '34.87638888',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ae52fe1bcd1f4314bd01e67af61a854c',
      //     lon: '114.27146',
      //     lat: '35.99052',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ae74a0a6b2e1453b801df611cc227b2a',
      //     lon: '114.30842',
      //     lat: '35.56618',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ae9c255b4f194ef08863a7d19b43e178',
      //     lon: '112.986576',
      //     lat: '34.489753',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'aede0914bcf54b5eaacfe9a5dd838ce6',
      //     lon: '114.4693069',
      //     lat: '35.61287689',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'af262aec6ea649d79604ba60fa9d7241',
      //     lon: '114.37307',
      //     lat: '36.11629',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'af4727644ba4462b8378d04396082eb6',
      //     lon: '113.50857',
      //     lat: '34.66407',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'af74003a0a8a47fda54c0ed1037f29b2',
      //     lon: '113.56426',
      //     lat: '34.73528',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b00da7af8a194932b6348c523c0b50ee',
      //     lon: '114.28222',
      //     lat: '35.76638',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'b013c90064e9489298b756f7f82add9a',
      //     lon: '113.63039',
      //     lat: '34.63378',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b044ed52ca70432fad3d31401a4b7fd1',
      //     lon: '114.18001',
      //     lat: '36.14778',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b0883ed595154e9a983461e57ab38ebf',
      //     lon: '114.2113001',
      //     lat: '35.47682',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'b08c9e7d6e084b0db967c94c1d5d2cd8',
      //     lon: '114.21901',
      //     lat: '35.64441',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b0bc12e7ed704233975a35acb6343530',
      //     lon: '114.338005',
      //     lat: '36.078241',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b0edcd40b7d843d3b4657a3731c38595',
      //     lon: '114.37871',
      //     lat: '36.11148',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b1d96e6fd5574c0cba9c92b2a9e73be6',
      //     lon: '114.30610189',
      //     lat: '35.78509579',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b203b498982b455fad4226e8c4dc25ba',
      //     lon: '113.98503',
      //     lat: '35.29961',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'b20a2cc6695e4ba580edd2e80f49dc17',
      //     lon: '113.57765',
      //     lat: '34.74222',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b213cf7dec054fc493b9943056eb2509',
      //     lon: '114.268881',
      //     lat: '35.727639',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b23159ca8aa34868b365a99d9d4d3ae7',
      //     lon: '113.95375',
      //     lat: '36.019111',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b24537d57dc34ef097724138a9c7d45c',
      //     lon: '114.1507709',
      //     lat: '35.9237533',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b29fa33dbdf8434291aa7faf26b7a9d0',
      //     lon: '113.942617',
      //     lat: '36.353692',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b32e46cf49af4cbda551c65d8f5e32f6',
      //     lon: '113.86247',
      //     lat: '35.30079',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'b3460ccfdb6444e2b8ebf71c747eff63',
      //     lon: '114.43356046',
      //     lat: '35.63825386',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b3517a95fbc44e31a44a44c06f6f94b9',
      //     lon: '113.84001',
      //     lat: '35.43441',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b35ff0ceb82a44c4a590c4900a747e45',
      //     lon: '113.79702',
      //     lat: '35.46442',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b3af5e5a02204914b4710fbc43ba4ba7',
      //     lon: '113.768055',
      //     lat: '35.38501',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'b3b4879db41e4649b7077f7e60c5d6e5',
      //     lon: '114.1686554',
      //     lat: '35.86515427',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b3d4e8d13dbd416a8acb3fe5709330d8',
      //     lon: '113.75391',
      //     lat: '35.47035',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'b418a19ec059468db5b79f2cb33c360f',
      //     lon: '113.26115',
      //     lat: '35.22766',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'b4e2cecea9264a6b93a579b36d250dfb',
      //     lon: '114.38362',
      //     lat: '35.58667',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b50beff6dbe34622876202a3083a237f',
      //     lon: '114.1962531',
      //     lat: '35.630734',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b5398a793b434a01a60dba1a608f28d0',
      //     lon: '114.173496',
      //     lat: '35.494916',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b56aa78d60bc43fe96668f75b1c9e6a6',
      //     lon: '113.58258',
      //     lat: '34.42259',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b5986ca735f242e38d7c4f1087648640',
      //     lon: '110.75291634',
      //     lat: '34.49601722',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b5ec334f39fe4ee693c3a94677dd21c9',
      //     lon: '113.625277',
      //     lat: '35.040277',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b64ef1ab132c43b6a73957b310fee1cc',
      //     lon: '113.36074',
      //     lat: '35.25703',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b699ce031f574eceac2a5c0e0ac27fa8',
      //     lon: '113.50891',
      //     lat: '34.67114',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b6e46beba50745f19b618367e92eb6a1',
      //     lon: '114.66212',
      //     lat: '35.14727',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'b77a3c510d9245aa85a624ab9a499a6b',
      //     lon: '114.06521',
      //     lat: '35.38798',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'b7ba63efddd143d29fd009454f807c5f',
      //     lon: '113.86821',
      //     lat: '35.58331',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'b7bf00645db04fb3ae0347ddcb52b098',
      //     lon: '113.62726',
      //     lat: '34.643921',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b7c59636a5ce4fd4820d9888d281e302',
      //     lon: '114.289943',
      //     lat: '35.637675',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b7e78b79ffdc421da9125e90a551e7ea',
      //     lon: '113.66302',
      //     lat: '36.17067',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b7f9e11680c4465d910a35c55f67fd30',
      //     lon: '114.119729',
      //     lat: '35.462499',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'b81d7920cf72478a8221c219d54da4cc',
      //     lon: '114.06435',
      //     lat: '35.84871',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b89d93dd073e4eb28f35756bbae254e8',
      //     lon: '113.7511667',
      //     lat: '36.24658333',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b8c50e227e344191a6ff786333f8f431',
      //     lon: '114.29775',
      //     lat: '35.69245',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'b8dcc9b4fd4047f0b6d1d6ff93844f81',
      //     lon: '113.68230937',
      //     lat: '36.16664509',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b9036e80cd4d4897b0097748b6779f7a',
      //     lon: '114.19648',
      //     lat: '35.61809',
      //     reason: '2',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b90fa69ffc854feb958b9c9fe7557b5e',
      //     lon: '114.139682',
      //     lat: '35.476013',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b92317363b1648c2878817df5f3d250a',
      //     lon: '114.20399666',
      //     lat: '35.92061315',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'b93c9feb8f3d4dd1b0668683b53a0918',
      //     lon: '113.69578',
      //     lat: '35.35217',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'b96a2a64fca44dd18bbf76d77c347f0d',
      //     lon: '114.295833',
      //     lat: '35.756111',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ba075dbfc8c64f0c905ba8d2ceffcec3',
      //     lon: '114.28222',
      //     lat: '35.76638',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'bafffb98fa4c464691d423051732aaf5',
      //     lon: '113.38347',
      //     lat: '35.14707',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'bb071df3a06f4e6f904260dc99672b44',
      //     lon: '114.18277',
      //     lat: '35.72161',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'bba9beb8684e42d2b5a70dcaaebc113b',
      //     lon: '113.76496',
      //     lat: '35.43892',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'bbc559546ed24225839ff36fa18bfd0c',
      //     lon: '113.77426',
      //     lat: '35.45964',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'bc044ebe93354caa8d5a44d098dadfcd',
      //     lon: '114.17883',
      //     lat: '35.57396',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'bc12450161f3435d95cf5e6fe48c1402',
      //     lon: '113.27109',
      //     lat: '35.21595',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'bc1b353cd87644e59aceb8dd9bfc970e',
      //     lon: '114.38294',
      //     lat: '36.14105',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'bc91475e84134cd396596c44bd199735',
      //     lon: '114.141666',
      //     lat: '36.036666',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'bcdaa8f126784a46be456ffc1ae9c1a1',
      //     lon: '113.28405',
      //     lat: '34.58157',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'bd68a7d15d5f4e2f8855e812fe0bada3',
      //     lon: '113.950783',
      //     lat: '35.410395',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'bdc7d25d6dbf49c09466899953e1706f',
      //     lon: '113.80835',
      //     lat: '34.83219',
      //     reason: '3',
      //     siteType: '5G'
      //   },
      //   {
      //     id: 'be31581997c443889e6e9b2bdafe18fb',
      //     lon: '113.71601',
      //     lat: '35.43681',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'be5f726f3e4743c9b479c125807adbc8',
      //     lon: '113.96301',
      //     lat: '35.41421',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'be9719466ab74dd9bd8b652d29baf2ad',
      //     lon: '113.86612',
      //     lat: '35.43251',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'beb162ed17ff4022bfbc267700891fd1',
      //     lon: '113.19445',
      //     lat: '34.51291',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'beeac8ca1c54425c89b06ec91995dd9e',
      //     lon: '114.25897',
      //     lat: '35.73718',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'befb4810c304450b993d8ed4d92a6912',
      //     lon: '114.18183',
      //     lat: '35.896889',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'bf06cf0478ca4011a6261f5cc93e803f',
      //     lon: '113.34569',
      //     lat: '35.15683',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'bf191376693f43759243e8c7f32e4307',
      //     lon: '114.0933456',
      //     lat: '35.73312759',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'bf29799285294025bd4f1f49ea15f0b7',
      //     lon: '113.26021',
      //     lat: '34.58801',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'bf35a81542da433aa3cc3fe12a7df74b',
      //     lon: '113.96301',
      //     lat: '35.41421',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'bf4b8de21b3a4a299bcd372532301013',
      //     lon: '114.18250144',
      //     lat: '35.88920654',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'bf583a25721048ff959bfe2be6816950',
      //     lon: '115.65876',
      //     lat: '34.32552',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'bfc2bab2cda64566b9aa2bc98762e1e7',
      //     lon: '114.08686',
      //     lat: '36.27211',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'bff9c6dbf79e4912a288302aa8cff3d3',
      //     lon: '114.585101',
      //     lat: '35.877231',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c0109c93a3b948559fd7c1538a86a668',
      //     lon: '113.89688',
      //     lat: '35.27601',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c0404e2ae79b402bbbffe36939db2e8b',
      //     lon: '114.05704',
      //     lat: '35.39431',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'c05329c0d49f4dd68ca45d3c796d0033',
      //     lon: '114.019394',
      //     lat: '35.252579',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c085a40824e34ec0b92d05ec83ca0ba6',
      //     lon: '113.26392',
      //     lat: '35.235907',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'c0a15fa738bf454aadfb4601b252e2d5',
      //     lon: '113.58007',
      //     lat: '34.55814',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c0f346f9b46647a99e3d1c5646b763d4',
      //     lon: '113.74025',
      //     lat: '35.41512',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c125a22b9cea42c985aa3ec8f5f438e9',
      //     lon: '113.57984',
      //     lat: '34.78271',
      //     reason: '1',
      //     siteType: '5G'
      //   },
      //   {
      //     id: 'c137003dfcfd415abf8791bee7846920',
      //     lon: '113.95001',
      //     lat: '35.34083',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'c1450963e2d843a183c53f395ab968aa',
      //     lon: '113.51087',
      //     lat: '34.63608',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c1751251cb844e2182907504d69e244a',
      //     lon: '113.49281',
      //     lat: '34.79101',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c19045aad68d49bebea78aabcd51453e',
      //     lon: '114.07007',
      //     lat: '35.38782',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c19453364cff4f4c8adf7eb6ca1f9694',
      //     lon: '114.03657',
      //     lat: '35.95943',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c1ae4cd178344b69a165c0c3c93b0f29',
      //     lon: '113.64894',
      //     lat: '34.64444',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c1e0c019fd414be18e48aee837fa3a6f',
      //     lon: '113.52538',
      //     lat: '34.78411',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c1e108087d0b4624aa0b795f8519c37c',
      //     lon: '114.26888',
      //     lat: '36.19668',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c25c260cbb944f1aacc5545c3e460d65',
      //     lon: '114.35647',
      //     lat: '36.11133',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c285486fffd742ccb81269b73e2b56ff',
      //     lon: '113.33328',
      //     lat: '34.56728',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c2c37d4af5264b9f978dd3bd9124b81e',
      //     lon: '113.65599',
      //     lat: '34.83021',
      //     reason: '3',
      //     siteType: '5G'
      //   },
      //   {
      //     id: 'c303f2cd1f2648caa0d61a9cb56d749c',
      //     lon: '114.16407',
      //     lat: '35.897747',
      //     reason: '2',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c3146447731d4dc0acdb48563e54357e',
      //     lon: '114.19612',
      //     lat: '35.61375',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'c3594d5f906140a8b9fafbc8eda6cf37',
      //     lon: '114.27251',
      //     lat: '35.95277',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'c3d3c917f14a438fba4b2ccc0b5d0807',
      //     lon: '114.48652',
      //     lat: '36.04571',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c3ebb7dfbc294ee7a30a2d4d2411655e',
      //     lon: '114.42871',
      //     lat: '35.59321',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'c417b6c8a4b6465e8ff2fedb22c8f1e6',
      //     lon: '114.296531',
      //     lat: '35.719698',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'c43c1bed3567441794521d5bd0bac59a',
      //     lon: '113.59032',
      //     lat: '34.87815',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c44d064eaf88413da52ab7fcff88fd45',
      //     lon: '114.14690852',
      //     lat: '35.55677406',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'c4922ea08a924f47a00ecadafb0b4c25',
      //     lon: '116.46058',
      //     lat: '33.95113',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'c4a843c722ff4d518fb07615dbf0bde7',
      //     lon: '113.78701',
      //     lat: '35.46031',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c4c08779954f4535ab014ca41d4ae27f',
      //     lon: '113.55503',
      //     lat: '34.55552',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c50a621ada2949b794c3cecf6a49c3f2',
      //     lon: '113.79699',
      //     lat: '35.38416',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'c5249ac74b1c4d8db7566e890f1ae57a',
      //     lon: '114.16333',
      //     lat: '35.53916',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c530f41d29a847c59f5c661a3e48c3cb',
      //     lon: '113.21874619',
      //     lat: '35.19814975',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c581a3a2524349ce9c5496a5d18d25ce',
      //     lon: '113.27003965',
      //     lat: '35.21290511',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c5ddc155f2a8470483376d3008b53189',
      //     lon: '114.19648',
      //     lat: '35.61809',
      //     reason: '2',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c5e61124592c4130bf6af96796105524',
      //     lon: '114.24093',
      //     lat: '35.98222',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c5eb1deb574640f18d6ba9a72cf61bcc',
      //     lon: '114.25701',
      //     lat: '36.13141',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c5fc07e1524347f1917a6fe213d0234b',
      //     lon: '114.1753311',
      //     lat: '35.60277176',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c66992ad3cc04aabbc3eee4b32dc1909',
      //     lon: '114.133232',
      //     lat: '35.666395',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c6bc546e19b043a89f569226fd143800',
      //     lon: '114.07357',
      //     lat: '35.6031',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c6f05a84597445c68de625cee965bf97',
      //     lon: '113.59083',
      //     lat: '35.40979',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'c6f50409f4af4c448ba6a3c9aa266399',
      //     lon: '114.34034',
      //     lat: '35.93291',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c7286e9e4a134c4dacff9632d7a7a28b',
      //     lon: '113.56403',
      //     lat: '34.75068',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c75cfe1fa2bc482e9582c10c0a3fe2d4',
      //     lon: '114.21176',
      //     lat: '35.64487',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c7e3c985a1ec49f6af9e67841630aa8b',
      //     lon: '114.41875',
      //     lat: '35.57246',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'c81e5ede46ff4578b1a16cec55d317c2',
      //     lon: '114.3588104',
      //     lat: '35.50709915',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c822c7c8de534231b1c7e45a1ce5e145',
      //     lon: '113.79122',
      //     lat: '35.36711',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'c868fc34696d4c0cacb8f95389137dcd',
      //     lon: '114.23388',
      //     lat: '36.18062',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c878965dcbba480b97a97afa090cd5d8',
      //     lon: '113.514501',
      //     lat: '34.91251',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c88caf758cad4503b4fa97658b6c732d',
      //     lon: '113.89342',
      //     lat: '35.31974',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'c94f221fe9c1483690e0067afc5f7dd4',
      //     lon: '113.52522',
      //     lat: '34.82618',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c95ec4de1a964eccb937dd4136d59e08',
      //     lon: '113.90695',
      //     lat: '35.26167',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'c99f335a89dd46cebfd5bccbf3f6b436',
      //     lon: '114.25765',
      //     lat: '35.56213',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'c9f61b5d4cc34b28b2b149f2edb0e545',
      //     lon: '113.52036',
      //     lat: '34.81969',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ca59635b35914a0d828b6438df008403',
      //     lon: '113.586111',
      //     lat: '34.722777',
      //     reason: '1',
      //     siteType: '5G'
      //   },
      //   {
      //     id: 'cacadcd28a5a4c9085ecb7114e98f5ed',
      //     lon: '113.87746',
      //     lat: '35.28248',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'caf20b6b84324d11b3bb65a26c90ba29',
      //     lon: '114.21862',
      //     lat: '35.66582',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'cb117043f1be4fcab4c95bb404079e39',
      //     lon: '113.92062',
      //     lat: '35.28825',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'cb33c6c7bd124778a8ab56e880deca07',
      //     lon: '113.76772',
      //     lat: '35.47761',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'cb65f39476aa45cca78beb858516ae1c',
      //     lon: '114.174971',
      //     lat: '35.632059',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'cb9ac9909e2343c08c838263b4e76546',
      //     lon: '113.50831',
      //     lat: '34.37096',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'cc2c44a72c5c4eda92761b82b79c2d2d',
      //     lon: '113.35721',
      //     lat: '35.23211',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'cc47cfe1a1d3487fa450a4a8f7c172f3',
      //     lon: '113.940741',
      //     lat: '34.948607',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'cc614d4b4f1d4c6b8381c17af08c9c4f',
      //     lon: '114.1435928',
      //     lat: '35.93622208',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'cc64655b61024c2c9706337138727d06',
      //     lon: '113.76772',
      //     lat: '35.47761',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'cc6c2e3bcdcc4484aa878037b7f67e47',
      //     lon: '114.2261505',
      //     lat: '35.69322968',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'cca75c46afd94157abaa214cc57d4faa',
      //     lon: '113.38567',
      //     lat: '34.56856',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'cd15ba44a0984449a717b5e5212a1e60',
      //     lon: '114.1435928',
      //     lat: '35.93622208',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'cd66256f2d9843f681a191f6cd9b5242',
      //     lon: '113.79436',
      //     lat: '35.66387',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'cdacb438a33d42eeb642ac9e14dff353',
      //     lon: '113.706944',
      //     lat: '34.768888',
      //     reason: '1',
      //     siteType: '5G'
      //   },
      //   {
      //     id: 'cdbfec70b016422eb515d0574d4a7cab',
      //     lon: '113.62893',
      //     lat: '34.86809',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'cdcfd519eba248f8837bdb43c531b166',
      //     lon: '114.28278',
      //     lat: '36.109279',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'cddab3425488471a9f169d1e4c5f55c3',
      //     lon: '113.599166',
      //     lat: '34.784166',
      //     reason: '1',
      //     siteType: '5G'
      //   },
      //   {
      //     id: 'cded12b74cff474a80997736024ba6e9',
      //     lon: '114.12645131',
      //     lat: '35.7924883',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ce05f11a199e4e65b7eed189d41f6ddf',
      //     lon: '114.08171',
      //     lat: '35.99978',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ce1809f95db34de399a278d5ed8affbe',
      //     lon: '113.57815',
      //     lat: '34.68041',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ce26da3b33a1463c94c2f405846acff9',
      //     lon: '114.06257',
      //     lat: '35.40681',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'ce76d3e0183d4a6cb2d41c001999cfa4',
      //     lon: '113.76496',
      //     lat: '35.43892',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'ce87cd5d1f5e47029c611e00a14a070d',
      //     lon: '113.52369',
      //     lat: '34.70771',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'cea91f071a1d43bd95a13794033fb703',
      //     lon: '113.98298',
      //     lat: '35.29841',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'cee09d925aa44bdba8a72b657baa5ec7',
      //     lon: '113.91688',
      //     lat: '35.48736',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'cefa551951f4426e80e7959c4b4db34e',
      //     lon: '114.23892',
      //     lat: '35.49611',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'cf3b1a06f41444758f8c4ae449910e54',
      //     lon: '113.97402',
      //     lat: '35.25591',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'cf76adf185d546d5961bc0f1030b7d3e',
      //     lon: '114.282453',
      //     lat: '35.623751',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'cf7af90476b64ffb8db05f1026f3cd40',
      //     lon: '113.990998',
      //     lat: '35.333977',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'cf8cb066a393450f9c8c24e1f83c4535',
      //     lon: '113.31636',
      //     lat: '35.14884',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'cfac06c2271d4e9083e6fdbe67f01576',
      //     lon: '113.51721',
      //     lat: '34.80685',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'cfbf88f7012c4382a36db3b7df0047d2',
      //     lon: '114.127823',
      //     lat: '36.027668',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'cfdaede0114b4fb0a60c67921690371d',
      //     lon: '114.32993',
      //     lat: '36.10884',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd0325d324c584825a9d594472d09ca89',
      //     lon: '113.77194',
      //     lat: '35.45194',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd1282342b0ee403081ca887cddbdaf76',
      //     lon: '114.45198298',
      //     lat: '35.58473476',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd12ae2068c2441c9b58ee282f14a7dea',
      //     lon: '113.53349296',
      //     lat: '34.66869574',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd12fb33339724476a31b73d8b9d19461',
      //     lon: '113.81161',
      //     lat: '35.45741',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'd13e4ffbd60b4924bb5735de916d29c9',
      //     lon: '113.64786634',
      //     lat: '34.68097307',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd145880c60344bed9887995f4965b5da',
      //     lon: '114.16667104',
      //     lat: '35.55499346',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd14ad6316af847fd8e558deed0f39007',
      //     lon: '113.89126',
      //     lat: '35.31856',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'd1641121bbca4f96b5e1e4fea6db9efd',
      //     lon: '114.092943',
      //     lat: '35.390024',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'd1ae29785d7f43e4b8c41483a10c6bef',
      //     lon: '113.46905',
      //     lat: '34.60951',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd1b1d10e0e73430d8941aca7dce1de0e',
      //     lon: '114.051741',
      //     lat: '35.001147',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'd1e0fab5e7d942148c4bf35f8acb58d6',
      //     lon: '113.555328',
      //     lat: '34.660172',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd28cd76aa97d4e4e8e4eed85c24b462e',
      //     lon: '113.89377',
      //     lat: '35.26272',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'd2a6cb1b4bed420c82d18fa8cfeedd22',
      //     lon: '114.23654',
      //     lat: '36.24954',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd2f543299f664fedbb16306a8f7f9fac',
      //     lon: '114.17430729',
      //     lat: '35.89240947',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd345d037377d4d099c4a210386117cc1',
      //     lon: '114.08457',
      //     lat: '35.34802',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd36cb1df1e054b72a7d86fb584b87313',
      //     lon: '113.58919708',
      //     lat: '34.64730337',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd3a3e9e4b69048dfb9b06806b31e8c1b',
      //     lon: '113.86829',
      //     lat: '35.45559',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd4deff5a7ff74093852a90fa7e4c6e53',
      //     lon: '114.21115',
      //     lat: '35.68056',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'd4e5394b044e444789e9758ac8fc23d2',
      //     lon: '114.24892',
      //     lat: '35.55194',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'd4e8ecd46f3d42399d3ac87d449fb5b5',
      //     lon: '114.26601',
      //     lat: '35.73481',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd517df709cc4478e85affc4b9cdc5521',
      //     lon: '114.25254732',
      //     lat: '35.92099979',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd537c8e47e334fc3991df808e676b031',
      //     lon: '114.325911',
      //     lat: '35.696161',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd56c84b6c99d404fa63534f086b5baf0',
      //     lon: '114.26577',
      //     lat: '35.68282',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd59ba6cc99324e57bce5a945188062ec',
      //     lon: '114.165222',
      //     lat: '35.90661',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd5a851e6e95c4f55814834c43cdbc08e',
      //     lon: '114.268832',
      //     lat: '35.617344',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd5aa7b5855714e10be7ed26518f4bd3b',
      //     lon: '114.19333',
      //     lat: '35.57972',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd661b0e0034f43429537dadbdc3e21ad',
      //     lon: '114.39359665',
      //     lat: '35.54668347',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd66f2fe1a46f4f6ca21f9cb7716a9337',
      //     lon: '114.26691',
      //     lat: '35.53192',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd6937c58c2a34f47be169b4770732ddf',
      //     lon: '114.1677399',
      //     lat: '35.70095825',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd6b1c26ad6724359b5a0eec2a03a8b9e',
      //     lon: '112.51801',
      //     lat: '33.78782',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd6dba6bb5b5245d0a529d2c9d128dc3f',
      //     lon: '114.38464',
      //     lat: '35.61541',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'd716a382c98c4cb6916bedf4811ad855',
      //     lon: '110.65886',
      //     lat: '34.013886',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd731424f6593485c8b286b5d041d3b17',
      //     lon: '114.160057',
      //     lat: '35.807999',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd7611e0603004c6298f85469fb0b1df4',
      //     lon: '114.224266',
      //     lat: '35.929845',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd79259ca7bd34680bbcc5df5f2e22437',
      //     lon: '113.52295',
      //     lat: '34.80416',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd7bb3656dfa84921a28096849f9250ce',
      //     lon: '114.46259',
      //     lat: '36.15594',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd7d658a5fa9341258e2ac3f9428f7619',
      //     lon: '113.86806',
      //     lat: '35.34501',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd7e9123b897e47f6835a38b06904fbdd',
      //     lon: '113.66273',
      //     lat: '35.34650001',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd7f5183bdb324d6788377ba21d345c33',
      //     lon: '114.285507',
      //     lat: '35.528099',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd8a918c9bbc84d58a93b753dda7330fd',
      //     lon: '114.43116',
      //     lat: '35.57604',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd8bd9efa9f0e473bb142bd8c4609edbf',
      //     lon: '113.62188',
      //     lat: '34.69303',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd8c5045891954946a900328353c1fb0a',
      //     lon: '114.18891728',
      //     lat: '35.93943029',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd8c5563639864561ac570ca1a700f1f3',
      //     lon: '114.07007',
      //     lat: '35.38782',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'd8e6705298dd42f3bb3850ede6b4389d',
      //     lon: '114.285133',
      //     lat: '35.722516',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'd8ec9a986f40425f8f323f6f30a81fb3',
      //     lon: '113.92388',
      //     lat: '35.385111',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd8ff20f1a0524fa090fab53b54ddc486',
      //     lon: '113.86201',
      //     lat: '35.30811',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'd9215f8f52494e988089455d434782b3',
      //     lon: '113.86911',
      //     lat: '35.47831',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd92836f0ac7e4bdfb96b9ce55c7cec9e',
      //     lon: '114.18750644',
      //     lat: '35.71094237',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd949369620034f3bb7cfd5ca7ae34e58',
      //     lon: '113.93537',
      //     lat: '35.04376',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'd95d1508d4b84c99a57c9fb4bd13c29d',
      //     lon: '113.61119',
      //     lat: '34.71985',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'd9804dd0ae51447686fcfb973f2d975c',
      //     lon: '114.4693069',
      //     lat: '35.61287689',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'd996655634d248c68a452c9d95012952',
      //     lon: '114.22631',
      //     lat: '35.59811',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'da01b4d9e3aa489fa68bd91fb209c414',
      //     lon: '114.17554647',
      //     lat: '35.90188713',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'da1cb978ce094e4cbe562005fd4435a9',
      //     lon: '113.647777',
      //     lat: '34.7625',
      //     reason: '3',
      //     siteType: '5G'
      //   },
      //   {
      //     id: 'dad67376847d4d63a8c31059e20b103d',
      //     lon: '114.32783',
      //     lat: '35.771935',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'dae262eae5c1471dbec2cb937f4bdff7',
      //     lon: '114.21861',
      //     lat: '35.76861',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'dae79567c1f04999a4c0db64fb365237',
      //     lon: '114.168082',
      //     lat: '35.907206',
      //     reason: '2',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'db0d35cebe21456db7cfbe4e2906874b',
      //     lon: '114.212222',
      //     lat: '35.629722',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'db3e2d16559f48bb9837639f3dbe395e',
      //     lon: '114.28181',
      //     lat: '36.23161',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'db647797b2ab4742a3c3f4eaef4638ba',
      //     lon: '113.80587',
      //     lat: '35.203156',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'dbd1ea2b43b8417694aec30d118edd14',
      //     lon: '113.27862',
      //     lat: '35.20701',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'dbe01a31d3584539a6c0ac7c6e016892',
      //     lon: '114.13434',
      //     lat: '35.64981',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'dbf5633aac5847dc8f6f645b4f206342',
      //     lon: '113.60487',
      //     lat: '34.72675',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'dc256b1befbf48d2ac2775d4415c9133',
      //     lon: '113.71406',
      //     lat: '36.21485',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'dca258efbcd94eeaa24fd8344ea9ac78',
      //     lon: '114.45198298',
      //     lat: '35.58473476',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'dcf6e9a5845a48f0ad9eafbc0647a517',
      //     lon: '114.12610531',
      //     lat: '35.55492363',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'dd381a6f6c004472beacd95d7bd188b9',
      //     lon: '114.109764',
      //     lat: '35.444184',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'dd5d201310624950914baf4295440b75',
      //     lon: '114.28222',
      //     lat: '35.76638',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'dd67b7a445034a168134567561a47e45',
      //     lon: '113.90722',
      //     lat: '35.42861',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'dd96fd8b1aad42dcb398cb13d1142817',
      //     lon: '114.337362',
      //     lat: '35.985717',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ddcc61dbef8147ddbfec3d5810a00f34',
      //     lon: '114.18636',
      //     lat: '35.92061',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'de89f9a38d4b4de48ccdff3f02813829',
      //     lon: '114.035667',
      //     lat: '35.424923',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'dea83012fc1749e5a36c7a52385d4297',
      //     lon: '113.68241',
      //     lat: '34.75623',
      //     reason: '3',
      //     siteType: '5G'
      //   },
      //   {
      //     id: 'def081090f7f4316af933860ef5c08fe',
      //     lon: '113.84667',
      //     lat: '35.36056',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'df95cf59cad4414984562386620ed99d',
      //     lon: '113.664612',
      //     lat: '34.858942',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'dfd79df87ec0499fa7d635e56b58eb81',
      //     lon: '113.54878',
      //     lat: '34.67268',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'dfeb58c72039492a9dfd34f392e892cc',
      //     lon: '113.23194',
      //     lat: '35.20222',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'dff92d86dc6b432f93d1bb22a1557388',
      //     lon: '111.03953',
      //     lat: '34.684001',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e00af0e84d3c4059ad1feaa15aa8bdfc',
      //     lon: '113.25686',
      //     lat: '35.18837',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'e0ab649ab7ca470fab0e34545594c365',
      //     lon: '113.81821',
      //     lat: '35.36865',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'e0b80334b8b1470ca966d9c66fca85b4',
      //     lon: '114.282453',
      //     lat: '35.623751',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'e1003c8095e645b689210bcc22e436e9',
      //     lon: '113.35067359',
      //     lat: '35.17191054',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e156d6655c37461aab891750ad6470a9',
      //     lon: '114.31311',
      //     lat: '36.02583',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e18f791e1b984686b5c0b8031b2e433b',
      //     lon: '113.928108',
      //     lat: '35.182575',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'e18fa35503c94fb4b16af8866d92ad1a',
      //     lon: '114.20399666',
      //     lat: '35.92061315',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'e1e7ef3ce5384385a2bc7f5c16ab8e71',
      //     lon: '113.58524',
      //     lat: '34.43544',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e23355f37e2a4dfa869d2ba152a25e12',
      //     lon: '113.22171',
      //     lat: '34.59955',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e2457f8b4e03448bb4e3921a2b8960b1',
      //     lon: '114.48552',
      //     lat: '36.11398',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e25543535116489982046e29c4289db1',
      //     lon: '114.21211',
      //     lat: '35.63814',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'e2c0c38e004a4e5aa08cca5b44dfd1a6',
      //     lon: '113.59083',
      //     lat: '35.40979',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e2e4eed0619b45769ff0a61976bda4c5',
      //     lon: '113.59442',
      //     lat: '34.72051',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e3ae76033d5b46cabd9573d376c042c4',
      //     lon: '113.86006',
      //     lat: '35.29991',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e3c079ad0b8f4863b6b32e7ea2b6f049',
      //     lon: '114.20575',
      //     lat: '35.660187',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e3c8d3fa69ec42a9a892b5dc0a5c33ec',
      //     lon: '114.2096809',
      //     lat: '35.93511',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e3d518e6efcf4bbab1a571cf748aba56',
      //     lon: '114.28222',
      //     lat: '35.76638',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'e413568862144916a44b50bfdf7e6120',
      //     lon: '113.643277',
      //     lat: '34.775111',
      //     reason: '2',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e4182a578350406ab460e120e195dbdf',
      //     lon: '114.20971',
      //     lat: '36.12491',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e45f7858b04444c1a03d33fdb2460d9a',
      //     lon: '113.59317',
      //     lat: '34.66571',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e4671c92e57244f5bc68b5b2f52ad7c1',
      //     lon: '114.126944',
      //     lat: '35.920555',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e47b500ab0e44f57b8764cbd0c0d0a74',
      //     lon: '114.25897',
      //     lat: '35.73718',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'e4fc43087e2a4fdf8d2acdad7c63158f',
      //     lon: '114.212235',
      //     lat: '35.907279',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e52ab38ed0a7474aab17f9a540953b8f',
      //     lon: '114.29001',
      //     lat: '35.48481',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e55116be596840eda221988473970026',
      //     lon: '113.89688',
      //     lat: '35.27601',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'e563c12976db4238ae65ec00f0f1069e',
      //     lon: '114.171666',
      //     lat: '35.954166',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'e589f025765f455192d1cf8709bee329',
      //     lon: '113.861549',
      //     lat: '35.26302',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'e58f0dbf98444308aeaad46f658a6523',
      //     lon: '114.251501',
      //     lat: '35.651523',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'e598a83d09fd4ddeb0c124587a5a45ad',
      //     lon: '113.97332',
      //     lat: '35.28842',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'e5b97fb3df97460fa49c63141bfccdf0',
      //     lon: '114.32904',
      //     lat: '36.10215',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e5c3c9e25879489ca7e50170d68e9699',
      //     lon: '114.248628',
      //     lat: '36.034693',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e611cf2069e246fc87fef6733cb8cdc7',
      //     lon: '114.363191',
      //     lat: '36.172454',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e65ffe4fbd424bfdb5da525e45e32150',
      //     lon: '113.96111',
      //     lat: '35.69845',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e66f3965991b437c9ae4074e550b8cd2',
      //     lon: '113.604983',
      //     lat: '34.631901',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e6932948f4294b8abe8afb99d9d9e1d6',
      //     lon: '114.1096649',
      //     lat: '35.90054703',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e6b4c1134e854c9bb61385648e42150d',
      //     lon: '114.30483',
      //     lat: '36.24237',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e70ea23f3f6642f895635ccb25e5bf57',
      //     lon: '114.32073',
      //     lat: '35.74818',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e7fa71b56edf4c8881365b4aa0d08694',
      //     lon: '113.66273',
      //     lat: '35.34650001',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'e821b40ec339429d86fc4f72b5bc2626',
      //     lon: '114.17079',
      //     lat: '35.89734',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e8294884c8dd4092ad915d3ab682b056',
      //     lon: '114.19648',
      //     lat: '35.61809',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e8a2c2bbd8cc4992ab67db70c2c02307',
      //     lon: '114.1879034',
      //     lat: '35.82640811',
      //     reason: '2',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e8f27b63f0964d729c3a6c4a62889701',
      //     lon: '114.247101',
      //     lat: '35.95887',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e8fbea0fc7d8449798786854277e8f7c',
      //     lon: '114.18173432',
      //     lat: '35.90353833',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e955b916ed91496da3963ddbe37a6118',
      //     lon: '113.93701',
      //     lat: '35.40633',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e95d9d415cee481496998e925f545627',
      //     lon: '114.088581',
      //     lat: '35.771106',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e95eff7ae3b64e24a4880ce713b73a72',
      //     lon: '113.62032',
      //     lat: '34.83814',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e971e1bf9e4048e297c0009f6ffce2d1',
      //     lon: '113.95001',
      //     lat: '35.34083',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e9e18cfa067d49559ccc863a33ed6f73',
      //     lon: '113.30584',
      //     lat: '34.57925',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'e9f3cbb48ae644518f8baa46a75b5fd4',
      //     lon: '114.1807',
      //     lat: '36.06102',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ea0d1a8d12514ca2a054d8a1b3fb02b1',
      //     lon: '113.47201',
      //     lat: '35.39148',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'ea1c05ebdc1f4e8dbb17d75a87bf3433',
      //     lon: '114.292274',
      //     lat: '36.104081',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ea9cc920b5364e6ab5238006ffabb149',
      //     lon: '114.00172938',
      //     lat: '35.76164627',
      //     reason: '2',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'eb0a315508bf41d7b2f44d4cc8418233',
      //     lon: '113.76351',
      //     lat: '35.49483',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'eb2bfd4bdb2b4f72be73bfa6d66086e3',
      //     lon: '114.17448117',
      //     lat: '35.91546271',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'eb83541a76894bc4918c1d38f1b623d5',
      //     lon: '113.86821',
      //     lat: '35.58331',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ec5f95bc87ba4641b3cf11f381388a8f',
      //     lon: '113.67359',
      //     lat: '34.76031',
      //     reason: '3',
      //     siteType: '5G'
      //   },
      //   {
      //     id: 'ecf8116e032f420d8921b67255953f7f',
      //     lon: '114.28222',
      //     lat: '35.76638',
      //     reason: '2',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ed283c4e5e594a75bdf80512b3983f26',
      //     lon: '112.97689676',
      //     lat: '34.75301548',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ed4bd06054904483abbc92169058dafb',
      //     lon: '113.66002',
      //     lat: '34.86042',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ed5bb66c5c664b079d6dbf522a564e7f',
      //     lon: '113.654166',
      //     lat: '34.833055',
      //     reason: '3',
      //     siteType: '5G'
      //   },
      //   {
      //     id: 'ed7467f6cc364fea9426beb147d84d2f',
      //     lon: '113.226063',
      //     lat: '35.207004',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ed97d49721734bedb97b5a087b45ff4e',
      //     lon: '113.63632',
      //     lat: '34.71898',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ed9e656eaad64189af561dd2b7fd0da5',
      //     lon: '114.03657',
      //     lat: '35.95943',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'eda00ad13f334be9be839eb609d2381c',
      //     lon: '113.60413',
      //     lat: '34.70349',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'edad6c2160cf45df9183e549f8f416ae',
      //     lon: '113.66995',
      //     lat: '34.68958',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'edc0ece87c174d2fa43c8af9e4c9e09e',
      //     lon: '114.13602412',
      //     lat: '35.82920041',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ede61ff4e3e74667a7e8d0d07e19958e',
      //     lon: '114.22726',
      //     lat: '36.02471',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ee12c9f89eae4be2aa19807e5eabd8f2',
      //     lon: '114.40201',
      //     lat: '35.54324',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ee35c12084244f96931d14ac86a75d6d',
      //     lon: '113.71428',
      //     lat: '34.75422',
      //     reason: '1',
      //     siteType: '5G'
      //   },
      //   {
      //     id: 'ee75c72e8f0e4957a102549ea8a10ea9',
      //     lon: '113.39992',
      //     lat: '34.56471',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ee9401a962274b4cb9a721e0b36355ce',
      //     lon: '114.059868',
      //     lat: '35.391102',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'ee9801ae05964bc095f233d4c2e79cdd',
      //     lon: '113.601111',
      //     lat: '34.789722',
      //     reason: '1',
      //     siteType: '5G'
      //   },
      //   {
      //     id: 'eeb7c01f46d74ab282d6831a0d321945',
      //     lon: '114.25627',
      //     lat: '35.94102',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'eee933877532456bb68580f61b119b44',
      //     lon: '114.14176941',
      //     lat: '36.01244975',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ef0ebf0f3b164b6f8dabe2da1b401c9f',
      //     lon: '113.37292',
      //     lat: '34.58711',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ef3b0599e5524e72897e87314ab93117',
      //     lon: '114.035667',
      //     lat: '35.424923',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ef44a571cbec439891f8073ea7306afe',
      //     lon: '114.00172938',
      //     lat: '35.76164627',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'efbdec4ebd824d04881c4563bead761a',
      //     lon: '113.940741',
      //     lat: '34.948607',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'f0408b5aee6e42d389a1de10cb29efe3',
      //     lon: '114.325911',
      //     lat: '35.696161',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'f069e2ba1f1c408f9657418e6445b243',
      //     lon: '114.23796',
      //     lat: '35.96754',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'f0765dbca46347ac9d7503621e695ed3',
      //     lon: '113.50015',
      //     lat: '35.40116',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'f0a66a8ba24e49138917d3e6584ae283',
      //     lon: '113.85711',
      //     lat: '35.29631',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'f156ba3ec15746608240065565707564',
      //     lon: '114.37029299',
      //     lat: '35.61483706',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'f1a36d667c8542438f3fa3d9075394a0',
      //     lon: '113.77241',
      //     lat: '35.37763',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'f1fab76bee734652a7d20873da8b4bd6',
      //     lon: '114.29001',
      //     lat: '35.48481',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'f1fc5ef21b3b4672899fbb5e36352a01',
      //     lon: '114.27848697',
      //     lat: '35.93828367',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'f27297a4be884ec6b6c3418161680308',
      //     lon: '114.261398',
      //     lat: '35.943672',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'f28f4f3887e54d2085c71d0f509f6eed',
      //     lon: '113.86101',
      //     lat: '35.30591',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'f2a91b336e2a4403a0abe776c3dc6c92',
      //     lon: '114.004833',
      //     lat: '35.452973',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'f2bf1e270a354e5abd425154049e3f5f',
      //     lon: '114.28222',
      //     lat: '35.76638',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'f3d7f0a7a8f64f809a64b694e641f418',
      //     lon: '113.48283',
      //     lat: '35.40353',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'f3e9a1265eae4bbfbc3fa86e63be6887',
      //     lon: '113.051416',
      //     lat: '34.595869',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'f42b2c3170674f268501ccf3847ef261',
      //     lon: '114.28159',
      //     lat: '35.73263',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'f509ee1c21ce4f5abc7bc271a856b712',
      //     lon: '113.96499',
      //     lat: '35.25279',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'f52f025e8f1048688e65db228e76a7aa',
      //     lon: '114.28628',
      //     lat: '35.951311',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'f580ae00e6c240b0a27624bbb6e333ea',
      //     lon: '114.1786111',
      //     lat: '35.573888',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'f582a367aff445b49771fe54a582831e',
      //     lon: '114.17534',
      //     lat: '35.77821',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'f5960ffb8c4a488da8bc1da611182c96',
      //     lon: '113.92362',
      //     lat: '35.38948',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'f5e0d808ff78475396c9ccc72248a687',
      //     lon: '113.688088',
      //     lat: '35.592502',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'f5e0ff44ae394d73a1c086efb7c901c2',
      //     lon: '114.181839',
      //     lat: '35.88693237',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'f675cbe34cce4529b8e07d5bd7ec9162',
      //     lon: '113.88933',
      //     lat: '35.58093',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'f682482c0b174c2882eba4fb1ae8cc26',
      //     lon: '113.90759',
      //     lat: '35.26707',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'f7353d3e422747fcb108ba68abb26203',
      //     lon: '114.06105',
      //     lat: '36.21649',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'f736b30a5c39440cb745a3087b8891ec',
      //     lon: '114.16667104',
      //     lat: '35.55499346',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'f73c3b090e81479ab694d6e1a5e039dc',
      //     lon: '114.314795',
      //     lat: '35.772307',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'f7c31e29e6584ce88d06c342b1fbb9de',
      //     lon: '114.1380626',
      //     lat: '35.58417634',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'f7ebaea366d045a491ffc0babf99746a',
      //     lon: '113.77866',
      //     lat: '35.34254',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'f833147cc3eb4f05847ad7f4ba4a8469',
      //     lon: '114.65512',
      //     lat: '35.13916',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'f8a55e0a3f0f4d1ba7a4af40439d0ddc',
      //     lon: '114.14741',
      //     lat: '35.87802',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'f8b93f57f7874b30a5bb94a96c8f577f',
      //     lon: '114.232826',
      //     lat: '35.639389',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'f8d14dc7fac94d86b5bf728d9ceb4b06',
      //     lon: '116.45841',
      //     lat: '33.95143',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'f9024c967c134a0f862f6a0925a94cd0',
      //     lon: '113.59301',
      //     lat: '34.72468',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'f93495457f93489a93a0a6689f386901',
      //     lon: '114.210304',
      //     lat: '35.621971',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'f93740c349b2456f81724bfb66e3304f',
      //     lon: '114.169523',
      //     lat: '35.668749',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'f96b5372865b4ef99a447c695ebc2ac2',
      //     lon: '113.90722',
      //     lat: '35.42861',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'f98c2d0739aa453d95aa4d0a27e35eff',
      //     lon: '113.92461',
      //     lat: '35.27174',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'f9c266702a2444b0a2c00deb4b8a6b84',
      //     lon: '114.27626',
      //     lat: '35.49894',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'f9c8acad687b4c44a240af7af410829b',
      //     lon: '114.39086',
      //     lat: '36.08231',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'fa235834967646a09f1fde1302ae6791',
      //     lon: '114.1677399',
      //     lat: '35.70095825',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'fa444cfd423c44b48940ea369e44aec1',
      //     lon: '113.90942',
      //     lat: '35.49774',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'fabd093015f043849418620612b18505',
      //     lon: '114.66143',
      //     lat: '36.00941',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'fac1176a716941f8904db2ee4a2d6719',
      //     lon: '113.87639',
      //     lat: '35.35276',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'fac5891f2e014ff88b78df5826e5f14f',
      //     lon: '113.93101',
      //     lat: '35.38381',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'fb1ff80f653a4631b15415135936cb16',
      //     lon: '114.32940066',
      //     lat: '35.52271323',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'fbad57caeac04e26938647eed6065eb6',
      //     lon: '113.29161',
      //     lat: '34.56725',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'fbca06122e0a4151af1e305db5133fc9',
      //     lon: '113.60981',
      //     lat: '34.67601',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'fbd6fb8b8f7447848461f511164e28e0',
      //     lon: '114.08835',
      //     lat: '35.48674',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'fc0340558aef4004b474cfef1abe10ea',
      //     lon: '113.47679',
      //     lat: '35.38729',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'fc316776743742829a08be9eef3f752c',
      //     lon: '113.47679',
      //     lat: '35.38729',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'fc425586ec344837937c8ceb7043f341',
      //     lon: '113.86324',
      //     lat: '35.30603',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'fc89a919f6614d41b5777a273abd3650',
      //     lon: '114.19648',
      //     lat: '35.61809',
      //     reason: '2',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'fcb8c950d53b498fae3579acbe5e49dd',
      //     lon: '113.924444',
      //     lat: '33.54250001',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'fcc7cfc5ab8f47cd840b0f46f0bc12ba',
      //     lon: '113.70132',
      //     lat: '35.48021',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'fccb6d731d1d4d5b811ad9fdf27e2b4e',
      //     lon: '113.693888',
      //     lat: '34.784444',
      //     reason: '3',
      //     siteType: '5G'
      //   },
      //   {
      //     id: 'fccd2773f3a549dd9fb49bd59d37969e',
      //     lon: '113.53629',
      //     lat: '35.30671',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'fd349df91b0046838e001cd013b85894',
      //     lon: '114.24501',
      //     lat: '35.54527',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'fe0c1e5da8604133a23974e5a2671d7d',
      //     lon: '113.894471',
      //     lat: '35.304891',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'fe1f5fa0aeb84291ae4dc81a4532e9ff',
      //     lon: '113.62041',
      //     lat: '34.68484',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'fe9d1b57374a43889802a50eb06c0b75',
      //     lon: '113.88333',
      //     lat: '35.34833',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'febe788f80de4fd1ae6ef95e8b1af701',
      //     lon: '113.91501',
      //     lat: '35.27441',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'fec009d2359c457f96b52aedb03ef68d',
      //     lon: '114.141666',
      //     lat: '36.036666',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'fee118bf501a44fb9b043b9f01db9fae',
      //     lon: '113.88530001',
      //     lat: '35.45764',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'fee40d48463e415b8e15938e2c788ab4',
      //     lon: '114.295833',
      //     lat: '35.756111',
      //     reason: '2',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'ff1537ae62ac474d94480af6ec287fc8',
      //     lon: '114.33201',
      //     lat: '36.09201',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ff1f0b5bf4e8493ab7be3274f1550a2c',
      //     lon: '114.33046',
      //     lat: '36.07199',
      //     reason: '3',
      //     siteType: '2G'
      //   },
      //   {
      //     id: 'ffbdd7637e82405492f811f21ac8fd3c',
      //     lon: '113.71601',
      //     lat: '35.43681',
      //     reason: '3',
      //     siteType: '4G'
      //   },
      //   {
      //     id: 'ffeb956457ad4e119671d03dfb0b1be7',
      //     lon: '113.86001',
      //     lat: '35.29711',
      //     reason: '2',
      //     siteType: '4G'
      //   }
      // ]
    }
  },
  created() {},
  mounted() {
    lazyAMapApiLoaderInstance.load().then(() => {
      this.init()
    })
  },
  methods: {
    // 初始化地图
    init() {
      let _this = this
      // 创建地图
      _this.map = null
      // eslint-disable-next-line no-undef
      _this.map = new AMap.Map('test', {
        center: this.center,
        zooms: [4, 18]
      })
      _this.testData()
    },

    // 随机创建一批点，仅作示意
    testData() {
      let _this = this
      let data1 = _this.createPoints('2G', _this.map.getCenter(), 200)
      let data2 = _this.createPoints('4G', _this.map.getCenter(), 200)
      let data3 = _this.createPoints('5G', _this.map.getCenter(), 200)
      // 加载海量点组件
      // eslint-disable-next-line no-undef
      AMapUI.loadUI(['misc/PointSimplifier'], PointSimplifier => {
        if (!PointSimplifier.supportCanvas) {
          alert('当前环境不支持 Canvas！')
          return
        }
        // 启动页面
        _this.initPage(PointSimplifier, data1, 2)
        _this.initPage(PointSimplifier, data2, 4)
        _this.initPage(PointSimplifier, data3, 5)
      })
    },
    // 随机创建一批点
    createPoints(type, center, num) {
      let data = []
      for (let i = 0, len = num; i < len; i++) {
        data.push({
          // position数据格式：position:[115.3662,39.14536]
          position: [
            center.getLng() + (Math.random() > 0.5 ? 1 : -1) * Math.random(),
            center.getLat() + (Math.random() > 0.5 ? 1 : -1) * Math.random()
          ],
          id: '我是ID：' + i,
          name: '我的名字是张' + i,
          style: type
        })
      }
      console.log(data)
      return data
    },
    // 启动页面
    initPage(PointSimplifier, data, type) {
      let _this = this
      // 自定义图标
      let icon = ''
      if (type === 2) {
        icon = require('../../assets/images/2G.png')
      }
      if (type === 4) {
        icon = require('../../assets/images/4G.png')
      }
      if (type === 5) {
        icon = require('../../assets/images/5G.png')
      }
      // 创建组件实例
      _this.pointSimplifierIns = new PointSimplifier({
        //关联的map
        map: _this.map,
        // zIndex: zIndex,

        // 数据源中靠后的元素优先，index大的排到前面去
        compareDataItem: function(a, b, aIndex, bIndex) {
          return aIndex > bIndex ? -1 : 1
        },

        //返回数据项的经纬度，AMap.LngLat实例或者经纬度数组
        getPosition: function(dataItem) {
          return dataItem.position
        },

        // 返回数据项的Title信息，鼠标hover时显示-返回鼠标Hover时显示的Title内容
        getHoverTitle: function(dataItem, idx) {
          // console.log(dataItem)
          let content1 =
            '<div>id：' + dataItem.id + '</div>' + '我是索引：' + idx
          let content2 = '<div>name：' + dataItem.name + '</div>'
          let content3 = '<div>style：' + dataItem.style + '</div>'
          let content =
            "<div style='border:1px solid #6290eb;padding:5px;font-size:16px;border-radius: 5px;background-color: rgba(19, 28, 45,0.7);color:#fff;box-shadow:0 0 9px 1px #6290eb;'>" +
            content1 +
            content2 +
            content3 +
            '</div>'
          console.log(content)
          // return content
          return '' // 不需要鼠标hover时显示Title信息返回空
        },

        // 点的样式
        renderOptions: {
          // 点的样式
          pointStyle: {
            // content的取值有两类1.{string}, 可以是 rect（矩形）, circle（圆形），none（空）2.{function},根据矩形范围，描绘出点的形状路径或者绘制 图片。
            content: PointSimplifier.Render.Canvas.getImageContent(
              // 'https://webapi.amap.com/theme/v1.3/markers/n/mark_b1.png', // 外部引入
              // require('../../assets/images/2G.png'), // 自定义图片
              icon,
              function onload() {
                _this.pointSimplifierIns.renderLater()
              },
              function onerror(e) {
                console.log(e)
                alert('图片加载失败！')
              }
            ),
            // 宽度
            width: 19,
            // 高度
            height: 31,
            // 定位点为底部中心
            offset: ['-50%', '-100%'],
            strokeStyle: null,
            fillStyle: null
            // fillStyle: 'blue' // 蓝色填充
          },

          // 鼠标Hover时显示的Title
          hoverTitleStyle: {
            // title所用的dom节点上的classNames，多个用空格分开，可借此调整dom节点的样式
            classNames: 'dialogBox',
            // title的位置，left 或者 top
            position: 'top',
            // title的dom节点相对于定位点的偏移
            offset: [0, -10]
          }
        }
      })

      // 随机创建一批点，仅作示意
      // let data = _this.createPoints(_this.map.getCenter(), 100000)

      // 设置数据源，data需要是一个数组
      // console.log(data)
      _this.pointSimplifierIns.setData(data)

      // 监听事件
      // 鼠标移入到点的矩形区域时触发
      _this.pointSimplifierIns.on('pointMouseover', function(e, point) {
        console.log(e)
        console.log(point)
        // console.log(e.type, record)
        let data = point.data
        // 自定义信息窗体
        let content1 = '<div>id：' + data.id + '</div>'
        let content2 = '<div>name：' + data.name + '</div>'
        let content3 = '<div>position：' + data.position + '</div>'
        let content4 = '<div>style：' + data.style + '</div>'
        let content =
          "<div style='border:1px solid #6290eb;padding:5px;font-size:16px;border-radius: 5px;background-color: rgba(19, 28, 45,0.7);color:#fff;box-shadow:0 0 9px 1px #6290eb;'>" +
          content1 +
          content2 +
          content3 +
          content4 +
          '</div>'
        // 创建 infoWindow 实例
        // eslint-disable-next-line no-undef
        _this.infoWindow = new AMap.InfoWindow({
          zIndex: 999999,
          // eslint-disable-next-line no-undef
          offset: new AMap.Pixel(0, -30),
          isCustom: true, //使用自定义窗体
          content: content // 传入 dom 对象，或者 html 字符串
        })
        // 打开信息窗体
        _this.infoWindow.open(_this.map, data.position)
      })
      // 鼠标移出到点的矩形区域时触发
      _this.pointSimplifierIns.on('pointMouseout', function(e, point) {
        console.log(e)
        console.log(point)
        // 关闭信息窗体
        _this.infoWindow.close()
      })
    }
  },
  computed: {},
  watch: {}
  // updated () {},
  // beforeRouteUpdate () {},
  // beforeDestroy () {},
  // destroyed () {},
  // filters: {},
}
</script>

<style lang="scss" scoped>
.inner-box {
  margin: 20px;
  height: 700px;
  #test {
    width: 95%;
    height: 800px;
  }
}
</style>
<style lang="scss">
.amap-logo,
.amap-copyright {
  display: none !important;
}
//更改弹窗样式
.dialogBox {
  //border: 1px solid red !important;
}
</style>
