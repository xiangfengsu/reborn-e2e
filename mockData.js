const Mock = require("mockjs");
const data = Mock.mock({
  body: [
    {
      label: "客户姓名",
      key: "customerName",
      type: "input",
      value: "@cname"
    },
    {
      label: "英文名称",
      key: "customerNameInternate",
      type: "input",
      value: "@name"
    },
    {
      label: "国籍",
      key: "country",
      type: "select",
      "options|1": ["中国"]
    },
    {
      label: "教育水平",
      key: "edu_level",
      type: "select",
      "options|1": [
        "博士后",
        "博士",
        "硕士",
        "大学本科",
        "大学专科",
        "中专/中等技校",
        "高中",
        "初中",
        "小学",
        "其他"
      ]
    },
    {
      label: "证件类型",
      key: "credType",
      type: "select",
      "options|1": ["身份证"]
    },
    {
      label: "签发机关",
      key: "issuingAuth",
      type: "input",
      value: "@csentence"
    },
    {
      label: "证件有效期(起)",
      key: "idcardStartDate",
      type: "input",
      value: "@datetime(1950MMdd)"
    },
    {
      label: "证件有效期(止)",
      key: "idcard_expiry_date",
      type: "input",
      value: "@datetime(2099MMdd)"
    },
    {
      label: "证件号码",
      key: "cardNo",
      type: "input",
      value: "110101199003073458"
    },
    // {
    //   label: "性别",
    //   key: "sex",
    //   type: "select",
    //   "options|1": ["男", "女"]
    // },
    // {
    //   label: "生日",
    //   key: "birthday",
    //   type: "input",
    //   value: "@datetime(yyyyMMdd)"
    // },
    // {
    //   label: "年龄",
    //   key: "age",
    //   type: "input",
    //   "value|22-45": 24
    // },
    {
      label: "手机号",
      key: "mobile",
      type: "input",
      value: "13211111111"
    },
    {
      label: "征信自查",
      key: "creditExam",
      type: "select",
      "options|1": ["否"]
    },
    {
      label: "驾驶证档案号",
      key: "driverLicense",
      type: "input",
      value: "@sentence"
    },
    {
      label: "自有车辆类型",
      key: "ownerCarType",
      type: "select",
      "options|1": ["自有乘用车"]
    },
    {
      label: "联系地址",
      key: "address-select",
      type: "inputRegion",
      value: "江苏省/常州市/溧阳市"
    },
    {
      label: "联系地址详细",
      key: "address",
      type: "input",
      value: "@county(true)"
    },
    {
      label: "所属行业",
      key: "compIndustry",
      type: "select",
      "options|1": [
        "农、林、牧、渔业",
        "采矿业",
        "制造业",
        "电力燃气及水电生产和供应业",
        "建筑业",
        "交通运输仓储和邮政业",
        "信息传输计算机服务和软件业",
        "批发和零售业",
        "住宿和餐饮业",
        "金融业",
        "房地产业",
        "租赁和商务服务业",
        "科学研究技术服务业",
        "水利环境和公共设施管理服务业",
        "居民服务和其他服务业",
        "教育",
        "卫生和社会工作",
        "文化体育和娱乐业",
        "公共管理社会保障社会组织国际组织"
      ]
    },
    {
      label: "单位名称",
      key: "companyName",
      type: "input",
      value: "@csentence"
    },
    {
      label: "单位地址",
      key: "companyAddress-select",
      type: "inputRegion",
      value: "江苏省/常州市/溧阳市"
    },
    {
      label: "单位地址详细",
      key: "companyAddress",
      type: "input",
      value: "@county(true)"
    },
    {
      label: "单位类型",
      key: "workType",
      type: "select",
      "options|1": ["政府机构", "国有企业", "外企", "私有企业", "自雇", "其他"]
    },
    {
      label: "其他单位类型",
      key: "company_other_type",
      type: "input",
      value: "@csentence"
    },
    {
      label: "职级信息",
      key: "positionInfo",
      type: "select",
      "options|1": ["法人/股东", "中层管理", "一般管理", "职员", "其他"]
    },
    {
      label: "是否有营业执照",
      key: "hasBusinessLincese",
      type: "select",
      "options|1": ["有", "无"]
    },
    {
      label: "其他职级信息",
      key: "job_grade_other_type",
      type: "input",
      value: "@csentence"
    },
    {
      label: "主营业务",
      key: "company_main_business",
      type: "input",
      value: "@csentence"
    },
    {
      label: "雇员人数",
      key: "company_emploees",
      type: "input",
      "value|1-999": 70
    },
    {
      label: "入职时间",
      key: "company_hiredate",
      type: "input",
      value: "@datetime(yyyyMMdd)"
    },
    {
      label: "固定电话",
      key: "company_tel",
      type: "input",
      value: "13111111111"
    },
    {
      label: "是否农户",
      key: "isFarmer",
      type: "select",
      "options|1": ["否"]
    },
    {
      label: "是否涉农",
      key: "hasAgri",
      type: "select",
      "options|1": ["否"]
    },
    {
      label: "婚姻状态",
      key: "maritalStatus",
      type: "select",
      "options|1": ["未婚", "已婚", "离婚", "丧偶"]
    },
    {
      label: "有无子女",
      key: "have_children",
      type: "select",
      "options|1": ["有", "无"]
    },
    {
      label: "子女数量",
      key: "number_children",
      type: "input",
      "value|1-4": 4
    },
    {
      label: "户口状态",
      key: "residenceStatus",
      type: "select",
      "options|1": ["本地", "省内", "省外"]
    },
    {
      label: "来本地时间",
      key: "local_date",
      type: "input",
      value: "@datetime(yyyyMMdd)"
    },
    {
      label: "地区",
      key: "city",
      type: "input",
      value: ""
    },
    {
      label: "渠道",
      key: "channelName",
      type: "input",
      value: ""
    },
    {
      label: "居住状况",
      key: "liveState",
      type: "select",
      "options|1": ["自有全款房", "自有抵押房", "父母/配偶房产", "宿舍", "租赁"]
    },
    {
      label: "租赁月租",
      key: "house_rent",
      type: "input",
      "value|100-9999": 3000
    },
    {
      label: "房产面积",
      key: "houseAcreage",
      type: "input",
      "value|40-200": 50
    },
    {
      label: "房产状况",
      key: "houseState",
      type: "input",
      value: "@csentence(3,5)"
    },
    {
      label: "开户放款银行",
      key: "mbank",
      type: "select",
      "options|1": [
        "中国工商银行",
        "中国银行",
        "中国建设银行",
        "广东发展银行",
        "平安银行",
        "兴业银行",
        "上海浦东发展银行",
        "北京银行",
        "宁波银行",
        "南京银行",
        "东莞银行"
      ]
    },
    {
      label: "开户放款支行",
      key: "openMbank",
      type: "input",
      value: "@csentence"
    },
    {
      label: "开户(放款)姓名",
      key: "openName",
      type: "input",
      value: "@cname"
    },
    {
      label: "开户(放款)银行账户",
      key: "openBankNo",
      type: "input",
      value: "6222999900001111"
    },
    {
      label: "开户行编号",
      key: "openBankCode",
      type: "input",
      value: "12345"
    },
    {
      label: "电子二类账户",
      key: "electronicAccount",
      type: "input",
      value: "6222999900001111"
    },
    {
      label: "车首付款来源",
      key: "carPaymentSource",
      type: "select",
      "options|1": ["自有资金"]
    },
    {
      label: "车牌号",
      key: "carNumber",
      type: "input",
      value: "沪A1234"
    },
    {
      label: "邮编",
      key: "zipCode",
      type: "input",
      value: "901234"
    },
    {
      label: "业务类型",
      key: "contractType",
      type: "select",
      "options|1": ["2", "5"]
    },
    {
      label: "申请额度",
      key: "mindPrice",
      type: "input",
      "value|10000-400000": 8888
    },
    {
      label: "车辆保险有效合同期",
      key: "starttime",
      type: "input",
      value: "@datetime(yyyy-MM-dd)"
    },
    {
      label: "车险公司",
      key: "insurerName",
      type: "select",
      "options|1": [
        "中国人民保险集团股份有限公司",
        "中国人寿保险（集团）公司",
        "中国再保险（集团）股份有限公司",
        "中国太平洋保险（集团）股份有限公司",
        "中国平安保险（集团）股份有限公司",
        "泰康保险集团股份有限公司",
        "华泰保险集团股份有限公司",
        "中国太平保险集团有限责任公司",
        "安邦保险集团股份有限公司",
        "中华联合保险集团股份有限公司",
        "阳光保险集团股份有限公司",
        "富德保险控股股份有限公司",
        "大地保险",
        "天安财产保险股份有限公司",
        "史带财产保险股份有限公司",
        "华安财产保险股份有限公司",
        "永安财产保险股份有限公司",
        "安盛保险有限公司",
        "安达保险有限公司",
        "中银保险有限公司",
        "利宝保险有限公司",
        "安盛天平财产保险股份有限公司",
        "都邦财产保险股份有限公司",
        "渤海财产保险股份有限公司",
        "华农财产保险股份有限公司",
        "安诚财产保险股份有限公司",
        "现代财产保险（中国）有限公司",
        "长安责任保险股份有限公司",
        "劳合社保险（中国）有限公司",
        "中意财产保险有限公司",
        "国元农业保险股份有限公司",
        "鼎和财产保险股份有限公司",
        "中煤财产保险股份有限公司",
        "国泰财产保险有限责任公司",
        "英大泰和财产保险股份有限公司",
        "紫金财产保险股份有限公司",
        "浙商财产保险股份有限公司",
        "信达财产保险股份有限公司",
        "诚泰财产保险股份有限公司",
        "众诚汽车保险股份有限公司",
        "泰山财产保险股份有限公司",
        "长江财产保险股份有限公司",
        "恒邦财产保险股份有限公司",
        "合众财产保险股份有限公司",
        "其他"
      ]
    },
    {
      label: "月收入",
      key: "monthlyMoney",
      type: "select",
      "options|1": ["0-5k", "5k-10k", "10k-15k", "15k以上"]
    },
    {
      label: "资金用途",
      key: "fundUseDown",
      type: "select",
      "options|1": ["个人消费", "企业经营", "其他"]
    },
    {
      label: "资金用途",
      key: "fundUse",
      type: "input",
      value: "@csentence"
    },
    {
      label: "紧急联系人姓名",
      key: "emergencyContactName",
      type: "input",
      value: "@cname"
    },
    {
      label: "紧急联系人手机号",
      key: "emergencyContactMobile",
      type: "input",
      value: "13211111111"
    },
    {
      label: "紧急联系人与客户关系",
      key: "relationships",
      type: "select",
      "options|1": ["1", "2", "3", "4", "5", "6"]
    },
    {
        label: "客户需求备注",
        key: "customerNeedRemark",
        type: "input",
        value: "@csentence"
      },
    {
      label: "紧急联系人证件号码",
      key: "emergencyContactCardNo",
      type: "input",
      value: "110101199003073458"
    },
    {
      label: "联系地址",
      key: "emergency_contact_city",
      type: "inputRegion",
      value: "江苏省/常州市/溧阳市"
    },
    {
      label: "联系地址详细",
      key: "emergency_contact_address",
      type: "input",
      value: "@county(true)"
    },
    {
      label: "紧急联系人姓名",
      key: "emergencyContactNameTwo",
      type: "input",
      value: "@cname"
    },
    {
      label: "紧急联系人手机号",
      key: "emergencyContactMobileTwo",
      type: "input",
      value: "13111111111"
    },
    {
      label: "紧急联系人与客户关系",
      key: "relationshipsTwo",
      type: "select",
      "options|1": ["1", "2", "3", "4", "5", "6"]
    },
    {
      label: "紧急联系人姓名",
      key: "emergencyContactNameThree",
      type: "input",
      value: "@cname"
    },
    {
      label: "紧急联系人手机号",
      key: "emergencyContactMobileThree",
      type: "input",
      value: "13111111111"
    },
    {
      label: "紧急联系人与客户关系",
      key: "relationshipsThree",
      type: "select",
      "options|1": ["1", "2", "3", "4", "5", "6"]
    },
    {
      label: "正面头像照片",
      key: "upload79",
      type: "inputUpload"
    },
    {
      label: "身份证照片",
      key: "upload80",
      type: "inputUpload"
    },
    {
      label: "本人手持身份证照片",
      key: "upload801",
      type: "inputUpload"
    },
    {
      label: "本人于车辆合照",
      key: "upload802",
      type: "inputUpload"
    },
    {
      label: "行驶证照片",
      key: "upload81",
      type: "inputUpload"
    },
    {
      label: "登记证照片",
      key: "upload82",
      type: "inputUpload"
    },
    {
      label: "保单照片",
      key: "upload83",
      type: "inputUpload"
    },
    {
      label: "征信照片",
      key: "upload85",
      type: "inputUpload"
    },
    {
      label: "房产证明照片",
      key: "upload86",
      type: "inputUpload"
    },
    {
      label: "工作(或公司)证明照片",
      key: "upload87",
      type: "inputUpload"
    },
    {
      label: "车钥匙图片",
      key: "upload871",
      type: "inputUpload"
    },
    {
      label: "选择产品",
      key: "dqProductId",
      type: "select",
      "options|1": [
        "20181220160332-2c88837f-2363-4ba9-abd5-dbcdb4fdf610",
        "20190117212525-34868aa9-7b9b-4196-8918-ac017dbdf5d6"
      ]
    },
    {
      label: "申请表照片",
      key: "upload84dq",
      type: "inputUpload"
    },
    {
      label: "征信授权书",
      key: "upload85dq",
      type: "inputUpload"
    },
    {
      label: "选择产品",
      key: "qwProductId",
      type: "select",
      "options|1": [
        "20190117173657-847d41c3-c958-4dd7-bbb4-3ef3a7215ff3",
        "20181028160601-46ed9a46-03a3-4dc9-b957-a9cfccaf3a42",
        "20181028160631-4b895741-1ca0-4040-b17b-1dbff1396dd8",
        "20181112134144-bdbb66a8-f1ed-4d23-97da-3acadad1d964"
      ]
    },
    {
      label: "申请表照片",
      key: "upload84qw",
      type: "inputUpload"
    },
    {
      label: "征信授权书",
      key: "upload85qw",
      type: "inputUpload"
    },
    {
      label: "其他材料照片",
      key: "upload88",
      type: "inputUpload"
    },
    {
      label: "开户银行",
      type: "select",
      "options|1": [
        "中国工商银行",
        "中国银行",
        "中国建设银行",
        "广东发展银行",
        "平安银行",
        "兴业银行",
        "上海浦东发展银行",
        "北京银行",
        "宁波银行",
        "南京银行",
        "东莞银行"
      ]
    },{
        label: "我已阅读并同意",
        key: "agree_on",
        type: "checkBox",
        value:"0"
      },
  ],
  code: 200,
  msg: ""
});
module.exports = data;
