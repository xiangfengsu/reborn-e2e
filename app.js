const puppeteer = require("puppeteer");
const delay = require("delay");
const path = require("path");

const fetch = require("node-fetch");
const rn = require("random-number");
const Table = require("cli-table");

const colors = require("colors");

const shell = require("./shell.js");

const car300Info = require("./car300info.js");
const mockData = require("./mockData.js");

const carLastNumber = rn({
  min: 0,
  max: 9999,
  integer: true
});
let domain = "";
const car_number = `鄂A${carLastNumber}`;
const order_no = Date.now() - Number.parseInt(rn() * 1000);

shell(async answers => {
  console.log(answers);
  const { env, JSESSIONID } = answers;

  domain = env === '测试环境' ? 'test.newreborn.rebornauto.cn' : 'newreborn.rebornauto.cn';
  const getCarNoHandle = async () => {
    const resp = await fetch(
      `https://${domain}/FHM_car300/save/notify_remote_price_result.do`,
      {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...car300Info,
          car_number,
          order_no
        })
      }
    );
    const json = await resp.json();
    return json;
  };
  const browser = await puppeteer.launch({
    headless: false
  });

  const page = await browser.newPage();
  // console.log(JSESSIONID);
  const cookies = [
    {
      name: "JSESSIONID",
      value: JSESSIONID,
      domain
    }
  ];
  await page.setViewport({
    width: 1180,
    height: 600
  });
  await page.setCookie(...cookies);
  await page.goto(`https://${domain}/FHM_car300/storeAudit/insertCustomer.do`);

  // console.log(mockData);

  try {
    if (!(await page.$("#dropdown1"))) {
      throw new Error("请先登录");
    }
    const { msg = "", status } = await getCarNoHandle();
    console.log(status);
    if (status != 1) {
      console.log(msg["red"]);
      throw new Error(msg);
    }

    const table = new Table();
    table.push({ car_number }, { order_no });

    console.log(table.toString());

    const { body = [] } = mockData;
    const mockList = body.filter(item => item.key);
    for (let i = 0; i < mockList.length; i++) {
      const { key, type, value, options } = mockList[i];

      if (type === "input") {
        if (key === "carNumber") {
          await page.type(`#${key}`, car_number);
        } else {
          await page.type(`#${key}`, value + "");
        }
      }

      if (type === "select") {
        await page.select(`#${key}`, options);
      }

      if (type === "inputRegion") {
        await page.evaluate(
          ($key, $value) => {
            $(`#${$key}`).citypicker("destroy");
            const [province, city, district] = $value.split("/");
            $(`#${$key}`).citypicker({
              province,
              city,
              district
            });
          },
          key,
          value
        );
      }

      if (type === "checkBox") {
        await page.evaluate(
          ($key, $value) => {
            $(`#${$key}`).click();
          },
          key,
          value
        );
      }

      if (type === "inputUpload") {
        const file = await page.$(`#${key} input[type=file]`);
        const stauts = await file.uploadFile(...["test.png"]);
      }
    }
  } catch (e) {
    console.log(e.toString().red);
    await page.close();
    await browser.close();
  } finally {
  }
});
