var express = require('express');
var router = express.Router();
let axios = require('axios');
/* GET home page. */
router.get('/styles', function(req, res, next) {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.ssactivewear.com/v2/styles",
    "method": "GET",
    "headers": {
      "Authorization": "Basic MDM0OTM6Y2QwMDllMmUtMTEzMC00ZTc3LTllNzctYTM3ZjgzNzliMGNk",
      "User-Agent": "PostmanRuntime/7.15.2",
      "Accept": "*/*",
      "Cache-Control": "no-cache",
      "Postman-Token": "954aaa8f-3876-4cf4-b4de-5807f62139b6,a7255521-6875-4f17-b9ac-c7b6c53dec51",
      "Host": "api.ssactivewear.com",
      "Accept-Encoding": "gzip, deflate",
      "Connection": "keep-alive",
      "cache-control": "no-cache"
    }
  };

  axios(settings)
      .then(async results => {
        let data = results.data.filter(row => {
          return row.baseCategory === req.query.baseCategory
        });
        res.send(data);
      })
});

router.get('/categories', function(req, res, next) {
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.ssactivewear.com/v2/styles",
    "method": "GET",
    "headers": {
      "Authorization": "Basic MDM0OTM6Y2QwMDllMmUtMTEzMC00ZTc3LTllNzctYTM3ZjgzNzliMGNk",
      "User-Agent": "PostmanRuntime/7.15.2",
      "Accept": "*/*",
      "Cache-Control": "no-cache",
      "Postman-Token": "954aaa8f-3876-4cf4-b4de-5807f62139b6,a7255521-6875-4f17-b9ac-c7b6c53dec51",
      "Host": "api.ssactivewear.com",
      "Accept-Encoding": "gzip, deflate",
      "Connection": "keep-alive",
      "cache-control": "no-cache"
    }
  };

  axios(settings)
      .then(async results => {
        let data = await results.data;
        let uniqueStyles = [...new Set(data.map(x=>x.baseCategory))];
        res.send({uniqueStyles, data});
      });
});

// router.get('/categories', function(req, res, next) {
//   var settings = {
//     "async": true,
//     "crossDomain": true,
//     "url": "https://api.ssactivewear.com/v2/categories",
//     "method": "GET",
//     "headers": {
//       "Authorization": "Basic MDM0OTM6Y2QwMDllMmUtMTEzMC00ZTc3LTllNzctYTM3ZjgzNzliMGNk",
//       "User-Agent": "PostmanRuntime/7.15.2",
//       "Accept": "*/*",
//       "Cache-Control": "no-cache",
//       "Postman-Token": "954aaa8f-3876-4cf4-b4de-5807f62139b6,a7255521-6875-4f17-b9ac-c7b6c53dec51",
//       "Host": "api.ssactivewear.com",
//       "Accept-Encoding": "gzip, deflate",
//       "Connection": "keep-alive",
//       "cache-control": "no-cache"
//     }
//   };
//
//   axios(settings)
//       .then(async results => {
//         res.send(await results.data);
//       });
// });

router.get('/products', async function(req,res){
  let {styleID} = req.query;
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://api.ssactivewear.com/v2/products?style=" + styleID,
    "method": "GET",
    "headers": {
      "Authorization": "Basic MDM0OTM6Y2QwMDllMmUtMTEzMC00ZTc3LTllNzctYTM3ZjgzNzliMGNk",
      "User-Agent": "PostmanRuntime/7.15.2",
      "Accept": "*/*",
      "Cache-Control": "no-cache",
      "Postman-Token": "954aaa8f-3876-4cf4-b4de-5807f62139b6,a7255521-6875-4f17-b9ac-c7b6c53dec51",
      "Host": "api.ssactivewear.com",
      "Accept-Encoding": "gzip, deflate",
      "Connection": "keep-alive",
      "cache-control": "no-cache"
    }
  };

  axios(settings)
      .then(async results => {
        res.send(results.data);
      });
});

module.exports = router;
