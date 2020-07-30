define({ "api": [
  {
    "group": "字符串相关",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/string/index.js",
    "groupTitle": "字符串相关",
    "name": ""
  },
  {
    "type": "Get",
    "url": "allTrim",
    "title": "清除全部空格",
    "name": "allTrim",
    "description": "<p>清除全部空格</p>",
    "group": "字符串相关",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chars",
            "description": "<p>字符串</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例",
          "content": "allTrim('   a b c   ')",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "'abc'",
          "type": "string"
        }
      ]
    },
    "filename": "lib/string/index.js",
    "groupTitle": "字符串相关"
  },
  {
    "type": "Get",
    "url": "endsTrim",
    "title": "清除右侧空格",
    "name": "endsTrim",
    "description": "<p>清除右侧空格</p>",
    "group": "字符串相关",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chars",
            "description": "<p>字符串</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例",
          "content": "endsTrim('   abc   ')",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "'   abc'",
          "type": "string"
        }
      ]
    },
    "filename": "lib/string/index.js",
    "groupTitle": "字符串相关"
  },
  {
    "type": "Get",
    "url": "getRandStr",
    "title": "生成随机字符串",
    "name": "getRandStr",
    "description": "<p>生成随机字符串</p>",
    "group": "字符串相关",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "len",
            "description": "<p>字符串的长度</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例",
          "content": "getRandStr(8)",
          "type": "Number"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "AbCd92Ef",
          "type": "string"
        }
      ]
    },
    "filename": "lib/string/index.js",
    "groupTitle": "字符串相关"
  },
  {
    "type": "Get",
    "url": "getRandStrLower",
    "title": "生成随机小写写字符串",
    "name": "getRandStrLower",
    "description": "<p>生成随机小写写字符串</p>",
    "group": "字符串相关",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "len",
            "description": "<p>字符串的长度</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例",
          "content": "getRandStrLower(8)",
          "type": "Number"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "abcdefgh",
          "type": "string"
        }
      ]
    },
    "filename": "lib/string/index.js",
    "groupTitle": "字符串相关"
  },
  {
    "type": "Get",
    "url": "getRandStrNoNum",
    "title": "生成随机字符串(不含数字)",
    "name": "getRandStrNoNum",
    "description": "<p>生成随机字符串(不含数字)</p>",
    "group": "字符串相关",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "len",
            "description": "<p>字符串的长度</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例",
          "content": "getRandStrNoNum(8)",
          "type": "Number"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "AbCdXyEf",
          "type": "string"
        }
      ]
    },
    "filename": "lib/string/index.js",
    "groupTitle": "字符串相关"
  },
  {
    "type": "Get",
    "url": "getRandStrUpper",
    "title": "生成随机大写字符串",
    "name": "getRandStrUpper",
    "description": "<p>生成随机大写字符串</p>",
    "group": "字符串相关",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "len",
            "description": "<p>字符串的长度</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例",
          "content": "getRandStrUpper(8)",
          "type": "Number"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "ABCDEFGH",
          "type": "string"
        }
      ]
    },
    "filename": "lib/string/index.js",
    "groupTitle": "字符串相关"
  },
  {
    "type": "Get",
    "url": "startsTrim",
    "title": "清除左侧空格",
    "name": "startsTrim",
    "description": "<p>清除左侧空格</p>",
    "group": "字符串相关",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chars",
            "description": "<p>字符串</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例",
          "content": "startsTrim('   abc   ')",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "'abc   '",
          "type": "string"
        }
      ]
    },
    "filename": "lib/string/index.js",
    "groupTitle": "字符串相关"
  },
  {
    "type": "Get",
    "url": "trim",
    "title": "清除左右空格",
    "name": "trim",
    "description": "<p>清除左右空格</p>",
    "group": "字符串相关",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chars",
            "description": "<p>字符串</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例",
          "content": "trim('   abc   ')",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "'abc'",
          "type": "string"
        }
      ]
    },
    "filename": "lib/string/index.js",
    "groupTitle": "字符串相关"
  },
  {
    "group": "数字相关",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/number/index.js",
    "groupTitle": "数字相关",
    "name": ""
  },
  {
    "type": "Get",
    "url": "isNumber",
    "title": "判断是否为数字",
    "name": "isNumber",
    "description": "<p>判断是否为数字</p>",
    "group": "数字相关",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chars",
            "description": "<p>字符串</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例",
          "content": "isNumber(123)",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "true",
          "type": "boolean"
        }
      ]
    },
    "filename": "lib/number/index.js",
    "groupTitle": "数字相关"
  },
  {
    "type": "Get",
    "url": "isValidDecimal",
    "title": "判断是否为小数",
    "name": "isValidDecimal",
    "description": "<p>判断是否为小数</p>",
    "group": "数字相关",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chars",
            "description": "<p>字符串</p>"
          },
          {
            "group": "Parameter",
            "type": "Boolean",
            "optional": false,
            "field": "integer",
            "description": "<p>是否包含整数</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例",
          "content": "isValidDecimal(234.112, false)",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "false",
          "type": "boolean"
        }
      ]
    },
    "filename": "lib/number/index.js",
    "groupTitle": "数字相关"
  },
  {
    "group": "时间日期相关",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/date/index.js",
    "groupTitle": "时间日期相关",
    "name": ""
  },
  {
    "type": "Get",
    "url": "GMTToLocalDateTime",
    "title": "格林威治时间转北京时间",
    "name": "GMTToLocalDateTime",
    "description": "<p>格林威治时间转北京时间</p>",
    "group": "时间日期相关",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>时间日期字符串</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "format",
            "description": "<p>格式</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例",
          "content": "formatDate('Thu Jul 30 2020 13:22:48 GMT+0000', 'YYYY/mm/dd')",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "2020/07/30",
          "type": "string"
        }
      ]
    },
    "filename": "lib/date/index.js",
    "groupTitle": "时间日期相关"
  },
  {
    "type": "Get",
    "url": "formatDate",
    "title": "时间格式化",
    "name": "formatDate",
    "description": "<p>时间格式化</p>",
    "group": "时间日期相关",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>时间日期字符串</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "format",
            "description": "<p>格式</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例",
          "content": "formatDate('2020-07-30 23:59:59', 'YYYY/mm/dd')",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "2020/07/30",
          "type": "string"
        }
      ]
    },
    "filename": "lib/date/index.js",
    "groupTitle": "时间日期相关"
  },
  {
    "type": "Get",
    "url": "getAfterDate",
    "title": "获取N天后的日期",
    "name": "getAfterDate",
    "description": "<p>获取N天后的日期</p>",
    "group": "时间日期相关",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "date",
            "description": "<p>当前日期</p>"
          },
          {
            "group": "Parameter",
            "type": "Number",
            "optional": false,
            "field": "differ",
            "description": "<p>日期差值</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "format",
            "description": "<p>格式</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例",
          "content": "formatDate('2020-01-01 00:00:00', 5, 'YYYY/mm/dd HH:MM:SS')",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "2020/01/06 00:00:00",
          "type": "string"
        }
      ]
    },
    "filename": "lib/date/index.js",
    "groupTitle": "时间日期相关"
  },
  {
    "group": "校验相关",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/check/index.js",
    "groupTitle": "校验相关",
    "name": ""
  },
  {
    "type": "Get",
    "url": "checkStringLevel",
    "title": "检验字符串等级",
    "name": "checkStringLevel",
    "description": "<p>检验字符串等级</p>",
    "group": "校验相关",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chars",
            "description": "<p>字符串</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例",
          "content": "checkStringLevel('AbCdE_9281')",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "4",
          "type": "number"
        }
      ]
    },
    "filename": "lib/check/index.js",
    "groupTitle": "校验相关"
  },
  {
    "type": "Get",
    "url": "isEmail",
    "title": "判断是否为邮箱",
    "name": "isEmail",
    "description": "<p>判断是否为邮箱</p>",
    "group": "校验相关",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chars",
            "description": "<p>字符串</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例",
          "content": "isEmail('405263430@qq.com')",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "true",
          "type": "boolean"
        }
      ]
    },
    "filename": "lib/check/index.js",
    "groupTitle": "校验相关"
  },
  {
    "type": "Get",
    "url": "isIDNumber",
    "title": "判断是否为身份证(兼容15和18位)",
    "name": "isIDNumber",
    "description": "<p>判断是否为身份证(兼容15和18位)</p>",
    "group": "校验相关",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chars",
            "description": "<p>字符串</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例",
          "content": "isIDNumber('43029119700101123X')",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "true",
          "type": "boolean"
        }
      ]
    },
    "filename": "lib/check/index.js",
    "groupTitle": "校验相关"
  },
  {
    "type": "Get",
    "url": "isValidReg",
    "title": "判断是否含有危险字符",
    "name": "isValidReg",
    "description": "<p>判断是否含有危险字符</p>",
    "group": "校验相关",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chars",
            "description": "<p>字符串</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例",
          "content": "isValidReg('<script></script>')",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "true",
          "type": "boolean"
        }
      ]
    },
    "filename": "lib/check/index.js",
    "groupTitle": "校验相关"
  },
  {
    "type": "Get",
    "url": "isValidURL",
    "title": "判断字符串是否为网址(不区分大小)",
    "name": "isValidURL",
    "description": "<p>判断字符串是否为网址(不区分大小)</p>",
    "group": "校验相关",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chars",
            "description": "<p>字符串</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例",
          "content": "isValidURL('http://www.baidu.com')",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "true",
          "type": "boolean"
        }
      ]
    },
    "filename": "lib/check/index.js",
    "groupTitle": "校验相关"
  },
  {
    "group": "网址相关",
    "type": "",
    "url": "",
    "version": "0.0.0",
    "filename": "lib/url/index.js",
    "groupTitle": "网址相关",
    "name": ""
  },
  {
    "type": "Get",
    "url": "getHostName",
    "title": "获取网址的域名",
    "name": "getHostName",
    "description": "<p>根据url获取网址的域名</p>",
    "group": "网址相关",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chars",
            "description": "<p>网址字符串</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例",
          "content": "getHostName('http://www.baidu.com?id=1&name=张三')",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "www.baidu.com",
          "type": "string"
        }
      ]
    },
    "filename": "lib/url/index.js",
    "groupTitle": "网址相关"
  },
  {
    "type": "Get",
    "url": "getProtocol",
    "title": "获取网址的协议",
    "name": "getProtocol",
    "description": "<p>根据url获取网址的协议</p>",
    "group": "网址相关",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chars",
            "description": "<p>网址字符串</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例",
          "content": "getProtocol('http://www.baidu.com?id=1&name=张三')",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "http",
          "type": "string"
        }
      ]
    },
    "filename": "lib/url/index.js",
    "groupTitle": "网址相关"
  },
  {
    "type": "Get",
    "url": "getUrlOrigin",
    "title": "获取网址完整域名",
    "name": "getUrlOrigin",
    "description": "<p>根据url获取网址完整域名</p>",
    "group": "网址相关",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chars",
            "description": "<p>网址字符串</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例",
          "content": "getUrlOrigin('http://www.baidu.com?id=1&name=张三')",
          "type": "string"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "http://www.baidu.com",
          "type": "string"
        }
      ]
    },
    "filename": "lib/url/index.js",
    "groupTitle": "网址相关"
  },
  {
    "type": "Get",
    "url": "getUrlParams",
    "title": "获取网址的参数",
    "name": "getUrlParams",
    "description": "<p>根据url获取网址的参数</p>",
    "group": "网址相关",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chars",
            "description": "<p>网址字符串</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例",
          "content": "getUrlParams('http://www.baidu.com?id=1&name=张三')",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "{\n id: 1,\n name: '张三'\n}",
          "type": "json"
        }
      ]
    },
    "filename": "lib/url/index.js",
    "groupTitle": "网址相关"
  },
  {
    "type": "Get",
    "url": "getUrlPort",
    "title": "获取网址的端口",
    "name": "getUrlPort",
    "description": "<p>根据url获取网址的端口</p>",
    "group": "网址相关",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chars",
            "description": "<p>网址字符串</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例",
          "content": "getUrlPort('http://www.baidu.com:3000?id=1&name=张三')",
          "type": "string"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "3000",
          "type": "number"
        }
      ]
    },
    "filename": "lib/url/index.js",
    "groupTitle": "网址相关"
  },
  {
    "type": "Get",
    "url": "getUrlSearch",
    "title": "获取网址参数字符串",
    "name": "getUrlSearch",
    "description": "<p>根据url获取网址参数字符串</p>",
    "group": "网址相关",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chars",
            "description": "<p>网址字符串</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例",
          "content": "getUrlSearch('http://www.baidu.com?id=1&name=张三')",
          "type": "string"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "id=1&name=张三",
          "type": "string"
        }
      ]
    },
    "filename": "lib/url/index.js",
    "groupTitle": "网址相关"
  },
  {
    "type": "Get",
    "url": "isHttpDomain",
    "title": "判断网址协议是否为http",
    "name": "isHttpDomain",
    "description": "<p>判断网址协议是否为http</p>",
    "group": "网址相关",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chars",
            "description": "<p>网址字符串</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例",
          "content": "isHttpDomain('https://www.baidu.com?id=1&name=张三')",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "true",
          "type": "boolen"
        }
      ]
    },
    "filename": "lib/url/index.js",
    "groupTitle": "网址相关"
  },
  {
    "type": "Get",
    "url": "isHttpsDomain",
    "title": "判断网址协议是否为https",
    "name": "isHttpsDomain",
    "description": "<p>判断网址协议是否为https</p>",
    "group": "网址相关",
    "version": "1.1.0",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "chars",
            "description": "<p>网址字符串</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "请求示例",
          "content": "isHttpsDomain('https://www.baidu.com?id=1&name=张三')",
          "type": "String"
        }
      ]
    },
    "success": {
      "examples": [
        {
          "title": "返回示例",
          "content": "true",
          "type": "boolean"
        }
      ]
    },
    "filename": "lib/url/index.js",
    "groupTitle": "网址相关"
  }
] });
